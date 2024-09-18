// 交车仪式-套餐礼物列表页
const PackageGiftListPage = {
  title: 'Package Gifts',
  titleTooltip:
    'Package Gifts are gifts that customers can receive after participating in the handover ceremony, created by PCN roles for stores. After creating and enabling a package gift, it can be selected in the handover package.',
  createGift: 'Create Gift',
  wait: 'Please wait',

  filter: {
    keyword: 'Gift Name / Gift Code',
    status: 'Status',
  },
  table: {
    giftNo: 'Gift No',
    giftName: 'Gift Name',
    giftImage: 'Gift Image',
    updateTime: 'Update Time',
    updateBy: 'Updated By',
    createTime: 'Creation Time',
    createBy: 'Created By',
    enableStatus: 'Enable Status',
    enableStatusTooltip:
      'When enabled, this gift can be selected for newly created handover packages. When disabled, new packages cannot select this gift, but existing packages associated with this gift will remain valid.',
    operation: 'Operation',
    detail: 'Details',
  },
};

export default PackageGiftListPage;
