import { ReactElement } from "react";

const TemplateListPage = {
  pcnTitle: 'PCN模板管理',
  document: '文档模板管理',
  uploadHistory: '历史上传记录',
  unrealData: '预填的非真实数据',
  downloading: '下载中，请稍后...',
  config: '配置',
  delFailModal: {
    title: '操作失败',
    content: '已启用的模板不支持删除，请先禁用模板后删除。',
    unableDelete: '该模板为PCN下发，无法删除。',
  },
  confirmDelModal: {
    title: '确定删除模板？',
    content: '删除模板后，销售顾问端已使用该模板创建的合同或协议不受影响，销售顾问仍可以查看或编辑。确定删除模板？',
    coordinate: (curNode: ReactElement): ReactElement => (
      <>
        删除模板后，您还可以在{curNode}中下载该模板。
        销售顾问端已使用该模板创建的合同或协议不受影响，销售顾问仍可以查看或编辑。
      </>
    ),
    history: '“操作记录”',
  },
  column: {
    domain: '业务模块',
    typeGroupId: '模板类型',
    fileName: '模板名称',
    templateSource: '来源',
    createTime: '创建时间',
    operate: '操作',
    more: '更多',
    effectiveState: '生效状态',
    statusTool: "模板生效期间，销售顾问可使用该模板进行签署操作；模板失效后，经销商无法查看和操作模板。生效期间您可手动关闭启用开关，关闭后模板状态将更新为“未生效”",
    inUse: '启用',
    viewConfiguration: '查看配置效果',
    viewSignature: '查看签章配置',
    viewType: '查看字段&签章配置',
    updateTemplate: '更新模板文档',
    useCircumstance: '启用条件',
  },
  disableModal: {
    okText: '禁用并更新',
    enableHit: '启用状态下不支持更新模板，请先禁用模板后再更新模板。',
    disableHint: '禁用模板后，销售顾问将无法选择该模板创建合同。已使用该模板创建的合同仍可查看或编辑。',
  },
  messages: {
    disableSuccess: '模板禁用成功',
    typeGroupIdPlaceholder: '按模板类型搜索',
  },
  pocSignatureModal: {
    keywordName: '字段名',
    keywordVariable: '系统字段名',
    title: '签署配置',
    signDesc: '· 此处展示的内容为已识别的签署相关系统字段；',
    omitDesc: '· 如有遗漏的签署方及签署角色，请检查模板中的系统字段；',
  },
  // t('TemplatePage:TemplateListPage.pocSignatureModal.keywordName')
};

export default TemplateListPage;