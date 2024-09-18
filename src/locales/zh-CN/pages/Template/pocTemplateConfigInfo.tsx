const PocTemplateConfigInfo = {
  fileName: '易手车合同模板配置_系统支持的签章字段和预填值字段.xlsx',
  howConfig: '如何配置易手车模板',
  messages: {
    downloadMsg: '下载成功',
  },
  modal: {
    title: '配置说明',
    customer: '客户姓名',
    contactNumber: '联系电话',
    pleaseOpen: '请打开需要上传的word格式合同模板，在需要填写的空白字段处以{{defaultName}}标明 ，其中XXXX为该字段的名称，可根据门店实际情况自定义，例如：{{customerName}} 或 {{contactNumber}} 。',
    fieldShow: '自定义字段名称将展示在管理后台的模板配置界面和销售顾问端的合同编辑页面；模板上传后可通过管理后台的模板配置界面为自定义字段设置字段格式及预填值。',
    signatureConfig: '如需配置模板中签字方的签章，请在配置时选择“信息来源”为“系统预填值”方式，并在下拉列表中直接选择系统支持的8种签章类型，例如：易手车合同专用章、客户签名/签章、总经理签名等。',
    clickHere: '点击此处下载和查看',
    systemSupport: '系统支持的签章字段和预填值字段',
    point: ' 。',
  },
  // t('TemplatePage:PocTemplateConfigInfo.fileName')
};

export default PocTemplateConfigInfo;