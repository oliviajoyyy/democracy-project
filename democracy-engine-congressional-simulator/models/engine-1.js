//
// class for the democacy engine
//

class DemocracyEngine {

  //******These Can be Changed by User*********

//Voter Stress Variables
//assumes a stress level 0-10, stress level 5 is neither stressed nor not stressed and does not change likelihood of yay/nay vote.  Change stressLow & stressHigh to reflect sensor values.  
stressSensorval = 5; //connect this to sensor reading
stressLow = 0; //change this to the low stress minimum
stressHigh = 10; //change this to the low stress masimum

//Planet Stress Variables
//assumes a stress level 0-10, stress level 5 is neither stressed nor not stressed and does not change likelihood of yay/nay vote.  Change stressLow & stressHigh to reflect sensor values.  
stressPlanet = 5; //connect this to sensor reading
stressPlanetLow = 0; //change this to the low stress minimum
stressPlanetHigh = 10; //change this to the low stress masimum

//Offset of combined stress levels that will increase likelyhood of yes vote on any given bill (state change)
stressOffset;

//Number voting members
numHouse = 435
numSenate = 100;
numPres = 1;
numVP = 1;

//Demographics of House as decimal percentages 1 = 100%
perDemHouse = 0.505;
perRepHouse = 0.485;
perIndHouse = 0.00;

//Demographics of Senate as decimal percentages 1 = 100%
perDemSenate = 0.48;
perRepSenate = 0.50;
perIndSenate = 0.02;

//Demographics of President as decimal percentages 1 = 100%
perDemPres = 1.0;
perRepPres = 0.0;
perIndPres = 0.0;

perDemVP = 1.0;
perRepVP = 0.0;
perIndVP = 0.0;

//supermajority Cutoff for override of presidential veto
superThresh = 0.67;
perPass = .5;

//Historical Likelihood of party affiliation & likelihood of 'yay' vote
demYaythresh = 0.7;
repYaythresh = 0.3;
indYaythresh = 0.5;

//How Many Voting Bodies (house, senate, president = 3) *see to DO at top of code
numBodies = 4;
//defNumBody;//delete?

//******These are NOT user determined*********

//We will use these in the setup function to map the sensor value to stress index
stress = this.stressSensorval;
stressMap;
stressPlanetMap;

//which body is voting
bodyCount = 0;
bodyPass = [];

//The number of voting memebers for each body
numCon;

//initialize tally of votes
yay = 0;
nay = 0;
demNayCount;
demYayCount;
repNayCount;
repYayCount;
votingBodyCounts = []; // 2D array
// [[chamber1 yes, chamber1, no], [chamber2 yes, chamber2 no], [vp yes, vp no], [pres yes, pres no]]
superThreshIndex = [];

//

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

//how many times has the user run the vote in a signle session
passCount = 0; //artifact from Rhonda

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
vpVote = false;

// for canvas
dWidth;
dHeight;

numDem;
numRep;
numWild;

loadingImage;

// forUser: bool - true if engine is running for user configuration, false if running for original config
forUser;

// OC: finalDisplayBool - will be set true when ready to display calcuation results outside of class
// OC: signal used to determine when finalDisplay() runs (finalDisplay funct is in the scenes)
finalDisplayBool = false;

voteResults = ["","","",""];
// OC: stores decisions for each body (bill approved/not): [chamber1, chamber2, vp, pres]

decisionTxt = ""; // OC: final decision string

  /**
   * Initialize democracy engine object
   * @param {image} img - loading image that spins
   */
  constructor (img) {
    this.loadingImage = img;
  }

