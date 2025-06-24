
// Set up dropdown menu from config file options
fetch('../config/config.json')
  .then(response => response.json())
  .then(configJSON => {

    // html form
    var versionForm = document.getElementById('version-selection');

    // get version options array from json file
    var vOptions = configJSON.versionOptions;
    vOptions = vOptions.filter(item => !item.includes("web")); // remove web options
    console.log(vOptions)

    // create dropdown
    const versionSelection = document.createElement('select');
    versionSelection.id = "versionDropdown";
    versionSelection.name = "versionDropdown";

    // placeholder option - 'Select kiosk version'
    const p = document.createElement('option');
    p.value = '';
    p.textContent = 'Select kiosk version';
    p.disabled = true;
    p.selected = true;
    versionSelection.appendChild(p);

    // populate with verison options from config array
    vOptions.forEach(ver => {
        const opt = document.createElement('option');
        opt.value = ver;
        opt.textContent = ver;
        versionSelection.appendChild(opt);
    });

    versionForm.appendChild(versionSelection);

  })
  .catch(error => console.error('Error loading JSON:', error));

  /*
   Set up flag for kiosk version, otherwise flag is defaulted to web version
   and set the kiosk version to selected
   Goes to url (set in index.html)
  */
  function startKiosk(url) {
    // get dropdown selection
    var versionSelection = document.getElementById("versionDropdown");
    console.log("selected val: " + versionSelection.value);
    var selected = versionSelection.value;

    // check selection
    if (selected == '' || selected == undefined) {
      alert("Please select a kiosk version.");
      return;
    } else {
      // set kiosk version in session storage and redirect to simulator
      sessionStorage.setItem('kioskFlag', 'true');
      sessionStorage.setItem('kioskVersion', selected);
      window.location.replace(url);
    }
  }

