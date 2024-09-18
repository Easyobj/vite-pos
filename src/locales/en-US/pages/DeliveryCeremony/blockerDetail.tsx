// 交车仪式-场地资源管理详情页
const BlockerDetailPage = {
  blocker: 'Venue Reservation',
  blockerNo: '(No: {{blockerNo}})',
  subtitle:
    'Creating a venue reservation allows you to directly book an enabled venue. Once booked, the venue for that time slot cannot be reserved by others.',

  basicInfo: 'Basic Information',
  dealer: 'Dealer',
  dealerRequiredRule: 'Please enter the dealer',
  bay: 'Handover Venue',
  bayPlaceholder: 'Enter venue name/code',
  bayRequiredRule: 'Please enter the handover venue',
  isAllDay: 'Is All Day Reservation',

  blockerDate: 'Reservation Date',
  blockerDateRequiredRule: 'Please enter the reservation date',
  blockerWarning: 'There should be no other bookings within the selected date range',

  blockerTime: 'Reservation Time',
  blockerTimeRequiredRule: 'Please select the reservation time',

  eventTitle: 'Reservation Event',
  eventTitleRequiredRule: 'Please enter the reservation event',
  eventDescription: 'Reservation Description',
  eventDescriptionTooltip:
    'Adding a note to the venue reservation can help the advisor understand the purpose of the reservation',
  eventDescriptionRequiredRule: 'Please enter the reservation description',

  cancelModal: {
    title: 'Confirm Cancel Venue Reservation?',
    content:
      'After cancellation, the edited data will not be saved. Please confirm if you still want to cancel it.',
    okText: 'Cancel Venue Reservation',
  },

  deleteModal: {
    title: 'Confirm Delete Venue Reservation?',
    content:
      'Once deleted, the existing handover venue reservation will be released. Please confirm if you still want to delete this reservation.',
    deleteSuccess: 'Deleted successfully',
  },

  saveModal: {
    title: 'Confirm Save Venue Reservation?',
    content:
      'After confirming the save, the venue will be reserved according to the selected time slot and will not be available for others during that period.',
    okText: 'Confirm Save',
    saveSuccess: 'Saved successfully',
  },
};

export default BlockerDetailPage;
