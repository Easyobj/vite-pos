const DccDialog = {
  stepOne: '步骤一：选择配置方式',
  newConfig: '新建配置',
  importPorsche: '导入保时捷代码，打开已有配置',
  enterPorsche: '请输入保时捷代码',

  stepTwo: '步骤二：选择客户BP-ID并关联商机',
  importBpId: '导入BP-ID',
  linkLead: '关联商机',
  noBpId: '无BP-ID',
  enterBpIdOrNameOrPhone: '请输入客户BP-ID/姓/名/手机号码',
  selectLead: '选择商机',
  noLead: '暂无商机',
  createLead: '创建商机',

  Modal: {
    title: '新建车辆配置',
    okText: '创建',
  },

  Tips: {
    createLeadSuccess: '商机创建成功',
    importBpIdSuccess: 'BP-ID导入成功！',
    needImportBpId: '请先导入BP-ID',
  },

  QuotationModal: {
    title: '车辆配置已完成，是否发起报价？',
    content: '如果选择关闭或取消将无法保存当前车辆配置信息。',
    modifyConfigText: '修改配置',
  },

  ErrorMsg: {
    invalidBpId: '客户ID信息无效，请刷新页面后重试',
  },

  PorscheCodeRecommendModal: {
    text: '加入推荐配置',
    successTip: '推荐配置成功',
  },
};

export default DccDialog;
