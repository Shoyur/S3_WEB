import express from "express";
// import { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import http from "http";
import path from "path";
// import { listePermis } from "./app/src/serveur/livre/controleurPermis";

import mysql from "mysql2";




const exp = express();
const server = http.createServer(exp);
const port = 8282;
server.listen(port);
console.log(`\nServeur démarré sur le port ${port}`);
exp.use(express.static(__dirname +"/app/src"));
exp.use(bodyParser.json());
exp.use(bodyParser.text());
exp.use(express.urlencoded({ extended: true }));


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bdpermis"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var sql = "SELECT * FROM permis WHERE Animal_Nom = 'Valentin'";

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Result: " + result[0]);
});






// MySQLConnector.createConnection
// const db = require('mysql2');
// db.configure({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "bdpermis"
// });
// db.query('SELECT "Animal_Nom" FROM "permis"', (noms: Array<Object>) => {
//   console.log("Voici les noms des animaux : \n" + noms);
// });


exp.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname,  "/app/src/index.html"));
});

// exp.post('/permis', function(req, res) {
//     res.send(listePermis(req)); 
// });