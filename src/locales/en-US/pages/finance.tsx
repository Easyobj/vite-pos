import React from 'react';

const FinancePage = {
  pageTitle: 'PFS Financial Quotation',
  calculateQuotation: 'Calculate Quotation',
  quotationHistory: 'Quotation History',
  quotationInfo: 'Quotation Information',
  filter: {
    title: 'Filter',
    resetAll: 'Reset All',
    quotationNoCustomerName: 'Quotation No./Customer Name',
    financialProduct: 'Financial Product',
    quotationCreationTime: 'Quotation Creation Time',
    lastViewedTime: 'Last Viewed Time',
    to: 'To',
  },
  table: {
    createTime: 'Creation Date',
    lastVisitTime: 'Last Viewed Time',
    visitCount: 'Visit Count',
    operate: 'Operate',
    detail: 'Detail',
    quotation: 'Quotation',
    totalRecord: 'Total {{text}} records found',
  },

  form: {
    carModel: 'Car Model',
    modelYear: 'Model Year',
    usedCarListingPrice: 'Used Car Listing Price',
    suggestedRetailPrice: 'Suggested Retail Price',
    suggestedRetailPriceTip: (
      isFromQuotation: boolean,
      nakedCarMarketPrice: string,
      configMarketPrice: string
    ): JSX.Element => (
      <>
        {isFromQuotation ? '*Including installation. ' : ''}
        Includes: Vehicle basic suggested retail price {nakedCarMarketPrice}, configuration
        suggested retail price {configMarketPrice}
      </>
    ),
    usedCarSalesPrice: 'Used Car Sales Price',
    estimatedTransactionPrice: 'Estimated Transaction Price',
    invoicePrice: 'Invoice Price',
    usedCar: 'Used Car',
    financialProduct: '{{text}} Financial Product',
    leaseTerm: 'Lease Term',
    loanTerm: 'Loan Term (months)',
    term: 'Term (months)',
    channel: 'Channel',
    downPayment: 'Down Payment',
    finalPayment: 'Final Payment',
    totalOptionalCost: 'Total Optional Costs',
    totalFinanceAdditionalCharges: 'Total Finance Additional Charges',
    financeEligibleItems: 'Finance Eligible Items',
    additionalChargeDescription:
      'Finance Additional Charges (VAP) added can participate in loan or finance lease services, used to calculate down payment, final payment, loan amount, or finance amount.',
    calculateQuotation: 'Calculate\nQuotation',
    totalDownPayment: 'Total Down Payment',
    totalPayable: 'Total Payable',
    estimatedTotalPrice: 'Estimated Total Price',
    financingAmount: 'Financing Amount',
    loanAmount: 'Loan Amount',
    resetPlan: 'Reset Plan',
    exitComparison: 'Exit Comparison',
    compareBothPlans: 'Compare Both Plans',
    generatePreview: 'Generate Preview',
    exitComparisonMode: 'Exit comparison mode, please select the plan you want to retain records',
    planOne: 'Plan One',
    planTwo: 'Plan Two',
    neitherRetained: 'Neither Retained',
    optionalItems: 'Optional Items',
    additional: 'Additional',
    financiable: 'Financiable',
    monthlyPayment: 'Monthly Payment',
    installmentPayment: 'Installment Payment',
    loanTermExpect: '{{text}} Term',
    residualValueAtEndOfTerm: 'Residual Value at End of Term',
    residualValueAtEnd: 'Residual Value at End',
    interestRate: 'Interest Rate',
    vehicleVin: 'Vehicle VIN',
    PVMSOrderNo: 'PVMS Order No',
    quotationNo: 'Quotation No',
    financeChannel: 'Finance Channel',
    customerName: 'Customer Name',
    customerPhone: 'Customer Phone',
    customerSalutation: 'Customer Salutation',
    solutionDetail: 'Solution Details',
    changeSolution: 'Change Solution',
    financialServiceFee: 'Financial Service Fee',
  },
  detail: {
    carInfo: 'Car Information',
    planInfo: 'Plan Information',
    costInfo: 'Cost Information',
    customerInfo: 'Customer Information',
    interestRate: 'Display Interest Rate',
    saveToQuotation: 'Save Plan to Quotation',
    generateFinanceQuotation: 'Generate Finance Quotation',
    financialServices: 'Financial Services',
    PFSQuotationSuccess: 'PFS Financial Quotation Successful, closing in 3 seconds',
  },
  historyDetail: {
    time: 'Time',
    app: 'Application',
    ipAddress: 'IP Address',
    pc: 'PC',
    mobile: 'Mobile',
    authorized: 'Authorized',
    authorizedOfficer: 'Authorized Officer',
    financeQuoteGenerated: 'Finance Quote Generated',
    printQuote: 'Print Quotation',
    shareCustomer: 'Share Customer',
    viewQuote: 'View Quotation',
    viewHistory: 'View History',
    visitCount: 'Visit Count: {{text}} times',
    viewQuoteOnMobile: 'View Quotation Plans on Mobile',
    scanQRCode: 'Scan QR Code',
    authorizeFIOfficer: 'Authorize to F&I Officer?',
    authorizeSuccess:
      'After successful authorization, the F&I officer will be able to view customer information on the backend management platform.',
  },
  errorMsg: {
    ensureBothCalculated: 'In dual plan mode, please ensure that both plans have been calculated',
    totalGreaterThanBasic:
      'The suggested retail price of the vehicle should be greater than the basic suggested retail price of the vehicle',
    costNotExceed25Percent: (isFromQuotation: boolean): string =>
      `The total optional cost ${
        isFromQuotation ? 'of the finance optional items' : ''
      } should not exceed 25% of the estimated transaction price`,
    inputError: 'Input parameter error',
    noLoanPeriod: 'No available loan period',
    noFinanceChannel: 'No available finance channel',
    estimatedTransactionPrice:
      'Please enter the correct estimated transaction price of the vehicle',
    customerInfo: 'Please fill in the customer information correctly',
    selectFinancePlan: 'Please select the finance plan to be used for the quotation',
    chineseInputLimit: 'Only Chinese characters are allowed with a length not exceeding 10',
    validPhoneNumber: 'Please enter a valid phone number',
  },
  remark: {
    downPaymentByPayment:
      'Total down payment = Down payment + Non-financiable total optional costs',
    downPaymentByPayable: 'Total down payment = Total payable - Loan amount (or finance amount)',
    downPaymentByFinanceCosts:
      'Total down payment = Down payment + Non-financiable finance additional charges',
    totalPriceByOptionalCosts:
      'Estimated total price = Estimated transaction price + Total optional project costs',
    totalPayableAmount:
      'Total payable = Vehicle sales total price + Estimated vehicle insurance premium',
    totalPriceByFinanceCosts:
      'Estimated total price = Estimated transaction price + Total finance additional charges',
  },
};

export default FinancePage;
