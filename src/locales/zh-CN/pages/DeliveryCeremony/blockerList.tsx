// 交车仪式-场地资源管理列表页
const BlockerListPage = {
  title: '场地资源管理',
  titleTooltip:
    '场地资源管理列表中所管理的事件包括：已预定的交车仪式邀请所占用的场地时间及后台管理员（如CM专员）创建预定场地所占用的时间',
  createBlocker: '创建场地预定',
  blocker: '场地预定',
  create: '创建',
  edit: '编辑',
  view: '查看',
  allDay: '全天',

  filter: {
    events: '事件类型',
    bay: '交车场地',
    reserveDate: '场地预定日期',
    dealer: '所属门店',
    updateBy: '更新人',
    updateDate: '更新时间',
    reserver: '预定人',
    createDate: '创建时间',
  },

  table: {
    blockerNo: '预定场地编号',
    blockerType: '事件类型',
    title: '预定事件',
    description: '预约说明',
    bayName: '交车场地',
    blockerDate: '场地预定日期',
    blockerDateTooltip: '按照场地预定的起始日期排序',
    blockerStartTime: '场地预定时段',
    dealer: '所属门店',
    updateTime: '更新时间',
    updateBy: '更新人',
    createTime: '创建时间',
    createBy: '预定人',
    operation: '操作',
    blockerDetail: '场地预定详情',
    eventDetail: '邀请详情',
  },
};

export default BlockerListPage;
