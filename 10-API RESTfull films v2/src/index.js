const express = require("express"); 
const bodyParser = require("body-parser");

const v1FilmRouter = require("./v1/routes/RoutesFilm");


const app = express(); 
const PORT = process.env.PORT || 4000; 

app.use(bodyParser.json());
app.use("/api/v1/film/", v1FilmRouter);


app.listen(PORT, () => { 
    console.log(`API écoute la porte ${PORT}`); 
});