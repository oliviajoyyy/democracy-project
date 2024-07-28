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

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1><h2>Description</h2>";
    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<p>The legislative apparatus of the current US government is represented in default mode, which will initially run through one legislative cycle. The user may configure alternative values in subsequent cycles in order to evaluate the effects of systemic changes to the mechanism of governance.</p>";
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
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1><h2>More Information</h2>";
    document.getElementById("main-btn-div").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<p>[Detailed project description & link to external page]</p>";
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

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1><h2>New Session</h2>";
    document.getElementById("main-btn-div").style.display = "none";


    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<p>[Description here on how to use the interface]";
    document.getElementById("start-desc").innerHTML += "<br>[Show timestamp-based name as ID for new session]</p>";

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
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1><h2>Select Session</h2>";
    document.getElementById("main-btn-div").style.display = "none";


    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<p>[Description here on how to use the interface]";
    document.getElementById("start-desc").innerHTML += "<br>[List of previous sessions (fr db), includes timestamp & ID]</p>";

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
    mgr.showScene(loadSessionS2);
  }

  function removeBtns() {
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
    document.getElementById("main-header").innerHTML = "<h1>Automated Future Democracies Simulator</h1><h2>Load Session</h2>";
    document.getElementById("main-btn-div").style.display = "none";


    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<p>[Description here on how to use the interface]";
    document.getElementById("start-desc").innerHTML += "<br>[Show timestamp-based name as ID for new (loaded) session]</p>";

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

let updateBtn, nextPaneBtn, prevPaneBtn;

//user input page for number of legislative bodies (1-3)
function sBodies() {
  var slider1 = document.getElementById('slider01');

  this.setup = function () {
    textSize(15);
    noStroke();
    if (reconfigBool == true) {
      // windowResized();
      visual.dWidth = windowWidth * .8;
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
      document.getElementById("update-btn").disabled = false;
    } else {
      document.getElementById("update-btn").disabled = true;
    }

    prevPaneBtn.mousePressed(previousPane);
    updateBtn.mousePressed(clickedUpdate);
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // diable after clicking it
    //removeButtons();
    //engine.setDefaultParams();
    setEngineParams();
    engine.numSenate = 1; // just to give default value

    // reset values for calculations
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  function removeButtons() {
    updateBtn.remove();
  }

    function createSlider() {

      noUiSlider.create(slider1, {
        start: [2],
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
   
  var curNumHouse = parseInt(engine.numHouse);
  var curNumHouse2 = parseInt(engine.numHouse2);
  var curNumSen = parseInt(engine.numSenate);
  var curNumVP = parseInt(engine.numVP);
  var curNumPres = parseInt(engine.numPres);
  userNumLegislative = parseFloat(userNumLegislative);


  this.setup = function () {
    // textSize(15);
    // noStroke();

  }

  this.enter = function () {

    console.log("1st Slider Page");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();

  }

  this.draw = function () {
    // draws in real time, reset was when previous scene button clicked - not every time this scene is entered
    //visual.displayVoting(engine);
    visual.displayImmediateBlank(engine);
    paneToggle();


    // if sliders changed any values on this page, enable update button
    if (userNumHouse != engine.numHouse || userNumHouse2 != engine.numHouse2 || userNumVP != engine.numVP || userNumPres != engine.numPres) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    updateBtn.mousePressed(clickedUpdate);

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // diable after clicking it

    setEngineParams();

    // reset values for calculations
    engine.completeReset();
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
  }

    function createSlider() {


      noUiSlider.create(slider5, {
        start: [2],
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
          userNumParties = parseInt(userNumParties);
          onePartyBool = true;

          userNumHouse = parseInt(userNumHouse);
          userNumHouse2 = parseInt(userNumHouse2)
          userNumPres = parseInt(userNumPres);
          userNumVP = parseInt(userNumVP);
          userNumSenate = parseInt(userNumSenate);
          userNumParties = parseInt(userNumParties);

        }

      });
    }
}

function sMembersFirstChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumHouse = parseInt(userNumHouse) //parseInt(engine.numHouse); // current number of total members in chamber 1
  // var slider1max; // = parseInt(userNumHouse);
  // var slider2max; // = floor(slider1max / 2);
  // var slider3max; // = slider1max - slider2max;
  var maxSlider;

  this.setup = function () {

  }

  this.enter = function () {
    // if (userNumParties == 2) {
    //   maxSlider = parseInt(userNumHouse) - 1; // OC total minus 1 bc w/ 2 bodies chosen, at least 1 member must always be in the other body
    // } else if (userNumParties == 3) {
    //   maxSlider = parseInt(userNumHouse - 2); // party B and C each must have at least 1 member since 3 parties were chosen
    // } else {
      maxSlider = parseInt(userNumHouse);
    //}
    // slider1max = parseInt(userNumHouse);
    // slider2max = floor(slider1max / 2);
    // slider3max = slider1max - slider2max;

    console.log("Slider Page Chamber 1 Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR FIRST CHAMBER";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

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
    document.getElementById("update-btn").disabled = true; // diable after clicking it

    setEngineParams();

    // reset values for calculations
    engine.completeReset();
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
          start: (userPerHouseBody[0] * userNumHouse), // fix later where to start
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
        start: (userPerHouseBody[0] * userNumHouse), // fix later where to start
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
        start: (userPerHouseBody[1] * userNumHouse), // fix later where to start
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
        start: (userPerHouseBody[2] * userNumHouse), // fix later where to start
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
      var numHousePartyA;
      var numHousePartyB;
      var numHousePartyC;

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        numHousePartyA = values[0];
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
          numHousePartyB = values[0];
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
          numHousePartyC = values[0];
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
          slider2.noUiSlider.set((userNumHouse - numHousePartyA));
          console.log("minus value: " + (userNumHouse - numHousePartyA));
        });

        // when user slides the party B slider, update slider A
        slider2.noUiSlider.on('slide', function(event) {
          slider1.noUiSlider.set(userNumHouse - numHousePartyB);
        });
      } 
      else if (userNumParties == 3) {
        
        // when user slides the party A slider, update sliders B and C evenly
        slider1.noUiSlider.on('slide', function(event) {
          let sliderBval = floor((userNumHouse - numHousePartyA) / 2);
          let sliderCval = (userNumHouse - numHousePartyA) - sliderBval;
          slider2.noUiSlider.set(sliderBval);
          slider3.noUiSlider.set(sliderCval);
        });

        // when user slides the party B slider, update sliders A and B evenly
        slider2.noUiSlider.on('slide', function(event) {
          let sliderAval = floor((userNumHouse - numHousePartyB) / 2);
          let sliderCval = (userNumHouse - numHousePartyB) - sliderAval;
          slider1.noUiSlider.set(sliderAval);
          slider3.noUiSlider.set(sliderCval);
        });

        // when user slides the party B slider, update sliders A and B evenly
        slider3.noUiSlider.on('slide', function(event) {
          let sliderAval = floor((userNumHouse - numHousePartyC) / 2);
          let sliderBval = (userNumHouse - numHousePartyC) - sliderAval;
          slider1.noUiSlider.set(sliderAval);
          slider2.noUiSlider.set(sliderBval);
        });
      }


    }

  }
}

function sMembersSecondChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumHouse2 = parseInt(userNumHouse2) //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  // var slider1max; // = parseInt(userNumHouse);
  // var slider2max; // = floor(slider1max / 2);
  // var slider3max; // = slider1max - slider2max;

  this.setup = function () {

  }

  this.enter = function () {
    maxSlider = parseInt(userNumHouse2);
    // slider1max = parseInt(userNumHouse2);
    // slider2max = floor(slider1max / 2);
    // slider3max = slider1max - slider2max;

    console.log("Slider Page Chamber 2 Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR SECOND CHAMBER";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();    
  }

  this.draw = function () {
    visual.displayVoting(engine);
    paneToggle();
    console.log("Party A: " + userPerHouse2Body[0] + " Party B: " + userPerHouse2Body[1] + " Party C: " + userPerHouse2Body[2]);
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

      noUiSlider.create(slider1, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      noUiSlider.create(slider2, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        userPerHouse2Body[0] = values[0];
        numPerHouse2Body[0] = userPerHouse2Body[0];
        house2Percentage = userPerHouse2Body[0] / userNumHouse2;
        house2Percentage = roundNum(house2Percentage, 2);
        userPerHouse2Body[0] = house2Percentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
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
          userPerHouse2Body[2] = values[0];
          numPerHouse2Body[2] = userPerHouse2Body[2];
          house2Percentage = userPerHouse2Body[2] / userNumHouse2;
          house2Percentage = roundNum(house2Percentage, 2);
          userPerHouse2Body[2] = house2Percentage;
        });
      } else { // set party c to 0
        userPerHouse2Body[2] = 0;
      }
    }
  }
}

function sMembersThirdChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumSenate = parseInt(userNumSenate) //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;

  this.setup = function () {

  }

  this.enter = function () {
    maxSlider = parseInt(userNumSenate);

    console.log("Slider Page Chamber 3 Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR THIRD CHAMBER";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();
    //sliderVals();
    
  }

  this.draw = function () {
    visual.displayVoting(engine);
    paneToggle();
    console.log("Party A: " + userPerSenateBody[0] + " Party B: " + userPerSenateBody[1] + " Party C: " + userPerSenateBody[2]);
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

      noUiSlider.create(slider1, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      noUiSlider.create(slider2, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        userPerSenateBody[0] = values[0];
        numPerSenateBody[0] = userPerSenateBody[0];
        senatePercentage = userPerSenateBody[0] / userNumSenate;
        senatePercentage = roundNum(senatePercentage, 2);
        userPerSenateBody[0] = senatePercentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
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
          userPerSenateBody[2] = values[0];
          numPerSenateBody[2] = userPerSenateBody[2];
          senatePercentage = userPerSenateBody[2] / userNumSenate;
          senatePercentage = roundNum(senatePercentage, 2);
          userPerSenateBody[2] = senatePercentage;
        });
      } else { // set party c to 0
        userPerSenateBody[2] = 0;
      }
    }
  }
}

