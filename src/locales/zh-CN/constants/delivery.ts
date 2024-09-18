export const DELIVERY_STATUS_T = {
  WAIT: '待交车',
  FOLLOW: '待跟进',
  COMPLETE: '已完成',
};

export const THREE_GUARANTEE_TYPE_T = {
  OIL: '燃油',
  ELECTRIC: '电动',
  HYBRID: '混动',
};

//交车文档签署状态
export const SIGN_STATUS_CONFIG_T = {
  UN_SIGN: '未签署',
  SIGNING: '签署中',
  SIGNED: '已签署',
};

export const DELIVERY_INSURANCES_T = {
  comprehensive: '商业险',
  compulsory: '交强险',
  accident: '驾意险',
  brandInsurance: '保障套餐',
};

export const INSURANCE_STATUS_T = {
  UN_SUBMITTED: '未提交',
  WAIT_FOR_FI: '转交F&I',
  SUBMITTED: '已提交',
  IN_EFFECTIVE: '已生效',
};

export const BRAND_INSURANCE_STATUS_T = {
  UN_SUBMITTED: '未提交',
  WAIT_FOR_FI: '转交F&I',
  SUBMITTED: '已提交',
  IN_EFFECTIVE: '合并支付成功',
};

export const FORM_MESSAGES_T = {
  number: '请输入大于等于0的数字',
  percentage: '请输入0-100的百分比数字',
};

export const INSURANCE_NAME_T = {
  COMPULSORY: '交强险',
  COMPREHENSIVE: '商业险',
  ACCIDENT: '驾意险',
};

export const DELIVERY_FEEDBACK_STATUS_T = {
  NOT_START: '未签署',
  PROCESSING: '进行中',
  FINISHED: '已签署',
};

export const SAVE_SUCCESS_MESSAGE_T = '保存成功！';
export const EMPTY_WARNING_MESSAGE_T = '请至少选择一个保险产品与服务包，再提交保险订单。';
export const FORMAT_WARNING_MESSAGE_T = '输入格式错误，转交失败';
export const HANDOVER_SUCCESS_MESSAGE_T = '转交成功！';

export const BLANK_VALIDATE_T = {
  bpid: 'BP ID',
  posOrderId: 'POS订单号',
  pvmsOrderId: 'PVMS订单号',
  vin: 'VIN',
  dealerId: 'Dealer ID',
  dealerCode: 'Dealer Code',
  dealerName: '门店名称',
  selectedInsurerId: '保险公司',
  vehicleOwnerName: '车主姓名',
  vehicleOwnerPhoneNumber: '手机号码',
  vehicleInfo: '车型',
};
