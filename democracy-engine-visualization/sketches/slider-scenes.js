
/**
 * A01 Start Up
 */
function startUp() {
  let continueBtn, testBtn;

  this.setup = function () {
    textFont(helvFont);
    // let dWidth = windowWidth * .8;
    // let dHeight = windowHeight * .8;
    // let canvas = createCanvas(dWidth, dHeight);
    // let canvasDiv = document.getElementById('vote');
    // canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    console.log("start up scene");
    background(bColor);
    document.body.style.backgroundColor = bColor;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("start-desc").style.display = "none";
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("top").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
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
    // let dWidth = windowWidth * .8;
    // let dHeight = windowHeight * .8;
    // let canvas = createCanvas(dWidth, dHeight);
    // let canvasDiv = document.getElementById('vote');
    // canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    console.log("start up scene");
    background(bColor);
    document.body.style.backgroundColor = bColor;

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("screen").style.display = "none";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = configJSON.text.shortDescription;
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("top").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";
    document.getElementById("pane-bkg").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    loadSessionBtn = createButton('See Previous Sessions');
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
    mgr.showScene(sLoadSession);
  }

  function clickedAbout() {
    removeBtns();
    mgr.showScene(aboutProject);
  }


  function removeBtns() {
    loadSessionBtn.remove();
    aboutBtn.remove();
  }
}



/**
 * A03 Hardware Test
 */
function hardwareTest() {
  let backBtn, testBtn;
  //let port;
  let connectBtn;
  this.setup = function () {
    textFont(helvFont);
    // let dWidth = windowWidth * .8;
    // let dHeight = windowHeight * .8;
    // let canvas = createCanvas(dWidth, dHeight);
    // let canvasDiv = document.getElementById('vote');
    // canvas.parent(canvasDiv);
    background(bColor);

  }

  this.enter = function () {
    console.log("start up scene");
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Hardware & DB Test </h1>";
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("start-desc").style.display = "none";
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("top").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    backBtn = createButton('Back to Start Up');
    backBtn.id('back-btn-a03');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);

    testBtn = createButton('Connect to Hardware');
    testBtn.id('test-btn-a03');
    testBtn.class('buttons');
    testBtn.parent(buttonDiv);
    // testBtn.mousePressed(clickedTest);

    hardwareSetup();
  }

  function hardwareSetup() {
    port = createSerial();

    // in setup, we can open ports we have used previously
    // without user interaction
  
    let usedPorts = usedSerialPorts();
    console.log(usedPorts);
    if (usedPorts.length > 0) {
      port.open(usedPorts[0],9600);
  
    }
  
    // any other ports can be opened via a dialog after
    // user interaction (see connectBtnClick below)
  
    // connectBtn = createButton('Connect to Arduino');
    // connectBtn.position(80, 450);
    // connectBtn.mousePressed(connectBtnClick);
    testBtn.mousePressed(connectBtnClick);
  
    // let sendBtn = createButton('Blink Led');
    // sendBtn.position(500, 450);
    // sendBtn.mousePressed(sendBtnClick);
  }

  function connectBtnClick() {
    if (!port.opened()) {
    //  port.open('Arduino', 57600);
      port.open(115200);
    } else {
      port.close();
    }
  }
  
  function sendBtnClick() {
    port.write("Hello from p5.js\n");
  }

  this.draw = function () {
      // this makes received text scroll up
   background(0);
   //copy(0, 0, width, height, 0, -1, width, height);
 
   
   // changes button label based on connection status
   if (port.opened()) {
  
    testBtn.html('Disconnect');
    //  connectBtn.html('Disconnect');
   // reads in complete lines and prints them at the
   // bottom of the canvas
 
 
   //let arr = port.readBytes();   
   let arr = port.readBytes(14); 
 
   //console.log(arr);
   fill(255);
   textSize(20)
   text(arr, 5, height-120);
 
 
      fill(255,0,0);
      ellipse(arr[1]*2,50,40,40); // slider1
 
      if (arr[6] == 200 ) {
           fill(200);
           triangle(150,200,200,150,200,250);
           console.log("clicked left btn");
      }
 
       if (arr[7] == 200 ) {
       fill(200);
       triangle(300,200,250,150,250,250);
        }
 
        if (arr[8] == 200 ) {
         fill(90);
         rect(200,200,200,75);
         fill(255);
         textSize(30);
         text("hide/show",215,225);
        }
 
        if (arr[9] == 200 ) {
         fill(90);
         rect(200,250,200,75);
         fill(255);
         textSize(30);
         text("Update",215,275);
        }
   
 
   //   fill(0,0,255);
   //   ellipse(arr[2],150,40,40);
   //   fill(200,255,0);
   //   ellipse(arr[3],200,40,40);
   //   fill(200,0,255);
   //   ellipse(arr[4],250,40,40);
 
 
   // }
 
 
   } else {
 
    testBtn.html('Connect to Hardware');
    //  connectBtn.html('Connect to Hardware');
   }
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
    // connectBtn.remove();
  }
}

