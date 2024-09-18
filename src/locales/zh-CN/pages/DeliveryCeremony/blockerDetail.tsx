// 交车仪式-场地资源管理详情页
const BlockerDetailPage = {
  blocker: '场地预定',
  blockerNo: '(编号：{{blockerNo}})',
  subtitle: '创建预约场地可以直接预定已启用的场地，预定后该时段的场地将不可被预定。',

  basicInfo: '基础信息',
  dealer: '所属门店',
  dealerRequiredRule: '请填写所属门店',
  bay: '交车场地',
  bayPlaceholder: '请输入场地名称/编号',
  bayRequiredRule: '请填写交车场地',
  isAllDay: '预约是否为全天',

  blockerDate: '预约日期',
  blockerDateRequiredRule: '请填写预约日期',
  blockerWarning: '选取日期的范围不能存在其他预订',

  blockerTime: '预定时间',
  blockerTimeRequiredRule: '请选择预定时间',
  blockerTimeWarning: '选取时间的范围不能存在其他预订',
  clear: '清空',

  eventTitle: '预约事件',
  eventTitleRequiredRule: '请填写预约事件',
  eventDescription: '预约说明',
  eventDescriptionTooltip: '预约场地的备注可以帮助顾问了解该预定的场地的原因',
  eventDescriptionRequiredRule: '请填写预约说明',

  cancelModal: {
    title: '确定取消场地预定？',
    content: '取消后，您编辑的数据不会被保存，请确定是否依然取消？',
    okText: '取消场地预定',
  },

  deleteModal: {
    title: '确定删除场地预定？',
    content: '删除后原有的交车场地预订将释放可用，请确定是否删除该预定。',
    deleteSuccess: '删除成功',
  },

  saveModal: {
    title: '确认保存场地预定？',
    content: '确认保存后，该场地将按照您预约的时间进行预定，期间不会被其他人占用。',
    okText: '确认保存',
    saveSuccess: '保存成功',
  },
};

export default BlockerDetailPage;
