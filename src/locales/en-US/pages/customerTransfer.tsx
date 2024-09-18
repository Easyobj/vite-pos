const CustomerTransferPage = {
  columns: {
    id: 'Serial Number',
    sourceUserId: 'Source Sales Advisor',
    targetUserId: 'Target Sales Advisor',
    transferBusinessType: 'Transfer Business Type',
    comment: 'Comments',
    status: 'Result',
    createBy: 'Operator',
    createTime: 'Operation Time',
    actions: 'Actions',
    transferBpId: {
      label: 'Customer BP-ID to Transfer',
      options: {
        part: 'Transfer Part of Customers',
        all: 'Transfer All Customers',
      },
    },
  },
  placeholder: {
    all: 'All',
    name: 'Please enter a name',
    bpIds:
      'Please separate multiple BP-IDs with a newline. Enter in the format:\n6457653343\n6457653322\n6457653320\n6457653317\n6457653310\n6457653399\n6457653309',
  },
  message: {
    emptyBpIds: 'Please fill in BPID, empty values are not supported',
    errorBpIds: 'Please enter a valid BPID format',
  },
  confirmTransferText: 'Confirm and Transfer',
  transferBusinessTypeToolTip: {
    all: 'Includes new car quotes, orders, and delivery data, as well as used car orders (including sales applications and deliveries) under the source sales advisor',
    newCar: 'Includes new car quotes, orders, and delivery data under the source sales advisor',
    usedCar:
      'Includes used car orders (including sales applications and deliveries) under the source sales advisor',
  },
  ceateTransferTypeTooltip:
    'Transfer the relevant customer BPIDs to the new advisor in P; current business document transfer supports: new car (quotes, orders, deliveries); used car (orders, including sales applications and deliveries).',
  transferTypeTooltip:
    'Current business document transfer supports:\nNew car (quotes, orders, deliveries)\nUsed car (orders, including sales applications and deliveries)',
  viewDetails: 'View',
  permissionWarn:
    'You do not currently have permission to query C@P, so the business document transfer function cannot be completed',

  copyBpIdsSuccess: 'BPID copied successfully',
  copyFailedBpIds: 'Copy transfer failed BP',

  remindModal: {
    title: 'Reminder',
    content:
      'In POS, the business data of the following BPIDs already exists under the target advisor. This transfer will skip the existing BPIDs',
  },
  transferModal: {
    title: 'Customer Business Document Transfer in Progress',
    content:
      'Business document transfer processing takes some time. Please check the transfer results in the list later.',
    okText: 'Got it',
    successMsg:
      'Customer business document transfer in progress, please refresh the list page later to check the transfer results.',
  },
  transferRecordColumns: {
    id: 'Serial Number',
    bpId: 'BP-ID',
    transferBusiness: 'Transfer Business Type',
    status: 'Result',
    errorReason: 'Result Explanation',
  },
};

export default CustomerTransferPage;
