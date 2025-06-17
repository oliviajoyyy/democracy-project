
var mgr;
var engine;
var visual;
var buttonDiv;

// text display
let userOutputText;

//loaded assets
var helvFont;
var loadingImage;
var enterImage;
var checkImage;

//user input variables
var userNumLegislative; // number of legislative bodies (1-3)

var userNumHouse;
var userPerHouseBody = []; // array for % of members in each party [0] = party a

var userNumHouse2;
var userPerHouse2Body = [];

var userNumSenate;
var userPerSenateBody = [];

var userNumPres;
var userPerPresBody = [];

var userNumVP;
var userPerVPBody = [];

var userNumParties;

var userBodyPass;
var userSuperThresh;

var userRepYaythresh;
var userDemYaythresh;
var userIndYaythresh;
var userEditCount = 0;

var reconfigBool = true;

// colors
var bColor;
var pColor;
var textColor;
var colorOverlay;
var rectColor;
var rectColor2;
var rectColor3;
var majorityBar;
var superBar;

// json
var configJSON;
var govtConfig;
var colorConfig;
var historicalActs; // array of 10 bills
var loadedConfig;

// db values
var sessionObj; // session obj holds array of json configurations, which holds array of json results
var configs = []; // array of json govt config attempts (up to 10)
var results = []; // array of (10) json results (updated for each new config)
var finalConfig = {};
var finalConfigObj = {
  config: finalConfig, // the 10th config of the history
  ownerEndorsement: 0,
  publicEndorsement: 0 };
var sessionID;
var versionVal; // options in config.json file (first in array is web v1.0): "web v1.0", "ICA kiosk v1.0",  ... 

// to keep track of array indicies
var configIX = 0;
var resultIX = 0;
var MAX_CONFIG_ATTEMPTS = 10; // 10th config is final config
var MAX_SIM_RESULTS = 12; // run simulation 12 times for the 12 benchmarking tests

var showPanesBool = true;

// for hardware
var port;
var connectBtn;
var enableHardware = false; // kiosk flag (set in democracy-engine-kiosk/kiosk-setup.js) sets to true

// for time out
var timeLastActive; // millis since last button clicked
var timeOutAmt = 480000; // 1 minute = 60000 milliseconds, 8 minutes = 480000 ms

function preload() {
  helvFont = loadFont('../democracy-engine-congressional-simulator/assets/font/HelveticaNeue-Regular.otf');
  loadingImage = loadImage('../democracy-engine-congressional-simulator/assets/gears-icon.png');
  enterImage = loadImage('../democracy-engine-congressional-simulator/assets/asraProgress.png');
  checkImage = loadImage('../democracy-engine-congressional-simulator/assets/check-mark-bkg-col.svg'); // check mark with color of bkg for voting members
  configJSON = loadJSON('../democracy-engine-congressional-simulator/config/config.json');
  
  console.log(configJSON);
}


function setup() {
  // check kiosk flag to enable hardware if 'true'
  var kioskFlag = sessionStorage.getItem('kioskFlag');
  if (kioskFlag == 'true') {
    enableHardware = true;
    // TODO - set versionVal to field selected on kiosk version start page
  } else {
    enableHardware = false;
    versionVal = configJSON.versionOptions[0]; // [0] is web v1.0
    console.log("version val: " + versionVal);
  }

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
  majorityBar = colorConfig.majorityBar;
  superBar = colorConfig.supermajorityBar;
  document.body.style.backgroundColor = bColor;
  //document.header.style.backgroundColor = bColor;
  engine = new DemocracyEngine(govtConfig, historicalActs); // OC create engine object to run voting logic
  visual = new VoteVisual(loadingImage, checkImage, bColor, pColor, textColor, rectColor, rectColor2, rectColor3, majorityBar, superBar);
  setDefaultUserVars(); // set user vars to params from config file
  buttonDiv = document.getElementById('button-div');

  noStroke();
  mgr = new SceneManager();
  if (enableHardware) {
    mgr.addScene(startUp);
    mgr.addScene(hardwareTest);
  }
  mgr.addScene(startSession);
  mgr.addScene(aboutProject);
  mgr.addScene(newSessionScene);
  mgr.addScene(loadSessionS1);
  mgr.addScene(sBodies);
  mgr.addScene(sLegislative);
  mgr.addScene(sParties);
  mgr.addScene(sMembersFirstChamber);
  mgr.addScene(sMembersSecondChamber);
  mgr.addScene(sMembersThirdChamber);
  mgr.addScene(sMembersVP);
  mgr.addScene(sMembersPres);
  mgr.addScene(sBodyPass);
  mgr.addScene(sYesVotes);
  mgr.addScene(sVote);
  mgr.addScene(sBenchmarkPane);
  mgr.addScene(sBenchmarkResults);
  mgr.addScene(sEndorse);
  mgr.addScene(sSaveResults);
  mgr.addScene(sComplete);
  mgr.showNextScene();
  
  if (enableHardware) {
  hardwareSetup();
  }

  timeLastActive = millis(); // initial activity starts

  console.log("end of scene-mgr.js setup");
}

