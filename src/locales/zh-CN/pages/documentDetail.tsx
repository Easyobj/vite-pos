const DocumentDetailPage = {
  title: '文档详情',
  loading: '数据加载中...',
  // 订单信息
  orderInfo: {
    returnOrder: '返回订单',
    posOrderCode: 'POS订单编号',
    customerName: '客户名称',
    vin: '车架号 (VIN)',
    firstFinishTime: '订单首次签单时间',
    bpId: 'BP-ID',
    commNo: 'PVMS订单号',
    dmsOrderId: 'VSO编号',
    modelName: '车型',
    orderCarType: '合同类型',
    saleConsult: '销售顾问',
    statusText: '订单状态',
    vehicleDeliveryDate: '交车时间',
    orderDetail: '订单详情',
  },
  // 通用table
  tableColumn: {
    fileName: '文档名称',
    onlineView: '在线预览',
    historyVersion: '历史版本',
    log: '操作记录',
    download: '下载',
    part: '份',
    contractStatus: '文档状态',
    documentCount: '文档数量',
    ifArchived: '是否归档',
    archived: '已归档',
    unArchived: '未归档',
    canceled: '已取消',
    upload: '上传',
  },
  // 操作记录
  operatingRecord: {
    title: '操作历史记录',
    operateTime: '时间',
    operateUserName: '操作人',
    operationType: '操作',
    download: '下载/预览',
    share: '分享',
    archive: '归档',
    cancel: '取消',
    upload: '上传',
    detail: '详情',
  },
  customerDocument: {
    title: '客户文档',
  },
  contractDocument: {
    title: '合同文档',
  },
  deliveryDocument: {
    title: '交车文档',
  },
  otherData: {
    title: '其他资料',
  },
  auditMaterial: {
    title: '文档及审计材料',
    subTitle: '上传销售审计相关的资料',
  },
  footer: {
    selectedItem: '已选中 {{count}} 项',
    batchDownload: '批量下载',
    share: '分享至客户',
  },
  shareModal: {
    type: '分享',
    title: '分享提示',
    signContent: '以下文档在发起电子签署时已被合并，因此将会一起分享。 是否确认要分享给客户',
    confirmContent: '正在将   {{docs}}  分享给手机号 {{customerTel}}　',
  },
};

export default DocumentDetailPage;
