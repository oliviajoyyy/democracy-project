

class voteVisual {

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

// colors
bColor = "#012244";
pColor = "#3c1b36";

tranVal = 255;
// let fadeOpac = 255;
partyNum = 0;
moveArrow = 0;

rot = 0;

stopVoteBool = false;
stopVoteCount = 0;
stopVoteArr = [];

numDem;
numRep;
numWild;

// for canvas
dWidth;
dHeight;

engine;

forUser;

allVotes = [];

finalDisplayBool = false; 

    constructor (img) {
        this.loadingImage = img;
        // this.engine = e;
        // this.forUser = usrBool;
        // console.log("av: " + av);
        // this.allVotes = av;
    }

    displayVoting(e, usrBool, av) {
        this.forUser = usrBool;
        this.engine = e;

        //console.log("in vote visual class");
    // Logic for House
    if (this.bodyCount == 0) {

    // Setup variables first time we pass through the first body
    if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
      this.test = 0;
      print('VISUAL CLASS logic for house bodyCount = ' + this.bodyCount);
     // print(this.bodyCount);
      //background(color(this.bColor));

    //   //maps stress index onto percentage effecting yay/nay vote.
    //   this.stressMap = map(this.stress, this.stressLow, this.stressHigh, 0, 2);
    //   print('Voter Stress = ' + this.stressMap);

    //   this.stressPlanetMap = map(this.stressPlanet, this.stressPlanetLow, this.stressPlanetHigh, 0, 2);
    //   print('Planet Stress = ' + this.stressPlanetMap)

    //   //create a stress offset that will effect congress' likelyhood of passing legislation to create change
    //   this.stressOffset = (this.stressPlanetMap + this.stressMap) / 2;

      // Set number of voting memebers
      this.numCon = this.engine.numHouse;
      console.log("e's numHouse: " + this.engine.numHouse);
      this.bodyLabel = 'HOUSE OF REPRESENTATIVES';

      //Set Demographics for each body
      this.numDem = round(this.numCon * this.engine.perDemHouse);
      this.numRep = round(this.numCon * this.engine.perRepHouse);
      this.numWild = round(this.numCon * this.engine.perIndHouse);


      if (this.forUser)
        this.offSet = this.dWidth / (this.engine.numBodies);
      else
      this.offSet = this.dWidth / (this.engine.numBodies - 1);

      //Figure out how big to draw the circles and how far to space them out
      this.skip = floor(.97 * (sqrt((this.offSet) * this.dHeight / this.numCon)));
      print("offset = " + this.offSet);
      print("dheigt = " + this.dHeight);
      print("numCon = " + this.numCon);
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

      print('vv Count = ' + this.count); //fortesting
      print('vv Count1 = ' + this.count1); //fortesting
      print('vv Count2 = ' + this.count2); //fortesting
    }

  }

