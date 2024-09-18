import React from 'react';
const recommendProduct = {
  recommendProductConfiguration: '推荐产品配置',
  carSeries: '车系',
  modelDescription: '车型描述',
  modelCode: '车型代码',
  modelYear: '年款',
  recommendedProduct: '推荐产品',
  updateTime: '更新时间',
  noResultsTitle: '当前搜索无结果',
  noResultsText: '换个关键词或搜索条件试试',
  totalData: (total: number) => `共 ${total} 个数据`,
  leaseProduct: '租赁产品',
  financialProduct: '金融产品',
  configureRecommendedProduct: '配置推荐产品',
  serialNumber: '序号',
  noRecommendationPlan: '无推荐方案',
  financialProducts: '金融产品',
  leaseProducts: '租赁产品',
  selectLabel: '推荐金融/租赁产品',
  selectErrorMessage: '请选择推荐产品',
  pleaseSelectCars: '请先勾选车辆',
  configuration: '配置',
  configureSuccess: '配置成功',
  noSupportText: '不支持以下',
  modelConfigFailed: '车型配置失败',
  noResultsMessage: '请先前往零售金融中找到该产品，添加以下车辆后重试。',
  totalCars: (num: number) =>
    `请为勾选的${num}个车型添加或更新推荐产品，配置的推荐产品仅在Finder小程序端生效。`,
  modalText: (nameZh: string, num: number) => (
    <>
      该金融/租赁产品 <span>{`“${nameZh || '无推荐方案'}”`}</span>
      不支持以下{num}
      个车辆的配置。请先前往零售金融中找到该产品，添加以下车辆后重试。
    </>
  ),
  model: '车型',
  modelPlaceholder: '请输入车型名',
};

export default recommendProduct;
