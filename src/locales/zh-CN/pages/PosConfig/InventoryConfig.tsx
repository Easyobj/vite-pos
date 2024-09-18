import React from 'react';

const InventoryConfig = {
  title: '库存配置',
  subtitle: '库存共享策略设置',
  description: '经销商代码下所有门店之间是否共享库存？',
  paragraph1: '选择“开启”则当前门店的库存车辆将共享给同一经销商代码下的其他门店。',
  paragraph2: '选择“关闭”则当前门店的库存车辆仅当前门店可见。',
  paragraph3: '其他门店是否将库存车辆共享给当前门店，是由其他门店配置决定，与当前门店配置无关。',
  shareTitle: '确定与其他门店共享库存？',
  shareOkText: '确认开启',
  shareDesc: '开启共享库存后，经销商代码下所有门店都将看到本店的库存。',
  notShareTitle: '确定不与其他门店共享库存？',
  notShareOkText: '确认关闭',
  notShareDesc: '关闭共享库存后，经销商代码下所有门店都将看不到本店的库存。',
  stockAgeCfg: '库龄设置',
  stockAgeDesc: '库龄显示',
  financialAge: '财务库龄',
  physicalAge: '物理库龄',
  dayConfigTitle: '库龄分类设置区间（天）',
  dayConfigDesc: '被选中的列表头将显示在库存表内。',
  grade: '档位',
  ge: '大于等于（天）',
  le: '小于等于（天）',
  errorInfo: '最大天数须大于最小天数',
  openSuccess: '共享库存开启成功！',
  closeSuccess: '共享库存关闭成功！',
  setStockAgeMsg: '设置库龄显示为{{text}}',
  verifyErrorInfo: '天数区间最大值必须大于最小值且不可为空',
  deleteContent: '是否要进行删除操作？删除后，内容将无法找回。',
};

export default InventoryConfig;
