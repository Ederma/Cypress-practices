describe("login", () => {
  it("deberia logearse exitosamente cuenta convex", () => {
    cy.visit("https://www.login.stagecliengo.com/");

    cy.get("#login-email").type("EderCypress@cliengo.com");
    cy.get("#login-pass").type("Cliengo123");
    cy.get('button[type="submit"]').click();
    //verifica si es visible el modal para cerrarlo
    cy.get("#react-modal .close").then(($el) => {
      if (Cypress.dom.isVisible($el)) {
        cy.get("#react-modal .close").click();
      }
    });
    // verifica el plan de la company mendiante la api de planes
    cy.planType().should("have.property", "status", 200);
    cy.planType().then((response) => {
      expect(response.body).to.have.property("id", "CLIENGO_CONVERSACIONES_CORPORATE"); // true
    });
  });
});