  /**
   * Logic below is setup for user/origin congressional configuration
   * @param {boolean} forUserBool - true for running logic for user configuration, false for running original configuration
   */
  currentCongLogic(forUserBool) {
    this.forUser = forUserBool;

    // Logic for House
    if (this.bodyCount == 0) {

      // Setup variables first time we pass through the first body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('bodyCount = ')
        print(this.bodyCount);
        //background(color(this.bColor));

        //maps stress index onto percentage effecting yay/nay vote.
        this.stressMap = map(this.stress, this.stressLow, this.stressHigh, 0, 2);
        print('Voter Stress = ' + this.stressMap);

        this.stressPlanetMap = map(this.stressPlanet, this.stressPlanetLow, this.stressPlanetHigh, 0, 2);
        print('Planet Stress = ' + this.stressPlanetMap)

        //create a stress offset that will effect congress' likelyhood of passing legislation to create change
        this.stressOffset = (this.stressPlanetMap + this.stressMap) / 2;

        // Set number of voting memebers
        this.numCon = this.numHouse;
        this.bodyLabel = 'HOUSE OF REPRESENTATIVES';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemHouse);
        this.numRep = round(this.numCon * this.perRepHouse);
        this.numWild = round(this.numCon * this.perIndHouse);


        if (this.forUser)
          this.offSet = this.dWidth / (this.numBodies);
        else
        this.offSet = this.dWidth / (this.numBodies - 1);

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
        print('bodyCount = ')
        print(this.bodyCount);

        ///Set number of voting memebers
        this.numCon = this.numSenate;
        this.bodyLabel = 'SENATE';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemSenate);
        this.numRep = round(this.numCon * this.perRepSenate);
        this.numWild = round(this.numCon * this.perIndSenate);


        //Figure out how big to draw the circles and how far to space them out
        this.skip = floor(.97 * (sqrt(this.offSet * this.dHeight / this.numCon)));
        print('Skip = ' + this.skip); //testing
        this.x = this.skip / 2;
        this.y = this.skip / 2;