var arr; // global reading from hardware
function draw() {
  if (enableHardware) {
    arr = port.readBytes(14);
  }
  
  mgr.draw();

  // for kiosk versions only (checks flag enableHardware)
  // constantly checks time since last active, goes back to start screen if determined to be inactive
  if (enableHardware && !mgr.isCurrent(startSession) && !mgr.isCurrent(startUp) && !mgr.isCurrent(hardwareTest) && inactive()) {
    mgr.showScene(startSession); // goes back to start page startSession
  }
}

function mousePressed() {
  //lastActive(); // enables timeout for mouse clicks
  mgr.mousePressed();
}

function hardwareSetup() {
  port = createSerial();

  // in setup, we can open ports we have used previously
  // without user interaction

  let usedPorts = usedSerialPorts();
  console.log(usedPorts);
  // if (!port.opened()) {
  //   //  port.open('Arduino', 57600);
  //     port.open(115200);
  //   } else {
  //     port.close();
  //   }
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


/**
 * Tracks last activity time using millis()
 */
function lastActive() {
  //console.log('time last active before button click: ' + timeLastActive);
  // set time of last activity (any hardware interaction)
  timeLastActive = millis();
  //console.log('time last active now: ' + timeLastActive);
}

/**
 * Checks activity status
 * @returns false if last active was less than timeout period, true if last active was longer than timeout period
 */
function inactive() {
  console.log('checking inactivity, time lastActive' + timeLastActive);
  // check if time since last active is longer than timeOut period
  if (millis() - timeLastActive >= timeOutAmt) {
    //console.log('true: millis since last active: ' + (millis() -timeLastActive));
    // timeLastActive = millis();
    return true;
  }
  return false;
}

// vars for hardware controls 
var arrPrev = 200;
var movePanes = true;
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

/**
 * Enables hardware controls for specific scenes
 * Checks for button clicks and joystick movements for active buttons on each page.
 * Tracks time last active when active buttons are clicked.
 */
function checkHardwareInput() {
  if (!port) {
    console.log("no port");
    return;
  }
  //let arr = port.readBytes(14); 

  // these scenes use the left, right, middle btns
  if (mgr.isCurrent(startSession) || mgr.isCurrent(loadSessionS1) || mgr.isCurrent(sEndorse)) {
    //let arr = port.readBytes(14); 

    if (arr[9] == 200) { // left btn pressed down
      // indicate button was clicked on UI
      if (mgr.isCurrent(startSession)) {
        document.getElementById('about-btn-a02').classList.add('btn-active');
      } else if (mgr.isCurrent(loadSessionS1)) {
        document.getElementById('back-btn-b02').classList.add('btn-active');
      } else if (mgr.isCurrent(sEndorse)) {
        document.getElementById('restart-btn-c03').classList.add('btn-active');
      }
      hardwareLeftBtn = true;
      lastActive(); // track time of last activity 

    } else if (arr[9] == 0) { // left btn not pressed down
      // return button indication back to normal
      if (mgr.isCurrent(startSession)) {
        document.getElementById('about-btn-a02').classList.remove('btn-active');
      } else if (mgr.isCurrent(loadSessionS1)) {
        document.getElementById('back-btn-b02').classList.remove('btn-active');
      } else if (mgr.isCurrent(sEndorse)) {
        document.getElementById('restart-btn-c03').classList.remove('btn-active');
      }

      // after one click, allow it to do as its supposed to in the scene
      if (hardwareLeftBtn == true) {
        hLeftBtn = true; // indicates button was clicked once
      }
      hardwareLeftBtn = false;
    }

    if (arr[10] == 200) { // middle btn pressed down
      if (mgr.isCurrent(startSession)) {
        document.getElementById('load-session-btn-a02').classList.add('btn-active');
      } else if (mgr.isCurrent(loadSessionS1)) {
        document.getElementById('show-btn-b02').classList.add('btn-active');
      } else if (mgr.isCurrent(sEndorse)) {
        document.getElementById('approve-btn').classList.add('btn-active');
      }
      hardwareMidBtn = true;
      lastActive(); // track time of last activity

    } else if (arr[10] == 0) { // middle btn not pressed down
      if (mgr.isCurrent(startSession)) {
        document.getElementById('load-session-btn-a02').classList.remove('btn-active');
      } else if (mgr.isCurrent(loadSessionS1)) {
        document.getElementById('show-btn-b02').classList.remove('btn-active');
      } else if (mgr.isCurrent(sEndorse)) {
        document.getElementById('approve-btn').classList.remove('btn-active');
      }
      if (hardwareMidBtn == true) {
        hMidBtn = true; // one button click 
      }
      hardwareMidBtn = false;
    }

    if (arr[11] == 200) { // right btn pressed down
      if (mgr.isCurrent(startSession)) {
        document.getElementById('new-session-btn-a02').classList.add('btn-active');
      } else if (mgr.isCurrent(loadSessionS1)) {
        document.getElementById('next-btn-b02').classList.add('btn-active');
      } else if (mgr.isCurrent(sEndorse)) {
        document.getElementById('save-summary-btn-c03').classList.add('btn-active');
      }
      hardwareRightBtn = true;
      lastActive(); // track time of last activity

    } else if (arr[10] == 0) { // right btn not pressed down
      if (mgr.isCurrent(startSession)) {
        document.getElementById('new-session-btn-a02').classList.remove('btn-active');
      } else if (mgr.isCurrent(loadSessionS1)) {
        document.getElementById('next-btn-b02').classList.remove('btn-active');
      } else if (mgr.isCurrent(sEndorse)) {
        document.getElementById('save-summary-btn-c03').classList.remove('btn-active');
      }
      if (hardwareRightBtn == true) {
        hRightBtn = true;
      }
      hardwareRightBtn = false;
    }

  } else

  // these scenes use only the middle button
  if (mgr.isCurrent(aboutProject) || mgr.isCurrent(sComplete)) {
    //let arr = port.readBytes(14); 
    if (arr[10] == 200) { // middle btn
      if (mgr.isCurrent(aboutProject)) {
        document.getElementById('back-btn-a04').classList.add('btn-active');
      } else if (mgr.isCurrent(sComplete)) {
        document.getElementById('restart-btn-c05').classList.add('btn-active');
      }
      hardwareMidBtn = true;
      lastActive(); // track time of last activity

    } else if (arr[10] == 0) {
      if (mgr.isCurrent(aboutProject)) {
        document.getElementById('back-btn-a04').classList.remove('btn-active');
      } else if (mgr.isCurrent(sComplete)) {
        document.getElementById('restart-btn-c05').classList.remove('btn-active');
      }
      if (hardwareMidBtn == true) {
        hMidBtn = true;
      }
      hardwareMidBtn = false;
    }
  } else

  // these scenes use only the left and right buttons
  if (mgr.isCurrent(startUp) || mgr.isCurrent(newSessionScene) || mgr.isCurrent(sBenchmarkResults) || mgr.isCurrent(sSaveResults)) {
    //let arr = port.readBytes(14); 
    if (arr[9] == 200) { // left btn
      if (mgr.isCurrent(newSessionScene)) {
        document.getElementById('back-btn-b01').classList.add('btn-active');
      } else if (mgr.isCurrent(sBenchmarkResults)) {
        document.getElementById('restart-btn-c02').classList.add('btn-active');
      } else if (mgr.isCurrent(sSaveResults)) {
        document.getElementById('restart-btn-c04').classList.add('btn-active');
      }
      hardwareLeftBtn = true;
      lastActive(); // track time of last activity

    } else if (arr[9] == 0) {
      if (mgr.isCurrent(newSessionScene)) {
        document.getElementById('back-btn-b01').classList.remove('btn-active');
      } else if (mgr.isCurrent(sBenchmarkResults)) {
        document.getElementById('restart-btn-c02').classList.remove('btn-active');
      } else if (mgr.isCurrent(sSaveResults)) {
        document.getElementById('restart-btn-c04').classList.remove('btn-active');
      }
      if (hardwareLeftBtn == true) {
        hLeftBtn = true;
      }
      hardwareLeftBtn = false;
    }

    if (arr[11] == 200) { // right btn
      if (mgr.isCurrent(newSessionScene)) {
        document.getElementById('next-btn-b01').classList.add('btn-active');
      } else if (mgr.isCurrent(sBenchmarkResults)) {
        document.getElementById('to-eval-btn-c02').classList.add('btn-active');
      } else if (mgr.isCurrent(sSaveResults)) {
        document.getElementById('save-btn').classList.add('btn-active');
      }
      hardwareRightBtn = true;
      lastActive(); // track time of last activity

    } else if (arr[10] == 0) {
      if (mgr.isCurrent(newSessionScene)) {
        document.getElementById('next-btn-b01').classList.remove('btn-active');
      } else if (mgr.isCurrent(sBenchmarkResults)) {
        document.getElementById('to-eval-btn-c02').classList.remove('btn-active');
      } else if (mgr.isCurrent(sSaveResults)) {
        document.getElementById('save-btn').classList.remove('btn-active');
      }
      if (hardwareRightBtn == true) {
        hRightBtn = true;
      }
      hardwareRightBtn = false;
    }
  } 
  
  // slider scenes
  if (mgr.isCurrent(sBodies) || mgr.isCurrent(sLegislative) || mgr.isCurrent(sParties) || mgr.isCurrent(sMembersFirstChamber) || 
  mgr.isCurrent(sMembersSecondChamber) || mgr.isCurrent(sMembersThirdChamber) || mgr.isCurrent(sMembersVP) || mgr.isCurrent(sMembersPres) || 
  mgr.isCurrent(sBodyPass) || mgr.isCurrent(sYesVotes) || mgr.isCurrent(sVote) || mgr.isCurrent(sBenchmarkPane) ) {
    
    //let arr = port.readBytes(14); 

    // left joystick or left button to go to prev pane
    if (arr[6] == 200 || arr[9] == 200) {
      hardwarePrevPane = true;
      document.getElementById('prev-pane-btn').classList.add('btn-active');
    } else if (arr[6] == 0 || arr[9] == 0) {
      document.getElementById('prev-pane-btn').classList.remove('btn-active');
      if (hardwarePrevPane == true) {
        previousPane();
      }
      hardwarePrevPane = false;
      lastActive(); // track time of last activity
    }

    // right joystick or right button to go to next pane
    if (arr[6] == 100 || arr[11] == 200) {
      hardwareNextPane = true;
      if (!mgr.isCurrent(sBenchmarkPane) && document.getElementById('next-pane-btn')) {
      document.getElementById('next-pane-btn').classList.add('btn-active');
      }
      lastActive(); // track time of last activity

    } else if (arr[6] == 0 || arr[11] == 0) {
      if (!mgr.isCurrent(sBenchmarkPane) && document.getElementById('next-pane-btn')) {
      document.getElementById('next-pane-btn').classList.remove('btn-active');
      }
      if (hardwareNextPane == true) {
        nextPane();
      }
      hardwareNextPane = false;
    }

    // joy up to hide pane when == 200 (can swap to joy down to hide - change to == 100 )
    if (arr[7] == 100) {
      hardwareHide = true;
      lastActive(); // track time of last activity
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
      lastActive(); // track time of last activity
    } else if (arr[7] == 0) {
      if (hardwareShow == true) {
        if (showPanesBool == false) {
          showPanesBool = true;
        } 
      }
      hardwareShow = false;
    }

    // update button on joystick
    // there are functions in specific scenes that are called when this button is clicked (hardwareUpdate = true)
    if (arr[8] == 200 || arr[10] == 200) {
      if (mgr.isCurrent(sVote) && document.getElementById('vote-btn')) {
        document.getElementById('vote-btn').classList.add('btn-active');
      } else if (document.getElementById('update-btn')) {
        document.getElementById('update-btn').classList.add('btn-active');
      }
      hardwareUpdate = true;
      lastActive(); // track time of last activity

    } else if (arr[8] == 0 || arr[10] == 0) {

      if (mgr.isCurrent(sVote) && document.getElementById('vote-btn')) {
        document.getElementById('vote-btn').classList.remove('btn-active');
      } else if (document.getElementById('update-btn')) {
        document.getElementById('update-btn').classList.remove('btn-active');
      }
      hardwareUpdate = false;
    }

    if (mgr.isCurrent(sBenchmarkPane)) {
      //let arr = port.readBytes(14); 
      if (arr[11] == 200) { // right btn
        if (document.getElementById('benchmark-btn')) {
          document.getElementById('benchmark-btn').classList.add('btn-active');
        }
        hardwareRightBtn = true;
        lastActive(); // track time of last activity

      } else if (arr[10] == 0) {
        if (document.getElementById('benchmark-btn')) {
          document.getElementById('benchmark-btn').classList.remove('btn-active');
        }
        if (hardwareRightBtn == true) {
          hRightBtn = true;
        }
        hardwareRightBtn = false;
      }
    }
  }
}

/**
 * Show next pane scene, to control order.
 * De-activates indication on current dot on progress.
 */
function nextPane() {
  if (mgr.isCurrent(sBodies)) {
    document.getElementById('dot-p01').className = 'dot'; // de-activate dot on pane before moving to next pane
    mgr.showScene(sLegislative);
  } else if (mgr.isCurrent(sLegislative)) {
    document.getElementById('dot-p02').className = 'dot';
    mgr.showScene(sParties);
  } else if (mgr.isCurrent(sParties)) {
    document.getElementById('dot-p03').className = 'dot';
    mgr.showScene(sMembersFirstChamber);
  } else if (mgr.isCurrent(sMembersFirstChamber) && userNumLegislative == 1) { 
    document.getElementById('dot-p04').className = 'dot';
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sMembersFirstChamber) && userNumLegislative >= 2) {
    document.getElementById('dot-p04').className = 'dot';
    mgr.showScene(sMembersSecondChamber);
  } else if (mgr.isCurrent(sMembersSecondChamber) && userNumLegislative == 3) {
    document.getElementById('dot-p05').className = 'dot';
    mgr.showScene(sMembersThirdChamber);
  } else if (mgr.isCurrent(sMembersSecondChamber) && userNumLegislative == 2) {
    document.getElementById('dot-p05').className = 'dot';
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sMembersThirdChamber)) {
    document.getElementById('dot-p06').className = 'dot';
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sMembersVP)) {
    document.getElementById('dot-p07').className = 'dot';
    mgr.showScene(sMembersPres);
    document.getElementById('dot-p08').className = 'dot';
  } else if (mgr.isCurrent(sMembersPres)) {
    document.getElementById('dot-p08').className = 'dot';
    mgr.showScene(sBodyPass);
  } else if (mgr.isCurrent(sBodyPass)) {
    document.getElementById('dot-p09').className = 'dot';
    mgr.showScene(sYesVotes);
  } else if (mgr.isCurrent(sYesVotes)) {
    document.getElementById('dot-p10').className = 'dot';
    mgr.showScene(sVote);
  }  else if (mgr.isCurrent(sVote)) {
    mgr.showScene(sBenchmarkPane);
  } 
}

