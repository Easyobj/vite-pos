// 交车仪式-交车场地详情页
const BayDetailPage = {
  bay: '交车场地',
  create: '创建',
  view: '查看',
  edit: '编辑',
  noLabel: '编号: ',
  enableStatus: '启用状态',
  enableStatusTooltip:
    '开启后，新创建的套餐时可以选择该场地，关闭后，新创建的套餐不可再选择该场地，正在使用该场地的套餐依然使有效。',
  deleteTooltip: '启用时不可删除，可关闭启用状态后删除',
  editTooltip: '启用时不可编辑，可关闭启用状态后编辑',
  subtitle:
    '交车场地管理可以帮助门店管理交车仪式场地资源，创建并启用交车仪式场地后即可以在交车套餐中可以选择关联对应的交车场地。场地支持由门店的角色来创建，也可以由PCN角色来帮助具体的门店创建。',

  basicTitle: '基础信息',
  bayName: '场地名称',
  BayNameRequired: '请输入场地名称',
  dealer: '所属门店',
  dealerSearchPlaceholder: '查找门店',
  dealerRequired: '请选择门店',

  reserveTitle: '可预定时间',
  weekdayAm: '工作日上午可用时间',
  weekdayPm: '工作日下午可用时间',
  saturdayAm: '星期六上午可用时间',
  saturdayPm: '星期六下午可用时间',
  sundayAm: '星期天上午可用时间',
  sundayPm: '星期天下午可用时间',
  selectStartTime: '请选择预定时间',
  selectEndTime: '请选择结束时间',
  enableSuccess: '启用成功',
  disableSuccess: '关闭成功',

  saveModal: {
    title: '确定保存交车场地？',
    content:
      '交车场地保存后，已创建的套餐中的交车场地信息不会更新。如需使用修改后的交车场地，请确认修改后启用该场地。',
    createSuccess: '创建成功',
    updateSuccess: '编辑保存成功',
  },

  closeModal: {
    title: '确定关闭交车场地？',
    content: '关闭后，创建/编辑交车场地时，该交车场地不能被选中，请确认是否依然关闭。',
  },

  deleteModal: {
    title: '确定删除交车场地？',
    content: '删除后，该交车场地将不会被保存，请确认是否依然删除。',
    deleteSuccess: '删除成功',
  },

  cancelModal: {
    title: '确定取消交车场地',
    content: '取消后，您编辑的数据不会被保存，请确认是否依然取消',
    okText: '取消交车场地',
    cancelText: '放弃',
  },
};

export default BayDetailPage;
