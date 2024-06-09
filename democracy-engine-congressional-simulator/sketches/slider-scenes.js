//democracy simulater, connected to user values
function democracyEngineUser() {
  console.log("democracy userEdits: " + userEdits);
  this.setup = function() {

    textFont(helvFont);
    engine.dWidth = windowWidth * .8;
    engine.dHeight = windowHeight * .8;
    let canvas = createCanvas(engine.dWidth, engine.dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);
    background(engine.bColor);
    // dispButton();
    // let fs = fullscreen();
    // fullscreen(!fs);

  }



  this.enter = function() {
    //redraws canvas with new width and height when user simulator restarts
    if (reconfigBool == true) {
      // windowResized();
      engine.dWidth = windowWidth * .8;
      engine.dHeight = windowHeight * .8;
      canvas = createCanvas(engine.dWidth, engine.dHeight);
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

  this.draw = function() {

    let forUser = true;
    engine.currentCongLogic(forUser);
    finalDisplay();

  }

  // Displays the voting results as text on the screen
  function finalDisplay() {

    // only run this function when engine logic signals true for the final display of results
    if (!engine.finalDisplayBool) {
      return;
    }

    let currentBodyLabel;

    let columnAmount = engine.numBodies;
    let rowAmount = 4;

    let padY = 20;
    let padX = 20;
    let dispW = (engine.dWidth / columnAmount);
    let dispH = engine.dHeight;

    let dispX = 0 + padX;
    let dispY = 0 + padY;

    var resBColor = color(0, 0, 0);
    let decisionText = "";
    //column 1 to be yay/nay votes
    //column 2 to be body votes
    textFont(helvFont);

    console.log("body pass: " + engine.bodyPass);

    if (engine.bodyCount == engine.numBodies) {
      setTimeout(function() {
        document.body.style.backgroundColor = "black";
        userInput(); // show buttons

        textAlign(LEFT, TOP);
        fill(color("#faf4d3"));
        noStroke();
        rectMode(CORNER);
        resBColor.setAlpha(200);
        fill(resBColor);
        rect(0, 0, engine.dWidth, engine.dHeight);
        textStyle(NORMAL);


        //NEED TO CHANGE LATER FOR MORE THAN 3 BODIES
        for (let i = 0; i < engine.numBodies; i++) {
          fill(255);
          if (i == 0) {
            currentBodyLabel = 'LEGISLATIVE CHAMBER 1';
          } else if (i == 1) {
            currentBodyLabel = 'LEGISLATIVE CHAMBER 2';
          } else if (i == 2) {
            currentBodyLabel = 'VICE PRESIDENCY';
          } else if (i == 3) {
            // print("I AM IN PRESIDENT b4 LOGIC");
            currentBodyLabel = 'PRESIDENCY';
          }

          // show text on screen
          if (i < engine.votingBodyCounts.length) {
            print("i = " + i + " and current body label = " + currentBodyLabel);

            if (currentBodyLabel == 'PRESIDENCY') {
              textSize(22);
              text(currentBodyLabel, (i) * dispW + padX, padY, dispW, dispH); // display this body label
              textAlign(LEFT);
              
              if (engine.stopVoteArr[i] == false) { // president voted, so display yes/no counts
                textSize(20);
                text("\n\n\nVOTES \n", (i) * dispW + padX, padY, dispW, dispH);
                textSize(16);
                text("\n\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", (i) * dispW + padX, padY);
                text('\n\n\n' + engine.voteResults[i], (i) * dispW + padX, engine.dHeight / 4, dispW - padX, dispH);
              } else { // president not voted, so adjust placement of text
                textSize(20);
                  text('\n\n\n\n' + engine.voteResults[i], (i) * dispW + padX, padY, dispW - padX, dispH);
              }
            } else if (currentBodyLabel == 'VICE PRESIDENCY') {
              textSize(22);
              text(currentBodyLabel, i * dispW + padX, padY, dispW, dispH);

              if (engine.stopVoteArr[i] == false && engine.vpVote == true) { // vp voted, so display yes/no counts
                textSize(20);
                text("\n\n\nVOTES \n", i * dispW + padX, padY, dispW, dispH);
                textSize(16);
                text("\n\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", i * dispW + padX, padY);
                text('\n\n\n' + engine.voteResults[i], (i) * dispW + padX, engine.dHeight / 4, dispW - padX, dispH);
              } else { // did not vote
                textSize(20);
                text('\n\n\n' + engine.voteResults[i], i * dispW + padX, padY, dispW - padX, dispH);
              }
            } else {
              textSize(22);
              text(currentBodyLabel, i * dispW + padX, padY, dispW - padX, dispH);

              if (engine.stopVoteArr[i] == false) { // body voted, so display yes/no counts
                textSize(20);
                text("\n\n\nVOTES \n", i * dispW + padX, padY, dispW - padX, dispH);
                textSize(16);
                text("\n\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", i * dispW + padX, padY);
                text('\n\n\n' + engine.voteResults[i], i * dispW + padX, engine.dHeight / 4, dispW - padX, dispH);
              } else { // did not vote
                textSize(20);
                text('\n\n\n' + engine.voteResults[i], i * dispW + padX, padY, dispW - padX, dispH);
              }
            }
          }
            changeText(engine.decisionTxt); // change final decision text at bottom of screen 
          };
        }, 3000);
      }
      engine.finalDisplayBool = false;
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

  this.setup = function() {
    textFont(helvFont);
    engine.dWidth = windowWidth * .8;
    engine.dHeight = windowHeight * .8;
    let canvas = createCanvas(engine.dWidth, engine.dHeight);
    let canvasDiv = document.getElementById('vote');
    canvas.parent(canvasDiv);

  }

  this.enter = function() {

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
    //currentCongLogic();
    // let forUser = true;
    // engine.currentCongLogic(forUser);
    // // call finalDisplay();
    // if (engine.bodyCount >= engine.numBodies) {
    //   finalDisplay();
    //   print('Final Stage');
    // }
  }

  this.draw = function() {

    let forUser = false;
    engine.currentCongLogic(forUser);
    finalDisplay();

  }

  
  //Displays the voting results
  function finalDisplay() {

    // only run this function when engine logic signals true for the final display of results
    if (!engine.finalDisplayBool) {
      return;
    }

    let currentBodyLabel;

    let columnAmount = engine.numBodies - 1;
    let rowAmount = 4;

    let padY = 20;
    let padX = 10;
    let dispW = (engine.dWidth / columnAmount);
    let dispH = (engine.dHeight / rowAmount);

    let dispX = 0 + padX;
    let dispY = 0 + padY;

    var resBColor = color(0, 0, 0);
    let decisionText = "";
    //column 1 to be yay/nay votes
    //column 2 to be body votes
    textFont(helvFont);

    console.log("body pass: " + engine.bodyPass);

    if (engine.bodyCount == engine.numBodies) {
      setTimeout(function() {
        document.body.style.backgroundColor = "black";
        userInput(); // show buttons

        textAlign(LEFT, TOP);
        fill(color("#faf4d3"));
        noStroke();
        rectMode(CORNER);
        resBColor.setAlpha(200);
        fill(resBColor);
        rect(0, 0, engine.dWidth, engine.dHeight);
        textStyle(NORMAL);


        //NEED TO CHANGE LATER FOR MORE THAN 3 BODIES
        for (let i = 0; i < engine.numBodies; i++) {
          fill(255);
          if (i == 0) {
            currentBodyLabel = 'HOUSE';
          } else if (i == 1) {
            currentBodyLabel = 'SENATE';
          } else if (i == 2) {
            currentBodyLabel = 'VICE PRESIDENCY';
          } else if (i == 3) {
            // print("I AM IN PRESIDENT b4 LOGIC");
            currentBodyLabel = 'PRESIDENCY';
          }

          // show text on screen
          if (i < engine.votingBodyCounts.length) {
            print("i = " + i + " and current body label = " + currentBodyLabel);

            if (currentBodyLabel == 'PRESIDENCY') {
              textSize(22);
              text(currentBodyLabel, (i - 1) * dispW + padX, padY, dispW, dispH);
              textAlign(LEFT);
              
              if (engine.stopVoteArr[i] == false) { // president voted, so display yes/no counts
                textSize(20);
                text("\n\nVOTES \n", (i - 1) * dispW + padX, padY, dispW, dispH);
                textSize(16);
                text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", (i - 1) * dispW + padX, padY, dispW, dispH);
                text('\n' + engine.voteResults[i], (i - 1) * dispW + padX, engine.dHeight / 4, dispW - padX, dispH);
              } else { // president did not vote, so only adjust placement of text
                textSize(20);
                text('\n\n' + engine.voteResults[i], (i - 1) * dispW + padX, padY, dispW - padX, dispH);
              }
            } else if (currentBodyLabel == 'VICE PRESIDENCY') {
              textSize(22);
              text(currentBodyLabel, i * dispW + padX, engine.dHeight / 2, dispW, dispH);

              if (engine.stopVoteArr[i] == false && engine.vpVote == true) { // vp voted, so display yes/no counts
                textSize(20);
                text("\n\nVOTES \n", i * dispW + padX, engine.dHeight / 2, dispW, dispH);
                textSize(16);
                text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", i * dispW + padX, engine.dHeight / 2, dispW - padX, dispH);
                text('\n' + engine.voteResults[i], (i) * dispW + padX, engine.dHeight * (3 / 4), dispW - padX, dispH);
              } else { // did not vote
                textSize(20);
                text('\n\n' + engine.voteResults[i], i * dispW + padX, engine.dHeight / 2, dispW - padX, dispH);
              }
            } else {
              textSize(22);
              text(currentBodyLabel, i * dispW + padX, padY, dispW - padX, dispH);

              if (engine.stopVoteArr[i] == false) { // body voted, so display yes/no counts
                textSize(20);
                text("\n\nVOTES \n", i * dispW + padX, padY, dispW - padX, dispH);
                textSize(16);
                text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", i * dispW + padX, padY, dispW, dispH);
                text('\n' + engine.voteResults[i], i * dispW + padX, engine.dHeight / 4, dispW - padX, dispH);
              } else { // did not vote
                textSize(20);
                text('\n\n' + engine.voteResults[i], i * dispW + padX, padY, dispW - padX, dispH);
              }
            }
          }
            changeText(engine.decisionTxt); // change final decision text at bottom of screen
          };
        }, 3000);
      }
      engine.finalDisplayBool = false;
    }

  //changes the text on the HTML body for final voting decision
  function changeText(text) {
    document.getElementById("result").innerHTML = text;
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


  this.setup = function() {
    textSize(15);
    noStroke();

  }

  this.enter = function() {

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

    background(engine.bColor);
    document.body.style.backgroundColor = engine.bColor;
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

  this.draw = function() {

  }

  function changeText(text) {
    document.getElementById("result").innerHTML = text;
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

      slider1.noUiSlider.on('update', function(values, handle) {
        engine.userNumHouse = values[0]
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      slider2.noUiSlider.on('update', function(values, handle) {
        engine.userNumSenate = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      slider3.noUiSlider.on('update', function(values, handle) {
        engine.userNumVP = values[0];
        // rangeSliderValueElement.innerHTML = userNumHouse + " " + userNumSenate + " " + userNumPres + " " + userNumVP;
      });
      slider4.noUiSlider.on('update', function(values, handle) {
        engine.userNumPres = values[0];
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

  this.setup = function() {

  }
  this.enter = function() {
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
  this.draw = function() {
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

      slider5.noUiSlider.on('update', function(values, handle) {
        engine.userNumParties = values[0];
        // rangeSliderValueElement.innerHTML = userNumParties;
        if (engine.userNumParties <= 1) {
          engine.userPerHouseBody = [];
          engine.userPerSenateBody = [];
          engine.userPerPresBody = [];
          engine.userPerVPBody = [];
          engine.userPerHouseBody[0] = 1.0;
          engine.userPerSenateBody[0] = 1.0;
          engine.userPerPresBody[0] = 1.0;
          engine.userPerVPBody[0] = 1.0;
          engine.userNumParties = parseInt(engine.userNumParties);
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

  this.setup = function() {}

  this.enter = function() {
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
  this.draw = function() {

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
      engine.userNumHouse = parseInt(engine.userNumHouse);
      engine.userNumPres = parseInt(engine.userNumPres);
      engine.userNumVP = parseInt(engine.userNumVP);
      engine.userNumSenate = parseInt(engine.userNumSenate);
      engine.userNumParties = parseInt(engine.userNumParties);
      engine.userNumHouseRan = [];
      engine.userNumSenateRan = [];
      engine.userNumPresRan = [];
      engine.userNumVPRan = [];


      for (var i = 0; i < engine.userNumParties - 1; i++) {
        engine.userNumHouseRan[i] = Math.ceil(Math.random() * engine.userNumHouse)
        if (i > 0) {
          for (var j = 0; j < engine.userNumHouseRan.length - 1; j++) {
            if (engine.userNumHouseRan[i] == engine.userNumHouseRan[j]) {
              engine.userNumHouseRan[i] = parseInt(Math.ceil(Math.random() * engine.userNumHouse));
            }
          }
        }
        // console.log("random house num: " + userNumHouseRan[i]);
      }
      engine.userNumHouseRan.sort((a, b) => a - b);
      console.log(engine.userNumHouseRan);

      // userNumHouseConn = JSON.parse(userNumHouseConn);

      for (var i = 0; i < engine.userNumParties - 1; i++) {
        engine.userNumSenateRan[i] = Math.ceil(Math.random() * engine.userNumSenate)
        if (i > 0) {
          for (var j = 0; j < engine.userNumSenateRan.length - 1; j++) {
            if (engine.userNumSenateRan[i] == engine.userNumSenateRan[j]) {
              engine.userNumSenateRan[i] = parseInt(Math.ceil(Math.random() * engine.userNumSenate));
            }
          }
        }
        // console.log("random house num: " + userNumSenateRan[i]);
      }
      engine.userNumSenateRan.sort((a, b) => a - b);
      console.log(engine.userNumSenateRan);


      for (var i = 0; i < engine.userNumParties - 1; i++) {
        engine.userNumPresRan[i] = Math.ceil(Math.random() * engine.userNumPres)
        if (i > 0) {
          for (var j = 0; j < engine.userNumPresRan.length - 1; j++) {
            if (engine.userNumPresRan[i] == engine.userNumPresRan[j]) {
              engine.userNumPresRan[i] = parseInt(Math.ceil(Math.random() * engine.userNumPres));
            }
          }
        }
        // console.log("random house num: " + userNumSenateRan[i]);
      }
      engine.userNumPresRan.sort((a, b) => a - b);
      console.log(engine.userNumParties);

      for (var i = 0; i < engine.userNumParties - 1; i++) {
        engine.userNumVPRan[i] = Math.ceil(Math.random() * engine.userNumVP)
        if (i > 0) {
          for (var j = 0; j < engine.userNumVPRan.length - 1; j++) {
            if (engine.userNumVPRan[i] == engine.userNumVPRan[j]) {
              engine.userNumVPRan[i] = parseInt(Math.ceil(Math.random() * engine.userNumVP));
            }
          }
        }
        // console.log("random house num: " + userNumSenateRan[i]);
      }

      engine.userNumVPRan.sort((a, b) => a - b);
      console.log(engine.userNumVPRan);


      noUiSlider.create(slider6, {
        start: engine.userNumHouseRan,
        range: {
          'min': [0],
          'max': [engine.userNumHouse]
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
        start: engine.userNumSenateRan,
        range: {
          'min': [0],
          'max': [engine.userNumSenate]
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
        start: engine.userNumVPRan,
        range: {
          'min': [0],
          'max': [engine.userNumVP]
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
        start: engine.userNumPresRan,
        range: {
          'min': [0],
          'max': [engine.userNumPres]
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



      if (engine.userNumParties > 1) {
        //connecting values to html, each tab value is stored in an array

        engine.userPerHouseBody = [];
        var numPerHouseBody = [];
        slider6.noUiSlider.on('update', function(values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              engine.userPerHouseBody[i] = values[i];
            } else if (i == values.length) {
              engine.userPerHouseBody[i] = engine.userNumHouse - values[i - 1];
            } else {
              engine.userPerHouseBody[i] = values[i] - values[i - 1];
            }
            numPerHouseBody[i] = engine.userPerHouseBody[i];
            engine.housePercentage = engine.userPerHouseBody[i] / engine.userNumHouse;
            engine.housePercentage = roundNum(engine.housePercentage, 2);
            engine.userPerHouseBody[i] = engine.housePercentage;
          }
          console.log();


          // made for up to three political parties
          if (engine.userPerHouseBody.length == 3) {
            value1.innerHTML = "Party A: " + numPerHouseBody[0] + " Party B: " + numPerHouseBody[1] + " Party C: " + numPerHouseBody[2];
          } else if (engine.userPerHouseBody.length == 2) {
            // rangeSliderValueElement.innerHTML = userPerHouseBody[0] + " " + userPerHouseBody[1];
            value1.innerHTML = "Party A: " + numPerHouseBody[0] + " Party B: " + numPerHouseBody[1];
          } else {
            value1.innerHTML = "Party A: " + numPerHouseBody[0];
          }
          mouseOver(slider6, value1);
        });

        engine.userPerSenateBody = [];
        var numPerSenateBody = [];
        slider7.noUiSlider.on('update', function(values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              engine.userPerSenateBody[i] = values[i];
            } else if (i == values.length) {
              engine.userPerSenateBody[i] = engine.userNumSenate - values[i - 1];
            } else {
              engine.userPerSenateBody[i] = values[i] - values[i - 1];
            }
            numPerSenateBody[i] = engine.userPerSenateBody[i];
            engine.senPercentage = engine.userPerSenateBody[i] / engine.userNumSenate;
            engine.senPercentage = roundNum(engine.senPercentage, 2);
            engine.userPerSenateBody[i] = engine.senPercentage;
          }

          //made for up to three political parties
          if (engine.userPerSenateBody.length == 3) {
            value2.innerHTML = "Party A: " + numPerSenateBody[0] + " Party B: " + numPerSenateBody[1] + " Party C: " + numPerSenateBody[2];
          } else if (engine.userPerSenateBody.length == 2) {
            value2.innerHTML = "Party A: " + numPerSenateBody[0] + " Party B: " + numPerSenateBody[1];
          } else {
            value2.innerHTML = "Party A: " + numPerSenateBody[0];
          }
          mouseOver(slider7, value2);
        });


        engine.userPerVPBody = [];
        var numPerVPBody = [];
        slider8.noUiSlider.on('update', function(values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              engine.userPerVPBody[i] = values[i];
            } else if (i == values.length) {
              engine.userPerVPBody[i] = engine.userNumVP - values[i - 1];
            } else {
              engine.userPerVPBody[i] = values[i] - values[i - 1];
            }
            numPerVPBody[i] = engine.userPerVPBody[i];
            engine.vpPercentage = engine.userPerVPBody[i] / engine.userNumVP;
            engine.vpPercentage = roundNum(engine.vpPercentage, 2);
            engine.userPerVPBody[i] = engine.vpPercentage;
          }


          if (engine.userPerVPBody.length == 3) {
            value3.innerHTML = "Party A: " + numPerVPBody[0] + " Party B: " + numPerVPBody[1] + " Party C: " + numPerVPBody[2];
          } else if (engine.userPerVPBody.length == 2) {
            value3.innerHTML = "Party A: " + numPerVPBody[0] + " Party B: " + numPerVPBody[1];
          } else {
            value3.innerHTML = "Party A: " + numPerVPBody[0];
          }
          mouseOver(slider8, value3);


        });

        engine.userPerPresBody = [];
        var numPerPresBody = [];
        slider9.noUiSlider.on('update', function(values, handle) {
          for (var i = 0; i <= values.length; i++) {
            if (i == 0) {
              engine.userPerPresBody[i] = values[i];
            } else if (i == values.length) {
              engine.userPerPresBody[i] = engine.userNumPres - values[i - 1];
            } else {
              engine.userPerPresBody[i] = values[i] - values[i - 1];
            }
            numPerPresBody[i] = engine.userPerPresBody[i];
            engine.presPercentage = engine.userPerPresBody[i] / engine.userNumPres;
            engine.presPercentage = roundNum(engine.presPercentage, 2);
            engine.userPerPresBody[i] = engine.presPercentage;
          }
          if (engine.userPerPresBody.length == 3) {
            value4.innerHTML = "Party A: " + numPerPresBody[0] + " Party B: " + numPerPresBody[1] + " Party C: " + numPerPresBody[2];
          } else if (engine.userPerPresBody.length == 2) {
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

  this.setup = function() {
    textSize(15);
    noStroke();
    engine.dWidth = width;
    engine.dHeight = height;
    // background("#012244");

  }

  this.enter = function() {
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

  this.draw = function() {

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

      engine.userBodyPass = "";
      engine.userSuperThresh = "";

      slider10.noUiSlider.on('update', function(values, handle) {
        engine.userBodyPass = values[0]
        // rangeSliderValueElement.innerHTML = userBodyPass + " " + userSuperThresh;

      });
      slider11.noUiSlider.on('update', function(values, handle) {
        engine.userSuperThresh = values[0];
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

  this.setup = function() {

  }

  this.enter = function() {

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

  this.draw = function() {}


  function checkParties() {
    if (engine.userNumParties == 1) {
      document.getElementById("slider12").style.display = "block";
      document.getElementById("slider13").style.display = "none";
      document.getElementById("slider14").style.display = "none";

    } else if (engine.userNumParties == 2) {
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

      engine.userDemYaythresh = "";
      engine.userRepYaythresh = "";
      engine.userIndYaythresh = "";

      slider12.noUiSlider.on('update', function(values, handle) {
        engine.userDemYaythresh = values[0];
        // rangeSliderValueElement.innerHTML = userDemYaythresh + " " + userRepYaythresh + " " + userIndYaythresh;

      });
      if (engine.userNumParties >= 2) {
        slider13.noUiSlider.on('update', function(values, handle) {
          engine.userRepYaythresh = values[0];
          // rangeSliderValueElement.innerHTML = userDemYaythresh + " " + userRepYaythresh + " " + userIndYaythresh;

        });
      } else {
        engine.userRepYaythresh = 0 + "%";
      }

      if (engine.userNumParties == 3) {
        slider14.noUiSlider.on('update', function(values, handle) {
          engine.userIndYaythresh = values[0];
          // rangeSliderValueElement.innerHTML = userDemYaythresh + " " + userRepYaythresh + " " + userIndYaythresh;

        });
      } else {
        engine.userIndYaythresh = 0 + "%";
      }


    }

  }


}

//page showing all of user inputs
function sResults() {

  this.setup = function() {

    userOutputText = document.getElementById('slider-disp');

  }

  this.enter = function() {
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
    if (engine.userNumParties == 2) {
      engine.userPerHouseBody[2] = 0.0;
      engine.userPerSenateBody[2] = 0.0;
      engine.userPerVPBody[2] = 0.0;
      engine.userPerPresBody[2] = 0.0;
    } else if (engine.userNumParties == 1) {
      engine.userPerHouseBody[1] = 0.0;
      engine.userPerHouseBody[2] = 0.0;
      engine.userPerSenateBody[1] = 0.0;
      engine.userPerSenateBody[2] = 0.0;
      engine.userPerVPBody[1] = 0.0;
      engine.userPerVPBody[2] = 0.0;
      engine.userPerPresBody[1] = 0.0;
      engine.userPerPresBody[2] = 0.0;
    }
    inputTxt();
  }

  this.draw = function() {

  }

  function inputTxt() {

    userOutputText.innerHTML =
      "<div><h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + engine.userNumHouse +
      "<br>Members in Political Party A: " + Math.round(engine.userPerHouseBody[0] * engine.userNumHouse) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerHouseBody[1] * engine.userNumHouse) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerHouseBody[2] * engine.userNumHouse) +
      "</p><h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + engine.userNumSenate +
      "<br>Members in Political Party A: " + Math.round(engine.userPerSenateBody[0] * engine.userNumSenate) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerSenateBody[1] * engine.userNumSenate) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerSenateBody[2] * engine.userNumSenate) +
      "</p><h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + engine.userNumVP +
      "<br>Members in Political Party A: " + Math.round(engine.userPerPresBody[0] * engine.userNumVP) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerPresBody[1] * engine.userNumVP) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerPresBody[2] * engine.userNumVP) +
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + engine.userNumPres +
      "<br>Members in Political Party A: " + Math.round(engine.userPerVPBody[0] * engine.userNumPres) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerVPBody[1] * engine.userNumPres) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerVPBody[2] * engine.userNumPres) +
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + engine.userDemYaythresh +
      "<br>Political Party B: " + engine.userRepYaythresh +
      "<br>Political Party C: " + engine.userIndYaythresh +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + engine.userBodyPass +
      "<br> Approval By Supermajority: " + engine.userSuperThresh + "</div></p>";

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

  this.setup = function() {
    simInfoText = document.getElementById('sim-info');
  }

  this.enter = function() {
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

    setTimeout(function() {
      inputVar();
    }, delayInMilliseconds);


  }

  this.draw = function() {

  }

  function inputTxt() {
    simInfoText.innerHTML = "<div id='page-container'><div id='content-wrap'><div class='body-text'><p>The simulator will now run through one legislative cycle with the provided inputs. The user will then have the option of running the simulator through additional legislative cycles with the same values or changing the parameters by clicking on the 'Reconfigure Government' button.</p></div></div></div>";

  }


}

//display of user inputs while in simulator
function sDisplay() {

  this.setup = function() {

  }

  this.enter = function() {

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

  this.draw = function() {


  }

  function inputTxt() {
    userOutputText.innerHTML =
      "<div><h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + engine.userNumHouse +
      "<br>Members in Political Party A: " + Math.round(engine.userPerHouseBody[0] * engine.userNumHouse) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerHouseBody[1] * engine.userNumHouse) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerHouseBody[2] * engine.userNumHouse) +
      "</p><h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + engine.userNumSenate +
      "<br>Members in Political Party A: " + Math.round(engine.userPerSenateBody[0] * engine.userNumSenate) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerSenateBody[1] * engine.userNumSenate) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerSenateBody[2] * engine.userNumSenate) +
      "</p><h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + engine.userNumVP +
      "<br>Members in Political Party A: " + Math.round(engine.userPerPresBody[0] * engine.userNumVP) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerPresBody[1] * engine.userNumVP) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerPresBody[2] * engine.userNumVP) +
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + engine.userNumPres +
      "<br>Members in Political Party A: " + Math.round(engine.userPerVPBody[0] * engine.userNumPres) +
      "<br>Members in Political Party B: " + Math.round(engine.userPerVPBody[1] * engine.userNumPres) +
      "<br>Members in Political Party C: " + Math.round(engine.userPerVPBody[2] * engine.userNumPres) +
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + engine.userDemYaythresh +
      "<br>Political Party B: " + engine.userRepYaythresh +
      "<br>Political Party C: " + engine.userIndYaythresh +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + engine.userBodyPass +
      "<br> Approval By Supermajority: " + engine.userSuperThresh + "</div></p>";
  }


  // //supermajority Cutoff for override of presidential veto
  // userSuperThresh;
  //
  // userBodyPass;

}

//shows default congress settings at end of original simulator
function sDefault() {

  this.setup = function() {
    userOutputText = document.getElementById('slider-disp');
  }

  this.enter = function() {

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

  this.draw = function() {


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
