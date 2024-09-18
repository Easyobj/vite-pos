import React from 'react';
const recommendProduct = {
  recommendProductConfiguration: 'Recommend Product Configuration',
  carSeries: 'Car Series',
  modelDescription: 'Model Description',
  modelCode: 'Model Code',
  modelYear: 'Model Year',
  recommendedProduct: 'Recommended Product',
  updateTime: 'Update Time',
  noResultsTitle: 'No Results Found',
  noResultsText: 'Try different keywords or search criteria',
  totalData: (total: number) => `Total ${total} records`,
  leaseProduct: 'Lease Product',
  financialProduct: 'Financial Product',
  configureRecommendedProduct: 'Configure Recommended Product',
  serialNumber: 'Serial Number',
  noRecommendationPlan: 'No Recommendation Plan',
  financialProducts: 'Financial Products',
  leaseProducts: 'Lease Products',
  selectLabel: 'Select Financial/Lease Product',
  selectErrorMessage: 'Please select a recommended product',
  pleaseSelectCars: 'Please select cars first',
  configuration: 'Configuration',
  configureSuccess: 'Configuration Successful',
  noSupportText: 'The following',
  modelConfigFailed: 'Model Configuration Failed',
  noResultsMessage:
    'Please go to the Retail Finance section, add the following vehicles to the product, and try again.',
  totalCars: (num: number) =>
    `Please add or update the recommended product for the selected ${num} models. The configured recommended product is only effective on the Finder Mini Program.`,
  modalText: (nameZh: string, num: number) => (
    <>
      The financial/lease product <span>{`"${nameZh || 'No Recommendation Plan'}"`}</span>
      does not support the following {num}
      vehicles. Please go to the Retail Finance section, add the following vehicles to the product,
      and try again.
    </>
  ),
  model: 'Model',
  modelPlaceholder: 'Please enter model name',
};

export default recommendProduct;
