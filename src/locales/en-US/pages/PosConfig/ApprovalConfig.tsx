const ApprovalConfig = {
  newCarTab: 'New Car',
  pocTab: 'Used Car',
  recipientTitle: 'Set Process Recipient',
  recipientDesc:
    'Selected roles do not participate in approval and will receive email notifications after the process is approved.',
  removeTitle: 'Delete Approval Process Prompt',
  removeContent:
    'Confirming will delete all approval roles configured in this round, and it cannot be restored after deletion. Please proceed with caution.',
  saveSuccess: 'Approval configuration saved',
  configApprovalRoles: 'Configure Approval Roles',
  configDescription:
    'In the following configuration, you can add approval rounds horizontally and forwarding personnel vertically. Up to six rounds of approval can be configured, with up to six roles in each round.',
  configDetail:
    'The first role configured in each approval round will definitely receive the content to be approved, while the second to sixth approval roles will only receive the content to be approved if the previous role selects "forward".',
  configEnsure:
    'To ensure that the approval can be initiated normally, please configure at least the first round of approval roles.',
  roleSelectRequire: 'Please select the approval role configuration',
  addRole: 'Add Roles',
  addLoop: 'Add Next Round',
  approvalConfig: 'Approval Function Settings',
  reserveConfig: 'Reservation Function Settings',
  autoApproval: 'Automatic Approval',
  openSalesApproval: 'Enable Sales Application Approval',
  autoApprovalDesc:
    'When this switch is turned on, the process will be automatically approved by the system',
  discountValidDuration: 'Valid Duration of Approved Discount',
  vehicleHoldDuration: 'Vehicle Hold Duration',
  discountApprovalTips:
    'Setting the duration of the discount to be valid after the discount approval is passed to 0 means it is permanently valid',
  holdApprovalTips: 'The duration the vehicle is locked after the hold approval is passed',
  modifyApprovalTitle: 'Submit Quotation Modification for Approval at Order Stage',
  modifyApprovalDesc:
    'When this switch is turned on, if the customer name, customer type, vehicle, price, and quotation options in the quotation sheet are modified during the order process or order change state, the quotation sheet needs to be submitted for discount application',
};

export default ApprovalConfig;
