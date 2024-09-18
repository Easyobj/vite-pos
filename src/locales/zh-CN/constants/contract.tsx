export const ORDER_STATUS_T = {
  PROCESSING: '进行中',
  FINISHED: '已签单',
  CHANGING: '变更中',
  CANCELING: '取消中',
  CANCELED: '已取消',
};

export const VSO_WARN_TIPS_TEXT_T = '检测到当前订单未创建VSO。';

export const DOCUMENT_NEW_STATUS_COLORS_T = {
  UN_SIGN: '未签署',
  SIGNING: '签署中',
  SIGNED: '已签署',
};

export const DOCUMENT_STATUS_COLORS_T = {
  UNAPPROVED: '未审批',
  STAY_APPROVAL: '审批中',
  APPROVED: '已审批',
  EFFECTIVE: '已生效',
  INVALIDATED: '已作废',
  IN_EFFECT: '生效中',
};

export const SIGN_TYPE_TAG_T = {
  ONLINE: '电子签',
  OFFLINE: '线下签',
};

// 物流信息
export const LOGISTICS_COLUMNS_T = {
  quotaMonth: '配额月份',
  frozenDate: '订单变更冻结日期',
  estimateArrivalPortDate: '预期到港日期(ETA)',
  expCp8: '预期CP 8.0日',
  actualArrivalPortDate: '实际到港日期(ATA)',
  paymentDueDate: '采购付款期限',
  docExpressDate: '关单寄出日期',
  docExpressNo: '快递单号',
  declarationArrivalDate: '关单到达日期',
  estimateArrivalShopDate: '预计到店日期',
  actualArrivalShopDate: '到店日期',
  vehicleDeliveryDate: '交车日期',
  warrStartDate: '保修开始日期',
};

// 证件类型文案
export const CUSTOMER_IDENTITY_TYPE_TEXT_T = {
  IDENTITY_CARD: '身份证',
  PASSPORT: '护照',
  HONGKONG_PASS: '港澳居民来往内地通行证',
  TAIWAN_PASS: '台湾居民来往大陆通行证',
  DRIVING_LICENSE: '机动车驾驶证',
  UNIT_CREDIT_CODE: '社会信用代码',
};