function sMembersVP() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumVP = parseInt(userNumVP) //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;

  this.setup = function () {

  }

  this.enter = function () {
    maxSlider = parseInt(userNumVP);

    console.log("Slider Page VP Party Members ");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS FOR VICE PRESIDENCY";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();
    //sliderVals();
    
  }

  this.draw = function () {
    visual.displayVoting(engine);
    paneToggle();
    console.log("Party A: " + userPerVPBody[0] + " Party B: " + userPerVPBody[1] + " Party C: " + userPerVPBody[2]);
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

      noUiSlider.create(slider1, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      noUiSlider.create(slider2, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        userPerVPBody[0] = values[0];
        numPerVPBody[0] = userPerVPBody[0];
        vpPercentage = userPerVPBody[0] / userNumVP;
        vpPercentage = roundNum(vpPercentage, 2);
        userPerVPBody[0] = vpPercentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
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
          userPerVPBody[2] = values[0];
          numPerVPBody[2] = userPerVPBody[2];
          vpPercentage = userPerVPBody[2] / userNumVP;
          vpPercentage = roundNum(vpPercentage, 2);
          userPerVPBody[2] = vpPercentage;
        });
      } else { // set party c to 0
        userPerVPBody[2] = 0;
      }
    }
  }
}


function sMembersPres() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumPres = parseInt(userNumPres) //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;

  this.setup = function () {
    
  }

  this.enter = function () {
    maxSlider = parseInt(userNumPres);

    console.log("Slider Page Pres Party Members ");
    document.getElementById("top").style.display = "block";
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
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();
    //sliderVals();
    
  }

  this.draw = function () {
    visual.displayVoting(engine);
    paneToggle();
    console.log("Party A: " + userPerPresBody[0] + " Party B: " + userPerPresBody[1] + " Party C: " + userPerPresBody[2]);
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

      noUiSlider.create(slider1, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      noUiSlider.create(slider2, {
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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
        start: floor(maxSlider/2), // fix later where to start
        range: {
          'min': [1],
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

      // house
      slider1.noUiSlider.on('update', function (values, handle) {
        userPerPresBody[0] = values[0];
        numPerPresBody[0] = userPerPresBody[0];
        presPercentage = userPerPresBody[0] / userNumPres;
        presPercentage = roundNum(presPercentage, 2);
        userPerPresBody[0] = presPercentage;
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
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
          userPerPresBody[2] = values[0];
          numPerPresBody[2] = userPerPresBody[2];
          presPercentage = userPerPresBody[2] / userNumPres;
          presPercentage = roundNum(presPercentage, 2);
          userPerPresBody[2] = presPercentage;
        });
      } else { // set party c to 0
        userPerPresBody[2] = 0;
      }
    }
  }
}

/*  ORIGINAL VERSION WITH MULTI-HANDLE SLIDERS TO CHOOSE NUM PARTY MEMBERS FOR EACH CHAMBER
// ----------------------------------------------------------------------------------
//user input page for number of members in each party
function sMembers() {

  var slider6; // = document.getElementById('slider6'); // house
  var slider6a; // OC TODO var for new slider // house2
  var slider7; // = document.getElementById('slider7'); // senate
  var slider8; // = document.getElementById('slider8'); // vp
  var slider9; // = document.getElementById('slider9'); // pres

  var value1;// = document.getElementById('value-1'); // to slider6
  var value1a;// = document.getElementById('value-5'); // to slider6a
  var value2;// = document.getElementById('value-2'); // to slider7
      // OC TODO create another for new slider
  var value3;// = document.getElementById('value-3'); // to slider8
  var value4;// = document.getElementById('value-4'); // to slider9

  this.setup = function () { }

  this.enter = function () {
    console.log("3rd Slider Page");
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS AFFILIATED WITH EACH POLITICAL PARTY";
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
    document.getElementById("slider-value").style.display = "block";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    // cursor();
    checkNumBodies();
    sliders();

  }
  this.draw = function () {

  }

    // OC display sliders based on number of legislative bodies chosen
  function checkNumBodies() {

    if (userNumLegislative == 1) {
      document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST CHAMBER</p><div class='first-slider' id='slider6'></div>";
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>VICE PRESIDENCY</p><div id='slider7'></div>";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>PRESIDENCY</p><div id='slider8'></div>";
      document.getElementById("s3-p3").style.display = "block";
      document.getElementById("s4-p3").innerHTML = "<p id='slider-text-4'>SECOND CHAMBER</p><div id='slider9'></div>";
      document.getElementById("s4-p3").style.display = "none";
      document.getElementById("s5-p3").innerHTML = "<p id='slider-text-5'>THIRD CHAMBER</p><div id='slider9a'></div>";
      document.getElementById("s5-p3").style.display = "none";
      
      slider6 = document.getElementById('slider6'); // house
      slider6a = document.getElementById('slider9'); // house2 chamber, set slider but not used
      slider7 = document.getElementById('slider9a'); // 3rd (senate) chamber, set slider but not used
      slider8 = document.getElementById('slider7'); // vp
      slider9 = document.getElementById('slider8'); // pres

      value1 = document.getElementById('value-1');
      value1a = document.getElementById('value-4');
      value2 = document.getElementById('value-5');
      value3 = document.getElementById('value-2');
      value4 = document.getElementById('value-3');

    } else if (userNumLegislative == 2) {
      // show second chamber slider
      document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p><div class='first-slider' id='slider6'></div>";
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p><div id='slider7'></div>";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>VICE PRESIDENCY</p><div id='slider8'></div>";
      document.getElementById("s3-p3").style.display = "block";
      document.getElementById("s4-p3").innerHTML = "<p id='slider-text-4'>PRESIDENCY</p><div id='slider9'></div>";
      document.getElementById("s4-p3").style.display = "block";
      document.getElementById("s5-p3").innerHTML = "<p id='slider-text-5'>THIRD LEGISLATIVE CHAMBER</p><div id='slider9a'></div>";
      document.getElementById("s5-p3").style.display = "none";
      
      slider6 = document.getElementById('slider6'); // house
      slider6a = document.getElementById('slider9a'); // house2 chamber, set slider but not used
      slider7 = document.getElementById('slider7'); // 3rd (senate) chamber, set slider but not used
      slider8 = document.getElementById('slider8'); // vp
      slider9 = document.getElementById('slider9'); // pres

      value1 = document.getElementById('value-1');
      value1a = document.getElementById('value-5');
      value2 = document.getElementById('value-2');
      value3 = document.getElementById('value-3');
      value4 = document.getElementById('value-4');

      // document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST CHAMBER</p><div class='first-slider' id='slider6'></div>";
      // document.getElementById("s1-p3").style.display = "block";
      // document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>SECOND CHAMBER</p><div id='slider7'></div>";
      // document.getElementById("s2-p3").style.display = "block";
      // document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>THIRD CHAMBER</p><div id='slider8'></div>";
      // document.getElementById("s3-p3").style.display = "none";
      // document.getElementById("s4-p3").innerHTML = "<p id='slider-text-4'>VICE PRESIDENCY</p><div id='slider9'></div>";
      // document.getElementById("s4-p3").style.display = "block";
      // document.getElementById("s5-p3").innerHTML = "<p id='slider-text-5'>PRESIDENCY</p><div id='slider9a'></div>";
      // document.getElementById("s5-p3").style.display = "block";
      
      // slider6 = document.getElementById('slider6'); // house
      // slider6a = document.getElementById('slider7'); // house2 chamber, set slider but not used
      // slider7 = document.getElementById('slider8'); // 3rd (senate) chamber, set slider but not used
      // slider8 = document.getElementById('slider9'); // vp
      // slider9 = document.getElementById('slider9a'); // pres

      // value1 = document.getElementById('value-1');
      // value1a = document.getElementById('value-2');
      // value2 = document.getElementById('value-3');
      // value3 = document.getElementById('value-4');
      // value4 = document.getElementById('value-5');

    } else {
      // = "block" for all 3 body sliders
      document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST CHAMBER</p><div class='first-slider' id='slider6'></div>";
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>SECOND CHAMBER</p><div id='slider7'></div>";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>THIRD CHAMBER</p><div id='slider8'></div>";
      document.getElementById("s3-p3").style.display = "block";
      document.getElementById("s4-p3").innerHTML = "<p id='slider-text-4'>VICE PRESIDENCY</p><div id='slider9'></div>";
      document.getElementById("s4-p3").style.display = "block";
      document.getElementById("s5-p3").innerHTML = "<p id='slider-text-5'>PRESIDENCY</p><div id='slider9a'></div>";
      document.getElementById("s5-p3").style.display = "block";
      
      slider6 = document.getElementById('slider6'); // house
      slider6a = document.getElementById('slider7'); // house2 chamber, set slider but not used
      slider7 = document.getElementById('slider8'); // 3rd (senate) chamber, set slider but not used
      slider8 = document.getElementById('slider9'); // vp
      slider9 = document.getElementById('slider9a'); // pres

      value1 = document.getElementById('value-1');
      value1a = document.getElementById('value-2');
      value2 = document.getElementById('value-3');
      value3 = document.getElementById('value-4');
      value4 = document.getElementById('value-5');
    }

  }

  function mouseOver(slider, value) {

    slider.onmouseover = logMouseOver;
    slider.onmouseout = logMouseOut;

    function logMouseOver() {
      value.style.display = "block";
    }

    function logMouseOut() {
      value.style.display = "none";
    }
  }

  function sliders() {

    if (userEdits == true) {
      //when user chooses 1 party the first time, no sliders get created.
      //The second round needs to create the sliders.
      console.log("User Edit Count: " + userEditCount + " One Party Chosen Previously?: " + onePartyBool);
      if (userEditCount == 1 && onePartyBool == true) {
        createSlider();
        // sliderVals();
      }
      // makes it possible to choose different number of parties each time around
      else {
        // slider6.noUiSlider.destroy();
        // slider6a.noUiSlider.destroy(); // OC TODO destroy() new slider
        // slider7.noUiSlider.destroy();
        // slider8.noUiSlider.destroy();
        // slider9.noUiSlider.destroy();
        createSlider();
      }
      sliderVals();
    } else {
      createSlider();
      sliderVals();
    }

    function createSlider() {
      // NOui slider
      userNumHouse = parseInt(userNumHouse);
      userNumHouse2 = parseInt(userNumHouse2)
      userNumPres = parseInt(userNumPres);
      userNumVP = parseInt(userNumVP);
      userNumSenate = parseInt(userNumSenate);
      userNumParties = parseInt(userNumParties);
      userNumHouseRan = [];
      userNumHouse2Ran = [];
      userNumSenateRan = [];
      userNumPresRan = [];
      userNumVPRan = [];

      // house
      for (var i = 0; i < userNumParties - 1; i++) {
        userNumHouseRan[i] = Math.ceil(Math.random() * userNumHouse)
        if (i > 0) {
          for (var j = 0; j < userNumHouseRan.length - 1; j++) {
            if (userNumHouseRan[i] == userNumHouseRan[j]) {
              userNumHouseRan[i] = parseInt(Math.ceil(Math.random() * userNumHouse));
            }
          }
        }
        // console.log("random house num: " + userNumHouseRan[i]);
      }
      userNumHouseRan.sort((a, b) => a - b);
      console.log(userNumHouseRan);

      // userNumHouseConn = JSON.parse(userNumHouseConn);

      // OC TODO same for 3rd legislative body
      // house 2 
      for (var i = 0; i < userNumParties - 1; i++) {
        userNumHouse2Ran[i] = Math.ceil(Math.random() * userNumHouse2)
        if (i > 0) {
          for (var j = 0; j < userNumHouse2Ran.length - 1; j++) {
            if (userNumHouse2Ran[i] == userNumHouse2Ran[j]) {
              userNumHouse2Ran[i] = parseInt(Math.ceil(Math.random() * userNumHouse2));
            }
          }
        }
        // console.log("random house num: " + userNumHouseRan[i]);
      }
      userNumHouse2Ran.sort((a, b) => a - b);
      console.log(userNumHouse2Ran);

      
      // senate
      for (var i = 0; i < userNumParties - 1; i++) {
        userNumSenateRan[i] = Math.ceil(Math.random() * userNumSenate)
        if (i > 0) {
          for (var j = 0; j < userNumSenateRan.length - 1; j++) {
            if (userNumSenateRan[i] == userNumSenateRan[j]) {
              userNumSenateRan[i] = parseInt(Math.ceil(Math.random() * userNumSenate));
            }
          }
        }
        // console.log("random house num: " + userNumSenateRan[i]);
      }
      userNumSenateRan.sort((a, b) => a - b);
      console.log(userNumSenateRan);


      // pres
      for (var i = 0; i < userNumParties - 1; i++) {
        userNumPresRan[i] = Math.ceil(Math.random() * userNumPres)
        if (i > 0) {
          for (var j = 0; j < userNumPresRan.length - 1; j++) {
            if (userNumPresRan[i] == userNumPresRan[j]) {
              userNumPresRan[i] = parseInt(Math.ceil(Math.random() * userNumPres));
            }
          }
        }
        // console.log("random house num: " + userNumSenateRan[i]);
      }
      userNumPresRan.sort((a, b) => a - b);
      console.log(userNumParties);

      // vp
      for (var i = 0; i < userNumParties - 1; i++) {
        userNumVPRan[i] = Math.ceil(Math.random() * userNumVP)
        if (i > 0) {
          for (var j = 0; j < userNumVPRan.length - 1; j++) {
            if (userNumVPRan[i] == userNumVPRan[j]) {
              userNumVPRan[i] = parseInt(Math.ceil(Math.random() * userNumVP));
            }
          }
        }
        // console.log("random house num: " + userNumSenateRan[i]);
      }

      userNumVPRan.sort((a, b) => a - b);
      console.log(userNumVPRan);


      noUiSlider.create(slider6, {
        start: userNumHouseRan,
        range: {
          'min': [0],
          'max': [userNumHouse]
        },
        // connect: [true, true, true, true,true,true],
        cssPrefix: 'noUi-',
        tooltips: false,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      // OC TODO create new slider
      noUiSlider.create(slider6a, {
        start: userNumHouse2Ran,
        range: {
          'min': [0],
          'max': [userNumHouse2]
        },
        // connect: [true, true, true, true,true,true],
        cssPrefix: 'noUi-',
        tooltips: false,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });


      noUiSlider.create(slider7, {
        start: userNumSenateRan,
        range: {
          'min': [0],
          'max': [userNumSenate]
        },
        cssPrefix: 'noUi-',
        tooltips: false,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });

      

      noUiSlider.create(slider8, {
        start: userNumVPRan,
        range: {
          'min': [0],
          'max': [userNumVP]
        },
        cssPrefix: 'noUi-',
        tooltips: false,
        pips: {
          mode: 'range',
          density: 'range',
        },
        step: 1,
        format: wNumb({
          decimals: 0
        })
      });


      noUiSlider.create(slider9, {
        start: userNumPresRan,
        range: {
          'min': [0],
          'max': [userNumPres]
        },
        cssPrefix: 'noUi-',
        tooltips: false,
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

      var handle6 = slider6.querySelectorAll('.noUi-handle');
      var handle6a = slider6a.querySelectorAll('.noUi-handle');
      var handle7 = slider7.querySelectorAll('.noUi-handle');
      // OC TODO create new handle for new slider
      var handle8 = slider8.querySelectorAll('.noUi-handle');
      var handle9 = slider9.querySelectorAll('.noUi-handle');

      // var value1 = document.getElementById('value-1');
      // var value1a = document.getElementById('value-5');
      // var value2 = document.getElementById('value-2');
      // // OC TODO create another for new slider
      // var value3 = document.getElementById('value-3');
      // var value4 = document.getElementById('value-4');

      // var rangeSliderValueElement = document.getElementById('slider-value');

      // OC TODO add new color?
      var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

      for (var i = 0; i < handle6.length; i++) {
        handle6[i].classList.add(classes[i]);

      }

      // OC TODO same for new handle
      for (var i = 0; i < handle6a.length; i++) {
        handle6a[i].classList.add(classes[i]);

      }

      for (var i = 0; i < handle7.length; i++) {
        handle7[i].classList.add(classes[i]);

      }

      for (var i = 0; i < handle8.length; i++) {
        handle8[i].classList.add(classes[i]);
      }

      for (var i = 0; i < handle9.length; i++) {
        handle9[i].classList.add(classes[i]);
      }

      // helper vars
      var housePercentage, house2Percentage, senPercentage, vpPercentage, presPercentage;

      if (userNumParties > 1) {
        //connecting values to html, each tab value is stored in an array

        userPerHouseBody = [];
        var numPerHouseBody = [];
        slider6.noUiSlider.on('update', function (values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              userPerHouseBody[i] = values[i];
            } else if (i == values.length) {
              userPerHouseBody[i] = userNumHouse - values[i - 1];
            } else {
              userPerHouseBody[i] = values[i] - values[i - 1];
            }
            numPerHouseBody[i] = userPerHouseBody[i];
            housePercentage = userPerHouseBody[i] / userNumHouse;
            housePercentage = roundNum(housePercentage, 2);
            userPerHouseBody[i] = housePercentage;
          }
          console.log();


          // made for up to three political parties
          if (userPerHouseBody.length == 3) {
            value1.innerHTML = "Party A: " + numPerHouseBody[0] + " Party B: " + numPerHouseBody[1] + " Party C: " + numPerHouseBody[2];
          } else if (userPerHouseBody.length == 2) {
            // rangeSliderValueElement.innerHTML = userPerHouseBody[0] + " " + userPerHouseBody[1];
            value1.innerHTML = "Party A: " + numPerHouseBody[0] + " Party B: " + numPerHouseBody[1];
          } else {
            value1.innerHTML = "Party A: " + numPerHouseBody[0];
          }
          mouseOver(slider6, value1);
        });

        userPerSenateBody = [];
        var numPerSenateBody = [];

       if (userNumLegislative == 3) { // for >=2 legislative bodies
        slider7.noUiSlider.on('update', function (values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              userPerSenateBody[i] = values[i];
            } else if (i == values.length) {
              userPerSenateBody[i] = userNumSenate - values[i - 1];
            } else {
              userPerSenateBody[i] = values[i] - values[i - 1];
            }
            numPerSenateBody[i] = userPerSenateBody[i];
            senPercentage = userPerSenateBody[i] / userNumSenate;
            senPercentage = roundNum(senPercentage, 2);
            userPerSenateBody[i] = senPercentage;
          }

          //made for up to three political parties
          if (userPerSenateBody.length == 3) {
            value2.innerHTML = "Party A: " + numPerSenateBody[0] + " Party B: " + numPerSenateBody[1] + " Party C: " + numPerSenateBody[2];
          } else if (userPerSenateBody.length == 2) {
            value2.innerHTML = "Party A: " + numPerSenateBody[0] + " Party B: " + numPerSenateBody[1];
          } else {
            value2.innerHTML = "Party A: " + numPerSenateBody[0];
          }
          mouseOver(slider7, value2);
        });
      } else { // set members for each party to 0 when no 2nd legislative body
        userPerSenateBody[0] = 0;
        userPerSenateBody[1] = 0;
        userPerSenateBody[2] = 0;
      }

      // OC TODO same for new slider and val
      userPerHouse2Body = [];
      var numPerHouse2Body = [];
      if (userNumLegislative >= 2) { 
        slider6a.noUiSlider.on('update', function (values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              userPerHouse2Body[i] = values[i];
            } else if (i == values.length) {
              userPerHouse2Body[i] = userNumHouse2 - values[i - 1];
            } else {
              userPerHouse2Body[i] = values[i] - values[i - 1];
            }
            numPerHouse2Body[i] = userPerHouse2Body[i];
            house2Percentage = userPerHouse2Body[i] / userNumHouse2;
            house2Percentage = roundNum(house2Percentage, 2);
            userPerHouse2Body[i] = house2Percentage;
          }

          //made for up to three political parties
          if (userPerHouse2Body.length == 3) {
            value1a.innerHTML = "Party A: " + numPerHouse2Body[0] + " Party B: " + numPerHouse2Body[1] + " Party C: " + numPerHouse2Body[2];
          } else if (userPerSenateBody.length == 2) {
            value1a.innerHTML = "Party A: " + numPerHouse2Body[0] + " Party B: " + numPerHouse2Body[1];
          } else {
            value1a.innerHTML = "Party A: " + numPerHouse2Body[0];
          }
          mouseOver(slider6a, value1a);
        });
      } else { 
        // set to 0 for each party 
        userPerHouse2Body[0] = 0;
        userPerHouse2Body[1] = 0;
        userPerHouse2Body[2] = 0;
      }

        userPerVPBody = [];
        var numPerVPBody = [];
        slider8.noUiSlider.on('update', function (values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              userPerVPBody[i] = values[i];
            } else if (i == values.length) {
              userPerVPBody[i] = userNumVP - values[i - 1];
            } else {
              userPerVPBody[i] = values[i] - values[i - 1];
            }
            numPerVPBody[i] = userPerVPBody[i];
            vpPercentage = userPerVPBody[i] / userNumVP;
            vpPercentage = roundNum(vpPercentage, 2);
            userPerVPBody[i] = vpPercentage;
          }


          if (userPerVPBody.length == 3) {
            value3.innerHTML = "Party A: " + numPerVPBody[0] + " Party B: " + numPerVPBody[1] + " Party C: " + numPerVPBody[2];
          } else if (userPerVPBody.length == 2) {
            value3.innerHTML = "Party A: " + numPerVPBody[0] + " Party B: " + numPerVPBody[1];
          } else {
            value3.innerHTML = "Party A: " + numPerVPBody[0];
          }
          mouseOver(slider8, value3);


        });

        userPerPresBody = [];
        var numPerPresBody = [];
        slider9.noUiSlider.on('update', function (values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              userPerPresBody[i] = values[i];
            } else if (i == values.length) {
              userPerPresBody[i] = userNumPres - values[i - 1];
            } else {
              userPerPresBody[i] = values[i] - values[i - 1];
            }
            numPerPresBody[i] = userPerPresBody[i];
            presPercentage = userPerPresBody[i] / userNumPres;
            presPercentage = roundNum(presPercentage, 2);
            userPerPresBody[i] = presPercentage;
          }
          if (userPerPresBody.length == 3) {
            value4.innerHTML = "Party A: " + numPerPresBody[0] + " Party B: " + numPerPresBody[1] + " Party C: " + numPerPresBody[2];
          } else if (userPerPresBody.length == 2) {
            value4.innerHTML = "Party A: " + numPerPresBody[0] + " Party B: " + numPerPresBody[1];
          } else {
            value4.innerHTML = "Party A: " + numPerPresBody[0];
          }
          mouseOver(slider9, value4);

        });
      }
    }
  }
}
// ----------------------------------------------------------------------------------
*/

//user input page for percentage of votes required for bill approval
function sBodyPass() {

  var currSuperThresh = parseFloat(engine.superThresh * 100);
  var currPerPass = parseFloat(engine.perPass * 100);

  this.setup = function () {
    textSize(15);
    noStroke();
    // engine.dWidth = width;
    // engine.dHeight = height;
    // v.dWidth = width;
    // v.dHeight = height;
    // background("#012244");
    createSlider();
    sliderVals();
  }

  this.enter = function () {
    // noCursor();
    console.log("4th Slider Page");
    document.getElementById("top").innerHTML = "PERCENTAGE OF VOTES REQUIRED FOR APPROVAL BY EACH CHAMBER";
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
    visual.displayImmediateBlank(engine);
    paneToggle();
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
        userBodyPass = values[0]
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
  var curDemYaythresh = parseInt(engine.demYaythresh * 100);
  var curRepYaythresh = parseInt(engine.repYaythresh * 100);
  var curIndYaythresh = parseInt(engine.indYaythresh * 100);

  this.setup = function () {
    createSlider();
    sliderVals();
  }

  this.enter = function () {

    console.log("5th slider page");
    document.getElementById("top").innerHTML = "PROBABILITY OF AN AFFIRMATIVE VOTE BY A PARTY MEMBER";
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    // document.getElementById("slider-value").style.display = "none";
    checkParties();
    // sliders();
    sliderVals();
  }

  this.draw = function () { 
    visual.displayImmediateBlank(engine);
    paneToggle();
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

//page showing all of user inputs
function sResults() {
  let voteBtn, startOverBtn, editBtn, saveBtn, approvalBtn;
  let visualizeVote;

  this.setup = function () {

    userOutputText = document.getElementById('slider-disp');
    visualizeVote = false;

  }

  this.enter = function () {
    configIX = userEditCount; // OC config array index is 1 less than editCount until it reaches max attempts
    if (configIX > MAX_CONFIG_ATTEMPTS - 1) {
      configs.shift(); // remove first entered in array
      configIX == MAX_CONFIG_ATTEMPTS - 1; // decrement IX to last position in array
    }
    results = []; // OC new results array since it is a new config
    resultIX = 0; // OC reset resultIX bc new configuration
    userEditCount++;
    console.log("user edit count: " + userEditCount);
    console.log("user result page");
    // document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
    document.getElementById("top").innerHTML = "";
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
    document.getElementById("page11").style.display = "block";
    // document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "block";
    document.getElementById("sim-info").style.display = "none";
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
    inputTxt();

    nextPaneBtn.remove();
    updateBtn.remove();
    prevPaneBtn.remove();

    voteBtn = createButton('Vote');
    voteBtn.id('vote-btn');
    voteBtn.class('buttons');
    voteBtn.parent(buttonDiv);

    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);

    editBtn = createButton('Edit Config');
    editBtn.id('edit-btn');
    editBtn.class('buttons');
    editBtn.parent(buttonDiv);

    saveBtn = createButton('Save Config');
    saveBtn.id('save-btn');
    saveBtn.class('buttons');
    saveBtn.parent(buttonDiv);
    
    approvalBtn = createButton('Approve');
    approvalBtn.id('approve-btn');
    approvalBtn.class('buttons');
    approvalBtn.parent(buttonDiv);

    visualizeVote = false;

    // set new parameters to show updated configuration when entering scene
    setEngineParams();
    // reset values for calculations
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

  }

  this.draw = function () {
    if (visualizeVote == false) {
      visual.displayImmediateBlank(engine);
    } else {
      visual.displayVoting(engine);
      // OC when visual display of rectangles is done, show buttons
      if (visual.userInputState) {
        finalDisplay();
      }
    }
    paneToggle();
    
    voteBtn.mousePressed(clickedVote);
    startOverBtn.mousePressed(clickedStartOver);
    editBtn.mousePressed(clickedEdit);
    saveBtn.mousePressed(clickedSave);
    approvalBtn.mousePressed(clickedApprove);
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

  function clickedVote() {
    visualizeVote = true;
    setEngineParams(); // set new parameters

    // reset values for calculations and drawings
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
    
    engine.currentCongLogic(true); // get results for this configuration

  }

  function clickedStartOver() {
    removeBtns();
    mgr.showScene(briefDescription);
  }

  function clickedEdit() {
    removeBtns();
    // reset values for calculations
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
    mgr.showScene(sBodies);
  }

  function clickedSave() {
    //removeBtns();
    // go to different scene?
  }

  function clickedApprove() {

  }

  function removeBtns() {
    voteBtn.remove();
    startOverBtn.remove();
    editBtn.remove();
    saveBtn.remove();
    approvalBtn.remove();
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




  // //supermajority Cutoff for override of presidential veto
  // userSuperThresh;
  //
  // userBodyPass;

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
    document.getElementById("page11").style.display = "none";
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
    document.getElementById("page11").style.display = "block";
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
    document.getElementById("page11").style.display = "none";
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
