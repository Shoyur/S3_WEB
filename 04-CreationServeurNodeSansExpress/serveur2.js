const http = require("http");

const hote = "localhost";
const port = 8000;

const ecouteurRequetes = function (req, res) {
    // Indique qu'on retourne du JSON
    // res.setHeader("Content-Type", "application/json");
    // Code 200 tout est OK
    //res.writeHead(200);
    // Réponse à retourner au client
    // res.end(`{"message": "Ceci est une réponse en format JSON"}`);

    // Indique qu'on retourne du HTML
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html>
                <body>
                  <h1>Ceci est du HTML</h1>
                </body>
              </html>`);
};


const serveur = http.createServer(ecouteurRequetes);
serveur.listen(port, hote, () => {
  console.log(`Serveur demarré sur http://${hote}:${port}`);
});
