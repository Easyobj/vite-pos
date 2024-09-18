/* eslint-disable max-len */
export const ORDER_STATUS_T = {
  PROCESSING: 'In Progress',
  FINISHED: 'Signed',
  CHANGING: 'Changing',
  CANCELING: 'Canceling',
  CANCELED: 'Canceled',
};

export const VSO_WARN_TIPS_TEXT_T =
  'Detected that a VSO has not been created for the current order.';

// 导出新文档状态颜色映射常量
export const DOCUMENT_NEW_STATUS_COLORS_T = {
  UN_SIGN: 'Unsigned',
  SIGNING: 'Signing',
  SIGNED: 'Signed',
};

// 导出文档状态颜色映射常量
export const DOCUMENT_STATUS_COLORS_T = {
  UNAPPROVED: 'Unapproved',
  STAY_APPROVAL: 'Pending Approval',
  APPROVED: 'Approved',
  EFFECTIVE: 'Effective',
  INVALIDATED: 'Invalidated',
  IN_EFFECT: 'In Effect',
};

// Exporting constants for signature types
export const SIGN_TYPE_TAG_T = {
  ONLINE: 'E-Signature',
  OFFLINE: 'Offline Signature',
};

// Exporting logistics information columns
export const LOGISTICS_COLUMNS_T = {
  quotaMonth: 'Quota Month',
  frozenDate: 'Order Amendment Freeze Date',
  estimateArrivalPortDate: 'Estimated Arrival Port Date (ETA)',
  expCp8: 'Expected CP 8.0 Day',
  actualArrivalPortDate: 'Actual Arrival Port Date (ATA)',
  paymentDueDate: 'Purchasing Payment Deadline',
  docExpressDate: 'Customs Declaration Dispatch Date',
  docExpressNo: 'Courier Tracking Number',
  declarationArrivalDate: 'Customs Declaration Arrival Date',
  estimateArrivalShopDate: 'Estimated Delivery to Store Date',
  actualArrivalShopDate: 'Arrival at Store Date',
  vehicleDeliveryDate: 'Vehicle Handover Date',
  warrStartDate: 'Warranty Start Date',
};

// Exporting text for identity document types
export const CUSTOMER_IDENTITY_TYPE_TEXT_T = {
  IDENTITY_CARD: 'National Identity Card',
  PASSPORT: 'Passport',
  HONGKONG_PASS: 'Mainland Travel Permit for Hong Kong Residents',
  TAIWAN_PASS: 'Mainland Travel Permit for Taiwan Residents',
  DRIVING_LICENSE: 'Driving License',
  UNIT_CREDIT_CODE: 'Social Credit Code',
};
