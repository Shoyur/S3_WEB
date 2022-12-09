const outils = require("./outils");
const { v4: uuidv4 } = require('uuid');
const bd = require("../basedonnees/bdfilms.json");
const env_vars = require("../utilitaires/env_vars");

const getAllFilms = () => {
  return bd.films;
};

const getFilm = (idf) => {
  const leFilm = bd.films.find((unFilm) => unFilm.idf == idf);
  if (!leFilm) {
    return env_vars.MSG_INTROUVABLE;
  }
  return leFilm;
};

const creerFilm = (film) => {
  bd.films.push(film);
  outils.sauvegarderDansBdfilms(bd);
}

const modifierFilm = (idf, req) => {
const indexFilmModifier = bd.films.findIndex(
      (unFilm) => unFilm.idf == idf
    );
    if (indexFilmModifier == -1) {
      return env_vars.MSG_INTROUVABLE;
    }
    // Explications d'une fusion avec l'opérateur spread (Google : MDN Spread)
    // const obj1 = { foo: 'bar', x: 42 };
    //const obj2 = { foo: 'baz', y: 13 };

    // const clonerObj = { ...obj1 };
    // Réponse : { foo: "bar", x: 42 }

    // const fusionnerObj = { ...obj1, ...obj2 };
    // Réponse : { foo: "baz", x: 42, y: 13 }*/

    // On aurait pu le faire manuellement de prendre tous les attributs dans req.body(nouveau)
    // et les mettre dans bd.films[indexFilmModifier]
    const filmModifie = {
      ...bd.films[indexFilmModifier],
      ...req.body,
      datemodification: new Date().toLocaleString("fr-CA", { timeZone: "EST" })
    };

    bd.films[indexFilmModifier] = filmModifie;
    outils.sauvegarderDansBdfilms(bd);
    return filmModifie;
}

const supprimerFilm = (idf) => {
  const indexFilmSupprimer = bd.films.findIndex(
      (unFilm) => unFilm.idf == idf);
    if (indexFilmSupprimer == -1) {
      return env_vars.MSG_INTROUVABLE;
    }
    bd.films.splice(indexFilmSupprimer, 1);
    outils.sauvegarderDansBdfilms(bd);
}

module.exports = { 
  getAllFilms, 
  creerFilm,
  getFilm,
  modifierFilm,
  supprimerFilm
};