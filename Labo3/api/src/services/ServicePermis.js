const modelPermis = require("../models/ModelPermis");

const getAllPermis = () => {
  return modelPermis.getAllPermis();
};

const getPermis = (numero) => {
  return modelPermis.getPermis(numero);
};

const creerPermis = (permis) => {
  modelPermis.creerPermis(permis);
};

const modifierPermis = (numero, req) => {
  return modelPermis.modifierPermis(numero, req);
};

const supprimerPermis = (numero) => {
  return modelPermis.supprimerPermis(numero);
};

module.exports = {
  getAllPermis,
  getPermis,
  creerPermis,
  modifierPermis,
  supprimerPermis
};