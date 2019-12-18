let applicationList = function () {
  this.newApplicationPage = function () {
    return {
      page: $('[id="page-heading"]')
    };
  };

  //Page Elements
  this.createNewApplicationBtn = $('[class="head"] [class*="btn-primary"]');
  this.filterIcon = $('[class*="icon-drop-down"]');
  this.searchField = $('[class="search-holder"] input');
  this.searchBtn = $('[class*="search-btn"]');
  this.numberOfRecordsDropdown = $('[class="dropdown-holder"] [class*="form-control"]');
  this.pageNavNext = $('[aria-label="Next"]');
  this.pageNavNext = $('[aria-label="Previous"]');
  // Contain all visible archive icons
  this.archiveIcons = $$('[class="iconbox"]:not([hidden])');
  this.draftIcon = $$('[class="draft-icon"]');
  this.recievedIcon = $$('[class="received-icon"]');
  this.submittedIcon = $$('[class="queue-icon"]');
  this.tableLabels = ('[class="table"] [jhitranslate*="label"]');
  this.filterBy = $('[class=card] select');
  this.dateAndDuration = $('[class*=form] input');
  this.dealPurpose = $('p-multiselect [class$="open"]');
  this.recievedCheckboc = $$('p-checkbox [class*="clickable"]')[0];
  this.submittedCheckbox = $$('p-checkbox [class*="clickable"]')[1];
  this.draftCheckbox = $$('p-checkbox [class*="clickable"]')[2];
  this.approvalCheckbox = $$('p-checkbox [class*="clickable"]')[3];
  this.preApprovalCheckbox = $$('p-checkbox [class*="clickable"]')[4];
  this.clearAllFilters = $('[class$="right"] a');
  this.applyFilters = $('[class$="flex"] [class*="btn-primary"]');
};

module.exports = new applicationList();