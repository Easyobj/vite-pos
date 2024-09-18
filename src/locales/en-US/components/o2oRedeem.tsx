/* eslint-disable max-len */
import { ReactElement } from 'react';

// 核销优惠券组件
const O2ORedeem = {
  redeem: 'Redeem',
  redeemCoupon: 'Redeem Coupon',
  title: 'Redeem Coupon of {{couponType}}',
  groupTitle: 'Available Coupon of {{couponType}}',
  otherGroupTitle: 'Other available coupons',
  qrcodeTitle: 'Authorization for Customer Information in Mini Program',
  expired: 'The QR code has expired. Please refresh.',
  refresh: 'Refresh',
  closeQrcode: 'Close QR Code',
  qrcodeInfo:
    'Please guide the customer to scan the QR code below using WeChat. The QR code is valid for 3 minutes. If it expires, please refresh and try again.',
  expireDay: 'expired in {{validDayCount}} days',
  expireInfo: (currentNode: ReactElement): ReactElement => (
    <span>Data Obtained after Scanning will be {currentNode}.</span>
  ),
  cancel: 'Cancel',
  getCouponInfoFailed: 'Failed to retrieve coupon information',
  close: 'Close',
  failInfo:
    'Failed to retrieve coupon information for the current Mini Program user. Please refresh the QR code and scan again.',
  noData: 'No data available',
  bindModal: {
    bindTitle: 'Confirm Binding Mini Program Account?',
    rebindTitle: 'Confirm Changing Bound Mini Program Account?',
    unbindTitle: 'Unbind Mini Program Account',
    bindOk: 'Bind',
    rebindOk: 'Change Binding',
    unbindOk: 'Confirm Unbinding',
    bpPhone: 'BP phone number ',
    scanPhone: 'phone number ',
    miniPhone: 'mini program phone number ',
    bindContent: (
      bpIdPhone: ReactElement,
      customerPhone?: ReactElement,
      className?: string
    ): ReactElement => (
      <>
        The customer's BP account phone number is <span className={className}>{bpIdPhone}</span>,
        which is different from the current scanned customer's phone number{' '}
        <span> {customerPhone}</span>. Do you need to bind the current scanned account?
      </>
    ),
    rebindContent: (
      weChatPhone: ReactElement,
      customerPhone: ReactElement,
      className: string,
      hasImpact?: boolean
    ): ReactElement => (
      <>
        The customer's BP account has already been bound to the mini program phone number{' '}
        <span className={className}> {weChatPhone}</span>, and it is not the phone number of the
        current scanned customer <span className={className}> {customerPhone}</span>. Do you want to
        unbind and rebind the current scanned account
        {hasImpact ? ', and the following items will be affected:' : '.'}
      </>
    ),
    unbindPrefix: 'The following items will be affected after unbinding the current account: ',
    unbindInfo:
      'A customer BP can only be bound to one Mini Program account. After unbinding the current Mini Program account, you can scan and bind another Mini Program account. Are you sure you want to unbind?',
    gotIt: 'Got it',
    bindNotification: (phone: ReactElement): ReactElement =>
      phone ? (
        <span>The Mini Program mobile phone number has been bound: {phone}.</span>
      ) : (
        <>The Mini Program mobile phone number has been bound.</>
      ),
    bindSuccess: 'Mini Program account bound successfully',
    rebindNotification: (originalPhone: ReactElement, scanPhone: ReactElement): ReactElement => (
      <span>
        The Mini Program mobile phone number {originalPhone} has been unbound,
        {scanPhone ? `rebind with ${scanPhone}` : 'and rebind successfully'}.
      </span>
    ),
    rebindSuccess: 'Mini Program account rebound successfully',
    bindFailed: 'bind failed',
    unbindFailed: 'fail to unbind the mini program account【{{id}}】',
  },
  couponList: {
    scanAndUpdate: 'Scan to update',
    lastUpdateTime: 'last update time: ',
    expireInfo: 'Coupon information has expired. Please scan to get the latest coupon information.',
    expireDays: '{{expireDays}} days',
    scanInfo: (days: ReactElement): ReactElement => (
      <>Scan to update coupon information in {days}</>
    ),
    cannotRedeem: 'Cannot be redeemed.',
    reason: 'Reason for inability to redeem: {{reason}}.',
    rule: 'Rule details',
    redeemTime: 'Redeem time:',
    usageRules: 'Usage rules: ',
    usageRange: 'Usage range: ',
    usageTime: 'Valid period: ',
  },
};

export default O2ORedeem;
