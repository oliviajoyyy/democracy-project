
// set kiosk flag to false, and goes to simulator
function startSimulator() {
  // set kiosk version in session storage and redirect to simulator
  sessionStorage.setItem('kioskFlag', 'false');
  window.location.replace("democracy-engine-congressional-simulator/index-scene.html");
}

// set kiosk flag to false, and goes to visualization
function startVis() {
  sessionStorage.setItem('kioskFlag', 'false');
  window.location.replace("democracy-engine-visualization/index-scene.html");
}




