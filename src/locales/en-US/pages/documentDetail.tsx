/* eslint-disable max-len */
const DocumentDetailPage = {
  title: 'Document Details',
  loading: 'Loading data...',
  // Order Information
  orderInfo: {
    returnOrder: 'Return to Order',
    posOrderCode: 'POS Order Number',
    customerName: 'Customer Name',
    vin: 'Vehicle Identification Number (VIN)',
    firstFinishTime: 'Initial Completion Time of Order',
    bpId: 'BP-ID',
    commNo: 'PVMS Order Number',
    dmsOrderId: 'VSO Order ID',
    modelName: 'Model Name',
    orderCarType: 'Contract Type',
    saleConsult: 'Sales Consultant',
    statusText: 'Order Status',
    vehicleDeliveryDate: 'Vehicle Delivery Date',
    orderDetail: 'Order Details',
  },
  // Common Table Columns
  tableColumn: {
    fileName: 'Document Name',
    onlineView: 'Online Preview',
    historyVersion: 'Historical Versions',
    log: 'Operation Logs',
    download: 'Download',
    part: 'Parts',
    contractStatus: 'Document Status',
    documentCount: 'Number of Documents',
    ifArchived: 'Is Archived',
    archived: 'Archived',
    unArchived: 'Not Archived',
    canceled: 'Canceled',
    upload: 'Upload',
  },
  // Operating Record
  operatingRecord: {
    title: 'Operating History Records',
    operateTime: 'Time',
    operateUserName: 'Operator',
    operationType: 'Action',
    download: 'Download/Preview',
    share: 'Share with Customer',
    archive: 'Archive',
    cancel: 'Cancel',
    upload: 'Upload',
    detail: 'Details',
  },
  customerDocument: {
    title: 'Customer Documents',
  },
  contractDocument: {
    title: 'Contract Documents',
  },
  deliveryDocument: {
    title: 'Delivery Documents',
  },
  otherData: {
    title: 'Other Materials',
  },
  auditMaterial: {
    title: 'Documents and Audit Materials',
    subTitle: 'Upload sales audit-related materials',
  },
  footer: {
    selectedItem: '{{count}} item is selected',
    batchDownload: 'Batch Download',
    share: 'Share with Customer',
  },
  shareModal: {
    type: 'Sharing',
    title: 'Sharing Prompt',
    signContent:
      'The following documents have been merged when initiating the electronic signature, and thus will be shared together. Are you sure you want to share them with the customer',
    confirmContent: 'Sharing {{docs}} with phone number {{customerTel}}',
  },
};

export default DocumentDetailPage;
