/**
 * file: engine.js
 * This class models the decision-making logic of the Legislative branch of the US government.
 * It can run with the default configuration of the government,
 * or with those parameters adjusted by users.
 */
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

// Defaults based on 117 congress 2021-06-01

// Senate (2021-2023)
// Majority Party: Republican (48 seats)
// Minority Party: Democrat (50 seats)
// Other Parties: 2 Independents (both caucus with the Democrats)
// Total Seats: 100
// https://www.senate.gov/history/partydiv.htm

// House
// 211 Republicans
// 220 Democrats
// 0 Libertarian
// 4 * Vacancies
// https://pressgallery.house.gov/member-data/party-breakdown

//Number voting members
numHouse; // = 435
numHouse2; // = 435;
numSenate; // = 100;
numPres; // = 1;
numVP; // = 1;

//Demographics of House as decimal percentages 1 = 100%
perDemHouse; // = 0.505;
perRepHouse; // = 0.485;
perIndHouse; // = 0.00;

//Demographics of House2 as decimal percentages 1 = 100%
perDemHouse2; // = 0.505;
perRepHouse2; // = 0.485;
perIndHouse2; // = 0.00;

//Demographics of Senate as decimal percentages 1 = 100%
perDemSenate; // = 0.48;
perRepSenate; // = 0.50;
perIndSenate; // = 0.02;

//Demographics of President as decimal percentages 1 = 100%
perDemPres; // = 1.0;
perRepPres; // = 0.0;
perIndPres; //= 0.0;

perDemVP; // = 1.0;
perRepVP; // = 0.0;
perIndVP; // = 0.0;

//supermajority Cutoff for override of presidential veto
superThresh; // = 0.67;
perPass; // = .5;

//Historical Likelihood of party affiliation & likelihood of 'yay' vote
demYaythresh; // = 0.7;
repYaythresh; // = 0.3;
indYaythresh; // = 0.5;

//How Many Voting Bodies (house, senate, president = 3) *see to DO at top of code
numBodies; // = 4; // total number of voting bodies --> 5
numLegislativeBodies; // number of legislative bodies (1-3)
//defNumBody;//delete?

numParties;

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
// [[chamber1 #yes, chamber1, #no], [chamber2 #yes, chamber2 #no], [vp #yes, #vp no], [pres #yes, pres #no]]
superThreshIndex = [];

//

//The count variables are updated every time a vote is made
count = 0;
count1 = 0;
count2 = 0;
countR = 0;

//test state variable - 0 if untested 1 if tested
test;

//test state variable - 0 if moving through voting body 1 if all body members have votes
endBody;

//how many times has the user run the vote in a signle session
passCount = 0; //artifact from Rhonda

bodyLabel;

stopVoteBool = false;
stopVoteCount = 0;
stopVoteArr = [];
vpVote = false;

numDem;
numRep;
numWild;

// OC forUser: bool - true if engine is running for user configuration, false if running for original config
forUser;

// OC finalDisplayBool - will be set true when ready to display calcuation results outside of class
// OC signal used to determine when finalDisplay() runs (finalDisplay funct is in the scenes)
//finalDisplayBool = false;

voteResults = ["","","","",""];
// OC stores decisions for each body (bill approved/not): [chamber1, chamber2, vp, pres]

decisionTxt = ""; // OC final decision string

// OC for loop variables, to use across different functions
ix;
jx;

allVotes = []; // OC 2D array keep track of "yay"/"nay" votes for each member of each body: bodyCount, array of its votes

