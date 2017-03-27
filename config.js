
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
           chromeOptions: {
      args: [
        '--start-maximized',
      ]
    },
    },
    specs: ['./e2e_tests/spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
    
};