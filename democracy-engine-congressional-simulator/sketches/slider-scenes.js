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

    document.getElementById("top").style.display = "none";
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

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

    
    //if (resultIX < MAX_SIM_RESULTS -1) {

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
      //}

    // OC when engine is done with voting calculation, show votes
    //if (engine.finalDisplayBool) {

      // if (resultIX == 0) {
        //engine.currentCongLogic(userEdits);

    // OC display the last voting result
    visual.displayVoting(engine);

      // OC when visual display of rectangles is done, show buttons
      if (visual.userInputState) { // && resultIX == 0) {
        finalDisplay();
        //updateSession();
        //resultIX++;
        //addSession(toSchema(engine)); // OC save session to db after displaying to screen
      }
    //}
      
    
      
    //} else {

    // if (resultIX<MAX_SIM_RESULTS -1) {
    //      //inputVar();
    //      //resultIX++;
    //      engine.bodyCount = 0;
    //       engine.bodyPass = [];
    //       engine.resetCount();
    //       engine.resetDraw();
    //       engine.votingBodyCounts = [];
    //       engine.superThreshIndex = [];
    //      engine.currentCongLogic(userEdits);
    //      updateSession();
         
    //   }
      
    //   resultIX++;
    //}
    //}

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

    let buttonDiv = document.getElementById('button-div');
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
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
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

    let buttonDiv = document.getElementById('button-div');
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

