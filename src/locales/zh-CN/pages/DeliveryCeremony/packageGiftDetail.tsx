// 交车仪式-套餐礼物详情页
export const PackageGiftDetailPage = {
  packageGift: '套餐礼品',
  view: '查看',
  edit: '编辑',
  create: '创建',
  giftNo: '(编号: {{giftNo}})',
  enableStatus: '启用状态',
  enableStatusTooltip:
    '开启后，新创建的交车套餐时可以选择该套餐礼品，关闭后，新创建的套餐不可再选择该套餐礼品，正在使用该套餐礼品的套餐依然使有效。',
  deleteTooltip: '启用时不可删除，可关闭启用状态后删除',
  editTooltip: '启用时不可编辑，可关闭启用状态后编辑',
  subtitle:
    '套餐礼品是PCN角色创建的门店可以在客户参与交车仪式后收到的礼品，创建并启用套餐礼品后即可以在交车套餐中可以选择对应套餐礼品',
  basicInfo: '基础信息',
  giftName: '礼品名称',
  giftNameRequiredRule: '请输入礼品名称',
  giftImage: '礼品图',
  imageInfo: '最大支持20M，只上传一张，支持图片像素比例为1:1 ，JPG、JPEG、PNG 格式',
  giftImageRequiredRule: '请上传礼品图',
  imageWarning: '图片像素比例不对，比例要求是：{{resolutionRatio}}，请重新上传',
  searchLoading: '数据查询中，请稍后',
  uploading: '上传中，请稍后...',

  saveModal: {
    title: '确定保存套餐礼品？',
    content:
      '套餐礼品编辑保存后，已创建的套餐中该套餐礼品的信息不会更新。如需使用修改后的套餐礼品，请确认修改后启用该套餐礼品。',
    disableSuccess: '关闭成功',
    enableSuccess: '启用成功',
    createSuccess: '创建成功',
    updateSuccess: '编辑保存成功',
  },

  disableModal: {
    title: '确定关闭套餐礼品？',
    content: '关闭后，编辑交车套餐时，该套餐礼品不能被选中，请确认是否依然关闭。',
    okText: '关闭套餐礼品',
  },

  deleteModal: {
    title: '确定删除套餐礼品？',
    content: '删除后，该套餐礼品将不会被保存，请确认是否依然删除。',
    okText: '删除套餐礼品',
    deleteSuccess: '删除成功',
  },

  cancelModal: {
    title: '确定取消套餐礼品？',
    content: '取消后，您编辑的数据不会被保存，请确认是否依然取消。',
    okText: '取消套餐礼品',
  },
};

export default PackageGiftDetailPage;
