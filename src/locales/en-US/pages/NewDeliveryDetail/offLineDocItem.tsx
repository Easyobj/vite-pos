/* eslint-disable max-len */
import { ReactElement } from "react";

const OffLineDocItem = {
  local: 'Local Upload',
  takePhoto: 'Take Photo',
  uploadTime: 'Upload Time: ',
  submitSign: 'Submit for Signature',
  toOnlineSign: 'Convert to Online Sign',
  changeTemplate: 'Change Template',
  upload: 'Upload',
  withdraw: 'Withdraw',
  reUpload: 'Re-upload',
  unSign: '"Unsigned"',
  contentNode: (curNode: ReactElement): ReactElement => (
    <>After confirmation, the selected document will be returned to the {curNode} status, allowing for further editing and re-initiation of the signing process.</>
  ),
  signature: 'Submitting for Signature',
  toOnlineSigning: 'Converting to Online Signing',
  message: {
    deleteMsg: 'Deleted successfully!',
    warnMsg: 'Only JPG, JPEG, PNG, PDF, and Docx files up to 20MB are supported for upload.',
    revokeMsg: 'Signature withdrawal successful.',
    inValidMsg: 'Invalidation of signature successful.',
    fuelType: 'Please select the vehicle\'s fuel type.',
    signDateMsg: 'Update of signing date successful.',
  },
  deleteModal: {
    title: 'Delete Document',
    content: 'After deletion, the content cannot be recovered. Please proceed with caution.',
  },
  revokeModal: {
    title: 'Withdraw Signature',
    okText: 'Confirm Withdrawal',
  },
  inValidModal: {
    title: 'Invalidate Signature',
    okText: 'Confirm Invalidity',
  },
  threeModal: {
    title: 'Select Warranty Certificate Template',
    okText: 'Edit Immediately',
    subTitle: "Please choose the corresponding warranty certificate template based on the vehicle's fuel type. After selecting the template, you will enter the editing page.",
  },
  signDateModal: {
    title: 'Please Enter Offline Signing Date',
    okText: 'Save and Preview',
    signDate: 'Signing Date',
    select: 'Please Select Signing Date',
  },
};

export default OffLineDocItem;