import { ReactElement } from "react";

const OffLineDocItem = {
  local: '本地上传',
  takePhoto: '拍照',
  uploadTime: '上传时间：',
  submitSign: '提交签署',
  toOnlineSign: '转线上签',
  changeTemplate: '更换模板',
  upload: '上传',
  withdraw: '撤回',
  reUpload: '重新上传',
  unSign: '“未签署”',
  contentNode: (curNode: ReactElement): ReactElement => (
    <>确认后，所选文档退回至{curNode}状态，可重新编辑再次发起签署。</>
  ),
  signature: '提交签署中',
  toOnlineSigning: '转线上签署中',
  message: {
    deleteMsg: '删除成功！',
    warnMsg: '仅支持20MB以内的JPG、JPEG、PNG、PDF、Docx格式的文档上传',
    revokeMsg: '撤回签署成功。',
    inValidMsg: '作废签署成功。',
    fuelType: '请选择车辆燃料类型',
    signDateMsg: '签署日期更新成功。',
  },
  deleteModal: {
    title: '删除文档',
    content: '删除后，内容将无法找回，请谨慎操作。'
  },
  revokeModal: {
    title: '撤回签署',
    okText: '确认撤回',
  },
  inValidModal: {
    title: '作废签署',
    okText: '确认作废',
  },
  threeModal: {
    title: '选择三包凭证模板',
    okText: '立即编辑',
    subTitle: '请根据车辆燃料类型，选择对应的三包凭证模板。选择模板后将进入编辑页面',
  },
  // 线下签署日期modal
  signDateModal: {
    title: '请填写线下签署日期',
    okText: '保存并预览',
    signDate: '签署日期',
    select: '请选择签署日期',
  },
  // t('NewDeliveryDetailPage:OffLineDocItem.signDateModal.select')
};

export default OffLineDocItem;