// Common configuration files with defaults plus overrides from environment vars
const webServerDefaultPort = 8080;
const windowSizeArg = (process.env.size) ? '--window-size=' + process.env.size : '--window-size=1980,1080';
const headlessArgs = [
    '--headless',
    '--no-sandbox',
    '--remote-debugging-port=9222',
    '--disable-web-security',
    '--disable-features=IsolateOrigins'
];
let chromeOptionsArgs = ['--disable-gpu', '--incognito'];
chromeOptionsArgs.push(windowSizeArg);
if (process.argv.indexOf('--headless') >= 0) {
    chromeOptionsArgs = chromeOptionsArgs.concat(headlessArgs);
}

module.exports = {

    runEnv: (process.env.SELENIUM_HUB ? 'Jenkins' : 'Local'),

    seleniumPort: (process.env.SELENIUM_PORT || 4444),

    // The address of a running selenium server.

    seleniumAddress: (process.env.SELENIUM_URL || 'http://localhost:' + this.seleniumPort + '/wd/hub'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName       : (process.env.TEST_BROWSER_NAME || 'chrome'),
        version           : (process.env.TEST_BROWSER_VERSION || 'ANY'),
        newCommandTimeout : '1000',
        autoAcceptAlerts  : 'true',
        chromeOptions     : { args: chromeOptionsArgs }
    },

    // Default http port to host the web server
    webServerDefaultPort: webServerDefaultPort,

    // A base URL for your application under test.
    baseUrl: process.env.url || 'http://localhost:' + webServerDefaultPort

};