  //AB logic for VP if Senate needs a tiebreaker
  if (this.bodyCount == 2) {
    //print("VISUAL CLASS votingBodyCounts[1][0]= " + this.votingBodyCounts[1][0] + "votingBodyCounts[1][1] = " + this.votingBodyCounts[1][1]);



    // if (votingBodyCounts[1][0] == votingBodyCounts[1][1] && vpVote == true) {
    //   vpVote = true;
    // } else {
    //   vpVote = false;
    // }

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

    this.rotLoadImage();
    this.testSize();
    this.count += 2; // OC note: count is incremented once every draw loop until it reaches num in this body
    print('vv Count = ' + this.count); //fortesting
    print('vv Count1 = ' + this.count1); //fortesting
    
  } else if (this.count >= this.numCon - 1) {
    
    //for (let i = 0; i < this.engine.numBodies; i++) { // OC note: < numCon draws all squares at once for each body
      this.bodyVote();
      this.count1++;
    //}
    
    //print ('Count1 = ' + count1); //fortesting
    //print ('skip * Y = ' + (yCountT * skip));
  }

    }

    /**
   * loading image function, rotates image on current calculation
   */
  rotLoadImage() {
    this.rot += 0.5;
    push();
    rectMode(CORNER);
    noStroke();
    fill(this.bColor);

    translate(this.offSet / 2, this.dHeight / 2);
    rectMode(CENTER);
    rect(0, 0, 160, 160);
    rotate(PI / 180 * this.rot);
    imageMode(CENTER);
    image(this.loadingImage, 0, 0, 150, 150);
    //AB: small circle to cover rotating image after
    console.log(this.numCon);
    if (this.count >= this.numCon - 3) {
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
   * Start the body vote and Shows result of the vote
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
   * Diplays Voting Results
   */
  drawRect() {
    let noVoteBool = false;
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

    let vote = this.engine.allVotes[this.bodyCount][this.count1];


    //Democrat is Voting
    if (this.countR < this.numDem) {
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;


      //let vote = random(0, 1);
      //    //print vote info to console for testing
      //    print('Vote =' + vote);//for testing
      //    print ('stress offset ' + stressOffset);//for testing
      //    var voteDemTest = demYaythresh*stressOffset; //for testing
      //    print('vote dem offset' + voteDemTest);//for testing

      

    //   if (vote <= this.demYaythresh * this.stressOffset) {
    //     noVoteBool = false;
    //     this.yay++;
    //   } else {
    //     noVoteBool = true;
    //     this.nay++;
    //   }

    }
    //Independent is Voting
    else if (this.countR >= this.numDem && this.countR < this.numDem + numRepOrWild) {
      currentPartyNum = this.partyNum + 1;
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;


    //   let vote = random(0, 1);

    //   //    //print vote info to console for testing
    //   //    print('Vote =' + vote);//for testing
    //   //    print ('stress offset ' + stressOffset);//for testing
    //   //    var voteRepTest = repYaythresh*stressOffset; //for testing
    //   //    print('vote Rep offset' + voteRepTest);//for testing

    //   //is random number greater than threshold for yes?
    //   if (vote <= this.repYaythresh * this.stressOffset) {
    //     noVoteBool = false;
    //     this.yay++;
    //   } else {
    //     noVoteBool = true;
    //     this.nay++;
    //   }

    }
    //Republican is Voting
    else {
      currentPartyNum = this.partyNum + 2;
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;
    //   let vote = random(0, 1);
    //   //print('Vote =' + vote); //testing
    //   if (vote <= this.indYaythresh * this.stressOffset) {
    //     noVoteBool = false;
    //     this.yay++;
    //   } else {
    //     noVoteBool = true;
    //     this.nay++;
    //   }
      //made for just two bodies
      // if (stopVoteCount == 2) {
      //     resultLogic();
      // }
    }
    //AB: finding problem with x's
    // print("body #: " + bodyCount + " No Vote Bool: " + noVoteBool);
    print("body #: " + this.bodyCount + "box #: " + this.count1 + " vote: " + vote);


    // Square is Drawn for Each Vote
    rectMode(CENTER);

    if (this.bodyLabel == 'VICE PRESIDENT') {
      if (!this.forUser)
        this.y = this.y + (this.skip*.9);
      // y = y + skip;
      if (this.engine.vpVote == false) {
        stroke(255, 100);
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

    //this.stopVoteChange();

    //creates a different shade for each voting party
    if (this.stopVoteBool == false) {
      noStroke();
      fill(255, currentTransVal);
    }
    console.log("vote Visual will draw a rect");
    rect(this.x, this.y, this.diam, this.diam, this.diam / 8);
    //creates the x on squares that are "no votes"
    if (vote == "nay") {
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
    //this.storeBodyVotes();
  }

  /**
   * Stop vote logic before changing appearance when no vote is required
   */
  stopVoteLogic() {
    //AB if the vp vote is not needed, no vote is necessary
    if (this.bodyCount == 2 && this.engine.vpVote == false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    }
    //if the vp votes and it's a NO, then bill dies
    else if (this.engine.vpVote == true && this.bodyPass[2] === false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    }
    //AB if the first or second body is not a pass,  bill dies thus preventing other bodies to vote
    else if (this.bodyPass[0] === false || this.bodyPass[1] === false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    } else {
      this.stopVoteBool = false;
    }
  }

    /**
   * appearance of squares changes to outlines when no vote is required
   */
    stopVoteChange() {
        if (this.stopVoteBool == true) {
          this.stopVoteArr[this.bodyCount] = true; // not used
          stroke(255, 100);
          noFill();
          strokeWeight(3);
          // stopVoteBool == false;
        } else {
          fill(this.bColor);
          noStroke();
          this.stopVoteArr[this.bodyCount] = false; // not used
    
        }
      }

      resultLogic() {
         //Adds one to the count of how many bodies have voted and enters into user input state (buttons) if the vote is done.
    if (this.bodyCount < this.engine.numBodies) {
        this.bodyCount++;
        print("VISUAL CLASS new body count: " + this.bodyCount);
      }
  
      if (this.bodyCount >= this.engine.numBodies) {
        //this.finalDisplayLogic();
        this.finalDisplayBool = true; 
        print('Final Stage');
      }
  
      
      this.endBody = 1;
    }


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
        this.yay = 0;
        this.nay = 0;
        this.xCount = 1;
        this.yCount = 1;
        this.endBody = 0;
      }
    


}