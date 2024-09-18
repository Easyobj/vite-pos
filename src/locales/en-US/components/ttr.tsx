import React from 'react';

const TTRComponent = {
  customerName: (fullName: string, gender: string): JSX.Element => (
    <>
      <span className="customer-gender">{gender}. </span>
      {fullName}
    </>
  ),
  unLeaveCustomerMsg: '{{count}} customers have not checked out',
  unSaveFormMsg: 'The current form is being edited. Do you want to save it?',
  newCustomer: {
    tip: 'New customer arrival notification',
    info: 'Customer has arrived. Do you accept the customer reception request?',
  },
  inviteCustomer: {
    tip: 'Invited customer arrival notification',
    info: 'Customer has arrived as scheduled. Confirm if you accept and proceed with customer reception?',
  },
  rejectedBtn: {
    text: 'Polite Refusal',
    showMsg: 'Refusal application has been successfully sent to TTR',
  },
  receivedLaterBtn: {
    text: 'Reception Later',
    showMsg:
      'Reception application has been successfully sent to TTR, please handle it as soon as possible',
  },
  receivedBtn: {
    text: 'Reception Now',
    showMsg: 'Reception request has been successfully sent',
  },
};

export default TTRComponent;
