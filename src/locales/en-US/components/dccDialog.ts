const DccDialog = {
  stepOne: 'Step 1: Select Configuration Method',
  newConfig: 'New Configuration',
  importPorsche: 'Import Porsche Code, Open Existing Configuration',
  enterPorsche: 'Enter Porsche Code',

  stepTwo: 'Step 2: Select Customer BP-ID and Associate Opportunity',
  importBpId: 'Import BP-ID',
  linkLead: 'Associate Opportunity',
  noBpId: 'No BP-ID',
  enterBpIdOrNameOrPhone: 'Enter Customer BP-ID/Last Name/First Name/Phone Number',
  selectLead: 'Select Opportunity',
  noLead: 'No Opportunities Yet',
  createLead: 'Create Opportunity',

  Modal: {
    title: 'Create New Vehicle Configuration',
    okText: 'Create',
    cancelText: 'Cancel',
  },

  Tips: {
    createLeadSuccess: 'Opportunity created successfully',
    importBpIdSuccess: 'BP-ID imported successfully!',
    needImportBpId: 'Please import BP-ID first',
  },

  QuotationModal: {
    title: 'Vehicle configuration is complete, would you like to initiate a quotation?',
    content:
      'Choosing close or cancel will not save the current vehicle configuration information.',
    okText: 'Confirm',
    cancelText: 'Cancel',
    modifyConfigText: 'Modify Configuration',
  },

  ErrorMsg: {
    invalidBpId: 'Invalid customer ID information, please refresh the page and try again',
  },

  PorscheCodeRecommendModal: {
    text: 'Add to recommended configurations',
    successTip: 'Recommended configuration added successfully',
  },
};

export default DccDialog;
