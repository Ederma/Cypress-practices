import config from "../../support/config"
describe("login", () => {

  it("deberia logearse exitosamente cuenta convex", () => {
    cy.viewport(1440,716)
    // orientación para telefonos "landscape","portrait"
    cy.visit(config.loginCliengo);


    cy.get("#login-email").type(config.emailConvex);
    cy.get("#login-pass").type(config.PasswordConvex);
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
      expect(response.body).to.have.property("id", config.PlanConversation); // true
    });
  });
});