        print('Count = ' + this.count); //fortesting
        print('Count1 = ' + this.count1); //fortesting
        print('Count2 = ' + this.count2); //fortesting
      }

    }

    //AB logic for VP if Senate needs a tiebreaker
    if (this.bodyCount == 2) {
      print("votingBodyCounts[1][0]= " + this.votingBodyCounts[1][0] + "votingBodyCounts[1][1] = " + this.votingBodyCounts[1][1]);



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
        print('bodyCount = ')
        print(this.bodyCount);

        ///Set number of voting memebers
        this.numCon = this.numVP;
        this.bodyLabel = 'VICE PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemVP);
        this.numRep = round(this.numCon * this.perRepVP);
        this.numWild = round(this.numCon * this.perIndVP);

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
        print('bodyCount = ')
        print(this.bodyCount);

        // Set number of voting memebers
        this.numCon = this.numPres;
        this.bodyLabel = 'PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemPres);
        this.numRep = round(this.numCon * this.perRepPres);
        this.numWild = round(this.numCon * this.perIndPres);


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
    // if (this.count < this.numCon - 1 && this.count1 < 1) {

    //   this.rotLoadImage();
    //   this.testSize();
    //   this.count += 2; // OC note: count is incremented once every draw loop until it reaches num in this body
    //   print('Count = ' + this.count); //fortesting
    //   print('Count1 = ' + this.count1); //fortesting
      
    // } else 
    //if (this.count >= this.numCon - 1) {
      
      for (let i = 0; i < this.numCon; i++) { // OC note: < numCon draws all squares at once for each body
        this.bodyVote();
        this.count1++;
      }
      
      //print ('Count1 = ' + count1); //fortesting
      //print ('skip * Y = ' + (yCountT * skip));
    //}
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
    //Democrat is Voting
    if (this.countR < this.numDem) {
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;


      let vote = random(0, 1);
      //    //print vote info to console for testing
      //    print('Vote =' + vote);//for testing
      //    print ('stress offset ' + stressOffset);//for testing
      //    var voteDemTest = demYaythresh*stressOffset; //for testing
      //    print('vote dem offset' + voteDemTest);//for testing

      if (vote <= this.demYaythresh * this.stressOffset) {
        noVoteBool = false;
        this.yay++;
      } else {
        noVoteBool = true;
        this.nay++;
      }

    }
    //Independent is Voting
    else if (this.countR >= this.numDem && this.countR < this.numDem + numRepOrWild) {
      currentPartyNum = this.partyNum + 1;
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;


      let vote = random(0, 1);

      //    //print vote info to console for testing
      //    print('Vote =' + vote);//for testing
      //    print ('stress offset ' + stressOffset);//for testing
      //    var voteRepTest = repYaythresh*stressOffset; //for testing
      //    print('vote Rep offset' + voteRepTest);//for testing

      //is random number greater than threshold for yes?
      if (vote <= this.repYaythresh * this.stressOffset) {
        noVoteBool = false;
        this.yay++;
      } else {
        noVoteBool = true;
        this.nay++;
      }

    }
    //Republican is Voting
    else {
      currentPartyNum = this.partyNum + 2;
      currentTransVal = this.tranVal - currentPartyNum * valAdjust;
      let vote = random(0, 1);
      //print('Vote =' + vote); //testing
      if (vote <= this.indYaythresh * this.stressOffset) {
        noVoteBool = false;
        this.yay++;
      } else {
        noVoteBool = true;
        this.nay++;
      }
      //made for just two bodies
      // if (stopVoteCount == 2) {
      //     resultLogic();
      // }
    }
    //AB: finding problem with x's
    // print("body #: " + bodyCount + " No Vote Bool: " + noVoteBool);

    // Square is Drawn for Each Vote
    rectMode(CENTER);

    if (this.bodyLabel == 'VICE PRESIDENT') {
      if (!this.forUser)
        this.y = this.y + (this.skip*.9);
      // y = y + skip;
      if (this.vpVote == false) {
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


    //creates a different shade for each voting party
    if (this.stopVoteBool == false) {
      noStroke();
      fill(255, currentTransVal);
    }
    rect(this.x, this.y, this.diam, this.diam, this.diam / 8);
    //creates the x on squares that are "no votes"
    if (noVoteBool == true && this.stopVoteBool == false) {
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
    this.storeBodyVotes();
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

  /**
   * Stores yay and nay votes into array
   */
  storeBodyVotes() {
    this.votingBodyCounts[this.bodyCount] = [this.yay, this.nay];
    let currentBodyYay = this.votingBodyCounts[this.bodyCount][0];
    let currentBodyNay = this.votingBodyCounts[this.bodyCount][1];
    //AB for error checking
    // print(bodyLabel + " yay votes: " + currentBodyYay + " nay votes: " + currentBodyNay);
  }

  /**
   * appearance of squares changes to outlines when no vote is required
   */
  stopVoteChange() {
    if (this.stopVoteBool == true) {
      this.stopVoteArr[this.bodyCount] = true;
      stroke(255, 100);
      noFill();
      strokeWeight(3);
      // stopVoteBool == false;
    } else {
      fill(this.bColor);
      noStroke();
      this.stopVoteArr[this.bodyCount] = false;

    }
  }

  /**
   * Stop vote logic before changing appearance when no vote is required
   */
  stopVoteLogic() {
    //AB if the vp vote is not needed, no vote is necessary
    if (this.bodyCount == 2 && this.vpVote == false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    }
    //if the vp votes and it's a NO, then bill dies
    else if (this.vpVote == true && this.bodyPass[2] === false) {
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
    * Logic for all the final results
    * Determines the voting outcome of the voting results
    */
   resultLogic() {

    //padding & offsets for text display
    var votePadX = this.dWidth / 4;
    var votePadY = this.dHeight / 4;
    var voteOutcomePosY = this.votePadY * 3;

    if (this.forUser) { // engine running for user configuration

    // If voting body == 1 and yay == 50%
    // then vice president votes
    // console.log("body pass yay: " + yay + "body pass cutoff: " + numCon * perPass);
    // console.log(numCon + " " + perPass);
    // console.log("body pass yay: " + yay + "body superthresh cutoff: " + numCon * superThresh);
    // console.log(numCon + " " + superThresh);

      if (this.yay >= this.numCon * this.superThresh) {

        this.bodyPass[this.bodyCount] = true;
        this.superThreshIndex[this.bodyCount] = true;
        //AB logic if senate initiates tie breaker
      } else if (this.yay == this.numCon * this.perPass && this.bodyLabel == "SENATE") {
        this.bodyPass[this.bodyCount] = true;
        this.vpVote = true;
      } else if (this.yay > this.numCon * this.perPass) {
        this.bodyPass[this.bodyCount] = true;
        this.superThreshIndex[this.bodyCount] = false;
      } else {
        this.bodyPass[this.bodyCount] = false;
        this.superThreshIndex[this.bodyCount] = false;
      }
    } else { // otherwise enging running for original configuration
      // If voting body == 1 and yay == 50%
      // then vice president votes

      if (this.yay >= this.numCon * this.superThresh) {
        // text('BILL PASSES ' + bodyLabel + ' WITH supermajority', votePadX, votePadY, offSet - votePadX, dHeight - votePadY);
        this.bodyPass[this.bodyCount] = true;
        this.superThreshIndex[this.bodyCount] = true;
      } else if (this.yay > this.numCon / 2) {
        // text('BILL PASSES ' + bodyLabel, votePadX, votePadY, offSet, dHeight);
        this.bodyPass[this.bodyCount] = true;
        this.superThreshIndex[this.bodyCount] = false;
      } else if (this.yay == this.numCon / 2 && this.bodyLabel == "SENATE") {
        this.bodyPass[this.bodyCount] = true;
        this.vpVote = true;
      } else {
        // text('BILL DOES NOT PASS ' + bodyLabel, votePadX, votePadY, offSet, dHeight);
        this.bodyPass[this.bodyCount] = false;
        this.superThreshIndex[this.bodyCount] = false;
      }

    }
    //Adds one to the count of how many bodies have voted and enters into user input state (buttons) if the vote is done.
    if (this.bodyCount < this.numBodies) {
      this.nextBody();
      print("new body count: " + this.bodyCount);
    }

    if (this.bodyCount >= this.numBodies) {
      this.finalDisplayLogic();
      print('Final Stage');
    }

    
    this.endBody = 1;
  }

  nextBody() {
    this.bodyCount++;
  }

  /**
   * Logic to determine the voting results run with either original configuration
   */
  finalDisplayLogic() {
    let currentBodyLabel;
    let decisionText = "";
    console.log("body pass: " + this.bodyPass);

    if (this.bodyCount == this.numBodies) {

        //NEED TO CHANGE LATER FOR MORE THAN 3 BODIES
        for (let i = 0; i < this.numBodies; i++) {
          fill(255);
          if (i == 0) {
            if (this.forUser) { // running user config
              currentBodyLabel = 'LEGISLATIVE CHAMBER 1';
            } else { // running original config
              currentBodyLabel = 'HOUSE';
            }
          } else if (i == 1) {
            if (this.forUser) {
              currentBodyLabel = 'LEGISLATIVE CHAMBER 2';
            } else {
              currentBodyLabel = 'SENATE';
            }
          } else if (i == 2) {
            currentBodyLabel = 'VICE PRESIDENCY';
          } else if (i == 3) {
            // print("I AM IN PRESIDENT b4 LOGIC");
            currentBodyLabel = 'PRESIDENCY';
          }

          //yay and nay votes for each voting body
          //y = the i*dispW

          if (i < this.votingBodyCounts.length) {

            print("i = " + i + " and current body label = " + currentBodyLabel);

            if (currentBodyLabel == 'PRESIDENCY') {

              // presidents has voted
              if (this.stopVoteArr[i] == false) {

                if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[3] === false) {
                  if (this.superThreshIndex[0] === true && this.superThreshIndex[1] === true) {
                    this.voteResults[i] = "VETO OVERRIDE BY SUPERMAJORITY IN ALL LEGISLATIVE CHAMBERS";
                  } else {
                    this.voteResults[i] = "PRESIDENTIAL VETO: BILL IS NOT APPROVED";
                  }
                } else if (this.bodyPass[i] == true &&
                  this.superThreshIndex[0] == false ||
                  this.superThreshIndex[1] == false) {
                  this.voteResults[i] = "BILL IS APPROVED";
                } else if (this.bodyPass[i] == false) {
                  this.voteResults[i] = "BILL IS NOT APPROVED";
                }
              } else { // president has not voted

                if (this.bodyPass[0] == false || this.bodyPass[1] == false) {
                  this.voteResults[i] = "BILL IS NOT APPROVED BY ALL CHAMBERS: PRESIDENT DOES NOT VOTE";
                } else {
                  this.voteResults[i] = "DOES NOT VOTE";
                }
              }

            } else if (currentBodyLabel == 'VICE PRESIDENCY') {
              if (this.stopVoteArr[i] == false && this.vpVote == true) { // vp votes
                
                if (this.bodyPass[0] == false || this.bodyPass[1] == false) {
                  //text('\n\n\nBILL IS NOT APPROVED BY ALL CHAMBERS: NO VICE PRESIDENTIAL VOTE', i * dispW + padX, this.dHeight * (3 / 4), dispW - padX, dispH);
                  this.voteResults[i] = "BILL IS NOT APPROVED BY ALL CHAMBERS: NO VICE PRESIDENTIAL VOTE";
                } else if (this.bodyPass[0] == true && bodyPass[1] == true && vpVote == true) {
                  if (this.bodyPass[i] == false) {
                    //text('\nBILL IS NOT APPROVED', (i) * dispW + padX, this.dHeight * (3 / 4), dispW - padX, dispH);
                    this.voteResults[i] = "BILL IS NOT APPROVED";
                  } else if (this.bodyPass[i] == true) {
                    //text('\nBILL IS APPROVED', (i) * dispW + padX, this.dHeight * (3 / 4), dispW - padX, dispH);
                    this.voteResults[i] = "BILL IS APPROVED";
                  }
                }

              } else { // vp does not vote
                this.voteResults[i] = "DOES NOT VOTE";
              }

            } else { // senate & house
              if (this.stopVoteArr[i] == false) { // body votes
           
                if (this.bodyPass[i] == true && this.superThreshIndex[i] == true) {
                  this.voteResults[i] = "BILL IS APPROVED WITH SUPERMAJORITY";
                } else if ((currentBodyLabel == 'SENATE' || currentBodyLabel == 'LEGISLATIVE CHAMBER 2') 
                              && this.bodyPass[0] == true && this.bodyPass[1] == true && this.vpVote == true) {
                  this.voteResults[i] = "TIE-BREAKER VOTE INITIATED";
                } else if (this.bodyPass[i] == false) {
                  this.voteResults[i] = "BILL IS NOT APPROVED";
                } else if (this.bodyPass[i] == true && this.superThreshIndex[i] == false) {
                  this.voteResults[i] = "BILL IS APPROVED";
                }
              } else { // body does not vote
                this.voteResults[i] = "DOES NOT VOTE";
              }
            }
            console.log(this.voteResults);
          }

          //regular pass
          if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.vpVote == true && this.bodyPass[2] == false) {
            decisionText = "DECISION: BILL DOES NOT BECOME LAW DUE TO TIE-BREAKER VOTE BY VICE PRESIDENT";
          } else if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[3] === true) {
            decisionText = "DECISION: BILL BECOMES LAW";

          } else if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[3] === false) {
            if (this.superThreshIndex[0] === true && this.superThreshIndex[1] === true) {
              decisionText = "DECISION: BILL BECOMES LAW BY SUPERMAJORITY";

            } else {
              decisionText = "DECISION: BILL DOES NOT BECOME LAW DUE TO PRESIDENTIAL VETO";

            }
          } else if (this.bodyPass[0] == false || this.bodyPass[1] == false) {
            decisionText = "DECISION: BILL DOES NOT BECOME LAW";
          }
          this.decisionTxt = decisionText;
        };

    }
    this.finalDisplayBool = true; // signal to now display final text and buttons
  }

}