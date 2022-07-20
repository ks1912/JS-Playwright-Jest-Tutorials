const { test, expect } = require("@playwright/test");
const faker = require("faker");

exports.SearchAProduct = class SearchAProduct {
  constructor(page) {
    this.page = page;
    this.verifyPopupSubmitButton = page.locator('input[type="submit"]');
    this.clickPopupSubmitButton = page.locator('input[type="submit"]').nth(1);
    this.clickOnSearchBar = page.locator('[aria-label="Search"]');
    this.typeInSearchBox = page.locator('[aria-label="Search"]');
    this.clickOnGoButtonToSearch = page.locator('input:has-text("Go")');
    this.clickOnLenevoLaptop = page.locator(
      '[aria-label="Lenovo"] >> text=Lenovo'
    );
  }
  async waitForSearchPage(page) {
    let wasPageLoaded = false;
    try {
      await page.waitForSelector('[aria-label="Search"]', {
        setTimeout: 120000,
      });
      wasPageLoaded = true;
    } catch (error) {
      console.log(`*******Result page is not loading: ${error}`);
    }
    return wasPageLoaded;
  }
  async waitForSelectedPage() {
    let wasPageLoaded = false;
    try {
      await page.waitForSelector("text=See more answered questions (37)", {
        setTimeout: 120000,
      });
      wasPageLoaded = true;
    } catch (error) {
      console.log(`*******Selected page is not loading: ${error}`);
    }
    return wasPageLoaded;
  }
  async openAmazonWebsite(page, urlToGo) {
    try {
      await page.goto(urlToGo);
    } catch (error) {
      throw `error while opening website: ${error}`;
    }
  }
  async clcikOnSavePopupButton(page) {
    try {
      await page.waitForSelector(this.verifyPopupSubmitButton, {
        setTimeout: 120000,
      });
      await this.clickPopupSubmitButton.click();
    } catch (error) {
      throw `Popup didnot appear: ${error}`;
    }
  }
  async typeAndSearchProduct(page, toBeSearched) {
    try {
      await page.waitForSelector('input[type="submit"]', {
        setTimeout: 120000,
      });
      await this.clickOnSearchBar.click();
      await this.typeInSearchBox.fill(toBeSearched);
      await this.clickOnGoButtonToSearch.click();
    } catch (error) {
      throw `Popup didnot appear: ${error}`;
    }
  }
};
