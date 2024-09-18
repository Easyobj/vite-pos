import { ReactElement } from 'react';

// 核销优惠券组件
const O2ORedeem = {
  redeem: '核销',
  redeemCoupon: '核销优惠券',
  title: '核销{{couponType}}优惠券', // 例如 订单可使用的优惠券 / 试驾单可使用的优惠券
  groupTitle: '{{couponType}}可使用的优惠券',
  otherGroupTitle: '其他可使用的优惠券',
  qrcodeTitle: '小程序同意授权客户信息',
  expired: '二维码已失效，请刷新',
  refresh: '刷新',
  closeQrcode: '关闭扫码',
  qrcodeInfo: '请引导客户微信扫描下方二维码，该二维码有效期为3分钟，若失效请刷新重试。',
  expireDay: '{{validDayCount}}天后失效',
  expireInfo: (currentNode: ReactElement): ReactElement => (
    <span>扫码之后获取的数据将会在{currentNode}。</span>
  ),
  cancel: '取消',
  getCouponInfoFailed: '获取优惠券信息失败',
  close: '关闭',
  failInfo: '获取当前小程序用户优惠券信息失败，请刷新二维码重新扫码。',
  noData: '暂无数据',
  bindModal: {
    bindTitle: '确定绑定小程序账号？',
    rebindTitle: '确定更换绑定小程序账号？',
    unbindTitle: '解除绑定小程序账号',
    bindOk: '绑定',
    rebindOk: '更换绑定',
    unbindOk: '确定解绑',
    bpPhone: 'BP账号手机号为',
    scanPhone: '手机号',
    miniPhone: '小程序手机号',
    bindContent: (
      bpIdPhone: ReactElement,
      customerPhone?: ReactElement,
      className?: string
    ): ReactElement => (
      <>
        该客户的
        <span className={className}>BP账号手机号为{bpIdPhone}</span>，与当前扫码客户
        <span>手机号{customerPhone}不一致</span>
        ，是否需要绑定当前扫码账号？
      </>
    ),
    rebindContent: (
      weChatPhone: ReactElement,
      customerPhone: ReactElement,
      className: string,
      hasImpact?: boolean
    ): ReactElement => (
      <>
        该客户BP账号已绑定过
        <span className={className}>小程序手机号{weChatPhone}</span>，且不是当前扫码的客户
        <span className={className}>手机号{customerPhone}</span>
        。是否要解绑后重新绑定当前扫码账号{hasImpact ? '，更换后以下项目会受到影响：' : '。'}
      </>
    ),
    unbindPrefix: '解绑当前账号后以下项目会受到影响：',
    unbindInfo:
      '一个客户BP只能绑定一个小程序账号。解除绑定当前小程序账号后，还可再次扫码绑定其他小程序账号。是否确认解除绑定？',
    gotIt: '知道了',
    bindNotification: (phone: ReactElement): ReactElement =>
      phone ? <span>已绑定小程序手机号为{phone}。</span> : <>已绑定小程序手机号。</>,
    bindSuccess: '小程序账号绑定成功',
    rebindNotification: (originalPhone: ReactElement, scanPhone: ReactElement): ReactElement => (
      <span>
        已解除绑定小程序手机号{originalPhone}，
        {scanPhone ? `重新绑定的手机号${scanPhone}` : '重新绑定了手机号'}。
      </span>
    ),
    rebindSuccess: '小程序账号换绑成功',
    bindFailed: '未绑定',
    unbindFailed: '未解除绑定小程序账号【{{id}}】',
  },
  couponList: {
    scanAndUpdate: '扫码更新',
    lastUpdateTime: '最后更新时间：',
    expireInfo: '券信息已过期，请扫码获取最新券信息',
    expireDays: '{{expireDays}}天后',
    scanInfo: (days: ReactElement): ReactElement => <>需{days}扫码更新券信息</>,
    cannotRedeem: '不能核销。',
    reason: '不能核销原因：{{reason}}。',
    rule: '规则详情',
    redeemTime: '核销时间：',
    usageRules: '使用规则：',
    usageRange: '使用范围：',
    usageTime: '使用时间：',
  },
};

export default O2ORedeem;
