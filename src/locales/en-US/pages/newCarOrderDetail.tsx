/* eslint-disable max-len */
import { ReactElement } from 'react';

const NewCarOrderDetailPage = {
  dataLoading: 'Data Loading, Please Wait...',
  isDownloading: 'Downloading...',
  isUploading: 'Uploading, Please Wait...',
  orderNumberNotFound: 'Order Number Not Found',
  header: {
    order: 'Order',
    hasRefund: 'Refunded',
    changing: 'Changing',
    usedCoupon: 'Used Coupon',
    updateTime: 'Latest Update Time',
    lastChangeDate: 'Time of Last Order Status Change',
    firstSignDate: 'First Customer Signature Date',
    firstSignDateTip:
      'The time when the customer first completed signing the current order, often corresponding to the initial valid signing date of the main contract',
    lastSignDate: 'Latest Customer Signature Date',
    lastSignDateTip: 'The most recent time when the customer signed a document',
    firstContractSignDate: 'First Contract Signing Date',
    firstSignedDate: 'The date when the order was first marked as signed',
    latestContractSignDate: 'Latest Contract Signing Date',
    latestContractSignDateTip:
      'The most recent time at which the order status changed to "Signed"; if there have been no changes, this is the same as the "First Contract Signing Date"',
    changeReason: 'Reason for Change',
    belongStore: 'Belonging Store',
    deliveryDetail: 'Delivery Detail',
    modifyOrder: 'Modify Order',
    reviseQuotation: 'Revise Quotation',
    changeComparison: 'Change Comparison',
    abortChange: 'Abort Change',
    cancelOrder: 'Cancel Order',
    abortCancel: 'Abort Cancellation',
    completedRefund: 'Refund Completed',
    inconformity:
      'The identification number of this order does not match the last four digits ({{userIdentityNoEnd4}}) of the identification number in the associated online order (Order No.: {{preOrderNo}}), which may result in the customer being unable to enjoy the benefits of the online order.',
    goQuoModal: {
      title: 'Operation Failed',
      defaultContent:
        'The associated quotation for the current order has not yet been approved for the discount. Unable to perform document-related operations or modify the quotation. Please wait until the discount is approved before proceeding with further order operations.',
      okText: 'Go to Quotation',
      cancelText: 'Close',
    },
    refundModal: {
      title: 'Confirm Completed Refund',
      content:
        'Upon confirmation, the VSO number will be removed from the DMS platform. If there are outstanding payments under this VSO number, the deletion will fail. Please process the refund through the DMS first.',
      okText: 'Confirm',
      cancelText: 'Cancel',
    },
  },
  side: {
    quotationInfo: 'Quotation Information',
    model: 'Model',
    pvmsOrderNo: 'PVMS Order Number',
    totalPrice: 'Estimated Total Sales Price',
    totalPriceTooltip:
      'Estimated Total Sales Price = Estimated Vehicle Transaction Price + Total Cost of Optional Items (excluding coupons and commercial insurance)',
    carBasicPrice: 'Vehicle Basic Suggested Retail Price',
    equipmentPrice: 'Equipment Suggested Retail Price',
    carTotalPrice: 'Vehicle Total Suggested Retail Price',
    cashDiscount: 'Vehicle Cash Discount',
    discountPrice: 'Vehicle Discounted Price',
    transactionPrice: 'Estimated Vehicle Transaction Price',
    deposit: 'Vehicle Deposit Payable',
    syncDMS: 'Sync DMS',
    syncing: 'Syncing',
    syncFailPrefix: 'Failed to sync with DMS. DMS error message:',
    syncInfo:
      'A request has been made to sync with DMS. It will be automatically updated once the sync is successful.',
    syncSuccess: 'Sync with DMS successful',
    porscheCode: 'Porsche Code',
    customerInfo: 'Customer Information',
    modifyCustomerInfo: 'Modify',
    customerName: 'Customer Name',
    company: 'Company',
    individual: 'Individual',
    changeBuyerType: 'Change Type',
    changeBuyerTypeTitle: 'Please select the buyer type',
    individualBuyer: 'Individual Buyer',
    companyBuyer: 'Company Buyer',
    fillCustomerInfo: 'Complete Customer Information',
    fill: 'Complete',
    changeBuyerFail:
      'The following information is missing for the current customer, and the buyer type cannot be switched. Please go to the customer profile and complete the information before trying again.',
    phone: 'Phone Number',
    identityNo: 'Identification Number',
    identityType: 'Identification Type',
    address: 'Address',
    companyResponsibleRole: 'Company Responsible Person Role',
    companyName: 'Company Name',
    unitCreditCode: 'Unified Social Credit Code',
    changeBuyerTypeSuccess: 'Buyer type changed successfully',
    changeTooltip:
      'All documents in the order that are not yet signed or approved need to be in an unsigned and unapproved state to support modifying customer information',
    contactMobile: 'Contact Phone',
    signMobile: 'Signing Phone',
    changeMobile: 'Change Signing Phone',
    changeMobileInfo:
      'After modification, the new mobile number will be used for contract information input and as the SMS receiving number for electronic signing. It will not update the customer phone in C@P.',
    inputMobile: 'Enter Mobile Number',
    wrongPhoneFormat: 'Incorrect phone number format',
    leadCode: 'Lead Code',
    companyCreditCode: 'Company Credit Code',
    signRole: 'Signatory Role',
    privacyDocument: 'Privacy Agreement',
    resignWarn:
      "The customer's last name/first name has been modified. Please re-sign the privacy agreement.",
    sign: 'Sign',
    resign: 'Resign',
    policy: 'Personal Information Protection Policy',
    mobileEditSuss: 'Contact number modification successful',
    updateContractSuss: 'Your modified information has been updated in the contract document',
    revokeDescription: 'The current contract document status is not "Unsigned Unapproved", modifying customer information at this point will not synchronize to the order. If synchronization is needed, please withdraw the document status first before proceeding.',
    warning: 'Warning',
    unUpdateDescription: 'Modifying customer information at this time will not be able to update to the order. Updating is only supported when the order status is in progress and before initiating signing approval.'
  },
  editQuotationModal: {
    title: 'Confirm Editing Quotation',
    okText: 'Edit Quotation',
    initStatus: 'Unsigned & Not Approved',
    content: (domContent: ReactElement): ReactElement => (
      <>
        Editing the quotation will reset all documents to the
        {domContent}
        state. Documents currently in the 'Signing' or 'Pending Approval' stages will be
        automatically withdrawn from those processes; whereas 'Signed' or 'Approved' documents will
        have their current signature or approval statuses voided.
      </>
    ),
  },
  cancelOrderModal: {
    head: 'Cancelling the order will impact the following items',
    invalidContent: 'All documents under this order will be invalidated and cannot be restored',
    foot: 'Please ensure consensus with the customer. Are you sure you want to cancel the order?',
    preOrderReservedInfo:
      'The online order (Order No.: {{preOrderNo}}) will be unbound from this order, allowing you to create a new quotation',
    preOrderFinishedInfo:
      'The online order has been settled, so it is impossible to create a new quotation. The deposit for the online order has been transferred to the dealer account. Please handle the deposit matters offline',
    hcInfo:
      'Logistics/service work orders created in the home charging system will also be cancelled. If the customer has received or installed the home charging equipment, Porsche China will charge your Porsche Centre accordingly',
    couponInfo: 'Used coupons cannot be returned to the user account',
    confirm: (dom: ReactElement): ReactElement => (
      <>
        After confirming the cancellation, the order will move to {dom} and allow adding termination
        agreements.
      </>
    ),
    cancelingStatus: '"Cancelling" Status',
    continueCancel:
      'After successfully cancelling the order, the following items will be impacted. Please confirm the cancellation and proceed:',
    defaultTitle: 'Confirm Cancelling the Order?',
    delivered: 'The order has been delivered. Do you still want to cancel?',
    invoiced: 'The order has been invoiced. Do you still want to cancel?',
    okText: 'Cancel Order',
    cancelText: 'Close',
    resSuss: 'Order Has Been Cancelled',
  },
  modifyModal: {
    title: 'Please Select a Change Method',
    okText: 'Confirm Change',
    noQuotationId: 'Order change, the returned quotation ID is empty',
    subTitle:
      'Initiating a change will automatically redirect to the quotation page. Please modify the quotation before proceeding with contract changes.',
    ruleMsg: 'A change method must be selected',
    onlyFile: 'Only change selected documents or add new documents',
    resign: 'Resign new contracts and agreements, void all previously signed documents',
    textLabel: 'Reason for Change',
    placeHolder: 'Please Enter',
    required: 'Must Fill In',
  },
  terminateModal: {
    title: 'Do You Want to Terminate the Change?',
    confirm: 'Confirm Termination',
    abandon: 'Abandon Termination',
    content: 'After terminating the change, the order will revert to the "Signed" status.',
  },
  // Contract Document
  conDocument: {
    title: 'Contract Document',
    auditMaterial: 'Audit Materials & Documents',
    latestDocument: 'Latest Document',
    addFromTemplate: 'Add from Template',
    addFromLocal: 'Add from Local',
    electronicSign: 'Electronic Sign',
    offlineSign: 'Offline Sign',
    currentBuyerApproveLink: "Current Buyer's Approval Link",
    currentBuyerSignLink: "Current Buyer's Sign Link",
    useWeChatScanSign:
      'Please scan the QR code below using WeChat or a mobile phone QR code scanner, and after reading through the entire contract content, complete the signing process.',
    originalBuyerApproveLink: "Original Buyer's Approval Link",
    originalBuyerSignLink: "Original Buyer's Sign Link",
    useWeChatScanAuth:
      "Please advise the customer to scan the QR code below using WeChat or their mobile phone's QR code scanner for verification purposes. Upon successful completion of the customer's verification, the system will automatically send a signing link.",
    downloadAll: 'Download All',
    createMainContract: 'Create Main Contract',
    electronicSignature: 'Initiate Electronic Signature',
    submitApproval: 'Submit for Approval',
    orderCancelCompleted: 'Order Cancellation Complete',
    offlineSignature: 'Initiate Offline Signature',
    signedAndApproved: 'Signed and Approved',
    addChangeProtocol: 'Add Amendment Protocol',
    addTerminationProtocol: 'Add Termination Protocol',
    addAdditionalProtocol: 'Add Additional Protocol',
    withdrawApplication: 'Withdraw Signing Application',
    invalidApproval: 'Void Signing/Approval',
    withdrawApproval: 'Withdraw Approval',
    authSignLink: 'Authentication/Sign Link',
    more: 'More',
  },
  // Master Contract
  masterContract: {
    title: 'Master Contract',
    empty: 'No master contract available',
    createMaster: 'Click "Create Master Contract" at the top of the list to add one',
  },
  // Additional Agreements
  additionContract: {
    title: 'Additional Agreements',
    empty: 'No additional agreements present',
    createAddition: 'Additional agreements can be added after creating the master contract',
  },
  // Changing Agreement
  changeAgreement: {
    title: 'Change Agreement',
    emptyTitle: 'No Change Agreement Added',
    emptyContent:
      'A change agreement must be added each time there is a change; otherwise, initiating the signing process will not be possible',
  },

  // Termination Agreement
  terminalAgreement: {
    title: 'Termination Agreement',
    emptyTitle: 'No Termination Agreement Added',
    emptyContent:
      'To cancel the order, a termination agreement must be added; otherwise, the cancellation cannot proceed',
  },

  // Historical Contracts
  historyContract: {
    title: 'Historical Contracts',
  },
  // Contract Table
  contractTable: {
    currentBuyer: 'Current Buyer',
    originBuyer: 'Original Buyer',
    completeSign: 'Complete Signing',
    editSignature: 'Edit Signatures',
    download: 'Download',
    delete: 'Delete',
    reUpload: 'Re-upload',
    uploadFile: 'Upload Document',
    change: 'Amend',
    docValidateFail: 'Document Activation Failure',
    contactTechnical: 'Please Contact POS Technical Support',
  },
  // Other Documents
  otherDocument: {
    title: 'Other Documents',
    subtitle:
      'Documents in this area do not participate in the signing process but can be viewed by the approval end and document center',
    addFile: 'Add Documents',
    empty: 'No other documents available',
    description:
      'Documents that do not require customer signatures can be uploaded here. Any additions made by the sales coordinator will also be displayed here',
    fromLocal: 'Select from Local',
    maxRuleMsg: 'Each file cannot exceed {{countDesc}} in size',
    deleteSucc: 'Deletion Successful',
    uploadSucc: 'Upload Successful!',
    local: 'Local Upload',
    takePhoto: 'Take Photo',
    download: 'Download',
    delete: 'Delete',
    reUpload: 'Re-upload',
  },
  // Upload Modal - Lazy Load
  uploadModalLazy: {
    mainTitle: 'Upload/Take Photos of Other Documents',
    confirmContent:
      'Have you finished adding? After uploading, the images will be merged and converted into a single PDF document.',
    upload: 'Upload',
    tipsMsg: 'Camera Tips',
    uploadProtocol: 'Upload/Shoot Contract or Agreement',
    confirmSignedContent: "Are you uploading a document that has already been signed? Uploading an agreement that has completed signing and approval will change the status to 'Signed and Approved'."
  },
  buildTable: {
    fileName: 'File Name',
    contractCode: 'Code',
    contractStatus: 'Status',
    updateTime: 'Update Time',
  },
  // Common Text
  commonText: {
    thirdParty: 'Third Party',
  },
  // Logistics Information
  logisticsInfo: {
    title: 'Logistics Information',
  },
  approvalModal: {
    title: 'Confirm Submission for Approval?',
    subtitle:
      'After submission, the following documents will be sent to the approver for online approval. Confirm submission for approval?',
    prefixOkText: 'Submit',
    fileName: 'Document Name',
    fileStatus: 'Document Status',
  },
  identityModal: {
    title: "Last Four Digits of Identity Don't Match",
    okText: 'I Understand',
  },
  preventApproveModal: {
    title: 'Unable to Submit for Approval',
    onlineOrderRefund:
      'Online order has been refunded. Approval cannot be submitted. Please cancel the order.',
    invalidFile:
      'After cancellation, all documents under this order will be invalidated and irrecoverable',
    okText: 'I Understand',
  },
  // Online Refund Confirmation Modal
  onlineRefundModal: {
    title: 'Online Order Has Been Refunded',
    content: `The online order (Order No.: {{preOrderNo}}) has been cancelled. If you proceed with submitting for signing, the customer will no longer retain the benefits associated with the online order.`,
    okText: 'I Understand',
  },
  // Confirm Electronic Signing Modal
  confirmOnlineSignModal: {
    title: 'Confirm Initiating Electronic Signing?',
    subtitle:
      'Initiating electronic signing will send the following documents to the client’s mobile phone for signing via SMS. Are you sure you want to initiate electronic signing?',
    sendToOriginalBuyer: 'Send to Original Buyer:',
    sendToCurrentBuyer: 'Send to Current Buyer:',
  },
  // Confirm Offline Signing Modal
  confirmOfflineSignModal: {
    title: 'Confirm Initiating Offline Signing?',
    subtitle:
      'After initiating offline signing, the following documents will be automatically downloaded. Please complete the offline signing and submit the signed documents upon completion. Are you sure you want to initiate offline signing?',
  },
  // Common Modal Footer Buttons for Submitting Approval / Online Signing / Offline Signing
  modalFooterBtn: {
    cancelText: 'Cancel',
    suffixText: 'and Create VSO',
    defaultPrefixText: 'Initiate',
  },

  // Revoke Signing Modal
  revokeSignModal: {
    title: 'Withdraw Signing',
    defaultSubtitle:
      'Executing the withdrawal of the signature will revert all the following documents back to an "Unsigned" status. Please confirm whether you wish to withdraw the signature.',
    okText: 'Withdraw Signature',
    resultSuss: 'Withdrawal of Signature Successful',
  },
  // Add a contract template
  additionModal: {
    title: 'Please Select Agreement Category',
    defaultTitle: 'Please Select Contract Category',
    placeholder: 'Please Select an Agreement Template',
    defaultPlaceholder: 'Please Select Contract Template',
    confirmOkText: 'Confirm',
    generateOkText: 'Generate Contract',
    cancelText: 'Later',
    defaultCancelText: 'Cancel',
  },
  // push related notifications
  notification: {
    know: 'Understood',
    // Success notification for submitting electronic signature
    successSignature: {
      phone: 'Phone',
      message: 'Electronic Signature Initiated Successfully',
      description:
        "The e-signature process has started, and the signing link will be sent to {{contact}}. Please continue to track the customer's signing status.",
    },
    // Prompt to create a master contract
    createMainContract: {
      add: 'Add Now',
      message: 'Add Main Contract?',
      description:
        'The order does not have a master contract yet. Adding one will allow you to proceed with contract approval.',
    },
    // Reminder to upload signed documents
    uploadSigned: {
      description:
        'The offline signing process has begun. Please upload the already-signed documents separately to their corresponding locations.',
      message: 'Next Step: Upload Signed Documents',
    },
    // Reminder to click 'Refunded'
    notifyReturn: {
      description:
        'The order cancellation approval has been granted. Please proceed to the pending confirmation section to complete the "Refund" confirmation process.',
      message: 'Next Step: Click "Refunded"',
      noShowAgain: 'Do not show this reminder again next time.',
    },
  },
  // Modal dialog for signature position change
  signatureChangeModal: {
    title: 'Signature Position Has Changed',
    content:
      'The current signature position edits have not been saved. Cancelling will close the page and discard any unsaved coordinate changes. Are you sure you want to confirm the cancellation?',
    okText: 'Confirm Cancellation',
    cancelText: 'Abandon Cancellation',
  },
  // Modal dialog for saving signature position
  signatureConfirmModal: {
    warnInfo: 'Please place the customer signature first',
    title: 'Save Signing Position',
    noDealerStamp:
      'Dealer stamp position is not configured; the document will not have an online stamp.',
    noDealerStampTitle: 'Do you confirm not to configure the dealer stamp position?',
    save: 'Signing position has changed; confirm to save',
    confirm: 'Confirm Signature Position',
  },
  // Modal dialog for deleting an agreement
  deleteAgreementModal: {
    deleteChange: 'Delete Change Agreement',
    deleteAdditional: 'Delete Additional Agreement',
    content:
      'Since other documents are all in a signed and approved state, deleting this document will cause the order to be marked as signed.',
    changeAgreement: 'Replace Change Agreement',
    exchangeAdditional: 'Replace Additional Agreement',
    confirm: 'Confirm Deletion',
    tip: 'Hint',
    yes: 'Yes',
    deleteContent: 'Are you sure you want to delete?',
  },
  bindDMSModal: {
    okText: 'Yes',
    cancelText: 'No',
    inconsistent:
      'The BP has not been bound to a customer card in DMS yet, and a matching customer card has been found.',
    ifBind: ', would you like to proceed with the binding?',
    yesBind: 'Choosing "Yes" will bind the BP to the existing customer card;',
    notBind:
      'Choosing "No" will cancel the creation of this VSO. Please log in to DMS to check the customer card information and whether binding is necessary.',
  },
  colorChangeModal: {
    title: 'Vehicle Color Description Has Changed, Please Re-save the Master Contract',
    cancelText: 'Go Later',
    okText: 'Go to Master Contract',
    content:
      'The vehicle color description has been changed. Please go to the master contract editing page to confirm the updated description and re-save the master contract before initiating the signing process.',
  },
  confirmSignApproval: {
    title: 'Confirm Signing Approval Completion',
    manualSelect:
      'Please manually select the customer signing time and the approval effective time. Once confirmed, these times will be uneditable.',
    signTime: 'Customer Signing Time',
    validTime: 'Approval Effective Time',
  },
  telNoAuthModal: {
    title: 'The Phone Number Is Not Yet Certified',
    know: 'Understood',
    content:
      'This phone number has not been certified on the Legal Great Platform. Please prompt the customer to look out for the certification SMS. After certification, they can obtain the signing link.',
  },
  reAuthModal: {
    title: 'Resubmit Certification',
    okText: 'Re-Certify',
    content:
      'Customer information has changed. Click the "Re-Certify" button, and the system will generate a new certification link to send to the customer for real-name authentication.',
  },
  updateCustomerModal: {
    title: 'Modify ID Type',
    okText: 'Modify',
    currentId: 'Current Customer ID Type',
    editCertificate:
      'Cannot initiate electronic signing/approval workflow. Please go to the customer profile to modify the ID type to ',
    idPassport: 'ID Card, Passport, Hong Kong/Macau Travel Permit or Taiwan Compatriot Certificate',
    idCard: 'ID Card',
    retry: ' and retry.',
    is: 'is',
    perfectDoc: 'and complete the document information before retrying.',
  },
  offlineSignatureModal: {
    title: 'Operation Failed',
    okText: 'Initiate Offline Signing',
    noAuth:
      'The customer is either not certified or their certification information does not meet requirements, so the termination agreement’s electronic signing/approval process cannot be initiated. As customer information modified after placing an order cannot be updated to the order, please use ',
    offlineSignature: 'Offline Signing',
    completeSign: ' to complete the signing of the termination agreement.',
  },
  earlyBirdWarn: {
    unableUpload:
      'Online order has been refunded, and documents cannot be uploaded. Please withdraw the signing request and then cancel the order.',
  },
  noneChangeDealModal: {
    title: 'Missing Change-Type Agreement, Unable to Initiate Signing',
    content:
      'The pending signing documents currently lack a change-type agreement. Please add one first.',
    okText: 'Add Now',
    cancelText: 'Add Later',
  },
  downloadModal: {
    title: 'Tip',
    mergeDoc:
      'The following documents were merged during the e-signing initiation and will be downloaded as a single file.',
    okText: 'Understand and Download',
  },
  // Terminate/Cancel Order Modal
  terminateOrderCancelModal: {
    title: 'Confirm Termination of Cancellation',
    content:
      'Terminating the cancellation will delete the termination-type agreement, and the order will revert back to the "Signed" status.',
    successMsg: 'Termination of "Cancel Order" Operation Confirmed',
    okText: 'Confirm Termination',
    cancelText: 'Give Up Termination',
  },
  confirmCancelModal: {
    title: 'Confirm Order Cancellation',
    content:
      'After cancelling the order, all documents under this order will be voided and cannot be recovered. The vehicles related to the order will be released for resale.',
    okText: 'Confirm Cancellation',
    cancelText: 'Abandon Cancellation',
  },
  // Withdraw Approval Modal
  withdrawApprovalModal: {
    title: 'Withdraw Approval',
    subtitle:
      'If you proceed with withdrawing approval, the following documents will all revert back to the "Unapproved" status. Confirm whether to withdraw?',
    okText: 'Withdraw Approval',
    successMsg: 'Withdrawal of Approval Successful',
  },
  messageBox: {
    unableSign:
      'The template for this document lacks an e-signature configuration, making it impossible to initiate e-signing.',
    addTips:
      'This order has already been signed. If you need to add additional agreements, please click on the "..." More button at the top right corner to perform the "Add Additional Agreement" operation.',
    noInvalidSignedDoc: 'There are no signed documents that can be voided.',
    signTimeRequired: 'Customer signature time and approval effective time are required fields.',
    updateInfo: 'The information you modified has been updated in the contract documents.',
    driveLicense:
      '(Driver’s license cannot be used for subsequent operations; please use another form of identification)',
    useIdentity: '(Please use an ID card; otherwise, subsequent operations cannot be performed)',
    missInfo:
      'The customer is missing the following information, preventing the initiation of signing/approval processes. Please complete the information in the customer profile and try again.',
    bodyColor: 'Body Color:',
    roofColor: 'Roof Color:',
    innerColor: 'Interior Color:',
    updateTo: 'Update to',
    qrCode: 'QR Code',
    vsoOrderDeleteOk: 'VSO order number has been successfully deleted in the DMS system',
    newAuthLinkSendOk: 'A new authentication link has been successfully sent',
  },
  revokeApplyModal: {
    invalidDoc: 'Please select the document to invalidate',
    ifCancelApply: 'Confirm withdrawal of the signing application',
    okInvalid: 'Confirm Invalidation',
    okRevoke: 'Confirm Revocation',
    cancelText: 'Give Up',
    successMsg: 'Submission Successful',
    fileName: 'Document Pending Invalidation',
    contractStatus: 'Document Status',
    signName: 'Signatory',
    reBackStatus:
      'Upon confirmation, selected documents will be reverted to "Unsigned" or "Unapproved" status, allowing you to edit the contracts and restart the signing and approval process.',
    mergeSelect:
      'Reminder: Relevant merged sign documents have been automatically selected and will also be invalidated along with their signatures.',
    confirmWarn:
      'Confirming revocation will retract documents that are "Signing in Progress". If the client has already signed, the action cannot be undone.',
  },
  ruleBox: {
    support: 'Only supports',
    formatUpload: 'file format uploads',
    maxSizePer: 'per individual file size exceeds',
  },
};

export default NewCarOrderDetailPage;
