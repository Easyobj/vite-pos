import React from 'react';

const InventoryConfig = {
  title: 'Inventory Configuration',
  subtitle: 'Inventory Sharing Policy Settings',
  description: 'Should the inventory be shared among all stores under the dealer code?',
  paragraph1:
    'Selecting "Enable" will share the current store\'s inventory vehicles with other stores under the same dealer code.',
  paragraph2:
    'Selecting "Disable" will make the current store\'s inventory vehicles visible only to the current store.',
  paragraph3:
    "Whether other stores share their inventory vehicles with the current store is determined by their own settings and is independent of the current store's settings.",
  shareTitle: 'Confirm to share inventory with other stores?',
  shareOkText: 'Confirm Enable',
  shareDesc:
    'After enabling inventory sharing, all stores under the dealer code will see the inventory of this store.',
  notShareTitle: 'Confirm not to share inventory with other stores?',
  notShareOkText: 'Confirm Disable',
  notShareDesc:
    'After disabling inventory sharing, no stores under the dealer code will see the inventory of this store.',
  stockAgeCfg: 'Stock Age Settings',
  stockAgeDesc: 'Stock Age Display',
  financialAge: 'Financial Stock Age',
  physicalAge: 'Physical Stock Age',
  dayConfigTitle: 'Stock Age Classification Interval (Days)',
  dayConfigDesc: 'The selected header will be displayed in the inventory table.',
  grade: 'Grade',
  ge: 'Greater than or equal to (days)',
  le: 'Less than or equal to (days)',
  errorInfo: 'Maximum days must be greater than minimum days',
  openSuccess: 'Inventory sharing enabled successfully!',
  closeSuccess: 'Inventory sharing disabled successfully!',
  setStockAgeMsg: 'Set stock age display to {{text}}',
  verifyErrorInfo:
    'The maximum value of the days interval must be greater than the minimum value and cannot be empty',
  deleteContent:
    'Do you want to proceed with the deletion? After deletion, the content cannot be recovered.',
};

export default InventoryConfig;