/**
 * Show previous pane scene.
 * De-activates current dot indication.
 */
function previousPane() {
  if (mgr.isCurrent(sLegislative)) {
    document.getElementById('dot-p02').className = 'dot'; // deactivate dot on pane before moving to next pane
    mgr.showScene(sBodies);
  } else if (mgr.isCurrent(sParties)) {
    document.getElementById('dot-p03').className = 'dot';
    mgr.showScene(sLegislative);
  } else if (mgr.isCurrent(sMembersFirstChamber)) {
    document.getElementById('dot-p04').className = 'dot';
    mgr.showScene(sParties);
  } else if (mgr.isCurrent(sMembersSecondChamber)) {
    document.getElementById('dot-p05').className = 'dot';
    mgr.showScene(sMembersFirstChamber);
  } else if (mgr.isCurrent(sMembersThirdChamber)) {
    document.getElementById('dot-p06').className = 'dot';
    mgr.showScene(sMembersSecondChamber);
  } else if (mgr.isCurrent(sMembersVP) && userNumLegislative == 1) {
    document.getElementById('dot-p07').className = 'dot';
    mgr.showScene(sMembersFirstChamber);
  } else if (mgr.isCurrent(sMembersVP) && userNumLegislative == 2) {
    document.getElementById('dot-p07').className = 'dot';
    mgr.showScene(sMembersSecondChamber);
  } else if (mgr.isCurrent(sMembersVP) && userNumLegislative == 3) {
    document.getElementById('dot-p07').className = 'dot';
    mgr.showScene(sMembersThirdChamber);
  } else if (mgr.isCurrent(sMembersPres)) {
    document.getElementById('dot-p08').className = 'dot';
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sBodyPass)) {
    document.getElementById('dot-p09').className = 'dot';
    mgr.showScene(sMembersPres);
  } else if (mgr.isCurrent(sYesVotes)) {
    document.getElementById('dot-p10').className = 'dot';
    mgr.showScene(sBodyPass);
  } else if (mgr.isCurrent(sVote)) {
    if (visualizeVote) {
      background(bColor);
      // reset values for calculations and drawings
      //engine.completeReset();
      visual.completeReset();
      reconfigBool = true;
    }
    mgr.showScene(sYesVotes);
  } else if (mgr.isCurrent(sBenchmarkPane)) {
    mgr.showScene(sVote);
  }
}

