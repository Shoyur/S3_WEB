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

exp.post('/playlist', function(req, res) {
  const key = req.body.key;
  if (key == "tous") res.sendFile(path.join(__dirname + "/serveur/donnees/playlist.json"));
  let json = require(path.join(__dirname + "/serveur/donnees/playlist.json"));
  const value = req.body.value;
  if (key == "createur") res.send(json.filter(d => d["creator"]["name"].localeCompare(value, undefined, { sensitivity: 'base' }) == 0));
  if (key == "tracks") res.send(json.filter(d => d["nb_tracks"] >= value));
});

exp.get('/afficherFans', function(req, res) {
  let json = require(path.join(__dirname + "/serveur/donnees/playlist.json"));
  let combien = [0];
  json.filter(d => combien[0] += d["fans"])
  res.send(combien);
});