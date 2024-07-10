fetch('/democracy-engine-congressional-simulator/config/color-config.json')
    .then(response => response.json())
    .then(data => {
        document.documentElement.style.setProperty('--bkg-color', data.background);
        document.documentElement.style.setProperty('--header-footer-bkg', data.headerFooterBkg);
        document.documentElement.style.setProperty('--text-color', data.text);
        document.documentElement.style.setProperty('--button', data.button);
        document.documentElement.style.setProperty('--active-nav', data.activeNav);
        document.documentElement.style.setProperty('--link', data.link);
        document.documentElement.style.setProperty('--link-hover', data.linkHover);
        document.documentElement.style.setProperty('--scroll-bar', data.headerFooterBkg);
        document.documentElement.style.setProperty('--scroll-bar-hover', hexToRgba(data.headerFooterBkg, 0.6));

        document.documentElement.style.setProperty('--bkg-img-1', data.bkgImg1);
        document.documentElement.style.setProperty('--bkg-img-2', data.bkgImg2);
        document.documentElement.style.setProperty('--numberline-icon', data.numberLineIcon);
        document.documentElement.style.setProperty('--simulator-icon', data.simulatorIcon);
        document.documentElement.style.setProperty('--media-icon', data.mediaIcon);
        document.documentElement.style.setProperty('--about-icon', data.aboutIcon);
        document.documentElement.style.setProperty('--code-icon', data.codeIcon);
    })
    .catch(error => console.error('Error loading color config', error));

function hexToRgba(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    //console.log("hex color split: " + "rgba(" + r + "," + g + "," + b + "," + alpha + ")");
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}