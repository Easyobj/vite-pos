import { ReactElement } from 'react';

// 交车仪式-交车套餐详情页
const PackageDetailPage = {
  package: '交车套餐',
  packageApproval: '交车套餐审批详情',
  packageNo: '（编号：{{packageNo}}）',
  enableStatus: '启用状态',
  disableTooltip: '{{editOrCreateText}}时不可启用，完成{{editOrCreateText}}后可操作',
  enableStatusTooltip1: '开启后，新创建的交车仪式邀请可以选择该交车套餐； ',
  enableStatusTooltip2:
    '关闭后，新创建的交车仪式邀请不可再选择该交车套餐，正在使用该交车套餐的邀请依然使有效。',
  lastUpdateTimeInfo: ' 该详情最后更新时间：',
  subtitle:
    '交车套餐是客户在交车流程中交车仪式的样式，创建并启用交车套餐后即可以在交车仪式邀请中可以选择对应交车套餐。',

  appPreview: 'App端预览',
  previewInfo: '滚动条仅当前预览时存在，实际App中不存在。该预览仅提供示意作用，实际效果以App为准。',
  waterMark: '仅供参考',

  free: '限时免费',
  duration: '仪式时长约{{ceremonyDuration}}分钟',
  theme: '主题包含',
  packageInfo: '套餐介绍',
  gift: '精美礼物',

  approve: {
    apply: '提交审批',
    withdraw: '撤回',
    approve: '通过',
    reject: '驳回',

    withdrawTitle: '确定撤回审批？',
    withdrawContent: '撤回审批后，您可以重新编辑内容。',
    withdrawSuccess: '撤回成功',
    submitSuccess: '提交成功',

    confirmTitle: '确定{{operation}}审批？',
    approveInfo: '审批通过后，CM即可上架该套餐供客户选择使用。',
    rejectReason: '驳回理由',
    rejectReasonPlaceholder: '请输入驳回理由...',
    rejectReasonRequired: '请输入驳回理由',
  },

  typeSelect: {
    selectType: '请先选择交车仪式类型',
    label: '交车仪式类型',
    quickInfo: '设定交车场地，套餐免费。一个门店只能建立一个快速交车套餐',
    nonQuickInfo: '设定价格、设定交车场地，不限制数量',
  },

  basicInfo: {
    title: '基础信息',
    packageName: '套餐名称',
    packageNameRequired: '请填写套餐名称',
    packageSubtitle: '副文本',
    packageSubtitleRequired: '请填写副文本',
    packageSubtitleTooltip: '用于辅助说明套餐内容',
    dealer: '所属门店',
    dealerRequired: '请填写所属门店',
    bay: '交车场地',
    bayRequired: '请填写交车场地',
    packageDescription: '套餐描述',
    packageDescriptionRequired: '请填写套餐描述',
    packageDescriptionTooltip: '用于详细说明套餐内容',
    bayInvalid: '交车场地已失效，请重新选择',
  },

  imageInfo: {
    packageSimpleImage: '套餐缩略图',
    simpleImageTooltip:
      '选择完交车仪式后，首页的仪式主题卡片上展示，区别于不同主题的缩略图，该图片需与主题的风格及元素一致',
    simpleImageRatio: '图片像素比例：2:3',
    simpleImageRequired: '套餐缩略图不能为空',

    packageDetailImage: '套餐详情图',
    detailImageTooltip: '用于客户查看套餐时的详情图，让客户一眼就爱上并选择这个主题',
    detailImageRatio: '图片像素比例：4:3',
    detailImageRequired: '套餐详情图不能为空',

    packageCardImage: '套餐卡片图',
    cardImageTooltip:
      '展示在套餐详情中，客户通过4张图片组合更了解仪式主题的各方面，建议使用不同元素的细节聚焦图',
    cardImageRatio1: '图片像素比例：3:2',
    cardImageRatio2: '图片像素比例：2:3',
    cardImageRequired: '套餐卡片图不能为空',

    formatInfo1: '最大支持20M，只上传一张，支持JPG、JPEG、PNG格式',
    formatInfo2: '单张图最大支持20M，支持JPG、JPEG、PNG格式',
    imageWarning: '图片像素比例不对，比例要求是：{{resolutionRatio}}，请重新上传',
  },

  quick: {
    title: '快速交车',
    duration: '仪式持续时间',
    durationRequired: '请填写仪式持续时间',
    timeRange: '快速交车时间范围',
    clear: '清空',
    timeRangeRequired: '请填写快速交车时间范围',
    maxNum: '仪式最大数量（1-20）',
    maxNumRequired: '请填写仪式最大数量',
    maxNumRule: '数量介于1-20之间',
    price: '价格',
    min15: '15分钟',
    min30: '30分钟',
    min45: '45分钟',
    min60: '1小时',
    min75: '1小时15分钟',
    min90: '1小时30分钟',
    min105: '1小时45分钟',
    min120: '2小时',
  },

  nonQuick: {
    title: '非快速交车',
    duration: '仪式持续时间',
    durationRequired: '请填写仪式持续时间',
    bayPrepareDuration: '交车场地准备时间',
    bayPrepareDurationRequired: '请填写交车场地准备时间',
    bayCleanDuration: '交车场地清洁时间',
    bayCleanDurationRequired: '请填写交车场地清洁时间',
    price: '价格',
    priceRequired: '请填写价格',
    priceRule: '不能超过99999999.99',
  },

  content: {
    package: '套餐',
    contentTitle: '内容',
    giftTitle: '礼物',
    selectAll: '全选',
    noSelectContent: '未选择套餐{{contentText}}',
    noContent: '暂无数据，请先创建套餐{{contentText}}',
    addDescription: '添加描述',
    descriptionRule: '字数不能超过30字',
    imagePreview: '图片预览',
  },

  approveHistory: {
    title: '审批历史',
    approval: '审批',
  },

  cancelModal: {
    title: '确定取消交车套餐？',
    content: '取消后，您编辑的数据不会被保存，请确认是否依然取消。',
    okText: '取消交车套餐',
  },

  deleteModal: {
    title: '确定删除套餐？',
    content: '删除后，该套餐将不会被保存，请确认是否依然删除。',
    approvalContent: '该套餐已提交审批单 ({{id}}) ，确定删除套餐后审批单也会同步删除。',
    deleteSuccess: '删除成功',
  },

  saveModal: {
    title: '确定保存交车套餐？',
    content:
      '交车套餐编辑保存后，已创建的交车仪式邀请中该交车套餐的信息不会更新。如需使用修改后的交车套餐，请确认修改后启用该交车套餐。',
    saveSuccess: '创建成功',
    updateSuccess: '编辑保存成功',
  },

  disableModal: {
    title: '确定关闭交车套餐？',
    content: '关闭后，创建/编辑交车仪式邀请时，该交车套餐不能被选中，请确认是否依然关闭。',
    disableSuccess: '关闭成功',
    enableSuccess: '开启成功',
  },

  enableModal: {
    cannotEnable: '无法启用',
    cannotEnableContent: (
      highlightClassName: string,
      pkgNo: string,
      pkgName: string
    ): ReactElement => (
      <span>
        一个门店中心快速交车套餐只允许开启使用一个。
        <span className={highlightClassName}>
          当前有快速交车套餐已经在开启使用中（ID：{pkgNo} ，名称：{pkgName}）
        </span>
        ，若开启，请先去关闭当前在使用的另一个套餐。
      </span>
    ),
    changeTitle: '套餐信息有变更，请重新编辑',
    changeOkText: '查看/编辑变更',
    enable: '启用',
    submitApproval: '提交审批',
    changeContent: (highlightClassName: string, operation: string): ReactElement => (
      <span>
        套餐内设定的<span className={highlightClassName}>礼品、内容、交车场地</span>
        的状态发生改变，请重新编辑之后再{operation}。
      </span>
    ),
    enableContent: '是否要保存该交车套餐，请检查套餐内礼品、内容、交车场地是否符合要求。',
    enableApprovalContent:
      '该套餐已提交审批单 ({{flowOrderId}}) ，确定启用套餐后审批单也会同步通过。',
    submitApprovalContent1: '是否要提交该交车套餐，请检查套餐内礼品、内容、交车场地是否符合要求。',
    submitApprovalContent2: '若在审批中发现有内容要变更，可在撤回申请后重新编辑。',
    confirmSave: '确认保存？',
    confirmSubmitApproval: '确认提交审批？',
    directEnable: '直接启用',
    submit: '提交',
  },

  approvalMessage: {
    approveTitle: '套餐审批已通过',
    rejectTitle: '套餐审批被驳回',
    approveDescription: '您提交的{{packageName}}审批已通过。',
    rejectDescription: '您提交的{{packageName}}审批被驳回。',
    viewDetail: '查看详情',
  },
};

export default PackageDetailPage;
