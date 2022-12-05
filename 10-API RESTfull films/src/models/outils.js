const fs = require('fs');
const bdusers = require("../basedonnees/users.json");
var path = require("path");

const sauvegarderDansBdfilms = (bd) => {
  try {
    fs.writeFileSync(path.resolve(__dirname, '../basedonnees/bdfilms.json'), JSON.stringify(bd), 'utf8'); 
  }
  catch (e) { console.log(e); }
}



const testApiKey = (userApiKey) => {
  return bdusers.users.find((user) => user.apiKey == userApiKey);
}

module.exports = { sauvegarderDansBdfilms, testApiKey };