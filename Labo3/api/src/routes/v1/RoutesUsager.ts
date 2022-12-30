const express = require("express");
import { UsagerControleur } from "../../controleurs/UsagerControleur";

const router = express.Router();

// CREATE
router.put("/", UsagerControleur.CtrU_CreateUsager);

// CREATE
router.get("/:id", UsagerControleur.CtrU_GetUsager);

module.exports = router;