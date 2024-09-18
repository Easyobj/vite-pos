import React from 'react';

const TTRComponent = {
  customerName: (fullName: string, gender: string): JSX.Element => (
    <>
      {fullName}
      <span className="customer-gender"> {gender}</span>
    </>
  ),
  unLeaveCustomerMsg: '{{count}}位 客户未操作离店',
  unSaveFormMsg: '当前表单正在编辑，是否进行保存？',
  newCustomer: { tip: '新客户到店提示', info: '当前已到店，是否接受客户接待请求？' },
  inviteCustomer: { tip: '邀约客户到店提示', info: '已如约到店，确认是否接受并进行客户接待？' },
  rejectedBtn: {
    text: '委婉拒绝',
    showMsg: '拒绝申请已成功发送至TTR',
  },
  receivedLaterBtn: {
    text: '稍后接待',
    showMsg: '接待申请已成功发送至TTR，请尽快处理',
  },
  receivedBtn: {
    text: '立即接待',
    showMsg: '接待请求已成功发送',
  },
};

export default TTRComponent;
