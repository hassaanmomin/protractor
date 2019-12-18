const defaultPageUrl = 'https://originationstorageblob.z9.web.core.windows.net/#/new';
const defaultPageTitle = 'New Application';

let newApplication = function () {
	this.newApplicationPage = function () {
		return {
			page: $('pq-create-new-application [class=content] *'),
			url: defaultPageUrl,
			title: defaultPageTitle
		};
	};

	//Page Elements

	this.startApplicationBtn = $('[class*="new-application"] [class*=btn-container] button');

	this.needHelpTooltip = $('[class*="new-application"] button[class*="info-icon"]');

	// Contains 2 Application Type Radio Buttons: Approval and Pre-Approval
	this.applicationTypeRadioBtns = $$('p-radiobutton[formcontrolname="dealType"] [class*="clickable"]');

	// Contains 13 Deal Purpose Radio Buttons
	this.dealPurposeRadioBtns = $$('p-radiobutton[formcontrolname="dealPurpose"] [class*="clickable"]');

	this.popupModal = $('ngb-modal-window [class$=info-modal]');

	this.popupClose = $('[class*=info-modal] [class$="close-btn"]');

	this.headerInfoBlock = $('pq-info-block');

	this.infoBlockTitle = $('[class="info-block-title"]');

	// Contains all 5 info block labels: Application Type, Deal Purpose, GDS, TDS & LTV
	this.infoBlockLabels = $$('[class^="info-block-label"]');

	// Contains all 5 info block label Values: Application Type, Deal Purpose, GDS, TDS & LTV
	this.inforBlockValues = $$('[class^="info-block-value"]');

	this.applicationSummary = $('pq-info-block button');

	// Contains all 7 tabs: Personal Information, Income & Employment..
	this.wizardtabs = $$('[class="wizard-tabs"] a[href]');

	this.wizardHeading = $('[class="wizard-header"]');

	this.saveAndExitBtn = $$('[class$=wizard-content] [class^=text-center] button')[0];

	this.nextBtn = $$('[class$=wizard-content] [class^=text-center] button')[1];

	this.borrowerSideTag = $('a[class*="navigation"]');

	/* === PERSONAL INFORMATION FORM ELEMENTS === */

	// Contains all 4 collapsed tabs: Basic Information, Identification..
	this.piCollapsedTabs = $$('pq-personal-information-inner-item [class*=collapsed-header] a');
	this.salutationLabel = $$('[class*=collapsed-content] label[for]')[0];
	this.salutationDropDown = $$('[class*=collapsed-content] p-dropdown')[0];
	this.suffixDropDown = $$('[class*=collapsed-content] p-dropdown')[1];
	this.residencyStatuDropDown = $$('[class*=collapsed-content] p-dropdown')[2];
	this.preferredLanguageDropDown = $$('[class*=collapsed-content] p-dropdown')[3];
	this.maritalStatusDropDown = $$('[class*=collapsed-content] p-dropdown')[4];
	this.dependentsDropDown = $$('[class*=collapsed-content] p-dropdown')[5];
	this.contactTypeDropDown = $$('[class*=collapsed-content] p-dropdown')[6];
	this.identificationTypeDropDown = $$('[class*=collapsed-content] p-dropdown')[7];
	this.lookupCountryDropDown = $$('[class*=collapsed-content] p-dropdown')[8];
	this.countryDropDown = $$('[class*=collapsed-content] p-dropdown')[9];
	this.residentialStatusDropDown = $$('[class*=collapsed-content] p-dropdown')[10];
	this.mailingLookUpCountryDropDown = $$('[class*=collapsed-content] p-dropdown')[11];
	this.mailingCountryDropDown = $$('[class*=collapsed-content] p-dropdown')[12];
	this.firstName = $$('[class*=collapsed-content] input[id]')[0];
	this.middleName = $$('[class*=collapsed-content] input[id]')[1];
	this.lastName = $$('[class*=collapsed-content] input[id]')[2];
	this.SIN = $$('[class*=collapsed-content] input[id]')[3];
	this.email = $$('[class*=collapsed-content] input[id]')[4];
	this.fax = $$('[class*=collapsed-content] input[id]')[5];
	this.number = $$('[class*=collapsed-content] input[id]')[6];
	// Existing Client Mortgage Number
	this.ECMN = $$('[class*=collapsed-content] input[id]')[7];
	this.identificationCountry = $$('[class*=collapsed-content] input[id]')[8];
	this.idNumber = $$('[class*=collapsed-content] input[id]')[9];
	this.unitNumber = $$('[class*=collapsed-content] input[id]')[10];
	this.streetNumber = $$('[class*=collapsed-content] input[id]')[11];
	this.streetName = $$('[class*=collapsed-content] input[id]')[12];
	this.provinceState = $$('[class*=collapsed-content] input[id]')[13];
	this.city = $$('[class*=collapsed-content] input[id]')[14];
	this.zipCode = $$('[class*=collapsed-content] input[id]')[15];
	this.yearsOfLivingY = $$('[class*=collapsed-content] input[id]')[16];
	this.yearsOfLivingM = $$('[class*=collapsed-content] input[id]')[17];
	this.rentAmount = $$('[class*=collapsed-content] input[id]')[18];
	this.unitNumber = $$('[class*=collapsed-content] input[id]')[19];
	this.mailingStreetNumber = $$('[class*=collapsed-content] input[id]')[20];
	this.mailingStreetName = $$('[class*=collapsed-content] input[id]')[21];
	this.mailingProvinceState = $$('[class*=collapsed-content] input[id]')[22];
	this.mailingCity = $$('[class*=collapsed-content] input[id]')[23];
	this.mailingZipCode = $$('[class*=collapsed-content] input[id]')[24];
	// Contains clear all fields button for all 4 sections
	this.piClearAllFields = $$('pq-clear-all-fields a');
	this.preferredMethodOfContact = $$('[class*=collapsed-content] p-radiobutton')[0];
	this.residentialCurrent = $$('[class*=collapsed-content] p-radiobutton')[1];
	this.addContactBtn = $$('[class*=collapsed-content] [class*=btn-primary]')[0];
	this.addAnotherAddressBtn = $$('[class*=collapsed-content] [class*=btn-primary]')[2];
	this.addIdentification = $$('[class*=collapsed-content] [class*=btn-primary]')[1];
	this.dateOfBirth = $('p-calendar button[class*="datepicker"]');
	this.uploadIdentification = $('[class*=collapsed-content] p-fileupload');
	this.existingClientCheckbox = $$('[class*=collapsed-content] p-checkbox')[0];
	this.sameAddressCheckbox = $$('[class*=collapsed-content] p-checkbox')[1];
	this.addCoBorrowerBtn = $$('hr+[class$=flex] button')[0];
	this.addGuarantor = $$('hr+[class$=flex] button')[1];
	this.removeContactType = $('button[class$=icon]');
	this.removeContactModal = $('[class="modal-content"]');
	this.modalNoBtn = $$('[class="modal-content"] button')[2];
	this.modalYesBtn = $$('[class="modal-content"] button')[1];
	this.addressLookUp = $('p-autocomplete input');

	/* === INCOME & EMPLOYMENT FORM ELEMENTS === */

	// Contains all 4 collapsed tabs: Employment, Employment1..
	this.ieCollapsedTabs = $$('pq-income-employment [class*=collapsed-header] a');
	this.employmentCheckBox = $$('pq-income-employment-inner p-checkbox')[0];
	this.selfEmploymentCheckBox = $$('pq-income-employment-inner p-checkbox')[1];
	this.otherIncomeCheckBox = $$('pq-income-employment-inner p-checkbox')[2];
	this.employerName = $$('[class*=collapsed-content] input[id]')[0];
	this.unitNumber = $$('[class*=collapsed-content] input[id]')[1];
	this.streetNumber = $$('[class*=collapsed-content] input[id]')[2];
	this.streetName = $$('[class*=collapsed-content] input[id]')[3];
	this.employmentProvinceState = $$('[class*=collapsed-content] input[id]')[4];
	this.employmentCity = $$('[class*=collapsed-content] input[id]')[5];
	this.employmentZipCode = $$('[class*=collapsed-content] input[id]')[6];
	this.employmentEmail = $$('[class*=collapsed-content] input[id]')[7];
	this.employmentPhone = $$('[class*=collapsed-content] input[id]')[8];
	this.employmentFax = $$('[class*=collapsed-content] input[id]')[9];
	this.jobTitle = $$('[class*=collapsed-content] input[id]')[10];
	this.incomeAmount = $$('[class*=collapsed-content] input[id]')[11];
	this.timeAtJobY = $$('[class*=collapsed-content] input[id]')[12];
	this.timeAtJobM = $$('[class*=collapsed-content] input[id]')[13];
	this.timeInIndustryY = $$('[class*=collapsed-content] input[id]')[14];
	this.timeInIndustryM = $$('[class*=collapsed-content] input[id]')[15];
	this.durationOfIncomeY = $$('[class*=collapsed-content] input[id]')[16];
	this.durationOfIncomeM = $$('[class*=collapsed-content] input[id]')[17];
	this.incomeAmount = $$('[class*=collapsed-content] input[id]')[18];
	this.incomeDescription = $$('[class*=collapsed-content] input[id]')[19];
	this.employmentTypeDropDown = $$('[class*=collapsed-content] p-dropdown')[0];
	this.employmentStatus = $$('[class*=collapsed-content] p-dropdown')[1];
	this.employmentAddressLookup = $$('[class*=collapsed-content] p-dropdown')[2];
	this.employmentCountry = $$('[class*=collapsed-content] p-dropdown')[3];
	this.occupationDropDown = $$('[class*=collapsed-content] p-dropdown')[4];
	this.industrorySectorDropDown = $$('[class*=collapsed-content] p-dropdown')[5];
	this.incomeTypeDropDown = $$('[class*=collapsed-content] p-dropdown')[6];
	this.incomePeriodDropDown = $$('[class*=collapsed-content] p-dropdown')[7];
	this.otherIncomeType = $$('[class*=collapsed-content] p-dropdown')[8];
	this.otherIncomePeriod = $$('[class*=collapsed-content] p-dropdown')[9];
	this.addressLookUp = $('p-autocomplete input');
	this.phoneExtension = $('input+input[class*=form]');
	// Contains clear all fields button for all 4 sections
	this.ieClearAllFields = $$('pq-clear-all-fields a');
	this.startDate = $('p-calendar button[class*="datepicker"]');
	this.addEmployment = $$('pq-collapsed [class$=btn-primary]')[0];
	this.addIncome = $$('pq-collapsed [class$=btn-primary]')[1];
	this.employmentUploadDocument = $$('pq-file-upload input')[0];
	this.incomeUploadDocument = $$('pq-file-upload input')[1];

	/* === CREDIT INFORMATION FORM ELEMENTS === */

	this.collapsedCreditHistory = $('[class*=collapsed-header] a');
	this.dontUpdateLiabilitiesCheckbox = $('p-checkbox label');
	this.authorizedOn = $('p-calendar button[class*=datepicker]');
	this.authorizationMethod = $('[class*="form"] input[id]');
	this.pullCreditRecord = $$('[class*="flex"] [class$="btn-primary"]')[0];
	this.printConsentForm = $$('[class*="flex"] [class$="btn-primary"]')[1];
	this.uploadConsentForm = $('p-fileupload input');
	this.creditHistoryContent = $('[class*="credit-history"]');

	/* === SUBJECT PROPERTY FORM ELEMENTS === */

	this.checkAnyOtherCheckbox = $('p-checkbox label');
	// Contains all 3 collapsed tabs: Property Address, Property Information..
	this.spCollapsedTabs = $$('pq-property-information [class*=collapsed-header] a');
	this.ownerOccupiedRadioBox = $$('pq-collapsed p-radiobutton label')[0];
	this.ownerOccupiedAndRental = $$('pq-collapsed p-radiobutton label')[1];
	this.rentalRadioBox = $$('pq-collapsed p-radiobutton label')[2];
	this.secondHomeRadioBox = $$('pq-collapsed p-radiobutton label')[3];
	this.mlsListingYes = $$('pq-collapsed p-radiobutton label')[4];
	this.mlsListingNo = $$('pq-collapsed p-radiobutton label')[5];
	this.garageTypeAttached = $$('pq-collapsed p-radiobutton label')[6];
	this.garageTypeDetached = $$('pq-collapsed p-radiobutton label')[7];
	this.environmentalHazardYes = $$('pq-collapsed p-radiobutton label')[8];
	this.environmentalHazardNo = $$('pq-collapsed p-radiobutton label')[9];
	this.waterInfoMunicipal = $$('pq-collapsed p-radiobutton label')[10];
	this.waterInfoWell = $$('pq-collapsed p-radiobutton label')[11];
	this.spAddressLookUp = $('p-autocomplete input');
	this.propertyUnitNumber = $$('[class*=collapsed-content] input[id]')[0];
	this.propertyStreetNumber = $$('[class*=collapsed-content] input[id]')[1];
	this.propertyStreetName = $$('[class*=collapsed-content] input[id]')[2];
	this.propertyCity = $$('[class*=collapsed-content] input[id]')[3];
	this.propertyZipCode = $$('[class*=collapsed-content] input[id]')[4];
	this.mlsNumber = $$('[class*=collapsed-content] input[id]')[5];
	this.purchasePrice = $$('[class*=collapsed-content] input[id]')[6];
	this.estimatedValue = $$('[class*=collapsed-content] input[id]')[7];
	this.appraisedValue = $$('[class*=collapsed-content] input[id]')[8];
	this.numberOfUnits = $$('[class*=collapsed-content] input[id]')[9];
	this.age = $$('[class*=collapsed-content] input[id]')[10];
	this.lot = $$('[class*=collapsed-content] input[id]')[11];
	this.block = $$('[class*=collapsed-content] input[id]')[12];
	this.township = $$('[class*=collapsed-content] input[id]')[13];
	this.annualTax = $$('[class*=collapsed-content] input[id]')[14];
	this.taxYear = $$('[class*=collapsed-content] input[id]')[15];
	this.schoolTax = $$('[class*=collapsed-content] input[id]')[16];
	this.totalCondoFee = $$('[class*=collapsed-content] input[id]')[17];
	this.hydroPerMonth = $$('[class*=collapsed-content] input[id]')[18];
	this.heatingPerMonth = $$('[class*=collapsed-content] input[id]')[19];
	this.interestPerMonth = $$('[class*=collapsed-content] input[id]')[20];
	this.insurancePerMonth = $$('[class*=collapsed-content] input[id]')[21];
	this.repairsPerMonth = $$('[class*=collapsed-content] input[id]')[22];
	this.managementPerMonth = $$('[class*=collapsed-content] input[id]')[23];
	this.otherPerMonth = $$('[class*=collapsed-content] input[id]')[24];
	this.totalExpensePerMonth = $$('[class*=collapsed-content] input[id]')[25];
	this.rentalIncomePerMonth = $$('[class*=collapsed-content] input[id]')[26];
	this.eiDurationOfIncomeY = $$('[class*=collapsed-content] input[id]')[27];
	this.eiDurationOfIncomeM = $$('[class*=collapsed-content] input[id]')[28];
	// Contains clear all fields button for all 4 sections
	this.spClearAllFields = $$('pq-clear-all-fields a');
	this.addressLookUpCountry = $$('[class*=collapsed-content] p-dropdown')[0];
	this.propertyCountry = $$('[class*=collapsed-content] p-dropdown')[1];
	this.propertyState = $$('[class*=collapsed-content] p-dropdown')[2];
	this.constructionType = $$('[class*=collapsed-content] p-dropdown')[3];
	this.propertyType = $$('[class*=collapsed-content] p-dropdown')[4];
	this.propertyStyle = $$('[class*=collapsed-content] p-dropdown')[5];
	this.propertyTenure = $$('[class*=collapsed-content] p-dropdown')[6];
	this.garageSize = $$('[class*=collapsed-content] p-dropdown')[7];
	this.propertyHead = $$('[class*=collapsed-content] p-dropdown')[8];
	this.sewageInfo = $$('[class*=collapsed-content] p-dropdown')[9];
	this.expensesPaidBy = $$('[class*=collapsed-content] p-dropdown')[10];
	this.expenseIncomePeriod = $$('[class*=collapsed-content] p-dropdown')[11];
	this.appraisedDate = $('p-calendar button[class*=datepicker]');
	this.livingSpaceSqFt = $$('[class*=collapsed-content] select[class^=form]')[0];
	this.lotSizeSqFt = $$('[class*=collapsed-content] select[class^=form]')[1];
	this.condoFeesCheckBox = $$('[class*=collapsed-content] p-checkbox label')[0];
	this.includeThisIncomeCheckBox = $$('[class*=collapsed-content] p-checkbox label')[1];

	/* === MORTGAGE PREFRENCES FORM ELEMENTS === */

	// Contains all 3 collapsed tabs: Property Address, Property Information..
	this.mpCollapsedTabs = $$('[class*=collapsed-header] a');
	// Qualifying Details
	this.qualifyingInterestRate = $$('pq-collapsed input[id]')[14];
	this.qualifyingMonthlyPayment = $$('pq-collapsed input[id]')[15];
	this.qualifyingCashBackPercaentage = $$('pq-collapsed input[id]')[16];
	this.qualifyingCashBackAmount = $$('pq-collapsed input[id]')[17];
	this.qualifyingInterestOnlyChkBox = $$('p-checkbox label')[5];
	this.qualifyingCashBackOverride = $$('p-checkbox label')[6];
	this.qualifyingCompoundPeriod = $$('[class*=collapsed-content] p-dropdown')[11];
	this.qualifyingAmortizationY = $$('pq-collapsed [class*=flex] input[type=number]')[6];
	this.qualifyingAmortizationM = $$('pq-collapsed [class*=flex] input[type=number]')[7];
	//Mortagage Interest
	this.interestBlendedAmortChkBox = $$('p-checkbox label')[3];
	this.interestOnlyChkBox = $$('p-checkbox label')[4];
	this.interestRate = $$('pq-collapsed input[id]')[8];
	this.interestDiscountRate = $$('pq-collapsed input[id]')[9];
	this.interestPremiumRate = $$('pq-collapsed input[id]')[10];
	this.interestBuyDownRate = $$('pq-collapsed input[id]')[11];
	this.interestNetRate = $$('pq-collapsed input[id]')[12];
	this.interestVariablePrime = $$('pq-collapsed input[id]')[13];
	this.interestRateType = $$('[class*=collapsed-content] p-dropdown')[7];
	this.interestCompoundPeriod = $$('[class*=collapsed-content] p-dropdown')[8];
	this.interestPaymentFrequency = $$('[class*=collapsed-content] p-dropdown')[9];
	this.interestTeamType = $$('[class*=collapsed-content] p-dropdown')[10];​
	this.interestTermY = $$('pq-collapsed [class*=flex] input[type=number]')[2];
	this.interestTermM = $$('pq-collapsed [class*=flex] input[type=number]')[3];
	this.interestAmortizationY = $$('pq-collapsed [class*=flex] input[type=number]')[4];
	this.interestAmortizationM = $$('pq-collapsed [class*=flex] input[type=number]')[5];
	//Mortgage Insurance
	this.insuredChkBox = $$('p-checkbox label')[0];
	this.incInMortgageCB = $$('p-checkbox label')[1];
	this.premiumRateCB = $$('p-checkbox label')[2];
	this.mortgagepremiumRate = $$('pq-collapsed input[id]')[6];
	this.mortgagePremium = $$('pq-collapsed input[id]')[7];
	this.locType = $$('[class*=collapsed-content] p-dropdown')[6];
	//Mortagage info (Done)
	this.closinfdate = $$('p-calendar button[class*=datepicker]')[0];
	this.financingWaiver = $$('p-calendar button[class*=datepicker]')[1];
	this.improvements = $$('pq-collapsed input[id]')[3];
	this.improvementValue = $$('pq-collapsed input[id]')[4];​
	//Mortgage request Details
	this.firstpaymentdate = $$('p-calendar button[class*=datepicker]')[2];
	this.maturitydate = $$('p-calendar button[class*=datepicker]')[3];
	this.mortgageRequestamount = $$('pq-collapsed input[id]')[5];
	this.brand = $$('[class*=collapsed-content] p-dropdown')[1];
	this.mortgageType = $$('[class*=collapsed-content] p-dropdown')[2];
	this.loanType = $$('[class*=collapsed-content] p-dropdown')[3];
	this.lineOfBusiness = $$('[class*=collapsed-content] p-dropdown')[4];
	this.progressAdvance = $$('[class*=collapsed-content] p-dropdown')[5];​
	this.addApplicableProgram = $('[class*=collapsed-content] [class$="primary"]');
	this.addApplicableProgramModal = $('[class="modal-content"] [class*="applicable-program"]');
	this.addApplicableProgramSearch = $('[class="modal-content"] p-autocomplete input');
	this.addApplicableSuggestedPrograms = $$('[class="modal-content"] [class*="suggested-tag"] button');
	this.addApplicableProgramModalClose = $$('[class="modal-content"] [class*="footer"] button')[0];
	this.addApplicableProgramModalApply = $$('[class="modal-content"] [class*="footer"] button')[1];
	this.addApplicableProgramModalShowMoreLess = $('[class="modal-content"] [class*="show"]');
	//Down payment Information
	this.propertyValue = $$('pq-collapsed input[id]')[0];
	this.downPaymentAmount = $$('pq-collapsed input[id]')[1];
	this.downPaymentdescription = $$('pq-collapsed input[id]')[2];
	this.downPaySource = $$('[class*=collapsed-content] p-dropdown')[0];
	this.downPaymentRange = $('p-slider');
	this.downPaymentValue1 = $$('pq-collapsed [class*=flex] input[type=number]')[0];
	this.downPaymentValue2 = $$('pq-collapsed [class*=flex] input[type=number]')[1];
	this.addDownPaymentSource = $('[class*=collapsed-content] [class*="btn-primary"]');
	// Contains all cross icons for downpayment source
	this.clearBtns = $$('[class*=collapsed-content] [class*="btn-icon"]');

	/* === LIABILITIES FORM ELEMENTS === */

	this.liabilitiesTooltip = $('[class*="info-icon"]');
	this.liabilitiesAddLiabilities = $$('[class*="flex"] [class*="btn-primary"]')[1];
	this.totalLiabilities = $$('[class*="rate-detail"] li')[0];
	this.totalMonthlyPay = $$('[class*="rate-detail"] li')[0];
	this.totalPayOff = $$('[class*="rate-detail"] li')[0];
	this.LiabilityForm = $('[class*="modal-body"]');
	this.formHeading = $('[class*="modal-title"]');
	this.formAddBtn = $('[class*="footer"] [class*="btn-primary"]');
	this.formCloseBtn = $('[class*="footer"] [class*="btn-outline-primary"]');
	this.formOptions = $$('[class="form-group"] pq-select');
	this.creditProvider = $$('form input[id]')[0];
	this.liabilitiesLimit = $$('form input[id]')[1];
	this.liabilitiesBalance = $$('form input[id]')[2];
	this.liabilitiesMonthlyPay = $$('form input[id]')[3];
	this.liabilitiesDescription = $$('form input[id]')[4];
	this.liabilitiesCheckBox = $$('[type="checkbox"]');
	this.borrowertotal = $('[class*="row-total-items"]');

	/* === ASSETS FORM ELEMENTS === */

	this.assetsAddBtn = $$('[class*="flex"] [class*="btn-primary"]')[0];
	this.totalAssets = $$('[class*="rate-detail"] li')[0];
	this.netWorth = $$('[class*="rate-detail"] li')[1];
	this.assetsBorrowerTotal = $('[class*="borrower-total"]');
	this.assetsBorrowerValue = $('[class="value"]');
	this.addAssetForm = $('[class*="modal-body"]');
	this.addAssestHeading = $('[class*="modal-title"]');
	this.assetsFormAddBtn = $('[class*="footer"] [class*="btn-primary"]');
	this.assetsFormCloseBtn = $('[class*="footer"] [class*="btn-outline-primary"]');
	this.assetsFormOptions = $$('[class="form-group"]');
	this.assetsDescriptionField = $$('[id*="pq-input"]')[0];
	this.assetsValueField = $$('[id*="pq-input"]')[0];
	this.assetsFormApplicant = $$('p-dropdown[class]')[0];
	this.assetsFormType = $$('p-dropdown[class]')[1];
	this.assetsFormOwnershipType = $$('p-dropdown[class]')[2];

	// Page Methods

	/* this.checkHelpTooltip = function() {
		common.scrollElementIntoMiddle(this.needHelpTooltip);
		this.needHelpTooltip.click();
		common.waitForElementToBeVisible(this.popupModal);
		this.popupClose.click();
	}; */

};

module.exports = new newApplication();