const { test, expect } = require("@playwright/test");
const { environment } = require("../config");

test("test", async ({ page }) => {
  // Go to https://www.nobroker.in/
  await page.goto(environment.noBroker);
  // Click text=BuyRentCommercial >> div >> nth=1
  await page.locator("text=BuyRentCommercial >> div").nth(1).click();
  // Click [placeholder="Search upto 3 localities or landmarks"]
  await page
    .locator('[placeholder="Search upto 3 localities or landmarks"]')
    .click();
  // Fill [placeholder="Search upto 3 localities or landmarks"]
  await page
    .locator('[placeholder="Search upto 3 localities or landmarks"]')
    .fill("white");
//   await page.waitForSelector(
//     'div[role="option"]:has-text("Whitefield, Bengaluru, Karnataka, India")',
//     {
//       setTimeout: 120000,
//     }
//   );
  // Click div[role="option"]:has-text("Whitefield, Bengaluru, Karnataka, India") >> nth=0
//   await page
//     .locator(
//       'div[role="option"]:has-text("Whitefield, Bengaluru, Karnataka, India")'
//     )
//     .first()
//     .click();
  // Click text=Search
  await page.locator("text=Search").click();
});
