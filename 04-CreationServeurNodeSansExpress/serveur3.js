const http = require("http");
const fs = require('fs').promises;

const hote = "localhost";
const port = 8000;

const ecouteurRequetes = function (req, res) {
    // Indique qu'on retourne la page index.html
    fs.readFile(__dirname + "/index.html")
        .then(contenu => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contenu);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const serveur = http.createServer(ecouteurRequetes);
serveur.listen(port, hote, () => {
  console.log(`Serveur demarré sur http://${hote}:${port}`);
});
