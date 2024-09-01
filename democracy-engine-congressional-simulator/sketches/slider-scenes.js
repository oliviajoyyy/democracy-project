
/**
 * A01 Start Up
 */
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
    console.log("start up scene");
    background(bColor);
    document.body.style.backgroundColor = bColor;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.title;
    document.getElementById("main-btn-div").style.display = "block";
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    continueBtn = createButton('Continue');
    continueBtn.id('continue-btn-a01');
    continueBtn.class('buttons');
    continueBtn.parent(buttonDiv);
    continueBtn.mousePressed(clickedContinue);

    testBtn = createButton('Hardware Test');
    testBtn.id('test-btn-a01');
    testBtn.class('buttons');
    testBtn.parent(buttonDiv);
    testBtn.mousePressed(clickedTest);

    // setTimeout(function () {
    //     if (mgr.isCurrent(startUp)) { // OC prevents prgm from moving to test screen if already moved on from the first screen
    //       clickedTest();
    //     }
    //     }, 10000); // goes to test scene after 10 seconds
  }

  this.draw = function () {
  }

  function clickedContinue() {
    removeBtns();
    mgr.showScene(startSession);
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

/**
 * A02 Start Session
 * Main start up scene for public view
 */
function startSession() {
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
    console.log("start up scene");
    background(bColor);
    document.body.style.backgroundColor = bColor;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.title;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("screen").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = configJSON.text.shortDescription;
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    newSessionBtn = createButton('New Session');
    newSessionBtn.id('new-session-btn-a02');
    newSessionBtn.class('buttons');
    newSessionBtn.parent(buttonDiv);
    newSessionBtn.mousePressed(clickedNew);

    loadSessionBtn = createButton('Load Session');
    loadSessionBtn.id('load-session-btn-a02');
    loadSessionBtn.class('buttons');
    loadSessionBtn.parent(buttonDiv);
    loadSessionBtn.mousePressed(clickedLoad);

    aboutBtn = createButton('About the Project');
    aboutBtn.id('about-btn-a02');
    aboutBtn.class('buttons');
    aboutBtn.parent(buttonDiv);
    aboutBtn.mousePressed(clickedAbout);

  }

  this.draw = function () {
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

/**
 * A03 Hardware Test
 */
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
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Hardware & DB Test </h1>";

    document.getElementById("main-btn-div").style.display = "block";
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    backBtn = createButton('Back to Start Up');
    backBtn.id('back-btn-a03');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);

    testBtn = createButton('Hardware DB Test');
    testBtn.id('test-btn-a03');
    testBtn.class('buttons');
    testBtn.parent(buttonDiv);
    // testBtn.mousePressed(clickedTest);
  }

  this.draw = function () {
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedTest() {
    removeBtns();
    //mgr.showScene(); // scene TBA
  }

  function removeBtns() {
    backBtn.remove();
    testBtn.remove();
  }
}

/**
 * A04 More About This Project
 */
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
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.title;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = configJSON.text.detailedDescription;
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    backBtn = createButton('Back to Start Up');
    backBtn.id('back-btn-a04');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);
  }

  this.draw = function () {
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function removeBtns() {
    backBtn.remove();
  }
}

