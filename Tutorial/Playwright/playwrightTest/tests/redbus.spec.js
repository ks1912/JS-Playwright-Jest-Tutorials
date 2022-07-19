const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.redbus.com/
  await page.goto('https://www.redbus.com/');

  // Click button:has-text("Accept All")
  await page.locator('button:has-text("Accept All")').click();

  // Click a:has-text("Buses fromLondon to Oxford")
  await page.locator('a:has-text("Buses fromLondon to Oxford")').click();
  await page.waitForURL('https://www.redbus.com/bus-ticket/london-to-oxford?fromCityName=London&fromCityId=227847&toCityName=Oxford&toCityId=226903&onward=20-Jul-2022&busType=Any&srcCountry=EUR&destCountry=EUR');

  // Click li:has-text("Before 6 am (70)")
  await page.locator('li:has-text("Before 6 am (70)")').click();

  // Click text=Megabus Standard00:01London Heathrow Airport 00h 54m00:55Oxford Thornhill Park a
  await page.locator('text=Megabus Standard00:01London Heathrow Airport 00h 54m00:55Oxford Thornhill Park a').click();

  // Click [id="\37 413802"] >> text=PROCEED
  await page.locator('[id="\\37 413802"] >> text=PROCEED').click();

  // Click text=choose BOARDING POINT
  await page.locator('text=choose BOARDING POINT').click();

  // Click button:has-text("Proceed to book")
  await page.locator('button:has-text("Proceed to book")').click();

  // Click [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').click();

  // Fill [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').fill('Kunal');

  // Press Tab
  await page.locator('[placeholder="First Name"]').press('Tab');

  // Click [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').click();

  // Fill [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').fill('Singh');

  // Press Tab
  await page.locator('[placeholder="Last Name"]').press('Tab');

  // Click [placeholder="Age"]
  await page.locator('[placeholder="Age"]').click();

  // Fill [placeholder="Age"]
  await page.locator('[placeholder="Age"]').fill('24');

  // Click [placeholder="Email ID"]
  await page.locator('[placeholder="Email ID"]').click();

  // Fill [placeholder="Email ID"]
  await page.locator('[placeholder="Email ID"]').fill('abc@gmail.com');

  // Click text=Please select country codePlease enter valid phone number >> div >> nth=0
  await page.locator('text=Please select country codePlease enter valid phone number >> div').first().click();

  // Click [placeholder="Search for country"]
  await page.locator('[placeholder="Search for country"]').click();

  // Fill [placeholder="Search for country"]
  await page.locator('[placeholder="Search for country"]').fill('india');

  // Click text=India >> nth=2
  await page.locator('text=India').nth(2).click();

  // Click [placeholder="Phone"]
  await page.locator('[placeholder="Phone"]').click();

  // Fill [placeholder="Phone"]
  await page.locator('[placeholder="Phone"]').fill('9999888890');

  // Click .slider
  await page.locator('.slider').click();

  // Click #cust-info-back-arrow
  await page.locator('#cust-info-back-arrow').click();

  // ---------------------
  await context.close();
  await browser.close();
})();