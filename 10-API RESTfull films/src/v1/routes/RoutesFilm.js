const express = require("express");
const ControleurFilm = require("../../controleurs/ControleurFilm");

const router = express.Router();

router.get("/", ControleurFilm.getAllFilms);

router.get("/:id", ControleurFilm.getFilm);

router.post("/", ControleurFilm.creerFilm);

router.patch("/:id",ControleurFilm.modifierFilm);

router.delete("/:id", ControleurFilm.supprimerFilm);

module.exports = router;