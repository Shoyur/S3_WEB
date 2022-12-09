const fs = require("fs");
const bdusers = require("../basedonnees/users.json");

const sauvegarderDansBdfilms = (bd) => {
  fs.writeFileSync("./src/basedonnees/bdfilms.json", JSON.stringify(bd, null, 2), {
    encoding: "utf-8",
  });
};

const testApiKey = (userApiKey) => {
  return bdusers.users.find((user) => user.apiKey == userApiKey);
}

module.exports = { sauvegarderDansBdfilms, testApiKey };