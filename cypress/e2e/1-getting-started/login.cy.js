describe("login", () => {
  it("deberia logearse exitosamente cuenta convex", () => {
    cy.visit("https://www.login.stagecliengo.com/");

    cy.get("#login-email").type("EderCypress@cliengo.com");
    cy.get("#login-pass").type("Cliengo123");
    cy.get('button[type="submit"]').click();
    //puede que esta linea la tenga que editar en un momento

    cy.get("#react-modal .close").then(($el) => {
      if (Cypress.dom.isVisible($el)) {
        cy.get("#react-modal .close").click();
      }
    });
  });
});