/**
 * B01 New Session
 */
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
    console.log("start up scene");

    newSession();
    paramChangedBool = true;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.title;
    document.getElementById("main-btn-div").style.display = "block";

    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>New Session</h2>" + configJSON.text.newSessionDesc;

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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    backBtn = createButton('Start Over');
    backBtn.id('back-btn-b01');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);

    nextBtn = createButton('Next');
    nextBtn.id('next-btn-b01');
    nextBtn.class('buttons');
    nextBtn.parent(buttonDiv);
    nextBtn.mousePressed(clickedNext);
  }

  this.draw = function () {
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedNext() {
    removeBtns();
    engine.setDefaultParams(); // set engine params to json govt config vals
    // setDefaultUserVars();
    // setEngineParams(engine);
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

/**
 * B02 Load Session
 */
function loadSessionS1() {
  let backBtn, nextBtn, showMoreBtn;
  let selection;
  let sessions;
  let numResults = 10; // number of results shown on screen
  let showCount;
  let dWidth;
  let dHeight;
  
  this.setup = function () {
    textFont(helvFont);
    dWidth = windowWidth * .8;
    dHeight = windowHeight * .8;
    let canvas = createCanvas(dWidth, dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    console.log("start up scene");
    newSession();
    paramChangedBool = true;
    showCount = 0;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.title;
    document.getElementById("start-desc").style.display = "block";
    
    showSessionsList(); // get sessions fr db and display onscreen

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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    document.getElementById("main-btn-div").style.display = "block";
    let buttonDiv = document.getElementById('main-btn-div');

    backBtn = createButton('Start Over');
    backBtn.id('back-btn-b02');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);

    showMoreBtn = createButton('Show More Sessions');
    showMoreBtn.id('show-btn-b02');
    showMoreBtn.class('buttons');
    showMoreBtn.parent(buttonDiv);
    nextBtn.mousePressed(clickedNext);

    nextBtn = createButton('Next');
    nextBtn.id('next-btn-b02');
    nextBtn.class('buttons');
    nextBtn.parent(buttonDiv);
    showMoreBtn.mousePressed(clickedShowMore);
  }

  this.draw = function () {
    if (sessions && selection.value()) { 
      var i = selection.value();
      //console.log("sel val: " + selection.value());
      loadedConfig = sessions[i].finalConfig.config; // set to global var loadedConfig
      //console.log(loadedConfig);
    }
  }

  function getSpaces(x) {
    let s = "";
    for (i=0; i<x; i++) {
      s += "\u00A0";
    }
    return s;
  }

  var rest = false;
  function showSessionsList() {
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.title;
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = "<h2>Select Session</h2>"
      + configJSON.text.selectSessionDesc
      + "<br><p>&nbsp;&nbsp;&nbsp;&nbsp; SESSION ID "
      + getSpaces(12) + " CHAMBERS "
      + getSpaces(3) + " PARTIES "
      + getSpaces(4) + " TOTAL VOTING MEMBERS </p>";

    selection = createRadio("sessions"); // attatch to HTML
    selection.size(230);

    getSessions().then((result) => {
      sessions = result;
      console.log(result);
      // show sessions in order from last 10 
      // -- OC written like this so that startIX can move backward to show next prev 10 when triggered (btn press?)
      if (rest) {
        showCount = 1;
      } else {
        showCount++;
      }
      let startIX = result.length-(numResults*showCount);
      let endIX = startIX+numResults;
      console.log("loads startIX: " + startIX);
      if (result.length < numResults) { // number of records less than amt to show, so start at ix 0
        startIX = 0;
        endIX = result.length;
      } else if (startIX < 0) { // reached beginning, so show from beginning
        startIX = 0;
        endIX = startIX+numResults;
        rest = true;
      } else {
        rest = false;
      }
      console.log("loads startIX: " + startIX);
      console.log("loads showCount: " + showCount);
      let newDiv = document.createElement('div');
      let newDiv2 = document.createElement('div');
      let newDiv3 = document.createElement('div');
      newDiv.id = 'info-list-1';
      newDiv2.id = 'info-list-2';
      newDiv3.id = 'info-list-3';
      let s = "";
      let s2 = "";
      let s3 = "";
      for (let i=startIX; (i<endIX); i++) {
        console.log("i: " + i);
        let sObj = result[i].finalConfig.config;
        console.log(sObj);
        let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;
        selection.option(result[i].uniqueID, i.toString());
        s = s + sObj.numLegislativeBodies + "<br>";
        s2 = s2 + sObj.numParties + "<br>";
        s3 = s3 + totalVoting + "<br>";
      }
      selection.selected(startIX.toString());
      console.log("selected val: " + selection.value());
      newDiv.innerHTML = s;
      newDiv2.innerHTML = s2;
      newDiv3.innerHTML = s3;
      document.getElementById('start-desc').appendChild(newDiv);
      document.getElementById('start-desc').appendChild(newDiv2);
      document.getElementById('start-desc').appendChild(newDiv3);
    });
    document.getElementById("start-desc").innerHTML += "<div id='session-list'></div>";
    selection.parent("session-list"); // put options in div with border
    selection.class('radio-sel');
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedNext() {
    removeBtns();
    setLoadedUserVars(loadedConfig);
    // mgr.showScene(loadSessionS2);
    // engine.setDefaultParams();
    setEngineParams(engine); // set engine params to user vars, which were loaded
    // reset values for calculations
    engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

    engine.currentCongLogic(true); // uncomment if drawing to screen real time
    mgr.showScene(sBodies);
  }

  function clickedShowMore() {
    selection.remove();
    showSessionsList();
  }

  function removeBtns() {
    selection.remove();
    showMoreBtn.remove();
    backBtn.remove();
    nextBtn.remove();
  }
}

let updateBtn, nextPaneBtn, prevPaneBtn;
let paramChangedBool = false;
var labelSpace = 30;

/**
 * C01 P01 Number of Chambers
 * User input page for number of chambers bodies (1-3)
 */
function sBodies() {
  var slider1 = document.getElementById('slider01');  

  this.setup = function () {
    textSize(15);
    noStroke();
    if (reconfigBool == true) { // set canvas size for drawing votes/config outline
      // windowResized();
      visual.dWidth = windowWidth * .95;
      visual.dHeight = (windowHeight * .9)-labelSpace;
      visual.labelSpace = labelSpace;
      canvas = createCanvas(visual.dWidth, windowHeight * .9);
      let canvasDiv = document.getElementById('vote');
      canvas.parent(canvasDiv);
      reconfigBool = false;
    }
    createSlider();
    sliderVals();
  }

  this.enter = function () {
    if (reconfigBool == true) {
    visual.dWidth = windowWidth * .95;
      visual.dHeight = (windowHeight * .9)-labelSpace;
      canvas = createCanvas(visual.dWidth, windowHeight * .9);
      let canvasDiv = document.getElementById('vote');
      canvas.parent(canvasDiv);
      reconfigBool = false;
    }

    console.log("Pane 01");
    document.getElementById('progress-dots').style.display = "flex";
    checkNumChambers();
    document.getElementById('dot-p01').className = 'dot-active';
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    document.body.style.backgroundColor = bColor;

    slider1.noUiSlider.set(userNumLegislative);
    sliderVals();

    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF CHAMBERS</h2>" + configJSON.text.p01desc;

    if (!document.getElementById('prev-pane-btn')) {
      prevPaneBtn = createButton('Back');
      prevPaneBtn.id('prev-pane-btn');
      prevPaneBtn.class('buttons');
      prevPaneBtn.parent(buttonDiv);
      prevPaneBtn.mousePressed(previousPane);
    }

    if (!document.getElementById('update-btn')) {
      updateBtn = createButton('Update');
      updateBtn.id('update-btn');
      updateBtn.class('buttons');
      updateBtn.parent(buttonDiv);
    }
    updateBtn.mousePressed(clickedUpdate);

    if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Next');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
      nextPaneBtn.mousePressed(nextPane);
    }

    document.getElementById('prev-pane-btn').disabled = true;
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    
    paneToggle();

    if (userNumLegislative != engine.numLegislativeBodies) {
      document.getElementById("update-btn").disabled = false; // enable button
    } else {
      document.getElementById("update-btn").disabled = true;
    }
  }

  /**
   * display progress dots according how how many panes users go thru
   */
  function checkNumChambers() {
    if (userNumLegislative == 1) {
      document.getElementById('dot-p04').style.display = "flex";
      document.getElementById('dot-p05').style.display = "none";
      document.getElementById('dot-p06').style.display = "none";
    } else if (userNumLegislative == 2) {
      document.getElementById('dot-p04').style.display = "flex";
      document.getElementById('dot-p05').style.display = "flex";
      document.getElementById('dot-p06').style.display = "none";
    } else {
      document.getElementById('dot-p04').style.display = "flex";
      document.getElementById('dot-p05').style.display = "flex";
      document.getElementById('dot-p06').style.display = "flex";
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    checkNumChambers();

    if (userNumHouse2 == 0) {
      userNumHouse2 = 100;
      userPerHouse2Body = [1, 0, 0]; // if previously no chamber 2, put members in party A
    }
    if (userNumSenate == 0) { // chamber 3
      userNumSenate = 100; // just to give default value
      userPerSenateBody = [1, 0, 0];
    }
    if (userNumPres == 0) {
      userNumPres = 1;
      userPerPresBody = [1, 0, 0];
    }
    
    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
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
        checkNumChambers();
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
    }

}

/**
 * C01 P02 Number of Voting Members for Each Chamber
 * User input page for for amount of members in each legislative body
 */
function sLegislative() {

  var slider1 = document.getElementById('slider1'); // original house
  var slider2;// = document.getElementById('s2-p2'); // house2
  var slider3;// = document.getElementById('s3-p2'); // senate
  var slider4;// = document.getElementById('s4-p2'); // vp
  var slider5;// = document.getElementById('s5-p2'); // pres
   
  var curNumHouse;// = parseInt(engine.numHouse);
  var curNumHouse2;// = parseInt(engine.numHouse2);
  var curNumSen;// = parseInt(engine.numSenate);
  var curNumVP;// = parseInt(engine.numVP);
  var curNumPres;// = parseInt(engine.numPres);

  this.setup = function () {
  }

  this.enter = function () {
    userNumLegislative = parseFloat(userNumLegislative);

    if (userNumLegislative == 1) {
      userNumHouse2 = 0; // 0 in chamber 2 & all its parties
      userPerHouse2Body = [0.0, 0.0, 0.0];
      // userPerHouse2Body[0] = 0.0;
      // userPerHouse2Body[1] = 0.0;
      // userPerHouse2Body[2] = 0.0;

      userNumSenate = 0; // 0 in chamber 3 & all its parties
      userPerSenateBody = [0.0, 0.0, 0.0];

    } else if (userNumLegislative == 2) {
      userNumSenate = 0; // 0 in chamber 3 & all its parties
      userPerSenateBody = [0.0, 0.0, 0.0];
    }

    curNumHouse = parseInt(userNumHouse);
    curNumHouse2 = parseInt(userNumHouse2);
    curNumSen = parseInt(userNumSenate);
    curNumVP = parseInt(userNumVP);
    curNumPres = parseInt(userNumPres);

    console.log("Pane 02");
    document.getElementById('dot-p02').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF VOTING MEMBERS</h2>" + configJSON.text.p02desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    checkNumBodies();
    sliders();
    document.getElementById('prev-pane-btn').disabled = false;
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();

    // if sliders changed any values on this page, enable update button
    if (userNumHouse != engine.numHouse || userNumHouse2 != engine.numHouse2 || userNumSenate != engine.numSenate ||userNumVP != engine.numVP || userNumPres != engine.numPres) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
    //updateBtn.mousePressed(clickedUpdate);
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    //reconfigBool = true;
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

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      // chamber 1
      slider1.noUiSlider.on('update', function (values, handle) {
        userNumHouse = values[0];
        curNumHouse = userNumHouse;
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });

      // chamber 2
      if (userNumLegislative >= 2) {
        // update new slider
        slider2.noUiSlider.on('update', function (values, handle) {
          userNumHouse2 = values[0];
          curNumHouse2 = userNumHouse2;
        });
      } else {
        // update new var to 0
        userNumHouse2 = 0;
        userPerHouse2Body = [0,0,0];
        // userPerHouse2Body[0] = 0;
        // userPerHouse2Body[1] = 0;
        // userPerHouse2Body[2] = 0;
      }

      // OC update slider for 2nd body if user chose >=2 bodies
      // chamber 3
      if (userNumLegislative == 3) {
        slider3.noUiSlider.on('update', function (values, handle) {
          userNumSenate = values[0];
          curNumSen = userNumSenate;
          // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
        });
      } else {
          userNumSenate = 0; // set senate members to 0 later, in sMembers
          userPerSenateBody = [0,0,0];
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

/**
 * C01 P03
 * User input page for number of parties, maximum of 3
 */
function sParties() {
  var slider5 = document.getElementById('slider5');

  this.setup = function () {
    createSlider();
    sliderVals();
  }
  this.enter = function () {
    console.log("Pane 03");
    document.getElementById('dot-p03').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF POLITICAL PARTIES</h2>" + configJSON.text.p03desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    slider5.noUiSlider.set(userNumParties);
    sliderVals();
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();

    if (userNumParties != engine.numParties) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    // set equal split btwn parties so that visualization update reflects change
    // members per party are set by user in subsequent panes
    if (userNumParties == 2) {
      if (userNumVP >= 2) {
        userPerVPBody = [0.5, 0.5, 0.0];
        // userPerVPBody[0] = 0.5;
        // userPerVPBody[1] = 0.5;
        // userPerVPBody[2] = 0.0;
      }

      if (userNumPres >= 2) {
        userPerPresBody = [0.5, 0.5, 0.0];
      }

      userPerHouseBody = [0.5, 0.5, 0.0];

      if (userNumLegislative >= 2) {
        userPerHouse2Body = [0.5, 0.5, 0.0];

        if (userNumLegislative == 3) {
          userPerSenateBody = [0.5, 0.5, 0.0];
        }
      }
    } else if (userNumParties == 3) {
      if (userNumVP >= 3) {
        userPerVPBody = [0.34, 0.33, 0.33];
      }
      if (userNumPres >= 3) {
        userPerPresBody = [0.34, 0.33, 0.33];
      }
      userPerHouseBody = [0.34, 0.33, 0.33]; 

      if (userNumLegislative >= 2) {
        userPerHouse2Body = [0.34, 0.33, 0.33]; 

        if (userNumLegislative == 3) {
          userPerSenateBody = [0.34, 0.33, 0.33]; 
        }
      }
    }
    setEngineParams(engine);

    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
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
          userPerHouseBody = [1.0, 0.0, 0.0];
          userPerHouse2Body = [];
          userPerHouse2Body = [1.0, 0.0, 0.0];
          userPerSenateBody = [];
          userPerSenateBody = [1.0, 0.0, 0.0];
          userPerPresBody = [];
          userPerPresBody = [1.0, 0.0, 0.0];
          userPerVPBody = [];
          userPerVPBody = [1.0, 0.0, 0.0];
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
        } else if (userNumParties == 3) {
          userIndYaythresh = 50;
        }

      });
    }
}

/**
 * C01 P04 Number of Voting Members per Party in Chamber 1
 */
function sMembersFirstChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumHouse = parseInt(userNumHouse); //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  var startVals = [];

  this.setup = function () {
    startVals[0] = userPerHouseBody[0];
    startVals[1] = userPerHouseBody[1];
    startVals[2] = userPerHouseBody[2];
    engine.perDemHouse = roundNum(engine.perDemHouse, 2);
    engine.perRepHouse = roundNum(engine.perRepHouse, 2);
    engine.perIndHouse = roundNum(engine.perIndHouse, 2);
  }

  this.enter = function () {
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
      
    //document.getElementById("screen").style.display = "none"; // OC TODO - remove this if want screen function for all panes

    console.log("Pane 04: Chamber 1 Party Members");
    document.getElementById('dot-p04').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF VOTING MEMBERS FOR FIRST CHAMBER</h2>" + configJSON.text.p04desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("user Party A: " + userPerHouseBody[0] + " Party B: " + userPerHouseBody[1] + " Party C: " + userPerHouseBody[2]);
    console.log("engine Party A: " + engine.perDemHouse + " Party B: " + engine.perRepHouse + " Party C: " + engine.perIndHouse);

    // if sliders changed any values on this page, enable update button
    if (userPerHouseBody[0] != engine.perDemHouse || userPerHouseBody[1] != engine.perRepHouse || userPerHouseBody[2] != engine.perIndHouse) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
  }

  function checkNumBodies() {
    document.getElementById("s1-p3").innerHTML = "<div class='first-slider' id='slider-1a'><p id='slider-text-1'>POLITICAL PARTY A</p></div>";
    document.getElementById("s2-p3").innerHTML = "<div id='slider-1b'><p id='slider-text-2'>POLITICAL PARTY B</p></div>";
    document.getElementById("s3-p3").innerHTML = "<div id='slider-1c'><p id='slider-text-3'>POLITICAL PARTY C</p></div>";

    if (userNumParties == 1) {
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").style.display = "none";
      document.getElementById("s3-p3").style.display = "none";

    } else if (userNumParties == 2) {
      console.log("here first chamber");
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").style.display = "none";

    } else {
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").style.display = "block";

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
          start: (startVals[0] * maxSlider),
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
        start: (startVals[0] * maxSlider),
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
        start: (startVals[1] * maxSlider),
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
        start: (startVals[2] * maxSlider), 
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
      });

      if (userNumParties >= 2) { // party a and b
        slider2.noUiSlider.on('update', function (values, handle) {
          numPartyB = values[0];
          userPerHouseBody[1] = values[0];
          numPerHouseBody[1] = userPerHouseBody[1];
          housePercentage = userPerHouseBody[1] / userNumHouse;
          housePercentage = roundNum(housePercentage, 2);
          userPerHouseBody[1] = housePercentage;
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

/**
 * C01 P05 Number of Voting Members per Party in Chamber 2
 */
function sMembersSecondChamber() {

  var slider1;// = document.getElementById('slider-1a'); // party a
  var slider2;// = document.getElementById('slider-1b');; // party b
  var slider3; // = document.getElementById('slider-1c');; // party c
  var curNumHouse2 = parseInt(userNumHouse2); //parseInt(engine.numHouse); // current number of total members in chamber 1
  var maxSlider;
  var startVals = [];

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

    console.log("P05: Chamber 2 Party Members");
    document.getElementById('dot-p05').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF VOTING MEMBERS FOR SECOND CHAMBER</h2>" + configJSON.text.p05desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total2").innerHTML = totalTxt;

    checkNumBodies();
    sliders();    
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("Party A: " + userPerHouse2Body[0] + " Party B: " + userPerHouse2Body[1] + " Party C: " + userPerHouse2Body[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerHouse2Body[0] != engine.perDemHouse2 || userPerHouse2Body[1] != engine.perRepHouse2 || userPerHouse2Body[2] != engine.perIndHouse2) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
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
          start: (startVals[0] * maxSlider), 
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
        start: (startVals[0] * maxSlider),
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
        start: (startVals[1] * maxSlider), 
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
        start: (startVals[2] * maxSlider), 
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

        // when user slides party B slider, allow party B to go up to party A remainder
        // and make party C update to the remainder of party A + B
        slider2.noUiSlider.on('slide', function(event) {
          if (parseInt(slider2.noUiSlider.get()) > maxSlider - numPartyA) {
            slider2.noUiSlider.set(maxSlider - numPartyA);
          }
          let sliderAval = ceil((maxSlider - numPartyB) / 2);
          let sliderCval = (maxSlider - numPartyB) - numPartyA;
          slider3.noUiSlider.set(sliderCval);
        });

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

/**
 * C01 P06 Number of Voting Members per Party in Chamber 3
 */
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

    console.log("P06: Chamber 3 Voting Members");
    document.getElementById('dot-p06').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF VOTING MEMBERS FOR THIRD CHAMBER</h2>" + configJSON.text.p06desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total3").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("Party A: " + userPerSenateBody[0] + " Party B: " + userPerSenateBody[1] + " Party C: " + userPerSenateBody[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerSenateBody[0] != engine.perDemSenate || userPerSenateBody[1] != engine.perRepSenate || userPerSenateBody[2] != engine.perIndSenate) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
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
          start: (startVals[0] * maxSlider), 
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
        start: (startVals[0] * maxSlider), 
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
        start: (startVals[1] * maxSlider), 
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
        start: (startVals[2] * maxSlider), 
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

/**
 * C01 P07 Number of Voting Members per Party in VP
 */
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

    console.log("P07: Voting Members in VP");
    document.getElementById('dot-p07').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>NUMBER OF VOTING MEMBERS FOR VICE PRESIDENCY</h2>" + configJSON.text.p07desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total-vp").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("Party A: " + userPerVPBody[0] + " Party B: " + userPerVPBody[1] + " Party C: " + userPerVPBody[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerVPBody[0] != engine.perDemVP || userPerVPBody[1] != engine.perRepVP || userPerVPBody[2] != engine.perIndVP) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    //reconfigBool = true;
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

/**
 * C01 P08 Number of Voting Members per Party in Presidency
 */
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

    console.log("P08: Voting Members in Pres");
    document.getElementById('dot-p08').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").style.display = "block";
    showPanesBool = true;
    document.getElementById("top").innerHTML = "<h2>NUMBER OF VOTING MEMBERS FOR PRESIDENCY</h2>" + configJSON.text.p08desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    let totalTxt = "Total: " + maxSlider;
    document.getElementById("total-pres").innerHTML = totalTxt;

    checkNumBodies();
    sliders();
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("Party A: " + userPerPresBody[0] + " Party B: " + userPerPresBody[1] + " Party C: " + userPerPresBody[2]);
    // if sliders changed any values on this page, enable update button
    if (userPerPresBody[0] != engine.perDemPres || userPerPresBody[1] != engine.perRepPres || userPerPresBody[2] != engine.perIndPres) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it

    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    //reconfigBool = true;
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
          start: (startVals[0] * maxSlider),
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
        start: (startVals[0] * maxSlider),
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
        start: (startVals[1] * maxSlider),
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
        start: (startVals[2] * maxSlider),
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

/**
 * C01 P09 Majority & Supermajority Approval Percentage
 * user input page for percentage of votes required for bill approval
 */
function sBodyPass() {
  var currPerPass = parseFloat(userBodyPass);
  var currSuperThresh = parseFloat(userSuperThresh);
  var slider10 = document.getElementById('slider10');
  var slider11 = document.getElementById('slider11');

  this.setup = function () {
    textSize(15);
    noStroke();
    createSlider();
    sliderVals();
  }

  this.enter = function () {
    currPerPass = parseFloat(userBodyPass);
    currSuperThresh = parseFloat(userSuperThresh);
    console.log("P09: Majority & Supermajority");
    document.getElementById('dot-p09').className = 'dot-active'; // activate dot on this pane
    document.getElementById("top").innerHTML = "<h2>PERCENT OF VOTES REQUIRED FOR APPROVAL PER CHAMBER<h2>" + configJSON.text.p09desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    slider10.noUiSlider.set(currPerPass);
    slider11.noUiSlider.set(currSuperThresh);
    sliderVals();
    updateBtn.mousePressed(clickedUpdate);
  }

  this.draw = function () {
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("user body pass: " + userBodyPass);
    console.log("user super pass: " + userSuperThresh);

    // if sliders changed any values on this page, enable update button
    if ((parseFloat(userBodyPass) / 100.0) != engine.perPass || (parseFloat(userSuperThresh) / 100.0) != engine.superThresh) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }
  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
  }

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
}

/**
 * C01 P10 Yes Likelihood
 * user input page for probabily of a yes vote
 */
function sYesVotes() {
  var curDemYaythresh = parseFloat(userDemYaythresh);// PARTY A = parseInt(engine.demYaythresh * 100);
  var curRepYaythresh = parseFloat(userRepYaythresh);// = parseInt(engine.repYaythresh * 100);
  var curIndYaythresh = parseFloat(userIndYaythresh);// = parseInt(engine.indYaythresh * 100);
  var slider12 = document.getElementById('slider12');
  var slider13 = document.getElementById('slider13');
  var slider14 = document.getElementById('slider14');

  this.setup = function () {
    createSlider();
    sliderVals();
    if (engine.numParties == 2) {
      engine.indYaythresh = 0;
    }
  }

  this.enter = function () {
    if (reconfigBool == true) {
      visual.dWidth = windowWidth * .95;
        visual.dHeight = (windowHeight * .9)-labelSpace;
        reconfigBool = false;
    }
    curDemYaythresh = parseFloat(userDemYaythresh);
    curRepYaythresh = parseFloat(userRepYaythresh);
    curIndYaythresh = parseFloat(userIndYaythresh);

    console.log("P10: Affirmative Vote");
    document.getElementById('dot-p10').className = 'dot-active'; // activate dot on this pane
    document.getElementById('progress-dots').style.display = "flex";
    document.getElementById("top").innerHTML = "<h2>PROBABILITY OF AN AFFIRMATIVE VOTE BY A PARTY MEMBER</h2>" + configJSON.text.p10desc;
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
    checkParties();
    slider12.noUiSlider.set(curDemYaythresh);
    slider13.noUiSlider.set(curRepYaythresh);
    slider14.noUiSlider.set(curIndYaythresh);
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
    }
    updateBtn.mousePressed(clickedUpdate);

    nextPaneBtn.remove();
    // if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Next');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
      nextPaneBtn.mousePressed(nextPane);
    // }
  }

  this.draw = function () { 
    visual.displayImmediateBlank(engine, false);
    paneToggle();
    console.log("user Dem yay: " + (parseFloat(userDemYaythresh)/100.0) + " Rep yay: " + (parseFloat(userRepYaythresh)/100.0) + " Ind yay: " + (parseFloat(userIndYaythresh)/100.0));
    console.log("engine Dem yay: " + engine.demYaythresh + " Rep yay: " + engine.repYaythresh + " Ind yay: " + engine.indYaythresh);

    if ((parseFloat(userDemYaythresh)/100.0) != engine.demYaythresh || (parseFloat(userRepYaythresh)/100.0) != engine.repYaythresh || (parseFloat(userIndYaythresh)/100.0) != engine.indYaythresh) {
      document.getElementById("update-btn").disabled = false;
    } else { // otherwise leave disabled
      document.getElementById("update-btn").disabled = true;
    }

  }

  function clickedUpdate() {
    document.getElementById("update-btn").disabled = true; // disable after clicking it
    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    //reconfigBool = true;
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
          format: {
            to: function(value) {
              if (value == 100) return 'Yes'; else return '';}
          }
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
          format: {
            to: function(value) {
              if (value == 100) return 'Yes'; else return '';}
          }
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
          format: {
            to: function(value) {
              if (value == 100) return 'Yes'; else return '';}
          }
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
}

var visualizeVote;
var visualizeImmediate;

// page to run bill
/**
 * C01 P11 Vote Page
 */
function sVote() {
  let voteBtn;
  this.setup = function () {
    userOutputText = document.getElementById('slider-disp');
    visualizeVote = false;
    visualizeImmediate = false;
  }

  this.enter = function () {
    console.log("run bill page");
    document.getElementById('progress-dots').style.display = "none";
    document.getElementById("top").innerHTML = "<h2>TEST VOTING</h2>" + configJSON.text.p11desc1;
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

    checkParamChange();
    if (visualizeVote) {
      document.getElementById('vote-btn').disabled = true; // disable it if prev clicked
    }
    console.log("oc paramChangedBool: " + paramChangedBool);
    console.log("oc button disabled: " + document.getElementById("vote-btn").disabled );
    console.log("oc visualize vote: " + visualizeVote);
    
    // if any parameters changed, don't visualize the vote yet (display blank) & enable button
    if (paramChangedBool) {
      visual.dWidth = windowWidth * .95;
      visual.dHeight = (windowHeight * .9)-labelSpace;
      visualizeVote = false;
      document.getElementById("vote-btn").disabled = false;
    } else if (paramChangedBool == false && document.getElementById("vote-btn").disabled == false) {
      // otherwise if no params changed but vote button not yet clicked (enabled -> disabled == false), don't visualize (display blank)
      visual.dWidth = windowWidth * .95;
      visual.dHeight = (windowHeight * .9)-labelSpace;
      visualizeVote = false; 
    } else if (paramChangedBool == false && document.getElementById("vote-btn").disabled == true){
      // visualize vote immediately when no param changed & vote button already clicked (disabled == true) when scene is entered
      visual.dWidth = windowWidth * .95;
      visual.dHeight = windowHeight * .9;
      visualizeVote = true;
      visualizeImmediate = true;
      document.getElementById("top").innerHTML = "<h2>TEST VOTINGs</h2>" + configJSON.text.p11desc2;
    }

    // set new parameters to show updated configuration when entering scene
    setEngineParams(engine);
    // reset values for calculations
    //engine.completeReset();
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
  }

  this.draw = function () {
    if (visualizeVote == false) {
      visual.displayImmediateBlank(engine, false);
    } else if (visualizeVote == true && visualizeImmediate == true) {
      visual.displayImmediateVotes(engine); // OC can move to enter if get loop working for drawing all at once?
      if (visual.userInputState) {
        setTimeout(function () {
          if (mgr.isCurrent(sVote)) {
          document.body.style.backgroundColor = colorOverlay;
          engine.bodyCount = engine.numBodies;
          visual.finalTextDisplayUser(engine, helvFont, colorOverlay, resultIX);
          }
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
        document.getElementById("top").innerHTML = "<h2>TEST VOTING</h2>" + configJSON.text.p11desc2;
        showPanesBool = true;
      }, 1500);
    }
    }, 1500); // 1.5 seconds before text overlay shows
    visual.userInputState = false;

  }
  
  function clickedVote() {
      visual.dWidth = windowWidth * .95;
      visual.dHeight = windowHeight * .9;
    document.getElementById("vote-btn").disabled = true; // disable vote button after clicked
    showPanesBool = false; // make pane disappear so user can see voting in full view

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
}

/**
 * C01 P12 Prompt to run benchmark
 */
function sBenchmarkPane() {
  let benchmarkBtn;

  this.setup = function () {
    userOutputText = document.getElementById('slider-disp');
  }

  this.enter = function () {
    visual.dWidth = windowWidth * .95;
    visual.dHeight = (windowHeight * .9)-labelSpace;
    console.log("run bill page");
    document.getElementById("top").innerHTML = "<h2>RUN BENCHMARKING RESULTS</h2>" + configJSON.text.p12desc;
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    document.getElementById('vote-btn').remove();
    document.getElementById('next-pane-btn').remove();

    benchmarkBtn = createButton('Run Benchmark Tests');
    benchmarkBtn.id('benchmark-btn');
    benchmarkBtn.class('buttons');
    benchmarkBtn.parent(buttonDiv);
    benchmarkBtn.mousePressed(clickedBenchmark);

    visual.completeReset();
    userEdits = false;
    reconfigBool = true;

    background(bColor);
    document.body.style.backgroundColor = bColor;
  }

  this.draw = function () {
    //let minimalConfig = true;
    visual.displayImmediateBlank(engine, false);
    paneToggle();
  }

  function clickedBenchmark() {
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
    if (configIX > 0 && visualizeVote == true) {
      configIX--; // decrement because last click for vote prepared for another config
    }

    document.getElementById('prev-pane-btn').remove();
    benchmarkBtn.remove();

    showPanesBool = false;
    document.getElementById("start-desc").innerHTML = configJSON.text.benchResultsDesc;
    document.getElementById("start-desc").style.display = "none";
    benchmarkBtn.remove();
    var benchResults = "";

    let newDiv = document.createElement('div');
    newDiv.id = 'act-list';
    let s = "<table id='benchRes'><colgroup><col id='tbl-c1'><col id='tbl-c2'></colgroup><thead><tr><th>ACT TITLE</th><th>BILL PASSED?</th></thead><tbody>";
    console.log("configIX before benchmarking: " + configIX);
    for (let i=resultIX; i < MAX_SIM_RESULTS+1; i++) { // + 1 because the first was the test result
      engine.completeReset();
      engine.currentCongLogic(true);
      updateSession();
      s = s + "<tr id='trow" + i + "'><td> " /*+ configs[configIX].simResults[resultIX].actTitle*/ + "</td>";
      //if (configs[configIX].simResults[resultIX].billPass == true) {
        s = s + "<td>&nbsp;</td></tr>";
      //} else {
        //s = s + "<td>&nbsp;</td></tr>";
      //}
      
      resultIX++;
    }
    s = s + "</tbody></table>";
    newDiv.innerHTML = s;
    document.getElementById('start-desc').appendChild(newDiv);
    // console.log("configIX after benchmarking: " + configIX);

    mgr.showScene(sBenchmarkResults);
  }

}

/**
 * C02 Benchmark Results
 */
function sBenchmarkResults() {
  let startOverBtn, summaryBtn;
  let resDelay, endGear; // time until results all displayed

  this.setup = function () {
    userOutputText = document.getElementById('slider-disp');
    visualizeVote = false;
    resDelay = 500;
  }

  this.enter = function () {
    visual.dWidth = windowWidth * .95;
    visual.dHeight = windowHeight * .9;
    console.log("benchmark results page");
    endGear = false;
    
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
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";
    document.getElementById("screen").style.display = "none"; // OC to have solid bkg
    //document.getElementById("screen").style.display = "block"; // OC to show config in bkg

    let buttonDiv = document.getElementById('main-btn-div');

    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn-c02');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);
    startOverBtn.mousePressed(clickedStartOver);

    summaryBtn = createButton('Go to Evaluation');
    summaryBtn.id('to-eval-btn-c02');
    summaryBtn.class('buttons');
    summaryBtn.parent(buttonDiv);
    summaryBtn.mousePressed(clickedSummary);
    
    visual.completeReset();
    userEdits = false;
    reconfigBool = true;
    background(bColor);
    document.body.style.backgroundColor = bColor;
    
    var tds = document.getElementById("benchRes").getElementsByTagName("td");
    // for (let i=0, j = tds.length; i<j; ++i) {
    //   tds[i].style.color = bColor;
    //   setTimeout(function () {
    //   tds[i].style.color = "#00AA00";
    //   }, 1000*i);
    // }
    var rIX = 1;
    for (let i=1; i<=tds.length; i+=2) {
      setTimeout(function () {
      tds[i-1].innerHTML = configs[configIX].simResults[rIX].actTitle;
      if (configs[configIX].simResults[rIX].billPass == true) {
        tds[i].innerHTML = "YES";
      } else {
        tds[i].innerHTML = "NO";
      }
      rIX++;
      if (i >= tds.length-1)
        endGear = true;
      console.log("i: " + i);
      // tds[i].innerHTML = "test";
      }, resDelay*i);
    }
    
  //  let newDiv = document.createElement('div');
  //   newDiv.id = 'act-list';
  //   let s = "<table id='benchRes'><thead><tr><th>ACT TITLE</th><th>BILL PASSED?</th></thead><tbody>";
  //   console.log("configIX before benchmarking: " + configIX);
  //   for (let i=resultIX; i < MAX_SIM_RESULTS+1; i++) { // + 1 because the first was the test result
  //     engine.completeReset();
  //     engine.currentCongLogic(true);
  //     updateSession();
  //     s = s + "<tr id='trow" + i + "'><td>" + configs[configIX].simResults[resultIX].actTitle + "</td>";
  //     if (configs[configIX].simResults[resultIX].billPass == true) {
  //       s = s + "<td>YES</td></tr>";
  //     } else {
  //       s = s + "<td>NO</td></tr>";
  //     }
      
  //     resultIX++;
  //   }
  //   s = s + "</tbody></table>";
  //   newDiv.innerHTML = s;
  //   document.getElementById('start-desc').appendChild(newDiv);

    //for (let i=0; i<=120; i++) {
      //if (i%5 == 0)
      //visual.displayImmediateBlank(engine, true);
    //}
    //visual.displayImmediateVotes(engine); // OC TODO - put here when figure out drawing votes all at once (1 frame)
  }

  this.draw = function () {
   //visual.displayImmediateBlank(engine, true); // draws votes for last calculation // OC comment out if want solid bkg
        //document.body.style.backgroundColor = colorOverlay; // OC comment out if want solid bkg
        //document.getElementById("screen").style.display = "block"; // OC comment out if want solid bkg
        
        if (endGear) {
          background(bColor);
        } else {
          visual.rotLoadImage2(endGear);
        }
  }

  function clickedStartOver() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedSummary() {
    removeBtns();
    mgr.showScene(sEndorse)
  }

  function removeBtns() {
    startOverBtn.remove();
    summaryBtn.remove();
  }

}

/**
 * C03 Evaluation for Endorsement Page
 */
function sEndorse() {
  let startOverBtn, summarySaveBtn, approvalBtn;
  let div1, div2, div3, divApproval;
  let s1, s2, s3, sApproval;

  this.setup = function () {
  }

  this.enter = function () {
    prevSessionID = sessionID;
    s1 = "";
    s2 = "";
    s3 = "";
    sApproval = "";
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div3 = document.createElement('div');
    divApproval = document.createElement('div');
    div1.id = 's-col-1';
    div2.id = 's-col-2';
    div3.id = 's-col-3';
    divApproval.id = 'approval-div';

    console.log("user config endorsement page");
    document.getElementById("main-header").innerHTML = "<h1>Evaluation Page</h1>";
    document.getElementById("start-desc").innerHTML = configJSON.text.evalDesc;
    document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("screen").style.display = "none";
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');
    
    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn-c03');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);
    startOverBtn.mousePressed(clickedStartOver);

    approvalBtn = createButton('Endorse');
    approvalBtn.id('approve-btn');
    approvalBtn.class('buttons');
    //approvalBtn.parent(div3);
    approvalBtn.mousePressed(clickedApprove);

    summarySaveBtn = createButton('See Final Summary');
    summarySaveBtn.id('save-summary-btn-c03');
    summarySaveBtn.class('buttons');
    summarySaveBtn.parent(buttonDiv);
    summarySaveBtn.mousePressed(clickedSummarySave);

    inputTxt();

    background(bColor);
    document.body.style.backgroundColor = bColor;
  }

  this.draw = function () {
  }

  function clickedStartOver() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedApprove() {
    ownerEndorse();
    divApproval.innerHTML = "";
    let s = "";
      if (finalConfigObj.ownerEndorsement == 1) {
        //document.getElementById("main-header").innerHTML = "<h1>Summary & Save</h1><h2>Session ID: " + sessionID + "</h2><h2>Approved!</h2>";
        //s += "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2611;</h3>";
        s += "<img id='approval-check' src='./assets/check-mark-txt-col.svg' style='left:37%'>";
      } else {
        //document.getElementById("main-header").innerHTML = "<h1>Summary & Save</h1><h2>Session ID: " + sessionID + "</h2>";
        //s += "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2610;</h3>";
        s  += "<h3></h3><div id='approval-check'></div>";
      }
      divApproval.innerHTML += s;
      approvalBtn.parent(divApproval);
  }

  function clickedSummarySave() {
    removeBtns();
    mgr.showScene(sSaveResults);
  }

  function removeBtns() {
    startOverBtn.remove();
    approvalBtn.remove();
    summarySaveBtn.remove();
  }

  function inputTxt() {

    s1 = 
      "<h3>First Legislative Chamber</h3>" +
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
      "<br>Members in Political Party C: " + Math.round(userPerSenateBody[2] * userNumSenate) + "</p>";

      s2 =
      "<h3>Vice Presidency</h3>" +
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
      "<br>Political Party C: " + userIndYaythresh + "</p>";

      s3 = 
      "<h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + userBodyPass +
      "<br> Approval By Supermajority: " + userSuperThresh + "</p>";
      
      s3 += "<h3>Benchmark Results</h3><p>" ;
      for(let i=1; i<=MAX_SIM_RESULTS; i++) {
        s3 = s3 + configs[configIX].simResults[i].actTitle + " ";
        if (configs[configIX].simResults[i].billPass == true) {
          s3 = s3 + "&#x2611;<br>"; // checkmark
        } else {
          s3 = s3 + "&#x2610;<br>"; // empty checkmark
        }
      }
      s3 = s3 + "</p>";

      //sApproval = sApproval + "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2610;</h3>";
      sApproval = sApproval + "<h3></h3><div id='approval-check' style='float:none'></div>";

      div1.innerHTML = s1;
      div2.innerHTML = s2;
      div3.innerHTML = s3;
      divApproval.innerHTML = sApproval;
      
      document.getElementById('start-desc').appendChild(divApproval);
      document.getElementById('start-desc').appendChild(div1);
      document.getElementById('start-desc').appendChild(div2);
      document.getElementById('start-desc').appendChild(div3);
      
      approvalBtn.parent(divApproval);
  }

}

var prevSessionID;

/**
 * C04 Final Summary & Save Page
 * page showing all of user inputs
 */
function sSaveResults() {
  let saveBtn, startOverBtn; //approvalBtn;
  let div1, div2, div3, divApproval;
  let s1, s2, s3, sApproval;

  this.setup = function () {
  }

  this.enter = function () {
    prevSessionID = sessionID;
    s1 = "";
    s2 = "";
    s3 = "";
    sApproval = "";
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div3 = document.createElement('div');
    divApproval = document.createElement('div');
    div1.id = 's-col-1';
    div2.id = 's-col-2';
    div3.id = 's-col-3';
    divApproval.id = 'approval-div2';

    console.log("user config final summary & save page");
    document.getElementById("main-header").innerHTML = "<h1>Save Session</h1>";
    document.getElementById("start-desc").innerHTML = "<h2>Session ID: " + sessionID + "</h2>" + configJSON.text.saveDesc;
    document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("screen").style.display = "none";
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');
    
    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn-c04');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);
    startOverBtn.mousePressed(clickedStartOver);

    saveBtn = createButton('Save Session');
    saveBtn.id('save-btn');
    saveBtn.class('buttons');
    saveBtn.parent(buttonDiv);
    saveBtn.mousePressed(clickedSave);

    inputTxt();

    background(bColor);
    document.body.style.backgroundColor = bColor;
  }

  this.draw = function () {
  }

  function clickedStartOver() {
    removeBtns();
    mgr.showScene(startSession);
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

    s1 = 
      "<h3>First Legislative Chamber</h3>" +
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
      "<br>Members in Political Party C: " + Math.round(userPerSenateBody[2] * userNumSenate) + "</p>";

      s2 =
      "<h3>Vice Presidency</h3>" +
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
      "<br>Political Party C: " + userIndYaythresh + "</p>" +
      //s3 =
      "<h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + userBodyPass +
      "<br> Approval By Supermajority: " + userSuperThresh + "</p>";
      
      s3 = "<h3>Benchmark Results</h3><p>" ;
      for(let i=1; i<=MAX_SIM_RESULTS; i++) {
        s3 = s3 + configs[configIX].simResults[i].actTitle + " ";
        if (configs[configIX].simResults[i].billPass == true) {
          s3 = s3 + "&#x2611;<br>"; // checkmark
        } else {
          s3 = s3 + "&#x2610;<br>"; // empty checkmark
        }
      }
      s3 = s3 + "</p>";


      if (finalConfigObj.ownerEndorsement == 1) {
        //document.getElementById("main-header").innerHTML = "<h1>Summary & Save</h1><h2>Session ID: " + sessionID + "</h2><h2>Approved!</h2>";
        //s += "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2611;</h3>";
        sApproval = "<h3>Endorsement</h3><img id='approval-check' src='./assets/check-mark-txt-col.svg' style='left:37%'>";
      } else {
        //document.getElementById("main-header").innerHTML = "<h1>Summary & Save</h1><h2>Session ID: " + sessionID + "</h2>";
        //s += "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2610;</h3>";
        sApproval = sApproval + "<h3>Endorsement</h3><div id='approval-check'></div>";
      }

      //sApproval = sApproval + "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2610;</h3>";
      //sApproval = sApproval + "<h3>User Approval of Configuration</h3><div id='approval-check'></div>";

      div1.innerHTML = s1;
      div2.innerHTML = s2;
      div3.innerHTML = s3;
      divApproval.innerHTML = sApproval;
      
      
      document.getElementById('start-desc').appendChild(div1);
      document.getElementById('start-desc').appendChild(div2);
      document.getElementById('start-desc').appendChild(div3);
      div3.appendChild(divApproval);
      // approvalBtn.parent(divApproval);
  }
}

/**
 * C05 Save Complete Page
 */
function sComplete() {
  let startOverBtn;

  this.setup = function () {
  }

  this.enter = function () {

    console.log("save complete page");
    document.getElementById("main-header").innerHTML = "<h1>Session Complete</h1>";
    document.getElementById("start-desc").innerHTML = "<h2>Session ID: " + prevSessionID + "</h2>" + configJSON.text.saveCompleteDesc;
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
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    background(bColor);
    document.body.style.backgroundColor = bColor;

    let buttonDiv = document.getElementById('main-btn-div');

    startOverBtn = createButton('Start Over');
    startOverBtn.id('restart-btn-c05');
    startOverBtn.class('buttons');
    startOverBtn.parent(buttonDiv);
    startOverBtn.mousePressed(clickedStartOver)

    setTimeout(function () {
      if (mgr.isCurrent(sComplete)) {
        clickedStartOver();
      }
    }, 30000); // 30 seconds timeout to start over
  }

  this.draw = function () {
  }

  function clickedStartOver() {
    startOverBtn.remove();
    mgr.showScene(startSession);
  }
}


