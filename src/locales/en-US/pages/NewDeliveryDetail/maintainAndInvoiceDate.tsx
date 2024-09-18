import { ReactNode } from "react";

const MaintainAndInvoiceDate = {
  unableEdit: '{{docs}} Editing is only supported when unsigned.',
  confirmDelivery: (vDom: ReactNode): ReactNode => {
    return <>
      The current {vDom} has not been fully signed. Please sign first before confirming delivery.
    </>
  },
  syncDate: (vDom: ReactNode): ReactNode => {
    return <>
      It will be synchronized to the {vDom} upon completion.
    </>
  },
  syncUpdateMaintainDate: (vDom: ReactNode): ReactNode => {
    return <>
      The warranty start date already exists in the document. Do you want to update it to the {vDom}?
    </>
  },
  syncUpdateInvoiceDate: (vDom: ReactNode): ReactNode => {
    return <>
      The invoicing date already exists in the document. Do you want to update it to the {vDom}?
    </>
  },
  maintainEarlier: (vDom: ReactNode): ReactNode => {
    return <>
      The warranty start date on the current delivery sheet is earlier than today. Please confirm if you wish to adjust; this date will be synchronized to the {vDom}.
    </>
  },
  invalidSigned: 'Automatically invalidates the signed document',
  invalidSignedDoc: (vDom: ReactNode): ReactNode => {
    return <>
      After modification, it will {vDom}.
    </>
  },
  maintainLater: (vDom: ReactNode): ReactNode => {
    return <>
      The warranty start date on the current delivery sheet is later than the initiation time of the current signing. Please adjust according to the actual situation; this date will be synchronized to the {vDom}.
    </>
  },
  maintainEmpty: (vDom: ReactNode): ReactNode => {
    return <>
      The warranty start date is empty. Please complete it before confirming the delivery. Upon completion, it will be synchronized to the {vDom}.
    </>
  },
};

export default MaintainAndInvoiceDate;