# protractor-sample
Sample project setup for Protractor hands-on. 

# What is Protractor?
• Protractor is a Java Script based automation framework designed to test AngularJS and Angular based websites/portals. Protractor itself is a Node.js project that may as well be referred to as a wrapper for WebdriverJs, something similar to Webdriver IO. </bullet>

# Why Protractor?
• As Protractor is designed specifically to test AngularJs and Angular based projects, It gives support for various angular-specific properties (ng-model, ng-controller) to locate elements that our traditional selenium doesn’t.   

# Setup Protractor on Windows:
1. Download and Install Node.js: https://nodejs.org/en/download/
2. Install Protractor: **npm install -g protractor** (Install Protractor globally with Jasmine as default framework)
3. Run command: **webdriver-manager update** (Update all browser drivers)
4. Find conf.js file @ C:\Users\Administrator\AppData\Roaming\npm\node_modules\protractor\example
5. On cmd goto the location of this file and run command: **protractor conf.js**

# Sample Test-Cases
1. Create Configuration, Tests & Pages Folders in your project directory.
2. Copy the same conf.js file referred above, in the conf folder.
3. Create a new calculator_spec.js file in tests folder.
4. Testing Demo Application: http://juliemr.github.io/protractor-demo/
5. Write simple test-case. https://devhints.io/jasmine

# Report Generation
1. Install Jasmine Allure Reporter Plugin: **npm i jasmine-allure-reporter**
2. Add following code inside exports.config in conf.js file:
		
onPrepare: function() { 
var AllureReporter = require('jasmine-allure-reporter');
    				jasmine.getEnv().addReporter( 
new AllureReporter({
resultsDir: 'allure-results' })
);}

3. Run conf.js and check allure-reports are generated.
4. Add allure command line tool: **npm i allure-commandline** (Allure requires Java 8 or higher)
5. Run command: **allure serve “location of allure-results folder”**

# Jenkins Integration



