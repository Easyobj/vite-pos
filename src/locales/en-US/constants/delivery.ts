export const DELIVERY_STATUS_T = {
  WAIT: 'Awaiting Delivery',
  FOLLOW: 'Pending Follow-up',
  COMPLETE: 'Completed',
};

export const THREE_GUARANTEE_TYPE_T = {
  OIL: 'Petroleum',
  ELECTRIC: 'Electric',
  HYBRID: 'Hybrid',
};

// Delivery Document Signing Status
export const SIGN_STATUS_CONFIG_T = {
  UN_SIGN: 'Unsigned',
  SIGNING: 'Signing',
  SIGNED: 'Signed',
};

export const DELIVERY_INSURANCES_T = {
  comprehensive: 'Commercial Insurance',
  compulsory: 'Compulsory Traffic Insurance',
  accident: 'Driving Accident Insurance',
  brandInsurance: 'Brand Insurance Package',
};

export const INSURANCE_STATUS_T = {
  UN_SUBMITTED: 'Unsubmitted',
  WAIT_FOR_FI: 'Awaiting F&I Transfer',
  SUBMITTED: 'Submitted',
  IN_EFFECTIVE: 'In Effect',
};

export const BRAND_INSURANCE_STATUS_T = {
  UN_SUBMITTED: 'Unsubmitted',
  WAIT_FOR_FI: 'Awaiting F&I Transfer',
  SUBMITTED: 'Submitted',
  IN_EFFECTIVE: 'Combined Payment Successful',
};

export const FORM_MESSAGES_T = {
  number: 'Please enter a number greater than or equal to 0',
  percentage: 'Please enter a percentage between 0 and 100',
};

export const INSURANCE_NAME_T = {
  COMPULSORY: 'Compulsory Traffic Insurance',
  COMPREHENSIVE: 'Commercial Insurance',
  ACCIDENT: 'Driving Accident Insurance',
};

export const DELIVERY_FEEDBACK_STATUS_T = {
  NOT_START: 'Not Signed',
  PROCESSING: 'In Progress',
  FINISHED: 'Signed',
};

export const SAVE_SUCCESS_MESSAGE_T = 'Save Successful!';
// eslint-disable-next-line max-len
export const EMPTY_WARNING_MESSAGE_T =
  'Please select at least one insurance product and service package before submitting the insurance order.';
export const FORMAT_WARNING_MESSAGE_T = 'Input format error, handover failed';
export const HANDOVER_SUCCESS_MESSAGE_T = 'Handover Successful!';

export const BLANK_VALIDATE_T = {
  bpid: 'BP ID',
  posOrderId: 'POS Order Number',
  pvmsOrderId: 'PVMS Order Number',
  vin: 'VIN',
  dealerId: 'Dealer ID',
  dealerCode: 'Dealer Code',
  dealerName: 'Store Name',
  selectedInsurerId: 'Insurance Company',
  vehicleOwnerName: "Vehicle Owner's Name",
  vehicleOwnerPhoneNumber: 'Mobile Phone Number',
  vehicleInfo: 'Vehicle Model',
};
