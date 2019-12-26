// import mockAxios from "axios";
import * as request from "../../request";
import setPersonDirectory from "../directoryPerson";

describe("setPersonDirectory", () => {
  it("Logic - setPersonDirectory - Exito", async () => {
    const person = {
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
    };

    jest.spyOn(request, "getPersonFromRepublic").mockImplementation(() => {
      return {
        data: person
      };
    });

    jest.spyOn(request, "getJudicialBackground").mockImplementation(() => {
      return {
        data: {
          firstName: "Robinson Andres",
          lastName: "Hernandez Lozano",
          typeDocument: "CC",
          id: "1016987658",
          background: false
        }
      };
    });
    jest.spyOn(request, "getLeaflet").mockImplementation(() => {
      return {
        data: {
          calificacion: 60
        }
      };
    });

    const test = await expect(setPersonDirectory({ person }));
    return test.resolves.toMatch("Ok");
  });

  it("Logic - setPersonDirectory - Error: por antecedentes", async () => {
    const person = {
      firstName: "Andres Felipe",
      lastName: "Baquero",
      typeDocument: "CC",
      job: "Estudiante",
      id: "1016585695",
      city: "Bogotá",
      email: "felipe54@gmail.com",
      addres: "Calle 55 # 88-23",
      phone: "3189865869",
      phoneHome: "",
      dateExpedition: "2009-02-23",
      dateBirth: "1992-02-22"
    };

    jest.spyOn(request, "getPersonFromRepublic").mockImplementation(() => {
      return {
        data: person
      };
    });

    jest.spyOn(request, "getJudicialBackground").mockImplementation(() => {
      return {
        data: {
          firstName: "Andres Felipe",
          lastName: "Baquero",
          typeDocument: "CC",
          id: "1016585695",
          background: true
        }
      };
    });
    const test = await expect(setPersonDirectory({ person }));
    return test.resolves.toMatch("Has a history");
  });

  it("Logic - setPersonDirectory - Error: nuestro sistema de calificación de prospectos.", async () => {
    const person = {
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
    };

    jest.spyOn(request, "getPersonFromRepublic").mockImplementation(() => {
      return {
        data: person
      };
    });

    jest.spyOn(request, "getJudicialBackground").mockImplementation(() => {
      return {
        data: {
          firstName: "Robinson Andres",
          lastName: "Hernandez Lozano",
          typeDocument: "CC",
          id: "1016987658",
          background: false
        }
      };
    });
    jest.spyOn(request, "getLeaflet").mockImplementation(() => {
      return {
        data: {
          calificacion: 40
        }
      };
    });

    const test = await expect(setPersonDirectory({ person }));
    return test.resolves.toMatch("Lead rating");
  });

  it("Logic - setPersonDirectory - Datos Diferentes", async () => {
    const person = {
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
      dateBirth: "1995-01-22"
    };

    jest.spyOn(request, "getPersonFromRepublic").mockImplementation(() => {
      return {
        data: {
          ...person,
          dateBirth: "1995-02-01"
        }
      };
    });

    jest.spyOn(request, "getJudicialBackground").mockImplementation(() => {
      return {
        data: {
          firstName: "Robinson Andres",
          lastName: "Hernandez Lozano",
          typeDocument: "CC",
          id: "1016987658",
          background: false
        }
      };
    });

    const test = await expect(setPersonDirectory({ person }));
    return test.resolves.toMatch("Diferent Person");
  });
});
