const AuthorizationApprovalPage = {
  title: 'Authorization Approval',
  subTitle:
    'Support viewing and canceling all delegation approvals within the same dealer. You can also directly initiate delegation for yourself or other approvers (within the same dealer).',
  initiateDelegate: 'Initiate Delegation',
  modalTitle: 'Initiate Delegation',
  okButtonText: 'Initiate',
  selectPrincipalUser: 'Principal',
  selectPrincipalUserTooltip:
    'The range of selectable principals includes employees with approval rights. The system allows you to directly initiate delegation for them.',
  selectPrincipalUserFilterPlaceholder: 'Search by username/PPN account',
  selectPrincipalUserRuleMessage: 'Please select a principal',
  selectDeputyUser: 'Deputy',
  selectDeputyUserTooltip:
    'The range of selectable deputies includes all employees within the same dealer as you.',
  selectDeputyUserRuleMessage: 'Please select a deputy',
  selectDealer: 'Dealer',
  selectDealerFilterPlaceholder: 'Search by dealer name',
  selectDealerRuleMessage: 'Please select a dealer',
  selectDateRangePlaceholderStart: 'Start Date',
  selectDateRangePlaceholderEnd: 'End Date',
  selectDateRangeLabel: 'Delegation Date',
  selectDateRangeTooltip:
    'During the delegation period, the deputy will handle all approval tasks of the principal at the delegated dealer (including new and used cars). Once the time expires or the delegation is manually canceled, the system will revoke the deputy’s permissions.',
  selectDateRangeRuleMessage: 'Please select a delegation date',
  delegateSuccessMessage: 'Delegation successful',
  modalSubtitle:
    'After initiating the delegation, the deputy will be authorized to handle the principal’s approval tasks (excluding the tasks already delegated by the principal). The app will automatically send a delegation notification to the deputy.',
  available: 'To be effective',
  awaiting: 'Effective',
  canceled: 'Expired',
  unavailable: 'Canceled',
  statusList: 'Delegation Status',
  confirmCancelDelegate: 'Are you sure you want to cancel the delegation?',
  confirmCancelDelegateContent:
    'After canceling the delegation, the deputy will no longer be able to handle approval tasks. Are you sure you want to cancel the delegation?',
  cancelDelegateButton: 'Cancel Delegation',
  createTime: 'Creation Time',
  action: 'Action',
  noResults: 'No results found for the current search',
  tryAnotherKeyword: 'Try another keyword or filter condition',
  noData: 'No data available',
  totalData: 'Total 0 items',
};

export default AuthorizationApprovalPage;
