// Importation des modules nécessaires au fichier serveur.ts
import express from "express";
import { NextFunction, Request, Response } from "express";
import bodyParser = require("body-parser");
import http from "http";
import path from "path";
import { controleurFilms } from "./app/src/serveur/film/controleurFilm";

// Création d'un serveur Node dont les requêtes entrantes
// et sortantes sont gérées par express.

const exp = express();
const serveur = http.createServer(exp);
const porte = 8383;
serveur.listen(porte); // Famille des 8080-8888
console.log(`\nServeur démarré sur le port ${porte}`);

// Pour obtenir les ressources statiques css, js, images, ...
// qui partiront avec vos pages web via les balises link, script, <img src=
exp.use(express.static(__dirname + "/app/src"));
// Support json encoded bodies
exp.use(bodyParser.json());
// Support text encoded bodies
exp.use(bodyParser.text());
// Support text encoded bodies
exp.use(express.urlencoded({ extended: true }));

//Traiter les requêtes provenant du client et les réponses à retourner au client
exp.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/app/src/index.html"));
});

exp.get("/livres", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/app/src/serveur/donnees/livres.json"));
});

exp.all("/films", async (req: Request, res: Response) => {
req.body.action = "fichier";
req.body.nom = "films.json";
   let reponse = await controleurFilms(req);
   
   if(req.body.action === "fichier"){
      res.sendFile(reponse);
   } else{
      const liste = [
        { id: 1, nom: "Bibi" },
        { id: 2, nom: "Baba" },
        { id: 3, nom: "Bobo" }
      ];

      res.send(JSON.stringify(liste));
   }
});

exp.all("/membres", async (req: Request, res: Response) => {
  res.send("En cours de développement!")
});

