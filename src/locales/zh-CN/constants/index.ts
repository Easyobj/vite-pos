import * as COMMON from './common';
import * as DELIVERY from './delivery';
import * as O2O_REDEEM from './o2oRedeem';
import * as QUOTATION from './quotation';
import * as CONTRACT from './contract';
import * as EARLY_BIRD from './earlyBird';
import * as NEW_CAR_ORDER_LIST from './newCarOrderList';
import * as NEW_CAR_ORDER_DETAIL from './newCarOrderDetail';
import * as DOCUMENT_DETAIL from './documentDetail';
import * as DELIVERY_CEREMONY from './deliveryCeremony';
import * as TEMPLATE from './template';
import * as POS_CONFIG from './posConfig';

const Index = {
  ...COMMON, // 除全局的常量不加前缀，其它的常量需要加前缀
  DELIVERY, // 交车
  O2O_REDEEM, // 核销优惠券,
  QUOTATION,
  CONTRACT, // 新车订单
  EARLY_BIRD, // 早鸟
  NEW_CAR_ORDER_LIST, // 新车订单列表
  NEW_CAR_ORDER_DETAIL, // 新车订单详情
  DOCUMENT_DETAIL, // 文档详情
  DELIVERY_CEREMONY, // 交车仪式
  TEMPLATE, // 模板管理
  POS_CONFIG, // pos模块基础配置
};

export default Index;
