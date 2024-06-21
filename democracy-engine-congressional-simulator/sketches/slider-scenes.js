//democracy simulater, connected to user values
function democracyEngineUser() {
  console.log("democracy userEdits: " + userEdits);
  var voteDisplayUser;

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
    
    voteDisplayUser = new VoteVisual(loadingImage, bColor, pColor);

    //redraws canvas with new width and height when user simulator restarts
    if (reconfigBool == true) {
      // windowResized();
      voteDisplayUser.dWidth = windowWidth * .8;
      voteDisplayUser.dHeight = windowHeight * .8;
      canvas = createCanvas(voteDisplayUser.dWidth, voteDisplayUser.dHeight);
      let canvasDiv = document.getElementById('vote');
      canvas.parent(canvasDiv);
      reconfigBool = false;
    }

    document.getElementById("top").style.display = "none";
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

    engine.currentCongLogic(userEdits);
    

    // OC when engine is done with voting calculation, show votes
    //if (engine.finalDisplayBool) {

      voteDisplayUser.displayVoting(engine);

      // OC when visual display of rectangles is done, show buttons
      if (voteDisplayUser.userInputState) {
        finalDisplay();
        addSession(toSchema(engine)); // OC save session to db after displaying to screen
      }
    //}

  }

  // Displays the voting results as text on the screen
  // also displays buttons
  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = "black";
      userInput(); // show buttons
      voteDisplayUser.finalTextDisplayUser(engine, helvFont);
      changeText(engine.decisionTxt); // change final decision text at bottom of screen 
    }, 1500); // 1.5 seconds before text overlay shows

    //engine.finalDisplayBool = false;
    voteDisplayUser.userInputState = false;

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
  var voteDisplayOrigin;

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
    document.getElementById("slider-value").style.display = "none";
    document.getElementById("vote").style.display = "block";
    document.getElementById("slider-disp").style.display = "none";

    // engine.currentCongLogic(forUser);
    voteDisplayOrigin = new VoteVisual(loadingImage, bColor, pColor);
    voteDisplayOrigin.dWidth = windowWidth * .8;
    voteDisplayOrigin.dHeight = windowHeight * .8;
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
      voteDisplayOrigin.displayVoting(engine);

      // OC when visual display of rectangles is done, show buttons
      if (voteDisplayOrigin.userInputState) {
        finalDisplay();
        // console.log(engine.votingBodyCounts); // for testing
        //addSession(toSchema(engine)); // OC save session to db after displaying to screen
      }

    //}



  }


  //Displays the buttons for user input
  function finalDisplay() {

    setTimeout(function () {
      document.body.style.backgroundColor = "black";
      userInput(); // show buttons
      voteDisplayOrigin.finalTextDisplayDefault(engine, helvFont);
      changeText(engine.decisionTxt); // change final decision text at bottom of screen
    }, 1500); // 1.5 seconds before text overlay showss

    //engine.finalDisplayBool = false;
    voteDisplayOrigin.userInputState = false;

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

//user input page for for amount of members in each legislative body
function sLegislative() {

  var slider1 = document.getElementById('slider1');
  var slider2 = document.getElementById('slider2');
  var slider3 = document.getElementById('slider3');
  var slider4 = document.getElementById('slider4');
  var curNumHouse = parseInt(engine.numHouse);
  var curNumSen = parseInt(engine.numSenate);
  var curNumVP = parseInt(engine.numVP);
  var curNumPres = parseInt(engine.numPres);


  this.setup = function () {
    textSize(15);
    noStroke();

  }

  this.enter = function () {

    console.log("1st Slider Page");
    document.getElementById("page1").style.display = "block";
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
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS";


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
    }


    // COME BACK HERE FOR CODE REVIEW

    function sliderVals() {
      //connecting values to html, each tab value is stored in an array
      // var rangeSliderValueElement = document.getElementById('slider-value');

      slider1.noUiSlider.on('update', function (values, handle) {
        userNumHouse = values[0]
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      slider2.noUiSlider.on('update', function (values, handle) {
        userNumSenate = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
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

  function button() {
    var sidePad = 20;

    nextButton = createButton('NEXT');
    nextButton.id("next-btn");
    //position of next button is handled in css
    nextButton.mousePressed(nextScene);
  }
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
          userPerSenateBody = [];
          userPerPresBody = [];
          userPerVPBody = [];
          userPerHouseBody[0] = 1.0;
          userPerSenateBody[0] = 1.0;
          userPerPresBody[0] = 1.0;
          userPerVPBody[0] = 1.0;
          userNumParties = parseInt(userNumParties);
          onePartyBool = true;

        }

      });
    }
  }
}

//user input page for number of members in each party
function sMembers() {

  var slider6 = document.getElementById('slider6');
  var slider7 = document.getElementById('slider7');
  var slider8 = document.getElementById('slider8');
  var slider9 = document.getElementById('slider9');

  this.setup = function () { }

  this.enter = function () {
    console.log("3rd Slider Page");
    document.getElementById("top").innerHTML = "NUMBER OF VOTING MEMBERS AFFILIATED WITH EACH POLITICAL PARTY";
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
    sliders();

  }
  this.draw = function () {

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
        slider6.noUiSlider.destroy();
        slider7.noUiSlider.destroy();
        slider8.noUiSlider.destroy();
        slider9.noUiSlider.destroy();
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
      userNumPres = parseInt(userNumPres);
      userNumVP = parseInt(userNumVP);
      userNumSenate = parseInt(userNumSenate);
      userNumParties = parseInt(userNumParties);
      userNumHouseRan = [];
      userNumSenateRan = [];
      userNumPresRan = [];
      userNumVPRan = [];


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
      var handle7 = slider7.querySelectorAll('.noUi-handle');
      var handle8 = slider8.querySelectorAll('.noUi-handle');
      var handle9 = slider9.querySelectorAll('.noUi-handle');

      var value1 = document.getElementById('value-1');
      var value2 = document.getElementById('value-2');
      var value3 = document.getElementById('value-3');
      var value4 = document.getElementById('value-4');

      // var rangeSliderValueElement = document.getElementById('slider-value');

      var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

      for (var i = 0; i < handle6.length; i++) {
        handle6[i].classList.add(classes[i]);

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
      var housePercentage, senPercentage, vpPercentage, presPercentage;

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
    userEditCount++;
    console.log("user edit count: " + userEditCount);
    console.log("user result page");
    document.getElementById("top").innerHTML = "DEMOCRACY ENGINE SIMULATOR INPUTS";
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
      userPerSenateBody[2] = 0.0;
      userPerVPBody[2] = 0.0;
      userPerPresBody[2] = 0.0;
    } else if (userNumParties == 1) {
      userPerHouseBody[1] = 0.0;
      userPerHouseBody[2] = 0.0;
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

    userOutputText.innerHTML =
      "<div><h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumHouse +
      "<br>Members in Political Party A: " + Math.round(userPerHouseBody[0] * userNumHouse) +
      "<br>Members in Political Party B: " + Math.round(userPerHouseBody[1] * userNumHouse) +
      "<br>Members in Political Party C: " + Math.round(userPerHouseBody[2] * userNumHouse) +
      "</p><h3>Second Legislative Chamber</h3>" +
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
    var delayInMilliseconds = 13000; //15 seconds

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
    userOutputText.innerHTML =
      "<div><h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + userNumHouse +
      "<br>Members in Political Party A: " + Math.round(userPerHouseBody[0] * userNumHouse) +
      "<br>Members in Political Party B: " + Math.round(userPerHouseBody[1] * userNumHouse) +
      "<br>Members in Political Party C: " + Math.round(userPerHouseBody[2] * userNumHouse) +
      "</p><h3>Second Legislative Chamber</h3>" +
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
      "<p>Voting Members: " + engine.numSenate +
      "<br>Members in Democrat Party: " + Math.round(engine.perDemSenate * engine.numSenate) +
      "<br>Members in Independent Party: " + Math.round(engine.perIndSenate * engine.numSenate) +
      "<br>Members in Republican Party: " + Math.round(engine.perRepSenate * engine.numSenate) +
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
