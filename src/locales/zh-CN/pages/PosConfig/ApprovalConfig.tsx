const ApprovalConfig = {
  newCarTab: '新车',
  pocTab: '易手车',
  recipientTitle: '设置流程收文人',
  recipientDesc: '选中的角色不参与审批，流程审批通过后可收到邮件通知。',
  removeTitle: '删除审批流程提示',
  removeContent: '确认后将删除该轮次所配置的所有审批角色，删除后不可恢复，请谨慎操作。',
  saveSuccess: '审批配置已保存',
  configApprovalRoles: '配置审批角色',
  configDescription:
    '以下配置中，横向可增加审批轮数，纵向可增加转发人员。支持至多配置六轮审批，每轮审批中至多配置六个角色。',
  configDetail:
    '每轮审批中所配置的第一个角色一定会收到待审批内容，而第二至六个审批角色则仅在前一个角色选择“转发”时，才会收到待审批内容。',
  configEnsure: '为确保能正常发起审批，请至少配置第一轮审批角色。',
  roleSelectRequire: '请选择审批角色配置',
  addRole: '添加转发人员',
  addLoop: '添加下一轮审批',
  approvalConfig: '审批功能设置',
  reserveConfig: '暂留功能设置',
  autoApproval: '自动审批',
  openSalesApproval: '开启销售申请审批',
  autoApprovalDesc: '此开关打开后流程将被系统自动审批通过',
  discountValidDuration: '审批通过折扣有效时长',
  vehicleHoldDuration: '车辆暂留时长',
  discountApprovalTips: '折扣审批通过后折扣单有效的时长设置为0 永久有效',
  holdApprovalTips: '暂留审批被通过后将车辆被锁定的时长',
  modifyApprovalTitle: '订单阶段修改报价单提交审批',
  modifyApprovalDesc:
    '此开关开启后，若在订单进行中和订单变更状态下修改报价单中的客户名称、客户类型、车辆、价格及报价可选项等信息，则报价单需要提交折扣申请',
};

export default ApprovalConfig;
