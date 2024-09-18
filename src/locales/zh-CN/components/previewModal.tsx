// 图片预览
const PreviewModal = {
  cancel: '取消',
  upload: '上传资料',
  add: '添加资料',
  preUpload: '请先上传资料',
  edit: '编辑',
  loading: '资料上传中，请稍后……',
  support: '仅支持 {{format}} 文件格式的上传',
  limit: '文件 {{fileName}} 超过了限制大小20M',
  cancelModal: {
    title: '取消提示',
    content: '是否取消当前操作？',
  },
  confirmModal: {
    title: '资料信息确认',
    okText: '确认上传',
    placeholder: '请输入资料名称',
    label: '资料名称',
    ruleMsg: '请输入资料名称，小于等于 30 文字!',
    warnMsg: '上传后资料名称将不可修改，是否确认上传？',
  },
  ImgPreview: {
    localUpload: '本地上传',
    view: '预览',
    takePhoto: '拍照',
    edit: '编辑',
    reset: '重置',
    rotate: '旋转',
    save: '保存',
  },
  LocalImgItem: {
    view: '预览',
    rotate: '旋转',
    delete: '删除',
    modal: {
      title: '删除提示',
      content: '是否删除当前图片？',
    }
  },
  PDFPreview: {
    view: '预览',
    delete: '删除',
    localUpload: '本地上传',
    takePhoto: '拍照',
    warnMsg: '不支持非PDF文件预览， 其他格式请在本地查看。',
    modal: {
      title: '删除提示',
      content: '是否删除当前文件？',
    }
  }
};

export default PreviewModal;
