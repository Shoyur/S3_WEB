const express = require("express"); 
const bodyParser = require("body-parser");

const v1PermisRouter = require("./v1/routes/RoutesPermis");


const app = express(); 
const PORT = process.env.PORT || 4000; 

app.use(bodyParser.json());
app.use("/api/v1/permis/", v1PermisRouter);


app.listen(PORT, () => { 
    console.log(`L'API écoute sur le port ${PORT}`); 
});

// console.log("Date test : " + new Date());
// console.log("Date test : " + (new Date()).toISOString().split('T')[0]);