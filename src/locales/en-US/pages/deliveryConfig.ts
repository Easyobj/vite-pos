const DeliveryConfigPage = {
  new: 'New Car',
  poc: 'Used Car',

  resultNotice: 'Delivery Result Notification',
  result: 'Delivery Result',
  resultNoticeDesc: 'Selected roles can receive delivery result notification emails',
  dmsSwitch: 'DMS Check',
  dmsSwitchFunction: 'DMS Check Function Settings',
  openSwitch: 'Enable Check',
  dmsSwitchDesc:
    'When this switch is turned on, a DMS check will be required during the delivery process',
  vlsCertConfig: 'VLS Document Permissions',
  vlsCertConfigDesc:
    'When this switch is turned on, consultants can view and download VLS related documents in the delivery details. The number and content of the documents will match the VLS system, and may vary by port. All documents include: "Import Motor Vehicle Inspection Form", "Import Motor Vehicle Inspection Form", "Compulsory Product Certification Vehicle Conformity Certificate", "Environmental Information Checklist"',
  vlsCertConfigText1:
    '1. When this switch is turned on, consultants can view and download VLS related documents in the delivery details. The number and content of the documents will match the VLS system.',
  vlsCertConfigText2:
    '2. All document types include: "Import Certificate", "Import Motor Vehicle Inspection Form", "Compulsory Product Certification Vehicle Conformity Certificate", "Environmental Information Checklist". The number of documents generated may vary by port. Please refer to the VLS system logic for details.',
  vlsCertConfigTitle: 'Consultant VLS Document Permission Settings',
  openVlsCertConfigTitle: 'Confirm to enable VLS document permissions?',
  openVlsCertConfigContent:
    'After enabling, all sales consultants in this center will be able to view and download the status of VLS documents in the delivery details.',
  closeVlsCertConfigTitle: 'Confirm to disable VLS document permissions?',
  closeVlsCertConfigContent:
    'After disabling, all sales consultants in this center will not be able to view or download the status of VLS documents in the delivery details.',
  openSuccess: 'Enabled successfully',
  closeSuccess: 'Disabled successfully',
};

export default DeliveryConfigPage;
