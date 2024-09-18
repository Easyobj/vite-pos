// 交车仪式-套餐内容详情页
export const PackageContentDetailPage = {
  packageContent: 'Package Contents',
  view: 'View ',
  edit: 'Edit ',
  create: 'Create ',
  contentNo: '(No: {{contentNo}})',
  enableStatus: 'Enable Status',
  enableStatusTooltip:
    'When enabled, this content can be selected for newly created handover packages. When disabled, new packages cannot select this content, but existing packages associated with this content will remain valid.',
  deleteTooltip: 'Cannot be deleted when enabled. Disable it before deleting.',
  editTooltip: 'Cannot be edited when enabled. Disable it before editing.',
  subtitle:
    'Package Contents are the contents that customers can receive after participating in the handover ceremony, created by PCN roles for stores. After creating and enabling a package content, it can be selected in the handover package.',
  basicInfo: 'Basic Information',
  contentName: 'Content Name',
  contentNameRequiredRule: 'Please enter the content name',
  source: 'Source',
  sourceRequiredRule: 'Please select a source',
  contentImage: 'Content Image',
  imageInfo:
    'Maximum size is 20MB. Upload only one image. Supported image formats: JPG, JPEG, PNG. Image aspect ratio should be 1:1.',
  contentImageRequiredRule: 'Please upload the content image',
  imageWarning:
    'Image aspect ratio is incorrect. The required aspect ratio is: {{resolutionRatio}}. Please re-upload the image.',
  searchLoading: 'Loading data, please wait',
  uploading: 'Uploading, please wait...',

  saveModal: {
    title: 'Save Package Content',
    content:
      'After saving the package content, the information of this content in existing packages will not be updated. If you want to use the modified package content, please enable it after confirming the modifications.',
    disableSuccess: 'Disabled successfully',
    enableSuccess: 'Enabled successfully',
    createSuccess: 'Created successfully',
    updateSuccess: 'Updated and saved successfully',
  },

  disableModal: {
    title: 'Disable Package Content',
    content:
      'When disabled, this package content cannot be selected when editing handover packages. Please confirm if you still want to disable it.',
    okText: 'Disable Package Content',
  },

  deleteModal: {
    title: 'Delete Package Content',
    content:
      'After deletion, this package content will not be saved. Please confirm if you still want to delete it.',
    okText: 'Delete Package Content',
    deleteSuccess: 'Deleted successfully',
  },

  cancelModal: {
    title: 'Cancel Package Content',
    content:
      'After cancellation, the edited data will not be saved. Please confirm if you still want to cancel it.',
    okText: 'Cancel Package Content',
  },
};

export default PackageContentDetailPage;
