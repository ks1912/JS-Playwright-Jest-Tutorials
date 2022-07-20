const { test, expect } = require("@playwright/test");
const { SearchAProduct } = require("../pages/searchAProduct");
const { environment } = require("../config");

test.describe("feuji api tests", () => {
  test("PQ-001-Intercept Feuji API", async ({ page }) => {
    try {
      // Creating a object
      const searchAProduct = new SearchAProduct(page);
      // Taking the url from enviroment file
      let pageURL = environment.amazonUrl;
      // Opening a webpage
      await searchAProduct.openAmazonWebsite(page, pageURL);
      // Waiting for a page to load
      await searchAProduct.waitForSearchPage(page);
      // What has to be search
      const toBeSearched = "Laptop";
      // Search for Laptops
      await searchAProduct.typeAndSearchProduct(page, toBeSearched);
    } catch (error) {
      throw `PQ-001-Search-Laptop : ${error}`;
    }
  });
});
