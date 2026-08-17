enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safarai = "safari",
    Edge = "edge"
};

function openBrowser(browser: Browser) {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chromium(Chrome v 120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko(Firefox v115)");
            break;
        case Browser.Safarai:
            console.log("Launching Webkit (Safari v17)");
            break;
        case Browser.Edge:
            console.log("Launching  Chromium");
            break;
    }
}

openBrowser(Browser.Chrome);