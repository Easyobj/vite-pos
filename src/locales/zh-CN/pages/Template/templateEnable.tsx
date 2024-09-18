// PCN文档模板管理-启用条件页

import { ReactElement } from 'react';

const TemplateEnableConfigPage = {
  header: {
    viewTitle: '启用条件',
    editTitle: '设置启用条件',
    validLabel: '模板生效状态：',
    validStatusTooltip:
      '模板生效期间，经销商可使用该模板进行签署操作；模板失效后，经销商端无法查看和操作模板。生效期间您可手动关闭启用开关，关闭后模板状态将更新为“未生效”',
    enableLabel: '启用开关',
  },

  basicInfo: {
    title: '基本条件',
    dealer: '使用门店',
    dealerRequired: '请选择使用门店',
    dealerPlaceholder: '请点击选择支持该模板的门店',
    selectTitle: '选择门店',
    selectAll: '全选',
    groupName: 'Group Name',
    dealerCode: 'Dealer code/门店名称',
    filterByGroupName: '按Group Name搜索',
    filterByDealerCode: '按Dealer code/门店名称搜索',

    signRule: '签署规则',
    signRuleRequired: '请选择签署规则',
    dateTimeType: '模板生效节点',
    dateTimeTypeRequired: '请选择模板生效节点',
    dateTimeTypeTooltip: '在该节点，顾问需编辑该模板，并完成对模板的签署',
    openTimeLabel: '生效时间',
    openTimeTooltip: '模板生效后，启用开关将自动开启，同时模板状态也将自动更新为"已生效"',
    closeTimeLabel: '失效时间',
    closeTimeTooltip: '模板失效后，启用开关将自动关闭，同时模板状态也将自动更新为"未生效"',
    timeConflict: '失效时间需大于生效时间',
  },

  customInfo: {
    title: '自定义条件',
    importing: '导入中...',
    modelCodeRequired: '请导入Model Code & Year',
    downloadSuccess: '下载成功',
    importSuccess: '导入成功',
    import: '导入',
    reImport: '重新导入',
    viewResult: '查看导入明细',
    importFile: '导入文件',
    uploadFile: '上传文件',
    reUpload: '重新上传',
    downloadStep: '1、下载模板后，请根据模板内的要求完善表格内容',
    downloadExcel: '下载空的模板表格',
    importStep: '2、上传填写后的模板',
    importResult: '导入明细',
    acceptWarning: '仅支持 {{acceptSuffix}} 文件格式的上传',
    sizeWarning: '文件 {{fileName}} 超过了限制大小{{maxSize}}',
  },

  enableModal: {
    betweenInfo: '当前模板已计划在 {{openDate}} {{openTime}}~{{closeDate}} {{closeTime}} 内启用，',
    beforeInfo: '当前模板已计划在 {{openDate}} {{openTime}} 后启用，',
    afterInfo: '当前模板已计划在 {{closeDate}} {{closeTime}} 前启用，',
    title: '提醒',
    content: '如需立即启用模板，请进入编辑页清除生效/失效时间后重试。',
    enableSuccess: '启用成功',
  },

  disableModal: {
    title: '确定禁用模板？',
    content: (className: string): ReactElement => (
      <>
        禁用模板后，模板状态将更新为<span className={className}>“未生效”</span>
        ，同时销售顾问将无法选择到该模板来创建合同或协议。已使用该模板创建的合同或协议不受影响，销售顾问仍可以查看或编辑。确定禁用模板?
      </>
    ),
    okText: '禁用',
    disableSuccess: '禁用成功',
  },

  cancelModal: {
    title: '确定取消编辑？',
    content: '已编辑的内容尚未保存，取消后将丢失您所做的更改。确定取消编辑吗？',
    okText: '取消编辑',
  },

  editModal: {
    title: '提示',
    content:
      '当前模板处于启用状态，不支持编辑启用条件，请先禁用模板后重试。禁用模板后，销售顾问将无法选择该模板继续创建合同。已使用该模板创建的合同不受影响，仍可查看或编辑。',
    okText: '禁用并编辑',
  },

  saveSuccess: '保存成功',
};

export default TemplateEnableConfigPage;
