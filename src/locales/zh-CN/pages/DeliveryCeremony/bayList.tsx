// 交车仪式-交车场地列表
const BayListPage = {
  title: '交车场地',
  titleTooltip:
    '交车场地管理可以帮助门店管理交车仪式场地资源，创建并启用交车仪式场地后即可以在交车套餐中可以选择关联对应的交车场地。场地支持由门店的角色来创建，也可以由PCN角色来帮助具体的门店创建。',
  createBay: '创建交车场地',
  loadingData: '数据加载中...',

  filter: {
    keyword: '交车场地名称/场地编号',
    dealer: '所属门店',
    dealerSearchPlaceholder: '查找门店',
    status: '状态',
    creator: '创建人',
    createDate: '创建日期',
    updateDate: '更新日期',
  },

  table: {
    bayNo: '场地编号',
    bayName: '交车场地名称',
    dealer: '所属门店',
    updateTime: '更新时间',
    updateBy: '更新人',
    createTime: '创建时间',
    createBy: '创建人',
    enableStatus: '启用状态',
    enableStatusTooltip:
      '开启后，新创建的套餐时可以选择该场地，关闭后，新创建的套餐不可再选择该场地，正在使用该场地且的套餐依然使有效',
    operation: '操作',
    detail: '详情',
  },
};

export default BayListPage;
