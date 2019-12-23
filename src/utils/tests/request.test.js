import mockAxios from "axios";
import {
  getPersonFromRepublic,
  getJudicialBackground,
  getLeaflet
} from "../request";

describe("request API", () => {
  it("fetches successfully data from an API - getPersonFromRepublic", async () => {
    const data = {
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
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));
    const person = await getPersonFromRepublic("1016987658");
    await expect(person).toEqual({ data: data });
    await expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith("personas/1016987658");
  });

  it("fetches erroneously data from an API  - getPersonFromRepublic", async () => {
    const errorMessage = "Network Error";
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getPersonFromRepublic("1016987658")).rejects.toThrow(
      "Network Error"
    );
  });

  it("fetches successfully data from an API - getJudicialBackground", async () => {
    const data = {
      firstName: "Robinson Andres",
      lastName: "Hernandez Lozano",
      typeDocument: "CC",
      id: "1016987658",
      background: false
    };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));
    const person = await getJudicialBackground("1016987658");
    await expect(person).toEqual({ data: data });
    await expect(mockAxios.get).toHaveBeenCalledTimes(3);
    expect(mockAxios.get).toHaveBeenCalledWith("antecedentes/1016987658");
  });

  it("fetches erroneously data from an API  - getPersonFromRepublic", async () => {
    const errorMessage = "Network Error";
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getJudicialBackground("1016987658")).rejects.toThrow(
      "Network Error"
    );
  });

  it("fetches successfully data from an API - getLeaflet", async () => {
    const data = {
      calificacion: Math.floor(Math.random() * (100 - 0)) + 0
    };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));
    const person = await getLeaflet();
    await expect(person).toEqual({ data: data });
    await expect(mockAxios.get).toHaveBeenCalledTimes(5);
    expect(mockAxios.get).toHaveBeenCalledWith("calificacion");
  });

  it("fetches erroneously data from an API  - getLeaflet", async () => {
    const errorMessage = "Network Error";
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getLeaflet()).rejects.toThrow("Network Error");
  });
});
