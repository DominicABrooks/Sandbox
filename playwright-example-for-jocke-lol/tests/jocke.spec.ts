import { test, expect } from '../page-objects/fixtures';

test.describe('Delivery Site Information Page', () => {
  test('All fields match expected regex patterns', async ({ deliverySitePage }) => {
    const customerResults = await deliverySitePage.customerInformationMatchesRegex({
      name: /[a-zA-Z\s]+/,
      housingType: /\w+/,
      meterLocation: /.+/,
      meterPanel: /.+/,
    });
    expect(Object.values(customerResults).every(v => v)).toBe(true);

    const siteResults = await deliverySitePage.siteInformationMatchesRegex({
      siteID: /\w+/,
      siteAddress: /.+/,
      siteType: /\w+/,
      meterNumber: /\d+/,
      siteStatus: /\w+/,
      startDate: /\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}|\w+\s+\d+,\s+\d{4}/,
    });
    expect(Object.values(siteResults).every(v => v)).toBe(true);

    const billingResults = await deliverySitePage.billingBasisMatchesRegex({
      gridSubscription: /\w+/,
      measurementMethod: /\w+/,
      numberOfPhases: /\d+/,
      meterFuse: /\d+/,
      estimatedAnnualUsage: /\d+/,
    });
    expect(Object.values(billingResults).every(v => v)).toBe(true);

    const networkResults = await deliverySitePage.networkInformationMatchesRegex({
      serviceNumber: /\w+/,
      gridArea: /\w+/,
      typeOfMeasurement: /\w+/,
      constant: /\d+\.?\d*/,
    });
    expect(Object.values(networkResults).every(v => v)).toBe(true);

    const contractResults = await deliverySitePage.contractPartiesMatchesRegex({
      gridSupplier: /[a-zA-Z\s]+/,
      electricityRetailer: /[a-zA-Z\s]+/,
    });
    expect(Object.values(contractResults).every(v => v)).toBe(true);
  });
});
