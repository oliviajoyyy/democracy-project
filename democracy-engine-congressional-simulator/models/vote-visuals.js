/**
 * file: vote-visual.js
 * This class is used for drawing the result of the democracy engine to the screen.
 * Rectangles represent each vote and text describes the final result.
 */

class VoteVisual {

  loadingImage;

  //which body is voting
  bodyCount = 0;
  bodyPass = [];

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
  // skipR; strange artifact from Rhonda

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
  pColor; // = "#3c1b36"; // header color
  tColor; // text color
  rColor; // rect and loading image color

  tranVal = 255;
  // let fadeOpac = 255;
  partyNum = 0;
  moveArrow = 0;

  rot = 0;

  stopVoteBool = false;

  numDem;
  numRep;
  numWild;

  // for canvas
  dWidth;
  dHeight;

  engine; // OC engine object to draw for

  forUser; // OC bool to indicate if the govt config was set by the user
  userInputState = false; // OC boolean to indicate when to show buttons for next user input for engine config

  /**
   * Sets loading image and background color properties
   * @param {image} img - loading image bitmap
   * @param {color} bK - color for background
   * @param {color} pK - a second color
   * @param {color} tK - text color
   * @param {color} rK - rectangle color
   */
  constructor(img, bK, pK, tK, rK) {
    this.loadingImage = img;
    this.bColor = color(bK);
    this.pColor = color(pK);
    this.tColor = color(tK);
    this.rColor = color(rK);
  }

  /**
   * Draws boxes to screen to visualize voting results
   * @param {DemocracyEngine} engineObj - the engine object to draw the votes for
   */
  displayVoting(engineObj) {
    this.engine = engineObj;
    this.forUser = this.engine.forUser;

    // Logic for House
    if (this.bodyCount == 0) {

      // Setup variables first time we pass through the first body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('VISUAL CLASS logic for house bodyCount = ' + this.bodyCount);
        print(this.bodyCount);
        background(this.bColor);

        // Set number of voting memebers
        this.numCon = this.engine.numHouse;
        this.bodyLabel = 'HOUSE OF REPRESENTATIVES';

        //Set Demographics for each body
        // OC needed in this class to determine box transparency
        this.numDem = round(this.numCon * this.engine.perDemHouse);
        this.numRep = round(this.numCon * this.engine.perRepHouse);
        this.numWild = round(this.numCon * this.engine.perIndHouse);

        // OC offset calculated differently between default and user config
        if (this.forUser)
          this.offSet = this.dWidth / (this.engine.numBodies);
        else
          this.offSet = this.dWidth / (this.engine.numBodies - 1);

        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt((this.offSet) * this.dHeight / this.numCon)));
        print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    //Logic for Senate
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
        print('VISUAL CLASS bodyCount = ')
        print(this.bodyCount);

