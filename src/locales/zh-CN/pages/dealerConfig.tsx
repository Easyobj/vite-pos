const DealerConfigPage = {
  baseInfo: '基本信息',

  columns: {
    dealerCode: 'Dealer Code',
    dealerId: 'Dealer ID',
    bpId: 'BP ID',
    companyCode: 'Company Code',
    locationCode: 'Location code',
    storeId: 'Storeid',
    companyName: '经销商法律实体',
    accountBank: '对公开户银行',
    accountBankBranch: '支行',
    accountNumber: '对公银行账户',
    unitCreditCode: '统一社会信用代码',
    uildNoAuth: '企业电子签章',
    posStatus: 'POS开通情况',
    dealerChineseName: '门店',
    motherOrSon: '门店性质',
    partnerNo: '经销商集团',
    salesArea: '销售大区',
    salesRegion: '销售小区',
    longitude: '经度',
    remark: '备注',
    province: '省市区',
    address: '详细地址',
    telephone: '联系电话',
    postalCode: '邮政编码',
    contact: '联系人',
    email: '邮箱',
    salesTelephone: '销售电话',
    latitude: '纬度',
    name: '门店',
    actions: '操作',
  },

  message: {
    checkData: '请检查数据是否完整，格式是否正确',
    signCertification: '请先在个人中心进行电子签署认证',
    dealerCodeEmpty: 'Dealer Code为空，不能开通POS权限',
    companyCodeEmpty: 'Company Code为空，不能开通POS权限',
    associationSuccess: '关联成功，完成企业认证',
    accountNotCertified: '该账号暂未认证，请先前往法大大认证后再关联账号',
    accountDuplicate: '该账号存在重复，请联系客服删除后再关联账号',
    maxLength50NonChinese: '长度不超过50的非中文',
    validDealerEntity: '请输入正确的经销商法律实体',
    validLongitude: '经度整数部分为0-180,小数部分为6到8位!',
    validLatitude: '纬度整数部分为0-90,小数部分为6到8位!',
    motherOrSonTootip: '该经销商代码下的库存车将会默认导入至母店。需要在母店库存中划拨车辆至子店。',
    editTelephoneWarning: '编辑此信息会影响到My Porsche的显示，请谨慎操作',
    enterPostalCode: '请输入邮政编码',
  },

  editConfirmModal: {
    title: '修改经销商信息确认',
    content:
      '创建后Dealer Code，Company Code，经销商法律实体、对公银行账户不可更改，请认真核对后再提交',
  },

  openDealerConfirm: {
    title: '确定开启门店？',
    content:
      '在POS中开启该门店，门店用户可以在POS右上角查看并切换至该门店进行后续操作。确定开启门店吗？',
    oktext: '开启',
  },

  closeDealerConfirm: {
    title: '确定关闭门店？',
    content:
      '在POS中关闭该门店，将导致门店用户无法在POS右上角查看并切换至该门店。已在该门店下创建的历史业务数据将不受影响，在经销商端可继续查看和操作。确定关闭门店吗？',
    oktext: '关闭',
  },

  authModal: {
    title: '电子签认证信息',
    FDD_Platform: '法大大认证平台',
    changeAdminAccountTip: '若要更换法大大的管理员账号请到平台。',
    getValidCode: '获取验证码',
    authenticate: '认证',
    refreshStatus: '刷新状态',
    validate: '校验',
    columns: {
      mobile: '管理员认证手机号码',
      adminAccountName: '管理员认证账号',
      adminName: '管理员姓名',
      companyName: '企业认证',
      validCode: '验证码',
      certifySuccessTime: '法大大审核时间',
    },
    message: {
      sendCodeTooFrequent: '一分钟以内不能重复发送验证码',
      scanQRCode: '扫描二维码认证',
      invalidPhoneNumber: '请输入正确的手机号',
      invalidCode: '验证码错误, 请重新输入',
    },
  },
  searchPartnerNoPlaceholder: '可按集团展示名称/Partner No.搜索',
};

export default DealerConfigPage;
