
var mgr;

// colors
var bColor;
var textColor;
var barDark;

// json
var configJSON;
var colorConfig;

var webVersion; // boolean

// web buttons
var buttonDiv;
var backBtn;
var nextBtn;

function preload() {
  configJSON = loadJSON('../config/config.json');
}


function setup() {
  colorConfig = configJSON.cssParams;
  bColor = colorConfig.background;
  textColor = colorConfig.text;
  barDark = colorConfig.barDark;

  // check kiosk flag
  var kioskFlag = sessionStorage.getItem('kioskFlag');
  if (kioskFlag == 'false') {
    webVersion = true;

    // set up buttons for web version
    buttonDiv = document.getElementById('main-btn-div');
    backBtn = createButton('&larr; Back');
    backBtn.id('back-btn');
    backBtn.parent(buttonDiv);
    backBtn.mousePressed(clickedBack);

    nextBtn = createButton('Next &rarr;');
    nextBtn.id('next-btn');
    nextBtn.parent(buttonDiv);
    nextBtn.mousePressed(clickedNext);
    buttonDiv.style.display = "block";

  } else {
    webVersion = false;
  }

  mgr = new SceneManager();
  if (webVersion) {
    mgr.addScene(chartChambers);
    mgr.addScene(chartParties);
    mgr.addScene(chartTotalMembers);
    mgr.addScene(chartBenchmarkScores);
  } else {
    mgr.addScene(sSessionVis);
  }
  mgr.showNextScene();
  // mgr.showScene(sSessionVis);
  
  noCanvas();
  console.log("end of scene-mgr.js setup");
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

function roundNum(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

  /**
   * Calculate values for each bracket in the #chambers histogram
   */
  function calcChambers(result) {
    var xText = ['1', '2', '3'];
    var ranges = [1, 2, 3]; // 1, 2, 3
    var values = [0, 0, 0];
    var barColors = [, ,];

    if (result.length == 0) {
      return null;
    }
    for (let i = 0; i < result.length; i++) {
      let sObj = result[i].finalConfig.config;
      for (let j = 0; j < ranges.length; j++) {
        if (sObj.numLegislativeBodies == ranges[j]) {
          values[j]++;
        }
        barColors[j] = barDark;
      }
    }

    let xLabel = "Number of Chambers";
    let yLabel = "Total Sessions";

    displayHistogram(xText, values, "LEGISLATIVE CHAMBERS", document.getElementById("chart"), barColors, xLabel, yLabel);
  }

  /**
  * Calculate values for each bracket in the #parties histogram
  */
  function calcParties(result) {
    var xText = ['1', '2', '3'];
    var ranges = [1, 2, 3]; // 1, 2, 3
    var values = [0, 0, 0,];
    var barColors = [, ,];

    if (result.length == 0) {
      return null;
    }
    for (let i = 0; i < result.length; i++) {
      let sObj = result[i].finalConfig.config;
      for (let j = 0; j < ranges.length; j++) {
        if (sObj.numParties == ranges[j]) {
          values[j]++;
        }
        barColors[j] = barDark;
      }
    }

    let xLabel = "Number of Parties";
    let yLabel = "Total Sessions";

    displayHistogram(xText, values, "PARTIES", document.getElementById("chart"), barColors, xLabel, yLabel);
  }

  /**
   * Calculate values for each bracket in the #total members histogram
   */
  function calcTotalMembers(result) {
    var brackets = 10;
    var xText = ["2-250", "250-500", "500-750", "750-1000", "1000-1250", "1250-1500", "1500-1750", "1750-2000", "2000-2250", "2250-2500"];
    var ranges = [[2, 250], [250, 500], [500, 750], [750, 1000], [1000, 1250], [1250, 1500], [1500, 1750], [1750, 2000], [2000, 2250], [2250, 2501]];
    // [start, end)
    // min total members = 2 (1 chamber w 1 member, 1 vp, 0 pres)
    // max total members = 2500 (500 * 5 bodies c1-3 vp pres)
    var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var barColors = [, , , , , , , , ,];

    if (result.length == 0) {
      return null;
    }
    for (let i = 0; i < result.length; i++) {
      let sObj = result[i].finalConfig.config;
      let totalVoting = sObj.chamber1.totalMembers + sObj.chamber2.totalMembers + sObj.chamber3.totalMembers + sObj.vicePres.totalMembers + sObj.president.totalMembers;
      for (let j = 0; j < ranges.length; j++) {
        if (totalVoting >= ranges[j][0] && totalVoting < ranges[j][1]) {
          values[j]++;
        }
        barColors[j] = barDark;

      }
    }

    let xLabel = "Number of Voting Members";
    let yLabel = "Total Sessions";

    displayHistogram(xText, values, "TOTAL VOTING MEMBERS", document.getElementById("chart"), barColors, xLabel, yLabel);
  }

  function calcBenchScoreWhole(result) {
    var xText = ["0-10%", "10-20%", "20-30%", "30-40%", "40-50%", "50-60%", "60-70%", "70-80%", "80-90%", "90-100%"];
    var ranges = [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 101]];
    var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var barColors = [, , , , , , , , ,];

    if (result.length == 0) {
      return null;
    }
    for (let i = 0; i < result.length; i++) {
      let sObj = result[i].finalConfig.config;
      let iBenchScore = calcBenchScore(sObj);
      for (let j = 0; j < ranges.length; j++) {
        if (iBenchScore >= ranges[j][0] && iBenchScore < ranges[j][1]) {
          values[j]++;
        }
        barColors[j] = barDark;
      }
    }

    let xLabel = "Benchmark Score";
    let yLabel = "Total Sessions";

    displayHistogram(xText, values, "BENCHMARK SCORE", document.getElementById("chart"), barColors, xLabel, yLabel);
  }

  function calcBenchScore(sObj) {
    var totalBills = sObj.simResults.length - 1; // -1 bc holds a test simulation
    var passed = 0;
    var percentagePassed = 0.0;
    for (let i = 1; i < sObj.simResults.length; i++) {
      if (sObj.simResults[i].billPass == true) {
        passed++;
      }
    }
    if (passed > 0) {
      percentagePassed = (passed / totalBills) * 100;
    } else {
      percentagePassed = 0;
    }
    return roundNum(percentagePassed, 2); // out of 100%
  }

  function displayHistogram(ranges, values, title, canvasChart, barColors, xLabel, yLabel) {
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
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: title,
            color: textColor,
            font: { size: 40 },
            padding: { bottom: 20 }
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
              font: { size: 40 },
              stepSize: 1
            },
            title: {
              display: true,
              text: yLabel,
              color: textColor,
              font: { size: 40 }
            }
          },
          x: {
            grid: {
              color: colorConfig.progressVal
            },
            ticks: {
              color: textColor,
              font: { size: 40 }
            },
            title: {
              display: true,
              text: xLabel,
              color: textColor,
              font: { size: 40 }
            }
          }
        }
      }
    });
  }

// chambers <- parties <- total members <- benchmark score <- chambers
function clickedBack() {
  if (mgr.isCurrent(chartChambers)) {
    mgr.showScene(chartBenchmarkScores);
  } else if (mgr.isCurrent(chartBenchmarkScores)) {
    mgr.showScene(chartTotalMembers);
    console.log("clicked back on bench page")
  } else if (mgr.isCurrent(chartTotalMembers)) {
    mgr.showScene(chartParties);
  } else if (mgr.isCurrent(chartParties)) {
    mgr.showScene(chartChambers);
  }
}

// chambers -> parties -> total members -> benchmark score -> chambers
function clickedNext() {
  if (mgr.isCurrent(chartChambers)) {
    mgr.showScene(chartParties);
  } else if (mgr.isCurrent(chartParties)) {
    mgr.showScene(chartTotalMembers);
  } else if (mgr.isCurrent(chartTotalMembers)) {
    mgr.showScene(chartBenchmarkScores);
  } else if (mgr.isCurrent(chartBenchmarkScores)) {
    mgr.showScene(chartChambers);
  }
}