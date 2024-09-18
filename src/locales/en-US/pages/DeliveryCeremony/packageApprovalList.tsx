// 交车仪式-交车套餐审批列表页

const PackageApprovalListPage = {
  title: 'Delivery Package Approval',
  titleTooltip:
    'Delivery Package Approval is for approving delivery packages submitted by CM for individual stores.',
  wait: 'Please wait',

  filter: {
    keyword: 'Approval No./Package No.',
    status: 'Approval Status',
    createBy: 'Created By',
    dealer: 'Dealer',
    dealerInputFilterPlaceholder: 'Enter dealer name',
    createDate: 'Creation Date',
  },

  table: {
    approvalNo: 'Approval No.',
    packageNo: 'Package No.',
    packageName: 'Package Name',
    approvalStatus: 'Approval Status',
    dealer: 'Dealer',
    thumbnail: 'Thumbnail',
    packageType: 'Delivery Ceremony Type',
    price: 'Price',
    updateTime: 'Update Time',
    updateBy: 'Updated By',
    createTime: 'Creation Time',
    createBy: 'Created By',
    operation: 'Operation',
    detail: 'Details',
  },
};

export default PackageApprovalListPage;
