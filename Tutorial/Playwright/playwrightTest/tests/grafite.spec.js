const { test, expect } = require("@playwright/test");

test.describe("All test for myntra", () => {
  test("test one", async ({ page }) => {
    // Go to https://www.myntra.com/
    await page.goto("https://www.myntra.com/");
    // Click [placeholder="Search for products\, brands and more"]
    await page
      .locator('[placeholder="Search for products\\, brands and more"]')
      .click();
    // Fill [placeholder="Search for products\, brands and more"]
    await page
      .locator('[placeholder="Search for products\\, brands and more"]')
      .fill("shoes");
    // Click .desktop-submit
    await page.locator(".desktop-submit").click();
    await expect(page).toHaveURL("https://www.myntra.com/shoes");
  });

  test("test two", async ({ page }) => {
    // Go to https://www.myntra.com/
    await page.goto("https://www.myntra.com/");
    // Click .desktop-main >> nth=0
    await page.locator(".desktop-main").first().click();
    await expect(page).toHaveURL("https://www.myntra.com/shop/men");
    // Click div:nth-child(5) > div > div > div > div > div > .container-base > div > .container-container > .row-base > .column-base > a > .img-responsive > .image-image >> nth=0
    await page
      .locator(
        "div:nth-child(5) > div > div > div > div > div > .container-base > div > .container-container > .row-base > .column-base > a > .img-responsive > .image-image"
      )
      .first()
      .click();
    await expect(page).toHaveURL(
      "https://www.myntra.com/footwear?f=Categories%3ACasual%20Shoes%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    );
    // Click text=AfroJackMen Woven Design SneakersSizes: UK6, UK7, UK8, UK9, UK10Rs. 799Rs. 3995(
    const [page1] = await Promise.all([
      page.waitForEvent("popup"),
      page
        .locator(
          "text=AfroJackMen Woven Design SneakersSizes: UK6, UK7, UK8, UK9, UK10Rs. 799Rs. 3995("
        )
        .click(),
    ]);
    // Click button:has-text("10")
    await page1.locator('button:has-text("10")').click();
    // Click text=ADD TO BAG
    await page1.locator("text=ADD TO BAG").click();
    // Click text=1Bag >> span >> nth=0
    await page1.locator("text=1Bag >> span").first().click();
    await expect(page1).toHaveURL("https://www.myntra.com/checkout/cart");
  });

  test("test three", async ({ page }) => {
    // Go to https://www.myntra.com/
    await page.goto("https://www.myntra.com/");
    // Click text=Careers
    await page.locator("text=Careers").click();
    await expect(page).toHaveURL("https://careers.myntra.com/");
    // Click text=Technology Engineering | Product Management | UX Read More >> a
    await page
      .locator(
        "text=Technology Engineering | Product Management | UX Read More >> a"
      )
      .click();
    await expect(page).toHaveURL("https://careers.myntra.com/jobs/technology");
    // Click span:has-text("Job Function")
    await page.locator('span:has-text("Job Function")').click();
  });
});
