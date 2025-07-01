/**
 * This class is used for drawing the result of the democracy engine to the screen.
 * Rectangles represent each vote and text describes the final result.
 * 
 * File: vote-visuals.js
 */

class VoteVisual {

  loadingImage;
  checkImage;

  //which body is voting
  bodyCount = 0;
  bodyPass = [];
  numBodies;

  //The number of voting memebers for each body
  numCon;

  //The count variables are updated every time a circle is drawn
  count = 0;
  count1 = 0;
  count2 = 0;
  countR = 0;

  //The yCount variables
  xCount = 1;
  yCount = 1;
  yCountT = 1;

  //Determines size of circle & spacing
  skip; //taking the square root of the area of the drawing
  skip2;

  //Location Circle is Drawn
  x;
  y;
  x2;
  y2;

  //Diameter or circle
  diam;

  //Splits the Screen into 'sections' based on number of voting bodies
  offSet;

  //test state variable - 0 if untested 1 if tested
  test;

  //test state variable - 0 if moving through voting body 1 if all body members have votes
  endBody;

  bodyLabel;

  // colors - OC now passed as constructor params
  bColor; // = "#012244"; // background color
  pColor; // loading image color
  tColor; // text color
  rColor; // party A rect color
  rColor2; // party B rect color
  rColor3; // party C rect color
  mColor; // majority bar graph color
  smColor; // super majority bar graph color

  tranVal = 255;
  labelSpace; // set in slide-scenes.js sBodies()
  partyNum = 0;
  moveArrow = 0;

  rot = 0;

  stopVoteBool = false;

  numDem; // Party A
  numRep; // Party B
  numWild; // Party C

  // for canvas
  dWidth;
  dHeight;

  engine; // OC engine object to draw for

  forUser; // OC bool to indicate if the govt config was set by the user
  userInputState = false; // OC boolean to indicate when to show buttons for next user input for engine config

  resIX;

  /**
   * Sets loading image and background color properties
   * 
   * @param {image} img - loading image bitmap
   * @param {image} img2 - check mark image
   * @param {color} bK - color for background
   * @param {color} pK - a second color
   * @param {color} tK - text color
   * @param {color} c1 - rectangle color 1
   * @param {color} c2 - rectangle color 2
   * @param {color} c3 - rectangle color 3
   * @param {color} mK - majority bar graph color
   * @param {color} smK - supermajority bar graph color
   */
  constructor(img, img2, bK, pK, tK, c1, c2, c3, mK, smK) {
    this.loadingImage = img;
    this.checkImage = img2;
    this.bColor = color(bK);
    this.pColor = color(pK);
    this.tColor = color(tK);
    this.rColor = color(c1);
    this.rColor2 = color(c2);
    this.rColor3 = color(c3);
    this.mColor = color(mK);
    this.smColor = color(smK);
  }

