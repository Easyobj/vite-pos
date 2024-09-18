export const QuotationDetailPage = {
  saveLoading: 'Saving...',

  pageTitle: {
    default: 'Quotation Details',
    create: 'Create New Car Quotation',
    new: 'Quotation Not Submitted',
    edit: 'Edit New Car Quotation',
    approve: 'Discount Application Not Submitted',
    approving: 'Quotation Approval in Progress',
    approved: 'Quotation Approved',
    rejected: 'Quotation Rejected',
    invalid: 'Quotation Invalid',
    canceled: 'Quotation Canceled',
    delete: 'Quotation Deleted',
  },

  extraButton: {
    approve: 'Submit Discount Application',
    cancel: 'Cancel',
    cancelQuotation: 'Cancel Quotation',
    createOrder: 'Create Order',
    edit: 'Edit Quotation',
    delete: 'Delete Quotation',
    print: 'Print Customer Version',
    revokeApprove: 'Withdraw Discount Application',
    saveAndViewOrder: 'Save and View Order',
    save: 'Save',
    stopQuotationModify: 'Invalidate Modified Quotation',
    viewOrder: 'View Order',
  },

  customerInfo: {
    title: 'Customer Information',
    name: 'Customer Name',
    type: 'Customer Type',
    individual: 'Individual Customer',
    enterprise: 'Enterprise Customer',
    bpId: 'BP-ID',
    vsoNumber: 'VSO Number',
    relatedLead: 'Related Opportunity',
    contactNumber: 'Contact Number',
    companyName: 'Company Name',
    contactAddress: 'Contact Address',
    remark: 'Remark',
    dealer: 'Dealer',
    import: 'Import',
    selectLead: 'Select Opportunity',
    createLead: 'Create Opportunity',
    remarkAble: 'Remark',
    remarkCount: '(Up to 500 characters)',
  },

  usedCarExchange: {
    title: 'Select Used Car Exchange Upgrade Service',
    brand: 'Brand',
    model: 'Model',
    age: 'Age',
    mileage: 'Mileage',
    residualValue: 'Residual Value',
  },

  carInfo: {
    title: 'Vehicle Information',
    selectCar: 'Select Vehicle',
    carName: 'Vehicle Name',
    vin: 'VIN',
    pvmsOrderNo: 'PVMS Order Number',
    modelCode: 'Model Code',
    estimatePurchaseTax: 'Estimated Vehicle Purchase Tax',
    baseSuggestedRetailPrice: 'Base Suggested Retail Price',
    configSuggestedRetailPrice: 'Configuration Suggested Retail Price',
    totalSuggestedRetailPrice: 'Total Suggested Retail Price',
    cashDiscount: 'Cash Discount',
    afterDiscountPrice: 'After Discount Price',
    additionalCharge: 'Additional Charge',
    estimatedTransactionPrice: 'Estimated Transaction Price',
    otherGiftAmount: 'Other Gift Amount',
    totalDiscount: 'Total Discount',
    vehicleDepositPrice: 'Vehicle Deposit Price',
    showDiscountInfo: 'Show Discount Information',
    vehicleImage: 'Vehicle Image',
    inStockCars: 'In-Stock Cars',
    customCar: 'Customize Car',
    saleTotalPrice: 'Estimated Sales Total Price',
    estimateInsuranceFee: 'Estimated Vehicle Insurance Fee',
    landingTotalPrice: 'Estimated Total Price',
    saleTotalPriceTooltip:
      'Estimated Sales Total Price = Estimated Transaction Price + Total Cost of Optional Quotation Items (excluding coupons and commercial insurance)',
    landingTotalPriceTooltip:
      'Estimated Total Price = Estimated Sales Total Price + Estimated Vehicle Insurance Fee + Estimated Vehicle Purchase Tax',
    afterDiscountPriceTooltip:
      'After Discount Price = Total Suggested Retail Price + Cash Discount',
    additionalChargeTooltip:
      'Used to add consumption tax on additional retail links for super luxury cars',
    estimatedTransactionPriceTooltip:
      'Estimated Transaction Price = Total Suggested Retail Price + Additional Charge + Cash Discount',
    totalDiscountTooltip: 'Total Discount = Cash Discount + Other Gift Amount',
  },

  personalization: {
    title: 'Personalization',
    optionalCode: 'Vehicle Configuration Code',
    bodyColorCode: 'Body Color Code',
    bodyColor: 'Body Color',
    innerColorCode: 'Interior Color Code',
    innerColor: 'Interior Color',
    topColorCode: 'Top Color Code',
    topColor: 'Top Color',
  },

  placeholder: {
    lead: 'Please select opportunity',
    noLead: 'No opportunities yet',
    remark: 'Please enter remark',
    cashDiscountPrice: 'Please enter cash discount for the vehicle',
    extraPrice: 'Please enter additional charge',
    paymentDepositPrice: 'Please enter vehicle deposit price',
  },

  errorMessage: {
    requiredField: 'Please enter {{msg}}',
    lead: 'Please select opportunity',
    cashDiscountPrice: 'Please enter cash discount for the vehicle',
    paymentDepositPrice: 'Please enter vehicle deposit price',
    addCustomerVehicleInfo: 'Please add customer and vehicle information first',
    addCustomerInfo: 'Please add customer information first',
    addVehicleInfo: 'Please add vehicle information first',
    selectLead: 'Please select related opportunity first',
    cashDiscount: 'Please fill in cash discount for the vehicle',
    additionalFees: 'Please fill in additional charge',
    vehicleDeposit: 'Please fill in vehicle deposit price',
    invalidSaleTotalPrice:
      'Sales total price does not meet requirements (greater than or equal to 10000 and less than or equal to 100000000)',
    invalidModelCode: 'Please select appropriate model (current modelCode is empty)',
  },

  leavingModal: {
    title: 'Quotation Not Saved, Please Save Before Leaving',
    cancelTitle: 'Save Now',
    confirmTitle: 'Confirm Leave',
    content: 'Quotation is not saved, leaving will lose current data, please save first.',
  },

  dmsBindModal: {
    title:
      'This BP has not been bound to a customer card in DMS. A customer card with consistent information has been found {{msg}}. Would you like to bind it?',
    cancelTitle: 'No',
    confirmTitle: 'Yes',
    dmsSuccessfullyBind: 'DMS binding successful, please recreate VSO',
    content: (msg: string): JSX.Element => (
      <div className="mb-20">
        <div className="mb-20">
          This BP has not been bound to a customer card in DMS. A customer card with consistent
          information has been found {{ msg }}. Would you like to bind it?
        </div>
        <div className="mb-20">Choosing Yes will bind BP to an existing customer card;</div>
        <div className="mb-20">
          Choosing No will cancel the creation of this VSO. Please log in to DMS to check customer
          card information and whether binding is required.
        </div>
      </div>
    ),
  },
  confirmMsg: {
    needClearLoan:
      'The field you are adjusting may affect the mortgage business scheme, resulting in the current financial scheme being cleared. Are you sure you want to modify?',
    approve: {
      title: 'Confirm Submit Discount Application?',
      content:
        'After submission, the quotation will be sent to the approver for discount application approval. Are you sure you want to submit the discount application?',
      successTip: '',
    },
    cancelCreate: {
      title: 'Confirm Cancel Creating Quotation?',
      content:
        'Unsaved changes will be lost after cancellation. Are you sure you want to cancel creating the quotation?',
      okText: 'Cancel Creating Quotation',
    },
    cancelEdit: {
      title: 'Confirm Cancel Editing Quotation?',
      orderChangeContent:
        'After canceling the editing of the quotation, the content of this modification will not be saved, the quotation associated with the order will remain unchanged, and the order status will be restored from "Changing" to "Signed". Are you sure you want to cancel editing the quotation?',
      content:
        'Unsaved changes will be lost after cancellation. Are you sure you want to cancel editing the quotation?',
      okText: 'Cancel Editing Quotation',
    },
    cancel: {
      title: 'Confirm Cancel Quotation?',
      content: (): JSX.Element => (
        <div>
          After canceling the quotation, the quotation will be in{' '}
          <span className="high-light">"Canceled"</span> status. Are you sure you want to cancel the
          quotation?
        </div>
      ),
      onlineOrderContent: (orderNo: string): JSX.Element => (
        <div>
          After canceling the quotation, the quotation will be in{' '}
          <span className="high-light">"Canceled"</span> status. The online order (order number:{' '}
          {orderNo}) will be unbound from this quotation, and a new quotation can be created. Please
          make sure you have reached an agreement with the customer. Are you sure you want to cancel
          the quotation?
        </div>
      ),
    },
    createOrder: {
      title: 'Order Created Successfully',
      content: 'You can go to the order details page to add contracts or documents for this order.',
      okText: 'Go to Order',
      cancelText: 'Go Later',
    },
    delete: {
      title: 'Confirm Delete Quotation?',
      content:
        'After deletion, this quotation will not be able to be retrieved, please proceed with caution.',
      onlineOrderContent:
        'After deletion, this quotation will not be able to be retrieved, and the system will unbind it from the online order (order number: {{orderNo}}). Please make sure you have reached an agreement with the customer. Are you sure you want to delete the quotation?',
    },
    revoke: {
      title: 'Confirm Withdraw Discount Application?',
      content: (): JSX.Element => (
        <>
          After withdrawing the discount application, the quotation will return to the{' '}
          <span className="high-light">"Not Submitted"</span> status and can be edited and
          resubmitted for discount application. Are you sure you want to withdraw the discount
          application?
        </>
      ),
    },
    stopModify: {
      title: 'Confirm Invalidate Modified Quotation?',
      content:
        'After invalidating the modified quotation, the content of this modification will not be saved, and the quotation associated with the order will be the quotation before this modification. Are you sure you want to invalidate the modified quotation?',
    },
  },
  earBirdWaringModal: {
    title: 'Unable to Save Quotation',
    content: (msg: string): JSX.Element => (
      <div>
        <div>
          Unable to save the quotation. Because the vehicle selected in the current quotation is
          inconsistent with the vehicle in the online order, the customer cannot enjoy the benefits
          of the online order.
        </div>
        <br />
        <div>
          Please retry after selecting the vehicle again (only the following vehicles enjoy the
          benefits: {msg})
        </div>
      </div>
    ),
  },
  openPorscheCodeModal: {
    title: 'Are you sure you want to change the configuration of the current vehicle?',
    cancelText: 'Enter Porsche Code',
    okText: 'Open Original Configuration',
  },
  importBPModal: {
    title: 'Would you like to go to "Customer File of Current BPID" to modify the information?',
    content:
      'Order change does not support changing BPID. If you need to change customer information under the same BPID, please go to "My Customers -> Customer List -> Customer Details -> Customer File" or directly modify it in the C@P system. Confirm to go to "Customer File of Current BPID" to modify information?',
  },
  generateContractModal: {
    defaultTitle: 'Select the Type of Contract Template to Generate',
    cancel: 'Cancel',
    okText: 'Confirm',
    currentlyInUse: 'Currently in Use',
  },
  preOrderExistModal: {
    title: 'Reminder',
    content:
      'The customer already has an online order. If you want to create a quotation based on the online order, please go to the "Online Orders" module to view and create the quotation.',
    okText: 'Go to Create',
  },
};
