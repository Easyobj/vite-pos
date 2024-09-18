import React from 'react';
const basicProductConfig = {
  selectProductType: '请选择产品类型',
  pleaseSelectSupportedModels: '请选择支持产品的车辆',
  loanPeriodCannotBeSame: '贷款期限不能相同',
  loanTermsRequirement: '贷款期限至少需要选择1个金融渠道',
  noZeroRate: '该产品类型下不能有0利率的金融渠道',
  downPaymentRatioRequirement: `首付比例值必须大于或等于{{text}}`,
  oilCarDownPaymentRatio: `燃油车首付比例请低于下列支持车型的100%-{{text}}%`,
  electricCarDownPaymentRatio: `电动车首付比例请低于下列支持车型的100%-{{text}}%`,
  exceedsRange: '超出范围',
  forever: '永久',
  productSavedSuccessfully: '产品方案保存成功！',
  productTypeRequired: '请检查数据是否完整，格式是否正确',
  storeRateSaveSuccess: '门店利率保存成功！',
  loanRatio: '贷款比例',
  electricCar: '电动车：',
  oilCar: '燃油车：',
  month: '月',
  rateRequired: '必填',
  rate: '利率(%)',
  required: '必选',
  loanPeriod: '贷款期限',
  financeChannel: '金融渠道',
  defaultClientChannel: '客户端默认渠道',
  status: '启用状态',
  financialProduct: '金融产品',
  leaseProduct: '租赁产品',
  pageTitle: `{{text}}产品配置`,
  basicInfo: '基础信息',
  productName: '产品名称',
  length15: '长度不超过15',
  productAttribute: '产品属性',
  selectProductAttribute: '请选择',
  productType: '产品类型',
  activityType: '活动类型',
  selectActivityType: '请选择活动类型',
  businessType: '业务类型',
  selectBusinessType: '请选择业务类型',
  confirmChangeBusinessType: '请确认是否更换业务类型',
  confirmChangeBusinessTypeDetail: '更换业务类型需重新选择对应的车型年款，是否确认更换？',
  startTime: '起始时间',
  startTimePlaceholder: '开始时间',
  endTimePlaceholder: '结束时间',
  carModel: '车型',
  supportedCars: '支持产品的车辆',
  pattern: `{{total}}款`,
  clientDisplay: '客户端显示',
  textDisplayedInClientRedBox: '文字将会显示在客户端此红框区域内',
  productFeatureTitle: '产品特性标题描述',
  maxCharacters: '6个字符以内',
  homepageDisplayLimit: '首页仅展示前六位的产品',
  sortPriority: '排序呈现优先级',
  inputPrompt: '请输入0到100的正整数',
  sortPriorityDescription: '≥0的数字表示，数字越大优先级越高',
  productDescription: '产品介绍描述',
  imageDisplayedInClientDashedBox: '图片将会显示在客户端此白虚线框内',
  maxProductDescriptionCharacters: '50字中文字符以内，用户可看的产品描述',
  clientImage: '客户端首页介绍图',
  clientImageDescription: '文件大小不会超过200kb，建议尺寸768px*376px',
  remark: '备注',
  remarkDescription: '仅对Finder展示',
  parameterConfiguration: '参数配置',
  rateChangeLog: '利率变更日志',
  expandLog: '展开日志',
  rateConversion: '费率转换利率',
  loading: '数据加载中',
  operationTime: '操作时间',
  store: '门店',
  operator: '操作人',
  financialProductName: '金融产品名',
  channel: '渠道',
  loanTermMonths: '期限（月）',
  interestRateBefore: '修改前',
  interestRateAfter: '修改后',
  rateLabel: '费率(%)',
  rateMessage: '请输入费率',
  interestRateLabel: '利率(%)',
  rateToolTip: '*数据仅作为参考，不同金融产品可能存在计算差异',
  fullSeriesTitle: `{{title}}全系({{total}})`,
  selectFinancialProductFirst: '请先选择金融产品',
  clickToSelectSupportedModels: '请点击选择支持该产品的年款车辆',
  selectSupportedModels: '选择支持该产品的车辆',
  totalSupportedCars: (totalCount: number) => (
    <>
      共<span className="total">{totalCount}</span>款车支持
    </>
  ),
  clear: '清除',
  valueCannotBeLessThanZero: '值不能小于0',
  electroMobile: '电动车',
  fuelCar: '燃油车',
  downPaymentRatioBelow: `{{frontName}}首付比例请低于下列支持车型的100%-{{maxRV}}%`,
  loanTermTailRatioOption: '12～36个月贷款期限尾款比例0～40%可选，',
  fixedLoanTermTailRatio: '48～60个月贷款期限尾款比例固定为0%',
  recommendLabel: `推荐{{label}}`,
  downPaymentRatioRange: '≤ 首付比例 ≤ 100%-RV',
  rvValueNote: '注:RV值=残值百分比，残值比例根据年款及期限计算',
  downPaymentPercentage: '首付比例',
  finalPaymentPercentage: '尾款比例',
  downPaymentPercentageElectric: '首付比例',
  finalPaymentPercentageElectric: '尾款比例',
  downPaymentPercentageText: '首付比例50%',
  downPaymentPercentageElectricText: '首付比例50%',
  finalPaymentPercentageText: '尾款是月供的30倍',
  finalPaymentPercentageElectricText: '尾款是月供的30倍',
  finalPaymentPercentageRangeText: '≤ 首付比例 ≤ 100%-RV',
  finalLeasePaymentPercentageElectricText: '尾款是月供的30倍',
  recommendationPeriodLabel: '推荐贷款期限（月）',
  carModels: '车款',
  loanTermMonthsColumn: '期限（月）',
};

export default basicProductConfig;
