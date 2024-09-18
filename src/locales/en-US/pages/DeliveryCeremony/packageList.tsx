// 交车仪式-交车套餐列表页
const PackageListPage = {
  title: 'Delivery Packages',
  titleTooltip:
    'Delivery packages are styles of delivery ceremonies that customers can choose during the vehicle delivery process. Once created and enabled, these packages can be selected in the invitation for the delivery ceremony.',
  createPackage: 'Create Delivery Package',
  create: 'Create ',
  edit: 'Edit ',
  view: 'View ',

  filter: {
    keyword: 'Package Name/Package Number',
    enableStatus: 'Enable Status',
    deliveryCeremonyType: 'Delivery Ceremony Type',
    createBy: 'Created By',
    createByPlaceholder: 'Please enter advisor name/English name',
    dealer: 'Dealer',
    createDate: 'Creation Date',
    approveStatuses: 'Approval Statuses',
  },

  table: {
    packageNo: 'Package Number',
    packageName: 'Package Name',
    packageImage: 'Thumbnail',
    imagePreview: 'Image Preview',
    dealer: 'Dealer',
    ceremonyType: 'Ceremony Type',
    price: 'Price',
    approveStatus: 'Approval Status',
    approveStatusTooltip:
      'If the approval status is empty "-", it means the package was created by Admin and has not been modified by CM, so no approval is required.',
    updateTime: 'Update Time',
    updateBy: 'Updated By',
    createTime: 'Creation Time',
    createBy: 'Created By',
    enableStatus: 'Enable Status',
    enableStatusTooltip1:
      'When enabled, the newly created delivery ceremony invitations can select this delivery package.',
    enableStatusTooltip2:
      'When disabled, the newly created delivery ceremony invitations cannot select this delivery package. However, existing invitations using this package will still remain valid.',
    operation: 'Operation',
    detail: 'Details',
  },
};
export default PackageListPage;
