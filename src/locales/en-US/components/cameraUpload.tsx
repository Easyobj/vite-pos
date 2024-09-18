/* eslint-disable max-len */
const CameraUpload = {
  offLineUpload: {
    defaultUpload: 'Upload',
    confirmModal: {
      cancel: 'Cancel',
      usePhoto: 'Use Photo',
      reTake: 'Retake'
    }
  },
  uploadPopup: {
    format: 'Supports uploading only {{formatStr}} file formats.',
    fileSizeRule: 'File {{fileName}} exceeds the 20MB size limit.',
    takePhoto: 'Take Photo',
    local: 'Local Upload',
    cancel: 'Cancel',
    fromLocal: 'Choose from Local',
  },
  takePhoto: {
    defaultTipsMsg: 'Image clarity affects the driving license recognition results. Please avoid shaking.',
  },
  takePhotoNew: {
    defaultTipsMsg: 'Photography quality affects image clarity. Please avoid shaking.',
    maxModal: {
      title: 'Confirm Switching to High-Definition Mode?',
      content: 'When switching to high-definition mode, the camera will occupy more system memory, potentially causing camera lag or other issues. If problems arise during the switch, try restarting the camera or the system to resolve them.',
      okText: 'Switch',
      cancelText: 'Cancel',
    },
    cameraErrorModal: {
      title: 'Camera Unavailable',
      exchangeOkText: 'Switch to Standard Definition',
      know: 'Got It',
      minSubText: 'The camera is unavailable under the current high-definition mode. Please try switching to standard definition mode.',
      reloadSubText: 'Please restart the camera device or reboot the system.',
    },
    exchangeMin: 'Switch to Standard Definition',
    exchangeMax: 'Switch to High Definition',
  },
};
export default CameraUpload;
