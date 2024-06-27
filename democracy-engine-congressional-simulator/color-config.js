fetch('config/color-config.json')
    .then(response => response.json())
    .then(data => {
        document.documentElement.style.setProperty('--bkg-color', data.background);
        document.documentElement.style.setProperty('--header-footer-bkg', data.headerFooterBkg);
        document.documentElement.style.setProperty('--text-color', data.text);
        document.documentElement.style.setProperty('--button', data.button);
        document.documentElement.style.setProperty('--link-hover', data.linkHover);
    })
    .catch(error => console.error('Error loading color config', error));