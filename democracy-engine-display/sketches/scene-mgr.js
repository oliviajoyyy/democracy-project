
//V1 TO DO
//Work on Diplay Text Design (transparen overlay)
//Resize User input boxes
//GUI for User input?

//TO DO - These require a configuration of the Logic. A potential future project. The code will be made available via Github
// Allow users to change the number of decision-making units:
// Allow users to change the configuration and logical interdependencies of decision-making units:
// see: https://docs.google.com/document/d/118letZLbFm9D3QhtOtrdhQvJU4OJxYWr6OiAuUlJTjA/edit?usp=sharing

var mgr;
var engine;
var visual;
var buttonDiv;

// text display
let mainText;
let headerText;
let subHeaderText;
let simInfoText;
let userOutputText;

//loaded assets
var helvFont;

// colors
var bColor; // = "#012244";
var pColor; // = "#3c1b36";
var textColor;
var colorOverlay;
var rectColor;
var rectColor2;
var rectColor3;
var barDark;
var majorityBar;
var superBar;

// json
var configJSON;
var govtConfig;
var colorConfig;
var historicalActs; // array of 10 bills

var port;
var connectBtn;
var enableHardware = true;

function preload() {
  helvFont = loadFont('../democracy-engine-congressional-simulator/assets/font/HelveticaNeue-Regular.otf');
  // loadingImage = loadImage('../democracy-engine-congressional-simulator/assets/gears-icon.png');
  // enterImage = loadImage('../democracy-engine-congressional-simulator/assets/asraProgress.png');
  // checkImage = loadImage('../democracy-engine-congressional-simulator/assets/check-mark-bkg-col.svg'); // check with color of bkg for voting members
  configJSON = loadJSON('../../democracy-engine-congressional-simulator/config/config.json');
  
  console.log(configJSON);
}


