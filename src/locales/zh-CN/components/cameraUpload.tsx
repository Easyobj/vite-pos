const CameraUpload = {
  offLineUpload: {
    defaultUpload: '上传',
    confirmModal: {
      cancel: '取消',
      usePhoto: '使用照片',
      reTake: '重拍',
    }
  },
  uploadPopup: {
    format: '仅支持 {{formatStr}} 文件格式的上传',
    fileSizeRule: '文件 {{fileName}} 超过了限制大小20M',
    takePhoto: '拍照',
    local: '本地上传',
    cancel: '取消',
    fromLocal: '从本地选择',
  },
  takePhoto: {
    defaultTipsMsg: '图片清晰度将影响驾照识别结果，请勿抖动',
  },
  takePhotoNew: {
    defaultTipsMsg: '拍照效果将影响图片清晰度将，请勿抖动',
    maxModal: {
      title: '确认切换至高清模式？',
      content:
        '切换至高清模式时，摄像头会占用系统更多的内存，可能会导致摄像头卡顿等情况，如果切换时遇到问题，可通过重启摄像头或重启系统解决。',
      okText: '切换',
      cancelText: '取消',
    },
    cameraErrorModal: {
      title: '摄像头无法使用',
      exchangeOkText: '切换标清',
      know: '知道了',
      minSubText: '当前高清模式下，摄像头无法使用，请尝试切换至标清模式。',
      reloadSubText: '请重新启用摄像头设备或重启系统。',
    },
    exchangeMin: '切换标清',
    exchangeMax: '切换高清',
  },
};
export default CameraUpload;
