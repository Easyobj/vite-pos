const DealerConfigPage = {
  baseInfo: 'Basic Information',

  columns: {
    dealerCode: 'Dealer Code',
    dealerId: 'Dealer ID',
    bpId: 'BP ID',
    companyCode: 'Company Code',
    locationCode: 'Location Code',
    storeId: 'Store ID',
    companyName: 'Dealer Legal Entity',
    accountBank: 'Corporate Bank',
    accountBankBranch: 'Bank Branch',
    accountNumber: 'Corporate Bank Account',
    unitCreditCode: 'Unified Social Credit Code',
    uildNoAuth: 'Corporate E-Signature',
    posStatus: 'POS Status',
    dealerChineseName: 'Store',
    motherOrSon: 'Store Nature',
    partnerNo: 'Dealer Group',
    salesArea: 'Sales Area',
    salesRegion: 'Sales Region',
    longitude: 'Longitude',
    remark: 'Remark',
    province: 'Province/City/District',
    address: 'Detailed Address',
    telephone: 'Contact Phone',
    postalCode: 'Postal Code',
    contact: 'Contact Person',
    email: 'Email',
    salesTelephone: 'Sales Phone',
    latitude: 'Latitude',
    name: 'Store',
    actions: 'Actions',
  },

  message: {
    checkData: 'Please check if the data is complete and correctly formatted',
    signCertification: 'Please complete the e-signature certification in Personal Center first',
    dealerCodeEmpty: 'Dealer Code is empty, cannot enable POS permission',
    companyCodeEmpty: 'Company Code is empty, cannot enable POS permission',
    associationSuccess: 'Association successful, corporate certification completed',
    accountNotCertified:
      'This account is not certified, please proceed to Fadada for certification before associating the account',
    accountDuplicate:
      'This account is duplicated, please contact customer service to delete it before associating the account',
    maxLength50NonChinese: 'Length no more than 50 characters and non-Chinese',
    validDealerEntity: 'Please enter the correct dealer legal entity',
    validLongitude: 'Longitude integer part should be 0-180, decimal part should be 6 to 8 digits!',
    validLatitude: 'Latitude integer part should be 0-90, decimal part should be 6 to 8 digits!',
    motherOrSonTootip:
      'The inventory cars under this dealer code will be imported to the mother store by default. Vehicles need to be allocated from the mother store inventory to the sub-store.',
    editTelephoneWarning:
      'Editing this information will affect the display on My Porsche, please proceed with caution',
    enterPostalCode: 'Please enter the postal code',
  },

  editConfirmModal: {
    title: 'Confirm Dealer Information Modification',
    content:
      'Once created, Dealer Code, Company Code, Dealer Legal Entity, and Corporate Bank Account cannot be changed. Please check carefully before submitting',
  },

  openDealerConfirm: {
    title: 'Confirm to Open Store?',
    content:
      'Opening this store in POS will allow store users to view and switch to this store in the top right corner of POS for subsequent operations. Are you sure you want to open the store?',
    oktext: 'Open',
  },

  closeDealerConfirm: {
    title: 'Confirm to Close Store?',
    content:
      'Closing this store in POS will prevent store users from viewing and switching to this store in the top right corner of POS. Historical business data created under this store will not be affected and can continue to be viewed and operated in the dealer end. Are you sure you want to close the store?',
    oktext: 'Close',
  },

  authModal: {
    title: 'E-Sign Authentication Information',
    FDD_Platform: 'Fadada Authentication Platform',
    changeAdminAccountTip: 'To change the Fadada admin account, please go to the platform.',
    getValidCode: 'Get Verification Code',
    authenticate: 'Authenticate',
    refreshStatus: 'Refresh Status',
    validate: 'Validate',
    columns: {
      mobile: 'Admin Authentication Phone Number',
      adminAccountName: 'Admin Authentication Account',
      adminName: 'Admin Name',
      companyName: 'Company Authentication',
      validCode: 'Verification Code',
      certifySuccessTime: 'Fadada Review Time',
    },
    message: {
      sendCodeTooFrequent: 'Verification code cannot be sent more than once per minute',
      scanQRCode: 'Scan QR Code to Authenticate',
      invalidPhoneNumber: 'Please enter a valid phone number',
      invalidCode: 'Invalid verification code, please re-enter',
    },
    searchPartnerNoPlaceholder: 'Search by Group Display Name/Partner No.',
  },
};

export default DealerConfigPage;
