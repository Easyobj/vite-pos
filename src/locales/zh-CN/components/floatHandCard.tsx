import React from 'react';

const FloatHandCard = {
  createBpId: '新建BP-ID',
  receiving: '接待中',
  totalReceiving: (count: number): JSX.Element => (
    <>
      共<b>{count}</b>位
    </>
  ),
  leave: '离店',
  tooltip: (url: string): JSX.Element => (
    <>
      列表中仅包含进店3天内的手卡，超过请至
      <span className="hand-card-link" onClick={() => window.open(url)}>
        手卡模块
      </span>
      查看。
    </>
  ),
};

export default FloatHandCard;