// might not work for fullscreen
// function windowResized() {
//   resizeCanvas(windowWidth*8, windowHeight*8);
// }

/**
 * Set user vars to default config of govt json
 */
function setDefaultUserVars() {
  userNumLegislative = govtConfig.numLegislativeBodies;
  userNumParties = govtConfig.numParties;

  userNumHouse = govtConfig.chamber1.totalMembers;
  userPerHouseBody[0] = govtConfig.chamber1.partyA / userNumHouse;
  userPerHouseBody[1] = govtConfig.chamber1.partyB / userNumHouse;
  userPerHouseBody[2] = govtConfig.chamber1.partyC / userNumHouse;

  userNumHouse2 = govtConfig.chamber2.totalMembers;
  userPerHouse2Body[0] = govtConfig.chamber2.partyA / userNumHouse2;
  userPerHouse2Body[1] = govtConfig.chamber2.partyB / userNumHouse2;
  userPerHouse2Body[2] = govtConfig.chamber2.partyC / userNumHouse2;

  userNumSenate = govtConfig.chamber3.totalMembers;
  if (userNumSenate == 0) { // if no members in chamber 3, set values to 0
    userPerSenateBody[0] = 0;
    userPerSenateBody[1] = 0;
    userPerSenateBody[2] = 0;
  } else {
    userPerSenateBody[0] = govtConfig.chamber3.partyA / userNumSenate;
    userPerSenateBody[1] = govtConfig.chamber3.partyB / userNumSenate;
    userPerSenateBody[2] = govtConfig.chamber3.partyC / userNumSenate;
  }

  userNumVP = govtConfig.vicePres.totalMembers;
  userPerVPBody[0] = govtConfig.vicePres.partyA / userNumVP;
  userPerVPBody[1] = govtConfig.vicePres.partyB / userNumVP;
  userPerVPBody[2] = govtConfig.vicePres.partyC / userNumVP;

  userNumPres = govtConfig.president.totalMembers;
  userPerPresBody[0] = govtConfig.president.partyA / userNumPres;
  userPerPresBody[1] = govtConfig.president.partyB / userNumPres;
  userPerPresBody[2] = govtConfig.president.partyC / userNumPres;

  userBodyPass = govtConfig.percentMajority;
  userSuperThresh = govtConfig.percentSupermajority;

  userDemYaythresh = govtConfig.probabilityYesVote.partyA;
  userRepYaythresh = govtConfig.probabilityYesVote.partyB;
  userIndYaythresh = govtConfig.probabilityYesVote.partyC;

}

