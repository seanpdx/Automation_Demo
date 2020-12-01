let env = require('./environment.js'),
   // suiteListing = require('./e2e.conf.json'),
    fs = require('fs'),
    fsPath = require('fs-path'),
  //  appConfig = JSON.parse(fs.readFileSync('./config/client.json')),
    reportPath = (process.argv.indexOf('--dateReport') >= 0 ? `reports/${getDatePath()}-` : 'reports/');

function touchReportFiles() {
    if (!fs.existsSync(reportPath + 'report.json')) {
        fsPath.writeFileSync(reportPath + 'report.json');
    }
}
touchReportFiles();

function updateParams(params) {
    params.env = (params.env || env.runEnv).toUpperCase();
}

function getDatePath() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        now = new Date(),
        hours = getStringNumber(now.getHours() || 12),
        minutes = getStringNumber(now.getMinutes()),
        seconds = getStringNumber(now.getSeconds());
    return `${now.getFullYear()}/${months[now.getMonth()]}/${now.getDate()}/${hours}Hr-${minutes}Min-${seconds}Sec`;
}

function getStringNumber(num) {
    return num > 9 ? num + '' : '0' + num;
}

let config = {
    ignoreUncaughtExceptions: true,

    getPageTimeout: 60000,

    allScriptsTimeout: 10 * 10000,
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    seleniumPort: env.seleniumPort,

    capabilities: env.capabilities,

    baseUrl: env.baseUrl,

    directConnect: true,
    specs: [
        './features/*.feature'
    ],
    // relevant cucumber command line options
    cucumberOpts: {
        require: [
            './support/*.ts',
            './support/*.js',
            './services*.ts',
            './stepDefinitions/**/*.steps.ts',
            './stepDefinitions/**/*.steps.js',
            './stepDefinitions/*.ts',
            './stepDefinitions/*.js'
        ],
        format: ['json:' + reportPath + 'report.json'],
        tags: process.env.tags || ["@smoke_test"]
    },

   // suites: suiteListing,

    onPrepare: function () {
        updateParams(global.browser.params);
        let chai = require('chai'),
            chaiAsPromised = require('chai-as-promised');

        chai.use(chaiAsPromised);

        global.expect = chai.expect;
        global.browser.ignoreSynchronization = true;
        global.EC = protractor.ExpectedConditions;
        require('ts-node').register({
            project: 'tsconfig.e2e.json'
        });
    },

    afterLaunch: function () {
        const reporter = require('cucumber-html-reporter');
        const options = {
            name: 'Functional E2E Report',
            brandTitle: 'My Dashboard',
            theme: 'bootstrap',
            jsonFile: reportPath + 'report.json',
            output: reportPath + 'index.html',
            reportSuiteAsScenarios: true,
            launchReport: false,
            screenshotsDirectory: reportPath + 'screenshots/',
            storeScreenshots: true,
            metadata: {
                "Predix Environment": browser.params.env.toUpperCase(),
                "Browser": "Chrome",
                "Generated": (new Date()).toLocaleString(),
                "Parallel": "Scenarios",
                "Executed": env.runEnv
            }
        };
        reporter.generate(options);
    }
};

exports.config = config;
