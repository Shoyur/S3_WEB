const express = require("express"); 
const bodyParser = require("body-parser");
const v1RoutesPermis = require("./routes/v1/RoutesPermis");
const v1RoutesUsager = require("./routes/v1/RoutesUsager");

const app = express(); 
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use("/v1/permis/", v1RoutesPermis);
app.use("/v1/usager/", v1RoutesUsager);

app.listen(PORT, () => { console.log(`API démarré sur le port ${PORT}`); });
