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

exp.post('/tous', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});

exp.post('/animal', function(req, res) {
  let json = require(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
  const key = req.body.key;
  const value = req.body.value;
  res.send(json.filter(d => d[key] === value));
  
});

exp.post('/ville', function(req, res) {
  let json = require(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
  const key = req.body.key;
  const value = req.body.value;
  res.send(json.filter(d => d[key] === value));
});

exp.post('/expire', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});

exp.post('/tries', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});