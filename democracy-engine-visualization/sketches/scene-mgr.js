
var mgr;

// buttons
var buttonDiv;
var togglePaneDiv;
var toggleBtn;
var infoBtnDiv;
var infoBtn;

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

// colors
var bColor; // = "#012244";
var pColor; // = "#3c1b36";
var textColor;
var colorOverlay;
var rectColor;
var rectColor2;
var rectColor3;
var barDark;

// json
var configJSON;
var govtConfig;
var colorConfig;
var historicalActs; // array of 10 bills
var loadedConfig;

var finalConfig = {};
var finalConfigObj = {
  config: finalConfig, // the 10th config of the history
  ownerEndorsement: 0,
  publicEndorsement: 0 };
var selectedSessionID;
var entireSessionObj;
var createdFromSession = null; // id of session the selected session was created based on

// to keep track of array lengths
var MAX_CONFIG_ATTEMPTS = 10; // 10th config is final config
var MAX_SIM_RESULTS = 12; // run simulation 12 times for the 12 benchmarking tests

// booleans for panes
var showPanesBool = true;
var showInfoPaneBool = false;
var paneScene = false;

// hardware tracking
var port;
var enableHardware = false; // kiosk flag (set in democracy-engine-kiosk/kiosk-setup.js) sets to true

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

// for time out
var timeLastActive; // millis since last button clicked
var timeOutAmt = 480000; // 1 minute = 60000 milliseconds, 8 minutes = 480000 ms

function preload() {
  configJSON = loadJSON('../config/config.json');
  console.log(configJSON);
}

