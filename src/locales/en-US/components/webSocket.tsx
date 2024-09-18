/* eslint-disable max-len */
import React from 'react';

const WebSocket = {
  maxReconnectError:
    'The message notification connection has failed {{text}} times in a row. To continue trying to connect, you need to refresh the page or log in again.',
  viewDetail: 'View Details',
  gotoView: 'Go to View',
  PMP_CAMPAIGN: {
    message: 'Message Reminder',
    description:
      'Received offline campaign opportunity information pushed by PMP, please go to view and upload the opportunity information. After uploading, the customer and opportunity information will be synchronized to C@P.',
    okText: 'Go Now',
  },
  SIGN_FINISH_NOTICE: {
    message: 'Customer Completed Signing',
    description:
      'Customer {{customerName}} ({{customerTel}}) completed the document signing at {{signTime}}.',
  },
  APPROVE_FINISH_NOTICE: {
    message: 'Document Approved',
    description: 'The document submitted at {{approveTime}} has been approved.',
  },
  ORDER_FINISH_NOTICE: {
    PROCESSING: {
      message: 'Document Activation Failed',
      description: 'The document activation failed, please contact POS technical staff',
    },
    FINISHED: {
      message: 'Order Signed',
      description: 'The document submitted at {{finishTime}} has been activated.',
    },
    CANCELED: {
      message: 'Order Canceled',
      description: 'The current document was voided at {{finishTime}}.',
    },
  },
  AUDIT_FLOW_EXCEPTION_NOTICE: {
    message: 'Approval Process Exception',
    description:
      '{{modelName}}{{flowTypeName}} process exception, please check the details in the approval list and contact the relevant personnel for processing as soon as possible.',
  },
  DEALER_CHANGE_NOTICE: {
    message: 'Store Switched',
    description: 'The store for this account has been switched.',
  },
  SALES_ORDER_CREATE_NOTICE: {
    message: 'Sales Follow-Up Status Updated',
    description:
      'The sales follow-up status for your order {{posOrderCode}} with vehicle {{commNo}} has been updated to "{{vehicleStatus}}".',
  },
  TEST_DRIVE_SIGN_FINISH_NOTICE: {
    message: 'Customer Completed Signing',
    description: (name: string, type: string, curOrderId: number): JSX.Element => (
      <>
        Customer <b>{name}</b> has completed the signing of the {type} order ({curOrderId}). Please
        proceed with the test drive/test ride activity in the APP promptly.
      </>
    ),
  },
  DELIVERY_CHECK_FINISH_NOTICE: {
    message: 'Customer Completed Signing',
    description:
      'The customer has signed the delivery documents. At {{approveTime}}, customer {{customerName}} ({{mobile}}) completed the signing.',
  },
  POS_SYSTEM_NOTICE_PUBLISH_NOTICE: {
    message: 'System Notification',
    description: '',
  },
  APP_LOGOUT_SEND_WEB_NOTICE: {
    message: 'System Message',
  },
  DELIVERY_SIGN_SUCCESS: {
    okText: 'Confirm Delivery',
    cancelText: 'Handle Later',
    message: 'Reminder',
    description:
      'The vehicle {{modelName}}｜{{commNo}} in delivery order {{posOrderCode}} has been signed for delivery. The delivery document {{signedContractName}} has been signed. Do you want to complete the delivery ceremony now?',
  },
  POC_APPROVE_FINISH_NOTICE: {
    QUOTATION: {
      message: 'Sales Application Approved',
      description: (modelName: string, pocOrderCode: string): JSX.Element => (
        <>
          The sales application for the used car order{' '}
          <b>
            {modelName}({pocOrderCode})
          </b>{' '}
          has been approved.
        </>
      ),
    },
    ORDER: {
      message: 'Order Approval Passed',
      description: (modelName: string, pocOrderCode: string): JSX.Element => (
        <>
          The approval for the used car order{' '}
          <b>
            {modelName}({pocOrderCode})
          </b>{' '}
          has passed.
        </>
      ),
    },
    CANCEL: {
      message: 'Order Cancellation Approved',
      description: (modelName: string, pocOrderCode: string): JSX.Element => (
        <>
          The cancellation of the used car order{' '}
          <b>
            {modelName}({pocOrderCode})
          </b>{' '}
          has been approved.
        </>
      ),
    },
  },
  POC_ORDER_FINISH_NOTICE: {
    message: 'Order Signed',
    description: (modelName: string, pocOrderCode: string): JSX.Element => (
      <>
        The used car order{' '}
        <b>
          {modelName}({pocOrderCode})
        </b>{' '}
        has been signed and completed.
      </>
    ),
  },
  POC_ORDER_CANCEL_NOTICE: {
    message: 'Order Canceled',
    description: (modelName: string, pocOrderCode: string): JSX.Element => (
      <>
        The used car order{' '}
        <b>
          {modelName}({pocOrderCode})
        </b>{' '}
        has been canceled.
      </>
    ),
  },
  FDD_CERTIFIED_NOTICE: {
    message: 'Customer Certified',
    description: (customerName: string, customerTel: string): JSX.Element => (
      <>
        The SMS link has been sent to customer <b>{customerName}</b>'s phone <b>{customerTel}</b>.
        Please continue to track the customer's signing status.
      </>
    ),
  },
  POC_SIGN_FINISH_NOTICE: {
    message: 'Customer Completed Signing',
    description: (customerName: string, modelName: string, pocOrderCode: string): JSX.Element => (
      <>
        Customer <b>{customerName}</b> has completed the signing for the used car order{' '}
        <b>
          {modelName}({pocOrderCode})
        </b>
        .
      </>
    ),
  },
  LEAD_SALES_ORDER_CREATE_NOTICE: {
    message: 'Sales Follow-Up Task Created Successfully',
    description:
      'The sales follow-up for customer {{customerName}} ({{bpId}}) has been successfully created. The follow-up time is from {{startDate}} to {{endDate}}. Please complete the task follow-up promptly.',
  },
  USER_CERTIFIED_NOTICE: {
    message: '',
    description: '',
  },
  POC_AUDIT_FLOW_EXCEPTION_NOTICE: {
    message: 'Approval Process Exception',
    description: (modelName: string, posOrderCode: string, flowName: string): JSX.Element => (
      <>
        The approval process for the used car order <br />
        <b>
          {modelName}({posOrderCode})
        </b>
        {flowName} lacks an approver. Please contact the store to coordinate and handle the issue.
      </>
    ),
    TYPE_QUOTATION: 'Sales Application',
    TYPE_ORDER: 'Order Application',
    TYPE_CHANGE: 'Order Change',
    TYPE_CANCEL: 'Order Cancellation',
  },
  QUOTATION_APPROVED_NOTICE: {
    message: 'Discount Application Approved',
    description:
      'The discount application for the new car quote {{modelDesc}} ({{quotationId}}) has been approved. You may continue with subsequent order operations.',
  },
  QUOTATION_REJECT_NOTICE: {
    message: 'Discount Application Rejected',
    description:
      'The discount application for the new car quote {{modelDesc}} ({{quotationId}}) has been rejected. You can modify the quote information on the quote sheet and resubmit the discount application.',
  },

  CUSTOMER_CERTIFICATION_NOTICE: {
    message: 'E-Signature Sent Successfully',
    errorMessage: 'E-Signature Sending Failed',
    description:
      'The signing link has been successfully sent to the customer\'s phone {{customerTel}}. Please remind the customer to perform the e-signature via SMS on their phone. After signing, the document status will change to "Signed".',
  },
  RE_CREATE_CONTRACT_SUCCEED: {
    message: 'Contract Update Notification',
    description: 'The information you modified has been updated in the contract {{posOrderCode}}.',
  },
};

export default WebSocket;
