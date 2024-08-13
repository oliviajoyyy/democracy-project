
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

//fortesting
let senateResult;
let houseResult;
let presidentResult;

// text display
let mainText;
let headerText;
let subHeaderText;
let simInfoText;
let userOutputText;

//loaded assets
var helvFont;
var loadingImage;
var enterImage;

let nextButton;
var buttonRC, buttonRes, dispBtn, recalBtn, buttonDef, emailBtn;

var userPaddingX = 20;
var userInputY = 20;
var userInputX = 20;


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
var userNumHouseRan;
var userNumHouse2Ran;
var userNumSenateRan;
var userNumPresRan;
var userNumVPRan;
var userNumHouseConn;

var userBodyPass;
var userSuperThresh;

var userRepYaythresh;
var userDemYaythresh;
var userIndYaythresh;
var prevUserNumParties;
var userEditCount = 0;

//user inputs are enabled
var userEdits = false;
var reconfigBool = true;
var onePartyBool = false;

// colors
var bColor; // = "#012244";
var pColor; // = "#3c1b36";
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

var sessionObj; // session obj holds array of json configurations, which holds array of json results
var configs = []; // array of json govt config attempts (up to 10)
var results = []; // array of (10) json results (updated for each new config)
var finalConfig = {};
var finalConfigObj = {
  config: finalConfig, // the 10th config of the history
  ownerEndorsement: 0,
  publicEndorsement: 0 };
var sessionID = "ID" + userEditCount;

// to keep track of array indicies
var configIX = 0;
var resultIX = 0;
var MAX_CONFIG_ATTEMPTS = 10; // 10th config is final config
var MAX_SIM_RESULTS = 10;

var showPanesBool = true;
// var paneArrow = false; // allows for arrow keys to move to next pane (controlled why which scene its on)

function preload() {
  helvFont = loadFont('../democracy-engine-congressional-simulator/assets/font/HelveticaNeue-Regular.otf');
  loadingImage = loadImage('../democracy-engine-congressional-simulator/assets/gears-icon.png');
  enterImage = loadImage('../democracy-engine-congressional-simulator/assets/asraProgress.png');
  configJSON = loadJSON('../democracy-engine-congressional-simulator/config/config.json');
  
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
  majorityBar = colorConfig.majorityBar;
  superBar = colorConfig.supermajorityBar;
  document.body.style.backgroundColor = bColor;
  //document.header.style.backgroundColor = bColor;
  engine = new DemocracyEngine(govtConfig, historicalActs); // OC create engine object to run voting logic
  visual = new VoteVisual(loadingImage, bColor, pColor, textColor, rectColor, rectColor2, rectColor3, majorityBar, superBar);
  setDefaultUserVars(); // set user vars to params from config file
  buttonDiv = document.getElementById('button-div');

  noStroke();
  mgr = new SceneManager();
  mgr.addScene(startUp);
  mgr.addScene(briefDescription);
  mgr.addScene(hardwareTest);
  mgr.addScene(aboutProject);
  mgr.addScene(newSessionScene);
  mgr.addScene(loadSessionS1);
  mgr.addScene(loadSessionS2);
  //mgr.addScene(democracyEngineOrigin);
  //mgr.addScene(democracyEngineUser);
  mgr.addScene(sBodies);
  mgr.addScene(sLegislative);
  mgr.addScene(sParties);
  mgr.addScene(sMembersFirstChamber);
  mgr.addScene(sMembersSecondChamber);
  mgr.addScene(sMembersThirdChamber);
  mgr.addScene(sMembersVP);
  mgr.addScene(sMembersPres);
  //mgr.addScene(sMembers);
  mgr.addScene(sBodyPass);
  mgr.addScene(sYesVotes);
  mgr.addScene(sVote);
  mgr.addScene(sBenchmarkPane);
  mgr.addScene(sBenchmarkResults);
  mgr.addScene(sSaveResults);
  mgr.addScene(sComplete);
  // mgr.addScene(sInfo);
  // mgr.addScene(sDisplay);
  // mgr.addScene(sDefault);
  mgr.showNextScene();
  
  console.log("end of scene-mgr.js setup");
}

function draw() {
  mgr.draw();

}

function mousePressed() {
  mgr.mousePressed();
}

