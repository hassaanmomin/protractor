let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// An example configuration file.
exports.config = {
	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		browserName: 'chrome'
	},

	// multiCapabilities: [
	// 	{
	// 		browserName: 'firefox'
	// 	},
	// 	{
	// 		browserName: 'chrome'
	// 	}
	// ],

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs: ['tests/calculator.spec.js'],

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 4500000
	},

	logLevel: 'ERROR',

	// Assign the test reporter to each running instance
	onPrepare: function () {
		// var AllureReporter = require('jasmine-allure-reporter');
		// jasmine.getEnv().addReporter(
		// 	new AllureReporter({
		// 		resultsDir: '/Users/sarahkhalid/protractor-sample/allure-results'
		// 	})
		// );
		jasmine.getEnv().addReporter(
			new SpecReporter({
				suite: {
					displayNumber: true // display each suite number (hierarchical)
				},
				spec: {
					displayPending: false, // display each pending spec
					displayDuration: true // display each spec duration
				},
				summary: {
					displaySuccesses: true, // display summary of all successes after execution
					displayFailed: true, // display summary of all failures after execution
					displayPending: false // display summary of all pending specs after execution
				}
			})
		);
	}
};