function setup() {
  // check kiosk flag to enable hardware if 'true'
  var kioskFlag = sessionStorage.getItem('kioskFlag');
  if (kioskFlag == 'true') {
    enableHardware = true;
  } else {
    // web version
    enableHardware = false;
    console.log("web version");

    // set up web toggle button
    togglePaneDiv = document.getElementById('toggle-pane-div');
    toggleBtn = createButton('Hide Pane');
    toggleBtn.id('toggle-pane-btn');
    toggleBtn.class('buttons');
    toggleBtn.parent(togglePaneDiv);
    toggleBtn.mousePressed(clickedToggle);

    // set up web info button
    infoBtnDiv = document.getElementById('info-btn-div');
    infoBtn = createButton('?');
    infoBtn.id('info-btn');
    infoBtn.class('buttons');
    infoBtn.parent(infoBtnDiv);
    infoBtn.mousePressed(clickedInfo);
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
  barDark = colorConfig.barDark;
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
  mgr.addScene(sLoadSession);
  mgr.addScene(sSessionVis);
  mgr.addScene(sPublicEndorsement);
  mgr.showNextScene();
  
  if (enableHardware) {
  hardwareSetup();
  }
  noCanvas();

  timeLastActive = millis(); // initial activity starts

  // prevent space bar from scrolling page down
  window.addEventListener('keydown', function(e) {
    if (e.code == 'Space' || e.key == ' ') {
      e.preventDefault();
    }
  })

  console.log("end of scene-mgr.js setup");
}

function draw() {
  mgr.draw();

  // only kiosk versions (enableHardware) have a timeout
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
  if (usedPorts.length > 0) {
    port.open(usedPorts[0],9600);

  }

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

/**
 * Checks for button clicks and joystick movements for active buttons on each page.
 * Tracks time last active when active buttons are clicked.
 */
function checkHardwareInput() {
  if (!port) {
    return;
  }
  let arr = port.readBytes(14); 

    // all hardware related to this scene
    if (mgr.isCurrent(sLoadSession)) {
      //let arr = port.readBytes(14); 
  
      if (arr[9] == 200) { // left btn
        document.getElementById('prev-pane-btn').classList.add('btn-active');
        hardwareLeftBtn = true;
        lastActive(); // track time of last activity 
      } else if (arr[9] == 0) {
        document.getElementById('prev-pane-btn').classList.remove('btn-active');
        if (hardwareLeftBtn) {
          hLeftBtn = true;
        }
        hardwareLeftBtn = false;
      }
  
      if (arr[10] == 200) { // middle btn
        document.getElementById('middle-btn').classList.add('btn-active');
        hardwareMidBtn = true;
        lastActive(); // track time of last activity 
      } else if (arr[10] == 0) {
        document.getElementById('middle-btn').classList.remove('btn-active');
        if (hardwareMidBtn) {
          hMidBtn = true;
        }
        hardwareMidBtn = false;
      }
  
      if (arr[11] == 200) {
        document.getElementById('next-pane-btn').classList.add('btn-active');
        hardwareRightBtn = true;
        lastActive(); // track time of last activity 
      } else if (arr[10] == 0) { // right btn
        document.getElementById('next-pane-btn').classList.remove('btn-active');
        if (hardwareRightBtn) {
          hRightBtn = true;
        }
        hardwareRightBtn = false;
      }

    // left joystick to go to prev pane
    if (arr[6] == 200) {
      hardwarePrevPane = true;
      lastActive(); // track time of last activity 
    } else if (arr[6] == 0) {
      if (hardwarePrevPane) {
        previousPane();
      }
      hardwarePrevPane = false;
    }

    // right joystick or right button to go to next pane
    if (arr[6] == 100) {
      document.getElementById('next-pane-btn').classList.add('btn-active');
      hardwareNextPane = true;
    } else if (arr[6] == 0) {
      document.getElementById('next-pane-btn').classList.remove('btn-active');
      if (hardwareNextPane) {
        nextPane();
      }
      hardwareNextPane = false;
    }
    
    // joy up to hide pane when == 200 (can swap to joy down to hide - change to == 100 )
    if (arr[7] == 100) {
      hardwareHide = true;
      lastActive(); // track time of last activity 
    } else if (arr[7] == 0) {
      if (hardwareHide) {
        if (showPanesBool) {
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
      if (hardwareShow) {
        if (!showPanesBool) {
          showPanesBool = true;
        }
      }
      hardwareShow = false;
    }
  
  } else
  // these scenes only use the middle button
  if (mgr.isCurrent(aboutProject)) {
    //let arr = port.readBytes(14); 
    if (arr[10] == 200) { // middle btn
      document.getElementById('back-btn-a04').classList.add('btn-active');
      hardwareMidBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[10] == 0) {
      document.getElementById('back-btn-a04').classList.remove('btn-active');
      if (hardwareMidBtn) {
        hMidBtn = true;
      }
      hardwareMidBtn = false;
    }
  } else

  // these scenes use only the left and right buttons
  if (mgr.isCurrent(startUp) || mgr.isCurrent(startSession)) {
    //let arr = port.readBytes(14); 
    if (arr[9] == 200) { // left btn
      if (mgr.isCurrent(startSession)) {
        document.getElementById('about-btn-a02').classList.add('btn-active');
      }
      hardwareLeftBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[9] == 0) {
      if (mgr.isCurrent(startSession)) {
        document.getElementById('about-btn-a02').classList.remove('btn-active');
      }
      if (hardwareLeftBtn) {
        hLeftBtn = true;
      }
      hardwareLeftBtn = false;
    }

    if (arr[11] == 200) { // right btn
      if (mgr.isCurrent(startSession)) {
        document.getElementById('load-session-btn-a02').classList.add('btn-active');
      }
      hardwareRightBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[10] == 0) {
      if (mgr.isCurrent(startSession)) {
        document.getElementById('load-session-btn-a02').classList.remove('btn-active');
      }
      if (hardwareRightBtn) {
        hRightBtn = true;
      }
      hardwareRightBtn = false;
    }
  } else
  if (mgr.isCurrent(sSessionVis)) {

    // left joystick or left button to go to prev pane
    if (arr[6] == 200 || arr[9] == 200) {
      document.getElementById('prev-pane-btn').classList.add('btn-active');
      hardwarePrevPane = true;
      lastActive(); // track time of last activity 
    } else if (arr[6] == 0 || arr[9] == 0) {
      document.getElementById('prev-pane-btn').classList.remove('btn-active');
      if (hardwarePrevPane) {
        previousPane();
      }
      hardwarePrevPane = false;
    }

    // right joystick or right button to go to next pane
    if (arr[6] == 100 || arr[11] == 200) {
      document.getElementById('next-pane-btn').classList.add('btn-active');
      hardwareNextPane = true;
      lastActive(); // track time of last activity 
    } else if (arr[6] == 0 || arr[11] == 0) {
      document.getElementById('next-pane-btn').classList.remove('btn-active');
      if (hardwareNextPane) {
        nextPane();
      }
      hardwareNextPane = false;
    }

    // joy up to hide pane when == 200 (can swap to joy down to hide - change to == 100 )
    if (arr[7] == 100) {
      hardwareHide = true;
      lastActive(); // track time of last activity 
    } else if (arr[7] == 0) {
      if (hardwareHide) {
        if (showPanesBool) {
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
      lastActive(); // track time of last activity 
    } else if (arr[7] == 0) {
      if (hardwareShow) {
        if (!showPanesBool) {
          showPanesBool = true;
        }
      }
      hardwareShow = false;
    }
  } else 
  if (mgr.isCurrent(sPublicEndorsement)) {
    // left joystick or left button to go back
    if (arr[6] == 200 || arr[9] == 200) {
      document.getElementById('prev-pane-btn').classList.add('btn-active');
      hardwarePrevPane = true;
      lastActive(); // track time of last activity 
    } else if (arr[6] == 0 || arr[9] == 0) {
      document.getElementById('prev-pane-btn').classList.remove('btn-active');
      if (hardwarePrevPane) {
        previousPane();
      }
      hardwarePrevPane = false;
    }

    // right joystick
    if (arr[6] == 100) {
      // document.getElementById('next-pane-btn').classList.add('btn-active');
      hardwareNextPane = true;
    } else if (arr[6] == 0) {
      // document.getElementById('next-pane-btn').classList.remove('btn-active');
      if (hardwareNextPane) {
        nextPane();
      }
      hardwareNextPane = false;
    }

    if (arr[11] == 200) { // right btn
      document.getElementById('next-pane-btn').classList.add('btn-active');
      hardwareRightBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[10] == 0) {
      document.getElementById('next-pane-btn').classList.remove('btn-active');
      if (hardwareRightBtn) {
        hRightBtn = true;
      }
      hardwareRightBtn = false;
    }

    if (arr[10] == 200) { // middle btn
      document.getElementById('middle-btn').classList.add('btn-active');
      hardwareMidBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[10] == 0) {
      document.getElementById('middle-btn').classList.remove('btn-active');
      if (hardwareMidBtn) {
        hMidBtn = true;
      }
      hardwareMidBtn = false;
    }

    // joy up to hide pane when == 200 (can swap to joy down to hide - change to == 100 )
    if (arr[7] == 100) {
      hardwareHide = true;
      lastActive(); // track time of last activity 
    } else if (arr[7] == 0) {
      if (hardwareHide) {
        if (showPanesBool) {
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
      if (hardwareShow) {
        if (!showPanesBool) {
          showPanesBool = true;
        }
      }
      hardwareShow = false;
    }
  } else if (mgr.isCurrent(hardwareTest)) {
    if (arr[9] == 200) { // left btn
      hardwareLeftBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[9] == 0) {
      if (hardwareLeftBtn) {
        hLeftBtn = true;
      }
      hardwareLeftBtn = false;
    }
    if (arr[11] == 200) { // right btn
      hardwareRightBtn = true;
      lastActive(); // track time of last activity 
    } else if (arr[10] == 0) {
      if (hardwareRightBtn) {
        hRightBtn = true;
      }
      hardwareRightBtn = false;
    }
  }

}

/**
 * Show next pane scene, control order
 */
function nextPane() {
  if (mgr.isCurrent(sLoadSession) && !document.getElementById('next-pane-btn').disabled) {
    document.getElementById('dot-p01').className = 'dot'; // deactivate dot on pane before moving to next pane
    //document.getElementById("page1").style.display = "none";
    document.getElementById("sessions-list").style.display = "none";
    mgr.showScene(sSessionVis);

  } else if (mgr.isCurrent(sSessionVis)) {

    document.getElementById('dot-p02').className = 'dot';
    document.getElementById("chart-page").style.display = "none";
    document.getElementById("end-summary").style.display = "block";
    mgr.showScene(sPublicEndorsement);
  }
}

/**
 * Show previous pane scene
 */
function previousPane() {
  if (mgr.isCurrent(sLoadSession)) {
    // moving from pane to start page (by keyboard control or joystick - no ui btn so handle display here)
    showPanesBool = false;
    document.getElementById("sessions-list").style.display = "none";
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("pane-text").style.display = "none";
    document.getElementById("screen").style.display = "none";
    mgr.showScene(startSession);

  } else if (mgr.isCurrent(sSessionVis)) {
    document.getElementById('dot-p02').className = 'dot';
    document.getElementById("sessions-list").style.display = "block";
    mgr.showScene(sLoadSession);

  } else if (mgr.isCurrent(sPublicEndorsement) && allowEndorse) { // can go back if endorse is not yet clicked
    document.getElementById('dot-p03').className = 'dot';
    mgr.showScene(sSessionVis);
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
  if (userNumSenate == 0) {
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

function roundNum(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function keyPressed() {
  // SPACE BAR toggles panes
  if (keyCode == 32) {
    if (!showPanesBool) {
      showPanesBool = true;
    }
    else {
      showPanesBool = false;
    }
  } else if (key == '.' || key == '>') {//else if (keyCode == RIGHT_ARROW) {
    nextPane();
  } else if (key == ',' || key == '<') {//else if (keyCode == LEFT_ARROW) {
    previousPane();
  } else if (key == 'i') {
    if (paneScene) {
      clickedInfo();
    }
  }
  keyCode == null;
  key = '';
}

/**
 * Button to toggle info pane for web version
 */
function clickedInfo() {
  if (!showInfoPaneBool) {
    document.getElementById('info-div').style.display = "block";
    showInfoPaneBool = true;
  } else {
    document.getElementById('info-div').style.display = "none";
    showInfoPaneBool = false;
  }
  
  console.log("clicked info");
}

/**
 * Button to toggle panes for web version
 */
function clickedToggle() {
  if (!showPanesBool) {
    showPanesBool = true;
  } else {
    showPanesBool = false;
  }
}

/**
 * Toggles hiding and showing the pane.
 */
function paneToggle() {
  if (showPanesBool) {
    if (!enableHardware) { // web version
        document.getElementById('toggle-pane-btn').textContent = "Hide Pane";
        document.getElementById('toggle-pane-btn').classList.remove('show-icon');
        document.getElementById('toggle-pane-btn').classList.add('hide-icon');
    }

    document.getElementById("pane-bkg").style.display = "block"; 
    document.getElementById("button-div").style.display = "block";
    document.getElementById("pane-text").style.display = "block";
    document.getElementById("screen").style.display = "block"; // comment out if want only on first 3 panes
    
  } else {
    if (!enableHardware) { // web version
      document.getElementById('toggle-pane-btn').textContent = "Show Pane";
      document.getElementById('toggle-pane-btn').classList.remove('hide-icon');
      document.getElementById('toggle-pane-btn').classList.add('show-icon');
    }

      document.getElementById("screen").style.display = "none";
      document.getElementById("pane-bkg").style.display = "none";
      document.getElementById("button-div").style.display = "none";
      document.getElementById("pane-text").style.display = "none";
  }

}
