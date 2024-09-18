// 交车仪式-交车套餐审批列表页

const PackageApprovalListPage = {
  title: '交车套餐审批',
  titleTooltip: '交车套餐审批为CM提交上来单个门店的需要审批的交车套餐。',
  wait: '请稍后',

  filter: {
    keyword: '审批单号/套餐编号',
    status: '审批状态',
    createBy: '创建人',
    dealer: '所属门店',
    dealerInputFilterPlaceholder: '请输入门店名称',
    createDate: '创建日期',
  },

  table: {
    approvalNo: '审批单号',
    packageNo: '套餐编号',
    packageName: '套餐名称',
    approvalStatus: '审批状态',
    dealer: '所属门店',
    thumbnail: '缩略图',
    packageType: '交车仪式类型',
    price: '价格',
    updateTime: '更新时间',
    updateBy: '更新人',
    createTime: '创建时间',
    createBy: '创建人',
    operation: '操作',
    detail: '详情',
  },
};

export default PackageApprovalListPage;
