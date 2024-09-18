import { ReactElement } from "react"

const TemplateSwitch = {
  messages: {
    enable: 'Template Enabled Successfully',
    enableSuccess: 'Enabled Successfully',
    disableSuccess: 'Disabled Successfully',
  },
  checkWarnModal: {
    contractField: 'Your current template has unconfigured contract fields. Please complete the template configuration and try again.',
    signature: 'Your current template does not have a customer signature/seal location configured, and thus cannot be enabled. Please complete the configuration and try again.',
    okText: 'Go Configure',
  },
  templateConfirm: {
    enableTemplate: 'Enable Template',
    disableTemplate: 'Disable Template',
    createContract: 'After enabling the template, sales consultants can select this template in used car orders to create contracts or agreements.',
    disableEffect: 'After disabling the template, sales consultants will not be able to select this template in used car orders to create contracts or agreements. Contracts or agreements already created using this template will not be affected, and sales consultants can still view or edit them.',
    enable: 'Enable',
    disable: 'Disable',
  },
  disableModal: {
    title: 'Are You Sure to Disable the Template?',
    ineffective: '"Inactive"',
    revokeTemplate: (curNode: ReactElement): ReactElement => {
      return (
        <>
          After disabling the template, the template status will be updated to {curNode}, and sales consultants will not be able to select this template to create contracts or agreements. Contracts or agreements already created using this template will not be affected, and sales consultants can still view or edit them. Are you sure to disable the template?
        </>
      );
    },
  },
  handleSwitch: {
    toolTip: 'This template is issued by PCN and the enable switch cannot be adjusted.',
  },
  // t('TemplatePage:TemplateSwitch.handleSwitch.toolTip')
};

export default TemplateSwitch;