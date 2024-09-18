import { ReactElement } from 'react';

// 交车仪式-交车套餐详情页
const PackageDetailPage = {
  package: 'Delivery Package',
  packageApproval: 'Delivery Package Approval Details',
  packageNo: '(Number: {{packageNo}})',
  enableStatus: 'Enable Status',
  disableTooltip:
    'Cannot be enabled during {{editOrCreateText}}, can be operated after {{editOrCreateText}} is completed',
  enableStatusTooltip1:
    'When enabled, the newly created delivery ceremony invitations can select this delivery package.',
  enableStatusTooltip2:
    'When disabled, the newly created delivery ceremony invitations cannot select this delivery package. However, existing invitations using this package will still remain valid.',
  lastUpdateTimeInfo: ' Last update time for this detail:',
  subtitle:
    'Delivery packages are styles of delivery ceremonies that customers can choose during the vehicle delivery process. Once created and enabled, these packages can be selected in the invitation for the delivery ceremony.',

  appPreview: 'App Preview',
  previewInfo:
    'The scrollbar is only present during the preview and does not exist in the actual app. This preview is for illustrative purposes only, and the actual effect may vary in the app.',
  waterMark: 'For reference only',

  free: 'Limited Time Free',
  duration: 'Ceremony duration: approximately {{ceremonyDuration}} minutes',
  theme: 'Theme includes',
  packageInfo: 'Package Description',
  gift: 'Exquisite Gift',

  approve: {
    apply: 'Submit Approval',
    withdraw: 'Withdraw',
    approve: 'Approve',
    reject: 'Reject',

    withdrawTitle: 'Confirm Withdrawal of Approval?',
    withdrawContent: 'After withdrawing the approval, you can edit the content again.',
    withdrawSuccess: 'Withdrawal Successful',
    submitSuccess: 'Submission Successful',

    confirmTitle: 'Confirm {{operation}} Approval?',
    approveInfo: 'After approval, the CM can make the package available for customers to choose.',
    rejectReason: 'Rejection Reason',
    rejectReasonPlaceholder: 'Please enter the rejection reason...',
    rejectReasonRequired: 'Please enter the rejection reason',
  },

  typeSelect: {
    selectType: 'Please select a delivery ceremony type first',
    label: 'Delivery Ceremony Type',
    quickInfo:
      'Set the delivery location, and the package is free. Only one quick delivery package can be created per dealership.',
    nonQuickInfo:
      'Set the price, set the delivery location, and there is no limit on the quantity.',
  },

  basicInfo: {
    title: 'Basic Information',
    packageName: 'Package Name',
    packageNameRequired: 'Please enter the package name',
    packageSubtitle: 'Subtitle',
    packageSubtitleRequired: 'Please enter the subtitle',
    packageSubtitleTooltip: 'Used to provide additional information about the package',
    dealer: 'Dealer',
    dealerRequired: 'Please enter the dealer',
    bay: 'Delivery Location',
    bayRequired: 'Please enter the delivery location',
    packageDescription: 'Description',
    packageDescriptionRequired: 'Please enter the package description',
    packageDescriptionTooltip: 'Used to provide a detailed description of the package',
    bayInvalid: 'The delivery location is no longer valid. Please select again.',
  },

  imageInfo: {
    packageSimpleImage: 'Package Thumbnail Image',
    simpleImageTooltip:
      'Displayed on the homepage as the theme card after selecting the delivery ceremony. It should be consistent with the style and elements of the theme.',
    simpleImageRatio: 'Image aspect ratio: 2:3',
    simpleImageRequired: 'Package thumbnail image is required',

    packageDetailImage: 'Package Detail Image',
    detailImageTooltip:
      'Used for customers to view the details of the package and attract them to choose this theme.',
    detailImageRatio: 'Image aspect ratio: 4:3',
    detailImageRequired: 'Package detail image is required',

    packageCardImage: 'Package Card Image',
    cardImageTooltip:
      'Displayed in the package details, customers can have a better understanding of various aspects of the theme through the combination of 4 images. It is recommended to use focused images with different elements.',
    cardImageRatio1: 'Image aspect ratio: 3:2',
    cardImageRatio2: 'Image aspect ratio: 2:3',
    cardImageRequired: 'Package card image is required',

    formatInfo1: 'Maximum size: 20MB, upload only one image, supports JPG, JPEG, PNG formats',
    formatInfo2: 'Maximum size per image: 20MB, supports JPG, JPEG, PNG formats',
    imageWarning:
      'The image aspect ratio is incorrect. The required ratio is: {{resolutionRatio}}. Please upload again.',
  },

  quick: {
    title: 'Quick Delivery',
    duration: 'Ceremony Duration',
    durationRequired: 'Please enter the ceremony duration',
    timeRange: 'Quick Delivery Time Range',
    clear: 'Clear',
    timeRangeRequired: 'Please enter the quick delivery time range',
    maxNum: 'Maximum Number of Ceremonies (1-20)',
    maxNumRequired: 'Please enter the maximum number of ceremonies',
    maxNumRule: 'The quantity must be between 1 and 20',
    price: 'Price',
    min15: '15 minutes',
    min30: '30 minutes',
    min45: '45 minutes',
    min60: '1 hour',
    min75: '1 hour 15 minutes',
    min90: '1 hour 30 minutes',
    min105: '1 hour 45 minutes',
    min120: '2 hours',
  },

  nonQuick: {
    title: 'Non-Quick Delivery',
    duration: 'Ceremony Duration',
    durationRequired: 'Please enter the ceremony duration',
    bayPrepareDuration: 'Delivery Location Preparation Time',
    bayPrepareDurationRequired: 'Please enter the delivery location preparation time',
    bayCleanDuration: 'Delivery Location Cleaning Time',
    bayCleanDurationRequired: 'Please enter the delivery location cleaning time',
    price: 'Price',
    priceRequired: 'Please enter the price',
    priceRule: 'Cannot exceed 99999999.99',
  },

  content: {
    package: 'Package',
    contentTitle: 'Content',
    giftTitle: 'Gift',
    selectAll: 'Select All',
    noSelectContent: 'No selected {{contentText}} in the package',
    noContent: 'No data available. Please create {{contentText}} in the package first',
    addDescription: 'Add Description',
    descriptionRule: 'Maximum 30 characters allowed',
    imagePreview: 'Image Preview',
  },

  approveHistory: {
    title: 'Approval History',
    approval: 'Approval ',
  },

  cancelModal: {
    title: 'Are you sure you want to cancel the delivery package?',
    content:
      'After cancellation, the data you have edited will not be saved. Please confirm if you still want to cancel.',
    okText: 'Cancel Delivery Package',
  },

  deleteModal: {
    title: 'Are you sure you want to delete the package?',
    content:
      'After deletion, the package will not be saved. Please confirm if you still want to delete.',
    approvalContent:
      'This package has been submitted for approval ({{id}}). Deleting the package will also delete the associated approval form.',
    deleteSuccess: 'Deletion successful',
  },

  saveModal: {
    title: 'Are you sure you want to save the delivery package?',
    content:
      'After the delivery package is saved, the information of the package in the created delivery ceremony invitations will not be updated. If you want to use the modified delivery package, please enable it after confirming the modifications.',
    saveSuccess: 'Creation successful',
    updateSuccess: 'Edit saved successfully',
  },

  disableModal: {
    title: 'Are you sure you want to disable the delivery package?',
    content:
      'After disabling, the package cannot be selected when creating/editing delivery ceremony invitations. Please confirm if you still want to disable.',
    disableSuccess: 'Disabled successfully',
    enableSuccess: 'Enabled successfully',
  },

  enableModal: {
    cannotEnable: 'Unable to enable',
    cannotEnableContent: (
      highlightClassName: string,
      pkgNo: string,
      pkgName: string
    ): ReactElement => (
      <span>
        Only one Quick Delivery package is allowed to be enabled in a store.
        <span className={highlightClassName}>
          There is already a Quick Delivery package enabled (ID: {pkgNo}, Name: {pkgName})
        </span>
        . If you want to enable this package, please first disable the currently enabled package.
      </span>
    ),
    changeTitle: 'Package information has changed, please re-edit',
    changeOkText: 'View/Edit Changes',
    enable: 'Enable',
    submitApproval: 'Submit Approval',
    changeContent: (highlightClassName: string, operation: string): ReactElement => (
      <span>
        The status of the{' '}
        <span className={highlightClassName}>gifts, content, and delivery locations</span>&nbsp; set
        in the package has changed. Please re-edit before {operation}.
      </span>
    ),
    enableContent:
      'Do you want to save this delivery package? Please check if the gifts, content, and delivery locations in the package meet the requirements.',
    enableApprovalContent:
      'This package has been submitted for approval (Flow Order ID: {{flowOrderId}}). Enabling the package will also approve the associated approval form.',
    submitApprovalContent1:
      'Do you want to submit this delivery package? Please check if the gifts, content, and delivery locations in the package meet the requirements.',
    submitApprovalContent2:
      'If there are any changes required during the approval process, you can re-edit the package after withdrawing the application.',
    confirmSave: 'Confirm Save?',
    confirmSubmitApproval: 'Confirm Submit Approval?',
    directEnable: 'Direct Enable',
    submit: 'Submit',
  },

  approvalMessage: {
    approveTitle: 'Package Approval Approved',
    rejectTitle: 'Package Approval Rejected',
    approveDescription: 'The approval for {{packageName}} that you submitted has been approved.',
    rejectDescription: 'The approval for {{packageName}} that you submitted has been rejected.',
    viewDetail: 'View Details',
  },
};

export default PackageDetailPage;
