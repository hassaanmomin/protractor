let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// An example configuration file.
exports.config = {
	// directConnect: true,

	/**
	 * If the sauceUser and sauceKey are specified, seleniumServerJar will be
	 * ignored. The tests will be run remotely using Sauce Labs.
	 */
	sauceUser: 'zeek49',
	/**
	 * If the sauceUser and sauceKey are specified, seleniumServerJar will be
	 * ignored. The tests will be run remotely using Sauce Labs.
	 */
	sauceKey: 'b4e289c9-2722-43ba-8ec0-126083be6904',

	/**
	 * If you run your tests on SauceLabs you can specify the region you want to run your tests
	 * in via the `sauceRegion` property. Available short handles for regions are:
	 * us: us-west-1 (default)
	 * eu: eu-central-1
	 */
	sauceRegion: 'us',

	/* Capabilities to be passed to the webdriver instance.
	capabilities: {
		browserName: 'chrome'
	}, */

	
	
	multiCapabilities: [
		{
			browserName: 'chrome',
			version: 'latest',
			platform: 'Windows 10',
			name: 'demo-protractor',
			/**
			 * If this is set to be true, specs will be sharded by file (i.e. all
			 * files to be run by this set of capabilities will run in parallel).
			 * Default is false.
			 */
			shardTestFiles: true,

			/**
			 * Maximum number of browser instances that can run in parallel for this
			 * set of capabilities. This is only needed if shardTestFiles is true.
			 * Default is 1.
			 */
			maxInstances: 25,
		},
		{
			browserName: 'firefox',
			version: 'latest',
			platform: 'Windows 10',
			name: 'demo-protractor',
			/**
			 * If this is set to be true, specs will be sharded by file (i.e. all
			 * files to be run by this set of capabilities will run in parallel).
			 * Default is false.
			 */
			shardTestFiles: true,

			/**
			 * Maximum number of browser instances that can run in parallel for this
			 * set of capabilities. This is only needed if shardTestFiles is true.
			 * Default is 1.
			 */
			maxInstances: 25,
		}
	],

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs: [ 'tests/calculator.spec.js' ],

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 4500000
	},

	logLevel: 'ERROR',

	// Assign the test reporter to each running instance
	onPrepare: function() {
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(
			new AllureReporter({
				resultsDir: '/Users/mobileliveqa/protractor-sample/allure-results'
			})
		);

		/*
		jasmine.getEnv().addReporter(
			new SpecReporter({
				suite: {
					displayNumber: true // display each suite number (hierarchical)
				},
				spec: {
					displayPending: false, // display each pending spec
					displayDuration: true,
					displayStacktrace: true // display each spec duration
				},
				summary: {
					displaySuccesses: true, // display summary of all successes after execution
					displayFailed: true, // display summary of all failures after execution
					displayPending: false // display summary of all pending specs after execution
				}
			})
		); */

		let HtmlReporter = require('protractor-beautiful-reporter');
             jasmine.getEnv().addReporter(new HtmlReporter({
                baseDirectory: 'html-reports',
                screenshotsSubfolder: 'screenshotsOnFailure',
                takeScreenShotsOnlyForFailedSpecs: true,
                jsonsSubfolder: 'jsonFiles',
                excludeSkippedSpecs: true,
                preserveDirectory: false,
                clientDefaults:{
                showTotalDurationIn: "header",
                totalDurationFormat: "h:m:s",
                gatherBrowserLogs: true
              },
             }).getJasmine2Reporter());
	}
};