function nextScene() {
  if (mgr.isCurrent(democracyEngineOrigin)) {
    //mgr.showScene(sLegislative);
    mgr.showScene(sBodies);
  } else if (mgr.isCurrent(sBodies)) {
    mgr.showScene(sLegislative);
  } else if (mgr.isCurrent(sLegislative)) {
    mgr.showScene(sParties);
  } else if (mgr.isCurrent(sParties) && userNumParties <= 1) {
    mgr.showScene(sBodyPass);
  } else if (mgr.isCurrent(sParties)) {
    mgr.showScene(sMembers);
  } else if (mgr.isCurrent(sMembers)) {
    mgr.showScene(sBodyPass);
  } else if (mgr.isCurrent(sBodyPass)) {
    mgr.showScene(sYesVotes);
  } else if (mgr.isCurrent(sYesVotes)) {
    mgr.showScene(sResults);
  }  else if (mgr.isCurrent(sResults) && userEditCount < 2) {
    mgr.showScene(sInfo);
  }  else if (mgr.isCurrent(sInfo) && userEdits == true) {
    mgr.showScene(democracyEngineUser);
  } else if (mgr.isCurrent(democracyEngineUser)) {
    // OC update config count var here?
    //mgr.showScene(sLegislative);
    mgr.showScene(sBodies);
  } else if (mgr.isCurrent(sDefault)) {
   //mgr.showScene(sLegislative);
   mgr.showScene(sBodies);
  } else if (mgr.isCurrent(sDisplay)) {
    //mgr.showScene(sLegislative);
    mgr.showScene(sBodies);
   }

}

function nextPane() {
  if (mgr.isCurrent(sBodies)) {
    mgr.showScene(sLegislative);
  } else if (mgr.isCurrent(sLegislative)) {
    mgr.showScene(sParties);
  } else if (mgr.isCurrent(sParties)) {
    // mgr.showScene(sMembers);
    mgr.showScene(sMembersFirstChamber);
  } else if (mgr.isCurrent(sMembersFirstChamber) && userNumLegislative == 1) { 
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sMembersFirstChamber) && userNumLegislative >= 2) {
    mgr.showScene(sMembersSecondChamber);
  } else if (mgr.isCurrent(sMembersSecondChamber) && userNumLegislative == 3) {
    mgr.showScene(sMembersThirdChamber);
  } else if (mgr.isCurrent(sMembersSecondChamber) && userNumLegislative == 2) {
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sMembersThirdChamber)) {
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sMembersVP)) {
    mgr.showScene(sMembersPres);
  } else if (mgr.isCurrent(sMembersPres)) {
    mgr.showScene(sBodyPass);
  } else if (mgr.isCurrent(sBodyPass)) {
    mgr.showScene(sYesVotes);
  } else if (mgr.isCurrent(sYesVotes)) {
    mgr.showScene(sVote);
  }  else if (mgr.isCurrent(sVote)) {
    mgr.showScene(sBenchmarkPane);
  } //else if (mgr.isCurrent(sResults) && userEditCount < 2) {
  //   mgr.showScene(sInfo);
  // }  else if (mgr.isCurrent(sInfo) && userEdits == true) {
  //   // mgr.showScene(democracyEngineUser);  
  //   mgr.showScene(sBodies);
  // } else if (mgr.isCurrent(sDefault)) {
  //  //mgr.showScene(sLegislative);
  //  mgr.showScene(sBodies);
  // } else if (mgr.isCurrent(sDisplay)) {
  //   //mgr.showScene(sLegislative);
  //   mgr.showScene(sBodies);
  //  }
}

function previousPane() {
  if (mgr.isCurrent(sLegislative)) {
    mgr.showScene(sBodies);
  } else if (mgr.isCurrent(sParties)) {
    mgr.showScene(sLegislative);
  } else if (mgr.isCurrent(sMembersFirstChamber)) {
    mgr.showScene(sParties);
  } else if (mgr.isCurrent(sMembersSecondChamber)) {
    mgr.showScene(sMembersFirstChamber);
  } else if (mgr.isCurrent(sMembersThirdChamber)) {
    mgr.showScene(sMembersSecondChamber);
  } else if (mgr.isCurrent(sMembersVP) && userNumLegislative == 1) {
    mgr.showScene(sMembersFirstChamber);
  } else if (mgr.isCurrent(sMembersVP) && userNumLegislative == 2) {
    mgr.showScene(sMembersSecondChamber);
  } else if (mgr.isCurrent(sMembersVP) && userNumLegislative == 3) {
    mgr.showScene(sMembersThirdChamber);
  } else if (mgr.isCurrent(sMembersPres)) {
    mgr.showScene(sMembersVP);
  } else if (mgr.isCurrent(sBodyPass)) {
    mgr.showScene(sMembersPres);
  } else if (mgr.isCurrent(sYesVotes)) {
    mgr.showScene(sBodyPass);
  } else if (mgr.isCurrent(sVote)) {
    if (visualizeVote) {
      background(bColor);
      // reset values for calculations and drawings
      //engine.completeReset();
      visual.completeReset();
      userEdits = false;
      reconfigBool = true;
    }
    mgr.showScene(sYesVotes);
  } else if (mgr.isCurrent(sBenchmarkPane)) {
    mgr.showScene(sVote);
  }
}