/**
 * Set user vars to loaded config
 * @param {*} lConfig - the object for the loaded configuration
 */
function setLoadedUserVars(lConfig) {
  userNumLegislative = lConfig.numLegislativeBodies;
  userNumParties = lConfig.numParties;

  userNumHouse = lConfig.chamber1.totalMembers;
  userPerHouseBody[0] = lConfig.chamber1.partyA;
  userPerHouseBody[1] = lConfig.chamber1.partyB;
  userPerHouseBody[2] = lConfig.chamber1.partyC;

  userNumHouse2 = lConfig.chamber2.totalMembers;
  userPerHouse2Body[0] = lConfig.chamber2.partyA;
  userPerHouse2Body[1] = lConfig.chamber2.partyB;
  userPerHouse2Body[2] = lConfig.chamber2.partyC;

  userNumSenate = lConfig.chamber3.totalMembers;
  userPerSenateBody[0] = lConfig.chamber3.partyA;
  userPerSenateBody[1] = lConfig.chamber3.partyB;
  userPerSenateBody[2] = lConfig.chamber3.partyC;

  userNumVP = lConfig.vicePres.totalMembers;
  userPerVPBody[0] = lConfig.vicePres.partyA;
  userPerVPBody[1] = lConfig.vicePres.partyB;
  userPerVPBody[2] = lConfig.vicePres.partyC;

  userNumPres = lConfig.president.totalMembers;
  userPerPresBody[0] = lConfig.president.partyA;
  userPerPresBody[1] = lConfig.president.partyB;
  userPerPresBody[2] = lConfig.president.partyCs;

  userBodyPass = lConfig.percentMajority * 100;
  userSuperThresh = lConfig.percentSupermajority * 100;

  userDemYaythresh = lConfig.probabilityYesVote.partyA * 100;
  userRepYaythresh = lConfig.probabilityYesVote.partyB * 100;
  userIndYaythresh = lConfig.probabilityYesVote.partyC * 100;
}

