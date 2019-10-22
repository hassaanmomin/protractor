const waitTime = 20000;
const EC = protractor.ExpectedConditions;
let commonPage = function() {
	this.scrollElementIntoMiddle = function(element) {
		browser.executeScript('arguments[0].scrollIntoView({block:"center"});', element.getWebElement());
	};

	this.waitForElementToBeVisible = function(element) {
		browser.wait(EC.visibilityOf(element, waitTime));
	};

	this.waitForUrlToContain = function(url) {
		browser.wait(EC.urlContains(url, waitTime));
	};

	this.waitForElementToBePresent = function(element) {
		browser.wait(EC.presenceOf(element, waitTime));
	};
};

module.exports = new commonPage();
