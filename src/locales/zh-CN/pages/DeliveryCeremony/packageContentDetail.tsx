// 交车仪式-套餐内容详情页
export const PackageContentDetailPage = {
  packageContent: '套餐内容',
  view: '查看',
  edit: '编辑',
  create: '创建',
  contentNo: '(编号: {{contentNo}})',
  enableStatus: '启用状态',
  enableStatusTooltip:
    '开启后，新创建的交车套餐时可以选择该套餐内容，关闭后，新创建的套餐不可再选择该套餐内容，正在使用该套餐内容的套餐依然使有效。',
  deleteTooltip: '启用时不可删除，可关闭启用状态后删除',
  editTooltip: '启用时不可编辑，可关闭启用状态后编辑',
  subtitle:
    '套餐内容是PCN角色创建的门店可以在客户参与交车仪式后收到的套餐内容，创建并启用套餐礼品后即可以在交车套餐中可以选择对应的套餐内容',
  basicInfo: '基础信息',
  contentName: '内容名称',
  contentNameRequiredRule: '请输入内容名称',
  source: '资源',
  sourceRequiredRule: '请选择资源',
  contentImage: '内容图',
  imageInfo: '最大支持20M，只上传一张，支持图片像素比例为1:1 ，JPG、JPEG、PNG格式',
  contentImageRequiredRule: '请上传内容图',
  imageWarning: '图片像素比例不对，比例要求是：{{resolutionRatio}}，请重新上传',
  searchLoading: '数据查询中，请稍后',
  uploading: '上传中，请稍后...',

  saveModal: {
    title: '确定保存套餐内容？',
    content:
      '套餐内容编辑保存后，已创建的套餐中该套餐内容的信息不会更新。如需使用修改后的套餐内容，请确认修改后启用该套餐内容。',
    disableSuccess: '关闭成功',
    enableSuccess: '启用成功',
    createSuccess: '创建成功',
    updateSuccess: '编辑保存成功',
  },

  disableModal: {
    title: '确定关闭套餐内容？',
    content: '关闭后，编辑交车套餐时，该套餐内容不能被选中，请确认是否依然关闭。',
    okText: '关闭套餐内容',
  },

  deleteModal: {
    title: '确定删除套餐内容？',
    content: '删除后，该套餐内容将不会被保存，请确认是否依然删除。',
    okText: '删除套餐内容',
    deleteSuccess: '删除成功',
  },

  cancelModal: {
    title: '确定取消套餐内容？',
    content: '取消后，您编辑的数据不会被保存，请确认是否依然取消。',
    okText: '取消套餐内容',
  },
};

export default PackageContentDetailPage;
