const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const hostname = '127.0.0.1';
const port = 8282;


const exp = express();
const server = http.createServer(exp);
server.listen(port);
console.log(`\nServeur démarré sur le port ${port}`);

exp.use(express.static(__dirname + "/public")); 
exp.use(bodyParser.json());
exp.use(bodyParser.text());
exp.use(bodyParser.urlencoded({extended: true}));

exp.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

exp.post('/permis', function(req, res) {
  const key = req.body.key;
  if (key == "tous") res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
  let json = require(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
  const value = req.body.value;
  if (key == "animal") res.send(json.filter(d => d["Animal_Type_de_permis"].localeCompare(value, undefined, { sensitivity: 'base' }) == 0));
  if (key == "ville") res.send(json.filter(d => d["Gardien_Territoire_ex_villes"].localeCompare(value, undefined, { sensitivity: 'base' }) == 0));
  if (key == "expire") {
    let anR = req.body.an;
    let moisR = req.body.mois;
    res.send(json.filter(d => {
      let dateJ = d["Permis_Date_de_fin"].split("-");
      if ((dateJ[0] == anR) && (dateJ[1] == moisR)) { return true; }
    }));
  }
  if (key == "tries") res.send(json.sort(function (a, b) { return a["Animal_Type_de_permis"].localeCompare(b["Animal_Type_de_permis"]); }));
});