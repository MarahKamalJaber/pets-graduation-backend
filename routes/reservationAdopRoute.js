const express = require("express");
const router = express.Router();
const reservationAdopController = require("../controllers/reservationAdopController");

router.get("/show", reservationAdopController.getReservation);
router.get("/add", reservationAdopController.createReservation);
module.exports = router;
