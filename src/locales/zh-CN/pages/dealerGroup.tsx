const DealerGroupPage = {
  addGroupInfo: '添加集团',
  editGroupInfo: '修改集团',
  columns: {
    partnerNo: 'Partner No.',
    status: '集团状态',
    companyName: '集团全称',
    displayName: '集团展示名称',
    dealerCount: '门店数量',
    updateBy: '更新人',
    updateTime: '更新时间',
    actions: '操作',
  },
  placeholder: {
    queryKeyword: '集团展示名称/Partner No.',
  },
  message: {
    errorPartnerNo: '小于等于100位',
    syncedToAssociatedDealers: '已同步到所关联的经销商门店中',
  },
  status: {
    all: '全部',
    inUse: '使用中',
    closed: '已关闭',
  },
  totalDealerCount: '共 {{text}} 家',
};

export default DealerGroupPage;
