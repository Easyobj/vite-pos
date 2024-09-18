// 交车仪式-交车场地列表
const BayListPage = {
  title: 'Bay List',
  titleTooltip:
    'Bay List management can help stores manage the resources of handover ceremony locations. After creating and enabling a handover ceremony location, it can be selected and associated with corresponding handover packages. The creation of locations can be done by store roles or PCN roles to assist specific stores.',
  createBay: 'Create Bay',
  loadingData: 'Loading data...',

  filter: {
    keyword: 'Bay Name / Location Code',
    dealer: 'Dealer',
    dealerSearchPlaceholder: 'Search Dealers',
    status: 'Status',
    creator: 'Creator',
    createDate: 'Creation Date',
    updateDate: 'Update Date',
  },

  table: {
    bayNo: 'Bay No',
    bayName: 'Bay Name',
    dealer: 'Dealer',
    updateTime: 'Update Time',
    updateBy: 'Updated By',
    createTime: 'Creation Time',
    createBy: 'Created By',
    enableStatus: 'Enable Status',
    enableStatusTooltip:
      'When enabled, this location can be selected for newly created packages. When disabled, this location cannot be selected for newly created packages, but existing packages associated with this location will remain valid.',
    operation: 'Operation',
    detail: 'Details',
  },
};

export default BayListPage;
