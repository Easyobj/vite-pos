const QuotationOptions = {
  Items: {
    title: 'Quotation Optional Items',
    add: 'Add {{title}}',
    change: 'Change {{title}}',
    discountTotalPrice: '{{title}} Total Price',
    saveText: 'Save',
    fineAccessory: {
      title: 'Fine Accessories',
      code: 'Accessory Code',
    },
    originAccessory: {
      title: 'Original Accessories',
      code: 'Accessory Code',
    },
    afterService: {
      title: 'Service Products',
      code: 'Service Code',
    },
    discount: {
      title: 'Discount Coupon',
    },
    otherFree: {
      title: 'Agency Service Fee',
    },
    businessInsurance: {
      title: 'Insurance Service',
    },
    loan: {
      title: 'Mortgage Business',
      calculateFinancialQuotes: 'Calculate Financial Quotes',
      mortgageBusinessServiceFee: 'Financial Service Fee',
    },
  },
  Columns: {
    code: 'Code',
    name: 'Name',
    discountTypeSales: 'Sales',
    discountTypeGift: 'Gift',
    remark: 'Reason for Gift',
    unitPrice: 'Unit Price',
    amount: 'Quantity',
    unitTotalPrice: 'Total Price',
    realTotalPrice: 'Real Total',
    dmsType: 'DMS Type',
    discountRate: 'Discount Rate',
    discountUseCondition: 'Usage Conditions',
    discountValidPeriod: 'Validity Period',
    discountPrice: 'Amount',
    feeName: 'Fee Name',
    retailPrice: 'Retail Price',
    financialInstitutions: 'Financial Institutions',
    downPaymentAmount: 'Down Payment Amount',
    loanAmount: 'Loan Amount',
    loanTerm: 'Loan Term',
    loanTermWithUnit: 'Loan Term (Months)',
    serviceFeeAmount: 'Service Fee Amount',
    requiredField: 'Please enter',
  },
  Placeholder: {},
  ErrorMessage: {
    requiredField: 'Please enter all required fields',
    minAmount: 'Quantity must be greater than 0',
    maxNumber: 'Maximum number cannot be greater than {{max}}',
  },
};

export default QuotationOptions;
