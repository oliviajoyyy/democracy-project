
/**
 * A01 Start Up
 * For future dev - modify startup scenes for chart display if going to have info screens about the chart display
 */
function startUp() {
  let continueBtn, testBtn;

  this.setup = function () {
  }

  this.enter = function () {
    paneScene = false;
    console.log("start up scene");

    document.getElementById("main-header").textContent = configJSON.text.titleVis;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("pane-text").style.display = "none";
    document.getElementById("chart-page").style.display = "none";

    let buttonDiv = document.getElementById('main-btn-div');

    testBtn = createButton('Hardware Test');
    testBtn.id('test-btn-a01');
    testBtn.class('buttons');
    testBtn.parent(buttonDiv);
    testBtn.mousePressed(clickedTest);

    continueBtn = createButton('Continue');
    continueBtn.id('continue-btn-a01');
    continueBtn.class('buttons');
    continueBtn.parent(buttonDiv);
    continueBtn.mousePressed(clickedContinue);

    // setTimeout(function () {
    //     if (mgr.isCurrent(startUp)) { // OC prevents prgm from moving to test screen if already moved on from the first screen
    //       clickedTest();
    //     }
    //     }, 10000); // goes to test scene after 10 seconds
  }

  this.draw = function () {
    if (enableHardware) {
      checkHardwareInput();
      checkHardwareBtnInput();
    }
  }

  /**
   * checks for hardware input to trigger update, then calls clickedUpdate() as defined in this scene
   */
  function checkHardwareBtnInput() {
    if (hLeftBtn == true) {
      clickedTest();
      hLeftBtn = false;
    } 

    if (hRightBtn == true) {
      clickedContinue();
      hRightBtn = false;
    }
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
  let loadSessionBtn, aboutBtn;

  this.setup = function () {
  }

  this.enter = function () {
    paneScene = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("start up scene");

    document.getElementById("main-header").textContent = configJSON.text.titleVis;
    document.getElementById("main-subheader").style.display = "none";
    document.getElementById("main-subheader").textContent = configJSON.text.landingPage.h;
    let paragraphs = configJSON.text.landingPage.p.map((text) => {
      let p = document.createElement('p');
      p.textContent = text;
      return p;
    });
    document.getElementById("main-paragraphs").replaceChildren(...paragraphs);
    document.getElementById("main-page").style.display = "block";

    document.getElementById("main-btn-div").style.display = "block";

    // set up hide/show btn for web version
    if (!enableHardware) {
      togglePaneDiv.style.display = "none";
      infoBtnDiv.style.display = "none";
    }

    let buttonDiv = document.getElementById('main-btn-div');

    aboutBtn = createButton('About the Project');
    aboutBtn.id('about-btn-a02');
    aboutBtn.class('buttons');
    aboutBtn.parent(buttonDiv);
    aboutBtn.mousePressed(clickedAbout);

    loadSessionBtn = createButton('View Sessions');
    loadSessionBtn.id('load-session-btn-a02');
    loadSessionBtn.class('buttons');
    loadSessionBtn.parent(buttonDiv);
    loadSessionBtn.mousePressed(clickedLoad);

    // check for button from other scene
    if (document.getElementById('back-btn-a04')) { // from about page
      document.getElementById('back-btn-a04').remove();
    }

    // if coming from pane scene since inactive, deactive the progress dot
    let activeDot = document.querySelectorAll(".dot-active");
    if (activeDot.length > 0) { 
      activeDot[0].className = 'dot'; // de-activate dot on pane
    }
  }

  this.draw = function () {
    if (enableHardware) {
      checkHardwareInput();
      checkHardwareBtnInput();
    }
  }

  /**
   * checks for hardware input to trigger update, then calls clickedUpdate() as defined in this scene
   */
  function checkHardwareBtnInput() {
    if (hLeftBtn == true) {
      clickedAbout();
      hLeftBtn = false;
    } 

    if (hRightBtn == true) {
      clickedLoad();
      hRightBtn = false;
    }
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
    document.getElementById("main-page").style.display = "none";
    document.getElementById("main-btn-div").style.display = "none";
  }
}



/**
 * A03 Hardware Test
 */
function hardwareTest() {
  let backBtn, testBtn;
  //let port;
  this.setup = function () {
  }

  this.enter = function () {
    paneScene = false;
    console.log("start up scene");
    document.getElementById("main-header").innerHTML = "<h1>Hardware & DB Test </h1>";
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("pane-text").style.display = "none";
    document.getElementById("chart-page").style.display = "none";

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

    testBtn.mousePressed(connectBtnClick);
  }

  function connectBtnClick() {
    if (!port.opened()) {
    //  port.open('Arduino', 57600);
      //port.open(115200);
      port.open(9600);
      //testBtn.html('Disconnect Hardware');
    } else {
      port.close();
      //testBtn.html('Connect to Hardware');
    }
  }
  
  function sendBtnClick() {
    port.write("Hello from p5.js\n");
  }

  this.draw = function () {   
   // changes button label based on connection status
   if (port.opened()) {
    testBtn.html('Disconnect Hardware');
    let arr = port.readBytes(14); 
   } else {
    testBtn.html('Connect to Hardware');
   }

   if (enableHardware) {
    checkHardwareInput();
    checkHardwareBtnInput();
  }
}
  /**
   * checks for hardware input to trigger update, then calls clickedUpdate() as defined in this scene
   */
  function checkHardwareBtnInput() {
    if (hLeftBtn == true) {
      clickedBack();
      hLeftBtn = false;
    } 
    if (hRightBtn == true) {
      connectBtnClick();
      hRightBtn = false;
    }
  }

  function clickedBack() {
    removeBtns();
    mgr.showScene(startUp);
  }

  function clickedTest() {
    removeBtns();
    //mgr.showScene(); // scene TBA
  }

  function removeBtns() {
    backBtn.remove();
    testBtn.remove();
  }
}

/**
 * A04 More About This Project
 */
function aboutProject() {
  let backBtn;
  
  this.setup = function () {
  }

  this.enter = function () {
    paneScene = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log("start up scene");

    document.getElementById("main-header").textContent = configJSON.text.titleVis;
    document.getElementById("main-subheader").style.display = "none";
    document.getElementById("main-subheader").textContent = configJSON.text.aboutPage.h;
    let paragraphs = configJSON.text.aboutPage.p.map((text) => {
      let p = document.createElement('p');
      p.textContent = text;
      return p;
    });
    document.getElementById("main-paragraphs").replaceChildren(...paragraphs);
    document.getElementById("main-page").style.display = "block";  

    document.getElementById("main-btn-div").style.display = "block";
    let buttonDiv = document.getElementById('main-btn-div');

    backBtn = createButton('Back to Start Up');
    backBtn.id('back-btn-a04');
    backBtn.class('buttons');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);
  }

  this.draw = function () {
    if (enableHardware) {
      checkHardwareInput();
      checkHardwareBtnInput();
    }
  }

  /**
   * checks for hardware input to trigger update, then calls clickedUpdate() as defined in this scene
   */
  function checkHardwareBtnInput() {
    if (hMidBtn == true) {
      clickedBack();
      hMidBtn = false;
    } 
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
  // let selection;
  let sessions; // array of sessions fetched from db
  let documentsShown = 5; // number of sessions shown on screen
  var skipAmt; // number of session records to skip, updated when buttons clicked
  let sessionsDiv;
  let sessionsTable;
  let divCh1, divCh2, divCh3, divVP, divPres, divProb, divPercent, divBench, divEndorse;
  let s1, s2, s3, sVP, sPres, sProb, sPercent, sBench, sEndorse;
  
  this.setup = function () {
  }

  this.enter = function () {
    paneScene = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log("load sessions scene");
    document.getElementById('dot-p01').className = 'dot-active';
    
    divCh1 = document.getElementById('s-ch1');
    divCh2 = document.getElementById('s-ch2');
    divCh3 = document.getElementById('s-ch3');
    divVP = document.getElementById('s-vp');
    divPres = document.getElementById('s-pres');
    divProb = document.getElementById('s-probability');
    divPercent = document.getElementById('s-percentage');
    divBench = document.getElementById('s-benchmark');
    divEndorse = document.getElementById('s-endorsement');

    paramChangedBool = true;
    skipAmt = 0;

    showPanesBool = true;

    // set up page display
    document.getElementById("end-summary").style.display = "block"; // main page display (behind pane)
    document.getElementById("sessions-list").style.display = "block";
    document.getElementById("chart-page").style.display = "none";
    document.getElementById("main-header").textContent = configJSON.text.titleVis;
    
    // set up hide/show btn for web version
    if (!enableHardware) {
      togglePaneDiv.style.display = "block";
      infoBtnDiv.style.display = "block";
    }

    if (!document.getElementById('prev-pane-btn')) {
    // set up either show more or scroll buttons
    if (enableHardware) { // kiosk version
      prevPaneBtn = createButton('Scroll Up');
      prevPaneBtn.mousePressed(clickedScrollUp);
    } else {
      prevPaneBtn = createButton('&larr; Back');
      prevPaneBtn.mousePressed(previousPane);
    }
    prevPaneBtn.id('prev-pane-btn');
    prevPaneBtn.class('buttons');
    prevPaneBtn.parent(buttonDiv);
    }

    // set up either show more or scroll buttons
    if (enableHardware) { // kiosk version
      document.getElementById('prev-pane-btn').innerHTML = 'Scroll Up';
      prevPaneBtn.mousePressed(clickedScrollUp);
    } else {
      document.getElementById('prev-pane-btn').innerHTML = 'Previous ' + documentsShown;
      prevPaneBtn.mousePressed(clickedShowPrev);
    }
    
    //document.getElementById('prev-pane-btn').disabled = true;

    if (middleBtn) {
      middleBtn.remove();
    }
    if (!document.getElementById('middle-btn')) {
      if (enableHardware) {
        middleBtn = createButton('Scroll Down');
        middleBtn.mousePressed(clickedScrollDown);
      } else {
        middleBtn = createButton('Show Next ' + documentsShown);
        middleBtn.mousePressed(clickedShowMore);
      }
    middleBtn.id('middle-btn');
    middleBtn.class('buttons');
    middleBtn.parent(buttonDiv);
    } else {
      if (enableHardware) {
        document.getElementById('middle-btn').innerHTML = 'Scroll Down';
        middleBtn.mousePressed(clickedScrollDown);
      } else {
        document.getElementById('middle-btn').innerHTML = 'Show Next ' + documentsShown;
        middleBtn.mousePressed(clickedShowMore);
      }
    }

    if (nextPaneBtn) {
      nextPaneBtn.remove();
    }

    if (!document.getElementById('next-pane-btn')) {
    nextPaneBtn = createButton('Select &rarr;');
    nextPaneBtn.id('next-pane-btn');
    nextPaneBtn.class('buttons');
    nextPaneBtn.parent(buttonDiv);
    }
    document.getElementById('next-pane-btn').innerHTML = 'Select &rarr;';

    document.getElementById('prev-pane-btn').disabled = false;
    document.getElementById('next-pane-btn').disabled = false;
    document.getElementById('middle-btn').disabled = false;
    // prevPaneBtn.mousePressed(clickedScrollUp);
    // middleBtn.mousePressed(clickedScrollDown);
    nextPaneBtn.mousePressed(nextPane);

    // create sessions div
    //sessionsDiv = document.createElement('div');
    //sessionsDiv.id = 'sessions-list';
    sessionsDiv = document.getElementById('sessions-list');

    showSessionsList(); // get sessions fr db and display onscreen
  }

  this.draw = function () {
    if (sessions && sessions.length > 0) {
      // console.log("sessions: " + sessions);
      indicateSelectedRow(); // makes text color of row change
      let i = getSelectedRadioValue();
      entireSessionObj = sessions[i];
      loadedConfig = sessions[i].finalConfig.config;
      finalConfigObj = sessions[i].finalConfig; // use for access to edorsements
      endorseVal = finalConfigObj.publicEndorsement; // current public endorsement val
      selectedSessionID = sessions[i].uniqueID; // session ID
      setLoadedUserVars(loadedConfig);
      inputTxt();
    }

    paneToggle();

    if (enableHardware) {
      checkHardwareInput();
      checkHardwareBtnInput();
    }
  }

  /**
   * checks for hardware input to trigger update, then calls clickedUpdate() as defined in this scene
   */
  function checkHardwareBtnInput() {
    if (hLeftBtn == true) {
      if (sessions && sessions.length == 0) {
        previousPane();
      } else {
        clickedScrollUp();
      }
      hLeftBtn = false;
    } 
    if (hMidBtn == true) {
      clickedScrollDown();
      hMidBtn = false;
    }
    if (hRightBtn == true) {
      if (sessions && sessions.length > 0) {
      nextPane();
      }
      hRightBtn = false;
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
    // document.getElementById("pane-text").style.display = "block";
    document.getElementById("pane-header").textContent = configJSON.text.pSavedSessionsVis.h;
    document.getElementById("pane-description").textContent = configJSON.text.pSavedSessionsVis.p;

    // Web version - Start Over button if at the beginning of sessions list, else button is Show Previous
    // Changing btn to start over prevents skipAmt from going below 0
    if (!enableHardware && skipAmt == 0) {
      document.getElementById('prev-pane-btn').innerHTML = "&larr; Back";
      prevPaneBtn.mousePressed(previousPane);
    } else if (!enableHardware) {
      document.getElementById('prev-pane-btn').innerHTML = "Previous " + documentsShown;
      prevPaneBtn.mousePressed(clickedShowPrev);
    }

    getTotalCount().then((totalCount) => {
      // Disable Show Next btn if skipAmt would go over totalCount next time it is clicked
      if (skipAmt + documentsShown >= totalCount) {
        document.getElementById('middle-btn').disabled = true;
      } else {
        document.getElementById('middle-btn').disabled = false;
      }

      if (totalCount == 0) { // no sessions in db yet
        // set back button
        document.getElementById('prev-pane-btn').innerHTML = "Back";
        prevPaneBtn.mousePressed(clickedBack);

        // disable btn 2 and next (select) button
        document.getElementById('middle-btn').disabled = true;
        document.getElementById('next-pane-btn').disabled = true;

        // text about no sessions saved yet
        let p = document.createElement('p');
        p.textContent = configJSON.text.selectSessionPage.pNoneDB;
        sessionsDiv.replaceChildren(p); // replace table with paragraph
        //document.getElementById('page1').replaceChildren(sessionsDiv);

      } else {
      // get session data
      getLimitedSessions(skipAmt, documentsShown).then((result) => {
      sessions = result;
      // console.log(result);

      // set up table for showing sessions
      sessionsTable = document.createElement('table');

      let tblHead = document.createElement('thead');
      let tblBody = document.createElement('tbody');
      sessionsTable.append(tblHead, tblBody);

      let hRow = document.createElement('tr');
      let tblHeaders = Array.from({length: 6}, () => document.createElement('th'));
      tblHeaders[0].textContent = "";
      tblHeaders[1].textContent = "Session ID";
      tblHeaders[2].textContent = "Chambers";
      tblHeaders[3].textContent = "Parties";
      tblHeaders[4].textContent = "Voting Members";
      tblHeaders[5].textContent = "Benchmark Score";
      hRow.append(...tblHeaders);
      tblHead.appendChild(hRow);
      sessionsTable.appendChild(tblHead);

      // add selection with data columns for each row of the table
      for (let i = 0; i < result.length; i++) {
        let sObj = result[i].finalConfig.config;
        let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;

        // set up each row with radio btn, sessionID, numLegislativeBodies, numParties, totalVoting
        let tRow = document.createElement('tr');
        let tData = Array.from({length: 6}, () => document.createElement('td'));
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "sessions-radio";
        radio.value = i; // value is index position
        if (i == 0) { radio.checked = true }; // set first one as selected
        tData[0].appendChild(radio);
        tData[1].textContent = result[i].uniqueID;
        tData[2].textContent = sObj.numLegislativeBodies;
        tData[3].textContent = sObj.numParties;
        tData[4].textContent = totalVoting;
        tData[5].textContent = calcBenchScore(sObj).toString() + "%";
        tRow.append(...tData);
        tblBody.appendChild(tRow);
        
      }
      sessionsTable.appendChild(tblBody);
      sessionsDiv.replaceChildren(sessionsTable);
      //document.getElementById('page1').replaceChildren(sessionsDiv);

      // make each row of table body clickable for radio selection
      sessionsTable.addEventListener('click', function(event) {
        let clickedRow = event.target.closest('tr');
        if (clickedRow && clickedRow.parentNode.tagName === 'TBODY') {
          let cell = clickedRow.querySelector('td');
          let radio = cell.querySelector('input[name="sessions-radio"]');
          if (radio) { radio.checked = true; }
        }
      })

    }); // end else
    }
    })
    
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

    function getSelectedRadioValue() {
    let selected = document.querySelector('input[name="sessions-radio"]:checked');
    // console.log("selected: " + selected);
    if (selected) {
      return selected.value; // the index in the sessions array
    }
  }

  function indicateSelectedRow() {
    let selected = document.querySelector('input[name="sessions-radio"]:checked');
    let rows = sessionsTable.getElementsByTagName('tr');
    for (const row of rows) {
      row.classList.remove("tbl-row-selected");
    }
    if (selected) {
      let selectedRow = selected.closest('tr');
      selectedRow.classList.add("tbl-row-selected")
    }
  }

    function clickedScrollUp() {
    let currentSelected = getSelectedRadioValue(); // current selected val
    let toSelect = parseInt(currentSelected) - 1;
    // decrement ix to select next radio above, otherwise keeps selection at first option if ix is already 0
    if (currentSelected > 0) {
      let radio = document.querySelector(`input[name="sessions-radio"][value="${toSelect}"]`);
      if (radio) { radio.checked = true; }
    }
  }

  function clickedScrollDown() {
    let currentSelected = getSelectedRadioValue(); // current selected val
    let toSelect = parseInt(currentSelected) + 1;
    // increment ix to select next radio below, otherwise keeps selection at last option
    if (currentSelected < documentsShown) {
      let radio = document.querySelector(`input[name="sessions-radio"][value="${toSelect}"]`);
      if (radio) { radio.checked = true; }
    }
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
    skipAmt += documentsShown;
    showSessionsList();
  }

  function clickedShowPrev() {
    skipAmt -= documentsShown;
    showSessionsList();
  }

  function removeBtns() {
    // selection.remove();
  }

  function inputTxt() {
    //document.getElementById("end-summary").innerHTML = "<h2>Session ID: " + selectedSessionID + "</h2>";

    let h2 = document.getElementById('save-id');
    h2.textContent = "Session ID: " + selectedSessionID;
    
    s1 = 
      "<h3>First Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber1.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber1.partyA * loadedConfig.chamber1.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber1.partyB * loadedConfig.chamber1.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber1.partyC * loadedConfig.chamber1.totalMembers) +
      "</p>";
      
    s2 = "<h3>Second Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber2.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber2.partyA * loadedConfig.chamber2.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber2.partyB * loadedConfig.chamber2.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber2.partyC * loadedConfig.chamber2.totalMembers) +
      "</p>";
      
    s3 = "<h3>Third Legislative Chamber</h3>" +
      "<p>Voting Members: " + loadedConfig.chamber3.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.chamber3.partyA * loadedConfig.chamber3.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.chamber3.partyB * loadedConfig.chamber3.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.chamber3.partyC * loadedConfig.chamber3.totalMembers) + 
      "</p>";

    sVP = "<h3>Vice Presidency</h3>" +
      "<p>Voting Members: " + loadedConfig.vicePres.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.vicePres.partyA * loadedConfig.vicePres.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.vicePres.partyB * loadedConfig.vicePres.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.vicePres.partyC * loadedConfig.vicePres.totalMembers) + 
      "</p>";
      
    sPres = "<h3>Presidency</h3>" +
      "<p>Voting Members: " + loadedConfig.president.totalMembers +
      "<br>Members in Political Party A: " + Math.round(loadedConfig.president.partyA * loadedConfig.president.totalMembers) +
      "<br>Members in Political Party B: " + Math.round(loadedConfig.president.partyB * loadedConfig.president.totalMembers) +
      "<br>Members in Political Party C: " + Math.round(loadedConfig.president.partyC * loadedConfig.president.totalMembers) + 
      "</p>";
    
    sProb = "<h3>Likelihood of Yes Vote: </h3>" +
      "<p>Political Party A: " + Math.round(loadedConfig.probabilityYesVote.partyA * 100) + "%" +
      "<br>Political Party B: " + Math.round(loadedConfig.probabilityYesVote.partyB * 100) + "%"  +
      "<br>Political Party C: " + Math.round(loadedConfig.probabilityYesVote.partyC * 100) + "%"  +
      "</p>";
    
    sPercent = "<h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + Math.round(loadedConfig.percentMajority * 100) + "%"  +
      "<br> Approval By Supermajority: " + Math.round(loadedConfig.percentSupermajority * 100) + "%</p>";
      
    sBench = "<h3>Benchmark Results</h3><p>" ;
      for(let i=1; i<=MAX_SIM_RESULTS; i++) {
        sBench = sBench + loadedConfig.simResults[i].actTitle + " ";
        if (loadedConfig.simResults[i].billPass == true) {
          sBench = sBench + "&#x2611;<br>"; // checkmark
        } else {
          sBench = sBench + "&#9746;<br>"; // empty checkmark
        }
      }
    sBench = sBench + "</p>";

    sEndorse = "<h3>Endorsement</h3>" +
      "<p class='summary'>Number of User Endorsements: <span>" + (finalConfigObj.ownerEndorsement + finalConfigObj.publicEndorsement) + "</span></p>";

    divCh1.innerHTML = s1;
    divCh2.innerHTML = s2;
    divCh3.innerHTML = s3;
    divVP.innerHTML = sVP;
    divPres.innerHTML = sPres;
    divProb.innerHTML = sProb;
    divPercent.innerHTML = sPercent;
    divBench.innerHTML = sBench;
    divEndorse.innerHTML = sEndorse;
    }
}

/**
 * C02 Session Visualizations (Graphs)
 */
function sSessionVis() {
  let selection;
  
  this.setup = function () {
  }

  this.enter = function () {
    paneScene = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log("session vis scene");
    document.getElementById('dot-p02').className = 'dot-active';

    showPanesBool = false;
    setTimeout(function () {
      if (mgr.isCurrent(sSessionVis)) {
        showPanesBool = true;
      }
    }, 2500); // 2.5 seconds timeout to show pane
    //showPanesBool = true;

    // set up page display
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("chart-page").style.display = "block";
    document.getElementById("main-header").textContent = configJSON.text.pSessionChartsVis.h;

    document.getElementById("chart-subtitle").innerHTML = "Session ID: " + selectedSessionID;
    document.getElementById("pane-header").textContent = configJSON.text.pSessionChartsVis.h;
    document.getElementById("pane-description").textContent = configJSON.text.pSessionChartsVis.p;

    document.getElementById('prev-pane-btn').disabled = false;
    document.getElementById('prev-pane-btn').innerHTML = '&larr; Back';

    if (middleBtn) {
      middleBtn.remove();
    }

    if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Next &rarr;');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
    }
    document.getElementById('next-pane-btn').innerHTML = 'Next &rarr;';

    prevPaneBtn.mousePressed(previousPane);
    nextPaneBtn.mousePressed(nextPane);

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
        //console.log(result);
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
              barColors[j] = barDark;
            }
          }
        }
        //console.log("chamber ranges: " + ranges);
        //console.log("chamber values: " + values);

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

   /**
   * Calculate values for each bracket in the #parties histogram
   */
   function calcParties(result) {
      var brackets = 3;
      var xText = ['1', '2', '3'];
      var ranges = [1, 2, 3]; // 1, 2, 3
      var values = [0,0,0,];
      var barColors = [,,];
      // console.log(result);
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
            barColors[j] = barDark;
          }
        }
      }
      //console.log("parties ranges: " + ranges);
      //console.log("parties values: " + values);

      displayHistogram(xText, values, "NUMBER OF PARTIES", document.getElementById("chart-parties"), barColors);
  }

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
        // console.log(result);
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
              barColors[j] = barDark;
            }
          }
        }
        //console.log("total voting ranges: " + ranges);
        //console.log("total voting values: " + values);
        //console.log("bar colors members: " + barColors);

        displayHistogram(xText, values, "TOTAL VOTING MEMBERS", document.getElementById("chart-members"), barColors);
    }

  function calcBenchScoreWhole(result) {
    var brackets = 10;
    var xText = ["0-10%", "10-20%", "20-30%", "30-40%", "40-50%", "50-60%", "60-70%", "70-80%", "80-90%", "90-100%"];
    var ranges = [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90,101]]; 
    var values = [0,0,0,0,0,0,0,0,0,0];
    var barColors = [,,,,,,,,,];
    // console.log(result);
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
          barColors[j] = barDark;
        }
      }
    }
    // console.log("total voting ranges: " + ranges);
    // console.log("total voting values: " + values);
    // console.log("bar colors members: " + barColors);

    displayHistogram(xText, values, "BENCHMARK SCORE", document.getElementById("chart-bench"), barColors);
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
    paneToggle();
    if (enableHardware) {
    checkHardwareInput();
    }
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
var allowEndorse = true;
/**
 * C01 Load Session
 */
