
/*
 Sets up flag for kiosk version, otherwise flag is defaulted to web version
 */

sessionStorage.setItem('kioskFlag', 'true');

fetch('../democracy-engine-congressional-simulator/config/config.json')
  .then(response => response.json())
  .then(configJSON => {
    // get version options array from json file
    var vOptions = configJSON.versionOptions;
    vOptions.shift(); // remove first element, which should always be "web v1.0"
    console.log(vOptions)

    // create dropdown and populate with verison options
    const versionSelection = document.createElement('select');
    versionSelection.id = "versionDropdown";
    versionSelection.name = "versionDropdown";

    // placeholder
    const p = document.createElement('option');
    p.value = '';
    p.textContent = 'Select kiosk version';
    p.disabled = true;
    p.selected = true;
    versionSelection.appendChild(p);

    vOptions.forEach(ver => {
        const opt = document.createElement('option');
        opt.value = ver;
        opt.textContent = ver;
        versionSelection.appendChild(opt);
    });

    document.getElementById('version-selection').appendChild(versionSelection);

    // TODO - put in onClick or form submission for clicking START
    // store selected version in sessionStorage
    versionSelection.addEventListener('change', function () {
        var selected = this.value;
        if (selected == '' || selected == undefined) {
            console.log("none selected");
        }
        sessionStorage.setItem('kioskVersion', selected);
        console.log("selected val: " + selected);
    });

  })
  .catch(error => console.error('Error loading JSON:', error));




