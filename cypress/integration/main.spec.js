describe("Secret-Spots", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("Secret-Spots", () => {
    it("show the correct browser title", () => {
      cy.title().should("include", "Secret-Spots");
    });
    it("show the correct page title", () => {
      cy.get('[data-cy="page-title-text"]').should("contain", "Secret Spots");
    });
    it("navigates to overview page on click", () => {
      cy.get('[data-cy="nav"]')
        .eq(1)
        .click();
      cy.location("pathname").should("include", "map");
    });
  });
});

//   describe("Create", () => {
//     beforeEach(() => {
//       cy.visit("http://localhost:3000/create");
//     });
//     it("show the correct header text", () => {
//       cy.get('[data-cy="header-title"]').should("contain", "Create Card");
//     });
//     it("shows errors for invalid inout", () => {
//       cy.get('[type="submit"]').click();
//       cy.get('[data-cy="input-title"] [data-cy="error"]').should(
//         "contain",
//         "Bitte geben Sie einen Title ein"
//       );
//     });
//   });
// });
