const serviceFilms = require("../services/ServiceFilm");
const outils = require("../models/outils");
const env_vars = require("../utilitaires/env_vars");

// Permet  de générer des clés voir sur Google : npm uuid
const { v4: uuidv4 } = require('uuid');
const url = require("url");
const getAllFilms = (req, res) => {
  // apiKeys=[uuidv4(),"abcd"]; //uuidv4() pour générer des clés
  // Du module url on va faire appel à req.query.apiKey pour obtenir le apiKey
  // envoyé par l'utilisateur.
  const apiKeyOK = outils.testApiKey(req.query.apiKey);

  try {
    if(apiKeyOK){
      const listeFilms = serviceFilms.getAllFilms();
      res.send({"statut":"OK", "donnees":listeFilms});
    } else {
      res.send(env_vars.MSG_API_NOK);
    }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }
};

const getFilm = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
        const idf = req.params.id;
        if (!idf) {
        res.send(env_vars.MSG_INTROUVABLE);
        }
        const leFilm = serviceFilms.getFilm(idf);
        res.send({ status: "OK", donnees: leFilm });
      } else {
        res.send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }   
};

const creerFilm = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
        // const { body } = req;
        //   if (
        //     //!body.id||
        //     !body.titre ||
        //     !body.duree ||
        //     !body.realisateur
        //   ) {
        //     return;
        //   }
          // *** Fim à ajouter ***
          //   Time Zones utilisées au Canada
          // Offset	Time Zone Abbreviation & Name	Example City	Current Time
          // UTC -8	PST	Pacific Standard Time	Vancouver	mer, 06 h 12 m 56
          // UTC -7	MST	Mountain Standard Time	Edmonton	mer, 07 h 12 m 56
          // UTC -6	CST	Central Standard Time	Winnipeg	mer, 08 h 12 m 56
          // UTC -5	EST	Eastern Standard Time	Toronto	mer, 09 h 12 m 56
          // UTC -4	AST	Atlantic Standard Time	Halifax	mer, 10 h 12 m 56
          // UTC -3:30	NST	Newfoundland Standard Time	St. John's	mer, 
          const film = {
            id: uuidv4(),  //body.id si reçu d'un formulaire ou générer la clé par uuidv4()
            titre: req.body.titre,
            duree: req.body.duree,
            realisateur: req.body.realisateur,
            pochette: req.body.pochette,
            datecreation: new Date().toLocaleString("fr-CA", { timeZone: "EST" }),//UTC-5 heures par rapport a Greenwhich!!!
            datemodification : new Date().toLocaleString("fr-CA", { timeZone: "EST" })
          };
          // *** Ajouter ***
          serviceFilms.creerFilm(film);
          const listeFilms = serviceFilms.getAllFilms();
          res.status(201).send({ status: "OK", donnees: listeFilms });
      } else {
        res.send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }   
};

const modifierFilm = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
          const idf = req.params.id;
          if (!idf) {
            res.send(env_vars.MSG_INTROUVABLE);
          }
          const leFilm = serviceFilms.modifierFilm(idf, req);
          res.send({ status: "OK", donnees: leFilm });
      } else {
        res.send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }   
};

const supprimerFilm = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
        const idf = req.params.id;
        if (!idf) {
          res.send(env_vars.MSG_INTROUVABLE);
        }
        const leFilm = serviceFilms.supprimerFilm(idf);
        res.send({ status: "OK", donnees: leFilm });
      } else {
        res.send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }   
};

module.exports = {
  getAllFilms,
  getFilm,
  creerFilm,
  modifierFilm,
  supprimerFilm
};