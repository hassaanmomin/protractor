let ssoPage = function () {
	this.ssoUtilityPage = function () {
		return {
			page: $('pq-sso-utility-test [class=content] *')
		};
	};

	// Page Elements
	this.agentProfileCheckBox = $$('[type="checkbox"]')[0];
	this.firmProfileCheckBox = $$('[type="checkbox"]')[1];
	this.submissionAgentProfileCheckBox = $$('[type="checkbox"]')[2];
	this.generateJWTButton = $$('[class*="btn"]')[0];
	this.launchPortalButton = $$('[class*="btn"]')[1];
	this.agentProfileTextField = $$('textarea[class*="pristine"]')[0];
	this.afirmProfileTextField = $$('textarea[class*="pristine"]')[1];
	this.submissionAgentProfileTextField = $$('textarea[class*="pristine"]')[2];
	this.tokenTextField = $$('textarea[class*="pristine"]')[3];
};

module.exports = new ssoPage();