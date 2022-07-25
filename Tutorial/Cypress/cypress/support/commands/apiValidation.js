// Validate API Status Code
Cypress.Commands.add("checkForAPIStatus", (api) => {
  cy.request(api).then((response) => {
    cy.wrap(response.status).should("equal", 200);
  });
});