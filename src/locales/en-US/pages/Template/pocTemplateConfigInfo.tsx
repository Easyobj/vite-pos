const PocTemplateConfigInfo = {
  fileName: 'UsedCarContract_Template_Configuration_Supported_Signature_and_Prefill_Fields.xlsx',
  howConfig: 'How to Configure Used Car Templates',
  messages: {
    downloadMsg: 'Download Successful',
  },
  modal: {
    title: 'Configuration Instructions',
    customer: 'Customer Name',
    contactNumber: 'Contact Number',
    pleaseOpen: "Please open the Word format contract template that needs to be uploaded, and mark the blank fields where input is needed with {{defaultName}}, where XXXX is the name of the field, which can be customized according to the store's actual situation, for example: {{customerName}} or {{contactNumber}}.",
    fieldShow: 'Custom field names will be displayed on the template configuration interface in the admin backend and on the contract editing page in the sales consultant interface; after uploading the template, custom field formats and prefilled values can be set via the template configuration interface in the admin backend.',
    signatureConfig: 'To configure the signature for parties in the template, when setting up, choose “Information Source” as “System Prefilled Value” and directly select one of the eight signature types supported by the system from the dropdown list, such as: Used Car Contract Special Seal, Customer Signature/Seal, General Manager Signature, etc.',
    clickHere: 'Click here to download and view',
    systemSupport: 'Signature Fields and Prefilled Fields Supported by the System',
    point: ' .',
  },
  // t('TemplatePage:PocTemplateConfigInfo.modal.point')
};

export default PocTemplateConfigInfo;