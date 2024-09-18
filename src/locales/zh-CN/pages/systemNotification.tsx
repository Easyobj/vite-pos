import React from 'react';

const SystemNotificationPage = {
  title: '系统通知管理',
  create: '创建通知',
  subtitle: '标题&内容',
  searchPlaceholder: '按照标题或内容搜索',
  searchLabel: '查询',
  getCount: (count: number): React.ReactElement => {
    return (
      <>
        共计<span> {count} </span>条数据
      </>
    );
  },
  table: {
    noticeType: '通知类型',
    title: '标题',
    content: '内容',
    publishTime: '发布时间',
    published: '发布状态',
    createTime: '创建时间',
    operation: '操作',
    detail: '查看',
  },
  detail: {
    publishTimeRequired: '请输入发布时间',
    publishTimeRule: '发布时间需大于当前时间',
    warning: '提醒',
    warningContent: '该通知已在预约的发布时间发送成功，{{text}}!',
    editError: '不可再次编辑',
    createSuccess: '创建通知成功！',
    deleteError: '不可删除',
    notificationDetail: '系统通知详情',
    createNotification: '创建系统通知',
    basicInfoTitle: '基础信息',
    noticeTypeRequired: '请输入通知类型',
    titleRequired: '请输入标题',
    contentRequired: '请输入内容',
    publishTimeInfo:
      '用户将在您指定的发布时间或发布时间之后的下一次登陆POS系统时在首页看到弹窗提示。',
    releaseDate: '发布日期',
    releaseDateRequired: '请选择发布日期',
    publishTime: '发布时间(24小时制)',
    linkTitle: '外部链接',
    linkError: '请输入正确的网址信息',
    linkPlaceholder: '例如：https://www.example.com',
    linkText: '链接显示文案',
    linkTextError: '请输入链接显示文案',
    externalLinkTooltip: '最多可添加5个外部链接',
    addLink: '添加外部链接',
  },
  action: {
    deleteTooltip: '已发布的通知不可删除',
    deleteTitle: '删除系统通知',
    deleteContent: '删除后，内容将无法找回，请谨慎操作。',
    editTooltip: '已发布的通知不可编辑',
    cancelEdit: '取消编辑',
    cancelCreate: '取消创建',
    cancelContent: '取消后，已填写的内容将不会被保存，请谨慎操作。',
    abortCancel: '放弃取消',
    confirmCancel: '确认取消',
    published: '已发布',
    pending: '待发布',
  },
};

export default SystemNotificationPage;