function setup() {
  // createCanvas(windowWidth*.8, windowHeight*.8);
  // rectMode(CENTER);
  govtConfig = configJSON.defaultConfig;
  colorConfig = configJSON.cssParams;
  historicalActs = configJSON.historicalActs
  bColor = colorConfig.background;
  pColor = colorConfig.button;
  textColor = colorConfig.text;
  colorOverlay = colorConfig.textOverlay;
  rectColor = colorConfig.rectColor;
  rectColor2 = colorConfig.rectColor2;
  rectColor3 = colorConfig.rectColor3;
  barDark = colorConfig.barDark;
  majorityBar = colorConfig.majorityBar;
  superBar = colorConfig.supermajorityBar;
  document.body.style.backgroundColor = bColor;
  //document.header.style.backgroundColor = bColor;
  // engine = new DemocracyEngine(govtConfig, historicalActs); // OC create engine object to run voting logic
  // visual = new VoteVisual(loadingImage, checkImage, bColor, pColor, textColor, rectColor, rectColor2, rectColor3, majorityBar, superBar);
  // setDefaultUserVars(); // set user vars to params from config file
  buttonDiv = document.getElementById('button-div');

  noStroke();
  mgr = new SceneManager();
  mgr.addScene(startUp);
  mgr.addScene(startSession);
  mgr.addScene(hardwareTest);
  mgr.addScene(aboutProject);
  mgr.addScene(sSessionVis);
  mgr.showNextScene();
  mgr.showScene(sSessionVis);
  
  if (enableHardware) {
  hardwareSetup();
  }
  noCanvas();
  console.log("end of scene-mgr.js setup");
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

function hardwareSetup() {
  port = createSerial();

  // in setup, we can open ports we have used previously
  // without user interaction

  let usedPorts = usedSerialPorts();
  console.log(usedPorts);
  if (usedPorts.length > 0) {
    port.open(usedPorts[0],9600);

  }

  // any other ports can be opened via a dialog after
  // user interaction (see connectBtnClick below)

  // connectBtn = createButton('Connect to Arduino');
  // connectBtn.position(80, 450);
  // connectBtn.mousePressed(connectBtnClick);

  // let sendBtn = createButton('Blink Led');
  // sendBtn.position(500, 450);
  // sendBtn.mousePressed(sendBtnClick);
}


var hardwareHideShow = false;
var hardwareHide = false;
var hardwareShow = false;
var hardwareNextPane = false;
var hardwarePrevPane = false;
var hardwareUpdate = false;
var hCycle = false;
var hLeftBtn = false;
var hardwareLeftBtn = false;
var hMidBtn = false;
var hardwareMidBtn = false;
var hRightBtn = false;
var hardwareRightBtn = false;

function checkHardwareInput() {
  if (!port) {
    return;
  }
  let arr = port.readBytes(14); 

  // these scenes only use the middle button
  if (mgr.isCurrent(aboutProject)) {
    //let arr = port.readBytes(14); 
    if (arr[10] == 200) { // middle btn
      hardwareMidBtn = true;
    } else if (arr[10] == 0) {
      if (hardwareMidBtn == true) {
        hMidBtn = true;
      }
      hardwareMidBtn = false;
    }
  } else

  // these scenes use only the left and right buttons
  if (mgr.isCurrent(startUp) || mgr.isCurrent(startSession)) {
    //let arr = port.readBytes(14); 
    if (arr[9] == 200) { // left btn
      hardwareLeftBtn = true;
    } else if (arr[9] == 0) {
      if (hardwareLeftBtn == true) {
        hLeftBtn = true;
      }
      hardwareLeftBtn = false;
    }

    if (arr[11] == 200) { // right btn
      hardwareRightBtn = true;
    } else if (arr[10] == 0) {
      if (hardwareRightBtn == true) {
        hRightBtn = true;
      }
      hardwareRightBtn = false;
    }
  } else
  if (mgr.isCurrent(sSessionVis)) {
    // if (arr[7] == 200 && arrPrev != 200) {
    //   arrPrev = 0;
    //   nextPane();
    // }

    // left joystick or left button to go to prev pane
    if (arr[6] == 200 || arr[9] == 200) {
      hardwarePrevPane = true;
    } else if (arr[6] == 0 || arr[9] == 0) {
      if (hardwarePrevPane == true) {
        // previousPane();
      }
      hardwarePrevPane = false;
    }

    // right joystick or right button to go to next pane
    if (arr[6] == 100 || arr[11] == 200) {
      hardwareNextPane = true;
    } else if (arr[6] == 0 || arr[11] == 0) {
      if (hardwareNextPane == true) {
        // nextPane();
      }
      hardwareNextPane = false;
    }

    // joy up to hide pane when == 200 (can swap to joy down to hide - change to == 100 )
    if (arr[7] == 100) {
      hardwareHide = true;
    } else if (arr[7] == 0) {
      if (hardwareHide == true) {
        if (showPanesBool == true) {
          showPanesBool = false;
        } //else {
        //   showPanesBool = true;
        // }
      }
      hardwareHide = false;
    }

    // joy down to show pane when == 100 (can swap to joy up to show - change to == 200 )
    if (arr[7] == 200) {
      hardwareShow = true;
    } else if (arr[7] == 0) {
      if (hardwareShow == true) {
        if (showPanesBool == false) {
          showPanesBool = true;
        } //else {
        //   showPanesBool = true;
        // }
      }
      hardwareShow = false;
    }
  } 
}

function getAllSessions() {
  var sessionsArr;
  getSessions().then((result) => {
    console.log(result);
    sessionsArr = result;
  });
  return sessionsArr;
}

function roundNum(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function keyPressed() {
  if (keyCode == RETURN) {
    if (showPanesBool == false) {
      showPanesBool = true;
    }
    else {
      showPanesBool = false;
    }
  } else if (key == '.' || key == '>') {//else if (keyCode == RIGHT_ARROW) {
    // nextPane();
  } else if (key == ',' || key == '<') {//else if (keyCode == LEFT_ARROW) {
    // previousPane();
  }
  keyCode == null;
  key = '';
}
