// 交车仪式-套餐内容列表页
const PackageContentListPage = {
  title: '套餐内容',
  titleTooltip:
    '套餐内容是PCN角色创建的门店可以在客户参与交车仪式后收到的套餐内容，创建并启用套餐礼品后即可以在交车套餐中可以选择对应的套餐内容',
  createContent: '创建套餐内容',
  wait: '请稍后',

  filter: {
    keyword: '内容名称/内容编号',
    status: '状态',
    source: '资源',
  },
  table: {
    contentNo: '内容编号',
    contentName: '内容名称',
    contentImage: '套餐内容图',
    updateTime: '更新时间',
    source: '资源',
    updateBy: '更新人',
    createTime: '创建时间',
    createBy: '创建人',
    enableStatus: '启用状态',
    enableStatusTooltip:
      '开启后，新创建的交车套餐时可以选择该套餐内容，关闭后，新创建的套餐不可再选择该套餐内容，正在使用该套餐内容的套餐依然使有效。',
    operation: '操作',
    detail: '详情',
  },
};

export default PackageContentListPage;
