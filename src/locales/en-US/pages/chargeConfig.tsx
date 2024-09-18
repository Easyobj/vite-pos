const ChargeConfigPage = {
  editCharge: 'Edit Charge',
  addCharge: 'Add Charge',
  columns: {
    name: 'Charge Name',
    category: 'Category',
    amount: 'Default Amount',
    remark: 'Remarks',
    status: 'Enabled',
    tick: 'Default Selected',
    time: 'Charge Creation Time',
    actions: 'Actions',
  },
  category: {
    finance: 'Finance',
    other: 'Other',
  },
  financeCharges: {
    financialServiceFee: 'Financial Service Fee',
    insurance: 'Insurance',
    serviceContract: 'Service Contract',
    purchaseTax: 'Purchase Tax',
    accessoryEquipment: 'Accessory Equipment',
    gpsSystem: 'GPS System',
  },
  otherCharges: {
    registrationServiceFee: 'Registration Service Fee',
    motorInsuranceHandling: 'Motor Insurance Handling',
    usedCarTradeInService: 'Used Car Trade-In Service',
  },
  toolTip: {
    tick: 'If checked, this charge will be selected by default on the finance quote page',
  },
  message: {
    modifySuccess: 'Charge modified successfully!',
    addSuccess: 'Charge added successfully!',
  },
  required: {
    name: 'Please enter a character less than 10 characters',
    amount: 'Please enter an integer less than 6 digits',
  },
};

export default ChargeConfigPage;
