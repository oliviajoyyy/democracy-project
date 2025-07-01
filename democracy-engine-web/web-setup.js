
// set kiosk flag to false, and goes to web version url
// note - web version is set in simulator when kiosk flag is false
function startWeb(url) {
  // set kiosk version in session storage and redirect to simulator
  sessionStorage.setItem('kioskFlag', 'false');
  window.location.href = url;
}
