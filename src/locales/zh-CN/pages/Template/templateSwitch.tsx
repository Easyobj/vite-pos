import { ReactElement } from "react"

const TemplateSwitch = {
  messages: {
    enable: '模板启用成功',
    enableSuccess: '启用成功',
    disableSuccess: '禁用成功',
  },
  checkWarnModal: {
    contractField: '您当前模板有未配置的合同字段，请完成模板配置后重试。',
    signature: '您当前模板未配置客户签名/签章位置，无法启用。请完成配置后重试。',
    okText: '去配置',
  },
  templateConfirm: {
    enableTemplate: '启用模板',
    disableTemplate: '禁用模板',
    createContract: '启用模板后，销售顾问即可在易手车订单中选择该模板来创建合同或协议。',
    disableEffect: '禁用模板后，销售顾问将无法在易手车订单中选择到该模板来创建合同或协议。已使用该模板创建的合同或协议不受影响，销售顾问仍可以查看或编辑。',
    enable: '启用',
    disable: '禁用',
  },
  disableModal: {
    title: '确定禁用模板？',
    ineffective: '“未生效”',
    revokeTemplate: (curNode: ReactElement): ReactElement => (
      <>
        禁用模板后，模板状态将更新为{curNode}，同时销售顾问将无法选择到该模板来创建合同或协议。已使用该模板创建的合同或协议不受影响，销售顾问仍可以查看或编辑。确定禁用模板？
      </>
    )
  },
  handleSwitch: {
    toolTip: '该模板为PCN下发，无法调整启用开关',
  }
  // t('TemplatePage:TemplateSwitch.messages.enable')
};

export default TemplateSwitch;