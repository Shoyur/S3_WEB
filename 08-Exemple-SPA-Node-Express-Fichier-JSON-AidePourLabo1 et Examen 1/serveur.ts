// Importation des modules nécessaires au fichier serveur.ts
import express from "express";
import { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import http from "http";
import path from "path";

import { listeLivresDeAuteur, listerEntreDeuxAnnees } from "./app/src/serveur/livre/controleurLivre";

// Création d'un serveur Node dont les requêtes entrantes
// et sortantes sont gérées par express.

const exp = express();
const serveur = http.createServer(exp);
const porte = 8080;
serveur.listen(porte); // Famille des 8080-8888
console.log(`\nServeur démarré sur le port ${porte}`);

// Pour obtenir les ressources statiques css, js, images, ...
// qui partiront avec vos pages web via les balises link, script, <img src=
exp.use(express.static(__dirname +"/app/src"));
// Support json encoded bodies
exp.use(bodyParser.json());
// Support text encoded bodies
exp.use(bodyParser.text());
// Support text encoded bodies
exp.use(express.urlencoded({ extended: true }));

//Traiter les requêtes provenant du client et les réponses à retourner au client
exp.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname,  "/app/src/index.html"));
});

exp.get("/livre", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/app/src/serveur/donnees/livres.json"));
});

exp.post("/listerParAuteur", async (req: Request, res: Response) => {
  let listeLivresAuteur = await listeLivresDeAuteur(req);
  res.send(listeLivresAuteur);
});

exp.post("/listerEntreDeuxAnnees", async (req: Request, res: Response) => {
  let listeEntreDeuxAnnees = await listerEntreDeuxAnnees(req);
  res.send(listeEntreDeuxAnnees);
});