  /**
   * Draws boxes to screen one by one for each chamber to visualize voting results.
   * 
   * @param {DemocracyEngine} engineObj - the engine object to draw the votes for
   */
  displayVoting(engineObj) {
    this.engine = engineObj;
    this.forUser = this.engine.forUser;

    // OC centers vote drawings based on total of voting bodies
    if (this.engine.numLegislativeBodies == 1) {
      this.numBodies = 3;
    } else if (this.engine.numLegislativeBodies == 2){
      this.numBodies = 4;
    }  else {
      this.numBodies = this.engine.numBodies;
    }

    //print('VISUAL CLASS numBodies = ' + this.numBodies);

    // Logic for Chamber 1
    if (this.bodyCount == 0) {

      // Setup variables first time we pass through the first body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ' + this.bodyCount);
        background(this.bColor);

        // Set number of voting memebers
        this.numCon = this.engine.numHouse;
        this.bodyLabel = 'HOUSE OF REPRESENTATIVES'; // label for default config

        //Set Demographics for each body
        // OC needed in this class to determine box colors for different parties
        this.numDem = round(this.numCon * this.engine.perDemHouse); // Party A
        this.numRep = round(this.numCon * this.engine.perRepHouse); // Party B
        this.numWild = round(this.numCon * this.engine.perIndHouse); // Party C

        // OC offset calculated differently between default and user config
        if (this.forUser)
          this.offSet = this.dWidth / (this.numBodies);
        else
          this.offSet = this.dWidth / (this.numBodies - 1);

        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt((this.offSet) * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // OC skip chamber 2 and 3 when only 1 legislative body
    if (this.bodyCount == 1 && this.engine.numLegislativeBodies == 1) {
      this.bodyCount += 2; // skip chambers 2-3
    } else if (this.bodyCount == 2 && this.engine.numLegislativeBodies == 2) {
      this.bodyCount++; // skip chamber3 when only 2 legislative bodies
    }
    
    // Logic for Chamber 2
    if (this.bodyCount == 1) {
      strokeWeight(10);
      translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numHouse2;
        this.bodyLabel = 'SENATE'; // labeled for default config

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemHouse2);
        this.numRep = round(this.numCon * this.engine.perRepHouse2);
        this.numWild = round(this.numCon * this.engine.perIndHouse2);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }

    }

    // Logic for Chamber 3
    if (this.bodyCount == 2) {
      strokeWeight(10);

      var translateVal = this.bodyCount;
      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
      //   translateVal = this.bodyCount - 1;
      // }
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }
      translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {

        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numSenate;
        this.bodyLabel = 'CHAMBER 3';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemSenate);
        this.numRep = round(this.numCon * this.engine.perRepSenate);
        this.numWild = round(this.numCon * this.engine.perIndSenate);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // console.log("con: " + this.numCon);
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }

    }

    //AB logic for VP if Senate needs a tiebreaker
    if (this.bodyCount == 3) {
      
      strokeWeight(10);

      var translateVal = this.bodyCount;

      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
      //   translateVal = this.bodyCount - 1;
      // }
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }

      translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }
      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numVP;
        this.bodyLabel = 'VICE PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemVP);
        this.numRep = round(this.numCon * this.engine.perRepVP);
        this.numWild = round(this.numCon * this.engine.perIndVP);

        //Figure out how big to draw the circles and how far to space them out
        if (this.forUser)
          this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        else
          this.skip = floor(.65 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // Logic for President
    if (this.bodyCount == 4) {
      strokeWeight(10);

      var translateVal = this.bodyCount;

      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
      //   translateVal = this.bodyCount - 1;
      // }
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }

      //translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.forUser)
        translate(this.offSet * (translateVal), 0);
      else
        translate(this.offSet * (translateVal - 1), 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        // Set number of voting memebers
        if (this.engine.numPres != 0) {
          this.numCon = this.engine.numPres;
        } else { // set 1 for continuation of drawing when no presidency
          this.numCon = 1;
        }
        this.bodyLabel = 'PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemPres);
        this.numRep = round(this.numCon * this.engine.perRepPres);
        this.numWild = round(this.numCon * this.engine.perIndPres);


        //Figure out how big to draw the circles and how far to space them out
        if (this.forUser)
          this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        else
          this.skip = floor(.65 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // Need to make sure we are not over our number of congressional body numCon and readjusts skip if too big
    if (this.count < this.numCon - 1 && this.count1 < 1) {

      for (let i = 0; i < 6; i++) { // OC loading image stays on screen for less time it used to
        this.rotLoadImage();
        this.testSize();
        this.count++;
      }

    } else if (this.count >= this.numCon - 1) {

      for (let i = 0; i < 3; i++) { // OC draws 3 boxes every draw loop, drawing performace improved
        this.bodyVote();
        this.count1++;
      }

    }

  }

  /**
   * Draws the bar graph for majority and supermajority percentages
   * @param {*} leftX - x position left
   * @param {*} rightX - x position right
   * @param {*} gOffsetY - y position from top of screen
   */
  percentageGraphs(leftX, rightX, gOffsetY) {
    push();
    let gWidth = rightX - leftX - 5; // graph width, make max space of remaining edge
    let gHeight = 300; // graph height
    //let gOffsetY = this.dHeight/4; // y offset for graph
    if (gOffsetY + gHeight > this.dHeight) {
      gOffsetY = this.dHeight-gHeight- 5; // prevent box from overflowing
    }
    let offY = 30;
    let gBarH = 15; // graph Bar height
    let titleSz = 18;
    let lableSz = 13;
    let numSz = 12;
    rectMode(CORNER);
    translate(leftX, gOffsetY);
    noFill();
    stroke(this.tColor);
    strokeWeight(1);
    rect(0, 0, gWidth, gHeight, 15); // graph box outline

    textSize(titleSz);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    fill(this.tColor);
    noStroke(this.tColor);
    text("PERCENT OF VOTES FOR APPROVAL", 10, 10, gWidth);

    textSize(lableSz);
    text("MAJORITY", 10, 65, gWidth);
    text("SUPER MAJORITY", 10, 95, gWidth);

    let bStart = 130; // x coord of bar
    let bMax = gWidth-bStart-50; // bar at 100%, leave space for number
    let mBar = map(parseInt(this.engine.perPass * 100), 0, 100, 0, bMax); // majority bar graph
    textSize(numSz);
    text(parseInt(this.engine.perPass * 100) + "%", bStart+mBar+5, 67);
    fill(this.mColor);
    rect(bStart, 65, mBar, gBarH);

    let smBar = map(parseInt(this.engine.superThresh * 100), 0, 100, 0, bMax); // super majority bar graph
    fill(this.tColor);
    textSize(numSz);
    text(parseInt(this.engine.superThresh * 100) + "%", bStart+smBar+5, 97);
    fill(this.smColor);
    rect(bStart, 95, smBar, gBarH);
    //console.log("smBar: " + smBar + " range: " + bStart + " to " + bMax);

    translate(0, 140);
    textSize(titleSz);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    fill(this.tColor);
    noStroke();
    text("PROBABILITY OF AFFIRMATIVE VOTE", 10, 10, gWidth);
    
    bStart = 85; // x coord of bar
    bMax = gWidth-bStart-50; // bar at 100%, leave space for number
    let partyABar = map(parseInt(this.engine.demYaythresh * 100), 0, 100, 0, bMax); // majority bar graph
    fill(this.tColor);
    textSize(lableSz);
    text("PARTY A", 10, 65, gWidth);
    textSize(numSz);
    text(parseInt(this.engine.demYaythresh * 100) + "%", bStart+partyABar+5, 67);
    fill(this.rColor);
    rect(bStart, 65, partyABar, gBarH);

    if (this.engine.numParties >=2) {
      let partyBBar = map(parseInt(this.engine.repYaythresh * 100), 0, 100, 0, bMax); // majority bar graph
      fill(this.tColor);
      textSize(lableSz);
      text("PARTY B", 10, 95, gWidth);
      textSize(numSz);
      text(parseInt(this.engine.repYaythresh * 100) + "%", bStart+partyBBar+5, 97);
      fill(this.rColor2);
      rect(bStart, 95, partyBBar, gBarH);

      if (this.engine.numParties == 3) {
        let partyCBar = map(parseInt(this.engine.indYaythresh * 100), 0, 100, 0, bMax); // majority bar graph
        fill(this.tColor);
        textSize(lableSz);
        text("PARTY C", 10, 125, gWidth);
        textSize(numSz);
        text(parseInt(this.engine.indYaythresh * 100) + "%", bStart+partyCBar+5, 127);
        fill(this.rColor3);
        rect(bStart, 125, partyCBar, gBarH);
      }
    }

    pop();
  }

  /**
   * Immediately displays configuration with blank boxes (no votes) with chamber labels, 
   * graph of percentages on right side of screen,
   * and labels above each chamber.
   * 
   * @param {*} engineObj - engine object to display for
   * @param {*} minimalConfig - bool, if true does not display the graph nor chamber labels.
   */
  displayImmediateBlank(engineObj, minimalConfig) {
    this.engine = engineObj;
    this.forUser = this.engine.forUser;
    var drawWidth = this.dWidth;

    if (!minimalConfig) {
      drawWidth = this.dWidth - (this.dWidth/5.5); // drawWidth is up to edge where pres box is drawn
      this.percentageGraphs(drawWidth, this.dWidth, this.dHeight/4);
    }

    // OC centers vote drawings based on total of voting bodies
    if (this.engine.numLegislativeBodies == 1) {
      this.numBodies = 3;
    } else if (this.engine.numLegislativeBodies == 2){
      this.numBodies = 4;
    }  else {
      this.numBodies = this.engine.numBodies;
    }

    //print('VISUAL CLASS numBodies = ' + this.numBodies);

    //for(let ix=0; ix < this.numBodies; ix++) {

    // Logic for Chamber 1
    if (this.bodyCount == 0) {

      // Setup variables first time we pass through the first body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS logic for house bodyCount = ' + this.bodyCount);
        background(this.bColor);

        // Set number of voting memebers
        this.numCon = this.engine.numHouse;
        this.bodyLabel = 'HOUSE OF REPRESENTATIVES'; // labeled for default

        //Set Demographics for each body
        // OC needed in this class to determine box transparency
        this.numDem = round(this.numCon * this.engine.perDemHouse);
        this.numRep = round(this.numCon * this.engine.perRepHouse);
        this.numWild = round(this.numCon * this.engine.perIndHouse);

        // OC offset calculated differently between default and user config
        if (this.forUser)
          this.offSet = drawWidth / (this.numBodies);
        else
          this.offSet = drawWidth / (this.numBodies - 1);

        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt((this.offSet) * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        if (!minimalConfig) {
          this.configLabel("CHAMBER 1");
        }
      }
    }

    // OC skip chambers when not needed
    if (this.bodyCount == 1 && this.engine.numLegislativeBodies == 1) {
      this.bodyCount += 2; // skip chambers 2-3
    } else if (this.bodyCount == 2 && this.engine.numLegislativeBodies == 2) {
      this.bodyCount++; // skip chamber 3
    }

    // Logic for Chamber 2
    if (this.bodyCount == 1) {
      strokeWeight(10);
      translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {

        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numHouse2;
        this.bodyLabel = 'SENATE';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemHouse2);
        this.numRep = round(this.numCon * this.engine.perRepHouse2);
        this.numWild = round(this.numCon * this.engine.perIndHouse2);

        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        if (!minimalConfig) {
          this.configLabel("CHAMBER 2");
        }
      }

    }

    // Logic for Chamber 3
    if (this.bodyCount == 2) {
      strokeWeight(10);

      var translateVal = this.bodyCount;
      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }
      translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {

        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numSenate;
        this.bodyLabel = 'CHAMBER 3';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemSenate);
        this.numRep = round(this.numCon * this.engine.perRepSenate);
        this.numWild = round(this.numCon * this.engine.perIndSenate);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        if (!minimalConfig) {
        this.configLabel("CHAMBER 3");
        }
      }

    }

    //AB logic for VP if Senate needs a tiebreaker
    if (this.bodyCount == 3) {
      
      strokeWeight(10);

      var translateVal = this.bodyCount;

      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }

      translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }
      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numVP;
        this.bodyLabel = 'VICE PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemVP);
        this.numRep = round(this.numCon * this.engine.perRepVP);
        this.numWild = round(this.numCon * this.engine.perIndVP);

        //Figure out how big to draw the circles and how far to space them out
        if (this.forUser)
          this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        else
          this.skip = floor(.65 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        if (!minimalConfig) {
        this.configLabel("VICE PRESIDENT");
        }
      }
    }

    // Logic for President
    if (this.bodyCount == 4) {
      strokeWeight(10);

      var translateVal = this.bodyCount;

      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }

      //translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.forUser)
        translate(this.offSet * (translateVal), 0);
      else
        translate(this.offSet * (translateVal - 1), 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')
        // print(this.bodyCount);

        // Set number of voting memebers
        if (this.engine.numPres != 0) {
          this.numCon = this.engine.numPres;
        } else {
          this.numCon = 1; // set 1 for continuation of drawing
        }
        this.bodyLabel = 'PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemPres);
        this.numRep = round(this.numCon * this.engine.perRepPres);
        this.numWild = round(this.numCon * this.engine.perIndPres);


        //Figure out how big to draw the circles and how far to space them out
        if (this.forUser)
          this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        else
          this.skip = floor(.65 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        if (!minimalConfig) {
        this.configLabel("PRESIDENT");
        }
      }
    }

    for (let jx=0; jx < this.numCon; jx++) {
      if (this.count < this.numCon - 1 && this.count1 < 1) {
          this.testSize();
          this.count++;
      } else if (this.count >= this.numCon - 1) {

        // draw blank boxes, with colors according to party
        // ---------------------------------------
        if (this.count1 < 1) {
          this.resetDraw();
          this.test = 1;
        }
        if (this.count1 < this.numCon) {
          var valAdjust = 75;
          var currentTransVal = 0;
          var currentPartyNum = 0;
          var numRepOrWild;
          var rectColor;

          if (this.forUser) 
            numRepOrWild = this.numRep;
          else
            numRepOrWild = this.numWild;

          if (this.test == 1) {
            this.countR = this.count1;
          } else if (this.test == 2) {
            this.countR = this.count2;
          }
          this.diam = this.skip * .8;

          // Party A is Voting
          if (this.countR < this.numDem) {
            // currentTransVal = this.tranVal - currentPartyNum * valAdjust; // party determines tranparency of rectangle
            rectColor = this.rColor;
          }
          // Party C is Voting
          else if (this.countR >= this.numDem && this.countR < this.numDem + numRepOrWild) {
            // currentPartyNum = this.partyNum + 1;
            // currentTransVal = this.tranVal - currentPartyNum * valAdjust;
            rectColor = this.rColor2;
          }
          // Party B is Voting
          else {
            // currentPartyNum = this.partyNum + 2;
            // currentTransVal = this.tranVal - currentPartyNum * valAdjust;
            rectColor = this.rColor3;
          }

          // draw blank boxes with color to indicate different parties
          rectMode(CENTER);
          // this.rColor.setAlpha(currentTransVal); // different shade for each voting party
          // stroke(this.rColor);
          stroke(rectColor)
          noFill();
          strokeWeight(3);

          if (this.engine.numPres == 0 && this.bodyCount == 4) { // if no pres, hide rectangle
            stroke(this.bColor); // hide rect
            noFill();
            rect(this.x, this.y, this.diam, this.diam, this.diam / 8);
          } else {
            if (!minimalConfig) {
            rect(this.x, this.y+this.labelSpace, this.diam, this.diam, this.diam / 8);
            } else {
              rect(this.x, this.y, this.diam, this.diam, this.diam / 8);
            }
          }

          if ((this.y += this.skip) >= this.dHeight - (this.skip / 2)) {
            this.y = this.skip / 2;
            this.yCount++;
            if ((this.x += this.skip) >= this.offSet - (this.skip / 2)) this.x = this.skip / 2;
            this.xCount++;
          }

          // Once all of votes have been cast display the total for each body
          if (this.count1 == this.numCon - 1 && this.bodyCount < this.engine.numBodies) {
              this.bodyCount++;
              this.endBody = 1;
              if( this.bodyCount >= this.engine.numBodies) {
                this.userInputState = true;
              }
          }
          
        }

        // ----------------------------------------
          this.count1++;
      }
    }
  }

  /**
   * Adds text as label above chamber voting boxes
   * @param {*} labelText - the name of the voting body
   */
  configLabel(labelText) {
    push();
    textSize(22);
    noStroke();
    fill(this.tColor);
    textAlign(LEFT, TOP);
    text(labelText, 50, 0);
    pop();
  }

  /**
   * Immediately displays the voting results for the given engine configuration
   * @param {*} engineObj 
   */
  displayImmediateVotes(engineObj) {
    this.engine = engineObj;
    this.forUser = this.engine.forUser;

    // OC centers vote drawings based on total of voting bodies
    if (this.engine.numLegislativeBodies == 1) {
      this.numBodies = 3;
    } else if (this.engine.numLegislativeBodies == 2){
      this.numBodies = 4;
    }  else {
      this.numBodies = this.engine.numBodies;
    }

    //print('VISUAL CLASS numBodies = ' + this.numBodies);

    //for(let ix=0; ix < this.numBodies; ix++) {

    // Logic for House
    if (this.bodyCount == 0) {

      // Setup variables first time we pass through the first body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS logic for house bodyCount = ' + this.bodyCount);
        background(this.bColor);

        // Set number of voting memebers
        this.numCon = this.engine.numHouse;
        this.bodyLabel = 'HOUSE OF REPRESENTATIVES';

        //Set Demographics for each body
        // OC needed in this class to determine box colors
        this.numDem = round(this.numCon * this.engine.perDemHouse);
        this.numRep = round(this.numCon * this.engine.perRepHouse);
        this.numWild = round(this.numCon * this.engine.perIndHouse);

        // OC offset calculated differently between default and user config
        if (this.forUser)
          this.offSet = this.dWidth / (this.numBodies);
        else
          this.offSet = this.dWidth / (this.numBodies - 1);

        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt((this.offSet) * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // OC skip chambers when not needed
    if (this.bodyCount == 1 && this.engine.numLegislativeBodies == 1) {
      this.bodyCount += 2; // skip chambers 2-3
      //this.endBody = 1;
    } else if (this.bodyCount == 2 && this.engine.numLegislativeBodies == 2) {
      this.bodyCount++; // skip chamber 3
    }

    // Logic for Chamber 2
    if (this.bodyCount == 1) {
      strokeWeight(10);
      translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {

        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numHouse2;
        this.bodyLabel = 'SENATE';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemHouse2);
        this.numRep = round(this.numCon * this.engine.perRepHouse2);
        this.numWild = round(this.numCon * this.engine.perIndHouse2);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // Logic for Chamber 3
    if (this.bodyCount == 2) {
      strokeWeight(10);

      var translateVal = this.bodyCount;
      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }
      translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numSenate;
        this.bodyLabel = 'CHAMBER 3';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemSenate);
        this.numRep = round(this.numCon * this.engine.perRepSenate);
        this.numWild = round(this.numCon * this.engine.perIndSenate);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // console.log("con: " + this.numCon);
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }

    }

    //AB logic for VP if Senate needs a tiebreaker
    if (this.bodyCount == 3) {
      
      strokeWeight(10);

      var translateVal = this.bodyCount;

      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }

      translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }
      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        ///Set number of voting memebers
        this.numCon = this.engine.numVP;
        this.bodyLabel = 'VICE PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemVP);
        this.numRep = round(this.numCon * this.engine.perRepVP);
        this.numWild = round(this.numCon * this.engine.perIndVP);

        //Figure out how big to draw the circles and how far to space them out
        if (this.forUser)
          this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        else
          this.skip = floor(.65 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // Logic for President
    if (this.bodyCount == 4) {
      strokeWeight(10);

      var translateVal = this.bodyCount;

      // OC move translation to left when only 1 legislaive body
      if (this.engine.numLegislativeBodies == 1) {
        translateVal = this.bodyCount - 2;
      } else if (this.engine.numLegislativeBodies == 2) {
        translateVal = this.bodyCount - 1;
      }

      //translate(this.offSet * translateVal, 0);
      //translate(this.offSet * this.bodyCount, 0);

      if (this.forUser)
        translate(this.offSet * (translateVal), 0);
      else
        translate(this.offSet * (translateVal - 1), 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        // print('VISUAL CLASS bodyCount = ')

        // Set number of voting memebers
        if (this.engine.numPres != 0) {
          this.numCon = this.engine.numPres;
        } else { // when no pres, set numCon to 1 to allow continuation of drawing
          this.numCon = 1; 
        }
        this.bodyLabel = 'PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemPres);
        this.numRep = round(this.numCon * this.engine.perRepPres);
        this.numWild = round(this.numCon * this.engine.perIndPres);


        //Figure out how big to draw the circles and how far to space them out
        if (this.forUser)
          this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        else
          this.skip = floor(.65 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        // print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    for (let jx=0; jx < this.numCon; jx++) {
      if (this.count < this.numCon - 1 && this.count1 < 1) {
          this.testSize();
          this.count++;
      } else if (this.count >= this.numCon - 1) {
          this.bodyVote();
          this.count1++;
      }
    }
  }

  /**
   * Rotates loading image on screen where chamber vote boxes will be
   */
  rotLoadImage() {
    this.rot += 0.5;
    push();
    rectMode(CORNER);
    noStroke();
    this.pColor.setAlpha(255);
    tint(this.tColor);
    fill(this.bColor);

    translate(this.offSet / 2, this.dHeight / 2);
    rectMode(CENTER);
    rect(0, 0, 160, 160);
    rotate(PI / 180 * this.rot);
    imageMode(CENTER);
    image(this.loadingImage, 0, 0, 150, 150);
    //AB: small circle to cover rotating image after
    // console.log(this.numCon);
    if (this.count >= this.numCon - 2) {
      ellipse(0, 0, 160, 160);
    }
    pop();
  }

  /**
   * Rotate image on left side of screen
   */
  rotLoadImage2() {
    this.rot += 1.25;
    push();
    rectMode(CORNER);
    noStroke();
    this.pColor.setAlpha(255);
    tint(this.tColor);
    fill(this.bColor);

    translate(this.dWidth / 8, this.dHeight / 2);
    rectMode(CENTER);
    rect(0, 0, 160, 160);
    rotate(PI / 180 * this.rot);
    imageMode(CENTER);
    image(this.loadingImage, 0, 0, 150, 150);
    pop();
  }

  /**
   * Resets counts when passing to new body
   */
  resetCount() {
    //print('Resetting count');
    this.count = 0;
    this.count1 = 0;
    this.count2 = 0;
    this.countR = 0;
    this.xCount = 1;
    this.yCount = 1;
    this.yCountT = 1;
    this.moveArrow = 0;
  }

  /**
   * This function tests to see if the circles are being drawn off screen based on first pass of calculations
   */
  testSize() {
    for (var i = 0; i < 1; i++) {
      if ((this.y += this.skip) >= this.dHeight - (this.skip / 2)) {
        this.y = this.skip / 2;
        this.yCountT++;
        if ((this.x += this.skip) >= this.offSet - (this.skip / 2)) this.x = this.skip / 2;
        this.xCount++;
        //print('Y count = ' + yCount); // prints to consolde for testing
      }
    }
  }

  /**
   * Controls drawing the result of the vote
   */
  bodyVote() {
    fill(map(this.count1, 0, this.numCon, 0, 255));
    // reset variables if first pass thorugh function
    if (this.count1 < 1) {
      this.resetDraw();
      this.test = 1;
    }
    if (this.count1 < this.numCon) {
      this.stopVoteLogic();
      this.drawRect();
      // Once all of votes have been cast display the total for each body
      if (this.count1 == this.numCon - 1) {
        this.resultLogic();
      }
    }
  }

  /**
   * Draws squares to represent each member's vote.
   * Check marks indicate 'yay' vote. X's indicate 'nay' vote.
   * Outlined blank boxes indicate no votes required.
   */
  drawRect() {
    // let noVoteBool = false;
    var valAdjust = 75;
    var currentTransVal = 0;
    var currentPartyNum = 0;
    var rectColor;

    var numRepOrWild;
    if (this.forUser) 
      numRepOrWild = this.numRep;
    else
      numRepOrWild = this.numWild;

    if (this.test == 1) {
      this.countR = this.count1;
    } else if (this.test == 2) {
      this.countR = this.count2;
    }

    this.diam = this.skip * .8;

    // OC get the vote for this member (count1) of the body (bodyCount) from engine's calculation
    let vote = this.engine.allVotes[this.bodyCount][this.count1];

    // Party A is Voting
    if (this.countR < this.numDem) {
      // currentTransVal = this.tranVal - currentPartyNum * valAdjust; // party determines tranparency of rectangle
      rectColor = this.rColor;
    }
    // Party C is Voting
    else if (this.countR >= this.numDem && this.countR < this.numDem + numRepOrWild) {
      // currentPartyNum = this.partyNum + 1;
      // currentTransVal = this.tranVal - currentPartyNum * valAdjust;
      rectColor = this.rColor2;
    }
    // Party B is Voting
    else {
      // currentPartyNum = this.partyNum + 2;
      // currentTransVal = this.tranVal - currentPartyNum * valAdjust;
      rectColor = this.rColor3;
    }
    //AB: finding problem with x's
    // print("body #: " + bodyCount + " No Vote Bool: " + noVoteBool);
    //print("body #: " + this.bodyCount + "box #: " + this.count1 + " vote: " + vote);

    this.stopVoteChange(rectColor);

    // Square is Drawn for Each Vote
    rectMode(CENTER);

    if (this.bodyLabel == 'VICE PRESIDENT') {
      if (!this.forUser)
        this.y = this.y + (this.skip * .9);
      // y = y + skip;
      if (this.engine.vpVote == false) {
        // this.rColor.setAlpha(100);
        // stroke(this.rColor); //stroke(255, 100);
        //rectColor.setAlpha(100);
        stroke(rectColor);
        noFill();
        strokeWeight(3);
      }
      //ab for error checking
      //print('drawing VP square at' + this.x + " " + this.y);
    }

    // draws in a different shade for each voting party
    if (this.stopVoteBool == false) {
      noStroke();
      // this.rColor.setAlpha(currentTransVal);
      // fill(this.rColor);
      fill(rectColor);
    }

    // hide rect when no pres
    if (this.engine.numPres == 0 && this.bodyCount == 4) {
      stroke(this.bColor);
      noFill();
      rect(this.x, this.y, this.diam, this.diam, this.diam / 8);
    } else {
      rect(this.x, this.y, this.diam, this.diam, this.diam / 8);
    }

    // draws the X on squares that are "nay" votes
    if (vote == "nay" && this.stopVoteBool == false && !(this.bodyCount == 4 && this.engine.numPres == 0)) {
      fill(this.bColor);
      textSize(this.diam + 3);
      textAlign(CENTER, CENTER);
      textFont('Arial');
      text("x", this.x, this.y);
    }

    // draws check mark on squares that are "yay" votes
    if (vote == "yay" && this.stopVoteBool == false && !(this.bodyCount == 4 && this.engine.numPres == 0)) {
      let imgW = this.diam*0.8;
      let imgH = this.diam*0.9;
      image(this.checkImage, this.x-(imgW/2), this.y-(imgH/2), imgW, imgH);
    }

    if ((this.y += this.skip) >= this.dHeight - (this.skip / 2)) {
      this.y = this.skip / 2;
      this.yCount++;
      //print('Y count = ' + yCount);
      if ((this.x += this.skip) >= this.offSet - (this.skip / 2)) this.x = this.skip / 2;
      this.xCount++;
      //print('Y count = ' + yCount); // prints to consolde for testing
    }
  }

  /**
   * Stop vote logic before changing appearance when no vote is required
   */
  stopVoteLogic() {
    //AB if the vp vote is not needed, no vote is necessary
    if (this.bodyCount == 3 && this.engine.vpVote == false) {
      this.stopVoteBool = true;
    }
    //if the vp votes and it's a NO, then bill dies
    else if (this.bodyCount > 3 && this.engine.vpVote == true && this.engine.bodyPass[3] === false) {
      this.stopVoteBool = true;
    }
    //AB if the first or second body is not a pass,  bill dies thus preventing other bodies to vote
    //OC check that voting of the house or senate was already drawn to screen before checking bodyPass for it
    else if ((this.bodyCount >= 1 && this.engine.bodyPass[0] === false) || (this.bodyCount > 1 && this.engine.bodyPass[1] === false) 
      || (this.bodyCount > 2 && this.engine.bodyPass[2] === false)) {
      this.stopVoteBool = true;
    } else {
      this.stopVoteBool = false;
    }
  }

  /**
   * Appearance of squares changes to outlines when no vote is required
   */
  stopVoteChange(rectColor) {
    if (this.stopVoteBool == true) {
      stroke(rectColor);
      noFill();
      strokeWeight(3);
    } else {
      stroke(rectColor);
      noStroke();
    }
  }

  /**
   * Updates bodyCount and signals for user input state (buttons) to show on screen
   */
  resultLogic() {
    //Adds one to the count of how many bodies have voted and enters into user input state (buttons) if the vote is done.
    if (this.bodyCount < this.engine.numBodies) {
      this.bodyCount++;
      // print("VISUAL CLASS new body count: " + this.bodyCount);
    }

    if (this.bodyCount >= this.engine.numBodies) {
      //this.finalDisplayLogic();
      this.userInputState = true;
      // print('Final Stage');
    }

    this.endBody = 1;
  }

  /**
   * Resets draw coordinates and offset when passing to new body
   */
  resetDraw() {
    if (this.yCountT * this.skip >= this.offSet) {
      this.skip = this.offSet / (1.025 * this.xCount);
    }
    noStroke();
    fill(this.bColor);
    this.tranVal = 255;
    rectMode(CORNER);

    this.x = this.skip / 2;
    this.y = this.skip / 2;
    this.xCount = 1;
    this.yCount = 1;
    this.endBody = 0;
  }

  /**
   * Completely reset vars to draw for new configuration
   */
  completeReset() {
    this.ix = 0;
    this.bodyCount = 0;
    this.bodyPass = [];
    this.resetCount();
    this.resetDraw();
    this.userInputState = false;
  }


  /**
   * Displays text on screen for results of the voting with the default configuration
   * 
   * @param {DemocracyEngine} engine 
   * @param {Font} font 
   * @param {Color} colorOverlay
   */
  finalTextDisplayDefault(engine, font, colorOverlay) {
    let currentBodyLabel;

    let columnAmount = engine.numBodies - 1;
    let rowAmount = 4;

    let padY = 20;
    let padX = 10;
    let dispW = (this.dWidth / columnAmount);
    let dispH = (this.dHeight / rowAmount);

    var resBColor = color(colorOverlay); // color(0, 0, 0); // result overlay
    //column 1 to be yay/nay votes
    //column 2 to be body votes
    textFont(font);

    textAlign(LEFT, TOP);
    //fill(color("#faf4d3"));
    noStroke();
    rectMode(CORNER);
    resBColor.setAlpha(200);
    fill(resBColor);
    rect(0, 0, this.dWidth, this.dHeight);
    textStyle(NORMAL);


    for (let i = 0; i < engine.numBodies; i++) {
      fill(this.tColor);
      // OC adjust placement of text based on total number of voting bodies
      var ip = i;

      if (i == 0) {
        currentBodyLabel = 'HOUSE';
      } else if (i == 1) {
        currentBodyLabel = 'SENATE';
        if (engine.numLegislativeBodies == 1) { // only 1 legislative chamber
          continue; // OC skip results if only 1 legislative body
        }
      } else if (i == 2) {
        currentBodyLabel = 'CHAMBER 3';
        ip = i - 0.65;
        if (engine.numLegislativeBodies <= 2) {
            continue;
          }
      } else if (i == 3) {
        currentBodyLabel = 'VICE PRESIDENCY';
        ip = i - 0.2;
      } else if (i == 4) {
        currentBodyLabel = 'PRESIDENCY';
        ip = i - 0.2;
      }

      // show text on screen
      if (i < engine.votingBodyCounts.length) {
        // print("i = " + i + " and current body label = " + currentBodyLabel);

        if (currentBodyLabel == 'PRESIDENCY') {
          textSize(22);
          text(currentBodyLabel, (ip - 1) * dispW + padX, padY, dispW, dispH);
          textAlign(LEFT);

          if (engine.stopVoteArr[i] == false) { // president voted, so display yes/no counts
            textSize(20);
            text("\n\nVOTES \n", (ip - 1) * dispW + padX, padY, dispW, dispH);
            textSize(16);
            text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", (ip - 1) * dispW + padX, padY, dispW, dispH);
            textSize(20);
            text('\n' + engine.voteResults[i], (ip - 1) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // president did not vote, so only adjust placement of text
            textSize(20);
            text('\n\n' + engine.voteResults[i], (ip - 1) * dispW + padX, padY, dispW - padX, dispH);
          }
        } else if (currentBodyLabel == 'VICE PRESIDENCY') {
          textSize(22);
          text(currentBodyLabel, ip * dispW + padX, this.dHeight / 2 + 20, dispW, dispH);

          if (engine.stopVoteArr[i] == false && engine.vpVote == true) { // vp voted, so display yes/no counts
            textSize(20);
            text("\n\nVOTES \n", ip * dispW + padX, this.dHeight / 2, dispW, dispH);
            textSize(16);
            text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", ip * dispW + padX, this.dHeight / 2, dispW - padX, dispH);
            textSize(20);
            text('\n' + engine.voteResults[i], (ip) * dispW + padX, this.dHeight * (3 / 4), dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n' + engine.voteResults[i], ip * dispW + padX, this.dHeight / 2, dispW - padX, dispH);
          }
        } else {
          textSize(22);
          text(currentBodyLabel, ip * dispW + padX, padY, dispW - padX, dispH);

          if (engine.stopVoteArr[i] == false) { // body voted, so display yes/no counts
            textSize(20);
            text("\n\nVOTES \n", ip * dispW + padX, padY, dispW - padX, dispH);
            textSize(16);
            text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", ip * dispW + padX, padY, dispW, dispH);
            textSize(20);
            text('\n' + engine.voteResults[i], ip * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n' + engine.voteResults[i], ip * dispW + padX, padY, dispW - padX, dispH);
          }
        }
      }
    }
    this.displayContext(engine);
  }

  /**
   * Displays text on screen for results of the voting with the user's configuration
   * 
   * @param {DemocracyEngine} engine 
   * @param {Font} font 
   */
  finalTextDisplayUser(engine, font, colorOverlay, resIX) {
    this.resIX = resIX;
    let currentBodyLabel;

    let columnAmount = this.numBodies;

    let padY = 20;
    let padX = 20;
    let dispW = (this.dWidth / columnAmount);
    let dispH = this.dHeight;

    var resBColor = color(colorOverlay);
    textFont(font);

    textAlign(LEFT, TOP);
    noStroke();
    rectMode(CORNER);
    resBColor.setAlpha(200);
    fill(resBColor);
    rect(0, 0, this.dWidth, this.dHeight);
    textStyle(NORMAL);

    for (let i = 0; i < engine.numBodies; i++) {
      fill(this.tColor);

      // OC adjust placement of text based on total number of voting bodies
      var ip;
      if (engine.numLegislativeBodies == 1) 
        ip = i - 2;//ip = i - 1;
      else if (engine.numLegislativeBodies == 2)
        ip = i - 1;
      else
        ip = i;

      if (i == 0) {
        currentBodyLabel = 'CHAMBER 1';

      } else if (i == 1) {
        currentBodyLabel = 'CHAMBER 2';
        if (engine.numLegislativeBodies == 1) { // only 1 legislative chamber
          continue; // OC skip results if only 1 legislative body
        }

      } else if (i == 2) {
          currentBodyLabel = 'CHAMBER 3';
        if (engine.numLegislativeBodies <= 2) {
          continue; // OC skip if either 1 legislative body or only 2 
          // OC for 2, it uses legislative chamber 3 as the senate rather than this one
        }

      } else if (i == 3) {
        currentBodyLabel = 'VICE PRESIDENCY';

      } else if (i == 4) {
        currentBodyLabel = 'PRESIDENCY';
        if (this.engine.numPres == 0) {
          textSize(22);
          text("NO PRESIDENCY", (ip) * dispW + padX, padY, dispW, dispH); // display this body label
          continue;
        }
      }

      // show text on screen
      if (i < engine.votingBodyCounts.length) {
        // print("i = " + i + " and current body label = " + currentBodyLabel);

        if (currentBodyLabel == 'PRESIDENCY') {
          textSize(22);
          text(currentBodyLabel, (ip) * dispW + padX, padY, dispW, dispH); // display this body label
          textAlign(LEFT);

          if (engine.stopVoteArr[i] == false) { // president voted, so display yes/no counts
            textSize(20);
            text("\n\n\nVOTES \n", (ip) * dispW + padX, padY, dispW, dispH);
            textSize(16);
            text("\n\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", (ip) * dispW + padX, padY);
            textSize(20);
            text('\n\n' + engine.voteResults[i], (ip) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // president not voted, so adjust placement of text
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], (ip) * dispW + padX, padY, dispW - padX, dispH);
          }
        } else if (currentBodyLabel == 'VICE PRESIDENCY') {
          textSize(22);
          text(currentBodyLabel, (ip) * dispW + padX, padY, dispW, dispH);

          if (engine.stopVoteArr[i] == false && engine.vpVote == true) { // vp voted, so display yes/no counts
            textSize(20);
            text("\n\n\nVOTES \n", (ip) * dispW + padX, padY, dispW, dispH);
            textSize(16);
            text("\n\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", (ip) * dispW + padX, padY);
            textSize(20);
            text('\n\n' + engine.voteResults[i], (ip) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], (ip) * dispW + padX, padY, dispW - padX, dispH);
          }
        } else {
          textSize(22);
          if (currentBodyLabel == 'CHAMBER 1' || currentBodyLabel == 'CHAMBER 2' ) {
            ip = i;
          }
          text(currentBodyLabel, (ip) * dispW + padX, padY, dispW - padX, dispH);

          if (engine.stopVoteArr[i] == false) { // body voted, so display yes/no counts
            textSize(20);
            text("\n\n\nVOTES \n", (ip) * dispW + padX, padY, dispW - padX, dispH);
            textSize(16);
            text("\n\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", (ip) * dispW + padX, padY);
            textSize(20);
            text('\n\n' + engine.voteResults[i], (ip) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], (ip) * dispW + padX, padY, dispW - padX, dispH);
          }
        }
      }
    }

    // draw large box to indicate overall result
    push();
    textAlign(LEFT, TOP);
    textSize(34);
    text(engine.decisionTxt, padX, height/2 - padY, this.dWidth);
    stroke(this.tColor);
    strokeWeight(2);
    fill(this.tColor);
    let boxW = 300;
    let boxH = 300;
    rect(padX, height/2 + (padY*2), boxW, boxH, 10);

    if (engine.billPass == true) { // check mark if bill passed, empty box if not passed
      image(this.checkImage, padX+22, height/2 + (padY*2), boxW*0.85, boxH-10);
    } else {
      fill(this.bColor);
      textSize(boxW*1.5);
      textAlign(CENTER, CENTER);
      textFont('Arial');
      text("x", padX+(boxW/2), height/2 + (padY*2) + (boxH/2));
    }
    this.percentageGraphs((1/2) * width, (3/4)*width, (3/5)*height);
    pop();
   //this.displayContext(engine);
  }

  /**
   * Displays text on screen about historical acts
   * @param {*} engine 
   */
  displayContext(engine) {
    var bills = engine.historicalActs; // array of 10 bills from govt configuration
    // if (engine.forUser) {
    //   var bill = bills[this.resIX];
    // } else {
      let ran = floor(random(10)); // get an integer 0-9
      var bill = bills[ran]; // get random bill
    // }
    push();
    let padY = 40;
    let padX = 10;
    let offsetY = 0;
    if (this.forUser) {
      offsetY = 20;
    }
    textSize(22);
    text("BILL VOTED ON", padX, height/2 + offsetY);
    textSize(20);
    text(bill.title, padX, padY + height/2 + offsetY);
    textSize(16);
    if (engine.forUser) {
      text(bill.description, padX, (padY * 2) + height/2 + offsetY, width - padX);
    } else {
      text(bill.description, padX, (padY * 2) + height/2 + offsetY, width - padX - this.offSet);
    }
    pop();

  }

}