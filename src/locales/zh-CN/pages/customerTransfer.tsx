const CustomerTransferPage = {
  columns: {
    id: '序号',
    sourceUserId: '转出销售顾问',
    targetUserId: '转入销售顾问',
    transferBusinessType: '转移业务类型',
    comment: '备注',
    status: '操作结果',
    createBy: '操作人',
    createTime: '操作时间',
    actions: '操作',
    transferBpId: {
      label: '需转移的客户BP-ID',
      options: {
        part: '转移部分客户',
        all: '转移所有客户',
      },
    },
  },
  placeholder: {
    all: '所有',
    name: '请输入姓名',
    bpIds:
      '多个BP-ID之间请用换行隔开。请输入格式如：\n6457653343\n6457653322\n6457653320\n6457653317\n6457653310\n6457653399\n6457653309',
  },
  message: {
    emptyBpIds: '请填写BPID，不支持该值为空',
    errorBpIds: '请输入正确的BPID格式',
  },
  confirmTransferText: '确认并转移',
  transferBusinessTypeToolTip: {
    all: '包含转出销售顾问名下的新车报价、订单、交车数据和易手车订单（含销售申请、交车）数据',
    newCar: '包含转出销售顾问名下的新车报价、订单、交车数据',
    usedCar: '包含转出销售顾问名下的易手车订单（含销售申请、交车）数据',
  },
  ceateTransferTypeTooltip:
    'P中将相关客户的BPID转移到新的顾问名下；\n当前业务单据转移支持：新车（报价、订单、交车）；易手车（订单，含销售申请、交车）。',
  transferTypeTooltip:
    '当前业务单据转移支持：\n新车（报价、订单、交车）\n易手车（订单，含销售申请、交车）',
  viewDetails: '查看',
  permissionWarn: '您当前还没有权限查询C@P，所以无法完成业务单据转移的功能',

  copyBpIdsSuccess: 'BPID已复制成功',
  copyFailedBpIds: '复制转移失败的BP',

  remindModal: {
    title: '提醒',
    content: '在POS中以下BPID的业务数据已存在转入顾问的名下，本次转移会跳过以下已经存在的BPID',
  },
  transferModal: {
    title: '客户业务单据转移中',
    content: '业务单据转移处理需要一些时间，请稍后在列表中查看转移结果。',
    okText: '知道了',
    successMsg: '客户业务单据转移中，转移结果请稍后刷新列表页面查看。',
  },
  transferRecordColumns: {
    id: '序号',
    bpId: 'BP-ID',
    transferBusiness: '转移业务类型',
    status: '操作结果',
    errorReason: '结果说明',
  },
};

export default CustomerTransferPage;
