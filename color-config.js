// fetch('/democracy-engine-congressional-simulator/config/config.json') // path works locally
fetch('democracy-engine-congressional-simulator/config/config.json') // path works on server
    .then(response => response.json())
    .then(data => {
        document.documentElement.style.setProperty('--bkg-color', data.cssParams.background);
        document.documentElement.style.setProperty('--header-footer-bkg', data.cssParams.headerFooterBkg);
        document.documentElement.style.setProperty('--text-color', data.cssParams.text);
        document.documentElement.style.setProperty('--button', data.cssParams.button);
        document.documentElement.style.setProperty('--active-nav', data.cssParams.activeNav);
        document.documentElement.style.setProperty('--link', data.cssParams.link);
        document.documentElement.style.setProperty('--link-hover', data.cssParams.linkHover);
        document.documentElement.style.setProperty('--scroll-bar', data.cssParams.headerFooterBkg);
        document.documentElement.style.setProperty('--scroll-bar-hover', hexToRgba(data.cssParams.headerFooterBkg, 0.6));
        document.documentElement.style.setProperty('--pane-bkg', data.cssParams.paneBkg);
        document.documentElement.style.setProperty('--pane-border', data.cssParams.paneBorder);
        document.documentElement.style.setProperty('--slider-start', data.cssParams.sliderStart);
        document.documentElement.style.setProperty('--slider-offset', data.cssParams.sliderOffset);

        document.documentElement.style.setProperty('--bkg-img-1', data.mediaAssetPaths.bkgImg1);
        document.documentElement.style.setProperty('--bkg-img-2', data.mediaAssetPaths.bkgImg2);
        document.documentElement.style.setProperty('--numberline-icon', data.mediaAssetPaths.numberLineIcon);
        document.documentElement.style.setProperty('--simulator-icon', data.mediaAssetPaths.simulatorIcon);
        document.documentElement.style.setProperty('--media-icon', data.mediaAssetPaths.mediaIcon);
        document.documentElement.style.setProperty('--about-icon', data.mediaAssetPaths.aboutIcon);
        document.documentElement.style.setProperty('--code-icon', data.mediaAssetPaths.codeIcon);
    })
    .catch(error => console.error('Error loading color config', error));

function hexToRgba(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    //console.log("hex color split: " + "rgba(" + r + "," + g + "," + b + "," + alpha + ")");
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}