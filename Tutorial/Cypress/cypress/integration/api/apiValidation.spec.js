/// <reference types="cypress" />

// Declaraing Variable
let api;

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://www.feuji.com/");
  });

  it("displays two todo items by default", () => {
    // API to be validated
    api = "https://www.feuji.com/_api/v2/dynamicmodel";
    // Validate API
    cy.checkForAPIStatus(api);
  });
});
