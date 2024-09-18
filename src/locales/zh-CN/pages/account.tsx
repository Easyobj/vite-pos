const AccountPage = {
  baseInfo: '基本信息',

  columns: {
    userId: 'PPN账号',
    nameZh: '中文姓名',
    lastName: '英文名',
    bpId: 'BP-ID',
    jobTitle: '职位',
    aggrDealers: '所属门店 & 职位',
    mobile: '绑定手机',
    email: 'PPN邮箱',
    certifiedStatus: '电子签认证',
    dealerCode: '所属门店',
    roles: '对应职位',
    actions: '操作',
  },

  storePositionSettings: {
    storePosition: '所属门店 & 职位设置',
    rangeDescription: '门店及职位的可选范围为该员工所属集团下的所有Dealer Code与职位',
    storeAlreadySelected: '已选择的门店不可再次被选择',
    searchPlaceholder: '按Dealer code或门店名称搜索',
    selectDealerCode: '请选择所属门店',
    selectJobTitle: '请选择职位',
    searchByJobTitle: '按职位搜索',
  },

  placeholder: {
    queryWord: 'PPN账号/中文名/英文名/手机号/邮箱',
    ppnRoles: '按职位搜索',
    nameZh: '请输入中文姓名',
  },

  message: {
    nameZh: '中文名字在2-12个中文之间',
  },

  deleteModal: {
    title: '确定删除员工？',
    content: '删除后，该员工信息将无法找回，请谨慎操作。',
  },

  unBoundModal: {
    title: '解绑手机号码确认',
    content: '是否要进行解除绑定手机号码？解绑后将无法修改。',
  },

  cancelEditModal: {
    title: '确定取消编辑？',
    content: '已编辑的内容尚未保存，取消后将丢失您所做的更改。确定取消编辑吗？',
    okText: '取消编辑',
    cancelText: '关闭',
  },
};

export default AccountPage;
