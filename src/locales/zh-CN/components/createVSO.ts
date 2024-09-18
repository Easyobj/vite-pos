// 创建VSO按钮
const CreateVSO = {
  createButton: '创建VSO',
  creating: '创建中',
  failTitle: '无法创建VSO',
  goToModify: '去完善',
  orderCreateFail: '订单未创建成功, DMS绑定失败',
  syncSuccess: '您修改的信息已经更新到合同文档中',
  bindSuccess: '绑定DMS成功，请重新创建VSO',
  bindTitle: '是否绑定DMS客户卡片',
  yes: '是',
  no: '否',
  sameCustomer:
    '该BP尚未绑定DMS客户卡片，已在DMS内找到相同内容的客户卡片{{currentCardNo}}，请选择是否绑定？',
  justBind: '选择是，将绑定BP到现有客户卡片；',
  cancelBind: '选择否，将取消本次VSO的创建，另请登录DMS检查客户卡片信息，以及是否需要绑定。',
  createFailPrefix: 'VSO创建失败。DMS报错信息：',
  createInfo: '已请求DMS创建VSO，创建成功后会自动更新',
  duplicateInfo: '已请求DMS创建VSO，请稍后刷新页面或再次点击“创建VSO”获取创建结果',
  createSuccess: 'VSO创建成功',
};

export default CreateVSO;
