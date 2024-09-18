const QuotationPrint = {
  porschePremiumCustomer: '保时捷尊享客户',
  title: '报价打印',
  printButton: '打印客户版',
  customerInfo: '客户信息',
  customerName: '客户名称',
  companyName: '公司名称',
  contactNumber: '联系电话',
  address: '地址',
  remark: '备注',
  vehicleInfo: '车辆信息',
  vehicleModel: '车型车系',
  vehicleVin: '车架号',
  pvmsOrderNumber: 'PVMS订单号',
  vehicleModelCode: '车型编码',
  personalizedConfig: '个性化配置 *',
  bodyCode: '车身代码',
  bodyColor: '车身颜色',
  interiorCode: '内饰代码',
  interiorColor: '内饰颜色',
  topColorCode: '车顶颜色代码',
  topColor: '车顶颜色',
  vehicleQuotation: '车辆报价 *',
  basicRetailPrice: '车辆基本建议零售价',
  configRetailPrice: '配置建议零售价',
  totalRetailPrice: '车辆总价建议零售价',
  estTransactionPrice: '预估车辆成交价',
  optionalItemsTitle: '其它可选项目报价 *',
  fineAccessories: '车主精品',
  decorativeAccessories: '精装配件',
  serviceProducts: '服务产品',
  coupon: '优惠券',
  agencyServiceFee: '代理服务费',
  financialServiceFee: '金融服务费',
  estVehicleInsuranceFee: '预估车辆保险费',
  totalPriceTitle: '预估销售总价 *',
  estVehicleInsuranceFeeTotal: '预估车辆保险费 *',
  estVehiclePurchaseTax: '预估车辆购置税 *',
  totalPriceEstimate: '预估总价 *',
  legalDisclaimer: '法律声明',
  contactConsultant: '联系您的销售顾问',
  legalProvisions: (hideEstimateLegal: boolean): JSX.Element => (
    <ul>
      <li>
        *
        本报价单中所列建议零售价均为制造商建议零售价（含增值税）且仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权凭证、其它可选的或各地区特需的设备。特别是，制造商建议零售价（含增值税）并未包含2016年12月1日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。
      </li>
      <li>* 部分个性化配置会影响交车时间和最终车价，实际成交价格以最终签订的汽车购买合同为准。</li>
      <li>
        *
        其它可选项目供选择，其中部分项目（包括服务产品、代理服务费、金融服务费）可能由第三方服务提供商提供，所列价格仅供参考。
      </li>
      {hideEstimateLegal ? <li>* 预估车辆保险费、预估车辆购置税的金额仅供参考。</li> : null}
    </ul>
  ),
};

export default QuotationPrint;
