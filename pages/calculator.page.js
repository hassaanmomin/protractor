let homepage = function() {
	//Page Elements

	this.input_first = element(by.model('first'));

	this.operator = element(by.model('operator'));

	this.addition = $('option[value="ADDITION"]');

	this.subtraction = $('option[value="SUBTRACTION"]');

	this.division = $('option[value="DIVISION"]');

	this.input_second = element(by.model('second'));

	this.go_btn = element(by.id('gobutton'));
	//by.css('[ng-click="doAddition()"]')

	this.result = $('h2[class="ng-binding"]');
	//let result = element(by.cssContainingText('.ng-binding', '15'));

	// Page Methods

	this.performAddition = function(first, second) {
		this.input_first.sendKeys(first);
		this.operator.click();
		this.addition.click();
		this.input_second.sendKeys(second);
		this.go_btn.click();
	};

	this.performSubtraction = function(first, second) {
		this.input_first.sendKeys(first);
		this.operator.click();
		this.subtraction.click();
		this.input_second.sendKeys(second);
		this.go_btn.click();
	};

	this.performDivision = function(first, second) {
		this.input_first.sendKeys(first);
		this.operator.click();
		this.division.click();
		this.input_second.sendKeys(second);
		this.go_btn.click();
	};

	this.resultText = function() {
		return this.result.getText();
	};
};

module.exports = new homepage();
