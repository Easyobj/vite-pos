import { ReactElement } from "react";

const TemplateListPage = {
  pcnTitle: 'PCN Template Management',
  document: 'Document Template Management',
  uploadHistory: 'Upload History',
  unrealData: 'Pre-filled Unreal Data',
  downloading: 'Downloading, please wait...',
  config: 'Config',
  delFailModal: {
    title: 'Operation Failed',
    content: 'Enabled templates cannot be deleted. Please disable the template before deleting.',
    unableDelete: 'This template is issued by PCN and cannot be deleted.',
  },
  confirmDelModal: {
    title: 'Confirm Delete Template?',
    content: 'After deleting the template, contracts or agreements created using this template on the sales consultant end will not be affected. Sales consultants can still view or edit them. Confirm delete template?',
    coordinate: function (curNode: ReactElement): ReactElement {
      return (
        <>
          After deleting the template, you can still download it in {curNode}.
          Contracts or agreements created using this template on the sales consultant end will not be affected. Sales consultants can still view or edit them.
        </>
      );
    },
    history: '"Operation Record"',
  },
  column: {
    domain: 'Business Module',
    typeGroupId: 'Template Type',
    fileName: 'Template Name',
    templateSource: 'Source',
    createTime: 'Creation Time',
    operate: 'Operate',
    more: 'More',
    effectiveState: 'Effective State',
    statusTool: "During the effective period of the template, sales consultants can use the template for signing operations. After the template becomes ineffective, dealers cannot view or operate the template. During the effective period, you can manually turn off the enable switch. After turning it off, the template status will be updated to 'Inactive'.",
    inUse: 'In Use',
    viewConfiguration: 'View Configuration Effect',
    viewSignature: 'View Signature Configuration',
    viewType: 'View Fields & Signature Configuration',
    updateTemplate: 'Update Template Document',
    useCircumstance: 'Enable Conditions',
  },
  disableModal: {
    okText: 'Disable and Update',
    enableHit: 'Updating templates is not supported while enabled. Please disable the template before updating.',
    disableHint: 'After disabling the template, sales consultants will no longer be able to select this template to create contracts. Contracts already created using this template can still be viewed or edited.',
  },
  messages: {
    disableSuccess: 'Template Disabled Successfully',
    typeGroupIdPlaceholder: 'Search by Template Type',
  },
  pocSignatureModal: {
    keywordName: 'Field Name',
    keywordVariable: 'System Field Name',
    title: 'Signature Configuration',
    signDesc: '· This displays recognized system fields related to signatures;',
    omitDesc: '· If any signing parties or signing roles are missing, please check the system fields in the template;',
  }
  // t('TemplatePage:TemplateListPage.messages.disableSuccess')
};

export default TemplateListPage;