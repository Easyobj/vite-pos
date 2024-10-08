import { ReactElement } from 'react';

// 新车订单列表页
const NewCarOrderListPage = {
  title: '我的订单',
  consultantPlaceholder:
    '搜索BP-ID、商机编码、客户名称、公司名称、车型名称、订单编号、PVMS订单号、VSO编号',
  orderNo: '订单号',
  otherHistoryOrder: '其他历史订单',
  changed: '变更',
  redeemed: '已核销券',
  customerName: '客户姓名(BP-ID)',
  company: '公司',
  lead: '商机编码',
  mobile: '联系电话',
  model: '车型',
  modelAndPVMS: '车型 (PVMS车辆状态)',
  pvmsCarStatus: 'PVMS车辆状态',
  pvmsOrderNo: 'PVMS订单号',
  pvmsOrderStatus: 'PVMS订单状态',
  orderStatus: '订单状态',
  discountPrice: '车辆折后价',
  saleTotalPrice: '预估销售总价',
  dealer: '所属门店',
  operation: '操作',
  detail: '详情',
  document: '文档',
  delivery: '交车',
  contractType: '合同类型',
  vin: '车架号',
  dmsOrderId: 'VSO编号',
  quotaMonth: '配额月份',
  estimateArrivalShop: '预计到店',
  estimateArrivalShopDate: '预计到店日期',
  paymentDueDate: '采购付款期限',
  firstFinishTime: '首次签单时间',
  lastFinishTime: '最近签单时间',
  coupon: '优惠券',
  estimateArrivalPortDate: '预期到港日期(ETA)',
  saleConsultant: '销售顾问',
  deliveryDate: '交车日期',
  invoiceDate: '开票日期',
  orderCreateDate: '订单创建日期',
  emptyData: '暂无数据',
  clear: '清空',
  filterResult: (total: ReactElement): ReactElement => <span>为您找到{total}个匹配结果</span>,
  close: '关闭',
  viewResult: '查看结果',
  selectAll: '全选',
  empty: '(空白)',
  startMonth: '开始月份',
  endMonth: '结束月份',
  startDate: '开始日期',
  endDate: '结束日期',
};

export default NewCarOrderListPage;
