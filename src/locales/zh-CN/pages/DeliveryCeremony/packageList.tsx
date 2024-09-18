// 交车仪式-交车套餐列表页
const PackageListPage = {
  title: '交车套餐',
  titleTooltip:
    '交车套餐是客户在交车流程中，交车仪式的样式，创建并启用交车套餐后即可以在交车仪式邀请中可以选择对应交车套餐',
  createPackage: '创建交车套餐',
  create: '创建',
  edit: '编辑',
  view: '查看',

  filter: {
    keyword: '套餐名称/套餐编号',
    enableStatus: '启用状态',
    deliveryCeremonyType: '交车仪式类型',
    createBy: '创建人',
    createByPlaceholder: '请输入顾问姓名/英文名',
    dealer: '所属门店',
    createDate: '创建日期',
    approveStatuses: '审批状态',
  },

  table: {
    packageNo: '套餐编号',
    packageName: '套餐名称',
    packageImage: '缩略图',
    imagePreview: '图片预览',
    dealer: '所属门店',
    ceremonyType: '交车仪式类型',
    price: '价格',
    approveStatus: '审批状态',
    approveStatusTooltip: '审批状态为空‘-’，是指套餐由Admin创建，且未被CM修改过，因此无需审批。',
    updateTime: '更新时间',
    updateBy: '更新人',
    createTime: '创建时间',
    createBy: '创建人',
    enableStatus: '启用状态',
    enableStatusTooltip1: '开启后，新创建的交车仪式邀请可以选择该交车套餐；',
    enableStatusTooltip2:
      '关闭后，新创建的交车仪式邀请不可再选择该交车套餐，正在使用该交车套餐的邀请依然使有效。',
    operation: '操作',
    detail: '详情',
  },
};
export default PackageListPage;
