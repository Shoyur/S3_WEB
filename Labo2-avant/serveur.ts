import mysql from "mysql2";


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
  console.log("Result: " + result);
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