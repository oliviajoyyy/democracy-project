
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
  let newSessionBtn, loadSessionBtn, aboutBtn;

  this.setup = function () {
    textFont(helvFont);
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
    mgr.showScene(sSessionVis);
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
    background(bColor);

  }

  this.enter = function () {
    console.log("start up scene");
    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = "<h1>Hardware & DB Test </h1>";
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("start-desc").style.display = "none";

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
   // changes button label based on connection status
   if (port.opened()) {
  
    testBtn.html('Disconnect');
   //let arr = port.readBytes();   
   let arr = port.readBytes(14); 
 
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
    background(bColor);
  }

  this.enter = function () {
    console.log("start up scene");

    document.getElementById("page-container").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("main-btn-div").style.display = "block";
    document.getElementById("start-desc").style.display = "block";
    document.getElementById("start-desc").innerHTML = configJSON.text.detailedDescription;


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
  let time = 0;
  let interval = 15000; // 15 seconds per graph
  var count = 0;

  let graphs = [
    calcChambers,
    calcParties,
    calcTotalMembers,
    calcBenchScoreWhole
  ]
  
  this.setup = function () {
    textFont(helvFont);
  }

  this.enter = function () {
    console.log("session vis scene");
    document.getElementById("page-container").style.display = "none";
    document.getElementById("main-header").style.display = "block";
    document.getElementById("main-header").innerHTML = configJSON.text.titleVis;
    document.getElementById("start-desc").innerHTML = "";
    document.getElementById("start-desc").style.display = "none";

    calcStats();
  }


  this.draw = function () {

    if (millis() - time > interval) {
      calcStats();
      time = millis();
    }

    if (enableHardware) {
    checkHardwareInput();
    }
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
      if (count < graphs.length) {
        graphs[count](result);
      }
      count++;
      if (count == graphs.length) {
        count = 0;
      }
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
        // console.log(result);
        if (result.length == 0) {
          return null;
        }
        for (let i=0; i<result.length; i++) {
          let sObj = result[i].finalConfig.config;
          for (let j=0; j<ranges.length; j++) {
            if (sObj.numLegislativeBodies == ranges[j]) {
              values[j]++;
            }
              barColors[j] = barDark;
          }
        }
        // console.log("chamber ranges: " + ranges);
        // console.log("chamber values: " + values);

        displayHistogram(xText, values, "NUMBER OF CHAMBERS", document.getElementById("chart"), barColors);
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
            barColors[j] = barDark;
        }
      }
      // console.log("parties ranges: " + ranges);
      // console.log("parties values: " + values);

      displayHistogram(xText, values, "NUMBER OF PARTIES", document.getElementById("chart"), barColors);
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
              barColors[j] = barDark;

          }
        }
        // console.log("total voting ranges: " + ranges);
        // console.log("total voting values: " + values);
        // console.log("bar colors members: " + barColors);

        displayHistogram(xText, values, "TOTAL VOTING MEMBERS", document.getElementById("chart"), barColors);
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
          barColors[j] = barDark;
      }
    }
    // console.log("total voting ranges: " + ranges);
    // console.log("total voting values: " + values);
    // console.log("bar colors members: " + barColors);

    displayHistogram(xText, values, "BENCHMARK SCORE", document.getElementById("chart"), barColors);
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
  }
}
