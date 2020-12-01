import { browser } from 'protractor';

const hooks = function () {

    this.After((scenario) => {
        // attach screenshot to report
        if (scenario.isFailed()) {
            return browser.takeScreenshot().then(function (buffer) {
                scenario.attach(new Buffer(buffer, 'base64'), 'image/png');
            });
        }
    });
};

module.exports = hooks;