// function lastScene() {
//   if (mgr.isCurrent(sYesVotes)) {
//     mgr.showScene(sBodyPass);
//   } else if (mgr.isCurrent(sBodyPass)) {
//     mgr.showScene(sMembers);
//   } else if (mgr.isCurrent(sMembers)) {
//     mgr.showScene(sLegislative);
//   } else if (mgr.isCurrent(sLegislative)) {}
//
// }

// function keyPressed() {
//   // You can optionaly handle the key press at global level...
//   switch (key) {
//     case '1':
//       mgr.showScene(democracyEngineUser);
//       break;
//     case '2':
//       mgr.showScene(sResults);
//       break;
//     case '3':
//       mgr.showScene(sMembers);
//       break;
//       // case 'space':
//       //     mgr.showScene(main);
//       //     break;
//
//   }
//
//   // ... then dispatch via the SceneManager.
//   mgr.keyPressed();
// }

// might not work for fullscreen
// function windowResized() {
//   resizeCanvas(windowWidth*8, windowHeight*8);
// }


function button() {
  mgr.showNextScene();
}

function dispResult() {
  if (mgr.isCurrent(sDisplay)) {
    mgr.showScene(democracyEngineUser);
    dispBtn.elt.textContent = "DISPLAY USER SETTINGS";
    // emailBtn.elt.style.opacity = "1";
    // buttonRC.elt.style.opacity = "1";
    // buttonRes.elt.style.opacity = "1";
    // recalBtn.elt.style.opacity = "1";
  } else {
    mgr.showScene(sDisplay);
    dispBtn.elt.textContent = "DISPLAY VOTE";
    // emailBtn.elt.style.opacity = "0";
    // buttonRC.elt.style.opacity = "0";
    // buttonRes.elt.style.opacity = "0";
    // recalBtn.elt.style.opacity = "0";
  }
}

function defResult() {
  if (mgr.isCurrent(sDefault)) {
    mgr.showScene(democracyEngineOrigin);
    buttonDef.elt.textContent = "DISPLAY DEFAULT SETTINGS";
  } else {
    mgr.showScene(sDefault);
    buttonDef.elt.textContent = "DISPLAY VOTE";
  }
}

// set user vars to default config of govt json
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

// set user vars to loaded config
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

// set engine params to user vars
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
  console.log("superThresh: " + engine.superThresh);

  //supermajority in a body
  engine.perPass = parseFloat(userBodyPass) / 100.0;
  console.log("per pass: " + engine.perPass);

  //Historical Likelihood of party affiliation & likelihood of 'yay' vote
  engine.repYaythresh = parseFloat(userRepYaythresh) / 100.0;
  console.log("rep yay thresh: " + engine.repYaythresh);
  engine.demYaythresh = parseFloat(userDemYaythresh) / 100.0;
  console.log("dem yay thresh: " + engine.demYaythresh);
  engine.indYaythresh = parseFloat(userIndYaythresh) / 100.0;
  console.log("ind yay thresh: " + engine.indYaythresh);
}