/**
 * A04 More About This Project
 */
function aboutProject() {
  let backBtn;
  
  this.setup = function () {
    textFont(helvFont);
    // let dWidth = windowWidth * .8;
    // let dHeight = windowHeight * .8;
    // let canvas = createCanvas(dWidth, dHeight);
    // let canvasDiv = document.getElementById('vote');
    // canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("start-desc").innerHTML = configJSON.text.detailedDescription;
    document.getElementById("top").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
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

let prevPaneBtn, middleBtn, nextPaneBtn;
/**
 * C01 Load Session
 */
function sLoadSession() {
  let selection;
  let sessions;
  let numResults = 10; // number of sessions shown on screen
  let showCount;
  let dWidth;
  let dHeight;
  let s1, s2, s3, sApproval, div1, div2, div3, divApproval;
  
  this.setup = function () {
    textFont(helvFont);
    // dWidth = windowWidth * .8;
    // dHeight = windowHeight * .8;
    // let canvas = createCanvas(dWidth, dHeight);
    // let canvasDiv = document.getElementById('vote');
    // canvas.parent(canvasDiv);
    background(bColor);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("load sessions scene");
    document.getElementById('dot-p01').className = 'dot-active';
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

    // newSession();
    paramChangedBool = true;
    showCount = 0;

    showPanesBool = true;
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("start-desc").style.display = "none";
    document.getElementById("end-summary").style.display = "block";
    
    if(selection) {
      selection.remove();
    }
    showSessionsList(); // get sessions fr db and display onscreen
    //inputTxt();

    // document.getElementById("top").style.display = "none";
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    document.getElementById("main-btn-div").style.display = "none";
    // let buttonDiv = document.getElementById('main-btn-div');


    if (!document.getElementById('prev-pane-btn')) {
    prevPaneBtn = createButton('Back');
    prevPaneBtn.id('prev-pane-btn');
    prevPaneBtn.class('buttons');
    prevPaneBtn.parent(buttonDiv);
    }

    document.getElementById('prev-pane-btn').disabled = true;

    if (!document.getElementById('middle-btn')) {
    middleBtn = createButton('Show More Sessions');
    middleBtn.id('middle-btn');
    middleBtn.class('buttons');
    middleBtn.parent(buttonDiv);
    } else {
      document.getElementById('middle-btn').innerHTML = 'Show More Sessions';
    }

    if (!document.getElementById('next-pane-btn')) {
    nextPaneBtn = createButton('Next');
    nextPaneBtn.id('next-pane-btn');
    nextPaneBtn.class('buttons');
    nextPaneBtn.parent(buttonDiv);
    }

    prevPaneBtn.mousePressed(previousPane);

    document.getElementById('next-pane-btn').innerHTML = "Next";
    nextPaneBtn.mousePressed(nextPane);
    
    middleBtn.mousePressed(clickedShowMore);

  }

  this.draw = function () {
    if (sessions && selection.value()) { // set c to global var loadedSession
      var i = selection.value();
      console.log("sel val: " + i);
      //console.log("sel val: " + selection.value());
      entireSessionObj = sessions[i];
      loadedConfig = sessions[i].finalConfig.config;
      finalConfigObj = sessions[i].finalConfig; // use for access to edorsements
      endorseVal = finalConfigObj.publicEndorsement; // current public endorsement val
      selectedSessionID = sessions[i].uniqueID; // session ID
      console.log("session id: " + selectedSessionID);
      setLoadedUserVars(loadedConfig);
      setEngineParams(engine);
      document.getElementById("end-summary").innerHTML = "";
      inputTxt();
    }
    paneToggle();
    if (enableHardware) {
    checkHardwareInput();
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
    var emptydb = false;
    
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    // document.getElementById("page1").style.display = "block";
    document.getElementById("top").style.display = "block";
    document.getElementById("top").innerHTML = "<h2>Select Session</h2>"
      //+ configJSON.text.selectSessionDesc
      // + "<br><p>" + getSpaces(15) + "SESSION ID</p>"
      // + getSpaces(12) + " CHAMBERS "
      // + getSpaces(3) + " PARTIES "
      // + getSpaces(4) + " TOTAL VOTING MEMBERS </p>";

    selection = createRadio("sessions"); // attatch to HTML
    selection.size(235);

    getSessions().then((result) => {
      sessions = result;
      console.log(result);
      if (result.length == 0) { // no sessions in db yet
        emptydb = true;
        document.getElementById('next-pane-btn').disabled = true;
        document.getElementById('middle-btn').disabled = true;
        document.getElementById("top").innerHTML = "<h2>No Sessions in Database</h2>"
      //+ configJSON.text.selectSessionDesc
      // + "<br><p style='text-align:center'>&nbsp;&nbsp;&nbsp;&nbsp; SESSION ID "
      // + getSpaces(12) + " CHAMBERS "
      // + getSpaces(3) + " PARTIES "
      // + getSpaces(4) + " TOTAL VOTING MEMBERS </p>" 
      //+ "<div id='session-list'><p>There are no sessions saved to the database yet. Create a new session to save and retrieve it here.</p></div>";
      } else {
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
      // let newDiv = document.createElement('div');
      // let newDiv2 = document.createElement('div');
      // let newDiv3 = document.createElement('div');
      // newDiv.id = 'info-list-1';
      // newDiv2.id = 'info-list-2';
      // newDiv3.id = 'info-list-3';
      let s = ""; //<p>CHAMBERS</p>";
      let s2 = "";
      let s3 = "";
      let s4 = "";
      for (let i=startIX; (i<endIX); i++) {
        console.log("i: " + i);
        let sObj = result[i].finalConfig.config;
        console.log(sObj);
        let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;
        selection.option(result[i].uniqueID, i.toString());
        s += sObj.numLegislativeBodies + "<br>";
        s2 += sObj.numParties + "<br>";
        s3 += totalVoting + "<br>";
        s4 += calcBenchScore(sObj).toString() + "%<br>";
        
      }
      selection.selected(startIX.toString());
      console.log("selected val: " + selection.value());
      // newDiv.innerHTML = s;
      // newDiv2.innerHTML = s2;
      // newDiv3.innerHTML = s3;
      document.getElementById('info-list-1').innerHTML = s;
      document.getElementById('info-list-2').innerHTML = s2;
      document.getElementById('info-list-3').innerHTML = s3;
      document.getElementById('info-list-4').innerHTML = s4;
      // document.getElementById('session-list').appendChild(newDiv);
      // document.getElementById('top').appendChild(newDiv2);
      // document.getElementById('top').appendChild(newDiv3);
      
    } // end else
    });
    //document.getElementById("top").innerHTML += "<div id='session-list'></div>";
    selection.parent("session-list"); // put options in div with border
    selection.class('radio-sel');
    
  }

  function calcBenchScore(sObj) {
    var totalBills = sObj.simResults.length-1; // -1 bc holds a test simulation
    var passed = 0;
    var percentagePassed = 0.0;
    for (let i=1; i<sObj.simResults.length; i++) {
      if (sObj.simResults[i].billPass == true) {
        passed++;
      }
    }
    if (passed > 0) {
      percentagePassed = (passed/totalBills) * 100;
    } else {
      percentagePassed = 0;
    }
    return roundNum(percentagePassed, 2); // out of 100%
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedNext() {
    removeBtns();
    nextPane();
    // setLoadedUserVars(loadedConfig);
    // // mgr.showScene(loadSessionS2);
    // // engine.setDefaultParams();
    // setEngineParams(engine); // set engine params to user vars, which were loaded
    // // reset values for calculations
    // engine.completeReset();
    // visual.completeReset();
    // userEdits = false;
    // reconfigBool = true;

    // engine.currentCongLogic(true); // uncomment if drawing to screen real time
    // mgr.showScene(sBodies);
  }

  function clickedShowMore() {
    selection.remove();
    //showCount++;
    showSessionsList();
  }

  function removeBtns() {
    selection.remove();
    // middleBtn.remove();
    // prevPaneBtn.remove();
    // nextPaneBtn.remove();
  }

  function inputTxt() {
    document.getElementById("end-summary").innerHTML = "<h2>Session ID: " + selectedSessionID + "</h2>";

    s1 = 
      "<h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber1.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber1.partyA * loadedConfig.chamber1.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber1.partyB * loadedConfig.chamber1.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber1.partyC * loadedConfig.chamber1.totalMembers) +
      "</p><h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber2.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber2.partyA * loadedConfig.chamber2.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber2.partyB * loadedConfig.chamber2.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber2.partyC * loadedConfig.chamber2.totalMembers) +
      "</p><h3>Third Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber3.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber3.partyA * loadedConfig.chamber3.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber3.partyB * loadedConfig.chamber3.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber3.partyC * loadedConfig.chamber3.totalMembers) + "</p>";

      s2 =
      "<h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + loadedConfig.vicePres.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.vicePres.partyA * loadedConfig.vicePres.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.vicePres.partyB * loadedConfig.vicePres.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.vicePres.partyC * loadedConfig.vicePres.totalMembers) + 
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + loadedConfig.president.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.president.partyA * loadedConfig.president.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.president.partyB * loadedConfig.president.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.president.partyC * loadedConfig.president.totalMembers) + 
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + (loadedConfig.probabilityYesVote.partyA * 100) + "%" +
      "<br>Political Party B: " + (loadedConfig.probabilityYesVote.partyB * 100) + "%"  +
      "<br>Political Party C: " + (loadedConfig.probabilityYesVote.partyC * 100) + "%"  +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + (loadedConfig.percentMajority * 100) + "%"  +
      "<br> Approval By Supermajority: " + (loadedConfig.percentSupermajority * 100) + "%</p>";
      
      s3 = "<h3>Benchmark Results</h3><p>" ;
      for(let i=1; i<=MAX_SIM_RESULTS; i++) {
        s3 = s3 + loadedConfig.simResults[i].actTitle + " ";
        if (loadedConfig.simResults[i].billPass == true) {
          s3 = s3 + "&#x2611;<br>"; // checkmark
        } else {
          s3 = s3 + "&#x2610;<br>"; // empty checkmark
        }
      }
      s3 = s3 + "</p>";

      if (finalConfigObj.ownerEndorsement == 1) {
        sApproval = "<h3>Creator Endorsement</h3><img id='approval-check' src='./assets/check-mark-txt-col.svg' style='left:37%'>";
      } else {
        sApproval  = "<h3>Creator Endorsement</h3><div id='approval-check'></div>";
      }
      //sApproval = sApproval + "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2610;</h3>";
      // sApproval = sApproval + "<h3>User Approval of Configuration</h3><div id='approval-check'></div>";

      div1.innerHTML = s1;
      div2.innerHTML = s2;
      div3.innerHTML = s3;
      divApproval.innerHTML = sApproval;
      
      document.getElementById('end-summary').appendChild(div1);
      document.getElementById('end-summary').appendChild(div2);
      document.getElementById('end-summary').appendChild(div3);
      div3.appendChild(divApproval);
      // approvalBtn.parent(divApproval);
    }
}

/**
 * C02 Session Visualizations (Graphs)
 */
function sSessionVis() {
  let selection;
  let sessions;
  let numResults = 10; // number of results shown on screen
  let showCount;
  let dWidth;
  let dHeight;
  let s1, s2, s3, sApproval, div1, div2, div3, divApproval;
  
  this.setup = function () {
    textFont(helvFont);
    // if (reconfigBool == true) {
    //   visual.dWidth = windowWidth * .95;
    //     visual.dHeight = (windowHeight * .9)-labelSpace;
    //     canvas = createCanvas(visual.dWidth, windowHeight * .9);
    //     let canvasDiv = document.getElementById('vote');
    //     canvas.parent(canvasDiv);
    //     reconfigBool = false;
    //   }
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("session vis scene");
    document.getElementById('dot-p02').className = 'dot-active';
    // s1 = "";
    // s2 = "";
    // s3 = "";
    // sApproval = "";
    // div1 = document.createElement('div');
    // div2 = document.createElement('div');
    // div3 = document.createElement('div');
    // divApproval = document.createElement('div');
    // div1.id = 's-col-1';
    // div2.id = 's-col-2';
    // div3.id = 's-col-3';
    // divApproval.id = 'approval-div2';

    // // newSession();
    // paramChangedBool = true;
    // showCount = 0;
    showPanesBool = false;
    setTimeout(function () {
      if (mgr.isCurrent(sSessionVis)) {
        showPanesBool = true;
      }
    }, 2500); // 2.5 seconds timeout to show pane
    //showPanesBool = true;
    document.getElementById("page-container").style.display = "none";
    document.getElementById("main-header").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("start-desc").style.display = "none";
    document.getElementById("top").innerHTML = "<h2>Session Visualization</h2>" + "<p>[paragraph here]</p>";
    document.getElementById("end-summary").style.display = "none";
    
    //showSessionsList(); // get sessions fr db and display onscreen
    //inputTxt();

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
    document.getElementById("vote").style.display = "block";

    document.getElementById("main-btn-div").style.display = "none";
    // let buttonDiv = document.getElementById('main-btn-div');

    // prevPaneBtn = createButton('Back');
    // prevPaneBtn.id('back-btn-c01');
    // prevPaneBtn.class('buttons');
    // prevPaneBtn.parent(buttonDiv);
    document.getElementById('prev-pane-btn').disabled = false;

    //middleBtn = createButton('Show More Sessions');
    //middleBtn.id('show-btn-c01');
    // middleBtn.class('buttons');
    // middleBtn.parent(buttonDiv);

    // nextPaneBtn = createButton('Next');
    // nextPaneBtn.id('next-btn-c01');
    // nextPaneBtn.class('buttons');
    // nextPaneBtn.parent(buttonDiv);

    prevPaneBtn.mousePressed(previousPane);

    document.getElementById('next-pane-btn').innerHTML = "Next";
    nextPaneBtn.mousePressed(nextPane);

    document.getElementById('middle-btn').innerHTML = "Refresh";
    middleBtn.mousePressed(clickedRefresh);
    document.getElementById('middle-btn').disabled = false;
    
    //middleBtn.mousePressed(clickedShowMore);
    // fill(255);
    // rect(width/2, height/2, 100, 100);

//     var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = ["red", "green","blue","orange","brown"];

// var c1 = new Chart(document.getElementById("chart1"), {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "World Wine Production 2018"
//     }
//   }
// });

    calcStats();
  }

  function clickedRefresh() {
    console.log("test button clicked");
    showPanesBool = false;
    setTimeout(function () {
      if (mgr.isCurrent(sSessionVis)) {
        showPanesBool = true;
      }
    }, 2500); // 2.5 seconds timeout to show pane
    calcStats();
  }

  function calcStats() {
    getSessions().then((result) => {
      if (result.length == 0) { // no data in database
        return null;
      }
      calcChambers(result);
      calcParties(result);
      calcTotalMembers(result);
      calcBenchScoreWhole(result);
    });
  }

    /**
   * Calculate values for each bracket in the #chambers histogram
   */
    function calcChambers(result) {
        var brackets = 3;
        var xText = ['1', '2', '3'];
        var ranges = [1, 2, 3]; // 1, 2, 3
        var values = [0,0,0];
        var barColors = [,,];
        var bHighlight = "#cccc9d";
        var bRest = "#e85ab4";
        console.log(result);
        if (result.length == 0) {
          return null;
        }
        for (let i=0; i<result.length; i++) {
          let sObj = result[i].finalConfig.config;
          for (let j=0; j<ranges.length; j++) {
            if (sObj.numLegislativeBodies == ranges[j]) {
              values[j]++;
            }
            // set bar color to indicate position
            if (loadedConfig.numLegislativeBodies == ranges[j]) {
              barColors[j] = rectColor2;
            } else {
              barColors[j] = rectColor;
            }
          }
        }
        console.log("chamber ranges: " + ranges);
        console.log("chamber values: " + values);

        displayHistogram(xText, values, "NUMBER OF CHAMBERS", document.getElementById("chart-chambers"), barColors);
    }

    function displayHistogram(ranges, values, title, canvasChart, barColors) {
      // delete Chart if it already exists, to make new chart w the data
      for (let chartId in Chart.instances) {
        if (Chart.instances[chartId].canvas === canvasChart) {
            Chart.instances[chartId].destroy();
        }
      }
      new Chart(canvasChart, {
          type: 'bar',
          data: {
            labels: ranges,
            datasets: [{
              data: values,
              backgroundColor: barColors,
              borderWidth: 1,
              borderColor: textColor,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
            }]
          },
          options: {
            plugins: { 
              legend: { display: false} ,
              title: { 
                display: true,
                text: title,
                color: textColor,
                font: {size: 50},
                padding: {bottom: 20}
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: colorConfig.progressVal
                },
                ticks: {
                  color: textColor,
                  font: {size: 40},
                  stepSize: 1
                }
              },
              x: {
                grid: {
                  color: colorConfig.progressVal
                },
                ticks: {
                  color: textColor,
                  font: {size: 40}
                }
              }
            }
          }
        });
    }
  
  // /**
  //  * Calculate values for each bracket in the #chambers histogram
  //  */
  // function calcChambers() {
  //   getSessions().then((result) => {
  //     var brackets = 3;
  //     var ranges = [1, 2, 3]; // 1, 2, 3
  //     var values = [0,0,0,];
  //     console.log(result);
  //     if (result.length == 0) {
  //       return null;
  //     }
  //     for (let i=0; i<result.length; i++) {
  //       let sObj = result[i].finalConfig.config;
  //       for (let j=0; j<ranges.length; j++) {
  //         if (sObj.numLegislativeBodies == ranges[j]) {
  //           values[j]++;
  //         }
  //       }
  //     }
  //     console.log("chamber ranges: " + ranges);
  //     console.log("chamber values: " + values);
  //   });
  // }

   /**
   * Calculate values for each bracket in the #parties histogram
   */
   function calcParties(result) {
      var brackets = 3;
      var xText = ['1', '2', '3'];
      var ranges = [1, 2, 3]; // 1, 2, 3
      var values = [0,0,0,];
      var barColors = [,,];
      console.log(result);
      if (result.length == 0) {
        return null;
      }
      for (let i=0; i<result.length; i++) {
        let sObj = result[i].finalConfig.config;
        for (let j=0; j<ranges.length; j++) {
          if (sObj.numParties == ranges[j]) {
            values[j]++;
          }
          // set bar color to indicate position
          if (loadedConfig.numParties == ranges[j]) {
            barColors[j] = rectColor2;
          } else {
            barColors[j] = rectColor;
          }
        }
      }
      console.log("parties ranges: " + ranges);
      console.log("parties values: " + values);

      displayHistogram(xText, values, "NUMBER OF PARTIES", document.getElementById("chart-parties"), barColors);
  }

  //  /**
  //  * Calculate values for each bracket in the #parties histogram
  //  */
  //  function calcParties() {
  //   getSessions().then((result) => {
  //     var brackets = 3;
  //     var ranges = [1, 2, 3]; // 1, 2, 3
  //     var values = [0,0,0,];
  //     console.log(result);
  //     if (result.length == 0) {
  //       return null;
  //     }
  //     for (let i=0; i<result.length; i++) {
  //       let sObj = result[i].finalConfig.config;
  //       for (let j=0; j<ranges.length; j++) {
  //         if (sObj.numParties == ranges[j]) {
  //           values[j]++;
  //         }
  //       }
  //     }
  //     console.log("parties ranges: " + ranges);
  //     console.log("parties values: " + values);
  //   });
  // }

     /**
   * Calculate values for each bracket in the #total members histogram
   */
     function calcTotalMembers(result) {
        var brackets = 10;
        var xText = ["2-250", "250-500", "500-750", "750-1000", "1000-1250", "1250-1500", "1500-1750", "1750-2000", "2000-2250", "2250-2500"];
        var ranges = [[2, 250], [250, 500], [500, 750], [750, 1000], [1000, 1250], [1250, 1500], [1500, 1750], [1750, 2000], [2000, 2250], [2250,2501]]; 
        // [start, end)
        // min total members = 2 (1 chamber w 1 member, 1 vp, 0 pres)
        // max total members = 2500 (500 * 5 bodies c1-3 vp pres)
        var values = [0,0,0,0,0,0,0,0,0,0];
        var barColors = [,,,,,,,,,];
        console.log(result);
        if (result.length == 0) {
          return null;
        }
        for (let i=0; i<result.length; i++) {
          let sObj = result[i].finalConfig.config;
          let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;
          for (let j=0; j<ranges.length; j++) {
            if (totalVoting >= ranges[j][0] && totalVoting < ranges[j][1]) {
              values[j]++;
            }

            let loadedTotal = loadedConfig.chamber1.totalMembers + loadedConfig.chamber2.totalMembers + loadedConfig.chamber3.totalMembers + loadedConfig.vicePres.totalMembers + loadedConfig.president.totalMembers;
            // set bar color to indicate position
            if (loadedTotal >= ranges[j][0] && loadedTotal < ranges[j][1]) {
              barColors[j] = rectColor2;
            } else {
              barColors[j] = rectColor;
            }
          }
        }
        console.log("total voting ranges: " + ranges);
        console.log("total voting values: " + values);
        console.log("bar colors members: " + barColors);

        displayHistogram(xText, values, "TOTAL VOTING MEMBERS", document.getElementById("chart-members"), barColors);
    }

  //  /**
  //  * Calculate values for each bracket in the #total members histogram
  //  */
  //  function calcTotalMembers() {
  //   getSessions().then((result) => {
  //     var brackets = 10;
  //     var ranges = [[2, 250], [250, 500], [500, 750], [750, 1000], [1000, 1250], [1250, 1500], [1500, 1750], [1750, 2000], [2000, 2250], [2250,2501]]; 
  //     // min total members = 2 (1 chamber w 1 member, 1 vp, 0 pres)
  //     // max total members = 2500 (500 * 5 bodies c1-3 vp pres)
  //     var values = [0,0,0,0,0,0,0,0,0,0];
  //     console.log(result);
  //     if (result.length == 0) {
  //       return null;
  //     }
  //     for (let i=0; i<result.length; i++) {
  //       let sObj = result[i].finalConfig.config;
  //       let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;
  //       for (let j=0; j<ranges.length; j++) {
  //         if (totalVoting >= ranges[j][0] && totalVoting < ranges[j][1]) {
  //           values[j]++;
  //         }
  //       }
  //     }
  //     console.log("total voting ranges: " + ranges);
  //     console.log("total voting values: " + values);
  //   });
  // }

  function calcBenchScoreWhole(result) {
    var brackets = 10;
    var xText = ["0-10", "10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", "90-100"];
    var ranges = [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90,101]]; 
    var values = [0,0,0,0,0,0,0,0,0,0];
    var barColors = [,,,,,,,,,];
    console.log(result);
    if (result.length == 0) {
      return null;
    }
    for (let i=0; i<result.length; i++) {
      let sObj = result[i].finalConfig.config;
      let iBenchScore = calcBenchScore(sObj);
      for (let j=0; j<ranges.length; j++) {
        if (iBenchScore >= ranges[j][0] && iBenchScore < ranges[j][1]) {
          values[j]++;
        }

        let thisBenchScore = calcBenchScore(loadedConfig);
        // set bar color to indicate position
        if (thisBenchScore >= ranges[j][0] && thisBenchScore < ranges[j][1]) {
          barColors[j] = rectColor2;
        } else {
          barColors[j] = rectColor;
        }
      }
    }
    console.log("total voting ranges: " + ranges);
    console.log("total voting values: " + values);
    console.log("bar colors members: " + barColors);

    displayHistogram(xText, values, "BENCH SCORE", document.getElementById("chart-bench"), barColors);
}

function calcBenchScore(sObj) {
  var totalBills = sObj.simResults.length-1; // -1 bc holds a test simulation
  var passed = 0;
  var percentagePassed = 0.0;
  for (let i=1; i<sObj.simResults.length; i++) {
    if (sObj.simResults[i].billPass == true) {
      passed++;
    }
  }
  if (passed > 0) {
    percentagePassed = (passed/totalBills) * 100;
  } else {
    percentagePassed = 0;
  }
  return roundNum(percentagePassed, 2); // out of 100%
}

  this.draw = function () {
    // fill(255);
    // rect(width/2, height/2, 100, 100);
    console.log("loaded: " + loadedConfig.chamber1.totalMembers);

    paneToggle();
    if (enableHardware) {
    checkHardwareInput();
    }
  }

  function getSpaces(x) {
    let s = "";
    for (i=0; i<x; i++) {
      s += "\u00A0";
    }
    return s;
  }


  function calcBenchScore(sObj) {
    var totalBills = sObj.simResults.length-1; // -1 bc holds a test simulation
    var passed = 0;
    var percentagePassed = 0.0;
    for (let i=1; i<sObj.simResults.length; i++) {
      if (sObj.simResults[i].billPass == true) {
        passed++;
      }
    }
    if (passed > 0) {
      percentagePassed = (passed/totalBills) * 100;
    } else {
      percentagePassed = 0;
    }
    return roundNum(percentagePassed, 2); // out of 100%
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startSession);
  }

  function clickedNext() {
    removeBtns();
    nextPane();
  }

  function clickedShowMore() {
    selection.remove();
    showSessionsList();
  }

  function removeBtns() {
    selection.remove();
    // middleBtn.remove();
    // prevPaneBtn.remove();
    // nextPaneBtn.remove();
  }
}


