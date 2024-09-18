// 交车仪式-套餐内容列表页
const PackageItemListPage = {
  title: 'Package Contents',
  titleTooltip:
    'Package Contents are the contents that customers can receive after participating in the handover ceremony, created by PCN roles for stores. After creating and enabling a package content, it can be selected in the handover package.',
  createContent: 'Create Content',
  wait: 'Please wait',

  filter: {
    keyword: 'Content Name / Content Code',
    status: 'Status',
    source: 'Source',
  },
  table: {
    contentNo: 'Content No',
    contentName: 'Content Name',
    contentImage: 'Content Image',
    updateTime: 'Update Time',
    source: 'Source',
    updateBy: 'Updated By',
    createTime: 'Creation Time',
    createBy: 'Created By',
    enableStatus: 'Enable Status',
    enableStatusTooltip:
      'When enabled, this content can be selected for newly created handover packages. When disabled, new packages cannot select this content, but existing packages associated with this content will remain valid.',
    operation: 'Operation',
    detail: 'Details',
  },
};

export default PackageItemListPage;