//User Input Values for Congressional Reconfiguration
function inputVar() {

  // OC if coming from the user engine page or the user display page, 
  // increment resultIX bc using the same configuration
  // if (mgr.isCurrent(democracyEngineUser) || mgr.isCurrent(sDisplay)) {
  //   resultIX++;
  //   console.log("incremented resultIX: " + resultIX);
  // }

  document.body.style.backgroundColor = bColor;
  changeText(" ");
  if(!document.getElementById('disp-btn')){
          dispButton();
   }


  //Number voting members
  engine.numHouse = userNumHouse;
  engine.numHouse2 = userNumHouse2;
  engine.numSenate = userNumSenate;
  engine.numPres = userNumPres;
  engine.numVP = userNumVP;

  engine.numParties = userNumParties;

  //Demographics of House as decimal percentages 1 = 100%
  engine.perDemHouse = userPerHouseBody[0];
  engine.perRepHouse = userPerHouseBody[1];
  engine.perIndHouse = userPerHouseBody[2];

  //Demographics of House 2 as decimal percentages 1 = 100%
  engine.perDemHouse2 = userPerHouse2Body[0];
  engine.perRepHouse2 = userPerHouse2Body[1];
  engine.perIndHouse2 = userPerHouse2Body[2];

  //Demographics of Senate as decimal percentages 1 = 100%
  engine.perDemSenate = userPerSenateBody[0];
  engine.perRepSenate = userPerSenateBody[1];
  engine.perIndSenate = userPerSenateBody[2];

  //Demographics of President as decimal percentages 1 = 100%
  engine.perDemPres = userPerPresBody[0];
  engine.perRepPres = userPerPresBody[1];
  engine.perIndPres = userPerPresBody[2];

  //Demographics of Vice President as decimal percentages
  engine.perDemVP = userPerVPBody[0];
  engine.perRepVP = userPerVPBody[1];
  engine.perIndVP = userPerVPBody[2];

  //Historical Likelihood of party affiliation & likelihood of 'yay' vote
  engine.repYaythresh = parseFloat(userRepYaythresh) / 100.0;
  console.log("rep yay thresh: " + engine.repYaythresh);
  engine.demYaythresh = parseFloat(userDemYaythresh) / 100.0;
  console.log("dem yay thresh: " + engine.demYaythresh);
  engine.indYaythresh = parseFloat(userIndYaythresh) / 100.0;
  console.log("ind yay thresh: " + engine.indYaythresh);

  //supermajority Cutoff for override of presidential veto
  engine.superThresh = parseFloat(userSuperThresh) / 100.0;
  console.log("superThresh: " + engine.superThresh);

  //supermajority in a body
  engine.perPass = parseFloat(userBodyPass) / 100.0;
  console.log("per pass: " + engine.perPass);

  //How Many Voting Bodies (house, senate, president, VP = 4) *for V2 - see TODO at top
  engine.numLegislativeBodies = parseFloat(userNumLegislative);
  //engine.numBodies = parseFloat(userNumLegislative) + 2; // OC add 2 for vp and pres
  engine.numBodies = 5; // OC numBodies always 5 as place holders for house, house2, senate, vp, president
  console.log("USER NUM BODIES: " + engine.numBodies);



  // //Your Stress Value
  // stressSensorval = userStressSensorval.value();
  //
  // //Planets Stress Value
  // stressPlanet = userStressPlanet.value();

  // reset values for calculations
  engine.bodyCount = 0;
  engine.bodyPass = [];
  engine.resetCount();
  engine.resetDraw();
  engine.votingBodyCounts = [];
  engine.superThreshIndex = [];

  visual.bodyCount = 0;
  visual.bodyPass = [];
  visual.resetCount();
  visual.resetDraw();
  
  removeField();
  // resetSliders();
  userEdits = true;
  reconfigBool = true;
  mgr.showScene(democracyEngineUser);
}

function dispButton() {
  dispBtn = createButton('DISPLAY USER SETTINGS');
  dispBtn.id("disp-btn");
  dispBtn.class('buttons');
  let buttonDiv = document.getElementById('button-div');
  dispBtn.parent(buttonDiv);
  // dispBtn.position(19, 19);
  dispBtn.mousePressed(dispResult);
}


function removeField() {
  if(document.getElementById('res-btn')){
    buttonRes.remove();
  }
  if(document.getElementById('rec-btn')){
    buttonRC.remove();
  }
  if (userEdits==true)
  {
    if(document.getElementById('recal-btn')){
      recalBtn.remove();
    }
    if(document.getElementById('email-btn')){
      emailBtn.remove();
    }
  }
  if(document.getElementById('next-btn')){
      nextButton.remove();
  }
}

