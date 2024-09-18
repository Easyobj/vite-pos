const GeneratePdf = {
  defaultConfirmContent: '是否上传已完成签署的文件？上传完成后协议签署状态将变成“已签署”',
  defaultUploadButtonText: '上传协议',
  errToastMsg: '抱歉，您添加的文件大小总量必须在{{maxSizeDes}}的以内才可以继续上传',
  emptyToast: '上传文件为空',
  previewWarn: '不支持非PDF文件预览， 其他格式请在本地查看。',
  defaultTitle: '上传/拍摄《保时捷试乘试驾免责保证协议》',
  uploadModal: {
    title: '上传确认',
  },
  cancelModal: {
    title: '取消确认',
    content: '是否要取消当前操作？',
  },
  deleteModal: {
    title: '删除确认',
    content: '是否要删除当前文件？',
    okText: '确认',
    cancelText: '取消',
  },
  view: '预览',
  delete: '删除',
}

export default GeneratePdf;
