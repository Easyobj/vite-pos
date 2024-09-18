// PCN门店模板管理列表页

const AllDealerTemplatePage = {
  title: 'Store Template Management',
  totalLabel: 'Total Number of Templates:',
  useFilter: 'Please select filter criteria first',

  filter: {
    dealer: 'Store',
    dealerFilterPlaceholder: 'Search by store name',
    templateType: 'Template Type',
  },

  columns: {
    dealer: 'Store',
    templateType: 'Template Type',
    templateName: 'Template Name',
    source: 'Source',
    enableStatus: 'Enable Status',
    createTime: 'Creation Time',
    updateTime: 'Update Time',
    operation: 'Operation',
  },

  variableGroup: {
    title: 'Variable Group',
    variableLabel: 'Field Name',
    variableName: 'System Field Name',
    canEdit: 'Editable',
    variableType: 'Field Type',
    option: 'Option',
    unknownVariable: 'Unrecognized System Field',
    noVariable: 'No sign-related system fields recognized in the template',
    signConfig: 'Signing Config',
    info1: '· The displayed content here represents the recognized sign-related system fields;',
    info2:
      '· If there are missing signatories or signing roles, please check the system fields in the template;',
  },

  templateConfig: 'Template Config',

  operationHistory: {
    title: 'Operation Records',
    templateName: 'Template Name',
    createBy: 'Operator',
    type: 'Operation Type',
    createTime: 'Operation Time',
    operation: 'Operation',
    downloadTooltip: 'Click to download template',
    downloadSuccess: 'Template downloaded successfully',
    upload: 'Upload',
    update: 'Update',
    refresh: 'Refresh',
    delete: 'Delete',
    enable: 'Enable',
    disable: 'Disable',
  },

  watermark: 'Pre-filled non-real data',
};

export default AllDealerTemplatePage;
