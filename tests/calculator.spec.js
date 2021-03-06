var po = require('../pages/calculator.page');

describe('Validate the Calculator Demo Application', () => {
	beforeAll(function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.waitForAngular();
	});

	it('Checks if user is landed on correct website.', () => {
		expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
	});

	it('Addition Test', () => {
		po.performAddition('10', '5');
		expect(po.resultText()).toEqual('15');
		//expect(input.getAttribute('value')).toBe('Foo123');
	});

	it('Subtraction Test', () => {
		po.performSubtraction('10', '5');
		expect(po.resultText()).toEqual('5');
	});

	it('Division Test', () => {
		po.performDivision('10', '5');
		expect(po.resultText()).toEqual('2');
	});
});
