function startUp() {
  let continueBtn, testBtn;

  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");
    background(bColor);
    document.body.style.backgroundColor = bColor;
    // paneArrow = false; // cannot use arrow key to move to next scene

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1>";
    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "none";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    continueBtn = createButton('Continue');
    continueBtn.id('continue-btn');
    continueBtn.class('buttons');
    continueBtn.parent(buttonDiv);

    // buttonDiv.innerHTML += "<br>";

    testBtn = createButton('Hardware Test');
    testBtn.id('test-btn');
    testBtn.class('buttons');
    testBtn.parent(buttonDiv);

    setTimeout(function () {
        if (mgr.isCurrent(startUp)) { // OC prevents prgm from moving to test screen if already moved on from the first screen
          clickedTest();
        }
        }, 10000); // goes to test scene after 10 seconds
  }

  this.draw = function () {

    continueBtn.mousePressed(clickedContinue);
    testBtn.mousePressed(clickedTest);

  }

  function clickedContinue() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedTest() {
    removeBtns();
    mgr.showScene(hardwareTest);
  }

  function removeBtns() {
    continueBtn.remove();
    testBtn.remove();
  }
}


function briefDescription() {
  let newSessionBtn, loadSessionBtn, aboutBtn;

  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");
    background(bColor);
    document.body.style.backgroundColor = bColor;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1>";
    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>Description</h2><p>The legislative apparatus of the current US government is represented in default mode, which will initially run through one legislative cycle. The user may configure alternative values in subsequent cycles in order to evaluate the effects of systemic changes to the mechanism of governance.</p>";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    newSessionBtn = createButton('New Session');
    newSessionBtn.id('new-session-btn');
    newSessionBtn.class('buttons');
    newSessionBtn.parent(buttonDiv);

    // document.getElementById("main-btn-div").innerHTML += "<br>";

    loadSessionBtn = createButton('Load Session');
    loadSessionBtn.id('load-session-btn');
    loadSessionBtn.class('buttons');
    loadSessionBtn.parent(buttonDiv);

    aboutBtn = createButton('About the Project');
    aboutBtn.id('about-btn');
    aboutBtn.class('buttons');
    aboutBtn.parent(buttonDiv);
    

  }

  this.draw = function () {

    newSessionBtn.mousePressed(clickedNew);
    loadSessionBtn.mousePressed(clickedLoad);
    aboutBtn.mousePressed(clickedAbout);

  }

  function clickedNew() {
    removeBtns();
    mgr.showScene(newSessionScene);
  }

  function clickedLoad() {
    removeBtns();
    mgr.showScene(loadSessionS1);
  }

  function clickedAbout() {
    removeBtns();
    mgr.showScene(aboutProject);
  }


  function removeBtns() {
    newSessionBtn.remove();
    loadSessionBtn.remove();
    aboutBtn.remove();
  }
}


function hardwareTest() {
  let backBtn, testBtn;

  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Hardware & DB Test </h1>";

    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "none";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    backBtn = createButton('Back to Start Up');
    backBtn.id('back-btn');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);

    // buttonDiv.innerHTML += "<br>";

    testBtn = createButton('Hardware DB Test');
    testBtn.id('test-btn');
    testBtn.class('buttons');
    testBtn.parent(buttonDiv);

  }

  this.draw = function () {
    backBtn.mousePressed(clickedBack);
    // testBtn.mousePressed(clickedTest);
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedTest() {
    removeBtns();
    //mgr.showScene(democracyEngineUser); // scene TBA
  }

  function removeBtns() {
    backBtn.remove();
    testBtn.remove();
  }
}

function aboutProject() {
  let backBtn;
  
  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1>";
    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>More Information</h2><p>[Detailed project description & link to external page]</p>";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    backBtn = createButton('Back to Start Up');
    backBtn.id('back-btn');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
  }

  this.draw = function () {
    backBtn.mousePressed(clickedBack);
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function removeBtns() {
    backBtn.remove();
  }
}


function newSessionScene() {
  let backBtn, nextBtn;
  
  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");

    newSession();

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1>";
    document.getElementById("main-btn-div").style.display = "none";

    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>New Session</h2><p>[Description here on how to use the interface]</p><p>Session ID: " + sessionID + "</p>";

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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    backBtn = createButton('Start Over');
    backBtn.id('back-btn');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);

    nextBtn = createButton('Next');
    nextBtn.id('next-btn-1');
    nextBtn.class('buttons');
    nextBtn.parent(buttonDiv);
  }

  this.draw = function () {
    backBtn.mousePressed(clickedBack);
    nextBtn.mousePressed(clickedNext);
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedNext() {
    removeBtns();
    engine.setDefaultParams();
      // reset values for calculations
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

    engine.currentCongLogic(true); // uncomment if drawing to screen real time
  
    mgr.showScene(sBodies);
  }

  function removeBtns() {
    backBtn.remove();
    nextBtn.remove();
  }
}

function loadSessionS1() {
  let backBtn, nextBtn;
  let selection;
  let numResults = 10;
  let showCount = 1;
  
  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");
    
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1>";
    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>Select Session</h2>"
      + "<p>[Description here on how to use the interface]</p>"
      + "<p>&nbsp;&nbsp;&nbsp;&nbsp; Session ID "
      + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Voting Members "
      + "&nbsp;&nbsp;&nbsp;&nbsp; Parties</p>";
    // var allSessions = getAllSessions(); // array of all sessions in db
    // console.log(allSessions);
    //showCount++; // increment showCount through some trigger - btn press, key press, etc
    selection = createRadio("sessions"); // attatch to HTML
    //selection.position(width/5, height/2);
    selection.size(420);
    getSessions().then((result) => {
      console.log(result);
      // show sessions in order from last 10 
      // -- OC written like this so that startIX can move backward to show next prev 10 when triggered (btn press?)
      let startIX = result.length-(numResults*showCount);
      if (startIX < 0) {
        startIX = 0;
      }
      for (let i=startIX; (i<result.length); i++) {
        if (i<startIX+numResults) {
        console.log("i: " + i);
        let sObj = result[i].finalConfig.config;
        console.log(sObj);
        let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;
        selection.option(result[i].uniqueID + getSpaces(15) + totalVoting + getSpaces(20) + sObj.numParties, sObj); //+ " " + totalVoting + " " + result[i].numParties);
        //document.getElementById("start-desc").innerHTML += "<br>";
        }
      }
      // for (let i=0; i<result.length; i++) {
      //   document.getElementById("start-desc").innerHTML += "<p>ID: " + result[i].uniqueID + "</p>";
      // }
      // document.getElementById("start-desc").innerHTML += "</p>";
    });
    
    selection.parent("start-desc");
    // let options = selectAll('input[type="radio"]');
    // for (let i = 0; i < options.length; i++) {
    //   options[i].style('display', 'block'); // Set display to block to ensure each option is on its own line
    // }

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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    backBtn = createButton('Start Over');
    backBtn.id('back-btn');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);

    nextBtn = createButton('Next');
    nextBtn.id('next-btn-1');
    nextBtn.class('buttons');
    nextBtn.parent(buttonDiv);

  }

  this.draw = function () {
    let selectedSession = selection.value();
    console.log(selectedSession);
    backBtn.mousePressed(clickedBack);
    nextBtn.mousePressed(clickedNext);
  }

  function getSpaces(x) {
    let s = "";
    for (i=0; i<x; i++) {
      s += "\u00A0";
    }
    return s;
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedNext() {
    removeBtns();
    mgr.showScene(loadSessionS2);
  }

  function removeBtns() {
    selection.remove();
    backBtn.remove();
    nextBtn.remove();
  }
}

function loadSessionS2() {
  let backBtn, nextBtn;
  
  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1>";
    document.getElementById("main-btn-div").style.display = "none";


    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>Load Session</h2><p>[Description here on how to use the interface]</p><p>[Show timestamp-based name as ID for new (loaded) session]</p>";

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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // let buttonDiv = document.getElementById('button-div');

    backBtn = createButton('Start Over');
    backBtn.id('back-btn');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);

    nextBtn = createButton('Next');
    nextBtn.id('next-btn-1');
    nextBtn.class('buttons');
    nextBtn.parent(buttonDiv);
  }

  this.draw = function () {
    backBtn.mousePressed(clickedBack);
    nextBtn.mousePressed(clickedNext);
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedNext() {
    removeBtns();
    engine.setDefaultParams();
    // reset values for calculations
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

    engine.currentCongLogic(true); // uncomment if drawing to screen real time
    mgr.showScene(sBodies);
  }

  function removeBtns() {
    backBtn.remove();
    nextBtn.remove();
  }
}

/*
//democracy simulater, connected to user values
function configVisual() {
  console.log("democracy userEdits: " + userEdits);

  this.setup = function () {

    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
    // dispButton();
    // let fs = fullscreen();
    // fullscreen(!fs);

  }



  this.enter = function () {
    
    //redraws canvas with new width and height when user simulator restarts
    if (reconfigBool == true) {
      // windowResized();
      visual.dWidth = windowWidth * .8;
      visual.dHeight = windowHeight * .8;
      canvas = createCanvas(visual.dWidth, visual.dHeight);
      let canvasDiv = document.getElementById('vote');
      canvas.parent(canvasDiv);
      reconfigBool = false;
    }

    document.getElementById("page-container").style.display = "none";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";
    document.getElementById("main-btn-div").style.display = "none";

    console.log(mgr.isCurrent(configVisual));

  }

  // run the simulator for user configuration
  this.draw = function () {

    // if (frameCount >= 2000 && frameCount < 2120) { // for testing multiple runs
    //   //engine = new DemocracyEngine();
    //   inputVar();
     engine.currentCongLogic(userEdits);
    //   console.log("RESULT " + (frameCount-1999) + " : " + engine.voteResults);
    // }

    // OC run voting simulation 10 times on this configuration
    // for (let i=resultIX; i < MAX_SIM_RESULTS; i++) {
        
    //     engine.bodyCount = 0;
    //       engine.bodyPass = [];
    //       engine.resetCount();
    //       engine.resetDraw();
    //       engine.votingBodyCounts = [];
    //       engine.superThreshIndex = [];
    //     engine.currentCongLogic(userEdits);
    //     //let engineSim = new DemocracyEngine
    //     updateSession();
    //     resultIX++;
    // }

    // OC display the last voting result
    console.log("numBodies in cv: " + this.numBodies);
    // visual.displayImmediate(engine);
    // params set and vals reset in prev scene when button is clicked
    visual.displayImmediateBlank(engine);


      // OC when visual display of rectangles is done, show buttons
      //if (visual.userInputState) { // && resultIX == 0) {
        //finalDisplay(); // only displays once
        
        //updateSession();
        //resultIX++;
        //addSession(toSchema(engine)); // OC save session to db after displaying to screen
      //}

      //showPanes();
    }

  // Displays the voting results as text on the screen
  // also displays buttons
  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = colorOverlay;
      userInput(); // show buttons
      visual.finalTextDisplayUser(engine, helvFont, colorOverlay, resultIX-1);
      changeText(engine.decisionTxt); // change final decision text at bottom of screen 
    }, 1500); // 1.5 seconds before text overlay shows

    //engine.finalDisplayBool = false;
    visual.userInputState = false;

  }

  //Once Bill Pass result has been calculated users can enter in their own variables to reconfigure congress or recalculate the vote with the same parameters
  function userInput() {

    recalBtn = createButton('RECALCULATE VOTE');
    recalBtn.id('recal-btn');
    recalBtn.class('buttons');
    recalBtn.mousePressed(inputVar);

    buttonRC = createButton('RECONFIGURE GOVERNMENT');
    buttonRC.id('rec-btn');
    buttonRC.class('buttons');
    buttonRC.mousePressed(nextScene);

    buttonRes = createButton('RUN DEFAULT SETTINGS');
    buttonRes.id('res-btn');
    buttonRes.class('buttons');
    buttonRes.mousePressed(userRecount);

    emailBtn = createButton('EMAIL YOUR RESULTS');
    emailBtn.id('email-btn');
    emailBtn.class('buttons');
    emailBtn.mousePressed(emailFunc);

    // let buttonDiv = document.getElementById('button-div');
    emailBtn.parent(buttonDiv);
    buttonRC.parent(buttonDiv);
    buttonRes.parent(buttonDiv);
    recalBtn.parent(buttonDiv);

  }

  //Reloads the page if user would like to reset values
  function userRecount() {
    // save session to db then reload the page
    saveSession();
    location.reload();
    //reset();
  }


  function userVars() {
    //AB added this here for less confusion for the user
    buttonRC.remove();
    // background(0);
    changeText(" ");
  }
}




// --------------------------------------------------------------------------------


//democracy simulater, connected to user values
function democracyEngineUser() {
  console.log("democracy userEdits: " + userEdits);

  this.setup = function () {

    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
    // dispButton();
    // let fs = fullscreen();
    // fullscreen(!fs);

  }



  this.enter = function () {
    
    //redraws canvas with new width and height when user simulator restarts
    if (reconfigBool == true) {
      // windowResized();
      visual.dWidth = windowWidth * .8;
      visual.dHeight = windowHeight * .8;
      canvas = createCanvas(visual.dWidth, visual.dHeight);
      let canvasDiv = document.getElementById('vote');
      canvas.parent(canvasDiv);
      reconfigBool = false;
    }

    document.getElementById("page-container").style.display = "none";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";
    document.getElementById("main-btn-div").style.display = "none";

    console.log(mgr.isCurrent(democracyEngineUser));

  }

  // run the simulator for user configuration
  this.draw = function () {

    // if (frameCount >= 2000 && frameCount < 2120) { // for testing multiple runs
    //   //engine = new DemocracyEngine();
    //   inputVar();
    // engine.currentCongLogic(userEdits);
    //   console.log("RESULT " + (frameCount-1999) + " : " + engine.voteResults);
    // }

    // OC run voting simulation 10 times on this configuration
    for (let i=resultIX; i < MAX_SIM_RESULTS; i++) {
        
        engine.bodyCount = 0;
          engine.bodyPass = [];
          engine.resetCount();
          engine.resetDraw();
          engine.votingBodyCounts = [];
          engine.superThreshIndex = [];
        engine.currentCongLogic(userEdits);
        //let engineSim = new DemocracyEngine
        updateSession();
        resultIX++;
    }

    // OC display the last voting result
    visual.displayVoting(engine);

      // OC when visual display of rectangles is done, show buttons
      if (visual.userInputState) { // && resultIX == 0) {
        finalDisplay();
        
        //updateSession();
        //resultIX++;
        //addSession(toSchema(engine)); // OC save session to db after displaying to screen
      }

      //showPanes();
    }

  // Displays the voting results as text on the screen
  // also displays buttons
  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = colorOverlay;
      userInput(); // show buttons
      visual.finalTextDisplayUser(engine, helvFont, colorOverlay, resultIX-1);
      changeText(engine.decisionTxt); // change final decision text at bottom of screen 
    }, 1500); // 1.5 seconds before text overlay shows

    //engine.finalDisplayBool = false;
    visual.userInputState = false;

  }

  //Once Bill Pass result has been calculated users can enter in their own variables to reconfigure congress or recalculate the vote with the same parameters
  function userInput() {

    recalBtn = createButton('RECALCULATE VOTE');
    recalBtn.id('recal-btn');
    recalBtn.class('buttons');
    recalBtn.mousePressed(inputVar);

    buttonRC = createButton('RECONFIGURE GOVERNMENT');
    buttonRC.id('rec-btn');
    buttonRC.class('buttons');
    buttonRC.mousePressed(nextScene);

    buttonRes = createButton('RUN DEFAULT SETTINGS');
    buttonRes.id('res-btn');
    buttonRes.class('buttons');
    buttonRes.mousePressed(userRecount);

    emailBtn = createButton('EMAIL YOUR RESULTS');
    emailBtn.id('email-btn');
    emailBtn.class('buttons');
    emailBtn.mousePressed(emailFunc);

    // let buttonDiv = document.getElementById('button-div');
    emailBtn.parent(buttonDiv);
    buttonRC.parent(buttonDiv);
    buttonRes.parent(buttonDiv);
    recalBtn.parent(buttonDiv);

  }

  //Reloads the page if user would like to reset values
  function userRecount() {
    // save session to db then reload the page
    saveSession();
    location.reload();
    //reset();
  }


  function userVars() {
    //AB added this here for less confusion for the user
    buttonRC.remove();
    // background(0);
    changeText(" ");
  }
}

//original democracy simulater, connected to current values of 117th congress
function democracyEngineOrigin() {

  console.log("origin democracy userEdits: " + userEdits);

  this.setup = function () {
    textFont(helvFont);
    let dWidth = windowWidth * .8;
    let dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);

  }

  this.enter = function () {

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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    // engine.currentCongLogic(forUser);
    visual.dWidth = windowWidth * .8;
    visual.dHeight = windowHeight * .8;
  }

  this.draw = function () {

    // if (frameCount >= 300 && frameCount < 420) {
    // engine = new DemocracyEngine();
    // // engine.bodyCount = 0;
    // // engine.resetCount();
    // // engine.resetDraw();
    // // engine.superThreshIndex = [];
    // // engine.votingBodyCounts = [];
    // // engine.bodyPass = [];
    // engine.currentCongLogic(userEdits);
    // console.log("RESULT " + (frameCount-299) + " : " + engine.voteResults);
    // }

    engine.currentCongLogic(userEdits);

    // OC when engine is done with voting calculation, show votes
    //if (engine.finalDisplayBool) {
      visual.displayVoting(engine);

      // OC when visual display of rectangles is done, show buttons
      if (visual.userInputState) {
        finalDisplay();
        // console.log(engine.votingBodyCounts); // for testing
        //addSession(toSchema(engine)); // OC save session to db after displaying to screen
      }

    //}



  }


  //Displays the buttons for user input
  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = colorOverlay;
      userInput(); // show buttons
      visual.finalTextDisplayDefault(engine, helvFont, colorOverlay);
      changeText(engine.decisionTxt); // change final decision text at bottom of screen
    }, 1500); // 1.5 seconds before text overlay showss

    //engine.finalDisplayBool = false;
    visual.userInputState = false;

  }

  //Once Bill Pass result has been calculated users can enter in their own variables to reconfigure congress or recalculate the vote with the same parameters
  function userInput() {

    engine.bodyCount = engine.numBodies;

    buttonDef = createButton('DISPLAY DEFAULT SETTINGS');
    buttonDef.id('def-btn');
    buttonDef.mousePressed(defResult);

    buttonRes = createButton('RECALCULATE VOTE');
    buttonRes.id('res-btn');
    buttonRes.mousePressed(userRecount);

    buttonRC = createButton('RECONFIGURE GOVERNMENT');
    buttonRC.id('rec-btn');
    buttonRC.mousePressed(nextScene);

    // let buttonDiv = document.getElementById('button-div');
    buttonRC.parent(buttonDiv);
    buttonRes.parent(buttonDiv);
    buttonDef.parent(buttonDiv);
    // buttonDiv.center("horizontal");
  }

  //Reloads the page if user would like to reset values
  function userRecount() {
    location.reload();
    //reset();
  }


}

*/

