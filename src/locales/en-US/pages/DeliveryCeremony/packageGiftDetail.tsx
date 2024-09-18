// 交车仪式-套餐礼物详情页
export const PackageGiftDetailPage = {
  packageGift: 'Package Gifts',
  view: 'View ',
  edit: 'Edit ',
  create: 'Create ',
  giftNo: '(No: {{giftNo}})',
  enableStatus: 'Enable Status',
  enableStatusTooltip:
    'When enabled, this gift can be selected for newly created handover packages. When disabled, new packages cannot select this gift, but existing packages associated with this gift will remain valid.',
  deleteTooltip: 'Cannot be deleted when enabled. Disable it before deleting.',
  editTooltip: 'Cannot be edited when enabled. Disable it before editing.',
  subtitle:
    'Package Gifts are gifts that customers can receive after participating in the handover ceremony, created by PCN roles for stores. After creating and enabling a package gift, it can be selected in the handover package.',
  basicInfo: 'Basic Information',
  giftName: 'Gift Name',
  giftNameRequiredRule: 'Please enter the gift name',
  giftImage: 'Gift Image',
  imageInfo:
    'Maximum size is 20MB. Upload only one image. Supported image formats: JPG, JPEG, PNG. Image aspect ratio should be 1:1.',
  giftImageRequiredRule: 'Please upload the gift image',
  imageWarning:
    'Image aspect ratio is incorrect. The required aspect ratio is: {{resolutionRatio}}. Please re-upload the image.',
  searchLoading: 'Loading data, please wait',
  uploading: 'Uploading, please wait...',

  saveModal: {
    title: 'Save Package Gift',
    content:
      'After saving the package gift, the information of this gift in existing packages will not be updated. If you want to use the modified package gift, please enable it after confirming the modifications.',
    disableSuccess: 'Disabled successfully',
    enableSuccess: 'Enabled successfully',
    createSuccess: 'Created successfully',
    updateSuccess: 'Updated and saved successfully',
  },

  disableModal: {
    title: 'Disable Package Gift',
    content:
      'When disabled, this package gift cannot be selected when editing handover packages. Please confirm if you still want to disable it.',
    okText: 'Disable Package Gift',
  },

  deleteModal: {
    title: 'Delete Package Gift',
    content:
      'After deletion, this package gift will not be saved. Please confirm if you still want to delete it.',
    okText: 'Delete Package Gift',
    deleteSuccess: 'Deleted successfully',
  },

  cancelModal: {
    title: 'Cancel Package Gift',
    content:
      'After cancellation, the edited data will not be saved. Please confirm if you still want to cancel it.',
    okText: 'Cancel Package Gift',
  },
};

export default PackageGiftDetailPage;
