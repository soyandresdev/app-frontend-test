describe("Form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3004/personas/1016987658",
      response: {
        data: {
          firstName: "Robinson Andres",
          lastName: "Hernandez Lozano",
          typeDocument: "CC",
          job: "Programador",
          id: "1016987658",
          city: "Bogotá",
          email: "soyandreshernandez@gmail.com",
          addres: "Calle 21 # 88 a 49",
          phone: "3185896678",
          phoneHome: "",
          dateExpedition: "2012-01-01",
          dateBirth: "1995-02-01"
        }
      }
    }).as("personas");
    cy.route({
      method: "GET",
      url: "http://localhost:3004/antecedentes/1016987658",
      response: {
        data: {
          firstName: "Robinson Andres",
          lastName: "Hernandez Lozano",
          typeDocument: "CC",
          id: "1016987658",
          background: false
        }
      }
    }).as("antecedentes");
    cy.route({
      method: "GET",
      url: "http://localhost:3004/calificacion",
      response: {
        data: {
          calificacion: Math.floor(Math.random() * (100 - 0)) + 0
        }
      }
    }).as("calificacion");
  });

  it("Fomulario Error campos Requeridos", () => {
    cy.get("#save").click();
    cy.get("#firstName-error").should(
      "have.text",
      "Rellena este campo obligatorio."
    );
    cy.get("#lastName-error").should(
      "have.text",
      "Rellena este campo obligatorio."
    );
    cy.get("#typeDocument-error").should(
      "have.text",
      "Selecciona una opción del menú desplegable."
    );
    cy.get("#job-error").should("have.text", "Rellena este campo obligatorio.");
    cy.get("#id-error").should("have.text", "Rellena este campo obligatorio.");
    cy.get("#city-error").should(
      "have.text",
      "Selecciona una opción del menú desplegable."
    );
    cy.get("#email-error").should(
      "have.text",
      "Rellena este campo obligatorio."
    );
    cy.get("#addres-error").should(
      "have.text",
      "Rellena este campo obligatorio."
    );
    cy.get("#phone-error").should(
      "have.text",
      "Rellena este campo obligatorio."
    );
    cy.get("#dateExpedition-error").should(
      "have.text",
      "Selecciona una opción del menú desplegable."
    );
    cy.get("#dateBirth-error").should(
      "have.text",
      "Selecciona una opción del menú desplegable."
    );
  });

  it("Llenar formulario Personas- Usuario", () => {
    cy.get("#firstName").type("Robinson Andres");
    cy.get("#lastName").type("Hernandez Lozano");
    cy.get("#typeDocument").select("CC");
    cy.get("#job").type("Programador");
    cy.get("#id").type("1016987658");
    cy.get("#city").select("Bogotá");
    cy.get("#email").type("soyandreshernandez@gmail.com");
    cy.get("#addres").type("Calle 21 # 88 a 49");
    cy.get("#phone").type("3185896678");
    cy.get("#dateExpedition").type("2012-01-22");
    cy.get("#dateBirth").type("1995-01-21");
    cy.get("#save").click();

    cy.wait("@personas")
      .its("status")
      .should("eq", 200);
    cy.wait("@antecedentes")
      .its("status")
      .should("eq", 200);
    cy.wait("@calificacion")
      .its("status")
      .should("eq", 200);
    // cy.wait(3000);
  });
});
