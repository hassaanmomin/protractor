// An example configuration file.
exports.config = {
	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		browserName: 'chrome'
	},

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs: [ 'tests/calculator.spec.js' ],

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	// Setup the report before any tests start
	// beforeLaunch: function() {
	// 	return new Promise(function(resolve) {
	// 		reporter.beforeLaunch(resolve);
	// 	});
	// },

	// Assign the test reporter to each running instance
	onPrepare: function() {
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(
			new AllureReporter({
				resultsDir: '/Users/sarahkhalid/Desktop/protractor-sample/allure-results'
			})
		);
	}

	// Close the report after all tests finish
	// afterLaunch: function(exitCode) {
	// 	return new Promise(function(resolve) {
	// 		reporter.afterLaunch(resolve.bind(this, exitCode));
	// 	});
	// }
};
