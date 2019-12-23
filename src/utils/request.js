import API from "./api";

async function getPersonFromRepublic(id) {
  return await API.get(`personas/${id}`);
}

async function getJudicialBackground(id) {
  return await API.get(`antecedentes/${id}`);
}

async function getLeaflet() {
  return await API.get(`calificacion`);
}

export { getPersonFromRepublic, getJudicialBackground, getLeaflet };