        ///Set number of voting memebers
        this.numCon = this.engine.numSenate;
        this.bodyLabel = 'SENATE';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.engine.perDemSenate);
        this.numRep = round(this.numCon * this.engine.perRepSenate);
        this.numWild = round(this.numCon * this.engine.perIndSenate);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        print('v Count = ' + this.count); //fortesting
        print('v Count1 = ' + this.count1); //fortesting
        print('v Count2 = ' + this.count2); //fortesting
      }

    }

    //AB logic for VP if Senate needs a tiebreaker
    if (this.bodyCount == 2) {

      strokeWeight(10);
      translate(this.offSet * this.bodyCount, 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }
      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('VISUAL CLASS bodyCount = ')
        print(this.bodyCount);

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
        print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    //Logic for President
    if (this.bodyCount == 3) {
      strokeWeight(10);

      if (this.forUser)
        translate(this.offSet * (this.bodyCount), 0);
      else
        translate(this.offSet * (this.bodyCount - 1), 0);

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('VISUAL CLASS bodyCount = ')
        print(this.bodyCount);

        // Set number of voting memebers
        this.numCon = this.engine.numPres;
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
        print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;
      }
    }

    // Need to make sure we are not over our number of congressional body numCon and readjusts skip if too big
    if (this.count < this.numCon - 1 && this.count1 < 1) {

      for (let i = 0; i < 3; i++) { // OC loading image stays on screen for less time it used to
        this.rotLoadImage();
        this.testSize();
        this.count++;
        // print('v Count = ' + this.count); //fortesting
        // print('v Count1 = ' + this.count1); //fortesting
      }

    } else if (this.count >= this.numCon - 1) {

      for (let i = 0; i < 3; i++) { // OC draws 3 boxes every draw loop, drawing performace improved
        this.bodyVote();
        this.count1++;
        //print ('Count1 = ' + count1); //fortesting
        //print ('skip * Y = ' + (yCountT * skip));
      }

    }

  }

  /**
   * Rotates loading image on screen
   */
  rotLoadImage() {
    this.rot += 0.5;
    push();
    rectMode(CORNER);
    noStroke();
    this.rColor.setAlpha(255);
    tint(this.rColor);
    fill(this.bColor);

    translate(this.offSet / 2, this.dHeight / 2);
    rectMode(CENTER);
    rect(0, 0, 160, 160);
    rotate(PI / 180 * this.rot);
    imageMode(CENTER);
    image(this.loadingImage, 0, 0, 150, 150);
    //AB: small circle to cover rotating image after
    console.log(this.numCon);
    if (this.count >= this.numCon - 2) {
      ellipse(0, 0, 160, 160);
    }
    pop();
  }

  /**
   * resets counts when passing to new body
   */
  resetCount() {
    print('Resetting count');
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
   * Shows result of the vote
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
   * Draws all votes as squares
   */
  drawRect() {
    // let noVoteBool = false;
    var valAdjust = 75;
    var currentTransVal = 0;
    var currentPartyNum = 0;

    var numRepOrWild;
    if (this.forUser) // OC forUser: bool - true if engine is running for user config, false if running default config
      numRepOrWild = this.numRep;
    else
      numRepOrWild = this.numWild;

    if (this.test == 1) {
      this.countR = this.count1;
    } else if (this.test == 2) {
      this.countR = this.count2;
    }

    this.diam = this.skip * .8;
    this.stopVoteChange();

    // OC get the vote for this member (count1) of the body (bodyCount) from engine's calculation
    let vote = this.engine.allVotes[this.bodyCount][this.count1];


    //Democrat is Voting
    if (this.countR < this.numDem) {
      currentTransVal = this.tranVal - currentPartyNum * valAdjust; // party determines tranparency of rectangle
    }
    //Independent is Voting
    else if (this.countR >= this.numDem && this.countR < this.numDem + numRepOrWild) {
      currentPartyNum = this.partyNum + 1;
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;
    }
    //Republican is Voting
    else {
      currentPartyNum = this.partyNum + 2;
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;
    }
    //AB: finding problem with x's
    // print("body #: " + bodyCount + " No Vote Bool: " + noVoteBool);
    //print("body #: " + this.bodyCount + "box #: " + this.count1 + " vote: " + vote);


    // Square is Drawn for Each Vote
    rectMode(CENTER);

    if (this.bodyLabel == 'VICE PRESIDENT') {
      if (!this.forUser)
        this.y = this.y + (this.skip * .9);
      // y = y + skip;
      if (this.engine.vpVote == false) {
        this.rColor.setAlpha(100);
        stroke(this.rColor); //stroke(255, 100);
        noFill();
        strokeWeight(3);
      }
      //ab for error checking
      // print('drawing VP square at' + x + " " + y);
    }

    // if (bodyCount == 1) {
    //   // simulate vp tiebreaker vote
    //   yay = 50;
    //   nay = 50;
    // }

    //creates a different shade for each voting party
    if (this.stopVoteBool == false) {
      noStroke();
      this.rColor.setAlpha(currentTransVal);
      fill(this.rColor);
      //fill(255, currentTransVal);
    }

    rect(this.x, this.y, this.diam, this.diam, this.diam / 8);

    //creates the x on squares that are "no votes"
    if (vote == "nay" && this.stopVoteBool == false) {
      fill(this.bColor);
      textSize(this.diam + 3);
      textAlign(CENTER, CENTER);
      textFont('Arial');
      text("x", this.x, this.y);
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
    if (this.bodyCount == 2 && this.engine.vpVote == false) {
      this.stopVoteBool = true;
      // this.stopVoteCount++; // used in the engine, not for drawing
      console.log("stop vote logic 1"); // for testing
    }
    //if the vp votes and it's a NO, then bill dies
    else if (this.engine.vpVote == true && this.engine.bodyPass[2] === false) {
      this.stopVoteBool = true;
      // this.stopVoteCount++;
      console.log("stop vote logic 2"); // for testing
    }
    //AB if the first or second body is not a pass,  bill dies thus preventing other bodies to vote
    //OC check that voting of the house or senate was already drawn to screen before checking bodyPass for it
    else if ((this.bodyCount >= 1 && this.engine.bodyPass[0] === false) || (this.bodyCount > 1 && this.engine.bodyPass[1] === false)) {
      this.stopVoteBool = true;
      // this.stopVoteCount++;
      console.log("stop vote logic 3"); // for testing
    } else {
      this.stopVoteBool = false;
      console.log("stop vote logic 4"); // for testing
    }
  }

  /**
   * appearance of squares changes to outlines when no vote is required
   */
  stopVoteChange() {
    if (this.stopVoteBool == true) {
      this.rColor.setAlpha(100);
      stroke(this.rColor); //stroke(255, 100);
      noFill();
      strokeWeight(3);
      // stopVoteBool == false;
    } else {
      fill(this.bColor);
      noStroke();

    }
  }

  /**
   * Updates bodyCount and signals for user input state (buttons) to show on screen
   */
  resultLogic() {
    // //padding & offsets for text display
    // var votePadX = this.dWidth / 4;
    // var votePadY = this.dHeight / 4;
    // var voteOutcomePosY = this.votePadY * 3;

    //Adds one to the count of how many bodies have voted and enters into user input state (buttons) if the vote is done.
    if (this.bodyCount < this.engine.numBodies) {
      this.bodyCount++;
      print("VISUAL CLASS new body count: " + this.bodyCount);
    }

    if (this.bodyCount >= this.engine.numBodies) {
      //this.finalDisplayLogic();
      this.userInputState = true;
      print('Final Stage');
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

    //AB: removed this rect b/c it covers vp or president during logic
    // rect(0, 0, offSet, dHeight);

    this.x = this.skip / 2;
    this.y = this.skip / 2;
    // this.yay = 0;
    // this.nay = 0;
    this.xCount = 1;
    this.yCount = 1;
    this.endBody = 0;
  }


  /**
   * Displays text on screen for results of the voting with the default configuration
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

    // let dispX = 0 + padX;
    // let dispY = 0 + padY;

    var resBColor = color(colorOverlay); // color(0, 0, 0); // result overlay
    // let decisionText = "";
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


    //NEED TO CHANGE LATER FOR MORE THAN 3 BODIES
    for (let i = 0; i < engine.numBodies; i++) {
      fill(this.tColor);
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
            textSize(20);
            text('\n' + engine.voteResults[i], (i - 1) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // president did not vote, so only adjust placement of text
            textSize(20);
            text('\n\n' + engine.voteResults[i], (i - 1) * dispW + padX, padY, dispW - padX, dispH);
          }
        } else if (currentBodyLabel == 'VICE PRESIDENCY') {
          textSize(22);
          text(currentBodyLabel, i * dispW + padX, this.dHeight / 2, dispW, dispH);

          if (engine.stopVoteArr[i] == false && engine.vpVote == true) { // vp voted, so display yes/no counts
            textSize(20);
            text("\n\nVOTES \n", i * dispW + padX, this.dHeight / 2, dispW, dispH);
            textSize(16);
            text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", i * dispW + padX, this.dHeight / 2, dispW - padX, dispH);
            textSize(20);
            text('\n' + engine.voteResults[i], (i) * dispW + padX, this.dHeight * (3 / 4), dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n' + engine.voteResults[i], i * dispW + padX, this.dHeight / 2, dispW - padX, dispH);
          }
        } else {
          textSize(22);
          text(currentBodyLabel, i * dispW + padX, padY, dispW - padX, dispH);

          if (engine.stopVoteArr[i] == false) { // body voted, so display yes/no counts
            textSize(20);
            text("\n\nVOTES \n", i * dispW + padX, padY, dispW - padX, dispH);
            textSize(16);
            text("\n\n\n\nYES: " + engine.votingBodyCounts[i][0] + "\nNO: " + engine.votingBodyCounts[i][1] + "\n ", i * dispW + padX, padY, dispW, dispH);
            textSize(20);
            text('\n' + engine.voteResults[i], i * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n' + engine.voteResults[i], i * dispW + padX, padY, dispW - padX, dispH);
          }
        }
      }
      // changeText(engine.decisionTxt); // change final decision text at bottom of screen
    }
  }

  /**
   * Displays text on screen for results of the voting with the user's configuration
   * @param {DemocracyEngine} engine 
   * @param {Font} font 
   */
  finalTextDisplayUser(engine, font, colorOverlay) {
    let currentBodyLabel;

    let columnAmount = engine.numBodies;
    // let rowAmount = 4;

    let padY = 20;
    let padX = 20;
    let dispW = (this.dWidth / columnAmount);
    let dispH = this.dHeight;

    // let dispX = 0 + padX;
    // let dispY = 0 + padY;

    var resBColor = color(colorOverlay);
    // let decisionText = "";
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


    //NEED TO CHANGE LATER FOR MORE THAN 3 BODIES
    for (let i = 0; i < engine.numBodies; i++) {
      fill(this.tColor); //fill(255);
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
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], (i) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
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
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], (i) * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
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
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], i * dispW + padX, this.dHeight / 4, dispW - padX, dispH);
          } else { // did not vote
            textSize(20);
            text('\n\n\n' + engine.voteResults[i], i * dispW + padX, padY, dispW - padX, dispH);
          }
        }
      }
    }

  }

}