let paramChangedBool = false;
var labelSpace = 30;
var endorseVal;
/**
 * C01 Load Session
 */
function sPublicEndorsement() {
  let s1, s2, s3, sApproval, div1, div2, div3, divApproval;
  
  this.setup = function () {
    textFont(helvFont);
  }

  this.enter = function () {
    // gui = createGui();
    // continueBtn = createButton("Continue", width/2, height/2);
    console.log("load sessions scene");
    document.getElementById('dot-p03').className = 'dot-active';
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

    // newSession();
    paramChangedBool = true;
    showCount = 0;

    showPanesBool = true;
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("start-desc").style.display = "none";
    document.getElementById("top").innerHTML = "<h2>Public Endorsement</h2>" + "<p style='text-align:center'>Do you endorse this configuration of government?</p>"
    document.getElementById("end-summary").style.display = "block";
    
    inputTxt();

    // document.getElementById("top").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    document.getElementById("vote").style.display = "none";
    document.getElementById("slider-disp").style.display = "none";
    document.getElementById("sim-info").style.display = "none";

    document.getElementById("main-btn-div").style.display = "none";

    if (!document.getElementById('middle-btn')) {
    middleBtn = createButton('Show More Sessions');
    middleBtn.id('middle-btn');
    middleBtn.class('buttons');
    middleBtn.parent(buttonDiv);
    } else {
      document.getElementById('middle-btn').innerHTML = 'Show More Sessions';
    }

    // if (!document.getElementById('next-pane-btn')) {
    // nextPaneBtn = createButton('Next');
    // nextPaneBtn.id('next-pane-btn');
    // nextPaneBtn.class('buttons');
    // nextPaneBtn.parent(buttonDiv);
    // }

    prevPaneBtn.mousePressed(previousPane);

    document.getElementById('next-pane-btn').innerHTML = "Start Over";
    nextPaneBtn.mousePressed(clickedStartOver);

    document.getElementById('middle-btn').innerHTML = "ENDORSE";
    middleBtn.mousePressed(clickedPublicEndorse);

  }

  this.draw = function () {
    paneToggle();
    if (enableHardware) {
    checkHardwareInput();
    }
  }

  function addPublicEndorsement() {
    endorseVal++;
    const updatedField = { 'finalConfig.publicEndorsement': endorseVal }
    updateSessionField(selectedSessionID, updatedField);
  }

  var rest = false;

  function clickedPublicEndorse() {
    showPanesBool = false;
    addPublicEndorsement();
    inputTxt();
    document.getElementById('middle-btn').disabled = true;
  }
  
  function clickedStartOver() {
    removeBtns();
    // showPanesBool = false;
    mgr.showScene(startSession);
  }

  function removeBtns() {
    middleBtn.remove();
    prevPaneBtn.remove();
    nextPaneBtn.remove();
  }

  function inputTxt() {
    document.getElementById("end-summary").innerHTML = "<h2>Session ID: " + selectedSessionID + "</h2>";
    document.getElementById("end-summary").innerHTML += "<h2 id='approval-public'>Public Endorsements: " + endorseVal + "</h2>";

    s1 = 
      "<h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber1.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber1.partyA * loadedConfig.chamber1.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber1.partyB * loadedConfig.chamber1.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber1.partyC * loadedConfig.chamber1.totalMembers) +
      "</p><h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber2.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber2.partyA * loadedConfig.chamber2.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber2.partyB * loadedConfig.chamber2.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber2.partyC * loadedConfig.chamber2.totalMembers) +
      "</p><h3>Third Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber3.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber3.partyA * loadedConfig.chamber3.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber3.partyB * loadedConfig.chamber3.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber3.partyC * loadedConfig.chamber3.totalMembers) + "</p>";

      s2 =
      "<h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + loadedConfig.vicePres.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.vicePres.partyA * loadedConfig.vicePres.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.vicePres.partyB * loadedConfig.vicePres.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.vicePres.partyC * loadedConfig.vicePres.totalMembers) + 
      "</p><h3>Presidency</h3>" +
      "<p>Voting Members: " + loadedConfig.president.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.president.partyA * loadedConfig.president.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.president.partyB * loadedConfig.president.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.president.partyC * loadedConfig.president.totalMembers) + 
      "</p><h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + (loadedConfig.probabilityYesVote.partyA * 100) + "%" +
      "<br>Political Party B: " + (loadedConfig.probabilityYesVote.partyB * 100) + "%"  +
      "<br>Political Party C: " + (loadedConfig.probabilityYesVote.partyC * 100) + "%"  +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + (loadedConfig.percentMajority * 100) + "%"  +
      "<br> Approval By Supermajority: " + (loadedConfig.percentSupermajority * 100) + "%</p>";
      
      s3 = "<h3>Benchmark Results</h3><p>" ;
      for(let i=1; i<=MAX_SIM_RESULTS; i++) {
        s3 = s3 + loadedConfig.simResults[i].actTitle + " ";
        if (loadedConfig.simResults[i].billPass == true) {
          s3 = s3 + "&#x2611;<br>"; // checkmark
        } else {
          s3 = s3 + "&#x2610;<br>"; // empty checkmark
        }
      }
      s3 = s3 + "</p>";

      if (finalConfigObj.ownerEndorsement == 1) {
        sApproval = "<h3>Creator Endorsement</h3><img id='approval-check' src='./assets/check-mark-txt-col.svg' style='left:37%'>";
      } else {
        sApproval  = "<h3>Creator Endorsement</h3><div id='approval-check'></div>";
      }
      //sApproval = sApproval + "<h3 style='font-size: 14px; display: inline-block; vertical-align: top;'>User Approval of Configuration </h3><h3 style='font-size: 32px; display: inline-block; margin: 0; line-height: 1;'>&#x2610;</h3>";
      // sApproval = sApproval + "<h3>User Approval of Configuration</h3><div id='approval-check'></div>";

      div1.innerHTML = s1;
      div2.innerHTML = s2;
      div3.innerHTML = s3;
      divApproval.innerHTML = sApproval;
      
      document.getElementById('end-summary').appendChild(div1);
      document.getElementById('end-summary').appendChild(div2);
      document.getElementById('end-summary').appendChild(div3);
      div3.appendChild(divApproval);
      // approvalBtn.parent(divApproval);
    }
}