//user input page for number of legislative bodies (1-3)
function sBodies() {

  var slider1 = document.getElementById('slider01');
  // var slider2 = document.getElementById('slider02');
  // var slider3 = document.getElementById('slider03');
  // var slider4 = document.getElementById('slider04');
  // var curNumHouse = parseInt(engine.numHouse);
  // var curNumSen = parseInt(engine.numSenate);
  // var curNumVP = parseInt(engine.numVP);
  // var curNumPres = parseInt(engine.numPres);


  this.setup = function () {
    textSize(15);
    noStroke();

  }

  this.enter = function () {

    console.log("0 Slider Page");
    document.getElementById("page0").style.display = "block";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";

    background(bColor);
    document.body.style.backgroundColor = bColor;
    buttonRC.remove();
    buttonRes.remove();
    buttonDef.remove();
    if (userEdits == true) {
      dispBtn.remove();
      recalBtn.remove();
      emailBtn.remove();
    }

    changeText(" ");

    sliders();
    button();
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF LEGISLATIVE BODIES";


  }

  this.draw = function () {

  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    if (userEdits == true) {
      sliderVals();

    } else {
      createSlider();
      sliderVals();
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

      // noUiSlider.create(slider2, {
      //   start: curNumSen,
      //   range: {
      //     'min': [1],
      //     'max': [500]
      //   },
      //   cssPrefix: 'noUi-',
      //   tooltips: true,
      //   pips: {
      //     mode: 'range',
      //     density: 'range',
      //   },
      //   step: 1,
      //   format: wNumb({
      //     decimals: 0
      //   })
      // });

      // noUiSlider.create(slider3, {
      //   start: curNumVP,
      //   range: {
      //     'min': [1],
      //     'max': [500]
      //   },
      //   cssPrefix: 'noUi-',
      //   tooltips: true,
      //   pips: {
      //     mode: 'range',
      //     density: 'range',
      //   },
      //   step: 1,
      //   format: wNumb({
      //     decimals: 0
      //   })
      // });


      // noUiSlider.create(slider4, {
      //   start: curNumPres,
      //   range: {
      //     'min': [1],
      //     'max': [500]
      //   },
      //   cssPrefix: 'noUi-',
      //   tooltips: true,
      //   pips: {
      //     mode: 'range',
      //     density: 'range',
      //   },
      //   step: 1,
      //   format: wNumb({
      //     decimals: 0
      //   })
      // });
    }


    // COME BACK HERE FOR CODE REVIEW

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      slider1.noUiSlider.on('update', function (values, handle) {
        userNumLegislative = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      // slider2.noUiSlider.on('update', function (values, handle) {
      //   //userNumSenate = values[0];
      //   // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      // });
      // slider3.noUiSlider.on('update', function (values, handle) {
      //   //userNumVP = values[0];
      //   // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      // });
      // slider4.noUiSlider.on('update', function (values, handle) {
      //   //userNumPres = values[0];
      //   // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      // });

    }
  }

  function button() {
    var sidePad = 20;

    nextButton = createButton('NEXT');
    nextButton.id("next-btn");
    //position of next button is handled in css
    nextButton.mousePressed(nextScene);
  }
}

//user input page for for amount of members in each legislative body
function sLegislative() {

  var slider1 = document.getElementById('slider1'); // original house
  var slider1a;// = document.getElementById('s2-p1'); // house2
  var slider2;// = document.getElementById('s3-p1'); // senate
  // create var for third legislative chamber
  var slider3;// = document.getElementById('s4-p1'); // vp
  var slider4;// = document.getElementById('s5-p1'); // pres
   
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
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";

    // background(bColor);
    // document.body.style.backgroundColor = bColor;
    // buttonRC.remove();
    // buttonRes.remove();
    // buttonDef.remove();
    // if (userEdits == true) {
    //   dispBtn.remove();
    //   recalBtn.remove();
    //   emailBtn.remove();
    // }

    // changeText(" ");

    //destroySliders();
    checkNumBodies();
    sliders();
    //button();
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS";


  }

  this.draw = function () {

  }

  // function destroySliders() {
  //   if (userEditCount >= 1) {
  //     slider1.noUiSlider.destroy();
  //     slider1a.noUiSlider.destroy();
  //     slider2.noUiSlider.destroy();
  //     slider3.noUiSlider.destroy();
  //     slider4.noUiSlider.destroy();
  //   }
  // }

  // OC display sliders based on number of legislative bodies chosen on previous page
  // OC set id of sliders based on number of chambers so that css can place them in order with no gaps
  function checkNumBodies() {

    // always show chamber 1 slider
    //document.getElementById("slider1").style.display = "block";

    if (userNumLegislative == 1) {
      document.getElementById("s1-p1").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s1-p1").style.display = "block";
      document.getElementById("s2-p1").innerHTML = "<div id='slider2'><p id='slider-text-2'>VICE PRESIDENCY</p></div>";
      document.getElementById("s2-p1").style.display = "block";
      document.getElementById("s3-p1").innerHTML = "<div id='slider3'><p id='slider-text-3'>PRESIDENCY</p></div>";
      document.getElementById("s3-p1").style.display = "block";
      document.getElementById("s4-p1").innerHTML = "<div id='slider4'><p id='slider-text-4'>SECOND LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s4-p1").style.display = "none";
      document.getElementById("s5-p1").innerHTML = "<div id='slider4a'><p id='slider-text-5'>THIRD LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s5-p1").style.display = "none";
      
      slider1 = document.getElementById('slider1');
      slider1a = document.getElementById('slider4'); // house2 chamber, set slider but not used
      slider2 = document.getElementById('slider4a'); // 3rd (senate) chamber, set slider but not used
      slider3 = document.getElementById('slider2'); // vp
      slider4 = document.getElementById('slider3'); // pres

      // document.getElementById("slider1").style.display = "block";
      // document.getElementById("slider2").style.display = "none";
      // document.getElementById("chamber-label-2-p1").style.display = "none";
      // document.getElementById("slider4a").style.display = "none";

      // document.getElementById("slider-text-2").style.display = "none";
      // document.getElementById("slider-text-2").innerHTML = "";
    } else if (userNumLegislative == 2) {
      // show second chamber slider
      // document.getElementById("s1-p1").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p></div>";
      // document.getElementById("s1-p1").style.display = "block";
      // document.getElementById("s2-p1").innerHTML = "<div id='slider2'><p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p></div>";
      // document.getElementById("s2-p1").style.display = "block";
      // document.getElementById("s3-p1").innerHTML = "<div id='slider3'><p id='slider-text-3'>VICE PRESIDENCY</p></div>";
      // document.getElementById("s3-p1").style.display = "block";
      // document.getElementById("s4-p1").innerHTML = "<div id='slider4'><p id='slider-text-4'>PRESIDENCY</p></div>";
      // document.getElementById("s4-p1").style.display = "block";
      // document.getElementById("s5-p1").innerHTML = "<div id='slider4a'><p id='slider-text-5'>THIRD LEGISLATIVE CHAMBER</p></div>";
      // document.getElementById("s5-p1").style.display = "none";

      // slider1 = document.getElementById('slider1');
      // slider1a = document.getElementById('slider4a'); // house2, set slider but not used
      // slider2 = document.getElementById('slider2'); // 3rd (senate) chamber
      // slider3 = document.getElementById('slider3'); // vp
      // slider4 = document.getElementById('slider4'); // pres

      document.getElementById("s1-p1").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s1-p1").style.display = "block";
      document.getElementById("s2-p1").innerHTML = "<div id='slider2'><p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s2-p1").style.display = "block";
      document.getElementById("s3-p1").innerHTML = "<div id='slider3'><p id='slider-text-3'>THIRD LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s3-p1").style.display = "none";
      document.getElementById("s4-p1").innerHTML = "<div id='slider4'><p id='slider-text-4'>VICE PRESIDENCY</p></div>";
      document.getElementById("s4-p1").style.display = "block";
      document.getElementById("s5-p1").innerHTML = "<div id='slider4a'><p id='slider-text-5'>PRESIDENCY</p></div>";
      document.getElementById("s5-p1").style.display = "block";

      slider1 = document.getElementById('slider1');
      slider1a = document.getElementById('slider2'); // house2, set slider but not used
      slider2 = document.getElementById('slider3'); // 3rd (senate) chamber
      slider3 = document.getElementById('slider4'); // vp
      slider4 = document.getElementById('slider4a'); // pres

      // document.getElementById("slider1").style.display = "block";
      // document.getElementById("slider2").style.display = "block";
      // document.getElementById("chamber-label-2-p1").innerHTML = "<p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p>";
      // document.getElementById("chamber-label-2-p1").style.display = "block";
      // document.getElementById("slider4a").style.display = "none";

      // document.getElementById("slider-text-2").style.display = "block";
      // document.getElementById("slider-text-2").innerHTML = "TESTING";
      // = "none" for 3rd body slider
    } else {
      // = "block" for all 3 body sliders
      document.getElementById("s1-p1").innerHTML = "<div class='first-slider' id='slider1'><p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s1-p1").style.display = "block";
      document.getElementById("s2-p1").innerHTML = "<div id='slider2'><p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s2-p1").style.display = "block";
      document.getElementById("s3-p1").innerHTML = "<div id='slider3'><p id='slider-text-3'>THIRD LEGISLATIVE CHAMBER</p></div>";
      document.getElementById("s3-p1").style.display = "block";
      document.getElementById("s4-p1").innerHTML = "<div id='slider4'><p id='slider-text-4'>VICE PRESIDENCY</p></div>";
      document.getElementById("s4-p1").style.display = "block";
      document.getElementById("s5-p1").innerHTML = "<div id='slider4a'><p id='slider-text-5'>PRESIDENCY</p></div>";
      document.getElementById("s5-p1").style.display = "block";

      slider1 = document.getElementById('slider1');
      slider1a = document.getElementById('slider2'); // house2, set slider but not used
      slider2 = document.getElementById('slider3'); // 3rd (senate) chamber
      slider3 = document.getElementById('slider4'); // vp
      slider4 = document.getElementById('slider4a'); // pres

      // document.getElementById("slider1").style.display = "block";
      // document.getElementById("slider2").style.display = "block";
      // document.getElementById("chamber-label-2-p1").innerHTML = "<p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p>";
      // document.getElementById("chamber-label-2-p1").style.display = "block";
      // document.getElementById("slider4a").style.display = "block";
    }

    // OC always show chamber 1, vp and pres sliders
    // document.getElementById("slider3").style.display = "block";
    // document.getElementById("slider4").style.display = "block";
  }

  function sliders() {
    console.log("user edits boool: " + userEdits);
    if (userEdits == true) {
      //slider1.noUiSlider.destroy();
      //slider1a.noUiSlider.destroy();
      createSlider();
      sliderVals();

    } else {
      createSlider();
      sliderVals();
    }

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

      noUiSlider.create(slider2, {
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

      noUiSlider.create(slider3, {
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


      noUiSlider.create(slider4, {
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


      noUiSlider.create(slider1a, {
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
        userNumHouse = values[0]
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });

      // house2
      if (userNumLegislative >= 2) {
        // update new slider
        slider1a.noUiSlider.on('update', function (values, handle) {
          userNumHouse2 = values[0];
        });
      } else {
        // update new var to 0
        userNumHouse2 = 0;
      }

      // OC update slider for 2nd body if user chose >=2 bodies
      // senate
      if (userNumLegislative == 3) {
        slider2.noUiSlider.on('update', function (values, handle) {
          userNumSenate = values[0];
          // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
        });
      } else {
          userNumSenate = 0; // set senate members to 0 later, in sMembers
      }

      // always update vp and pres
      slider3.noUiSlider.on('update', function (values, handle) {
        userNumVP = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      slider4.noUiSlider.on('update', function (values, handle) {
        userNumPres = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });

    }
  }

  // function button() {
  //   var sidePad = 20;

  //   nextButton = createButton('NEXT');
  //   nextButton.id("next-btn");
  //   //position of next button is handled in css
  //   nextButton.mousePressed(nextScene);
  // }
}

//user input page for number of parties, current maximum of 3
function sParties() {
  var slider5 = document.getElementById('slider5');

  this.setup = function () {

  }
  this.enter = function () {
    console.log("2nd Slider Page");
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "NUMBER OF POLITICAL PARTIES";
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    sliders();
    // button();
  }
  this.draw = function () {
    // imageMode(CENTER);
    // image(blueHydrangea, width / 6, 50, 100, 100);
  }

  function sliders() {
    if (userEdits == true) {
      sliderVals();
    } else {
      createSlider();
      sliderVals();
      // if (userNumParties == parseInt(1)) {
      //   userEditCount += 1;
      //   console.log("one party count: " + userEditCount);
      // }
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
}

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
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
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
      document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p><div class='first-slider' id='slider6'></div>";
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>VICE PRESIDENCY</p><div id='slider7'></div>";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>PRESIDENCY</p><div id='slider8'></div>";
      document.getElementById("s3-p3").style.display = "block";
      document.getElementById("s4-p3").innerHTML = "<p id='slider-text-4'>SECOND LEGISLATIVE CHAMBER</p><div id='slider9'></div>";
      document.getElementById("s4-p3").style.display = "none";
      document.getElementById("s5-p3").innerHTML = "<p id='slider-text-5'>THIRD LEGISLATIVE CHAMBER</p><div id='slider9a'></div>";
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
      // document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p><div class='first-slider' id='slider6'></div>";
      // document.getElementById("s1-p3").style.display = "block";
      // document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p><div id='slider7'></div>";
      // document.getElementById("s2-p3").style.display = "block";
      // document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>VICE PRESIDENCY</p><div id='slider8'></div>";
      // document.getElementById("s3-p3").style.display = "block";
      // document.getElementById("s4-p3").innerHTML = "<p id='slider-text-4'>PRESIDENCY</p><div id='slider9'></div>";
      // document.getElementById("s4-p3").style.display = "block";
      // document.getElementById("s5-p3").innerHTML = "<p id='slider-text-5'>THIRD LEGISLATIVE CHAMBER</p><div id='slider9a'></div>";
      // document.getElementById("s5-p3").style.display = "none";
      
      // slider6 = document.getElementById('slider6'); // house
      // slider6a = document.getElementById('slider9a'); // house2 chamber, set slider but not used
      // slider7 = document.getElementById('slider7'); // 3rd (senate) chamber, set slider but not used
      // slider8 = document.getElementById('slider8'); // vp
      // slider9 = document.getElementById('slider9'); // pres

      // value1 = document.getElementById('value-1');
      // value1a = document.getElementById('value-5');
      // value2 = document.getElementById('value-2');
      // value3 = document.getElementById('value-3');
      // value4 = document.getElementById('value-4');

      document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p><div class='first-slider' id='slider6'></div>";
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p><div id='slider7'></div>";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>THIRD LEGISLATIVE CHAMBER</p><div id='slider8'></div>";
      document.getElementById("s3-p3").style.display = "none";
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

    } else {
      // = "block" for all 3 body sliders
      document.getElementById("s1-p3").innerHTML = "<p id='slider-text-1'>FIRST LEGISLATIVE CHAMBER</p><div class='first-slider' id='slider6'></div>";
      document.getElementById("s1-p3").style.display = "block";
      document.getElementById("s2-p3").innerHTML = "<p id='slider-text-2'>SECOND LEGISLATIVE CHAMBER</p><div id='slider7'></div>";
      document.getElementById("s2-p3").style.display = "block";
      document.getElementById("s3-p3").innerHTML = "<p id='slider-text-3'>THIRD LEGISLATIVE CHAMBER</p><div id='slider8'></div>";
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

  }

  this.enter = function () {
    // noCursor();
    console.log("4th Slider Page");
    document.getElementById("top").innerHTML = "PERCENTAGE OF VOTES REQUIRED FOR APPROVAL OF BILL BY EACH LEGISLATIVE CHAMBER";
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    // let millisecond;
    //
    // if (millisecond == 1000) {
    //   mgr.showScene(main);
    // }
    sliders();

  }

  this.draw = function () {

  }

  function sliders() {



    if (userEdits == true) {
      sliderVals();
    } else {
      createSlider();
      sliderVals();
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
        userBodyPass = values[0]
        // rangeSliderValueElement.innerHTML = userBodyPass + " " + userSuperThresh;

      });
      slider11.noUiSlider.on('update', function (values, handle) {
        userSuperThresh = values[0];
        // rangeSliderValueElement.innerHTML = userBodyPass + " " + userSuperThresh;

      });

    }


  }

}

//user input page for probabily of a yes vote
function sYesVotes() {
  var curDemYaythresh = parseInt(engine.demYaythresh * 100);
  var curRepYaythresh = parseInt(engine.repYaythresh * 100);
  var curIndYaythresh = parseInt(engine.indYaythresh * 100);

  this.setup = function () {

  }

  this.enter = function () {

    console.log("5th slider page");
    document.getElementById("top").innerHTML = "PROBABILITY OF AN AFFIRMATIVE VOTE BY A PARTY MEMBER";
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
    checkParties();
    sliders();

  }

  this.draw = function () { }


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

  function sliders() {
    // NOui slider slides


    if (userEdits == true) {
      sliderVals();
    } else {
      createSlider();
      sliderVals();
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

  }


}

//page showing all of user inputs
function sResults() {

  this.setup = function () {

    userOutputText = document.getElementById('slider-disp');

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
    document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "block";
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "none";
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

    if (userEditCount >= 2) {
      nextButton.remove();
      recalBtn = createButton('RECALCULATE VOTE');
      recalBtn.id('recal-btn');
      recalBtn.class('buttons');
      let buttonDiv = document.getElementById('button-div');
      recalBtn.parent(buttonDiv);

      // recalBtn.position(windowWidth - recalBtn.width - buttonRes.width - buttonRC.width - 20, windowHeight - 45);
      recalBtn.mousePressed(inputVar);
    }
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
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
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
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "block";
    document.getElementById("slider-value").style.display = "none";
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
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("slider-value").style.display = "none";
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
