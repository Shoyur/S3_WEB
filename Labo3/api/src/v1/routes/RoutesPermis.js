const express = require("express");
const ControleurPermis = require("../../controleurs/ControleurPermis");

const router = express.Router();

router.get("/", ControleurPermis.getAllPermis);

router.get("/:id", ControleurPermis.getPermis);

router.post("/", ControleurPermis.creerPermis);

router.patch("/:id",ControleurPermis.modifierPermis);

router.delete("/:id", ControleurPermis.supprimerPermis);

module.exports = router;