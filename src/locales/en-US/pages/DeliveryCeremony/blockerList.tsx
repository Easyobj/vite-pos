// 交车仪式-场地资源管理列表页
const BlockerListPage = {
  title: 'Venue Resource Management',
  titleTooltip:
    'The Venue Resource Management list includes the time occupied by booked handover ceremony invitations and the time occupied by backend administrators (such as CM specialists) when creating venue reservations.',
  createBlocker: 'Create Venue Reservation',
  blocker: 'Venue Reservation',
  create: 'Create ',
  edit: 'Edit ',
  view: 'View ',
  allDay: 'All Day',

  filter: {
    events: 'Event Types',
    bay: 'Handover Venue',
    reserveDate: 'Venue Reservation Date',
    dealer: 'Dealer',
    updateBy: 'Updated By',
    updateDate: 'Updated Date',
    reserver: 'Reserver',
    createDate: 'Creation Date',
  },

  table: {
    blockerNo: 'Reservation Number',
    blockerType: 'Event Type',
    title: 'Reservation Event',
    description: 'Reservation Description',
    bayName: 'Handover Venue',
    blockerDate: 'Venue Reservation Date',
    blockerDateTooltip: 'Sorted by the start date of the venue reservation',
    blockerStartTime: 'Venue Reservation Time',
    dealer: 'Dealer',
    updateTime: 'Updated Time',
    updateBy: 'Updated By',
    createTime: 'Creation Time',
    createBy: 'Reserver',
    operation: 'Operation',
    blockerDetail: 'Venue Reservation Details',
    eventDetail: 'Invitation Details',
  },
};

export default BlockerListPage;
