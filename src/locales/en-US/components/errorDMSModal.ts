const ErrorDMSModal = {
  saveOrApprovalTitle: 'Operation Failed',
  saveOrApprovalDescription:
    'Some DMS classifications of optional quotes in the quotation have been modified or deleted, which will prevent successful creation and update of VSO.\n\nPlease modify the DMS classification of the following optional quotes before proceeding:',
  createVsoTitle: 'Failed to Create VSO',
  createVsoDescription:
    'Some DMS classifications of optional quotes associated with the order have been modified or deleted, preventing successful creation of VSO.\n\nPlease go to the quotation and modify the DMS classification of the following optional quotes before creating the VSO:',
};

export default ErrorDMSModal;
