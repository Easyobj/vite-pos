const QuotationPrint = {
  porschePremiumCustomer: 'Porsche Premium Customer',
  title: 'Quotation Print',
  printButton: 'Print Customer Version',
  customerInfo: 'Customer Information',
  customerName: 'Customer Name',
  companyName: 'Company Name',
  contactNumber: 'Contact Number',
  address: 'Address',
  remark: 'Remark',
  vehicleInfo: 'Vehicle Information',
  vehicleModel: 'Vehicle Model',
  vehicleVin: 'Vehicle VIN',
  pvmsOrderNumber: 'PVMS Order Number',
  vehicleModelCode: 'Vehicle Model Code',
  personalizedConfig: 'Personalized Configuration *',
  bodyCode: 'Body Code',
  bodyColor: 'Body Color',
  interiorCode: 'Interior Code',
  interiorColor: 'Interior Color',
  topColorCode: 'Top Color Code',
  topColor: 'Top Color',
  vehicleQuotation: 'Vehicle Quotation *',
  basicRetailPrice: 'Basic Retail Price',
  configRetailPrice: 'Configuration Retail Price',
  totalRetailPrice: 'Total Retail Price',
  estTransactionPrice: 'Estimated Transaction Price',
  optionalItemsTitle: 'Other Optional Items Quotation *',
  fineAccessories: 'Fine Accessories',
  decorativeAccessories: 'Decorative Accessories',
  serviceProducts: 'Service Products',
  coupon: 'Coupon',
  agencyServiceFee: 'Agency Service Fee',
  financialServiceFee: 'Financial Service Fee',
  estVehicleInsuranceFee: 'Estimated Vehicle Insurance Fee',
  totalPriceTitle: 'Total Sales Price Estimate *',
  estVehicleInsuranceFeeTotal: 'Estimated Vehicle Insurance Fee *',
  estVehiclePurchaseTax: 'Estimated Vehicle Purchase Tax *',
  totalPriceEstimate: 'Total Price Estimate *',
  legalDisclaimer: 'Legal Disclaimer',
  contactConsultant: 'Contact Your Sales Consultant',
  legalProvisions: (hideEstimateLegal: boolean): JSX.Element => (
    <ul>
      <li>
        * The suggested retail prices listed in this quotation are manufacturer's suggested retail
        prices (including VAT) and are for reference only, and do not include transportation costs,
        taxes (except as otherwise specified), licenses, ownership certificates, or other optional
        or regional specific equipment. In particular, the manufacturer's suggested retail price
        (including VAT) does not include the consumption tax required to be levied according to the
        Notice of the Ministry of Finance and the State Administration of Taxation on Matters
        Concerning the Levying of Consumption Tax on Ultra-Luxury Cars effective from December 1,
        2016.
      </li>
      <li>
        * Some personalized configurations may affect delivery time and final vehicle price, and the
        actual transaction price shall be subject to the final signed automobile purchase contract.
      </li>
      <li>
        * Other optional items are available for selection, and some items (including service
        products, agency service fees, and financial service fees) may be provided by third-party
        service providers, and the listed prices are for reference only.
      </li>
      {hideEstimateLegal ? (
        <li>
          * The amounts of estimated vehicle insurance fees and estimated vehicle purchase taxes are
          for reference only.
        </li>
      ) : null}
    </ul>
  ),
};

export default QuotationPrint;