let updateBtn, nextPaneBtn, prevPaneBtn;
let paramChangedBool = false;

//user input page for number of legislative bodies (1-3)
function sBodies() {
  var slider1 = document.getElementById('slider01');

  this.setup = function () {
    textSize(15);
    noStroke();
    if (reconfigBool == true) {
      // windowResized();
      visual.dWidth = windowWidth * .9;
      visual.dHeight = windowHeight * .8;
      canvas = createCanvas(visual.dWidth, visual.dHeight);
      let canvasDiv = document.getElementById('vote');
      canvas.parent(canvasDiv);
      reconfigBool = false;
    }

    createSlider();
    sliderVals();

  }

  this.enter = function () {

    console.log("0 Slider Page");
    document.getElementById("page-container").style.display = "none";
    showPanesBool = true;
    document.getElementById("page1").style.display = "block";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    // background(bColor);
    document.body.style.backgroundColor = bColor;
    // // engine.currentCongLogic(true);
    // visual.ix = 0;
    // visual.displayImmediateBlank(engine);

    changeText(" ");

    sliderVals();
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF LEGISLATIVE BODIES";

    if (!document.getElementById('prev-pane-btn')) {
      prevPaneBtn = createButton('Back');
      prevPaneBtn.id('prev-pane-btn');
      prevPaneBtn.class('buttons');
      prevPaneBtn.parent(buttonDiv);
    }

    if (!document.getElementById('update-btn')) {
      updateBtn = createButton('Update');
      updateBtn.id('update-btn');
      updateBtn.class('buttons');
      updateBtn.parent(buttonDiv);
    }

    if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Next');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
    }

    nextPaneBtn.mousePressed(nextPane);
    prevPaneBtn.mousePressed(previousPane);
    document.getElementById('prev-pane-btn').style.visibility = 'hidden';
  }

  this.draw = function () {
    // background(bColor);
    // document.body.style.backgroundColor = bColor;
    // // engine.currentCongLogic(true);
    // visual.ix = 0;

    visual.displayImmediateBlank(engine);
    
    //visual.displayImmediate(engine);

    //visual.displayVoting(engine); // draws in real time, reset was when previous scene button clicked - not every time this scene is entered

    paneToggle();

    if (userNumLegislative != engine.numLegislativeBodies) {
      document.getElementById("update-btn").disabled = false; // enable button
    } else {
      document.getElementById("update-btn").disabled = true;
    }

    
    updateBtn.mousePressed(clickedUpdate);
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    //removeButtons();
    //engine.setDefaultParams();
    setEngineParams(engine);
    if (engine.numHouse2 == 0) {
      engine.numHouse2 = 1;
    }
    if (engine.numSenate == 0) { // chamber 3
      engine.numSenate = 1; // just to give default value
    }
    if (engine.numPres == 0) {
      engine.numPres = 1;
    }

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function removeButtons() {
    updateBtn.remove();
  }

    function createSlider() {

      noUiSlider.create(slider1, {
        start: userNumLegislative,
        range: {
          'min': [1],
          'max': [3]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }


    // COME BACK HERE FOR CODE REVIEW

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      slider1.noUiSlider.on('update', function (values, handle) {
        userNumLegislative = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
    }

}

//user input page for for amount of members in each legislative body
function sLegislative() {

  var slider1 = document.getElementById('slider1'); // original house
  var slider2;// = document.getElementById('s2-p2'); // house2
  var slider3;// = document.getElementById('s3-p2'); // senate
  // create var for third legislative chamber
  var slider4;// = document.getElementById('s4-p2'); // vp
  var slider5;// = document.getElementById('s5-p2'); // pres
   
  var curNumHouse;// = parseInt(engine.numHouse);
  var curNumHouse2;// = parseInt(engine.numHouse2);
  var curNumSen;// = parseInt(engine.numSenate);
  var curNumVP;// = parseInt(engine.numVP);
  var curNumPres;// = parseInt(engine.numPres);
  //userNumLegislative = parseFloat(userNumLegislative);


  this.setup = function () {
    // textSize(15);
    // noStroke();

  }

  this.enter = function () {
    userNumLegislative = parseFloat(userNumLegislative);

    if (userNumLegislative == 1) {
      userNumHouse2 = 0; // 0 in chamber 2 & all its parties
      userPerHouse2Body[0] = 0.0;
      userPerHouse2Body[1] = 0.0;
      userPerHouse2Body[2] = 0.0;

      userNumSenate = 0; // 0 in chamber 3 & all its parties
      userPerSenateBody[0] = 0.0;
      userPerSenateBody[1] = 0.0;
      userPerSenateBody[2] = 0.0;

    } else if (userNumLegislative == 2) {
      userNumSenate = 0; // 0 in chamber 3 & all its parties
      userPerSenateBody[0] = 0.0;
      userPerSenateBody[1] = 0.0;
      userPerSenateBody[2] = 0.0;
    }

    curNumHouse = parseInt(userNumHouse);
    curNumHouse2 = parseInt(userNumHouse2);
    curNumSen = parseInt(userNumSenate);
    curNumVP = parseInt(userNumVP);
    curNumPres = parseInt(userNumPres);
    

    console.log("1st Slider Page");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();
    document.getElementById('prev-pane-btn').style.visibility = 'visible';

    // prevPaneBtn.mousePressed(previousPane);
    // nextPaneBtn.mousePressed(nextPane);

  }

  this.draw = function () {
    // draws in real time, reset was when previous scene button clicked - not every time this scene is entered
    //visual.displayVoting(engine);
    visual.displayImmediateBlank(engine);
    paneToggle();


    // if sliders changed any values on this page, enable update button
    if (userNumHouse != engine.numHouse || userNumHouse2 != engine.numHouse2 || userNumSenate != engine.numSenate ||userNumVP != engine.numVP || userNumPres != engine.numPres) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);
    // prevPaneBtn.mousePressed(previousPane);
    // nextPaneBtn.mousePressed(nextPane);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  // OC display sliders based on number of legislative bodies chosen on previous page
  // OC set id of sliders based on number of chambers so that css can place them in order with no gaps
  function checkNumBodies() {

    if (userNumLegislative == 1) {
      document.getElementById("s1-p2").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST CHAMBER</p></div>";
      document.getElementById("s1-p2").style.display = "block";
      document.getElementById("s2-p2").innerHTML = "<div id='slider2'><p id='slider-text-2'>VICE PRESIDENCY</p></div>";
      document.getElementById("s2-p2").style.display = "block";
      document.getElementById("s3-p2").innerHTML = "<div id='slider3'><p id='slider-text-3'>PRESIDENCY</p></div>";
      document.getElementById("s3-p2").style.display = "block";
      document.getElementById("s4-p2").innerHTML = "<div id='slider4'><p id='slider-text-4'>SECOND CHAMBER</p></div>";
      document.getElementById("s4-p2").style.display = "none";
      document.getElementById("s5-p2").innerHTML = "<div id='slider4a'><p id='slider-text-5'>THIRD CHAMBER</p></div>";
      document.getElementById("s5-p2").style.display = "none";
      
      slider1 = document.getElementById('slider1');
      slider2 = document.getElementById('slider4'); // house2 chamber, set slider but not used
      slider3 = document.getElementById('slider4a'); // 3rd (senate) chamber, set slider but not used
      slider4 = document.getElementById('slider2'); // vp
      slider5 = document.getElementById('slider3'); // pres

    } else if (userNumLegislative == 2) {
      // show second chamber slider
      document.getElementById("s1-p2").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST CHAMBER</p></div>";
      document.getElementById("s1-p2").style.display = "block";
      document.getElementById("s2-p2").innerHTML = "<div id='slider2'><p id='slider-text-2'>SECOND CHAMBER</p></div>";
      document.getElementById("s2-p2").style.display = "block";
      document.getElementById("s3-p2").innerHTML = "<div id='slider3'><p id='slider-text-3'>VICE PRESIDENCY</p></div>";
      document.getElementById("s3-p2").style.display = "block";
      document.getElementById("s4-p2").innerHTML = "<div id='slider4'><p id='slider-text-4'>PRESIDENCY</p></div>";
      document.getElementById("s4-p2").style.display = "block";
      document.getElementById("s5-p2").innerHTML = "<div id='slider4a'><p id='slider-text-5'>THIRD CHAMBER</p></div>";
      document.getElementById("s5-p2").style.display = "none";

      slider1 = document.getElementById('slider1');
      slider2 = document.getElementById('slider2'); // house2, set slider but not used
      slider3 = document.getElementById('slider4a'); // 3rd (senate) chamber
      slider4 = document.getElementById('slider3'); // vp
      slider5 = document.getElementById('slider4'); // pres

    } else {
      // = "block" for all 3 body sliders
      document.getElementById("s1-p2").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST CHAMBER</p></div>";
      document.getElementById("s1-p2").style.display = "block";
      document.getElementById("s2-p2").innerHTML = "<div id='slider2'><p id='slider-text-2'>SECOND CHAMBER</p></div>";
      document.getElementById("s2-p2").style.display = "block";
      document.getElementById("s3-p2").innerHTML = "<div id='slider3'><p id='slider-text-3'>THIRD CHAMBER</p></div>";
      document.getElementById("s3-p2").style.display = "block";
      document.getElementById("s4-p2").innerHTML = "<div id='slider4'><p id='slider-text-4'>VICE PRESIDENCY</p></div>";
      document.getElementById("s4-p2").style.display = "block";
      document.getElementById("s5-p2").innerHTML = "<div id='slider4a'><p id='slider-text-5'>PRESIDENCY</p></div>";
      document.getElementById("s5-p2").style.display = "block";

      slider1 = document.getElementById('slider1');
      slider2 = document.getElementById('slider2'); // house2, set slider but not used
      slider3 = document.getElementById('slider3'); // 3rd (senate) chamber
      slider4 = document.getElementById('slider4'); // vp
      slider5 = document.getElementById('slider4a'); // pres
    }
  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    createSlider();
    sliderVals();

    function createSlider() {

      noUiSlider.create(slider1, {
        start: curNumHouse,
        range: {
          'min': [1],
          'max': [500]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      noUiSlider.create(slider3, {
        start: curNumSen,
        range: {
          'min': [1],
          'max': [500]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      // OC TODO create slider for 3rd legislative body

      noUiSlider.create(slider4, {
        start: curNumVP,
        range: {
          'min': [1],
          'max': [500]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });


      noUiSlider.create(slider5, {
        start: curNumPres,
        range: {
          'min': [0], // allow for 0 presidents
          'max': [500]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });


      noUiSlider.create(slider2, {
        start: curNumHouse2,
        range: {
          'min': [1],
          'max': [500]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }


    // COME BACK HERE FOR CODE REVIEW

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        userNumHouse = values[0];
        curNumHouse = userNumHouse;
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });

      // house2
      if (userNumLegislative >= 2) {
        // update new slider
        slider2.noUiSlider.on('update', function (values, handle) {
          userNumHouse2 = values[0];
          curNumHouse2 = userNumHouse2;
        });
      } else {
        // update new var to 0
        userNumHouse2 = 0;
        userPerHouse2Body[0] = 0;
        userPerHouse2Body[1] = 0;
        userPerHouse2Body[2] = 0;
      }

      // OC update slider for 2nd body if user chose >=2 bodies
      // senate
      if (userNumLegislative == 3) {
        slider3.noUiSlider.on('update', function (values, handle) {
          userNumSenate = values[0];
          curNumSen = userNumSenate;
          // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
        });
      } else {
          userNumSenate = 0; // set senate members to 0 later, in sMembers
          userPerSenateBody[0] = 0;
          userPerSenateBody[1] = 0;
          userPerSenateBody[2] = 0;
      }

      // always update vp and pres
      slider4.noUiSlider.on('update', function (values, handle) {
        userNumVP = values[0];
        curNumVP = userNumVP;
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      slider5.noUiSlider.on('update', function (values, handle) {
        userNumPres = values[0];
        curNumPres = userNumPres;
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });

    }
  }
}

//user input page for number of parties, current maximum of 3
function sParties() {
  var slider5 = document.getElementById('slider5');

  this.setup = function () {
    createSlider();
    sliderVals();
  }
  this.enter = function () {
    console.log("2nd Slider Page");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF POLITICAL PARTIES";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    sliderVals();

    // OC disable update button on this pane for now - not sure what to update visually
    document.getElementById("update-btn").disabled = true;

  }
  this.draw = function () {
    //visual.displayVoting(engine);
    visual.displayImmediateBlank(engine);
    paneToggle();

    if (userNumParties != engine.numParties) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    // set default vars so update visualization reflects change
    if (userNumParties == 2) {
      userPerVPBody[0] = 0.5;
      userPerVPBody[1] = 0.5;
      userPerVPBody[2] = 0.0;
      userPerPresBody[0] = 0.5;
      userPerPresBody[1] = 0.5;
      userPerPresBody[2] = 0.0;
      userPerHouseBody[0] = 0.5;
      userPerHouseBody[1] = 0.5;
      userPerHouseBody[2] = 0.0;
      if (userNumLegislative >= 2) {
        userPerHouse2Body[0] = 0.5;
        userPerHouse2Body[1] = 0.5;
        userPerHouse2Body[2] = 0.0;
        if (userNumLegislative == 3) {
          userPerSenateBody[0] = 0.5;
          userPerSenateBody[1] = 0.5;
          userPerSenateBody[2] = 0.0;
        }
      }
    } else if (userNumParties == 3) {
      userPerVPBody[0] = 0.34;
      userPerVPBody[1] = 0.33;
      userPerVPBody[2] = 0.33;
      userPerPresBody[0] = 0.34;
      userPerPresBody[1] = 0.33;
      userPerPresBody[2] = 0.33;
      userPerHouseBody[0] = 0.34;
      userPerHouseBody[1] = 0.33;
      userPerHouseBody[2] = 0.33;
      if (userNumLegislative >= 2) {
        userPerHouse2Body[0] = 0.34;
        userPerHouse2Body[1] = 0.33;
        userPerHouse2Body[2] = 0.33;
        if (userNumLegislative == 3) {
          userPerSenateBody[0] = 0.34;
          userPerSenateBody[1] = 0.33;
          userPerSenateBody[2] = 0.33;
        }
      }
    }
    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

    function createSlider() {


      noUiSlider.create(slider5, {
        start: userNumParties,
        range: {
          'min': [1],
          'max': [3]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

    function sliderVals() {
      var toolTip = slider5.querySelectorAll('.noUi-tooltip');
      var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

      for (var i = 0; i < toolTip.length; i++) {
        toolTip[i].classList.add(classes[i]);
      }

      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      slider5.noUiSlider.on('update', function (values, handle) {
        userNumParties = values[0];
        // rangeSliderValueElement.innerHTML = userNumParties;
        // set 0 vals for parties not in this config
        if (userNumParties <= 1) {
          userPerHouseBody = [];
          userPerHouse2Body = [];
          userPerSenateBody = [];
          userPerPresBody = [];
          userPerVPBody = [];
          userPerHouseBody[0] = 1.0;
          userPerHouse2Body[0] = 1.0;
          userPerSenateBody[0] = 1.0;
          userPerPresBody[0] = 1.0;
          userPerVPBody[0] = 1.0;
          userPerHouseBody[1] = 0.0;
          userPerHouse2Body[1] = 0.0;
          userPerSenateBody[1] = 0.0;
          userPerVPBody[1] = 0.0;
          userPerPresBody[1] = 0.0;
          userPerHouseBody[2] = 0.0;
          userPerHouse2Body[2] = 0.0;
          userPerSenateBody[2] = 0.0;
          userPerVPBody[2] = 0.0;
          userPerPresBody[2] = 0.0;
          userNumParties = parseInt(userNumParties);
          onePartyBool = true;

          userNumHouse = parseInt(userNumHouse);
          userNumHouse2 = parseInt(userNumHouse2)
          userNumPres = parseInt(userNumPres);
          userNumVP = parseInt(userNumVP);
          userNumSenate = parseInt(userNumSenate);
          userNumParties = parseInt(userNumParties);

        } else if (userNumParties == 2) {
          userPerHouseBody[2] = 0.0;
          userPerHouse2Body[2] = 0.0;
          userPerSenateBody[2] = 0.0;
          userPerVPBody[2] = 0.0;
          userPerPresBody[2] = 0.0;
        }

      });
    }
}

function sMembersFirstChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumHouse = parseInt(userNumHouse); //parseInt(engine.numHouse); // current number of total members in chamber 1
  // var slider1max; // = parseInt(userNumHouse);
  // var slider2max; // = floor(slider1max / 2);
  // var slider3max; // = slider1max - slider2max;
  var maxSlider;
  var startVals = [];

  this.setup = function () {
    startVals[0] = userPerHouseBody[0];
    startVals[1] = userPerHouseBody[1];
    startVals[2] = userPerHouseBody[2];
  }

  this.enter = function () {
    // OC TODO - move to sParties? or to each scene that sets party members for a chamber

    // if (userNumParties == 2) {
    //   maxSlider = parseInt(userNumHouse) - 1; // OC total minus 1 bc w/ 2 bodies chosen, at least 1 member must always be in the other body
    // } else if (userNumParties == 3) {
    //   maxSlider = parseInt(userNumHouse - 2); // party B and C each must have at least 1 member since 3 parties were chosen
    // } else {

    // makes slider start vals always reflect total members
      maxSlider = parseInt(userNumHouse);
      startVals[0] = userPerHouseBody[0];
      startVals[1] = userPerHouseBody[1];
      startVals[2] = userPerHouseBody[2];
      if (userNumParties == 2 && (startVals[0] + startVals[1]) < 1) {
        startVals[0] = ceil(maxSlider/2) / maxSlider;
        startVals[1] = 1.0 - startVals[0];
        startVals[2] = 0;
      } else if (userNumParties == 3 && startVals[0] + startVals[1] + startVals[2] < 1) {
        startVals[0] = ceil(maxSlider/3) / maxSlider; // split evenly
        startVals[1] = floor(maxSlider/3) / maxSlider;
        startVals[2] = 1.0 - (startVals[0] + startVals[1]);
      }
      
    //}
    // slider1max = parseInt(userNumHouse);
    // slider2max = floor(slider1max / 2);
    // slider3max = slider1max - slider2max;

    console.log("Slider Page Chamber 1 Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR FIRST CHAMBER";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "none";
    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "none";
    document.getElementById("page10").style.display = "none";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
  }

  this.draw = function () {
    //visual.displayVoting(engine);

    visual.displayImmediateBlank(engine);
    paneToggle();
    console.log("Party A: " + userPerHouseBody[0] + " Party B: " + userPerHouseBody[1] + " Party C: " + userPerHouseBody[2]);

    // if sliders changed any values on this page, enable update button
    if (userPerHouseBody[0] != engine.perDemHouse || userPerHouseBody[1] != engine.perRepHouse || userPerHouseBody[2] != engine.perIndHouse) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function checkNumBodies() {
    document.getElementById("s1-p3").innerHTML = "<div class='first-slider' id='slider-1a'><p id='slider-text-1'>POLITICAL PARTY A</p></div>";
    document.getElementById("s2-p3").innerHTML = "<div id='slider-1b'><p id='slider-text-2'>POLITICAL PARTY B</p></div>";
    document.getElementById("s3-p3").innerHTML = "<div id='slider-1c'><p id='slider-text-3'>POLITICAL PARTY C</p></div>";

    if (userNumParties == 1) {
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").style.display = "none";
      document.getElementById("s3-p3").style.display = "none";
      // document.getElementById("slider-1a").style.display = "block";
      // document.getElementById("slider-1b").style.display = "none";
      // document.getElementById("slider-1c").style.display = "none";

    } else if (userNumParties == 2) {
      console.log("here first chamber");
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").style.display = "none";
      // document.getElementById("slider-1a").style.display = "block";
      // document.getElementById("slider-1b").style.display = "block";
      // document.getElementById("slider-1c").style.display = "none";
    } else {
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").style.display = "block";
      // document.getElementById("slider-1a").style.display = "block";
      // document.getElementById("slider-1b").style.display = "block";
      // document.getElementById("slider-1c").style.display = "block";
    }
    slider1 = document.getElementById('slider-1a'); // party a
    slider2 = document.getElementById('slider-1b');; // party b
    slider3 = document.getElementById('slider-1c');; // party c

  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    createSlider();
    sliderVals();

    function createSlider() {

      // if only 1 party, create slider A so that there is no change
      if (userNumParties == 1) {
        noUiSlider.create(slider1, {
          start: (startVals[0] * maxSlider), // fix later where to start
          range: {
            'min': [maxSlider],
            'max': [maxSlider]
          },
          cssPrefix: 'noUi-',
          tooltips: true,
          pips: {
            mode: 'range',
            density: 'range',
          },
          step: 0,
          format: wNumb({
            decimals: 0
          })
        });
      } else {

      noUiSlider.create(slider1, {
        start: (startVals[0] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

      noUiSlider.create(slider2, {
        start: (startVals[1] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      noUiSlider.create(slider3, {
        start: (startVals[2] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userPerHouseBody = [];
      var numPerHouseBody = [];
      var housePercentage; // helper var
      var numPartyA;
      var numPartyB;
      var numPartyC;

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        numPartyA = values[0];
        userPerHouseBody[0] = values[0];
        numPerHouseBody[0] = userPerHouseBody[0];
        housePercentage = userPerHouseBody[0] / userNumHouse;
        housePercentage = roundNum(housePercentage, 2);
        userPerHouseBody[0] = housePercentage;
        // if (userNumParties == 2) {
        //   slider2.noUiSlider.set(userNumHouse - values[0]);
        // }
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
          numPartyB = values[0];
          userPerHouseBody[1] = values[0];
          numPerHouseBody[1] = userPerHouseBody[1];
          housePercentage = userPerHouseBody[1] / userNumHouse;
          housePercentage = roundNum(housePercentage, 2);
          userPerHouseBody[1] = housePercentage;
          // if (userNumParties == 2) {
          //   slider1.noUiSlider.set(userNumHouse - values[0]);
          // }
        });
      } else { // set party b to 0
        userPerHouseBody[1] = 0;
      }

      if (userNumParties == 3) { // party a b c
        slider3.noUiSlider.on('update', function (values, handle) {
          numPartyC = values[0];
          userPerHouseBody[2] = values[0];
          numPerHouseBody[2] = userPerHouseBody[2];
          housePercentage = userPerHouseBody[2] / userNumHouse;
          housePercentage = roundNum(housePercentage, 2);
          userPerHouseBody[2] = housePercentage;
        });
      } else { // set party c to 0
        userPerHouseBody[2] = 0;
      }

      
      if (userNumParties == 2) {
        // when user slides the party A slider, update slider B
        slider1.noUiSlider.on('slide', function(event) {
          slider2.noUiSlider.set((userNumHouse - numPartyA));
          console.log("minus value: " + (userNumHouse - numPartyA));
        });

        // when user slides the party B slider, update slider A
        slider2.noUiSlider.on('slide', function(event) {
          slider1.noUiSlider.set(userNumHouse - numPartyB);
        });
      } 
      else if (userNumParties == 3) {
        
        // when user slides the party A slider, update sliders B and C evenly
        slider1.noUiSlider.on('slide', function(event) {
          let sliderBval = ceil((userNumHouse - numPartyA) / 2);
          let sliderCval = (userNumHouse - numPartyA) - sliderBval;
          slider2.noUiSlider.set(sliderBval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party B slider, update sliders A and B evenly
        // slider2.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((userNumHouse - numPartyB) / 2);
        //   let sliderCval = (userNumHouse - numPartyB) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider3.noUiSlider.set(sliderCval);
        // });

        // when user slides party B slider, allow party B to go up to party A
        // and make party C update to the remainder
        slider2.noUiSlider.on('slide', function(event) {
          if (parseInt(slider2.noUiSlider.get()) > userNumHouse - numPartyA) {
            slider2.noUiSlider.set(userNumHouse - numPartyA);
          }
          let sliderAval = ceil((userNumHouse - numPartyB) / 2);
          let sliderCval = (userNumHouse - numPartyB) - numPartyA;
          //slider1.noUiSlider.set(sliderAval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party C slider, update sliders A and B evenly
        // slider3.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((userNumHouse - numPartyC) / 2);
        //   let sliderBval = (userNumHouse - numPartyC) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider2.noUiSlider.set(sliderBval);
        // });

        // when user slides party C slider, allow party C to go up to party A remainder
        // and make party B update to the remainder of A + B
        // i.e. reverses of what happens when slider B is moved
        slider3.noUiSlider.on('slide', function(event) {
          let sliderCval = maxSlider - numPartyA;
          if (parseInt(slider3.noUiSlider.get()) > sliderCval) {
            slider3.noUiSlider.set(sliderCval);
          }          
          slider2.noUiSlider.set((maxSlider - numPartyC) - numPartyA);
        });

        
      }


    }

  }
}

function sMembersSecondChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumHouse2 = parseInt(userNumHouse2); //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  var startVals = [];
  // var slider1max; // = parseInt(userNumHouse);
  // var slider2max; // = floor(slider1max / 2);
  // var slider3max; // = slider1max - slider2max;

  this.setup = function () {
    startVals[0] = userPerHouse2Body[0];
    startVals[1] = userPerHouse2Body[1];
    startVals[2] = userPerHouse2Body[2];
  }

  this.enter = function () {
    maxSlider = parseInt(userNumHouse2);
    startVals[0] = userPerHouse2Body[0];
    startVals[1] = userPerHouse2Body[1];
    startVals[2] = userPerHouse2Body[2];  
    if (userNumParties == 2 && (startVals[0] + startVals[1]) < 1) {
      startVals[0] = ceil(maxSlider/2) / maxSlider;
      startVals[1] = 1.0 - startVals[0];
      startVals[2] = 0;
    } else if (userNumParties == 3 && startVals[0] + startVals[1] + startVals[2] < 1) {
      startVals[0] = ceil(maxSlider/3) / maxSlider; // split evenly
      startVals[1] = floor(maxSlider/3) / maxSlider;
      startVals[2] = 1.0 - (startVals[0] + startVals[1]);
    }
    
    // slider1max = parseInt(userNumHouse2);
    // slider2max = floor(slider1max / 2);
    // slider3max = slider1max - slider2max;

    console.log("Slider Page Chamber 2 Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR SECOND CHAMBER";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "none";
    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "none";
    document.getElementById("page10").style.display = "none";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total2").innerHTML = totalTxt;

    checkNumBodies();
    sliders();    
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine);
    paneToggle();
    console.log("Party A: " + userPerHouse2Body[0] + " Party B: " + userPerHouse2Body[1] + " Party C: " + userPerHouse2Body[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerHouse2Body[0] != engine.perDemHouse2 || userPerHouse2Body[1] != engine.perRepHouse2 || userPerHouse2Body[2] != engine.perIndHouse2) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function checkNumBodies() {
    document.getElementById("s1-p4").innerHTML = "<div class='first-slider' id='slider-2a'><p id='slider-text-1'>POLITICAL PARTY A</p></div>";
    document.getElementById("s2-p4").innerHTML = "<div id='slider-2b'><p id='slider-text-2'>POLITICAL PARTY B</p></div>";
    document.getElementById("s3-p4").innerHTML = "<div id='slider-2c'><p id='slider-text-3'>POLITICAL PARTY C</p></div>";

    if (userNumParties == 1) {
      document.getElementById("s1-p4").style.display = "block";
      document.getElementById("s2-p4").style.display = "none";
      document.getElementById("s3-p4").style.display = "none";

    } else if (userNumParties == 2) {
      document.getElementById("s1-p4").style.display = "block";
      document.getElementById("s2-p4").style.display = "block";
      document.getElementById("s3-p4").style.display = "none";

    } else {
      document.getElementById("s1-p4").style.display = "block";
      document.getElementById("s2-p4").style.display = "block";
      document.getElementById("s3-p4").style.display = "block";

    }
    slider1 = document.getElementById('slider-2a'); // party a
    slider2 = document.getElementById('slider-2b');; // party b
    slider3 = document.getElementById('slider-2c');; // party c

  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    createSlider();
    sliderVals();

    function createSlider() {
      // if only 1 party, create slider A so that there is no change
      if (userNumParties == 1) {
        noUiSlider.create(slider1, {
          start: (startVals[0] * maxSlider), // fix later where to start
          range: {
            'min': [maxSlider],
            'max': [maxSlider]
          },
          cssPrefix: 'noUi-',
          tooltips: true,
          pips: {
            mode: 'range',
            density: 'range',
          },
          step: 0,
          format: wNumb({
            decimals: 0
          })
        });
      } else {

      noUiSlider.create(slider1, {
        start: (startVals[0] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

      noUiSlider.create(slider2, {
        start: (startVals[1] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      noUiSlider.create(slider3, {
        start: (startVals[2] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userPerHouse2Body = [];
      var numPerHouse2Body = [];
      var house2Percentage; // helper var
      var numPartyA;
      var numPartyB;
      var numPartyC;

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        numPartyA = values[0];
        userPerHouse2Body[0] = values[0];
        numPerHouse2Body[0] = userPerHouse2Body[0];
        house2Percentage = userPerHouse2Body[0] / userNumHouse2;
        house2Percentage = roundNum(house2Percentage, 2);
        userPerHouse2Body[0] = house2Percentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
          numPartyB = values[0];
          userPerHouse2Body[1] = values[0];
          numPerHouse2Body[1] = userPerHouse2Body[1];
          house2Percentage = userPerHouse2Body[1] / userNumHouse2;
          house2Percentage = roundNum(house2Percentage, 2);
          userPerHouse2Body[1] = house2Percentage;
        });
      } else { // set party b to 0
        userPerHouse2Body[1] = 0;
      }

      if (userNumParties == 3) { // party a b c
        slider3.noUiSlider.on('update', function (values, handle) {
          numPartyC = values[0];
          userPerHouse2Body[2] = values[0];
          numPerHouse2Body[2] = userPerHouse2Body[2];
          house2Percentage = userPerHouse2Body[2] / userNumHouse2;
          house2Percentage = roundNum(house2Percentage, 2);
          userPerHouse2Body[2] = house2Percentage;
        });
      } else { // set party c to 0
        userPerHouse2Body[2] = 0;
      }

      if (userNumParties == 2) {
        // when user slides the party A slider, update slider B
        slider1.noUiSlider.on('slide', function(event) {
          slider2.noUiSlider.set((maxSlider - numPartyA));
          console.log("minus value: " + (maxSlider - numPartyA));
        });

        // when user slides the party B slider, update slider A
        slider2.noUiSlider.on('slide', function(event) {
          slider1.noUiSlider.set(maxSlider - numPartyB);
        });
      } 
      else if (userNumParties == 3) {
        
        // when user slides the party A slider, update sliders B and C evenly
        slider1.noUiSlider.on('slide', function(event) {
          let sliderBval = ceil((maxSlider - numPartyA) / 2);
          let sliderCval = (maxSlider - numPartyA) - sliderBval;
          slider2.noUiSlider.set(sliderBval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party B slider, update sliders A and B evenly
        // slider2.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyB) / 2);
        //   let sliderCval = (maxSlider - numPartyB) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider3.noUiSlider.set(sliderCval);
        // });

        // when user slides party B slider, allow party B to go up to party A remainder
        // and make party C update to the remainder of party A + B
        slider2.noUiSlider.on('slide', function(event) {
          if (parseInt(slider2.noUiSlider.get()) > maxSlider - numPartyA) {
            slider2.noUiSlider.set(maxSlider - numPartyA);
          }
          let sliderAval = ceil((maxSlider - numPartyB) / 2);
          let sliderCval = (maxSlider - numPartyB) - numPartyA;
          //slider1.noUiSlider.set(sliderAval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party C slider, update sliders A and B evenly
        // slider3.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyC) / 2);
        //   let sliderBval = (maxSlider - numPartyC) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider2.noUiSlider.set(sliderBval);
        // });

        // when user slides party C slider, allow party C to go up to party A remainder
        // and make party B update to the remainder of A + B
        // i.e. reverses of what happens when slider B is moved
        slider3.noUiSlider.on('slide', function(event) {
          let sliderCval = maxSlider - numPartyA;
          if (parseInt(slider3.noUiSlider.get()) > sliderCval) {
            slider3.noUiSlider.set(sliderCval);
          }          
          slider2.noUiSlider.set((maxSlider - numPartyC) - numPartyA);
        });
      }

    }
  }
}

function sMembersThirdChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumSenate = parseInt(userNumSenate); //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  var startVals = [];

  this.setup = function () {
    startVals[0] = userPerSenateBody[0];
    startVals[1] = userPerSenateBody[1];
    startVals[2] = userPerSenateBody[2];
  }

  this.enter = function () {
    maxSlider = parseInt(userNumSenate);
    // set up since default doesn't have a 3rd body
    // if (startVals[0] + startVals[1] + startVals[2] < maxSlider) {
    //   startVals[0] = ceil(maxSlider/3) / maxSlider; // split evenly
    //   startVals[1] = 1 - startVals[0];
    //   startVals[2] = 1 - (startVals[0] + startVals[1]);
    // }
    startVals[0] = userPerSenateBody[0];
    startVals[1] = userPerSenateBody[1];
    startVals[2] = userPerSenateBody[2];
    if (userNumParties == 2 && (startVals[0] + startVals[1]) < 1) {
      startVals[0] = ceil(maxSlider/2) / maxSlider;
      startVals[1] = 1.0 - startVals[0];
      startVals[2] = 0;
    } else if (userNumParties == 3 && startVals[0] + startVals[1] + startVals[2] < 1) {
      startVals[0] = ceil(maxSlider/3) / maxSlider; // split evenly
      startVals[1] = floor(maxSlider/3) / maxSlider;
      startVals[2] = 1.0 - (startVals[0] + startVals[1]);
    }

    console.log("Slider Page Chamber 3 Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR THIRD CHAMBER";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "block";
    document.getElementById("page7").style.display = "none";
    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "none";
    document.getElementById("page10").style.display = "none";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total3").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    //sliderVals();
    
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine);
    paneToggle();
    console.log("Party A: " + userPerSenateBody[0] + " Party B: " + userPerSenateBody[1] + " Party C: " + userPerSenateBody[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerSenateBody[0] != engine.perDemSenate || userPerSenateBody[1] != engine.perRepSenate || userPerSenateBody[2] != engine.perIndSenate) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function checkNumBodies() {
    document.getElementById("s1-p5").innerHTML = "<div class='first-slider' id='slider-3a'><p id='slider-text-1'>POLITICAL PARTY A</p></div>";
    document.getElementById("s2-p5").innerHTML = "<div id='slider-3b'><p id='slider-text-2'>POLITICAL PARTY B</p></div>";
    document.getElementById("s3-p5").innerHTML = "<div id='slider-3c'><p id='slider-text-3'>POLITICAL PARTY C</p></div>";

    if (userNumParties == 1) {
      document.getElementById("s1-p5").style.display = "block";
      document.getElementById("s2-p5").style.display = "none";
      document.getElementById("s3-p5").style.display = "none";

    } else if (userNumParties == 2) {
      document.getElementById("s1-p5").style.display = "block";
      document.getElementById("s2-p5").style.display = "block";
      document.getElementById("s3-p5").style.display = "none";

    } else {
      document.getElementById("s1-p5").style.display = "block";
      document.getElementById("s2-p5").style.display = "block";
      document.getElementById("s3-p5").style.display = "block";

    }
    slider1 = document.getElementById('slider-3a'); // party a
    slider2 = document.getElementById('slider-3b');; // party b
    slider3 = document.getElementById('slider-3c');; // party c

  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    createSlider();
    sliderVals();

    function createSlider() {
      // if only 1 party, create slider A so that there is no change
      if (userNumParties == 1) {
        noUiSlider.create(slider1, {
          start: (startVals[0] * maxSlider), // fix later where to start
          range: {
            'min': [maxSlider],
            'max': [maxSlider]
          },
          cssPrefix: 'noUi-',
          tooltips: true,
          pips: {
            mode: 'range',
            density: 'range',
          },
          step: 0,
          format: wNumb({
            decimals: 0
          })
        });
      } else {

      noUiSlider.create(slider1, {
        start: (startVals[0] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

      noUiSlider.create(slider2, {
        start: (startVals[1] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      noUiSlider.create(slider3, {
        start: (startVals[2] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userPerSenateBody = [];
      var numPerSenateBody = [];
      var senatePercentage; // helper var
      var numPartyA;
      var numPartyB;
      var numPartyC;

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        numPartyA = values[0];
        userPerSenateBody[0] = values[0];
        numPerSenateBody[0] = userPerSenateBody[0];
        senatePercentage = userPerSenateBody[0] / userNumSenate;
        senatePercentage = roundNum(senatePercentage, 2);
        userPerSenateBody[0] = senatePercentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
          numPartyB = values[0];
          userPerSenateBody[1] = values[0];
          numPerSenateBody[1] = userPerSenateBody[1];
          senatePercentage = userPerSenateBody[1] / userNumSenate;
          senatePercentage = roundNum(senatePercentage, 2);
          userPerSenateBody[1] = senatePercentage;
        });
      } else { // set party b to 0
        userPerSenateBody[1] = 0;
      }

      if (userNumParties == 3) { // party a b c
        slider3.noUiSlider.on('update', function (values, handle) {
          numPartyC = values[0];
          userPerSenateBody[2] = values[0];
          numPerSenateBody[2] = userPerSenateBody[2];
          senatePercentage = userPerSenateBody[2] / userNumSenate;
          senatePercentage = roundNum(senatePercentage, 2);
          userPerSenateBody[2] = senatePercentage;
        });
      } else { // set party c to 0
        userPerSenateBody[2] = 0;
      }


      if (userNumParties == 2) {
        // when user slides the party A slider, update slider B
        slider1.noUiSlider.on('slide', function(event) {
          slider2.noUiSlider.set((maxSlider - numPartyA));
          console.log("minus value: " + (maxSlider - numPartyA));
        });

        // when user slides the party B slider, update slider A
        slider2.noUiSlider.on('slide', function(event) {
          slider1.noUiSlider.set(maxSlider - numPartyB);
        });
      } 
      else if (userNumParties == 3) {
        
        // when user slides the party A slider, update sliders B and C evenly
        slider1.noUiSlider.on('slide', function(event) {
          let sliderBval = ceil((maxSlider - numPartyA) / 2);
          let sliderCval = (maxSlider - numPartyA) - sliderBval;
          slider2.noUiSlider.set(sliderBval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party B slider, update sliders A and B evenly
        // slider2.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyB) / 2);
        //   let sliderCval = (maxSlider - numPartyB) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider3.noUiSlider.set(sliderCval);
        // });

        // when user slides party B slider, allow party B to go up to party A remainder
        // and make party C update to the remainder of party A + B
        slider2.noUiSlider.on('slide', function(event) {
          if (parseInt(slider2.noUiSlider.get()) > maxSlider - numPartyA) {
            slider2.noUiSlider.set(maxSlider - numPartyA);
          }
          let sliderAval = ceil((maxSlider - numPartyB) / 2);
          let sliderCval = (maxSlider - numPartyB) - numPartyA;
          //slider1.noUiSlider.set(sliderAval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party C slider, update sliders A and B evenly
        // slider3.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyC) / 2);
        //   let sliderBval = (maxSlider - numPartyC) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider2.noUiSlider.set(sliderBval);
        // });

        // when user slides party C slider, allow party C to go up to party A remainder
        // and make party B update to the remainder of A + B
        // i.e. reverses of what happens when slider B is moved
        slider3.noUiSlider.on('slide', function(event) {
          let sliderCval = maxSlider - numPartyA;
          if (parseInt(slider3.noUiSlider.get()) > sliderCval) {
            slider3.noUiSlider.set(sliderCval);
          }          
          slider2.noUiSlider.set((maxSlider - numPartyC) - numPartyA);
        });
      }
    }
  }
}

function sMembersVP() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumVP = parseInt(userNumVP); //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  var startVals = [];

  this.setup = function () {
    startVals[0] = userPerVPBody[0];
    startVals[1] = userPerVPBody[1];
    startVals[2] = userPerVPBody[2];
  }

  this.enter = function () {
    maxSlider = parseInt(userNumVP);
    startVals[0] = userPerVPBody[0];
    startVals[1] = userPerVPBody[1];
    startVals[2] = userPerVPBody[2];
    if (userNumParties == 2 && (startVals[0] + startVals[1]) < 1) {
      startVals[0] = ceil(maxSlider/2) / maxSlider;
      startVals[1] = 1.0 - startVals[0];
      startVals[2] = 0;
    } else if (userNumParties == 3 && startVals[0] + startVals[1] + startVals[2] < 1) {
      startVals[0] = ceil(maxSlider/3) / maxSlider; // split evenly
      startVals[1] = floor(maxSlider/3) / maxSlider;
      startVals[2] = 1.0 - (startVals[0] + startVals[1]);
    }

    console.log("Slider Page VP Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR VICE PRESIDENCY";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "block";
    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "none";
    document.getElementById("page10").style.display = "none";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total-vp").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    //sliderVals();
    
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine);
    paneToggle();
    console.log("Party A: " + userPerVPBody[0] + " Party B: " + userPerVPBody[1] + " Party C: " + userPerVPBody[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerVPBody[0] != engine.perDemVP || userPerVPBody[1] != engine.perRepVP || userPerVPBody[2] != engine.perIndVP) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function checkNumBodies() {
    document.getElementById("s1-p6").innerHTML = "<div class='first-slider' id='slider-vp-a'><p id='slider-text-1'>POLITICAL PARTY A</p></div>";
    document.getElementById("s2-p6").innerHTML = "<div id='slider-vp-b'><p id='slider-text-2'>POLITICAL PARTY B</p></div>";
    document.getElementById("s3-p6").innerHTML = "<div id='slider-vp-c'><p id='slider-text-3'>POLITICAL PARTY C</p></div>";

    if (userNumParties == 1) {
      document.getElementById("s1-p6").style.display = "block";
      document.getElementById("s2-p6").style.display = "none";
      document.getElementById("s3-p6").style.display = "none";

    } else if (userNumParties == 2) {
      document.getElementById("s1-p6").style.display = "block";
      document.getElementById("s2-p6").style.display = "block";
      document.getElementById("s3-p6").style.display = "none";

    } else {
      document.getElementById("s1-p6").style = "block";
      document.getElementById("s2-p6").style = "block";
      document.getElementById("s3-p6").style = "block";

    }
    slider1 = document.getElementById('slider-vp-a'); // party a
    slider2 = document.getElementById('slider-vp-b');; // party b
    slider3 = document.getElementById('slider-vp-c');; // party c

  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    createSlider();
    sliderVals();

    function createSlider() {
      // if only 1 party, create slider A so that there is no change
      if (userNumParties == 1) {
        noUiSlider.create(slider1, {
          start: (startVals[0] * maxSlider), // fix later where to start
          range: {
            'min': [maxSlider],
            'max': [maxSlider]
          },
          cssPrefix: 'noUi-',
          tooltips: true,
          pips: {
            mode: 'range',
            density: 'range',
          },
          step: 0,
          format: wNumb({
            decimals: 0
          })
        });
      } else {

      noUiSlider.create(slider1, {
        start: (startVals[0] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

      noUiSlider.create(slider2, {
        start: (startVals[1] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      noUiSlider.create(slider3, {
        start: (startVals[2] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userPerVPBody = [];
      var numPerVPBody = [];
      var vpPercentage; // helper var
      var numPartyA;
      var numPartyB;
      var numPartyC;

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        numPartyA = values[0];
        userPerVPBody[0] = values[0];
        numPerVPBody[0] = userPerVPBody[0];
        vpPercentage = userPerVPBody[0] / userNumVP;
        vpPercentage = roundNum(vpPercentage, 2);
        userPerVPBody[0] = vpPercentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
          numPartyB = values[0];
          userPerVPBody[1] = values[0];
          numPerVPBody[1] = userPerVPBody[1];
          vpPercentage = userPerVPBody[1] / userNumVP;
          vpPercentage = roundNum(vpPercentage, 2);
          userPerVPBody[1] = vpPercentage;
        });
      } else { // set party b to 0
        userPerVPBody[1] = 0;
      }

      if (userNumParties == 3) { // party a b c
        slider3.noUiSlider.on('update', function (values, handle) {
          numPartyC = values[0];
          userPerVPBody[2] = values[0];
          numPerVPBody[2] = userPerVPBody[2];
          vpPercentage = userPerVPBody[2] / userNumVP;
          vpPercentage = roundNum(vpPercentage, 2);
          userPerVPBody[2] = vpPercentage;
        });
      } else { // set party c to 0
        userPerVPBody[2] = 0;
      }

      if (userNumParties == 2) {
        // when user slides the party A slider, update slider B
        slider1.noUiSlider.on('slide', function(event) {
          slider2.noUiSlider.set((maxSlider - numPartyA));
          console.log("minus value: " + (maxSlider - numPartyA));
        });

        // when user slides the party B slider, update slider A
        slider2.noUiSlider.on('slide', function(event) {
          slider1.noUiSlider.set(maxSlider - numPartyB);
        });
      } 
      else if (userNumParties == 3) {
        
        // when user slides the party A slider, update sliders B and C evenly
        slider1.noUiSlider.on('slide', function(event) {
          let sliderBval = ceil((maxSlider - numPartyA) / 2);
          let sliderCval = (maxSlider - numPartyA) - sliderBval;
          slider2.noUiSlider.set(sliderBval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party B slider, update sliders A and B evenly
        // slider2.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyB) / 2);
        //   let sliderCval = (maxSlider - numPartyB) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider3.noUiSlider.set(sliderCval);
        // });

        // when user slides party B slider, allow party B to go up to party A remainder
        // and make party C update to the remainder of party A + B
        slider2.noUiSlider.on('slide', function(event) {
          if (parseInt(slider2.noUiSlider.get()) > maxSlider - numPartyA) {
            slider2.noUiSlider.set(maxSlider - numPartyA);
          }
          let sliderAval = ceil((maxSlider - numPartyB) / 2);
          let sliderCval = (maxSlider - numPartyB) - numPartyA;
          //slider1.noUiSlider.set(sliderAval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party C slider, update sliders A and B evenly
        // slider3.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyC) / 2);
        //   let sliderBval = (maxSlider - numPartyC) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider2.noUiSlider.set(sliderBval);
        // });

        // when user slides party C slider, allow party C to go up to party A remainder
        // and make party B update to the remainder of A + B
        // i.e. reverses of what happens when slider B is moved
        slider3.noUiSlider.on('slide', function(event) {
          let sliderCval = maxSlider - numPartyA;
          if (parseInt(slider3.noUiSlider.get()) > sliderCval) {
            slider3.noUiSlider.set(sliderCval);
          }          
          slider2.noUiSlider.set((maxSlider - numPartyC) - numPartyA);
        });
      }
    }
  }
}

// OC note - either skip pane when 0 pres members, or leave pane to have sliders all 0
function sMembersPres() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumPres = parseInt(userNumPres); //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  var startVals = [];

  this.setup = function () {
    startVals[0] = userPerPresBody[0];
    startVals[1] = userPerPresBody[1];
    startVals[2] = userPerPresBody[2];
  }

  this.enter = function () {
    maxSlider = parseInt(userNumPres);
    startVals[0] = userPerPresBody[0];
    startVals[1] = userPerPresBody[1];
    startVals[2] = userPerPresBody[2];
    if (userNumParties == 2 && (startVals[0] + startVals[1]) < 1) {
      startVals[0] = ceil(maxSlider/2) / maxSlider;
      startVals[1] = 1.0 - startVals[0];
      startVals[2] = 0;
    } else if (userNumParties == 3 && startVals[0] + startVals[1] + startVals[2] < 1) {
      startVals[0] = ceil(maxSlider/3) / maxSlider; // split evenly
      startVals[1] = floor(maxSlider/3) / maxSlider;
      startVals[2] = 1.0 - (startVals[0] + startVals[1]);
    }

    console.log("Slider Page Pres Party Members ");
    document.getElementById("top").style.display = "block";
    showPanesBool = true;
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR PRESIDENCY";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "none";
    document.getElementById("page8").style.display = "block";
    document.getElementById("page9").style.display = "none";
    document.getElementById("page10").style.display = "none";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total-pres").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    //sliderVals();
    
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine);
    paneToggle();
    console.log("Party A: " + userPerPresBody[0] + " Party B: " + userPerPresBody[1] + " Party C: " + userPerPresBody[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerPresBody[0] != engine.perDemPres || userPerPresBody[1] != engine.perRepPres || userPerPresBody[2] != engine.perIndPres) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function checkNumBodies() {
    document.getElementById("s1-p7").innerHTML = "<div class='first-slider' id='slider-pres-a'><p id='slider-text-1'>POLITICAL PARTY A</p></div>";
    document.getElementById("s2-p7").innerHTML = "<div id='slider-pres-b'><p id='slider-text-2'>POLITICAL PARTY B</p></div>";
    document.getElementById("s3-p7").innerHTML = "<div id='slider-pres-c'><p id='slider-text-3'>POLITICAL PARTY C</p></div>";

    if (userNumParties == 1) {
      document.getElementById("s1-p7").style.display = "block";
      document.getElementById("s2-p7").style.display = "none";
      document.getElementById("s3-p7").style.display = "none";

    } else if (userNumParties == 2) {
      document.getElementById("s1-p7").style.display = "block";
      document.getElementById("s2-p7").style.display = "block";
      document.getElementById("s3-p7").style.display = "none";

    } else {
      document.getElementById("s1-p7").style = "block";
      document.getElementById("s2-p7").style = "block";
      document.getElementById("s3-p7").style = "block";

    }
    slider1 = document.getElementById('slider-pres-a'); // party a
    slider2 = document.getElementById('slider-pres-b');; // party b
    slider3 = document.getElementById('slider-pres-c');; // party c

  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    createSlider();
    sliderVals();

    function createSlider() {
      // if only 1 party, create slider A so that there is no change
      if (userNumParties == 1) {
        noUiSlider.create(slider1, {
          start: (startVals[0] * maxSlider), // fix later where to start
          range: {
            'min': [maxSlider],
            'max': [maxSlider]
          },
          cssPrefix: 'noUi-',
          tooltips: true,
          pips: {
            mode: 'range',
            density: 'range',
          },
          step: 0,
          format: wNumb({
            decimals: 0
          })
        });
      } else {

      noUiSlider.create(slider1, {
        start: (startVals[0] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

      noUiSlider.create(slider2, {
        start: (startVals[1] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      noUiSlider.create(slider3, {
        start: (startVals[2] * maxSlider), // fix later where to start
        range: {
          'min': [0], //[1],
          'max': [maxSlider]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });
    }

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userPerPresBody = [];
      var numPerPresBody = [];
      var presPercentage; // helper var
      var numPartyA;
      var numPartyB;
      var numPartyC;

      if (userNumPres > 0) {
      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        numPartyA = values[0];
        userPerPresBody[0] = values[0];
        numPerPresBody[0] = userPerPresBody[0];
        presPercentage = userPerPresBody[0] / userNumPres;
        presPercentage = roundNum(presPercentage, 2);
        userPerPresBody[0] = presPercentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
          numPartyB = values[0];
          userPerPresBody[1] = values[0];
          numPerPresBody[1] = userPerPresBody[1];
          presPercentage = userPerPresBody[1] / userNumPres;
          presPercentage = roundNum(presPercentage, 2);
          userPerPresBody[1] = presPercentage;
        });
      } else { // set party b to 0
        userPerPresBody[1] = 0;
      }

      if (userNumParties == 3) { // party a b c
        slider3.noUiSlider.on('update', function (values, handle) {
          numPartyC = values[0];
          userPerPresBody[2] = values[0];
          numPerPresBody[2] = userPerPresBody[2];
          presPercentage = userPerPresBody[2] / userNumPres;
          presPercentage = roundNum(presPercentage, 2);
          userPerPresBody[2] = presPercentage;
        });
      } else { // set party c to 0
        userPerPresBody[2] = 0;
      }

      if (userNumParties == 2) {
        // when user slides the party A slider, update slider B
        slider1.noUiSlider.on('slide', function(event) {
          slider2.noUiSlider.set((maxSlider - numPartyA));
          console.log("minus value: " + (maxSlider - numPartyA));
        });

        // when user slides the party B slider, update slider A
        slider2.noUiSlider.on('slide', function(event) {
          slider1.noUiSlider.set(maxSlider - numPartyB);
        });
      } 
      else if (userNumParties == 3) {
        
        // when user slides the party A slider, update sliders B and C evenly
        slider1.noUiSlider.on('slide', function(event) {
          let sliderBval = ceil((maxSlider - numPartyA) / 2);
          let sliderCval = (maxSlider - numPartyA) - sliderBval;
          slider2.noUiSlider.set(sliderBval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party B slider, update sliders A and B evenly
        // slider2.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyB) / 2);
        //   let sliderCval = (maxSlider - numPartyB) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider3.noUiSlider.set(sliderCval);
        // });

        // when user slides party B slider, allow party B to go up to party A remainder
        // and make party C update to the remainder of party A + B
        slider2.noUiSlider.on('slide', function(event) {
          if (parseInt(slider2.noUiSlider.get()) > maxSlider - numPartyA) {
            slider2.noUiSlider.set(maxSlider - numPartyA);
          }
          let sliderAval = ceil((maxSlider - numPartyB) / 2);
          let sliderCval = (maxSlider - numPartyB) - numPartyA;
          //slider1.noUiSlider.set(sliderAval);
          slider3.noUiSlider.set(sliderCval);
        });

        // // when user slides the party C slider, update sliders A and B evenly
        // slider3.noUiSlider.on('slide', function(event) {
        //   let sliderAval = floor((maxSlider - numPartyC) / 2);
        //   let sliderBval = (maxSlider - numPartyC) - sliderAval;
        //   slider1.noUiSlider.set(sliderAval);
        //   slider2.noUiSlider.set(sliderBval);
        // });

        // when user slides party C slider, allow party C to go up to party A remainder
        // and make party B update to the remainder of A + B
        // i.e. reverses of what happens when slider B is moved
        slider3.noUiSlider.on('slide', function(event) {
          let sliderCval = maxSlider - numPartyA;
          if (parseInt(slider3.noUiSlider.get()) > sliderCval) {
            slider3.noUiSlider.set(sliderCval);
          }          
          slider2.noUiSlider.set((maxSlider - numPartyC) - numPartyA);
        });
      }
    } else { // if no presidency, set members for each party to 0
      userPerPresBody[0] = 0;
      userPerPresBody[1] = 0;
      userPerPresBody[2] = 0;
    }
    }
  }
}

//user input page for percentage of votes required for bill approval
function sBodyPass() {

  // var currSuperThresh = parseFloat(engine.superThresh * 100);
  // var currPerPass = parseFloat(engine.perPass * 100);
  var currPerPass = parseFloat(userBodyPass);
  var currSuperThresh = parseFloat(userSuperThresh);

  this.setup = function () {
    textSize(15);
    noStroke();
    // engine.dWidth = width;
    // engine.dHeight = height;
    // v.dWidth = width;
    // v.dHeight = height;
    // background("#012244");
    // currPerPass = parseFloat(userBodyPass);
    // currSuperThresh = parseFloat(userSuperThresh);
    createSlider();
    sliderVals();
  }

  this.enter = function () {
    // currPerPass = parseFloat(userBodyPass);
    // currSuperThresh = parseFloat(userSuperThresh);
    // noCursor();
    console.log("4th Slider Page");
    document.getElementById("top").innerHTML = "PERCENTAGE OF VOTES REQUIRED FOR APPROVAL BY EACH CHAMBER";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "none";
    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "block";
    document.getElementById("page10").style.display = "none";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    // let millisecond;
    //
    // if (millisecond == 1000) {
    //   mgr.showScene(main);
    // }

    // sliders();
    sliderVals();

  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, 9);
    paneToggle();
    console.log("user body pass: " + userBodyPass);

    // if sliders changed any values on this page, enable update button
    if ((parseFloat(userSuperThresh) / 100.0) != engine.perPass || (parseFloat(userSuperThresh) / 100.0) != engine.superThresh) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  // function sliders() {



  //   if (userEdits == true) {
  //     sliderVals();
  //   } else {
  //     createSlider();
  //     sliderVals();
  //   }
    // NOui slider slides
    function createSlider() {
      noUiSlider.create(slider10, {
        start: currPerPass,
        range: {
          'min': [0],
          'max': [100]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0,
          suffix: '%'
        })
      });

      noUiSlider.create(slider11, {
        start: currSuperThresh,
        range: {
          'min': [0],
          'max': [100]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0,
          suffix: '%'
        })
      });
    }


    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userBodyPass = "";
      userSuperThresh = "";

      slider10.noUiSlider.on('update', function (values, handle) {
        userBodyPass = values[0];
        // rangeSliderValueElement.innerHTML = userBodyPass + " " + userSuperThresh;

      });
      slider11.noUiSlider.on('update', function (values, handle) {
        userSuperThresh = values[0];
        // rangeSliderValueElement.innerHTML = userBodyPass + " " + userSuperThresh;

      });

    }


  //}

}

//user input page for probabily of a yes vote
function sYesVotes() {
  var curDemYaythresh = parseFloat(userDemYaythresh);// PARTY A = parseInt(engine.demYaythresh * 100);
  var curRepYaythresh = parseFloat(userRepYaythresh);// = parseInt(engine.repYaythresh * 100);
  var curIndYaythresh = parseFloat(userIndYaythresh);// = parseInt(engine.indYaythresh * 100);

  this.setup = function () {
    createSlider();
    sliderVals();
  }

  this.enter = function () {

    console.log("5th slider page");
    document.getElementById("top").innerHTML = "PROBABILITY OF AN AFFIRMATIVE VOTE BY A PARTY MEMBER";
    showPanesBool = true;
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "none";
    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "none";
    document.getElementById("page10").style.display = "block";
    document.getElementById("page11").style.display = "none";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    checkParties();
    // sliders();
    sliderVals();

    document.body.style.backgroundColor = bColor;

    if (document.getElementById('vote-btn')) {
      document.getElementById('vote-btn').remove();
    } 

    // OC to keep order of buttons
    if (!document.getElementById('update-btn')) {
      updateBtn = createButton('Update');
      updateBtn.id('update-btn');
      updateBtn.class('buttons');
      updateBtn.parent(buttonDiv);
      updateBtn.mousePressed(clickedUpdate);
    }
    nextPaneBtn.remove();
    // if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Next');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
      nextPaneBtn.mousePressed(nextPane);
    // }
  }

  function clickedUpdate() {
    
  }

  this.draw = function () { 
    visual.displayImmediateBlank(engine, 10);
    paneToggle();
    if ((parseFloat(userDemYaythresh)/100.0) != engine.demYaythresh || (parseFloat(userRepYaythresh)/100.0) != engine.repYaythresh || (parseFloat(userIndYaythresh)/100.0) != engine.indYaythresh) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }


  function checkParties() {
    if (userNumParties == 1) {
      document.getElementById("slider12").style.display = "block";
      document.getElementById("slider13").style.display = "none";
      document.getElementById("slider14").style.display = "none";

    } else if (userNumParties == 2) {
      document.getElementById("slider12").style.display = "block";
      document.getElementById("slider13").style.display = "block";
      document.getElementById("slider14").style.display = "none";
    } else {
      document.getElementById("slider12").style.display = "block";
      document.getElementById("slider13").style.display = "block";
      document.getElementById("slider14").style.display = "block";

    }
  }

  // function sliders() {
  //   // NOui slider slides


  //   if (userEdits == true) {
  //     sliderVals();
  //   } else {
  //     createSlider();
  //     sliderVals();
  //   }

    function createSlider() {
      noUiSlider.create(slider12, {
        start: curDemYaythresh,
        range: {
          'min': [0],
          'max': [100]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0,
          suffix: '%'
        })
      });

      noUiSlider.create(slider13, {
        start: curRepYaythresh,
        range: {
          'min': [0],
          'max': [100]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0,
          suffix: '%'
        })
      });

      noUiSlider.create(slider14, {
        start: curIndYaythresh,
        range: {
          'min': [0],
          'max': [100]
        },
        cssPrefix: 'noUi-',
        tooltips: true,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0,
          suffix: '%'
        })
      });

    }

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      userDemYaythresh = "";
      userRepYaythresh = "";
      userIndYaythresh = "";

      slider12.noUiSlider.on('update', function (values, handle) {
        userDemYaythresh = values[0];
        // rangeSliderValueElement.innerHTML = userDemYaythresh + " " + userRepYaythresh + " " + userIndYaythresh;

      });
      if (userNumParties >= 2) {
        slider13.noUiSlider.on('update', function (values, handle) {
          userRepYaythresh = values[0];
          // rangeSliderValueElement.innerHTML = userDemYaythresh + " " + userRepYaythresh + " " + userIndYaythresh;

        });
      } else {
        userRepYaythresh = 0 + "%";
      }

      if (userNumParties == 3) {
        slider14.noUiSlider.on('update', function (values, handle) {
          userIndYaythresh = values[0];
          // rangeSliderValueElement.innerHTML = userDemYaythresh + " " + userRepYaythresh + " " + userIndYaythresh;

        });
      } else {
        userIndYaythresh = 0 + "%";
      }


    }

  //}


}

  var visualizeVote;
  var visualizeImmediate;
// page to run bill
function sVote() {
  let voteBtn;


  this.setup = function () {

    userOutputText = document.getElementById('slider-disp');
    visualizeVote = false;
    visualizeImmediate = false;

  }

  this.enter = function () {
    // configIX = userEditCount; // OC config array index is 1 less than editCount until it reaches max attempts
    // if (configIX > MAX_CONFIG_ATTEMPTS - 1) {
    //   configs.shift(); // remove first entered in array
    //   configIX == MAX_CONFIG_ATTEMPTS - 1; // decrement IX to last position in array
    // }
    // results = []; // OC new results array since it is a new config
    // resultIX = 0; // OC reset resultIX bc new configuration
    // userEditCount++;
    // console.log("user edit count: " + userEditCount);
    console.log("run bill page");
    // document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
    document.getElementById("top").innerHTML = "TEST VOTING<br><br>Click 'Run Test Vote' to see the results of running your configuration";
    showPanesBool = true;
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
    document.getElementById("page11").style.display = "block";
    document.getElementById("page12").style.display = "none";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // OC TODO - move to sParties? or to each scene that sets party members for a chamber
    if (userNumParties == 2) {
      userPerHouseBody[2] = 0.0;
      userPerHouse2Body[2] = 0.0;
      userPerSenateBody[2] = 0.0;
      userPerVPBody[2] = 0.0;
      userPerPresBody[2] = 0.0;
    } else if (userNumParties == 1) {
      userPerHouseBody[1] = 0.0;
      userPerHouseBody[2] = 0.0;
      userPerHouse2Body[1] = 0.0;
      userPerHouse2Body[2] = 0.0;
      userPerSenateBody[1] = 0.0;
      userPerSenateBody[2] = 0.0;
      userPerVPBody[1] = 0.0;
      userPerVPBody[2] = 0.0;
      userPerPresBody[1] = 0.0;
      userPerPresBody[2] = 0.0;
    }

    updateBtn.remove();

    if (document.getElementById('benchmark-btn')) {
      document.getElementById('benchmark-btn').remove();
    }

    if (document.getElementById('next-pane-btn')) {
      document.getElementById('next-pane-btn').remove();
    }
    
    if (!document.getElementById('vote-btn')) {
      voteBtn = createButton('Run Test Vote');
      voteBtn.id('vote-btn');
      voteBtn.class('buttons');
      voteBtn.parent(buttonDiv);
      voteBtn.mousePressed(clickedVote);
      // if (visualizeVote) {
      //   document.getElementById('vote-btn').disabled = true; // disable it if prev clicked
      // }
    }
    

    if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Next');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
      nextPaneBtn.mousePressed(nextPane);
    }

    // // can do if any params at all changed else true
    // if (document.getElementById("vote-btn").disabled == true) {
    //   // means vote button was clicked previously, so enable it
    //   document.getElementById("vote-btn").disabled == true;
    //   visualizeVote = true; // leave screen showing visualized vote

    // } else {
    checkParamChange();
    if (visualizeVote) {
      document.getElementById('vote-btn').disabled = true; // disable it if prev clicked
    }
    console.log("oc paramChangedBool: " + paramChangedBool);
    console.log("oc button disabled: " + document.getElementById("vote-btn").disabled );
    console.log("oc visualize vote: " + visualizeVote);

    
    // if any parameters changed, don't visualize the vote yet (display blank) & enable button
    if (paramChangedBool) {
      visualizeVote = false;
      document.getElementById("vote-btn").disabled = false;
    } else if (paramChangedBool == false && document.getElementById("vote-btn").disabled == false) {
      // otherwise if no params changed but vote button not yet clicked (enabled -> disabled == false), don't visualize (display blank)
      visualizeVote = false; 
    } else if (paramChangedBool == false && document.getElementById("vote-btn").disabled == true){
      // visualize vote immediately when no param changed & vote button already clicked (disabled == true) when scene is entered
      visualizeVote = true;
      visualizeImmediate = true;
      document.getElementById("top").innerHTML = "TEST VOTING<br><br>Change configuration parameters to run another test vote";
    }
    //}

    // set new parameters to show updated configuration when entering scene
    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

  }

  this.draw = function () {
    //visualizeImmediate = true;
    if (visualizeVote == false) {
      visual.displayImmediateBlank(engine, 11);
    } else if (visualizeVote == true && visualizeImmediate == true) {
      visual.displayImmediateVotes(engine); // OC can move to enter if get loop working for drawing all at once?
      if (visual.userInputState) {
        setTimeout(function () {
          if (mgr.isCurrent(sVote)) {
          document.body.style.backgroundColor = colorOverlay;
          engine.bodyCount = engine.numBodies;
          visual.finalTextDisplayUser(engine, helvFont, colorOverlay, resultIX);
          }
          //changeText(engine.decisionTxt);
        }, 1000); // 1 second before text overlay shows
        visual.userInputState = false;
      }
    } else {
      visual.displayVoting(engine);
      // OC when visual display of rectangles is done, show text
      if (visual.userInputState) {
        finalDisplay();
      }
    }
    paneToggle();
    
    
  }

  function finalDisplay() {
    setTimeout(function () {
      if (mgr.isCurrent(sVote)) {
      document.body.style.backgroundColor = colorOverlay;
      engine.bodyCount = engine.numBodies;
      visual.finalTextDisplayUser(engine, helvFont, colorOverlay, resultIX);
      setTimeout(function () {
        showPanesBool = true;
      }, 1500);
      //changeText(engine.decisionTxt);
    }
    }, 1500); // 1.5 seconds before text overlay shows
    visual.userInputState = false;

  }
  
  function clickedVote() {
    console.log("configIX beginning clicked vote: " + configIX);
    //voteBtn.remove();
    document.getElementById("vote-btn").disabled = true; // disable vote button after clicked
    showPanesBool = false; // make pane disappear so user can see voting in full view

    //configIX = userEditCount; // OC config array index is 1 less than editCount until it reaches max attempts
    if (configIX > MAX_CONFIG_ATTEMPTS - 1) {
      configs.shift(); // remove first entered in array
      configIX = MAX_CONFIG_ATTEMPTS - 1; // decrement IX to last position in array
    }
    results = []; // OC new results array since it is a new config
    resultIX = 0; // OC reset resultIX bc new configuration
    userEditCount++;
    console.log("user edit count: " + userEditCount);

    visualizeVote = true;
    visualizeImmediate = false;
    setEngineParams(engine); // set new parameters
    paramChangedBool = false;
    console.log("oc paramChangedBool in clickedVote(): " + paramChangedBool);
    

    // reset values for calculations and drawings
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
    
    engine.currentCongLogic(true); // get results for this configuration
    updateSession(); // save this config and resutls of running this configuration
    resultIX++; // saves this result
    configIX++;
    console.log("configIX after clicked vote: " + configIX);
  }

  // check if there are any param changes since the last time vote btn was clicked
  function checkParamChange() {
    let ix = configIX - 1; // -1 because if user clicked vote btn, config IX increments to prepare for next one
    
    if (ix < 0) {return;}
    
    if (userNumLegislative != configs[ix].numLegislativeBodies ||
      userNumHouse != configs[ix].chamber1.totalMembers || userNumHouse2 != configs[ix].chamber2.totalMembers || userNumSenate != configs[ix].chamber3.totalMembers || userNumVP != configs[ix].vicePres.totalMembers || userNumPres != configs[ix].president.totalMembers||
      userNumParties != configs[ix].numParties ||
      userPerHouseBody[0] != configs[ix].chamber1.partyA || userPerHouseBody[1] != configs[ix].chamber1.partyB || userPerHouseBody[2] != configs[ix].chamber1.partyC ||
      userPerHouse2Body[0] != configs[ix].chamber2.partyA || userPerHouse2Body[1] != configs[ix].chamber2.partyB || userPerHouse2Body[2] != configs[ix].chamber2.partyC||
      userPerSenateBody[0] != configs[ix].chamber3.partyA || userPerSenateBody[1] != configs[ix].chamber3.partyB || userPerSenateBody[2] != configs[ix].chamber3.partyC ||
      userPerVPBody[0] != configs[ix].vicePres.partyA || userPerVPBody[1] != configs[ix].vicePres.partyB || userPerVPBody[2] != configs[ix].vicePres.partyC ||
      userPerPresBody[0] != configs[ix].president.partyA || userPerPresBody[1] != configs[ix].president.partyB|| userPerPresBody[2] != configs[ix].president.partyC ||
      (parseFloat(userBodyPass) / 100.0) != configs[ix].percentMajority || (parseFloat(userSuperThresh) / 100.0) != configs[ix].percentSupermajority ||
      (parseFloat(userDemYaythresh)/100.0) != configs[ix].probabilityYesVote.partyA || (parseFloat(userRepYaythresh)/100.0) != configs[ix].probabilityYesVote.partyB || (parseFloat(userIndYaythresh)/100.0) != configs[ix].probabilityYesVote.partyC
    ) { 
      paramChangedBool = true;
    } else { paramChangedBool = false; visualizeVote = true;} // no params changed so visualize vote
    return paramChangedBool;
  }

  // //supermajority Cutoff for override of presidential veto
  // userSuperThresh;
  //
  // userBodyPass;

}

function sBenchmarkPane() {
  let benchmarkBtn;

  this.setup = function () {
    userOutputText = document.getElementById('slider-disp');
  }

  this.enter = function () {
    console.log("run bill page");
    document.getElementById("top").innerHTML = "RUN BENCHMARKING RESULTS";
    document.getElementById("top").style.display = "block";
    showPanesBool = true;
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
    document.getElementById("page12").style.display = "block";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    // if any parameters changed, don't visualize the vote yet (display blank) & enable button
    if (paramChangedBool) {
      visualizeVote = false;
      //document.getElementById("vote-btn").disabled = false;
    } else if (paramChangedBool == false && document.getElementById("vote-btn").disabled == false) {
      // otherwise if no params changed but vote button not yet clicked (enabled -> disabled == false), don't visualize (display blank)
      visualizeVote = false; 
    } else if (paramChangedBool == false && document.getElementById("vote-btn").disabled == true){
      // visualize vote immediately when no param changed & vote button already clicked (disabled == true) when scene is entered
      visualizeVote = true;
      visualizeImmediate = true;
      //document.getElementById("top").innerHTML = "TEST VOTING<br><br>Change configuration parameters to run another test vote";
    }
    document.getElementById('vote-btn').remove();
    document.getElementById('next-pane-btn').remove();

    benchmarkBtn = createButton('Benchmark');
    benchmarkBtn.id('benchmark-btn');
    benchmarkBtn.class('buttons');
    benchmarkBtn.parent(buttonDiv);
    benchmarkBtn.mousePressed(clickedBenchmark);

    if (resultIX == 0) { // vote wasn't clicked on prev screen, so do it now to save first test result
      setEngineParams(engine); // set new parameters
      // reset values for calculations and drawings
      engine.completeReset();
      userEdits = false;
      reconfigBool = true;
      engine.currentCongLogic(true); // get results for this configuration
      updateSession(); // save this config and resutls of running this configuration
      resultIX++;
    }

    if (configIX > 0) {
      configIX--; // decrement because last click for vote prepared for another config
    }

    // set new parameters to show updated configuration when entering scene
    //setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

    background(bColor);
    document.body.style.backgroundColor = bColor;
  }

  this.draw = function () {
    if (visualizeVote == false) {
      visual.displayImmediateBlank(engine, 11);
    } else if (visualizeVote == true && visualizeImmediate == true) {
      visual.displayImmediateVotes(engine); // OC can move to enter if get loop working for drawing all at once?
    }
    paneToggle();
  }


  function clickedBenchmark() {
    document.getElementById('prev-pane-btn').remove();
    benchmarkBtn.remove();

    showPanesBool = false;
    // document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("start-desc").style.display = "none";
    benchmarkBtn.remove();
    var benchResults = "";

    console.log("configIX before benchmarking: " + configIX);
    for (let i=resultIX; i < MAX_SIM_RESULTS+1; i++) { // + 1 because the first was the test result
      engine.completeReset();
      engine.currentCongLogic(true);
      //let engineSim = new DemocracyEngine
      updateSession();
      benchResults = (configs[configIX].simResults[resultIX].actTitle + " " + configs[configIX].simResults[resultIX].finalDecision);//sessionObj.configHistory[configIX].
      // push();
      // textAlign(LEFT, TOP);
      // textStyle(NORMAL)
      // textSize(22);
      // translate(0, 0);
      // noStroke();
      // fill(textColor);
      // text(benchResults + '\n', 20, 250+(i*35));
      // pop();
      document.getElementById("start-desc").innerHTML += "<p><b>" + benchResults + "</b></p>";
      
      resultIX++;
    }
    console.log("configIX after benchmarking: " + configIX);

    mgr.showScene(sBenchmarkResults);
  }

}

function sBenchmarkResults() {
  let startOverBtn, saveBtn, approvalBtn;

  this.setup = function () {

    userOutputText = document.getElementById('slider-disp');
    visualizeVote = false;

  }

  this.enter = function () {
    // configIX = userEditCount; // OC config array index is 1 less than editCount until it reaches max attempts
    // if (configIX > MAX_CONFIG_ATTEMPTS - 1) {
    //   configs.shift(); // remove first entered in array
    //   configIX == MAX_CONFIG_ATTEMPTS - 1; // decrement IX to last position in array
    // }
    // results = []; // OC new results array since it is a new config
    // resultIX = 0; // OC reset resultIX bc new configuration
    // userEditCount++;
    // console.log("user edit count: " + userEditCount);
    console.log("benchmark results page");
    // document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
    
    document.getElementById("page-container").style.display = "block";
    document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Benchmark Results</h1>";
    document.getElementById("top").innerHTML = "";
    document.getElementById("top").style.display = "none";
    showPanesBool = true;
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
    document.getElementById("page12").style.display = "block";
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);
    startOverBtn.mousePressed(clickedStartOver);

    saveBtn = createButton('Go to Save');
    saveBtn.id('save-btn');
    saveBtn.class('buttons');
    saveBtn.parent(buttonDiv);
    saveBtn.mousePressed(clickedSave);

    approvalBtn = createButton('Approve');
    approvalBtn.id('approve-btn');
    approvalBtn.class('buttons');
    approvalBtn.parent(buttonDiv);
    approvalBtn.mousePressed(clickedApprove);

    // if (resultIX == 0) { // vote wasn't clicked on prev screen, so do it now to save first test result
    //   setEngineParams(engine); // set new parameters
    //   // reset values for calculations and drawings
    //   engine.completeReset();
    //   userEdits = false;
    //   reconfigBool = true;
    //   engine.currentCongLogic(true); // get results for this configuration
    //   updateSession(); // save this config and resutls of running this configuration
    //   resultIX++;
    // }

    // set new parameters to show updated configuration when entering scene
    //setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
    background(bColor);
    document.body.style.backgroundColor = bColor;
    visual.displayImmediateVotes(engine); // OC TODO - put here when figure out drawing votes all at once (1 frame)
  }

  this.draw = function () {
    visual.displayImmediateVotes(engine); // draws votes for last calculation
    if (visual.userInputState) {
        document.body.style.backgroundColor = colorOverlay;
        push();
        translate(-(3 * (width/visual.numBodies)), 0);
        var resBColor = color(colorOverlay); // color(0, 0, 0); // result overlay
        noStroke();
        rectMode(CORNER);
        resBColor.setAlpha(200);
        fill(resBColor);
        rect(0, 0, width, height);
        pop();
        // engine.bodyCount = engine.numBodies;
        // visual.finalTextDisplayUser(engine, helvFont, colorOverlay, resultIX);
        //changeText(engine.decisionTxt);
      visual.userInputState = false;
    }
    // noStroke();
    // rectMode(CORNER);
    // let c = color(colorOverlay);
    // c.setAlpha(200)
    // fill(c);
    // rect(0, 0, visual.dWidth, visual.dHeight);
    // document.body.style.backgroundColor = colorOverlay;
    
   //OC when visual display of rectangles is done, show buttons
      // if (visual.userInputState) {
      //   finalDisplay();
      // }
    //     finalDisplay();
    //   }vFont, colorOverlay);
    // if (visualizeVote == false) {
    //   visual.displayImmediateBlank(engine);
    // } else {
    //   visual.displayVoting(engine);
    //   // OC when visual display of rectangles is done, show buttons
    //   if (visual.userInputState) {
    //     finalDisplay();
    //   }
    // }
  }

  function clickedStartOver() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedSave() {
    removeBtns();
    mgr.showScene(sSaveResults)
    //saveSession();
  }

  function clickedApprove() {
    ownerEndorse();
    if (finalConfigObj.ownerEndorsement == 1) {
      document.getElementById("main-header").innerHTML = "<h1>Benchmark Results</h1><h2>Approved!</h2>";
    } else {
      document.getElementById("main-header").innerHTML = "<h1>Benchmark Results</h1>";
    }
  }

  function removeBtns() {
    startOverBtn.remove();
    saveBtn.remove();
    approvalBtn.remove();
  }

  function clickedBenchmark() {
    //background(bColor);
    showPanesBool = false;
    // document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("start-desc").style.display = "none";
    benchmarkBtn.remove();
    var benchResults = "";

    for (let i=resultIX; i < MAX_SIM_RESULTS+1; i++) { // + 1 because the first was the test result
      engine.completeReset();
      engine.currentCongLogic(userEdits);
      //let engineSim = new DemocracyEngine
      updateSession();
      benchResults = (configs[configIX].simResults[resultIX-1].actTitle + " " + configs[configIX].simResults[resultIX-1].finalDecision);//sessionObj.configHistory[configIX].
      // push();
      // textAlign(LEFT, TOP);
      // textStyle(NORMAL)
      // textSize(22);
      // translate(0, 0);
      // noStroke();
      // fill(textColor);
      // text(benchResults + '\n', 20, 250+(i*35));
      // pop();
      document.getElementById("start-desc").innerHTML += benchResults + "<br><br>";
      
      resultIX++;
    }

    // visual.completeReset();
    // userEdits = false;
    // reconfigBool = true;
    // visual.displayImmediateVotes(engine);
    //document.body.style.backgroundColor = colorOverlay;
   //OC when visual display of rectangles is done, show buttons
      // if (visual.userInputState) {
        //finalDisplay();
      //}
  }

  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = colorOverlay;
      engine.bodyCount = engine.numBodies;
      visual.finalTextDisplayUser(engine, helvFont, colorOverlay);
      //changeText(engine.decisionTxt);
    }, 1500); // 1.5 seconds before text overlay shows
    visual.userInputState = false;

  }

}

var prevSessionID;

//page showing all of user inputs
function sSaveResults() {
  let saveBtn, startOverBtn;

  this.setup = function () {
    //userOutputText = document.getElementById('slider-disp');
    userOutputText = document.getElementById('start-desc');
  }

  this.enter = function () {
    prevSessionID = sessionID;

    console.log("user config summary & save page");
    // document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
    document.getElementById("main-header").innerHTML = "<h1>Save Configuration</h1><h2>Session ID: " + sessionID + "</h2>";
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("pane-bkg").style.display = "none";
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
    document.getElementById("page13").style.display = "block";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";
    
    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);
    startOverBtn.mousePressed(clickedStartOver);

    saveBtn = createButton('Save Config');
    saveBtn.id('save-btn');
    saveBtn.class('buttons');
    saveBtn.parent(buttonDiv);
    saveBtn.mousePressed(clickedSave);

    inputTxt();

    // visualizeVote = false;

    // // set new parameters to show updated configuration when entering scene
    // setEngineParams(engine);
    // // reset values for calculations
    // engine.completeReset();
    // visual.completeReset();
    // userEdits = false;
    // reconfigBool = true;

    background(bColor);
    document.body.style.backgroundColor = bColor;

  }

  this.draw = function () {
    // if (visualizeVote == false) {
    //   visual.displayImmediateBlank(engine);
    // } else {
    //   visual.displayVoting(engine);
    //   // OC when visual display of rectangles is done, show buttons
    //   if (visual.userInputState) {
    //     finalDisplay();
    //   }
    // }
    // paneToggle();
    
  }

  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = colorOverlay;
      engine.bodyCount = engine.numBodies;
      visual.finalTextDisplayUser(engine, helvFont, colorOverlay);
      changeText(engine.decisionTxt);
    }, 1500); // 1.5 seconds before text overlay shows
    visual.userInputState = false;

  }

  function clickedStartOver() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedSave() {
    removeBtns();
    saveSession();
    mgr.showScene(sComplete);
  }

  function removeBtns() {
    startOverBtn.remove();
    saveBtn.remove();
  }

  function inputTxt() {

    userOutputText.innerHTML =
      "<div><h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumHouse +
      "<br>Members in Political Party A: " + Math.round(userPerHouseBody[0] * userNumHouse) +
      "<br>Members in Political Party B: " + Math.round(userPerHouseBody[1] * userNumHouse) +
      "<br>Members in Political Party C: " + Math.round(userPerHouseBody[2] * userNumHouse) +
      "</p><h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumHouse2 +
      "<br>Members in Political Party A: " + Math.round(userPerHouse2Body[0] * userNumHouse2) +
      "<br>Members in Political Party B: " + Math.round(userPerHouse2Body[1] * userNumHouse2) +
      "<br>Members in Political Party C: " + Math.round(userPerHouse2Body[2] * userNumHouse2) +
      "</p><h3>Third Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumSenate +
      "<br>Members in Political Party A: " + Math.round(userPerSenateBody[0] * userNumSenate) +
      "<br>Members in Political Party B: " + Math.round(userPerSenateBody[1] * userNumSenate) +
      "<br>Members in Political Party C: " + Math.round(userPerSenateBody[2] * userNumSenate) +
      "</p><h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + userNumVP +
      "<br>Members in Political Party A: " + Math.round(userPerPresBody[0] * userNumVP) +
      "<br>Members in Political Party B: " + Math.round(userPerPresBody[1] * userNumVP) +
      "<br>Members in Political Party C: " + Math.round(userPerPresBody[2] * userNumVP) +
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + userNumPres +
      "<br>Members in Political Party A: " + Math.round(userPerVPBody[0] * userNumPres) +
      "<br>Members in Political Party B: " + Math.round(userPerVPBody[1] * userNumPres) +
      "<br>Members in Political Party C: " + Math.round(userPerVPBody[2] * userNumPres) +
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + userDemYaythresh +
      "<br>Political Party B: " + userRepYaythresh +
      "<br>Political Party C: " + userIndYaythresh +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + userBodyPass +
      "<br> Approval By Supermajority: " + userSuperThresh + "</div></p>";

      /*
    if (userEditCount >= 2) {
      nextButton.remove();
      recalBtn = createButton('RECALCULATE VOTE');
      recalBtn.id('recal-btn');
      recalBtn.class('buttons');
      // let buttonDiv = document.getElementById('button-div');
      recalBtn.parent(buttonDiv);

      // recalBtn.position(windowWidth - recalBtn.width - buttonRes.width - buttonRC.width - 20, windowHeight - 45);
      recalBtn.mousePressed(inputVar);
    }
      */
  }

}

function sComplete() {

  this.setup = function () {
  }

  this.enter = function () {

    console.log("save complete page");
    // document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
    document.getElementById("main-header").innerHTML = "<h1>Session Complete</h1>";
    document.getElementById("start-desc").innerHTML = "<h2>THANK YOU</h2><h2>Session ID: " + prevSessionID + "</h2><p>[additional info]</p";
    document.getElementById("top").style.display = "none";
    document.getElementById("pane-bkg").style.display = "none";
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
    document.getElementById("page13").style.display = "block";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    background(bColor);
    document.body.style.backgroundColor = bColor;

    setTimeout(function () {
      mgr.showScene(briefDescription);
    }, 5000); // 5 seconds, short for testing
  }

  this.draw = function () {
  }

}

//explanation text before user goes back into simulator
function sInfo() {

  this.setup = function () {
    simInfoText = document.getElementById('sim-info');
  }

  this.enter = function () {
    console.log("simulator info page");
    document.getElementById("top").innerHTML = " ";
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
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "block";
    nextButton.remove();
    inputTxt();
    var delayInMilliseconds = 120; //13000; // 15 seconds

    setTimeout(function () {
      inputVar();
    }, delayInMilliseconds);


  }

  this.draw = function () {

  }

  function inputTxt() {
    simInfoText.innerHTML = "<div id='page-container'><div id='content-wrap'><div class='body-text'><p>The simulator will now run through one legislative cycle with the provided inputs. The user will then have the option of running the simulator through additional legislative cycles with the same values or changing the parameters by clicking on the 'Reconfigure Government' button.</p></div></div></div>";

  }


}

//display of user inputs while in simulator
function sDisplay() {

  this.setup = function () {

  }

  this.enter = function () {

    console.log("user display page");
    document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUT DISPLAY";
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
    document.getElementById("page13").style.display = "block";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "block";
    document.getElementById("sim-info").style.display = "none";
    inputTxt();
  }

  this.draw = function () {


  }

  function inputTxt() {
    // OC if 2 bodies, "Second Legislative Chamber" is for the senate
    //    if 3 bodies, "Third Legislative Chamber" is for the senate
    userOutputText.innerHTML =
      "<div><h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumHouse +
      "<br>Members in Political Party A: " + Math.round(userPerHouseBody[0] * userNumHouse) +
      "<br>Members in Political Party B: " + Math.round(userPerHouseBody[1] * userNumHouse) +
      "<br>Members in Political Party C: " + Math.round(userPerHouseBody[2] * userNumHouse); // +

      // if (userNumLegislative == 2) {
      // userOutputText.innerHTML +=
      // "</p><h3>Second Legislative Chamber</h3>" +
      // "<p>Voting Members: " + userNumSenate +
      // "<br>Members in Political Party A: " + Math.round(userPerSenateBody[0] * userNumSenate) +
      // "<br>Members in Political Party B: " + Math.round(userPerSenateBody[1] * userNumSenate) +
      // "<br>Members in Political Party C: " + Math.round(userPerSenateBody[2] * userNumSenate) +
      // "</p><h3>Third Legislative Chamber</h3>" +
      // "<p>Voting Members: " + userNumHouse2 +
      // "<br>Members in Political Party A: " + Math.round(userPerHouse2Body[0] * userNumHouse2) +
      // "<br>Members in Political Party B: " + Math.round(userPerHouse2Body[1] * userNumHouse2) +
      // "<br>Members in Political Party C: " + Math.round(userPerHouse2Body[2] * userNumHouse2); // +
      // } else {
      userOutputText.innerHTML +=
      "</p><h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumHouse2 +
      "<br>Members in Political Party A: " + Math.round(userPerHouse2Body[0] * userNumHouse2) +
      "<br>Members in Political Party B: " + Math.round(userPerHouse2Body[1] * userNumHouse2) +
      "<br>Members in Political Party C: " + Math.round(userPerHouse2Body[2] * userNumHouse2) +
      "</p><h3>Third Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumSenate +
      "<br>Members in Political Party A: " + Math.round(userPerSenateBody[0] * userNumSenate) +
      "<br>Members in Political Party B: " + Math.round(userPerSenateBody[1] * userNumSenate) +
      "<br>Members in Political Party C: " + Math.round(userPerSenateBody[2] * userNumSenate);
      //}

      userOutputText.innerHTML +=
      "</p><h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + userNumVP +
      "<br>Members in Political Party A: " + Math.round(userPerPresBody[0] * userNumVP) +
      "<br>Members in Political Party B: " + Math.round(userPerPresBody[1] * userNumVP) +
      "<br>Members in Political Party C: " + Math.round(userPerPresBody[2] * userNumVP) +
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + userNumPres +
      "<br>Members in Political Party A: " + Math.round(userPerVPBody[0] * userNumPres) +
      "<br>Members in Political Party B: " + Math.round(userPerVPBody[1] * userNumPres) +
      "<br>Members in Political Party C: " + Math.round(userPerVPBody[2] * userNumPres) +
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + userDemYaythresh +
      "<br>Political Party B: " + userRepYaythresh +
      "<br>Political Party C: " + userIndYaythresh +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + userBodyPass +
      "<br> Approval By Supermajority: " + userSuperThresh + "</div></p>";
  }


  // //supermajority Cutoff for override of presidential veto
  // userSuperThresh;
  //
  // userBodyPass;

}

//shows default congress settings at end of original simulator
function sDefault() {

  this.setup = function () {
    userOutputText = document.getElementById('slider-disp');
  }

  this.enter = function () {

    console.log("default settings display page");
    document.getElementById("top").innerHTML = " ";
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
    document.getElementById("page13").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "block";
    document.getElementById("sim-info").style.display = "none";
    inputTxt();
  }

  this.draw = function () {


  }

  function inputTxt() {
    userOutputText.innerHTML =
      "<div><h3>House</h3>" +
      "<p>Voting Members: " + engine.numHouse +
      "<br>Members in Democrat Party: " + Math.round(engine.perDemHouse * engine.numHouse) +
      "<br>Members in Independent Party: " + Math.round(engine.perIndHouse * engine.numHouse) +
      "<br>Members in Republican Party: " + Math.round(engine.perRepHouse * engine.numHouse) +
      "</p><h3>Senate</h3>" +
      "<p>Voting Members: " + engine.numHouse2 +
      "<br>Members in Democrat Party: " + Math.round(engine.perDemSenate * engine.numHouse2) +
      "<br>Members in Independent Party: " + Math.round(engine.perIndSenate * engine.numHouse2) +
      "<br>Members in Republican Party: " + Math.round(engine.perRepSenate * engine.numHouse2) +
      // "<p>Voting Members: " + engine.numSenate +
      // "<br>Members in Democrat Party: " + Math.round(engine.perDemSenate * engine.numSenate) +
      // "<br>Members in Independent Party: " + Math.round(engine.perIndSenate * engine.numSenate) +
      // "<br>Members in Republican Party: " + Math.round(engine.perRepSenate * engine.numSenate) +
      "</p><h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + engine.numVP +
      "<br>Members in Democrat Party: " + Math.round(engine.perDemVP * engine.numVP) +
      "<br>Members in Independent Party: " + Math.round(engine.perIndVP * engine.numVP) +
      "<br>Members in Republican Party: " + Math.round(engine.perRepVP * engine.numVP) +
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + engine.numPres +
      "<br>Members in Democrat Party: " + Math.round(engine.perDemPres * engine.numPres) +
      "<br>Members in Independent Party: " + Math.round(engine.perIndPres * engine.numPres) +
      "<br>Members in Republican Party: " + Math.round(engine.perRepPres * engine.numPres) +
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Democrat Party: " + engine.demYaythresh +
      "<br>Independent Party: " + engine.indYaythresh +
      "<br>Republican Party: " + engine.repYaythresh +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + engine.perPass +
      "<br> Approval By Supermajority: " + engine.superThresh + "</p></div>";
  }


}
