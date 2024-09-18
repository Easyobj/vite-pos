/* eslint-disable max-len */
import { ReactElement } from 'react';

const NewCarOrderDetailPage = {
  dataLoading: '数据加载中，请稍后...',
  isDownloading: '正在下载中...',
  isUploading: '上传中，请稍后...',
  orderNumberNotFound: '订单号不存在',
  header: {
    order: '订单',
    hasRefund: '已退款',
    changing: '变更',
    usedCoupon: '已核销券',
    updateTime: '最近更新时间',
    lastChangeDate: '订单最近一次发生状态变化的时间',
    firstSignDate: '客户首次签署时间',
    firstSignDateTip: '当前订单客户首次完成签署的时间，常为主合同的首次有效签署时间',
    lastSignDate: '客户最近签署时间',
    lastSignDateTip: '客户最近一次签署文档的时间',
    firstContractSignDate: '首次签单时间',
    firstSignedDate: '当前订单第一次变成已签单状态的时间',
    latestContractSignDate: '最近签单时间',
    latestContractSignDateTip:
      '当前订单的状态最近一次变成“已签单”状态的时间，如未发生过变更与“首次签单时间“相同',
    changeReason: '变更原因',
    belongStore: '所属门店',
    deliveryDetail: '交车详情',
    modifyOrder: '变更订单',
    reviseQuotation: '修改报价单',
    changeComparison: '变更信息对比',
    abortChange: '中止变更',
    cancelOrder: '取消订单',
    abortCancel: '中止取消',
    completedRefund: '已完成退款',
    inconformity:
      '订单证件号码与线上订单 (订单号：{{preOrderNo}}) 证件号码后四位 ({{userIdentityNoEnd4}}) 不一致，可能导致客户无法享受线上订单权益。',
    goQuoModal: {
      title: '操作失败',
      defaultContent:
        '当前订单关联的报价单暂未通过折扣申请，无法进行文档和修改报价单等操作，请等待折扣申请通过后，再进行后续订单操作。',
      okText: '前往报价单',
      cancelText: '关闭',
    },
    refundModal: {
      title: '确认已完成退款',
      content:
        '确认后，将从 DMS 平台删除 VSO 编号。若该 VSO 编号下仍有收款，将删除失败，请先前往 DMS 做退款处理。',
      okText: '确认',
      cancelText: '取消',
    },
  },
  // 左侧信息部分（报价单信息+客户信息）
  side: {
    quotationInfo: '报价单信息',
    model: '车型',
    pvmsOrderNo: 'PVMS 订单号',
    totalPrice: '预估销售总价',
    totalPriceTooltip: '预估销售总价=预估车辆成交价+报价可选项目总费用（不含优惠券和商业保险）',
    carBasicPrice: '车辆基本建议零售价',
    equipmentPrice: '配置建议零售价',
    carTotalPrice: '车辆总价建议零售价',
    cashDiscount: '车辆现金折扣',
    discountPrice: '车辆折后价',
    transactionPrice: '预估车辆成交价',
    deposit: '车辆应付定金',
    syncDMS: '同步DMS',
    syncing: '同步中',
    syncFailPrefix: '同步DMS失败。DMS报错信息：',
    syncInfo: '已请求DMS，同步成功后会自动更新',
    syncSuccess: '同步DMS成功',
    porscheCode: '保时捷代码',
    customerInfo: '客户信息',
    modifyCustomerInfo: '修改客户信息',
    customerName: '客户姓名',
    company: '公司',
    individual: '个人',
    changeBuyerType: '变更类型',
    changeBuyerTypeTitle: '请选择购买方类型',
    individualBuyer: '个人购买',
    companyBuyer: '公司购买',
    fillCustomerInfo: '完善客户信息',
    fill: '完善',
    changeBuyerFail: '当前客户缺失以下信息，无法切换购买类型。请前往客户档案完善后重试。',
    phone: '手机号码',
    identityNo: '证件号码',
    identityType: '证件类型',
    address: '地址信息',
    companyResponsibleRole: '公司负责人身份',
    companyName: '公司名称',
    unitCreditCode: '统一社会信用代码',
    changeBuyerTypeSuccess: '购买方类型变更成功',
    changeTooltip: '需订单中未生效的文档全部在未签署未审批时才支持修改客户信息',
    contactMobile: '联系电话',
    signMobile: '签单电话',
    changeMobile: '修改签单电话',
    changeMobileInfo:
      '修改后，新手机号将用于合同信息录入，并作为电子签署的短信接收号码，不会更新 C@P 的客户电话。',
    inputMobile: '输入手机号',
    wrongPhoneFormat: '手机号格式有误',
    leadCode: '商机编码',
    companyCreditCode: '企业信用代码',
    signRole: '签署人身份',
    privacyDocument: '隐私协议',
    resignWarn: '客户姓/名已发生了修改，请重新签署隐私协议',
    sign: '签署',
    resign: '重签',
    policy: '个人信息保护政策',
    mobileEditSuss: '联系电话修改成功',
    updateContractSuss: '您修改的信息已经更新到合同文档中',
    revokeDescription:
      '当前合同文档状态不是“未签署未审批“，此时修改客户信息不会同步至订单，若需要同步，请先撤回文档状态再操作。',
    warning: '提醒',
    unUpdateDescription:
      '此时修改客户信息将无法更新至订单中，仅在订单状态为进行中时且未发起签署审批前才支持更新',
  },
  editQuotationModal: {
    title: '确定修改报价单？',
    okText: '修改报价单',
    initStatus: '“未签署 & 未审批”',
    content: (dom: ReactElement): ReactElement => (
      <>
        修改报价单会将所有文档回退到
        {dom}
        状态。状态为“签署中”或“审批中”的文档会被自动撤回签署或审批，“已签署”或“已审批”的文档会被自动作废签署或审批。
      </>
    ),
  },
  cancelOrderModal: {
    head: '取消订单将会对以下项目产生影响',
    invalidContent: '该订单下所有文档将会被作废且不可恢复',
    foot: '请确保已与客户达成一致。是否确定取消订单？',
    preOrderReservedInfo:
      '线上订单 (订单号：{{preOrderNo}}) 将与该订单解除绑定，可以重新创建报价单',
    preOrderFinishedInfo:
      '线上订单已划账，无法创建新的报价单，线上订单订金已经转入经销商账户，请线下处理订金事项',
    hcInfo:
      '家充系统中已创建的物流/服务工单会一并取消。若客户已签收家充硬件或完成安装，保时捷中国将向您所在的保时捷中心收取相应的费用',
    couponInfo: '已使用优惠券将无法退回用户账户',
    confirm: (dom: ReactElement): ReactElement => (
      <>
        确认取消后，订单将进入{dom}
        ，可添加终止类协议。
      </>
    ),
    cancelingStatus: '“取消中”状态',
    continueCancel: '订单取消成功后，会对以下项目产生影响，请确认取消并继续：',
    defaultTitle: '确定取消订单 ？',
    delivered: '该订单已交车，是否继续取消？',
    invoiced: '该订单已开票，是否继续取消？',
    okText: '取消订单',
    cancelText: '关闭',
    resSuss: '订单已取消',
  },
  // 订单变更modal
  modifyModal: {
    title: '请选择变更方式',
    okText: '确认变更',
    noQuotationId: '订单变更，返回报价单id为空',
    subTitle: '发起变更将自动前往报价单页面，请修改报价单后再进行合同变更。',
    ruleMsg: '必须选择变更方式',
    onlyFile: '仅变更所选文档或添加新文档',
    resign: '重签新合同和协议，作废全部已签文档',
    textLabel: '变更原因',
    placeHolder: '请输入',
    required: '必须填写',
  },
  // 终止变更
  terminateModal: {
    title: '是否中止变更',
    confirm: '确认中止',
    abandon: '放弃中止',
    content: '中止变更后，订单将恢复至“已签单”状态。',
  },
  // 合同文档
  conDocument: {
    title: '合同文档',
    auditMaterial: '文档及审计材料',
    latestDocument: '最新文档',
    addFromTemplate: '从模板添加',
    addFromLocal: '从本地选择',
    electronicSign: '电子签署',
    offlineSign: '线下签署',
    currentBuyerApproveLink: '当前购买方认证链接',
    currentBuyerSignLink: '当前购买方签署链接',
    useWeChatScanSign:
      '请提示客户使用微信或手机扫描下方二维码，并在阅读完全部合同内容后，完成签署。',
    originalBuyerApproveLink: '原购买方认证链接',
    originalBuyerSignLink: '原购买方签署链接',
    useWeChatScanAuth:
      '请提示客户使用微信或手机扫描下方二维码完成认证，客户认证完成后，系统自动发送签署链接。',
    downloadAll: '全部下载',
    createMainContract: '创建主合同',
    electronicSignature: '发起电子签署',
    submitApproval: '提交审批',
    orderCancelCompleted: '订单取消完成',
    offlineSignature: '发起线下签署',
    signedAndApproved: '已完成签署审批',
    addChangeProtocol: '添加变更协议',
    addTerminationProtocol: '添加终止协议',
    addAdditionalProtocol: '添加附加协议',
    withdrawApplication: '撤回签署申请',
    invalidApproval: '作废签署/审批',
    withdrawApproval: '撤回审批',
    authSignLink: '认证/签署链接',
    more: '更多',
  },
  // 主合同
  masterContract: {
    title: '主合同',
    empty: '暂无主合同',
    createMaster: '点击列表上方「创建主合同」添加',
  },
  // 附件协议
  additionContract: {
    title: '附加协议',
    empty: '暂无附加协议',
    createAddition: '点创建主合同后可添加附加协议',
  },
  // 变更协议
  changeAgreement: {
    title: '变更协议',
    emptyTitle: '未添加变更协议',
    emptyContent: '每次变更需添加变更类协议，否则无法发起签署',
  },
  // 终止协议
  terminalAgreement: {
    title: '终止协议',
    emptyTitle: '未添加终止协议',
    emptyContent: '取消订单需添加终止类协议，否则无法取消',
  },
  // 历史合同
  historyContract: {
    title: '历史合同',
  },
  contractTable: {
    currentBuyer: '当前购买方',
    originBuyer: '原购买方',
    completeSign: '完成签署',
    editSignature: '编辑签字位',
    download: '下载',
    delete: '删除',
    reUpload: '重新上传',
    uploadFile: '上传文档',
    change: '变更',
    docValidateFail: '文档生效失败',
    contactTechnical: '请联系POS技术支持人员',
  },
  // 其他资料
  otherDocument: {
    title: '其他资料',
    subtitle: '此区域内文档不参与签署流程，审批端和文档中心可查看',
    addFile: '添加资料',
    empty: '暂无其他资料',
    description: '无需客户签署的文档可上传至此处，销售协调如有添加也会同步在此展示',
    fromLocal: '从本地选择',
    maxRuleMsg: '单个文件大小不能超过{{countDesc}}',
    deleteSucc: '删除成功',
    uploadSucc: '上传成功！',
    local: '本地上传',
    takePhoto: '拍照',
    download: '下载',
    delete: '删除',
    reUpload: '重新上传',
  },
  uploadModalLazy: {
    mainTitle: '上传/拍摄其他资料',
    confirmContent: '是否添加完毕？上传完成后图片将合并转换为一个PDF文档。',
    upload: '上传',
    tipsMsg: '拍照提示',
    uploadProtocol: '上传/拍摄合同或协议',
    confirmSignedContent:
      '是否上传已完成签署的文件？上传完成签署审批的协议后，状态将变成“已签署已审批”',
  },
  buildTable: {
    fileName: '文件名',
    contractCode: '编号',
    contractStatus: '状态',
    updateTime: '更新时间',
  },
  commonText: {
    thirdParty: '三方',
  },
  // 物流信息
  logisticsInfo: {
    title: '物流信息',
  },
  // 提交审批modal
  approvalModal: {
    title: '确定提交审批？',
    subtitle: '提交审批后，以下文档将发送至审批人进行线上审批。确定提交审批？',
    prefixOkText: '提交',
    fileName: '文档名称',
    fileStatus: '文档状态',
  },
  // 证件后四位不一致弹框
  identityModal: {
    title: '证件后四位不一致',
    okText: '我知道了',
  },
  preventApproveModal: {
    title: '无法提交审批',
    onlineOrderRefund: '线上订单已退款，无法提交审批，请取消订单',
    invalidFile: '取消后，该订单下的所有文档将会被作废且不可恢复',
    okText: '我知道了',
  },
  onlineRefundModal: {
    title: '线上订单已退款',
    content: `线上订单 (订单号：{{preOrderNo}}) 已退订，如继续提交签署，客户将不再享有线上订单的权益`,
    okText: '我知道了',
  },
  confirmOnlineSignModal: {
    title: '确定发起电子签署？',
    subtitle: '发起电子签署后，以下文档将通过短信发送至客户手机进行签署。确定发起电子签署？',
    sendToOriginalBuyer: '发送至原购买方：',
    sendToCurrentBuyer: '发送至当前购买方：',
  },
  confirmOfflineSignModal: {
    title: '确定发起线下签署？',
    subtitle:
      '发起线下签署后，以下文档将被自动下载，请完成线下签署和审批后再上传文档。确定发起线下签署？',
  },
  // 提交审批 / 线上签署 / 线下签署公用弹框button
  modalFooterBtn: {
    cancelText: '取消',
    suffixText: '并创建VSO',
    defaultPrefixText: '发起',
  },
  revokeSignModal: {
    title: '撤回签署',
    defaultSubtitle: '执行撤回签署后，以下文档将全部退回“未签署”的状态，请确认是否撤回？',
    okText: '撤回签署',
    resultSuss: '撤回签署成功',
  },
  // 添加合同模版
  additionModal: {
    title: '请选择协议类别',
    defaultTitle: '请选择合同类别',
    placeholder: '请选择协议模板',
    defaultPlaceholder: '请选择合同模板', // todo 待删除
    confirmOkText: '确认',
    generateOkText: '生成合同',
    cancelText: '稍后',
    defaultCancelText: '取消',
  },
  // 推送相关
  notification: {
    know: '知道了',
    // 提交电子签成功提醒卡片
    successSignature: {
      phone: '手机',
      message: '成功发起电子签',
      description: '已进入电子签流程,签署链接将发送至{{contact}},请持续追踪客户签署状况.',
    },
    // 提示用户先创建主合同
    createMainContract: {
      add: '立即添加',
      message: '是否添加主合同',
      description: '订单尚未添加主合同。添加后，可进行合同审批。',
    },
    // 上传已签署文档提醒
    uploadSigned: {
      description: '已开始线下签署流程, 请将已签署的文档分别上传至对应的文档处',
      message: '下一步, 上传已签署文档',
    },
    // 提醒点击'已退款'
    notifyReturn: {
      description: '取消订单审批已通过, 请至待确认事项中进行"退款"确认流程.',
      message: '下一步, 点击"已退款"',
      noShowAgain: '下次不再提示',
    },
  },
  // 签字位改变modal弹框
  signatureChangeModal: {
    title: '签字位已改变',
    content: '当前签字位编辑未保存，取消将关闭页面，并丢失已编辑的坐标位置，是否确认取消？',
    okText: '确认取消',
    cancelText: '放弃取消',
  },
  signatureConfirmModal: {
    warnInfo: '请先放置客户签字位',
    title: '保存签署位置',
    noDealerStamp: '未配置经销商盖章位，该文档将没有线上盖章。',
    noDealerStampTitle: '是否无需配置经销商盖章位',
    save: '签署位置已变化, 确认保存',
    confirm: '确认签字位',
  },
  deleteAgreementModal: {
    deleteChange: '删除变更协议',
    deleteAdditional: '删除附加协议',
    content: '因其他文档均为已签署已审批状态，若删除此文档订单将变更为已签单。',
    changeAgreement: '更换变更协议',
    exchangeAdditional: '更换附加协议',
    confirm: '确定删除',
    tip: '提示',
    yes: '是',
    deleteContent: '是否确认删除？',
  },
  bindDMSModal: {
    okText: '是',
    cancelText: '否',
    inconsistent: '该BP在DMS中尚未绑定客户卡片，已找到信息一致的客户卡片',
    ifBind: '，是否进行绑定？',
    yesBind: '选择是，将绑定BP到现有客户卡片；',
    notBind: '选择否，将取消本次VSO的创建，另请登录DMS检查客户卡片信息，以及是否需要绑定。',
  },
  colorChangeModal: {
    title: '车辆颜色描述已改变，请重新保存主合同',
    cancelText: '稍后前往',
    okText: '前往主合同',
    content:
      '车辆颜色描述已发生改变, 请前往主合同编辑页确认更新后的描述, 重新保存主合同后,再发起签署。',
  },
  confirmSignApproval: {
    title: '是否确认已完成签署审批',
    manualSelect: '请手动选择合同文档的客户签署时间及审批生效时间。确认后，将无法修改。',
    signTime: '客户签署时间',
    validTime: '审批生效时间',
  },
  telNoAuthModal: {
    title: '该手机号尚未认证',
    know: '知道了',
    content: '该手机号尚未在法大大平台完成认证，请提示客户留意认证短信，认证后即可获取签署链接。',
  },
  reAuthModal: {
    title: '重新提交认证',
    okText: '重新认证',
    content:
      '客户信息已发生变更，请点击“重新认证”按钮，系统将自动生成新的认证链接发给客户进行实名认证。',
  },
  updateCustomerModal: {
    title: '修改证件类型',
    okText: '修改',
    currentId: '当前客户的证件类型',
    editCertificate: '无法发起电子签署/审批流程。请前往客户档案将证件类型修改为',
    idPassport: '身份证、护照、港澳通行证或台胞证',
    idCard: '身份证',
    retry: '后重试。',
    is: '为',
    perfectDoc: '并完善证件信息后重试',
  },
  offlineSignatureModal: {
    title: '操作失败',
    okText: '发起线下签署',
    noAuth:
      '客户未认证或认证信息不满足，无法发起终止协议的电子签署/审批流程。因签单后修改的客户信息无法更新至订单中。请使用',
    offlineSignature: '线下签署',
    completeSign: '完成终止协议的签署。',
  },
  earlyBirdWarn: {
    unableUpload: '线上订单已退款，无法上传文档。请撤回签署申请后取消订单。',
  },
  noneChangeDealModal: {
    title: '缺少变更类协议，无法发起签署',
    content: '当前待签署文档中缺少变更类协议，请先添加变更类协议。',
    okText: '立即添加',
    cancelText: '稍后添加',
  },
  downloadModal: {
    title: '提示',
    mergeDoc: '以下文档在发起电子签署时已被合并，因此将作为一份文件一起下载。',
    okText: '了解并下载',
  },
  // 终止取消订单modal
  terminateOrderCancelModal: {
    title: '是否中止取消',
    content: '中止取消将删除终止类协议，订单将恢复至“已签单”状态。',
    successMsg: '已中止“取消订单”操作',
    okText: '确认中止',
    cancelText: '放弃中止',
  },
  confirmCancelModal: {
    title: '是否订单取消',
    content: '取消订单后，该订单下的所有文档将被作废，且不可恢复。订单相关车辆将释放再次销售',
    okText: '确认取消',
    cancelText: '放弃取消',
  },
  // 撤回审批modal
  withdrawApprovalModal: {
    title: '撤回审批',
    subtitle: '执行撤回审批后，以下文档将全部退回为“未审批”的状态，请确认是否撤回？',
    okText: '撤回审批',
    successMsg: '撤回审批成功',
  },
  messageBox: {
    unableSign: '文档的模板未找到签署配置，无法发起电子签。',
    addTips: '当前订单已签单，如需新增附加协议，请点击右上方“…”更多按钮，进行“添加附加协议”操作',
    noInvalidSignedDoc: '没有可作废已签署文档',
    signTimeRequired: '客户签署时间和审批生效时间必填',
    updateInfo: '您修改的信息已经更新到合同文档中',
    driveLicense: '(驾驶证无法进行后续操作，请使用其他证件)',
    useIdentity: '(请使用身份证证件，否则无法进行后续操作)',
    missInfo: '当前客户缺失以下信息，无法发起签署/审批流程。请前往客户档案完善后重试。',
    bodyColor: '车身颜色：',
    roofColor: '车顶颜色：',
    innerColor: '内饰颜色：',
    updateTo: '更新为',
    qrCode: '二维码',
    vsoOrderDeleteOk: 'VSO订单号已在DMS系统中删除成功',
    newAuthLinkSendOk: '新的认证链接已成功发送',
  },
  revokeApplyModal: {
    invalidDoc: '请选择要作废的文档',
    ifCancelApply: '是否撤回签署申请',
    okInvalid: '确认作废',
    okRevoke: '确认撤回',
    cancelText: '放弃',
    successMsg: '提交成功',
    fileName: '待作废文档',
    contractStatus: '文档状态',
    signName: '签署人',
    reBackStatus:
      '确认后，所选文档退回至“未签署”“未审批”状态，可重新编辑合同文档再次发起签署和审批。',
    mergeSelect: '提示：相关合并签文档已自动被选中，将一并作废签署。',
    confirmWarn: '确认撤回后，将撤回正在“签署中”的文档，若客户已签署，将无法撤回。',
  },
  ruleBox: {
    support: '仅支持',
    formatUpload: '文件格式的上传',
    maxSizePer: '单个文件大小不能超过',
  },
};

export default NewCarOrderDetailPage;
