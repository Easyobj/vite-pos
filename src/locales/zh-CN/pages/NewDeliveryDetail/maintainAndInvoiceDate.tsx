import { ReactNode } from 'react';

const MaintainAndInvoiceDate = {
  unableEdit: '{{docs}} 在未签署状态才支持编辑',
  confirmDelivery: (vDom: ReactNode): ReactNode => {
    return <>当前{vDom}未完成签署，请先签署再确认交车。</>;
  },
  syncDate: (vDom: ReactNode): ReactNode => {
    return <>完善后会同步到{vDom}中。</>;
  },
  // todo syncUpdateMaintainDate 待删除
  syncUpdateMaintainDate: (vDom: ReactNode): ReactNode => {
    return <>保修起始日期已经存在文档中，是否要更新到{vDom}中？</>;
  },
  // todo syncUpdateInvoiceDate 待删除
  syncUpdateInvoiceDate: (vDom: ReactNode): ReactNode => {
    return <>开票日期已经存在文档中，是否要更新到{vDom}中？</>;
  },
  maintainEarlier: (vDom: ReactNode): ReactNode => {
    return <>当前交车单的保修起始时间早于今天，请确认是否要调整，该日期会同步到{vDom}中。</>;
  },
  // todo invalidSignedDoc和invalidSigned 待删除
  invalidSigned: '自动作废已签署的文档',
  invalidSignedDoc: (vDom: ReactNode): ReactNode => {
    return <>修改后将 {vDom}。</>;
  },
  maintainLater: (vDom: ReactNode): ReactNode => {
    return (
      <>当前交车单的保修起始时间晚于当前签署发起时间，请按实际情况调整，该日期会同步到{vDom}中。</>
    );
  },
  maintainEmpty: (vDom: ReactNode): ReactNode => {
    return <>保修起始日期为空，请先完善后再确认完成交车，完善后会同步到{vDom}中。</>;
  },
};
export default MaintainAndInvoiceDate;
