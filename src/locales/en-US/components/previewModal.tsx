// 图片预览
const PreviewModal = {
  cancel: 'Cancel',
  upload: 'Upload Material',
  add: 'Add Material',
  preUpload: 'Please upload material first',
  edit: 'Edit',
  loading: 'Material uploading, please wait...',
  support: 'Only supports uploading files in {{format}} format',
  limit: 'File {{fileName}} exceeds the size limit of 20M',
  cancelModal: {
    title: 'Cancel Prompt',
    content: 'Do you want to cancel the current operation?',
  },
  confirmModal: {
    title: 'Confirm Material Information',
    okText: 'Confirm Upload',
    placeholder: 'Enter Material Name',
    label: 'Material Name',
    ruleMsg: 'Please enter a material name, no more than 30 characters!',
    warnMsg: 'The material name cannot be modified after upload. Are you sure you want to proceed?',
  },
  ImgPreview: {
    localUpload: 'Local Upload',
    view: 'Preview',
    takePhoto: 'Take Photo',
    edit: 'Edit',
    reset: 'Reset',
    rotate: 'Rotate',
    save: 'Save',
  },
  LocalImgItem: {
    view: 'Preview',
    rotate: 'Rotate',
    delete: 'Delete',
    modal: {
      title: 'Delete Prompt',
      content: 'Do you want to delete the current image?',
    }
  },
  PDFPreview: {
    view: 'Preview',
    delete: 'Delete',
    localUpload: 'Local Upload',
    takePhoto: 'Take Photo',
    warnMsg: 'Non-PDF file previews are not supported. Please view other formats locally.',
    modal: {
      title: 'Delete Prompt',
      content: 'Do you want to delete the current file?',
    }
  }
};

export default PreviewModal;
