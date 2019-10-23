const common = require('../pages/commanPage');
const defaultPageUrl = 'https://originationstorageblob.z9.web.core.windows.net/#/new';
const defaultPageTitle = 'New Application';
const EC = protractor.ExpectedConditions;

let newApplication = function() {
	this.newApplicationPage = function() {
		return {
			page: $('h1'),
			url: defaultPageUrl,
			title: defaultPageTitle
		};
	};

	//Page Elements

	this.sideNavItems = $$('ul[class*="side-nav"] li'); //element.all(by.css('ul[class*="side-nav"] li'));

	this.startApplicationBtn = $('.btn-xlg');

	this.preApprovalRadioBtn = $('p-radiobutton[ng-reflect-value="PRE_APPROVAL"]');

	this.workoutDealPurpose = element(by.cssContainingText('.ui-radiobutton-label', 'Workout'));

	this.needHelpTooltip = $('button[class*="new-application__info-icon"]');

	this.popupModal = $('.modal-content');

	this.popupClose = $('button[class$="close-btn"]');

	this.applicationSummary = $('div[class$="stick-to-the-top"] button[class$="btn-primary"]');

	// Page Methods

	this.checkHelpTooltip = function() {
		common.scrollElementIntoMiddle(this.needHelpTooltip);
		browser.sleep(2000);
		this.needHelpTooltip.click();
		common.waitForElementToBeVisible(this.popupModal);
		browser.sleep(2000);
		this.popupClose.click();
	};

	this.startNewApplication = function(type, purpose) {
		common.scrollElementIntoMiddle(type);
		browser.sleep(2000);
		type.click();
		common.scrollElementIntoMiddle(purpose);
		browser.sleep(2000);
		purpose.click();
		common.scrollElementIntoMiddle(this.startApplicationBtn);
		this.startApplicationBtn.click();
		common.waitForUrlToContain('/personal-information');
		browser.sleep(3000);
		//common.waitForElementToBePresent(this.applicationSummary);
		browser.navigate().back();
		common.waitForElementToBePresent(this.newApplicationPage().page);
		browser.sleep(3000);
	};
};

module.exports = new newApplication();
