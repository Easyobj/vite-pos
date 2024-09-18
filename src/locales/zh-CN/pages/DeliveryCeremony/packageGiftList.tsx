// 交车仪式-套餐礼物列表页
const PackageGiftListPage = {
  title: '套餐礼品',
  titleTooltip:
    '套餐礼品是PCN角色创建的门店可以在客户参与交车仪式后收到的礼品，创建并启用套餐礼品后即可以在交车套餐中可以选择对应套餐礼品',
  createGift: '创建套餐礼品',
  wait: '请稍后',

  filter: {
    keyword: '礼品名称/礼品编号',
    status: '状态',
  },
  table: {
    giftNo: '礼品编号',
    giftName: '礼品名称',
    giftImage: '礼品图',
    updateTime: '更新时间',
    updateBy: '更新人',
    createTime: '创建时间',
    createBy: '创建人',
    enableStatus: '启用状态',
    enableStatusTooltip:
      '开启后，新创建的交车套餐时可以选择该套餐礼品，关闭后，新创建的套餐不可再选择该套餐礼品，正在使用该套餐礼品的套餐依然使有效。',
    operation: '操作',
    detail: '详情',
  },
};

export default PackageGiftListPage;
