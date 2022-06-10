// https://docs.cypress.io/api/introduction/api.html

describe("Root page rendering and navigation", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Test root page rendered properly", () => {
    cy.contains("h1", "Vue Shopping Cart");

    cy.get('[data-test-id="cart-link"]').should("have.attr", "href", "/cart");
    cy.get(".prod_image").first().should("have.attr", "src");
  });

  it("Test routing", () => {
    cy.get('[data-test-id="cart-link"]').click();
    cy.url().should("contain", "/cart");

    cy.go("back");

    cy.get(".prod_image").first().click();
    cy.url().should("contain", "/product");
  });
});

describe("Product list: Add/Remove to/from cart features", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Add to cart - updating values", () => {
    cy.get('[data-test-id="on-cart-count-text"]')
      .first()
      .then((cartCount) => {
        const preVal = parseInt(cartCount.text());

        cy.get('[data-test-id="add-to-cart-btn"]').first().click();

        cy.get('[data-test-id="on-cart-count-text"]')
          .first()
          .should("have.text", preVal + 1);
        cy.get('[data-test-id="cart-btn-badge"]').should("have.text", "1");
      });
  });
});
