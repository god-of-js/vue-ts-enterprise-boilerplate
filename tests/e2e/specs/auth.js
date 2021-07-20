// https://docs.cypress.io/api/introduction/api.html

describe("@/views/authentication/login", () => {
  it("Button remains disabled when invalid credentials are inputted.", () => {
    cy.visit("/");
    // Inputting wrong details.
    cy.get('input[name="email"]').type("badUsername");
    cy.get('input[name="password"]').type("badpsd");

    // Expect button to be disabled.
    cy.get(":button").should("be.disabled");
  });
  it("Button becomes abled when correct info is set", () => {
    cy.visit("/");
    // Inputting correct details.
    cy.get('input[name="email"]').type("user@name.com");
    cy.get('input[name="password"]').type("goodpass");

    // Expect button to be abled.
    cy.get(":button").should("not.be.disabled");
  });
  it("Successful login invokes a modal", () => {
    // Submit the login form
    cy.contains("button", "SIGN IN").click();
    cy.get("#modal", { timeout: 10000 }).should("exist");
  });
  it("Modal closes when close button is clicked.", () => {
    // // Close the modal.
    cy.contains("button", "CLOSE or PRESS ESC").click();
    cy.get("#modal").should("not.exist");
  });
});
