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

    if (personFromRepublic.data && !JudicialBackground.data.background) {
      const validate = await getLeaflet();
      if (validate.data.calificacion >= 60) {
        console.log(
          `Exito: La persona puede ser agregada al directorio de futuros clientes`
        );
        return "Ok";
      } else {
        console.error(`Error: La persona no puede ser agregada, porque tuvo un valor ${validate.data.calificacion} en nuestro sistema de
calificación de prospectos.`);
        return "Fail";
      }
    } else if (personFromRepublic.data && JudicialBackground.data.background) {
      console.error(
        `Error: La persona no puede ser agregada, porque tiene antecedentes`
      );
      return "Fail";
    }
  } catch (error) {
    console.error(`Error: Validate Endpoints`, error);
  }
}
