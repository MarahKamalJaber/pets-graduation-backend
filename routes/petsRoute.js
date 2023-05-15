const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const petsCont = require("../controllers/petsCont");
const dotenv = require("dotenv");

// -----------------------
router.get("/get", petsCont.getPets);
router.get("/getPetsByUserId", petsCont.getPetsByUserId);
router.post("/add", petsCont.addPet);
router.patch("/patch", petsCont.patchPet);
router.delete("/delete", petsCont.deletePet);
router.patch("/addVisite", petsCont.addVisitByPet);

module.exports = router;
