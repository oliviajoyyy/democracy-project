
// set kiosk flag to false in session storage and redirect to engine url
function startWeb(url) {
  sessionStorage.setItem('kioskFlag', 'false');
  // window.location.href = url; // opens in same tab
  window.open(url); // opens in new tab
}
