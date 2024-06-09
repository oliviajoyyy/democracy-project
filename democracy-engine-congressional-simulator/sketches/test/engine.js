//
// class for engine object
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
numHouse = 435;
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

housePercentage;
senPercentage;
vpPercentage;
presPercentage;

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
stress = stressSensorval;
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
votingBodyCounts = [];
superThreshIndex = [];

// --------------------

//user input variables
userNumHouse;
userPerHouseBody;

userNumSenate;
userPerSenateBody;

userNumPres;
userPerPresBody;

userNumVP;
userPerVPBody;

userNumParties;
userNumHouseRan;
userNumSenateRan;
userNumPresRan;
userNumVPRan;
userNumHouseConn;

userBodyPass;
userSuperThresh;

userRepYaythresh;
userDemYaythresh;
userIndYaythresh;
prevUserNumParties;
userEditCount = 0;

//test state variable - 0 if untested 1 if tested
test;

//test state variable - 0 if moving through voting body 1 if all body members have votes
endBody;

stopVoteBool = false;
stopVoteCount = 0;
stopVoteArr = [];
vpVote = false;

//boxes;

  constructor (loadingImg) {
    //boxes = new Boxes(loadingImg);
  }

  storeBodyVotes() {
    this.votingBodyCounts[this.bodyCount] = [this.yay, this.nay];
    let currentBodyYay = this.votingBodyCounts[this.bodyCount][0];
    let currentBodyNay = this.votingBodyCounts[this.bodyCount][1];


    //AB for error checking
    // print(bodyLabel + " yay votes: " + currentBodyYay + " nay votes: " + currentBodyNay);

  }

  //Shows result of the vote
  bodyVote() {
    fill(map(this.boxes.count1, 0, this.numCon, 0, 255));
    // reset variables if first pass thorugh function
    if (this.boxes.count1 < 1) {
      this.resetDrawVals();
      this.test = 1;
    }
    if (this.boxes.count1 < this.numCon) {
      this.stopVoteLogic();

      this.drawRect();
      // Once all of votes have been cast display the total for each body
      if (this.boxes.count1 == this.numCon - 1) {
        this.resultLogic();
      }
    }
  }

  resetDrawVals() {
    this.boxes.resetDraw();
    this.yay = 0;
    this.nay = 0;
    this.endBody = 0;
  }


}