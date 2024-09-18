// 创建VSO按钮
const CreateVSO = {
  createButton: 'Create VSO',
  creating: 'Creating',
  failTitle: 'Unable to Create VSO',
  goToModify: 'Go to Modify',
  orderCreateFail: 'Order not created successfully, DMS binding failed',
  syncSuccess: 'The information you modified has been updated in the contract document',
  bindSuccess: 'DMS binding successful, please create VSO again',
  bindTitle: 'Bind DMS Customer Card?',
  yes: 'Yes',
  no: 'No',
  sameCustomer:
    'The BP has not been bound to a DMS customer card. A customer card with the same content {{currentCardNo}} has been found in DMS. Please select whether to bind it.',
  justBind: "Selecting 'Yes' will bind the BP to the existing customer card.",
  cancelBind:
    "Selecting 'No' will cancel the creation of this VSO. Please log in to DMS to check the customer card information and determine if binding is required.",
  createFailPrefix: 'VSO creation failed. DMS error message:',
  createInfo:
    'A request has been made to DMS to create VSO. It will be automatically updated once the creation is successful.',
  duplicateInfo:
    "A request has been made to DMS to create VSO. Please refresh the page or click 'Create VSO' again to get the creation result.",
  createSuccess: 'VSO created successfully',
};

export default CreateVSO;
