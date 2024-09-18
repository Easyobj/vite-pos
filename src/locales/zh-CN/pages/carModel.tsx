const CarModelPage = {
  baseInfo: '基础信息',
  guaranteeInfo: '三包卡车辆信息',
  modelYearsInfo: '年款车辆信息',
  editYearModel: '编辑年款车辆',
  addYearModel: '添加年款车辆',
  emptyYearModel: '暂无年款车辆，请先添加保存车款',
  columns: {
    modelCode: 'Model Code',
    seriesId: '车型系列',
    modelDescZh: '车款名称(中)',
    modelDescEn: '车款名称(英)',
    carModelYears: '在售年款',
    carSpecs: '车辆规格',
    carPower: '车辆动力类型',
    carType: '车辆类型',

    updateTime: '更新时间',
    yearModelDescEn: '年款车辆名称(英)',
    yearModelDescZh: '年款车辆名称(中)',
    modelYear: '年份',
    marketPriceFlag: '车价维护',
    marketPrice: '年款车辆价格(元)',
    yearPublishFlag: '在售状态',

    actions: '操作',
  },
  modelYearsName: '{{text}}款',
  exportCarModelFileName: '车型.xlsx',
  filter: {
    searchCarModel: '搜索车款',
    enterModelCodeOrName: '请输入Model Code/车款名称',
    carSeries: '车型系列',
  },
  message: {
    errorMarketPrice: '请输入正确的价格',
    modelCode: '(为确保与其它系统匹配，请填入PVMS内的Model Code)',
    carModelOnSaleForPOS: '状态为“在售“的车款，可用于POS中创建新车商机时使用；',
    carModelOnSaleWithPriceForPFS:
      '状态为“在售”且维护了车价的车款，可在PFS相关功能中使用。例如，金融计算器(含toB和toC端)、管理后台中的零售金融方案配置等功能。',
  },
};

export default CarModelPage;
