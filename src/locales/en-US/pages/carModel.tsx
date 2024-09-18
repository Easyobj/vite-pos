const CarModelPage = {
  baseInfo: 'Basic Information',
  guaranteeInfo: 'Vehicle Warranty Card Information',
  modelYearsInfo: 'Model Year Vehicle Information',
  editYearModel: 'Edit Model Year Vehicle',
  addYearModel: 'Add Model Year Vehicle',
  emptyYearModel: 'No model year vehicle available, please add and save the car model first',
  columns: {
    modelCode: 'Model Code',
    seriesId: 'Car Series',
    modelDescZh: 'Car Model Name (Chinese)',
    modelDescEn: 'Car Model Name (English)',
    carModelYears: 'Available Model Years',
    carSpecs: 'Vehicle Specifications',
    carPower: 'Vehicle Power Type',
    carType: 'Vehicle Type',

    updateTime: 'Update Time',
    yearModelDescEn: 'Model Year Vehicle Name (English)',
    yearModelDescZh: 'Model Year Vehicle Name (Chinese)',
    modelYear: 'Year',
    marketPriceFlag: 'Price Maintenance',
    marketPrice: 'Model Year Vehicle Price (Yuan)',
    yearPublishFlag: 'On Sale Status',

    actions: 'Actions',
  },
  modelYearsName: '{{text}} Model',
  exportCarModelFileName: 'Car Model.xlsx',
  filter: {
    searchCarModel: 'Search Car Model',
    enterModelCodeOrName: 'Please enter Model Code/Car Model Name',
    carSeries: 'Car Series',
  },
  message: {
    errorMarketPrice: 'Please enter the correct price',
    modelCode:
      '(To ensure compatibility with other systems, please enter the Model Code from PVMS)',
    carModelOnSaleForPOS:
      'Models with status "On Sale" can be used when creating new car opportunities in POS;',
    carModelOnSaleWithPriceForPFS:
      'Models with status "On Sale" and maintained prices can be used in PFS related functions. For example, financial calculators (including toB and toC ends), retail finance scheme configuration in the management backend, etc.',
  },
};

export default CarModelPage;
