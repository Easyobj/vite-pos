export const STATUS_T = {
  PENDING: 'Pending',
  OVERDUE: 'Overdue',
  COMPLETED: 'Completed',
  UNHANDLED: 'Unhandled',
  PLANNED: 'Planned',
  INPROGRESS: 'In Progress',
  CANCELED: 'Canceled',
  NOTSUBMITTED: 'Not Submitted',
  APPROVING: 'Approving',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
  INVALIDATED: 'Invalidated',
  YES: 'Yes',
  NO: 'No',
  ALL: 'All',
  CREATED: 'Created',
  NOT_CREATED: 'Not Created',
};

export const LEAD_STATUS_T = {
  UNHANDLED: 'Unprocessed',
  PLANNED: 'In Progress',
  SUCCESS: 'Success',
  REJECT: 'Rejected',
  COMPLETED: 'Completed',
};

export const CAR_TYPE = {
  ALL: 'All',
  NEW_CAR: 'New Car',
  USED_CAR: 'Pre-Owned Car',
};

export const GENDER_T = {
  UNKNOWN: 'Unknown',
  MALE: 'Male',
  FEMALE: 'Female',
};

export const GENDER_STR_T = {
  MALE: 'Mr',
  FEMALE: 'Mrs',
};

export const DCC_RECOMMEND_SOURCE_NAME_T = {
  NVENTORY: 'Inventory',
  ORDER: 'Order',
  DCC_CONFIG: 'DCC Configuration',
};

export const DCC_SOURCE_NAME_T = {
  STORE: 'Store',
  MINI_PROGRAM: 'Mini Program',
};

export const BUY_CAR_T = {
  firstPurchase: 'First purchase of new car',
  additionalPurchase: 'Additional purchase of new car',
  usedCar: 'Used car',
  tradeIn: 'Trade-in for new car',
};

export const PROSPECTS_T = {
  hot: 'Hot(0-3 months)',
  warm: 'Warm(4-6 months)',
  cold: 'Cold(7-12 months)',
  none: 'None(>12 months)',
  all: 'None/Cold/Warm/Hot',
};

export const SCORE_MANUAL_OPTION_T = {
  none: 'No rating',
  cold: 'Cold',
  warm: 'Warm',
  hot: 'Hot',
};

export const TRANSFER_STATUS_T = {
  inProgress: 'In Progress',
  failed: 'Transfer Failed',
  partialSuccess: 'Partially Successful',
  completed: 'Transfer Completed',
};

export const CERTIFIED_STATUS_T = {
  certified: 'Certified',
  uncertified: 'Uncertified',
  toCertify: 'Certify',
  certifying: 'Certifying',
};

export const DEALER_POS_STATUS_T = {
  ACTIVATED: 'Active',
  NOTACTIVATED: 'Not activated',
};
