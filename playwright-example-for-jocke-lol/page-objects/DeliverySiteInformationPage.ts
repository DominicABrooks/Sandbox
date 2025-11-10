import { Page } from '@playwright/test';
import path from 'path';

export class DeliverySiteInformationPage {
  constructor(readonly page: Page) {}

  async goto() {
  const filePath = path.resolve(__dirname, '../jocke.html');
  await this.page.goto(`file://${filePath}`);
  }

  private getFieldValue(fieldLabel: string) {
    return this.page.locator(`text=${fieldLabel}`).locator('..').locator('p').last();
  }

  private async fieldContentsMatchesRegex(fieldLabel: string, pattern: RegExp): Promise<boolean> {
    const value = await this.getFieldValue(fieldLabel).textContent();
    return pattern.test(value || '');
  }

  async customerInformationMatchesRegex(patterns: {
    name: RegExp;
    housingType: RegExp;
    meterLocation: RegExp;
    meterPanel: RegExp;
  }) {
    return {
      name: await this.fieldContentsMatchesRegex('Name', patterns.name),
      housingType: await this.fieldContentsMatchesRegex('Housing type', patterns.housingType),
      meterLocation: await this.fieldContentsMatchesRegex('Meter location', patterns.meterLocation),
      meterPanel: await this.fieldContentsMatchesRegex('Meter panel', patterns.meterPanel),
    };
  }

  async siteInformationMatchesRegex(patterns: {
    siteID: RegExp;
    siteAddress: RegExp;
    siteType: RegExp;
    meterNumber: RegExp;
    siteStatus: RegExp;
    startDate: RegExp;
  }) {
    return {
      siteID: await this.fieldContentsMatchesRegex('Site ID', patterns.siteID),
      siteAddress: await this.fieldContentsMatchesRegex('Site address', patterns.siteAddress),
      siteType: await this.fieldContentsMatchesRegex('Site type', patterns.siteType),
      meterNumber: await this.fieldContentsMatchesRegex('Meter number', patterns.meterNumber),
      siteStatus: await this.fieldContentsMatchesRegex('Site status', patterns.siteStatus),
      startDate: await this.fieldContentsMatchesRegex('Start date', patterns.startDate),
    };
  }

  async billingBasisMatchesRegex(patterns: {
    gridSubscription: RegExp;
    measurementMethod: RegExp;
    numberOfPhases: RegExp;
    meterFuse: RegExp;
    estimatedAnnualUsage: RegExp;
  }) {
    return {
      gridSubscription: await this.fieldContentsMatchesRegex('Grid subscription', patterns.gridSubscription),
      measurementMethod: await this.fieldContentsMatchesRegex('Measurement method', patterns.measurementMethod),
      numberOfPhases: await this.fieldContentsMatchesRegex('Number of phases', patterns.numberOfPhases),
      meterFuse: await this.fieldContentsMatchesRegex('Meter fuse', patterns.meterFuse),
      estimatedAnnualUsage: await this.fieldContentsMatchesRegex('Estimated annual usage (kWh)', patterns.estimatedAnnualUsage),
    };
  }

  async networkInformationMatchesRegex(patterns: {
    serviceNumber: RegExp;
    gridArea: RegExp;
    typeOfMeasurement: RegExp;
    constant: RegExp;
  }) {
    return {
      serviceNumber: await this.fieldContentsMatchesRegex('Service number', patterns.serviceNumber),
      gridArea: await this.fieldContentsMatchesRegex('Grid area', patterns.gridArea),
      typeOfMeasurement: await this.fieldContentsMatchesRegex('Type of measurement', patterns.typeOfMeasurement),
      constant: await this.fieldContentsMatchesRegex('Constant', patterns.constant),
    };
  }

  async contractPartiesMatchesRegex(patterns: {
    gridSupplier: RegExp;
    electricityRetailer: RegExp;
  }) {
    return {
      gridSupplier: await this.fieldContentsMatchesRegex('Grid supplier', patterns.gridSupplier),
      electricityRetailer: await this.fieldContentsMatchesRegex('Electricity retailer', patterns.electricityRetailer),
    };
  }
}
