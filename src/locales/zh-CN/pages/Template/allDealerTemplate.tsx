// PCN门店模板管理列表页

const AllDealerTemplatePage = {
  title: '门店模板管理',
  totalLabel: '共计模板数量:',
  useFilter: '请先选择筛选条件',

  filter: {
    dealer: '门店',
    dealerFilterPlaceholder: '按门店名称搜索',
    templateType: '模板类型',
  },

  columns: {
    dealer: '门店',
    templateType: '模板类型',
    templateName: '模板名称',
    source: '来源',
    enableStatus: '启用状态',
    createTime: '创建时间',
    updateTime: '更新时间',
    operation: '操作',
  },

  variableGroup: {
    title: '字段分组',
    variableLabel: '字段名',
    variableName: '系统字段名',
    canEdit: '可编辑',
    variableType: '字段类型',
    option: '选项',
    unknownVariable: '系统未识别字段',
    noVariable: '未在模板中识别签署相关的系统字段',
    signConfig: '签署配置',
    info1: '· 此处展示的内容为已识别的签署相关系统字段；',
    info2: '· 如有遗漏的签署方及签署角色，请检查模板中的系统字段；',
  },

  templateConfig: '模板配置',

  operationHistory: {
    title: '操作记录',
    templateName: '模板名称',
    createBy: '操作人',
    type: '操作类型',
    createTime: '操作时间',
    operation: '操作',
    downloadTooltip: '点击下载模板',
    downloadSuccess: '模板下载成功',
    upload: '上传',
    update: '更新',
    refresh: '刷新',
    delete: '删除',
    enable: '启用',
    disable: '禁用',
  },

  watermark: '预填的非真实数据',
};

export default AllDealerTemplatePage;
