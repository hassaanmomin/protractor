const po = require('../pages/newApplication.page');
const common = require('../pages/commanPage');

describe('New Application Page', () => {
	beforeAll(function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://originationstorageblob.z9.web.core.windows.net/#/new');
		common.waitForElementToBePresent(po.newApplicationPage().page);
	});

	it('Validate if user is landed on correct website.', () => {
		expect(po.newApplicationPage().page.isDisplayed()).toBe(true);
		expect(browser.getCurrentUrl()).toBe(po.newApplicationPage().url);
		expect(browser.getTitle()).toBe(po.newApplicationPage().title);
	});

	it('Validate there should be more than 1 Side Nav items', () => {
		expect(po.sideNavItems.count()).toBeGreaterThan(1);
	});

	it('Validate the Need Help Tooltip', () => {
		po.checkHelpTooltip();
	});

	it('Should start new application', () => {
		po.startNewApplication(po.preApprovalRadioBtn, po.workoutDealPurpose);
	});
});
