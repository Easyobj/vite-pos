const ChargeConfigPage = {
  editCharge: '编辑费用',
  addCharge: '添加费用',
  columns: {
    name: '费用名称',
    category: '分类',
    amount: '默认金额',
    remark: '备注说明',
    status: '是否启用',
    tick: '默认选中',
    time: '费用创建时间',
    actions: '操作',
  },
  category: {
    finance: '金融',
    other: '其他',
  },
  financeCharges: {
    financialServiceFee: '金融服务费',
    insurance: '保险',
    serviceContract: '服务合同',
    purchaseTax: '购置税',
    accessoryEquipment: '附件物理设备',
    gpsSystem: '中瑞GPS',
  },
  otherCharges: {
    registrationServiceFee: '上牌服务费',
    motorInsuranceHandling: '代办机动车保险手续',
    usedCarTradeInService: '代办二手车置换服务',
  },
  toolTip: {
    tick: '若勾选，该费用将在金融报价页中默认选中',
  },
  message: {
    modifySuccess: '修改费用成功！',
    addSuccess: '添加费用成功！',
  },
  required: {
    name: '请输入小于10位的字符',
    amount: '请输入小于6位的整数',
  },
};
export default ChargeConfigPage;
