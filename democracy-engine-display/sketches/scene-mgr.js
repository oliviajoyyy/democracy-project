
var mgr;
var buttonDiv;

//loaded assets
var helvFont;

// colors
var bColor; // = "#012244";
var pColor; // = "#3c1b36";
var textColor;
var barDark;

// json
var configJSON;
var colorConfig;

// hardware
var port;
var connectBtn;
var enableHardware = true;

function preload() {
  helvFont = loadFont('../democracy-engine-congressional-simulator/assets/font/HelveticaNeue-Regular.otf');
  configJSON = loadJSON('../../democracy-engine-congressional-simulator/config/config.json');
  console.log(configJSON);
}


function setup() {
  colorConfig = configJSON.cssParams;
  bColor = colorConfig.background;
  pColor = colorConfig.button;
  textColor = colorConfig.text;
  barDark = colorConfig.barDark;
  document.body.style.backgroundColor = bColor;
  buttonDiv = document.getElementById('button-div');

  noStroke();
  mgr = new SceneManager();
  // mgr.addScene(startUp);
  // mgr.addScene(startSession);
  // mgr.addScene(hardwareTest);
  // mgr.addScene(aboutProject);
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

  let usedPorts = usedSerialPorts();
  console.log(usedPorts);
  if (usedPorts.length > 0) {
    port.open(usedPorts[0],9600);

  }
}

var hardwareHide = false;
var hardwareShow = false;
var hardwareNextPane = false;
var hardwarePrevPane = false;
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
        }
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
        }
      }
      hardwareShow = false;
    }
  } 
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
