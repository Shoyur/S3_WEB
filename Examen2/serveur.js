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

exp.post('/etudiants', function(req, res) {
  const key = req.body.key;
  if (key == "tous") res.sendFile(path.join(__dirname + "/serveur/donnees/etudiants.json"));
  let json = require(path.join(__dirname + "/serveur/donnees/etudiants.json"));
  const value = req.body.value;
  if (key == "ville") res.send(json.filter(d => d["City"].localeCompare(value, undefined, { sensitivity: 'base' }) == 0));
});

exp.post('/afficherMoy', function(req, res) {
  let json = require(path.join(__dirname + "/serveur/donnees/etudiants.json"));
  const value = req.body.value;
  res.send(json.filter(d => d["Major"].localeCompare(value, undefined, { sensitivity: 'base' }) == 0));
});