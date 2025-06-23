
/*
 Sets up flag for kiosk version, otherwise flag is defaulted to web version
 */

// sessionStorage.setItem('kioskFlag', 'true');

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

    // // store selected version in sessionStorage when changed
    // versionSelection.addEventListener('change', function () {
    //     var selected = this.value;
    //     if (selected == '' || selected == undefined) {
    //         console.log("none selected");
    //     }
    //     sessionStorage.setItem('kioskVersion', selected);
    //     console.log("selected val: " + selected);
    // });

  })
  .catch(error => console.error('Error loading JSON:', error));


  function startSimulator() {
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
      window.location.replace("../democracy-engine-congressional-simulator/index.html");
    }
  }

  function startVis() {
      // get dropdown selection
      var versionSelection = document.getElementById("versionDropdown");
      console.log("selected val: " + versionSelection.value);
      var selected = versionSelection.value;
  
      // check selection
      if (selected == '' || selected == undefined) {
        alert("Please select a kiosk version.");
        return;
      } else {
        // set kiosk version in session storage and redirect to vis desk
        sessionStorage.setItem('kioskFlag', 'true');
        sessionStorage.setItem('kioskVersion', selected);
        window.location.replace("../democracy-engine-visualization/index.html");
      }
  }