/**
 * Set engine params to user vars
 * @param {*} engine - the engine object to be set to user vars
 */
function setEngineParams(engine) {
  engine.numBodies = 5; // up to 5 voting bodies
  engine.numLegislativeBodies = parseFloat(userNumLegislative);
  engine.numParties = userNumParties;

  engine.numHouse = userNumHouse;
  //Demographics of House as decimal percentages 1 = 100%
  engine.perDemHouse = userPerHouseBody[0];
  engine.perRepHouse = userPerHouseBody[1];
  engine.perIndHouse = userPerHouseBody[2];
  
  engine.numHouse2 = userNumHouse2;
  //Demographics of House 2 as decimal percentages 1 = 100%
  engine.perDemHouse2 = userPerHouse2Body[0];
  engine.perRepHouse2 = userPerHouse2Body[1];
  engine.perIndHouse2 = userPerHouse2Body[2];

  engine.numSenate = userNumSenate;
  //Demographics of Senate as decimal percentages 1 = 100%
  engine.perDemSenate = userPerSenateBody[0];
  engine.perRepSenate = userPerSenateBody[1];
  engine.perIndSenate = userPerSenateBody[2];

  engine.numVP = userNumVP;
  //Demographics of Vice President as decimal percentages
  engine.perDemVP = userPerVPBody[0];
  engine.perRepVP = userPerVPBody[1];
  engine.perIndVP = userPerVPBody[2];

  engine.numPres = userNumPres;
  //Demographics of President as decimal percentages 1 = 100%
  engine.perDemPres = userPerPresBody[0];
  engine.perRepPres = userPerPresBody[1];
  engine.perIndPres = userPerPresBody[2];

  //supermajority Cutoff for override of presidential veto
  engine.superThresh = parseFloat(userSuperThresh) / 100.0;
  // console.log("superThresh: " + engine.superThresh);

  //supermajority in a body
  engine.perPass = parseFloat(userBodyPass) / 100.0;
  // console.log("per pass: " + engine.perPass);

  //Historical Likelihood of party affiliation & likelihood of 'yay' vote
  engine.repYaythresh = parseFloat(userRepYaythresh) / 100.0;
  // console.log("rep yay thresh: " + engine.repYaythresh);
  engine.demYaythresh = parseFloat(userDemYaythresh) / 100.0;
  // console.log("dem yay thresh: " + engine.demYaythresh);
  engine.indYaythresh = parseFloat(userIndYaythresh) / 100.0;
  // console.log("ind yay thresh: " + engine.indYaythresh);
}

/**
 * Rounds a given number to the specified number decimal places
 * @param {*} value - the value to tround
 * @param {*} decimals - number of decimal places
 * @returns the value rounded to the specified decimal places
 */
