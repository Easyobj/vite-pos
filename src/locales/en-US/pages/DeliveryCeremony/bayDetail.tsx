// 交车仪式-交车场地详情页
const BayDetailPage = {
  bay: 'Bay',
  create: 'Create ',
  view: 'View ',
  edit: 'Edit ',
  noLabel: 'Number: ',
  enableStatus: 'Enable Status',
  enableStatusTooltip:
    'When enabled, this bay can be selected for newly created packages. When disabled, new packages cannot select this bay, but existing packages associated with this bay will remain valid.',
  deleteTooltip: 'Cannot be deleted when enabled. Disable the enable status before deleting.',
  editTooltip: 'Cannot be edited when enabled. Disable the enable status before editing.',
  subtitle:
    'Bay management helps stores manage the resources of handover ceremony locations. After creating and enabling a handover ceremony location, it can be selected and associated with corresponding handover packages. Locations can be created by store roles or PCN roles to assist specific stores.',

  basicTitle: 'Basic Information',
  bayName: 'Bay Name',
  BayNameRequired: 'Please enter the bay name',
  dealer: 'Dealer',
  dealerSearchPlaceholder: 'Search Dealers',
  dealerRequired: 'Please select a dealer',

  reserveTitle: 'Available Reservation Time',
  weekdayAm: 'Weekday Morning',
  weekdayPm: 'Weekday Afternoon',
  saturdayAm: 'Saturday Morning',
  saturdayPm: 'Saturday Afternoon',
  sundayAm: 'Sunday Morning',
  sundayPm: 'Sunday Afternoon',
  selectStartTime: 'Select start time',
  selectEndTime: 'Select end time',
  enableSuccess: 'Enabled successfully',
  disableSuccess: 'Disabled successfully',

  saveModal: {
    title: 'Save Bay',
    content:
      'After saving the bay, the bay information in existing packages will not be updated. If you want to use the modified bay, please enable it after confirming the modifications.',
    createSuccess: 'Created successfully',
    updateSuccess: 'Updated and saved successfully',
  },

  closeModal: {
    title: 'Close Bay',
    content:
      'When closed, the bay cannot be selected when creating/editing bays. Please confirm if you still want to close it.',
  },

  deleteModal: {
    title: 'Delete Bay',
    content:
      'After deletion, the bay will not be saved. Please confirm if you still want to delete it.',
    deleteSuccess: 'Deleted successfully',
  },

  cancelModal: {
    title: 'Cancel Bay',
    content:
      'After cancellation, the edited data will not be saved. Please confirm if you still want to cancel it.',
    okText: 'Cancel Bay',
    cancelText: 'Discard',
  },
};

export default BayDetailPage;
