import {
  getPersonFromRepublic,
  getJudicialBackground,
  getLeaflet
} from "../request";

export default async function setPersonDirectory({ person }) {
  try {
    const [personFromRepublic, JudicialBackground] = await Promise.all([
      getPersonFromRepublic(person.id),
      getJudicialBackground(person.id)
    ]);
    const personRequest = personFromRepublic.data;
    if (
      personRequest.firstName.toLowerCase() ===
        person.firstName.toLowerCase() &&
      personRequest.lastName.toLowerCase() === person.lastName.toLowerCase() &&
      personRequest.dateBirth === person.dateBirth
    ) {
      if (personRequest && !JudicialBackground.data.background) {
        const validate = await getLeaflet();
        if (validate.data.calificacion >= 60) {
          console.log(
            `Exito: La persona puede ser agregada al directorio de futuros clientes`
          );
          return "Ok";
        } else {
          console.error(`Error: La persona no puede ser agregada, porque tuvo un valor inferior a 60 en nuestro sistema de
calificación de prospectos.`);
          return "Lead rating";
        }
      } else if (personRequest && JudicialBackground.data.background) {
        console.error(
          `Error: La persona no puede ser agregada, porque tiene antecedentes judiciales`
        );
        return "Has a history";
      }
    } else {
      console.error(
        `Error: Los datos personales no concuerdan con la identificación de la persona.`
      );
      return "Diferent Person";
    }
  } catch (error) {
    console.error(
      `Error: Validate Endpoints, puede que no tengamos el usuario en base de datos.`,
      error
    );
  }
}
