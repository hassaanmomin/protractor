const waitTime = 20000;
const EC = protractor.ExpectedConditions;
let commonPage = function () {

	// Common Elements

	this.sideNavItems = $$('ul[class*="side-nav"] li'); //element.all(by.css('ul[class*="side-nav"] li'));

	this.sideNavLogo = $('pq-left-side-menu a[class=logo]');

	this.chatIcon = $('pq-chat-box [class*=chat-box] a[href]');

	this.profileLink = $('pq-navbar [class*=user] a[href]');

	this.navBar = $('pq-navbar[class*=ng]');

	// Contains: @Index[0]=EN, @Index[1]=FR
	this.languageSwitchBtns = $$('pq-navbar [class*=lang] a[href]');

	this.


	// Common Methods
	this.scrollElementIntoMiddle = function (element) {
		browser.executeScript('arguments[0].scrollIntoView({block:"center"});', element.getWebElement());
	};

	this.waitForElementToBeVisible = function (element) {
		browser.wait(EC.visibilityOf(element, waitTime));
	};

	this.waitForUrlToContain = function (url) {
		browser.wait(EC.urlContains(url, waitTime));
	};

	this.waitForElementToBePresent = function (element) {
		browser.wait(EC.presenceOf(element, waitTime));
	};
};

module.exports = new commonPage();