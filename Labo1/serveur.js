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

exp.get('/tous', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});

exp.get('/selonAnimal', function(req, res) {
  console.log("debut du get"); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
  let json = require(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
  // console.log(json[0]);
  const key = "Animal_Type_de_permis";
  const value = req.body.animal;
  const result = data.filter(d=>d[key]==value);
  res.sendFile(result);
  console.log("fin du get"); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
});

exp.get('/ville', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});

exp.get('/quiExpirent', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});

exp.get('/tousTries', function(req, res) {
  res.sendFile(path.join(__dirname + "/serveur/donnees/permis-animaux.json"));
});