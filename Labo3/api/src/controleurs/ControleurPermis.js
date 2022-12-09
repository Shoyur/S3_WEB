const servicePermis = require("../services/ServicePermis");
const outils = require("../models/outils");
const env_vars = require("../utilitaires/env_vars");

// Permet  de générer des clés voir sur Google : npm uuid
const { v4: uuidv4 } = require('uuid');
const url = require("url");


const getAllPermis = (req, res) => {
  // apiKeys=[uuidv4(),"abcd"]; //uuidv4() pour générer des clés
  // Du module url on va faire appel à req.query.apiKey pour obtenir le apiKey
  // envoyé par l'utilisateur.
  const apiKeyOK = outils.testApiKey(req.query.apiKey);

  try {
    if (apiKeyOK) {
      const listePermis = servicePermis.getAllPermis();
      res.send({ statut: "OK", donnees: listePermis});
    } 
    else { res.send(env_vars.MSG_API_NOK); }
  } 
  catch(e) { res.send(env_vars.MSG_GRAVE); }
}

const getPermis = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if (apiKeyOK) {
        const numero = req.params.id;
        if (!numero) { res.send(env_vars.MSG_INTROUVABLE); }
        const lePermis = servicePermis.getPermis(numero);
        res.send({ status: "OK", donnees: lePermis });
      } 
      else { res.send(env_vars.MSG_API_NOK); }
  } 
  catch(e) { res.send(env_vars.MSG_GRAVE); }   
}

const creerPermis = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if (apiKeyOK) {
          const date = new Date();
          const datePlus1 = date.setFullYear(date.getFullYear() + 1);
          const Permis = {
            Permis_Numéro: req.body.numero,
            Permis_Date_de_début: date,
            Permis_Date_de_fin: datePlus1,
            Gardien_Territoire_ex_villes: req.body.ville,
            Animal_Type_de_permis: req.body.espece,
            Animal_Nom: req.body.nom
          }
          servicePermis.creerPermis(Permis);
          const listePermis = servicePermis.getAllPermis();
          res.status(201).send({ status: "OK", donnees: listePermis });
      } 
      else { res.send(env_vars.MSG_API_NOK); }
  }
  catch(e) { res.send(env_vars.MSG_GRAVE); }   
}

const modifierPermis = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if (apiKeyOK) {
          const numero = req.params.id;
          if (!numero) { res.send(env_vars.MSG_INTROUVABLE); }
          const lePermis = servicePermis.modifierPermis(numero, req);
          res.send({ status: "OK", donnees: lePermis });
      } 
      else { res.send(env_vars.MSG_API_NOK); }
  } catch(e) { res.send(env_vars.MSG_GRAVE); }   
}

const supprimerPermis = (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if (apiKeyOK) {
        const numero = req.params.id;
        if (!numero) { res.send(env_vars.MSG_INTROUVABLE); }
        const lePermis = servicePermis.supprimerPermis(numero);
        res.send({ status: "OK", donnees: lePermis });
      } 
      else { res.send(env_vars.MSG_API_NOK); }
  } 
  catch(e) { res.send(env_vars.MSG_GRAVE); }   
}

module.exports = {
  getAllPermis,
  getPermis,
  creerPermis,
  modifierPermis,
  supprimerPermis
};