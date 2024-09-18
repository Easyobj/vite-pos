/* eslint-disable max-len */
export const PRE_ORDER_STATUS_T = {
  PRE_RESERVED: 'Pre-Reserved',
  DEPOSIT_REFUND: 'Deposit Refunded',
  FINISHED: 'Completed',
};

export const ONLINE_ORDER_T = 'Online Order: ';

export const PRE_ORDER_ALERT_TEXT_T = {
  EMPTY: 'No Online Order Found',
  PRE_RESERVED:
    'Please ensure the customer has paid the down payment before initiating the contract signing. Submit for approval after signing is complete.',
  DEPOSIT_REFUND:
    'The online order has been refunded. The customer will no longer enjoy the privileges associated with the online order.',
  FINISHED:
    'The customer has confirmed the transfer. The deposit has been moved to the dealership’s account.',
  TRANSFER_READY:
    'Please remind the customer to confirm the payment in the mini program as it has not been processed yet.',
};

export const NOT_ADD_ADDITIONAL_PROTOCOL =
  'The order has not included the online order benefit addendum agreement';
