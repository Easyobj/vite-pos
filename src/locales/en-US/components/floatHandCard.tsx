import React from 'react';

const FloatHandCard = {
  createBpId: 'Create BP-ID',
  receiving: 'Receiving',
  totalReceiving: (count: number): JSX.Element => (
    <>
      Total <b>{count}</b>
    </>
  ),
  leave: 'Leave',
  tooltip: (url: string): JSX.Element => (
    <>
      The list only includes hand cards within 3 days of entry. Please go to the &nbsp;
      <span className="hand-card-link" onClick={() => window.open(url)}>
        Hand Card module
      </span>
      &nbsp; for more。
    </>
  ),
};

export default FloatHandCard;
