const { test, expect } = require("@playwright/test");
const { SearchAProduct } = require("../pages/searchAProduct");
const { environment } = require("../config");

test("test", async ({ page }) => {
  // Creating a object
  const searchAProduct = new SearchAProduct(page);

  // Taking the url from enviroment file
  let pageURL = environment.ninetyNineAcres;

  // Opening a webpage
  await searchAProduct.openAmazonWebsite(page, pageURL);

  // Click text=Buying a homeRenting a homeSell/Rent your propertyPG and co-livingBuying commerc >> img[alt="Buying a Home"]
  await page
    .locator(
      'text=Buying a homeRenting a homeSell/Rent your propertyPG and co-livingBuying commerc >> img[alt="Buying a Home"]'
    )
    .click();
  // Click .theader__greyBtm > div:nth-child(2)
  await page.locator(".theader__greyBtm > div:nth-child(2)").click();
  // Click a:nth-child(6) > li >> nth=0
  await page.locator("a:nth-child(6) > li").first().click();
  // Click #d_landmark_inPageSearchBox
  await page.locator("#d_landmark_inPageSearchBox").click();
  // Fill [placeholder="Search city\, locality\, project \/ society\, landmarks\.\.\."]
  await page
    .locator(
      '[placeholder="Search city\\, locality\\, project \\/ society\\, landmarks\\.\\.\\."]'
    )
    .fill("hyderabad");
  // Click text=Hyderabad (All) City
  await page.locator("text=Hyderabad (All) City").click();
  // Wait for api
  const [response] = await Promise.all([
    page.waitForResponse(
      "https://www.99acres.com/api-aggregator/content/locations/rei/srp?*"
    ),
    page.locator('button:has-text("Search")').click(),
  ]);
  // Print the response
  console.log(JSON.stringify(response));
});
