const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const bookHotelCont = require("../controllers/bookHotelCont");
const dotenv = require("dotenv");

// -----------------------
router.get("/get", bookHotelCont.getBookHotels);
router.post("/add", bookHotelCont.addBookHotel);
router.patch("/patch", bookHotelCont.patchBookHotel);
router.delete("/delete", bookHotelCont.deleteBookHotel);

module.exports = router;
