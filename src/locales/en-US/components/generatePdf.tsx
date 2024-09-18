/* eslint-disable max-len */
const GeneratePdf = {
  defaultConfirmContent: 'Are you sure you want to upload the completed and signed file? After uploading, the agreement signing status will change to "Signed"',
  defaultUploadButtonText: 'Upload Agreement',
  errToastMsg: 'Sorry, the total size of the files you added must be within {{maxSizeDes}} to continue uploading',
  emptyToast: 'No file uploaded',
  previewWarn: 'Non-PDF files are not supported for preview. Please view other formats locally.',
  defaultTitle: 'Upload/Photograph Porsche Test Drive Exemption and Indemnity Agreement',
  uploadModal: {
    title: 'Upload Confirmation',
  },
  cancelModal: {
    title: 'Cancel Confirmation',
    content: 'Are you sure you want to cancel the current operation?',
  },
  deleteModal: {
    title: 'Delete Confirmation',
    content: 'Are you sure you want to delete the current file?',
    okText: 'Confirm',
    cancelText: 'Cancel',
  },
  view: 'Preview',
  delete: 'Delete',
};

export default GeneratePdf;
