
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
var userNumHouse;
var userPerHouseBody;

var userNumSenate;
var userPerSenateBody;

var userNumPres;
var userPerPresBody;

var userNumVP;
var userPerVPBody;

var userNumParties;
var userNumHouseRan;
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
var reconfigBool = false;
var onePartyBool = false;

// colors
var bColor = "#012244";
var pColor = "#3c1b36";

var govtConfig;


function preload() {
  helvFont = loadFont('/democracy-engine-congressional-simulator/assets/font/HelveticaNeue-Regular.otf');
  loadingImage = loadImage('/democracy-engine-congressional-simulator/assets/gears-icon.png');
  enterImage = loadImage('/democracy-engine-congressional-simulator/assets/asraProgress.png');
  govtConfig = loadJSON('/democracy-engine-congressional-simulator/assets/govt-config.json');
}


function setup() {
  // createCanvas(windowWidth*.8, windowHeight*.8);
  // rectMode(CENTER);
  engine = new DemocracyEngine(govtConfig); // OC create engine object to run voting logic

  noStroke();
  mgr = new SceneManager();
  mgr.addScene(democracyEngineOrigin);
  mgr.addScene(democracyEngineUser);
  mgr.addScene(sLegislative);
  mgr.addScene(sParties);
  mgr.addScene(sMembers);
  mgr.addScene(sBodyPass);
  mgr.addScene(sYesVotes);
  mgr.addScene(sResults);
  mgr.addScene(sInfo);
  mgr.addScene(sDisplay);
  mgr.addScene(sDefault);
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
    mgr.showScene(sLegislative);
  } else if (mgr.isCurrent(sDefault)) {
    mgr.showScene(sLegislative);
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
    emailBtn.elt.style.opacity = "1";
    buttonRC.elt.style.opacity = "1";
    buttonRes.elt.style.opacity = "1";
    recalBtn.elt.style.opacity = "1";
  } else {
    mgr.showScene(sDisplay);
    dispBtn.elt.textContent = "DISPLAY VOTE";
    emailBtn.elt.style.opacity = "0";
    buttonRC.elt.style.opacity = "0";
    buttonRes.elt.style.opacity = "0";
    recalBtn.elt.style.opacity = "0";
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

//User Input Values for Congressional Reconfiguration
function inputVar() {
  document.body.style.backgroundColor = "#012244";
  changeText(" ");
  if(!document.getElementById('disp-btn')){
          dispButton();
    }


  //Number voting members
  engine.numHouse = userNumHouse;
  engine.numSenate = userNumSenate;
  engine.numPres = userNumPres;
  engine.numVP = userNumVP;


  //Demographics of House as decimal percentages 1 = 100%
  engine.perDemHouse = userPerHouseBody[0];
  engine.perRepHouse = userPerHouseBody[1];
  engine.perIndHouse = userPerHouseBody[2];

  //Demographics of Senate as decimal percentages 1 = 100%
  engine.perDemSenate = userPerSenateBody[0];
  engine.perRepSenate = userPerSenateBody[1];
  engine.perIndSenate = userPerSenateBody[2];

  //Demographics of President as decimal percentages 1 = 100%
  engine.perDemPres = userPerPresBody[0];
  engine.perRepPres = userPerPresBody[1];
  engine.perIndPres = userPerPresBody[2];

  //Demographics of President as decimal percentages
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
  engine.numBodies = 4;



  // //Your Stress Value
  // stressSensorval = userStressSensorval.value();
  //
  // //Planets Stress Value
  // stressPlanet = userStressPlanet.value();

  engine.bodyCount = 0;
  engine.resetCount();
  engine.resetDraw();
  engine.superThreshIndex = [];
  engine.votingBodyCounts = [];
  engine.bodyPass = [];
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