function roundNum(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // for appended characters to session ID

/**
 * Generates the session ID.
 * @returns the session ID as a string
 */
function getSessionID() {
  var curDate = new Date();
  var curTime = hour().toString().padStart(2, '0') + "_" + minute().toString().padStart(2, '0') + "_" + second().toString().padStart(2, '0');
  var timestamp = (curDate.getMonth()+1).toString().padStart(2, '0') + "_" + curDate.getDate().toString().padStart(2, '0') + "_" + curDate.getFullYear() + "_" + curTime;
  var id = timestamp + "_" + alphabet.charAt(random(alphabet.length-1)) + alphabet.charAt(random(alphabet.length-1)) + alphabet.charAt(random(alphabet.length-1));
  return id;
}

/**
 * Creates a new session.
 * Tracks history of last 10 configs, final config + benchmark results, and endorsements.
 */
function newSession() {
  // generate new session ID
  sessionID = getSessionID();

  // new (reset) config array (and result array) = []
  configs = [];
  results = [];
  finalConfig = {};
  finalConfigObj = {
    config: finalConfig, // the 10th config of the history
    ownerEndorsement: 0,
    publicEndorsement: 0
  };

  // reset IX vars = 0
  configIX = 0;
  resultIX = 0;

  // new session global var, will be passed to func that saves to db
  sessionObj = {
    "timestamp": getTimestamp(),
    "uniqueID": sessionID,
    "version": versionVal, // version: "ICA kiosk v1.0" or "web v1.0", etc...
    "configHistory": configs, // array of last 10 configurations
    "finalConfig": finalConfigObj
  }
}

/**
 * Saves the session to the database and creates a new session.
 */
function saveSession() {
  sessionObj.finalConfig.config = configs[configs.length - 1]// set final configuration in the session object
  addSession(sessionObj); // add session document/record to the database
  console.log(sessionObj);
  newSession(); // create new session
}

/**
 * Adds a new config and its result to the history by updating the global session object.
 */
// OC call after results are displayed to the screen
// configIX and resultIX get updated as app is used
function updateSession() {
  addConfig();
  console.log("config added");
  addResult(configIX); // add result to this configuration
  sessionObj.configHistory = configs;
  console.log(sessionObj);
  //configIX++;
}

/**
 * Toggle the owner endorsement.
 * 1 = endorsed, 0 = not endorsed
 */
function ownerEndorse() {
  if (finalConfigObj.ownerEndorsement == 0) {
    finalConfigObj.ownerEndorsement = 1; // endorsed
  } else {
    finalConfigObj.ownerEndorsement = 0; // not endorsed
  }
}

/**
 * Generates the formatted timestamp.
 * @returns the timestamp as a string
 */
function getTimestamp() {
  var curDate = new Date();
  var curTime = hour().toString().padStart(2, '0') + ":" + minute().toString().padStart(2, '0') + ":" + second().toString().padStart(2, '0');
  var timestamp = (curDate.getMonth()+1).toString().padStart(2, '0') + "-" + curDate.getDate().toString().padStart(2, '0') + "-" + curDate.getFullYear() + " " + curTime;
  return timestamp;
}

/**
 * Adds a configuration to the history of configs array
 */
function addConfig() {
  // create/add json object at this ix in the config array
    configs[configIX] = {
      timestamp: getTimestamp(),
      numLegislativeBodies: engine.numLegislativeBodies,
      numParties: engine.numParties,

      chamber1: {
          totalMembers: engine.numHouse,
          partyA: engine.perDemHouse, // currently shows as decimal percentage (default config was input as number, engine var holds as dec percent)
          partyB: engine.perRepHouse,
          partyC: engine.perIndHouse
      },

      chamber2: {
          totalMembers: engine.numHouse2,
          partyA: engine.perDemHouse2,
          partyB: engine.perRepHouse2,
          partyC: engine.perIndHouse2
      },

      chamber3: {
          totalMembers: engine.numSenate,
          partyA: engine.perDemSenate,
          partyB: engine.perRepSenate,
          partyC: engine.perIndSenate
      },

      vicePres: {
          totalMembers: engine.numVP,
          partyA: engine.perDemVP,
          partyB: engine.perRepVP,
          partyC: engine.perIndVP
      },

      president: {
          totalMembers: engine.numPres,
          partyA: engine.perDemPres,
          partyB: engine.perRepPres,
          partyC: engine.perIndPres
      },

      percentMajority: engine.perPass,
      percentSupermajority: engine.superThresh,

      probabilityYesVote: {
        partyA: engine.demYaythresh,
          partyB: engine.repYaythresh,
          partyC: engine.indYaythresh
      },

      simResults: results // OC just set the resutls array, then call addResult afterward
} 
}

/**
 * Adds json object of the result to the result array for this configuration
 */
function addResult(pConfigIX) {
  // let ran = floor(random(10)); // get an integer 0-9
  // var act = historicalActs[ran]; // get random act
  var aTitle;
  if (resultIX == 0) {
    aTitle = "Test Bill";
  } else {
    aTitle = historicalActs[resultIX-1].title + " (" + historicalActs[resultIX-1].date + ")"; // get act titles in order as listed on config file, with date
  }

  // for this configuration, add the result to the array
    results[resultIX] = {

      actTitle: aTitle,

      chamber1: {
        yes: engine.votingBodyCounts[0][0],
        no: engine.votingBodyCounts[0][1],
        result: engine.voteResults[0]
      },
  
      chamber2: {
          yes: engine.votingBodyCounts[1][0],
          no: engine.votingBodyCounts[1][1],
          result: engine.voteResults[1]
      },
  
      chamber3: {
          yes: engine.votingBodyCounts[2][0],
          no: engine.votingBodyCounts[2][1],
          result: engine.voteResults[2]
      },
  
      vicePres: {
          yes: engine.votingBodyCounts[3][0],
          no: engine.votingBodyCounts[3][1],
          result: engine.voteResults[3]
      },
  
      president: {
          yes: engine.votingBodyCounts[4][0],
          no: engine.votingBodyCounts[4][1],
          result: engine.voteResults[4]
      },
  
      finalDecision: engine.decisionTxt,
      billPass: engine.billPass
    }

  configs[pConfigIX].simResults = results;
  console.log(configs[pConfigIX].simResults);
  
}

/**
 * Retrieves all sessions from the database.
 * @returns an array of all sessions saved in the database
 */
function getAllSessions() {
  var sessionsArr;
  getSessions().then((result) => {
    console.log(result);
    sessionsArr = result;
  });
  return sessionsArr;
}

/**
 * Allow keys to control moving between panes and toggling panes.
 */
function keyPressed() {
  // RETURN key toggles panes
  if (keyCode == RETURN) {
    if (showPanesBool == false) {
      showPanesBool = true;
    }
    else {
      showPanesBool = false;
    }
  } else if (key == '.' || key == '>') {//else if (keyCode == RIGHT_ARROW) {
    nextPane(); // . or > moves to next pane
  } else if (key == ',' || key == '<') {//else if (keyCode == LEFT_ARROW) {
    previousPane(); // , or < moves to previous pane
  }
  keyCode == null;
  key = '';
}

/**
 * Toggles hiding and showing the pane.
 */
function paneToggle() {
  if (showPanesBool) {
    // if (mgr.isCurrent(SCENE));
    // = "block" whichever html div page corresponds to that scene
    document.getElementById("pane-bkg").style.display = "block"; 
    document.getElementById("button-div").style.display = "block";
    document.getElementById("top").style.display = "block";
    document.getElementById("screen").style.display = "block";
    if (mgr.isCurrent(sBodies)) {
      document.getElementById("page1").style.display = "block";
    } else if (mgr.isCurrent(sLegislative)) {
      document.getElementById("page2").style.display = "block";
    } else if (mgr.isCurrent(sParties)) {
      document.getElementById("page3").style.display = "block";
    } else if (mgr.isCurrent(sMembersFirstChamber)) {
      document.getElementById("page4").style.display = "block";
    } else if (mgr.isCurrent(sMembersSecondChamber)) {
      document.getElementById("page5").style.display = "block";
    } else if (mgr.isCurrent(sMembersThirdChamber)) {
      document.getElementById("page6").style.display = "block";
    } else if (mgr.isCurrent(sMembersVP)) {
      document.getElementById("page7").style.display = "block";
    } else if (mgr.isCurrent(sMembersPres)) {
      document.getElementById("page8").style.display = "block";
    } else if (mgr.isCurrent(sBodyPass)) {
      document.getElementById("page9").style.display = "block";
    } else if (mgr.isCurrent(sYesVotes)) {
      document.getElementById("page10").style.display = "block";
    } else if (mgr.isCurrent(sVote)) {
      document.getElementById("page11").style.display = "block";
    } else if (mgr.isCurrent(sBenchmarkPane)) {
      document.getElementById("page12").style.display = "block";
    } else if (mgr.isCurrent(sResults)) {
      document.getElementById("pane-bkg").style.display = "none";
      document.getElementById("page13").style.display = "block";
      document.getElementById("slider-disp").style.display = "block";
    }
    
  } else {
    // = "none" for all html div
      document.getElementById("screen").style.display = "none";
      document.getElementById("pane-bkg").style.display = "none";
      document.getElementById("button-div").style.display = "none";
      document.getElementById("top").style.display = "none";
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page5").style.display = "none";
      document.getElementById("page6").style.display = "none";
      document.getElementById("page7").style.display = "none";
      document.getElementById("page8").style.display = "none";
      document.getElementById("page9").style.display = "none";
      document.getElementById("page10").style.display = "none";
      document.getElementById("page11").style.display = "none";
      document.getElementById("page12").style.display = "none";
      document.getElementById("page13").style.display = "none";
      document.getElementById("slider-disp").style.display = "none";
  }
}
