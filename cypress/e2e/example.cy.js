// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Test root page rendered properly", () => {
    cy.contains("h1", "Vue Shopping Cart");

    cy.get('[data-test-id="cart-link"]').should("have.attr", "href", "/cart");
    cy.get(".prod_image").should("have.attr", "src");
  });

  it("Test routing", () => {
    cy.get('[data-test-id="cart-link"]').click();
    cy.url().should("contain", "/cart");

    cy.go("back");

    cy.get(".prod_image").first().click();
    cy.url().should("contain", "/product");
  });
});
