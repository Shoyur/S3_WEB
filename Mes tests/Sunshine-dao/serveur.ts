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

var sql = "SELECT * FROM permis WHERE Animal_Nom = ?";

con.execute(
  sql,
  ['Valentin'],
  function(err, results, fields) {
    var tab = JSON.parse(JSON.stringify(results));
    // console.log(tab); 
    for (var obj in tab) {
      console.log("Numéro de permis: " + tab[obj]["Permis_Numéro"]);
      
    }
  }
);
