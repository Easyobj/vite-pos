// PCN文档模板管理-启用条件页

import { ReactElement } from 'react';

const TemplateEnableConfigPage = {
  header: {
    viewTitle: 'Enable Conditions',
    editTitle: 'Set Enable Conditions',
    validLabel: 'Template Validity Status: ',
    validStatusTooltip:
      'During the template validity period, dealers can use this template for signing operations. After the template expires, dealers will not be able to view or operate the template. You can manually disable the enable switch during the validity period, and the template status will be updated to "Not Valid" when disabled.',
    enableLabel: 'Enable Switch',
  },

  basicInfo: {
    title: 'Basic Conditions',
    dealer: 'Using Dealership',
    dealerRequired: 'Please select a dealership',
    dealerPlaceholder: 'Please click to select the supported dealership for this template',
    selectTitle: 'Select Dealership',
    selectAll: 'Select All',
    groupName: 'Group Name',
    dealerCode: 'Dealer code/Dealership Name',
    filterByGroupName: 'Filter by Group Name',
    filterByDealerCode: 'Filter by Dealer code/Dealership Name',

    signRule: 'Signing Rule',
    signRuleRequired: 'Please select a signing rule',
    dateTimeType: 'Template Effective Node',
    dateTimeTypeRequired: 'Please select a template effective node',
    dateTimeTypeTooltip:
      'At this node, the consultant needs to edit the template and complete the signing process',
    openTimeLabel: 'Effective Time',
    openTimeTooltip:
      'After the template becomes effective, the enable switch will automatically turn on, and the template status will be updated to "Valid"',
    closeTimeLabel: 'Expiration Time',
    closeTimeTooltip:
      'After the template expires, the enable switch will automatically turn off, and the template status will be updated to "Not Valid"',
    timeConflict: 'The expiration time must be later than the effective time',
  },

  customInfo: {
    title: 'Custom Conditions',
    importing: 'Importing...',
    modelCodeRequired: 'Please import Model Code & Year',
    downloadSuccess: 'Download successful',
    importSuccess: 'Import successful',
    import: 'Import',
    reImport: 'Re-import',
    viewResult: 'View Import Details',
    importFile: 'Import File',
    uploadFile: 'Upload File',
    reUpload: 'Re-upload',
    downloadStep:
      '1. After downloading the template, please complete the table content according to the requirements in the template.',
    downloadExcel: 'Download empty template spreadsheet',
    importStep: '2. Upload the completed template.',
    importResult: 'Import Details',
    acceptWarning: 'Only {{acceptSuffix}} file format is supported for upload',
    sizeWarning: 'The file {{fileName}} exceeds the size limit of {{maxSize}}',
  },

  enableModal: {
    betweenInfo:
      'The current template is scheduled to be enabled between {{openDate}} {{openTime}} and {{closeDate}} {{closeTime}},',
    beforeInfo: 'The current template is scheduled to be enabled after {{openDate}} {{openTime}},',
    afterInfo:
      'The current template is scheduled to be enabled before {{closeDate}} {{closeTime}},',
    title: 'Reminder',
    content:
      'To enable the template immediately, please go to the editing page and clear the effective/expiration time and try again.',
    enableSuccess: 'Enabled successfully',
  },

  disableModal: {
    title: 'Are you sure to disable the template?',
    content: (className: string): ReactElement => (
      <>
        After disabling the template, the template status will be updated to{' '}
        <span className={className}>"Not Effective"</span>, and sales advisors will not be able to
        select this template to create contracts or agreements. Contracts or agreements created
        using this template will not be affected and sales advisors can still view or edit them. Are
        you sure to disable the template?
      </>
    ),
    okText: 'Disable',
    disableSuccess: 'Disabled successfully',
  },

  cancelModal: {
    title: 'Are you sure to cancel the editing?',
    content:
      'The edited content has not been saved yet, and cancelling will discard the changes you made. Are you sure to cancel the editing?',
    okText: 'Cancel editing',
  },

  editModal: {
    title: 'Note',
    content:
      'The current template is in an enabled state and does not support editing of enable conditions. Please disable the template first and try again. After disabling the template, sales advisors will not be able to select this template to continue creating contracts. Contracts created using this template will not be affected and can still be viewed or edited.',
    okText: 'Disable and Edit',
  },

  saveSuccess: 'Save Successful',
};

export default TemplateEnableConfigPage;
