// Créons un nouveau serveur pour représenter des films, 
// qui renverra deux types de données différents. 
// Si l’utilisateur se rend à l’adresse de notre serveur à /films, 
// il recevra une liste de films en JSON. 
// S’il se rend à l’adresse /acteurs, 
// il recevra une liste d’informations sur les acteurs en JSON.

const http = require("http");
const fs = require('fs').promises;

const hote = "localhost";
const port = 8000;

// Données pour des tests sur les routes
const films = [
    { titre: "Titanic", realisateur: "James Cameron", annee: 2002 },
    { titre: "Avatar", realisateur: "James Cameron", annee: 2010 }
];

const acteurs = [
    { nom: "Angelina Jolie", pays: "US", annee: 1974 },
    { nom: "Brad Pitt", pays: "US", annee: 1968 }
];


const ecouteurRequetes = function (req, res) {

    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/films":
            res.writeHead(200);
            console.log(res);
            res.end(JSON.stringify(films));
            break
        case "/acteurs":
            res.writeHead(200);
            res.end(JSON.stringify(acteurs));
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({erreur:"Ressource introuvable!"}));
    }
};

const serveur = http.createServer(ecouteurRequetes);
serveur.listen(port, hote, () => {
  console.log(`Serveur demarré sur http://${hote}:${port}`);
});