function emailFunc(){
  window.location.href='mailto'+':democracy'+'.project.'+'cadre@'+'gmail.com?subject=The%20Future%20Democracies%20Laboratory%20Simulator%7C%20User%20Results%20and%20Settings&body=Please%20insert%20a%20copy%20of%20your%20user%20settings%20and%20a%20screenshot%20of%20the%20generated%20voting%20results%0D%0A';
}

function roundNum(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

//changes the text on the HTML body for final voting decision
function changeText(text) {
  document.getElementById("result").innerHTML = text;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getSessionID() {
  var curDate = new Date();
  var curTime = hour().toString().padStart(2, '0') + "_" + minute().toString().padStart(2, '0') + "_" + second().toString().padStart(2, '0');
  var timestamp = (curDate.getMonth()+1).toString().padStart(2, '0') + "_" + curDate.getDate().toString().padStart(2, '0') + "_" + curDate.getFullYear() + "_" + curTime;
  var id = timestamp + "_" + alphabet.charAt(random(alphabet.length-1)) + alphabet.charAt(random(alphabet.length-1)) + alphabet.charAt(random(alphabet.length-1));
  return id;
}

// OC call when app first opened and at end of saveSession
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
    "configHistory": configs, // array of last 9 configurations
    "finalConfig": finalConfigObj
  }
}

function saveSession() {
  sessionObj.finalConfig.config = configs[configs.length - 1]// set final configuration in the session object
  addSession(sessionObj); // add session document/record to the database
  console.log(sessionObj);
  newSession(); // create new session
}

// OC call after results are displayed to the screen
// configIX and resultIX get updated as app is used
function updateSession() {
  //addResult(resultIX);
  addConfig();
  console.log("config added");
  addResult(configIX); // add result to this configuration
  //addConfig();

  sessionObj.configHistory = configs;
  //sessionObj.finalConfig = finalConfigObj;

  // sessionObj = {
  //   "uniqueID": sessionID,
  //   "configHistory": configs,
  //   "finalConfig": finalConfigObj
  // }

  console.log(sessionObj);
  //configIX++;
}

// toggle for owner endorsement/approval
function ownerEndorse() {
  if (finalConfigObj.ownerEndorsement == 0) {
    finalConfigObj.ownerEndorsement = 1;
  } else {
    finalConfigObj.ownerEndorsement = 0;
  }
}

function getTimestamp() {
  var curDate = new Date();
  var curTime = hour().toString().padStart(2, '0') + ":" + minute().toString().padStart(2, '0') + ":" + second().toString().padStart(2, '0');
  var timestamp = (curDate.getMonth()+1).toString().padStart(2, '0') + "-" + curDate.getDate().toString().padStart(2, '0') + "-" + curDate.getFullYear() + " " + curTime;
  return timestamp;
}

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
  

  
  //addResult(configIX);
}

// OC add json obj of the result to the result array for this configuration
function addResult(pConfigIX) {

  // let ran = floor(random(10)); // get an integer 0-9
  // var act = historicalActs[ran]; // get random act
  var aTitle;
  if (resultIX == 0) {
    aTitle = "Test Bill";
  } else {
    aTitle = historicalActs[resultIX-1].title; // get act titles in order
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

function getAllSessions() {
  var sessionsArr;
  getSessions().then((result) => {
    console.log(result);
    sessionsArr = result;
  });
  return sessionsArr;
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
    nextPane();
  } else if (key == ',' || key == '<') {//else if (keyCode == LEFT_ARROW) {
    previousPane();
  }
  keyCode == null;
  key = '';
}

function paneToggle() {

    // OC - put visal in draw() of the scences instead?
    // ---------------------------------------------- for drawing to screen immediately // OC - no longer needed?
    //background(bColor);
    //document.body.style.backgroundColor = bColor;
    // engine.currentCongLogic(true); // leave comented out
    // visual.ix = 0; // leave commented out
    //visual.completeReset();
    //visual.displayImmediateBlank(engine);
    // -----------------------------------------------

    // ----------------------------------------------- for drawing in real time, reset was when previous scene button clicked
    // visual.displayVoting(engine);
    // -----------------------------------------------

  if (showPanesBool) {
    // if (mgr.isCurrent(SCENE));
    // = "block" whichever html div page corresponds to that scene
    document.getElementById("pane-bkg").style.display = "block";
    document.getElementById("button-div").style.display = "block";
    document.getElementById("top").style.display = "block";
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
    // if (mgr.isCurrent(sBodies)) {
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
    // }
  }

}
