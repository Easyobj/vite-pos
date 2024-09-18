const QuotationOptions = {
  Items: {
    title: '报价可选项目',
    add: '添加{{title}}',
    change: '更换{{title}}',
    discountTotalPrice: '{{title}}总价',
    saveText: '确定',
    fineAccessory: {
      title: '车主精品',
      code: '精品编号',
    },
    originAccessory: {
      title: '精装配件',
      code: '配件编号',
    },
    afterService: {
      title: '服务产品',
      code: '服务编号',
    },
    discount: {
      title: '优惠券',
    },
    otherFree: {
      title: '代理服务费',
    },
    businessInsurance: {
      title: '保险服务',
    },
    loan: {
      title: '按揭业务',
      calculateFinancialQuotes: '计算金融报价',
      mortgageBusinessServiceFee: '金融服务费',
    },
  },
  Columns: {
    code: '编号',
    name: '名称',
    discountTypeSales: '销售',
    discountTypeGift: '赠送',
    remark: '赠送原因',
    unitPrice: '原价',
    amount: '数量',
    unitTotalPrice: '总价',
    realTotalPrice: '实收',
    dmsType: 'DMS分类',
    discountRate: '折扣比例',
    discountUseCondition: '使用条件',
    discountValidPeriod: '有效期',
    discountPrice: '金额',
    feeName: '费用名称',
    retailPrice: '零售价',
    financialInstitutions: '金融机构',
    downPaymentAmount: '首付金额',
    loanAmount: '贷款金额',
    loanTerm: '期限',
    loanTermWithUnit: '期限(月)',
    serviceFeeAmount: '金额服务费',
    requiredField: '请输入',
  },
  Placeholder: {},
  ErrorMessage: {
    requiredField: '请输入所有必选项',
    minAmount: '数量必须大于0',
    maxNumber: '最大数字不能大于{{max}}',
  },
};

export default QuotationOptions;
