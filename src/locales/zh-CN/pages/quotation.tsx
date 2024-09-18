export const QuotationDetailPage = {
  saveLoading: '正在保存...',

  pageTitle: {
    default: '报价单详情',
    create: '创建新车报价',
    new: '报价单未提交',
    edit: '修改新车报价',
    approve: '折扣申请未提交',
    approving: '报价单审批中',
    approved: '报价单已通过',
    rejected: '报价单已驳回',
    invalid: '报价单已失效',
    canceled: '报价单已取消',
    delete: '报价单已删除',
  },

  extraButton: {
    approve: '提交折扣申请',
    cancel: '取消',
    cancelQuotation: '取消报价单',
    createOrder: '创建订单',
    edit: '编辑报价单',
    delete: '删除报价单',
    print: '打印客户版',
    revokeApprove: '撤回折扣申请',
    saveAndViewOrder: '保存并查看订单',
    save: '保存',
    stopQuotationModify: '作废修改报价单',
    viewOrder: '查看订单',
  },

  customerInfo: {
    title: '客户信息',
    name: '客户名称',
    type: '客户类型',
    individual: '个人客户',
    enterprise: '企业客户',
    bpId: 'BP-ID',
    vsoNumber: 'VSO编号',
    relatedLead: '关联商机',
    contactNumber: '联系电话',
    companyName: '公司名称',
    contactAddress: '联系地址',
    remark: '备注',
    dealer: '所属门店',
    import: '导入',
    selectLead: '选择商机',
    createLead: '新建商机',
    remarkAble: '备注',
    remarkCount: '(最多500字符)',
  },

  usedCarExchange: {
    title: '是否选择二手车置换升级业务',
    brand: '品牌',
    model: '车型',
    age: '车龄',
    mileage: '里程',
    residualValue: '残值',
  },

  carInfo: {
    title: '车辆信息',
    selectCar: '选车',
    carName: '车辆名称',
    vin: '车架号',
    pvmsOrderNo: 'PVMS订单号',
    modelCode: '车型编码',
    estimatePurchaseTax: '预估车辆购置税',
    baseSuggestedRetailPrice: '车辆基本建议零售价',
    configSuggestedRetailPrice: '配置建议零售价',
    totalSuggestedRetailPrice: '车辆总价建议零售价',
    cashDiscount: '车辆现金折扣',
    afterDiscountPrice: '车辆折后价',
    additionalCharge: '附加费用',
    estimatedTransactionPrice: '预估车辆成交价',
    otherGiftAmount: '其他赠送金额',
    totalDiscount: '共计减免',
    vehicleDepositPrice: '车辆应付定金',
    showDiscountInfo: '显示折扣信息',
    vehicleImage: '车辆图片',
    inStockCars: '在库车',
    customCar: '自定义配车',
    saleTotalPrice: '预估销售总价',
    estimateInsuranceFee: '预估车辆保险费',
    landingTotalPrice: '预估总价',
    saleTotalPriceTooltip: '预估销售总价=预估车辆成交价+报价可选项目总费用（不含优惠券和商业保险）',
    landingTotalPriceTooltip: '预估车辆总价=预估销售总价+预估车辆保险费+预估车辆购置税',
    afterDiscountPriceTooltip: '车辆折后价=车辆总价建议零售价+车辆现金折扣',
    additionalChargeTooltip: '用于添加对超豪华小汽车额外征收的零售环节的消费税',
    estimatedTransactionPriceTooltip:
      '预估车辆成交价 = 车辆总价建议零售价 + 附加费用 + 车辆现金折扣',
    totalDiscountTooltip: '共计减免 = 车辆现金折扣 + 其他赠送金额',
  },

  personalization: {
    title: '个性化',
    optionalCode: '车辆配置代码',
    bodyColorCode: '车身代码',
    bodyColor: '车身颜色',
    innerColorCode: '内饰代码',
    innerColor: '内饰颜色',
    topColorCode: '车顶颜色代码',
    topColor: '车顶颜色',
  },

  placeholder: {
    lead: '请选择商机',
    noLead: '暂无商机',
    remark: '请输入备注',
    cashDiscountPrice: '请输入车辆现金折扣',
    extraPrice: '请输入附加费用',
    paymentDepositPrice: '请输入车辆应付定金',
  },

  errorMessage: {
    requiredField: '请输入{{msg}}',
    lead: '请选择商机',
    cashDiscountPrice: '请输入车辆现金折扣',
    paymentDepositPrice: '请输入车辆应付定金',
    addCustomerVehicleInfo: '请先添加客户与车辆信息',
    addCustomerInfo: '请先添加客户信息',
    addVehicleInfo: '请先添加车辆信息',
    selectLead: '请先选择关联商机',
    cashDiscount: '请填写车辆现金折扣',
    additionalFees: '请填写附加费用',
    vehicleDeposit: '请填写车辆应付定金',
    invalidSaleTotalPrice: '销售总价不符合要求(大于等于10000小于等于100000000)',
    invalidModelCode: '请选择符合的车型(当前modelCode为空)',
  },

  leavingModal: {
    title: '报价单未保存，请保存后离开',
    cancelTitle: '立即保存',
    confirmTitle: '确认离开',
    content: '报价单未保存，离开将丢失当前数据，请先保存。',
  },

  dmsBindModal: {
    title: '该BP在DMS中尚未绑定客户卡片，已找到信息一致的客户卡片{{msg}}，是否进行绑定？',
    cancelTitle: '否',
    confirmTitle: '是',
    dmsSuccessfullyBind: '绑定DMS成功，请重新创建VSO',
    content: (msg: string): JSX.Element => (
      <div className="mb-20">
        <div className="mb-20">
          该BP在DMS中尚未绑定客户卡片，已找到信息一致的客户卡片{msg}，是否进行绑定？
        </div>
        <div className="mb-20">选择是，将绑定BP到现有客户卡片；</div>
        <div className="mb-20">
          选择否，将取消本次VSO的创建，另请登录DMS检查客户卡片信息，以及是否需要绑定。
        </div>
      </div>
    ),
  },
  confirmMsg: {
    needClearLoan: '您调整的字段可能会影响按揭业务方案，导致当前的金融方案被清除。是否确认修改？',
    approve: {
      title: '确定提交折扣申请？',
      content: '提交后，报价单将发送至审批人进行折扣申请审批。请确定是否提交折扣申请？',
      successTip: '',
    },
    cancelCreate: {
      title: '确定取消创建报价单？',
      content: '已修改的内容尚未保存，取消后将丢失您所做的更改。确定取消创建报价单吗？',
      okText: '取消创建报价单',
    },
    cancelEdit: {
      title: '确定取消修改报价单？',
      orderChangeContent:
        '取消修改报价单后，本次修改的内容不会被保存，订单关联的报价单不变，订单状态将由“变更中”恢复为“已签单”。确定取消修改报价单吗？',
      content: '已修改的内容尚未保存，取消后将丢失您所做的更改。确定取消修改报价单吗？',
      okText: '取消修改报价单',
    },
    cancel: {
      title: '确定取消报价单？',
      content: (): JSX.Element => (
        <div>
          取消报价单后，报价单将进入<span className="high-light">“已取消”</span>
          状态。请确定是否取消报价单？
        </div>
      ),
      onlineOrderContent: (orderNo: string): JSX.Element => (
        <div>
          取消报价单后，报价单将进入<span className="high-light">“已取消”</span>
          状态。线上订单 (订单号：{orderNo})
          将与该报价单解除绑定，可以重新创建报价单。请确保已与客户达成一致。是否确定取消报价单？
        </div>
      ),
    },
    createOrder: {
      title: '订单创建成功',
      content: '您可前往订单详情页为该笔订单添加合同或文档。',
      okText: '前往订单',
      cancelText: '稍后前往',
    },
    delete: {
      title: '确定删除报价单？',
      content: '删除后，该报价单将无法找回，请谨慎操作。',
      onlineOrderContent:
        '删除后，该报价单将无法找回，同时系统将解除其与线上订单 (订单号：{{orderNo}}) 的绑定关系，请确保已与客户达成一致。是否确定删除报价单？',
    },
    revoke: {
      title: '确定撤回折扣申请？',
      content: (): JSX.Element => (
        <>
          撤回折扣申请后，报价单将回退至<span className="high-light">“未提交”</span>
          状态，可重新编辑再次提交折扣申请。请确定是否撤回折扣申请？
        </>
      ),
    },
    stopModify: {
      title: '确定作废修改报价单？',
      content:
        '作废修改报价单后，本轮修改的内容不会被保存，订单关联的报价单为本轮修改前的报价单。确定作废修改报价单吗？',
    },
  },
  earBirdWaringModal: {
    title: '无法保存报价单',
    content: (msg: string): JSX.Element => (
      <div>
        <div>
          无法保存报价单。因为当前报价单所选车型与线上订单中车型不一致，客户无法享受线上订单相关权益。
        </div>
        <br />
        <div>请重新选择车型后重试（仅以下车型享受权益：{msg}）</div>
      </div>
    ),
  },
  openPorscheCodeModal: {
    title: '确定要更改当前车辆的配置吗？',
    cancelText: '输入保时捷代码',
    okText: '打开原有配置',
  },
  importBPModal: {
    title: '是否跳转至“当前BPID的客户档案”进行信息修改？',
    content:
      '订单变更不支持变更BPID，如需变更同一BPID项下的客户信息，请前往“我的客户 ->客户列表 ->客户详情 ->客户档案”或在C@P系统中直接修改。确认跳转至“当前BPID的客户档案进行信息修改？',
  },
  generateContractModal: {
    defaultTitle: '请选择生成合同模板类型',
    cancel: '取消',
    okText: '确认',
    currentlyInUse: '当前使用中',
  },
  preOrderExistModal: {
    title: '提醒',
    content: '当前客户已有线上订单，如需根据线上订单创建报价单，请至【线上订单】模块查看并创建报价',
    okText: '去创建',
  },
};