govtJSON;
historicalActs;

  constructor (govtJSON, historicalActs) {
    this.govtJSON = govtJSON;
    this.historicalActs = historicalActs;
    this.numBodies = 5; // OC numBodies always 5 as placeholders for house, house2, senate, vp, pres
    this.setDefaultParams();
  }

  setDefaultParams() {
    this.numLegislativeBodies = this.govtJSON.numLegislativeBodies;
    this.numParties = this.govtJSON.numParties;

    // Number of voting members total and for each party, for each body
    this.numHouse = this.govtJSON.chamber1.totalMembers;
    //Demographics of House as decimal percentages 1 = 100%
    this.perDemHouse = this.govtJSON.chamber1.partyA / this.numHouse;
    this.perRepHouse = this.govtJSON.chamber1.partyB / this.numHouse;
    this.perIndHouse = this.govtJSON.chamber1.partyC / this.numHouse;

    // with 2 parties, engine logic skips chamber 2 (house2) - so set chamber2 from the config file to senate
    if (this.numParties == 2) {
      this.nunHouse2 = this.govtJSON.chamber3.totalMembers;
      //Demographics of House as decimal percentages 1 = 100%
      this.perDemHouse2 = this.govtJSON.chamber3.partyA / this.numHouse2;
      this.perRepHouse2 = this.govtJSON.chamber3.partyB / this.numHouse2;
      this.perIndHouse2 = this.govtJSON.chamber3.partyC / this.numHouse2;

      this.numSenate = this.govtJSON.chamber2.totalMembers;
      //Demographics of Senate as decimal percentages 1 = 100%
      this.perDemSenate = this.govtJSON.chamber2.partyA / this.numSenate;
      this.perRepSenate = this.govtJSON.chamber2.partyB / this.numSenate;
      this.perIndSenate = this.govtJSON.chamber2.partyC / this.numSenate;

    } else { // can set in order
      this.nunHouse2 = this.govtJSON.chamber2.totalMembers;
      //Demographics of House as decimal percentages 1 = 100%
      this.perDemHouse2 = this.govtJSON.chamber2.partyA / this.numHouse2;
      this.perRepHouse2 = this.govtJSON.chamber2.partyB / this.numHouse2;
      this.perIndHouse2 = this.govtJSON.chamber2.partyC / this.numHouse2;

      this.numSenate = this.govtJSON.chamber3.totalMembers;
      //Demographics of Senate as decimal percentages 1 = 100%
      this.perDemSenate = this.govtJSON.chamber3.partyA / this.numSenate;
      this.perRepSenate = this.govtJSON.chamber3.partyB / this.numSenate;
      this.perIndSenate = this.govtJSON.chamber3.partyC / this.numSenate;
    }

    this.numVP = this.govtJSON.vicePres.totalMembers;
    //Demographics of Vice President as decimal percentages 1 = 100%
    this.perDemVP = this.govtJSON.vicePres.partyA / this.numVP;
    this.perRepVP = this.govtJSON.vicePres.partyB / this.numVP;
    this.perIndVP = this.govtJSON.vicePres.partyC / this.numVP;

    this.numPres = this.govtJSON.president.totalMembers;
    //Demographics of President as decimal percentages 1 = 100%
    this.perDemPres = this.govtJSON.president.partyA / this.numPres;
    this.perRepPres = this.govtJSON.president.partyB / this.numPres;
    this.perIndPres = this.govtJSON.president.partyC / this.numPres;

    this.perPass = this.govtJSON.percentMajority; // as decimal percentages
    this.superThresh = this.govtJSON.percentSupermajority;
    
    this.demYaythresh = this.govtJSON.probabilityYesVote.partyA;
    this.repYaythresh = this.govtJSON.probabilityYesVote.partyB;
    this.indYaythresh = this.govtJSON.probabilityYesVote.partyC;
  }

  /**
   * Logic below is setup for user/origin congressional configuration
   * @param {boolean} forUserBool - true for running logic for user configuration, false for running original configuration
   */
  currentCongLogic(forUserBool) {
    this.forUser = forUserBool;

    // OC loops through number of voting bodies
    for (this.ix=0; this.ix<this.numBodies; this.ix++) {

    // Logic for House
    if (this.bodyCount == 0) {

      // Setup variables first time we pass through the first body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('bodyCount = ')
        print(this.bodyCount);
        this.allVotes[this.ix] = []; // OC initialize empty array for votes in this body
        this.voteResults[this.ix] = "";

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
      }
      // if (this.numBodies == 3) { // house, vp, pres
      //   this.bodyPass[this.bodyCount] = true;
      // this.nextBody();
      // continue;
      // }
    }

    
    //Logic for House 2
    if (this.bodyCount == 1) {
      if (!this.forUser) { // if original config, skip this part
              // make house2 automatically pass
      this.bodyPass[1] = true;
      this.superThreshIndex[1] = true;
      this.stopVoteArr[1] = false;
      if (this.bodyCount == 1)
        this.yay = this.numHouse2;
      this.nextBody();
      continue;
    }

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('bodyCount = ')
        print(this.bodyCount);
        this.allVotes[this.ix] = [];
        this.voteResults[this.ix] = "";

        ///Set number of voting memebers
        this.numCon = this.numHouse2;
        this.bodyLabel = 'HOUSE 2';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemHouse2);
        this.numRep = round(this.numCon * this.perRepHouse2);
        this.numWild = round(this.numCon * this.perIndHouse2);

        print('Count = ' + this.count); //fortesting
        print('Count1 = ' + this.count1); //fortesting
        print('Count2 = ' + this.count2); //fortesting
      }

    }


    //Logic for Senate
    if (this.bodyCount == 2) {

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('bodyCount = ')
        print(this.bodyCount);
        this.allVotes[this.ix] = [];
        this.voteResults[this.ix] = "";

        ///Set number of voting memebers
        this.numCon = this.numSenate;
        this.bodyLabel = 'SENATE';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemSenate);
        this.numRep = round(this.numCon * this.perRepSenate);
        this.numWild = round(this.numCon * this.perIndSenate);

        print('Count = ' + this.count); //fortesting
        print('Count1 = ' + this.count1); //fortesting
        print('Count2 = ' + this.count2); //fortesting
      }

    }

    //AB logic for VP if Senate needs a tiebreaker
    if (this.bodyCount == 3) {
      print("votingBodyCounts[0][0]= " + this.votingBodyCounts[0][0] + "votingBodyCounts[0][1] = " + this.votingBodyCounts[0][1]);
      // print("votingBodyCounts[1][0]= " + this.votingBodyCounts[1][0] + "votingBodyCounts[1][1] = " + this.votingBodyCounts[1][1]);

      // if (votingBodyCounts[1][0] == votingBodyCounts[1][1] && vpVote == true) {
      //   vpVote = true;
      // } else {
      //   vpVote = false;
      // }

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }
      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('bodyCount = ')
        print(this.bodyCount);
        this.allVotes[this.ix] = [];
        this.voteResults[this.ix] = "";

        ///Set number of voting memebers
        this.numCon = this.numVP;
        this.bodyLabel = 'VICE PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemVP);
        this.numRep = round(this.numCon * this.perRepVP);
        this.numWild = round(this.numCon * this.perIndVP);
      }
    }

    //Logic for President
    if (this.bodyCount == 4) {

      if (this.endBody == 1) {
        this.resetCount();
        this.endBody = 0;
      }

      // Setup variables first time we pass through a new body
      if (this.count < 1 && this.count1 < 1 && this.count2 < 1) {
        this.test = 0;
        print('bodyCount = ')
        print(this.bodyCount);
        this.allVotes[this.ix] = [];
        this.voteResults[this.ix] = "";

        // Set number of voting memebers
        this.numCon = this.numPres;
        this.bodyLabel = 'PRESIDENT';

        //Set Demographics for each body
        this.numDem = round(this.numCon * this.perDemPres);
        this.numRep = round(this.numCon * this.perRepPres);
        this.numWild = round(this.numCon * this.perIndPres);

      }
    }

    // OC numCon == 0 when the current legislative body is not included in the configuration
    if (this.numCon == 0) {
      this.nextBody();
      continue; // skip process of voting
    }

    // OC loops through each member of each body
      for (this.jx = 0; this.jx < this.numCon; this.jx++) { 
        if (this.count < this.numCon - 1 && this.count1 < 1) {
          this.count++;
          //console.log("count " + this.count);
        }
        this.bodyVote();
        this.count1++;
      }
      
      //print ('Count1 = ' + count1); //fortesting
      //print ('skip * Y = ' + (yCountT * skip));
    }
  }

  
  /**
   * Start the body vote
   */
  bodyVote() {

    if (this.count1 < 1) {
      this.resetDraw();
      this.test = 1;
    }
    if (this.count1 < this.numCon) {
      this.stopVoteLogic();
      this.vote();

      // Once all of votes have been cast display the total for each body
      if (this.count1 == this.numCon - 1) {
        this.resultLogic();
      }
    }
  }


  /**
   * Determines a "yay" or "nay" vote
   */
  vote() {
    let noVoteBool = false;

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

    this.stopVoteChange();

    //Democrat is Voting
    if (this.countR < this.numDem) {

      let vote = random(0, 1);
      //    //print vote info to console for testing
      //    print('Vote =' + vote);//for testing
      //    print ('stress offset ' + stressOffset);//for testing
      //    var voteDemTest = demYaythresh*stressOffset; //for testing
      //    print('vote dem offset' + voteDemTest);//for testing

      if (vote <= this.demYaythresh * this.stressOffset) {
        noVoteBool = false;
        this.yay++;
        this.allVotes[this.ix][this.jx] = "yay";
      } else {
        noVoteBool = true;
        this.nay++;
        this.allVotes[this.ix][this.jx] = "nay";
      }

    }
    //Independent is Voting
    else if (this.countR >= this.numDem && this.countR < this.numDem + numRepOrWild) {

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
        this.allVotes[this.ix][this.jx] = "yay";
      } else {
        noVoteBool = true;
        this.nay++;
        this.allVotes[this.ix][this.jx] = "nay";
      }

    }
    //Republican is Voting
    else {

      let vote = random(0, 1);
      //print('Vote =' + vote); //testing
      if (vote <= this.indYaythresh * this.stressOffset) {
        noVoteBool = false;
        this.yay++;
        this.allVotes[this.ix][this.jx] = "yay";
      } else {
        noVoteBool = true;
        this.nay++;
        this.allVotes[this.ix][this.jx] = "nay";
      }
      //made for just two bodies
      // if (stopVoteCount == 2) {
      //     resultLogic();
      // }
    }

    //AB: finding problem with x's
    // print("body #: " + bodyCount + " No Vote Bool: " + noVoteBool);

    // AB
    // if (this.bodyCount == 1) { // for 2 legislative bodies
    //   // simulate vp tiebreaker vote
    //   this.yay = 50;
    //   this.nay = 50;
    // }

    // OC simulate vp tiebreaker for 2 bodies, with logic for 3
    // if (this.bodyCount == 2) { // bodyCount 2 is now senate
    //   this.yay = 50;
    //   this.nay = 50;
    // }

    // OC simulate tie breaker vote for 1 legislative body
    // if (this.bodyCount == 0) {
    //   this.yay = round(this.numHouse / 2);
    //   this.nay = this.numHouse - this.yay;
    // }

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
  }

  resetDraw() {
    this.yay = 0;
    this.nay = 0;
    this.endBody = 0;
  }

  /**
   * Stores the count yay and nay votes into array
   */
  storeBodyVotes() {
    this.votingBodyCounts[this.bodyCount] = [this.yay, this.nay];
    let currentBodyYay = this.votingBodyCounts[this.bodyCount][0];
    let currentBodyNay = this.votingBodyCounts[this.bodyCount][1];
    //AB for error checking
    // print(bodyLabel + " yay votes: " + currentBodyYay + " nay votes: " + currentBodyNay);
  }

  /**
   * track stop of votes
   */
  stopVoteChange() {
    if (this.stopVoteBool == true) {
      this.stopVoteArr[this.bodyCount] = true;
      // stopVoteBool == false;
    } else {
      this.stopVoteArr[this.bodyCount] = false;
    }
  }

  /**
   * Stop vote logic when no vote is required
   */
  stopVoteLogic() {
    //AB if the vp vote is not needed, no vote is necessary
    if (this.bodyCount == 3 && this.vpVote == false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    }
    //if the vp votes and it's a NO, then bill dies
    else if (this.vpVote == true && this.bodyPass[3] === false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    }
    //AB if the first or second body is not a pass,  bill dies thus preventing other bodies to vote
    else if (this.bodyPass[0] === false || this.bodyPass[1] === false || this.bodyPass[2] == false) {
      this.stopVoteBool = true;
      this.stopVoteCount++;
    } else {
      this.stopVoteBool = false;
    }
  }

   /**
    * Logic for all the final results - determines the voting outcome
    */
   resultLogic() {

    // OC for 1 legislative body (house), make senate automatically pass
    if (this.numLegislativeBodies == 1) {
      this.bodyPass[2] = true;
      this.superThreshIndex[2] = true;
      this.stopVoteArr[2] = false;
      if (this.bodyCount == 2)
        this.yay = this.numSenate;
      this.votingBodyCounts[2] = [];
      this.votingBodyCounts[2][0] = null;
      this.votingBodyCounts[2][1] = null;
      this.voteResults[2] = null;

      // also make house 2 automatically pass
      this.bodyPass[1] = true;
      this.superThreshIndex[1] = true;
      this.stopVoteArr[1] = false;
      if (this.bodyCount == 1)
        this.yay = this.numHouse2;
      this.votingBodyCounts[1] = [];
      this.votingBodyCounts[1][0] = null;
      this.votingBodyCounts[1][1] = null;
      this.voteResults[1] = null;

    } else if (this.numLegislativeBodies == 2) { // use original house [0] and senate [2]
      // make house2 automatically pass
      this.bodyPass[1] = true;
      this.superThreshIndex[1] = true;
      this.stopVoteArr[1] = false;
      if (this.bodyCount == 1)
        this.yay = this.numHouse2;
      this.votingBodyCounts[1] = [];
      this.votingBodyCounts[1][0] = null;
      this.votingBodyCounts[1][1] = null;
      this.voteResults[1] = null;
    }

    console.log("body pass: " + this.bodyPass);

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
      } else if (this.yay == this.numCon * this.perPass && (this.numLegislativeBodies == 1) && this.bodyLabel == "HOUSE OF REPRESENTATIVES") {
          // OC tie breaker for 1 legislative body
          this.bodyPass[this.bodyCount] = true;
          this.vpVote = true;
          this.stopVoteArr[this.bodyCount] = false;
      } else if (this.yay > this.numCon * this.perPass) {
        this.bodyPass[this.bodyCount] = true;
        this.superThreshIndex[this.bodyCount] = false;
      } else {
        this.bodyPass[this.bodyCount] = false;
        this.superThreshIndex[this.bodyCount] = false;
      }
    } else { // otherwise engine running for original configuration
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
      this.finalLogic();
      print('Final Stage');
    }

    this.endBody = 1;
  }

  nextBody() {
    this.bodyCount++;
  }

  /**
   * Logic to determine the voting results of each body (bill approved/not approved/does not vote) 
   * and final result (bill becomes law/does not become law) as text
   */
  finalLogic() {
    let currentBodyLabel;
    let decisionText = "";
    console.log("body pass: " + this.bodyPass);
    //this.bodyPass[0] = true; // for testing house true
    // this.bodyPass[1] = true; // for testing senate true
    // //this.superThreshIndex[1] = true;
    // this.stopVoteArr[1] = false; // make senate vote
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
              currentBodyLabel = 'HOUSE 2';
            }
          } else if (i == 2) {
            if (this.forUser) {
              currentBodyLabel = 'LEGISLATIVE CHAMBER 3';
            } else {
              currentBodyLabel = 'SENATE';
            }
          } else if (i == 3) {
            currentBodyLabel = 'VICE PRESIDENCY';
          } else if (i == 4) {
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

                if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[2] === true &&this.bodyPass[4] === false) {
                  if (this.superThreshIndex[0] === true && this.superThreshIndex[1] === true && this.superThreshIndex[2] === true) {
                    this.voteResults[i] = "VETO OVERRIDE BY SUPERMAJORITY IN ALL LEGISLATIVE CHAMBERS";
                  } else {
                    this.voteResults[i] = "PRESIDENTIAL VETO: BILL IS NOT APPROVED";
                  }
                } else if (this.bodyPass[i] == true &&
                  this.superThreshIndex[0] == false ||
                  this.superThreshIndex[1] == false ||
                  this.superThreshIndex[2] == false) {
                  this.voteResults[i] = "BILL IS APPROVED";
                } else if (this.bodyPass[i-1] == true && this.bodyPass[i] == true) {
                  // OC vp votes [i-1] (or [3] for new) and passes bill AND pres passes bill [i] ([4] for new)");
                  this.voteResults[i] = "BILL IS APPROVED";
                } else if (this.bodyPass[i] == false) {
                  this.voteResults[i] = "BILL IS NOT APPROVED";
                }
              } else { // president has not voted

                if (this.bodyPass[0] == false || this.bodyPass[1] == false || this.bodyPass[2] == false) {
                  this.voteResults[i] = "BILL IS NOT APPROVED BY ALL CHAMBERS: PRESIDENT DOES NOT VOTE";
                  this.votingBodyCounts[i][0] = null; // OC set to null so that no count of votes is saved to db
                  this.votingBodyCounts[i][1] = null;
                } else {
                  this.voteResults[i] = "DOES NOT VOTE";
                  this.votingBodyCounts[i][0] = null;
                  this.votingBodyCounts[i][1] = null;
                }
              }

            } else if (currentBodyLabel == 'VICE PRESIDENCY') {
              if (this.stopVoteArr[i] == false && this.vpVote == true) { // vp votes
                
                if (this.bodyPass[0] == false || this.bodyPass[1] == false || this.bodyPass[2] == false) {
                  //text('\n\n\nBILL IS NOT APPROVED BY ALL CHAMBERS: NO VICE PRESIDENTIAL VOTE', i * dispW + padX, this.dHeight * (3 / 4), dispW - padX, dispH);
                  this.voteResults[i] = "BILL IS NOT APPROVED BY ALL CHAMBERS: NO VICE PRESIDENTIAL VOTE";
                  this.votingBodyCounts[i][0] = null;
                  this.votingBodyCounts[i][1] = null;
                } else if (this.bodyPass[0] == true && this.bodyPass[1] == true && this.bodyPass[2] == true && this.vpVote == true) {
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
                this.votingBodyCounts[i][0] = null;
                this.votingBodyCounts[i][1] = null;
              }

            } else { // senate & house
              if (this.stopVoteArr[i] == false) { // body votes
           
                if (this.bodyPass[i] == true && this.superThreshIndex[i] == true) {
                  this.voteResults[i] = "BILL IS APPROVED WITH SUPERMAJORITY";
                } else if ((currentBodyLabel == 'SENATE' || currentBodyLabel == 'LEGISLATIVE CHAMBER 3') 
                              && this.bodyPass[0] == true && this.bodyPass[1] == true && this.vpVote == true) {
                  this.voteResults[i] = "TIE-BREAKER VOTE INITIATED";
                } else if (this.numLegislativeBodies == 1 && currentBodyLabel == 'LEGISLATIVE CHAMBER 1'
                              && this.bodyPass[0] == true && this.bodyPass[1] == true && this.bodyPass[2] == true && this.vpVote == true) {
                  // OC tie-breaker text for 1 legislative body
                  this.voteResults[i] = "TIE-BREAKER VOTE INITIATED";
                } else if (this.bodyPass[i] == false) {
                  this.voteResults[i] = "BILL IS NOT APPROVED";
                } else if (this.bodyPass[i] == true && this.superThreshIndex[i] == false) {
                  this.voteResults[i] = "BILL IS APPROVED";
                }
              } else { // body does not vote
                this.voteResults[i] = "DOES NOT VOTE";
                this.votingBodyCounts[i][0] = null;
                this.votingBodyCounts[i][1] = null;
              }
            }
            console.log(this.voteResults);
          }

          //regular pass
          if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[2] === true && this.vpVote == true && this.bodyPass[3] == false) {
            decisionText = "DECISION: BILL DOES NOT BECOME LAW DUE TO TIE-BREAKER VOTE BY VICE PRESIDENT";
          } else if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[2] === true && this.bodyPass[4] === true) {
            decisionText = "DECISION: BILL BECOMES LAW";

          } else if (this.bodyPass[0] === true && this.bodyPass[1] === true && this.bodyPass[2] === true && this.bodyPass[4] === false) {
            if (this.superThreshIndex[0] === true && this.superThreshIndex[1] === true && this.superThreshIndex[2] === true) {
              decisionText = "DECISION: BILL BECOMES LAW BY SUPERMAJORITY";

            } else {
              decisionText = "DECISION: BILL DOES NOT BECOME LAW DUE TO PRESIDENTIAL VETO";

            }
          } else if (this.bodyPass[0] == false || this.bodyPass[1] == false || this.bodyPass[2] == false) {
            decisionText = "DECISION: BILL DOES NOT BECOME LAW";
          }
          this.decisionTxt = decisionText;
        };

    }
    console.log(this.votingBodyCounts); 
    // OC could save session to db here or outside of engine
    //this.finalDisplayBool = true; // signal to now display final text and buttons
  }

}