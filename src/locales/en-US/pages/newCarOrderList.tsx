import { ReactElement } from 'react';

// 新车订单列表页
const NewCarOrderListPage = {
  title: 'My Order',
  list: 'Order List',
  consultantPlaceholder:
    'Search by BP-ID, Lead Code, Customer Name, Company Name, Model Name, Order Number, PVMS Order Number, VSO Number',
  orderNo: 'Order Number',
  otherHistoryOrder: 'Other Historical Orders',
  changed: 'Changed',
  redeemed: 'Redeemed Coupons',
  customerName: 'Customer Name (BP-ID)',
  company: 'Company',
  lead: 'Lead Code',
  mobile: 'Contact Number',
  model: 'Model',
  modelAndPVMS: 'Model (PVMS Vehicle Status)',
  pvmsCarStatus: 'PVMS Vehicle Status',
  pvmsOrderNo: 'PVMS Order Number',
  pvmsOrderStatus: 'PVMS Order Status',
  orderStatus: 'Order Status',
  discountPrice: 'Vehicle Discounted Price',
  saleTotalPrice: 'Estimated Sales Total Price',
  dealer: 'Dealer Store',
  operation: 'Operation',
  detail: 'Details',
  document: 'Documents',
  delivery: 'Delivery',
  contractType: 'Contract Type',
  vin: 'VIN',
  dmsOrderId: 'VSO Number',
  quotaMonth: 'Quota Month',
  estimateArrivalShop: 'Estimated Arrival Shop',
  estimateArrivalShopDate: 'Estimated Arrival Shop Date',
  paymentDueDate: 'Payment Due Date',
  firstFinishTime: 'First Finish Time',
  lastFinishTime: 'Last Finish Time',
  coupon: 'Coupon',
  estimateArrivalPortDate: 'Estimated Port Arrival Date (ETA)',
  saleConsultant: 'Sales Consultant',
  deliveryDate: 'Delivery Date',
  invoiceDate: 'Invoice Date',
  orderCreateDate: 'Order Creation Date',
  emptyData: 'No Data Available',
  clear: 'Clear',
  filterResult: (total: ReactElement): ReactElement => <span>Found {total} matching results</span>,
  close: 'Close',
  viewResult: 'View result',
  selectAll: 'Select all',
  empty: '(Empty)',
  startMonth: 'Start month',
  endMonth: 'End month',
  startDate: 'Start date',
  endDate: 'End date',
};

export default NewCarOrderListPage;
