const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const hostname = '127.0.0.1';
const port = 8282;


const app = express();
const server = http.createServer(app);
server.listen(port);
console.log(`\nServeur démarré sur le port ${port}`);

app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});
app.get('/permis', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});



// // Importation des modules nécessaires au fichier serveur.ts
// import express from "express";
// import { NextFunction, Request, Response } from "express";
// import bodyParser = require("body-parser");
// import http from "http";
// import path from "path";
// import { controleurFilms } from "./app/src/serveur/film/controleurFilm";

// //Traiter les requêtes provenant du client et les réponses à retourner au client
// exp.get("/", async (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname + "/app/src/index.html"));
// });

// exp.get("/livres", async (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname + "/app/src/serveur/donnees/livres.json"));
// });

// exp.all("/films", async (req: Request, res: Response) => {
//   req.body.action = "fichier";
//   req.body.nom = "films.json";
//   let reponse = await controleurFilms(req);
//   // Si action=fichier, envoie fichier :
//   if (req.body.action === "fichier") { res.sendFile(reponse); }
//   // Sinon, envoie à partir cet objet manuellement :
//   else{
//     const liste = [
//       { id: 1, nom: "Bibi" },
//       { id: 2, nom: "Baba" },
//       { id: 3, nom: "Bobo" }
//     ];
//     res.send(JSON.stringify(liste));
//   }
// });

// exp.all("/membres", async (req: Request, res: Response) => {
//   res.send("En cours de développement!")
// });