function sPublicEndorsement() {
  // let s1, s2, s3, div1, div2, div3;
  
  this.setup = function () {
  }

  this.enter = function () {
    paneScene = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log("load sessions scene");
    allowEndorse = true;
    document.getElementById('dot-p03').className = 'dot-active';
    // s1 = "";
    // s2 = "";
    // s3 = "";
    // div1 = document.createElement('div');
    // div2 = document.createElement('div');
    // div3 = document.createElement('div');
    // div1.id = 's-col-1';
    // div2.id = 's-col-2';
    // div3.id = 's-col-3';

    paramChangedBool = true;
    showCount = 0;

    showPanesBool = true;
    document.getElementById("end-summary").style.display = "block";
    document.getElementById("chart-page").style.display = "none";
    // document.getElementById("main-header").style.display = "none";
    document.getElementById("main-header").textContent = configJSON.text.titleVis;

    document.getElementById("pane-header").textContent = configJSON.text.pEndorsementVis.h;
    document.getElementById("pane-description").textContent = configJSON.text.pEndorsementVis.p;
    
    // larger and highlighted endorsement
    let divEndorse = document.getElementById('s-endorsement')
    let sEndorse = "<h4 class='endorsement-txt'>Endorsement</h4>" +
      "<p>Number of User Endorsements: <span class='endorsement-txt'>" + (endorseVal + finalConfigObj.ownerEndorsement) + "</span></p>";
    divEndorse.innerHTML = sEndorse;
    // inputTxt();

    if (!document.getElementById('middle-btn')) {
    middleBtn = createButton('Endorse');
    middleBtn.id('middle-btn');
    middleBtn.class('buttons');
    middleBtn.parent(buttonDiv);
    } else {
      document.getElementById('middle-btn').innerHTML = 'Endorse';
    }

    if (nextPaneBtn) 
      nextPaneBtn.remove();

    if (!document.getElementById('next-pane-btn')) {
      nextPaneBtn = createButton('Start Over');
      nextPaneBtn.id('next-pane-btn');
      nextPaneBtn.class('buttons');
      nextPaneBtn.parent(buttonDiv);
    } else {
      document.getElementById('next-pane-btn').innerHTML = 'Start Over';
    }

    prevPaneBtn.mousePressed(previousPane);
    middleBtn.mousePressed(clickedPublicEndorse);
    nextPaneBtn.mousePressed(clickedStartOver);
  }

  this.draw = function () {
    // if (document.getElementById('prev-pane-btn').disabled) {
    //   showPanesBool = false;
    // }
    paneToggle();
    if (enableHardware) { // add check to prevent hardware from moving panes
      // if (document.getElementById('prev-pane-btn').disabled == false)
        checkHardwareInput();
        checkHardwareBtnInput();
    }
  }

  /**
   * checks for hardware input to trigger update, then calls clickedUpdate() as defined in this scene
   */
  function checkHardwareBtnInput() {
    if (hMidBtn == true) {
      if (allowEndorse) {
        clickedPublicEndorse();
      }
      hMidBtn = false;
    }
    if (hRightBtn == true) {
      clickedStartOver();
      hRightBtn = false;
    }
  }

  function addPublicEndorsement() {
    endorseVal++;
    const updatedField = { 'finalConfig.publicEndorsement': endorseVal }
    updateSessionField(selectedSessionID, updatedField);
  }

  var rest = false;

  function clickedPublicEndorse() {
    allowEndorse = false;
    showPanesBool = false;
    addPublicEndorsement();
    //inputTxt();
    // update endorsement number and highlight text
    let divEndorse = document.getElementById('s-endorsement')
    let sEndorse = "<h4 class='endorsement-txt'>Endorsement</h4>" +
      "<p>Number of User Endorsements: <span class='endorsement-txt'>" + (endorseVal + finalConfigObj.ownerEndorsement) + "</span></p>";
    divEndorse.innerHTML = sEndorse;

    document.getElementById('middle-btn').disabled = true;
    // document.getElementById('next-pane-btn').disabled = true;
    document.getElementById('prev-pane-btn').disabled = true;
    document.getElementById("pane-description").textContent = configJSON.text.pEndorsementVis.pAfterEndorse;

    // also need to disallow key press when prev/next buttons are disabled
    setTimeout(function() {
      showPanesBool = true;
    }, 5000); // 15 seconds on this screen
  }
  
  function clickedStartOver() {
    removeBtns();
    // showPanesBool = false;
    allowEndorse = true;
    mgr.showScene(startSession);
  }

  function removeBtns() {
    middleBtn.remove();
    prevPaneBtn.remove();
    nextPaneBtn.remove();

    // last pane - dont show pane items and summary
    document.getElementById("end-summary").style.display = "none";
    document.getElementById("pane-bkg").style.display = "none";
    document.getElementById("pane-text").style.display = "none";
    document.getElementById("screen").style.display = "none";
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
      "<p>Political Party A: " + Math.round(loadedConfig.probabilityYesVote.partyA * 100) + "%" +
      "<br>Political Party B: " + Math.round(loadedConfig.probabilityYesVote.partyB * 100) + "%"  +
      "<br>Political Party C: " + Math.round(loadedConfig.probabilityYesVote.partyC * 100) + "%"  +
      "</p><h3>Percentage of votes required for approval of bill</h3>" +
      "<p>Approval By Majority: " + Math.round(loadedConfig.percentMajority * 100) + "%"  +
      "<br> Approval By Supermajority: " + Math.round(loadedConfig.percentSupermajority * 100) + "%</p>";
      
      s3 = "<h3>Benchmark Results</h3><p>" ;
      for(let i=1; i<=MAX_SIM_RESULTS; i++) {
        s3 = s3 + loadedConfig.simResults[i].actTitle + " ";
        if (loadedConfig.simResults[i].billPass == true) {
          s3 = s3 + "&#x2611;<br>"; // checkmark
        } else {
          s3 = s3 + "&#9746;<br>"; // empty checkmark
        }
      }
      s3 = s3 + "</p>";

      s3 += "<h3 class='endorsement-txt'>Endorsement</h3>";
      s3 += "<p>Number of User Endorsements: <span class='endorsement-txt'>" + (endorseVal + finalConfigObj.ownerEndorsement) + "</span></p>";

      div1.innerHTML = s1;
      div2.innerHTML = s2;
      div3.innerHTML = s3;
      
      document.getElementById('end-summary').appendChild(div1);
      document.getElementById('end-summary').appendChild(div2);
      document.getElementById('end-summary').appendChild(div3);
    }
}
