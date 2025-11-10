import { test as base } from '@playwright/test';
import { DeliverySiteInformationPage } from './DeliverySiteInformationPage';

/**
 * Fixture that provides a DeliverySiteInformationPage instance
 */
type DeliverySiteFixtures = {
  deliverySitePage: DeliverySiteInformationPage;
};

export const test = base.extend<DeliverySiteFixtures>({
  deliverySitePage: async ({ page }, use) => {
    const deliverySitePage = new DeliverySiteInformationPage(page);
    // Navigate to the page before each test
    await deliverySitePage.goto();
    // Use the fixture
    await use(deliverySitePage);
    // Cleanup after each test (if needed)
  },
});

export { expect } from '@playwright/test';
