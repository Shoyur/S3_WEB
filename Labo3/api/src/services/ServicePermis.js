const modelPermis = require("../models/ModelPermis");

const getAllPermis = () => {
  return modelPermis.getAllPermis();
};

const getPermis = (idf) => {
  return modelPermis.getPermis(idf);
};

const creerPermis = (permis) => {
  modelPermis.creerPermis(permis);
};

const modifierPermis = (idf, req) => {
  return modelPermis.modifierPermis(idf, req);
};

const supprimerPermis = (idf) => {
  return modelPermis.supprimerPermis(idf);
};

module.exports = {
  getAllPermis,
  getPermis,
  creerPermis,
  modifierPermis,
  supprimerPermis
};