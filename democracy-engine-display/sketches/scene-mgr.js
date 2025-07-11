
var mgr;

//loaded assets
var helvFont;

// colors
var bColor;
var textColor;
var barDark;

// json
var configJSON;
var colorConfig;

function preload() {
  helvFont = loadFont('../assets/font/HelveticaNeue-Regular.otf');
  configJSON = loadJSON('../config/config.json');
}


function setup() {
  colorConfig = configJSON.cssParams;
  bColor = colorConfig.background;
  textColor = colorConfig.text;
  barDark = colorConfig.barDark;
  document.body.style.backgroundColor = bColor;

  noStroke();
  mgr = new SceneManager();
  mgr.addScene(sSessionVis);
  mgr.showNextScene();
  mgr.showScene(sSessionVis);
  
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
