const AccountPage = {
  baseInfo: 'Basic Information',

  columns: {
    userId: 'PPN Account',
    nameZh: 'Chinese Name',
    lastName: 'English Name',
    bpId: 'BP-ID',
    jobTitle: 'Job Title',
    aggrDealers: 'Store & Position',
    mobile: 'Mobile',
    email: 'PPN Email',
    certifiedStatus: 'E-Signature Certification',
    dealerCode: 'Store',
    roles: 'Roles',
    actions: 'Actions',
  },

  storePositionSettings: {
    storePosition: 'Store & Position Settings',
    rangeDescription:
      'The selectable range of stores and positions is all Dealer Codes and positions under the employee’s group.',
    storeAlreadySelected: 'The selected store cannot be selected again.',
    searchPlaceholder: 'Search by Dealer code or store name',
    selectDealerCode: 'Please select a store',
    selectJobTitle: 'Please select a position',
    searchByJobTitle: 'Search by position',
  },

  placeholder: {
    queryWord: 'PPN Account/Chinese Name/English Name/Mobile/Email',
    ppnRoles: 'Search by Role',
    nameZh: 'Please enter Chinese name',
  },

  message: {
    nameZh: 'The Chinese name should be between 2 and 12 characters.',
  },

  deleteModal: {
    title: 'Are you sure you want to delete the employee?',
    content:
      'After deletion, the employee information cannot be retrieved. Please proceed with caution.',
  },

  unBoundModal: {
    title: 'Unbind Mobile Number Confirmation',
    content:
      'Are you sure you want to unbind the mobile number? After unbinding, it cannot be modified.',
  },

  cancelEditModal: {
    title: 'Confirm Cancel Editing?',
    content:
      'The edited content has not been saved yet. Are you sure you want to cancel the editing? Any changes will be lost.',
    okText: 'Cancel Editing',
    cancelText: 'Close',
  },
};

export default AccountPage;
