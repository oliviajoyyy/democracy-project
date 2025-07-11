

/**
 * Session Visualizations (Graph cycles)
 */
function sSessionVis() {
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
    console.log("chart cycle");
    calcStats();
  }


  this.draw = function () {

    if (millis() - time > interval) {
      calcStats();
      time = millis();
    }

  }

  function clickedRefresh() {
    console.log("refresh button clicked");
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
    var values = [0, 0, 0];
    var barColors = [, ,];
    var bHighlight = "#cccc9d";
    var bRest = "#e85ab4";
    // console.log(result);
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
          legend: { display: false },
          title: {
            display: true,
            text: title,
            color: textColor,
            font: { size: 50 },
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
            }
          },
          x: {
            grid: {
              color: colorConfig.progressVal
            },
            ticks: {
              color: textColor,
              font: { size: 40 }
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
    var values = [0, 0, 0,];
    var barColors = [, ,];
    // console.log(result);
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
    // console.log("parties ranges: " + ranges);
    // console.log("parties values: " + values);

    displayHistogram(xText, values, "NUMBER OF PARTIES", document.getElementById("chart"), barColors);
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
    // console.log(result);
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
    // console.log("total voting ranges: " + ranges);
    // console.log("total voting values: " + values);
    // console.log("bar colors members: " + barColors);

    displayHistogram(xText, values, "TOTAL VOTING MEMBERS", document.getElementById("chart"), barColors);
  }

  function calcBenchScoreWhole(result) {
    var brackets = 10;
    var xText = ["0-10%", "10-20%", "20-30%", "30-40%", "40-50%", "50-60%", "60-70%", "70-80%", "80-90%", "90-100%"];
    var ranges = [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 101]];
    var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var barColors = [, , , , , , , , ,];
    // console.log(result);
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
    // console.log("total voting ranges: " + ranges);
    // console.log("total voting values: " + values);
    // console.log("bar colors members: " + barColors);

    displayHistogram(xText, values, "BENCHMARK SCORE", document.getElementById("chart"), barColors);
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

}
