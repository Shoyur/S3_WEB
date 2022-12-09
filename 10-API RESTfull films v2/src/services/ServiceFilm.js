const modelFilm = require("../models/ModelFilm");

const getAllFilms = () => {
  return modelFilm.getAllFilms();
};

const getFilm = (idf) => {
  return modelFilm.getFilm(idf);
};

const creerFilm = (film) => {
  modelFilm.creerFilm(film);
};

const modifierFilm = (idf, req) => {
  return modelFilm.modifierFilm(idf, req);
};

const supprimerFilm = (idf) => {
  return modelFilm.supprimerFilm(idf);
};

module.exports = {
  getAllFilms,
  getFilm,
  creerFilm,
  modifierFilm,
  supprimerFilm
};