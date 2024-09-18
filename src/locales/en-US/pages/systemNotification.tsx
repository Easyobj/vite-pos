import React from 'react';

const SystemNotificationPage = {
  title: 'System Notification Management',
  create: 'Create Notification',
  subtitle: 'Title & Content',
  searchPlaceholder: 'Search by Title or Content',
  searchLabel: 'Search',
  getCount: (count: number): React.ReactElement => {
    return (
      <>
        Total <span>{count}</span> records
      </>
    );
  },
  table: {
    noticeType: 'Notice Type',
    title: 'Title',
    content: 'Content',
    publishTime: 'Publish Time',
    published: 'Publish Status',
    createTime: 'Create Time',
    operation: 'Operation',
    detail: 'View',
  },
  detail: {
    publishTimeRequired: 'Please enter the publish time',
    publishTimeRule: 'Publish time must be later than the current time',
    warning: 'Warning',
    warningContent:
      'This notification has been successfully sent at the scheduled publish time, {{text}}!',
    editError: 'Cannot be edited again',
    createSuccess: 'Notification created successfully!',
    deleteError: 'Cannot be deleted',
    notificationDetail: 'System Notification Details',
    createNotification: 'Create System Notification',
    basicInfoTitle: 'Basic Information',
    noticeTypeRequired: 'Please enter the notice type',
    titleRequired: 'Please enter the title',
    contentRequired: 'Please enter the content',
    publishTimeInfo:
      'Users will see a popup reminder on the homepage at the specified publish time or the next login to the POS system after the publish time.',
    releaseDate: 'Release Date',
    releaseDateRequired: 'Please select the release date',
    publishTime: 'Publish Time (24-hour format)',
    linkTitle: 'External Link',
    linkError: 'Please enter a valid URL',
    linkPlaceholder: 'e.g., https://www.example.com',
    linkText: 'Link Display Text',
    linkTextError: 'Please enter the link display text',
    externalLinkTooltip: 'Up to 5 external links can be added',
    addLink: 'Add External Link',
  },
  action: {
    deleteTooltip: 'Published notifications cannot be deleted',
    deleteTitle: 'Delete System Notification',
    deleteContent: 'After deletion, the content cannot be recovered. Please proceed with caution.',
    editTooltip: 'Published notifications cannot be edited',
    cancelEdit: 'Cancel Edit',
    cancelCreate: 'Cancel Create',
    cancelContent:
      'After canceling, the filled content will not be saved. Please proceed with caution.',
    abortCancel: 'Abandon Cancel',
    confirmCancel: 'Confirm Cancel',
    published: 'Published',
    pending: 'Pending',
  },
};

export default SystemNotificationPage;
