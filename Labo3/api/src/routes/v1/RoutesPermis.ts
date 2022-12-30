const express = require("express");
import { PermisControleur } from "../../controleurs/PermisControleur";

const router = express.Router();

// CREATE
router.put("/", PermisControleur.CtrP_Create);

// READ
router.get("/", PermisControleur.CtrP_GetAllPermis);
router.get("/:id", PermisControleur.CtrP_GetById);

// UPDATE

// DELETE
router.delete("/:id", PermisControleur.CtrP_Delete);

module.exports = router;