const { query } = require("express");
const adoption = require("../models/adopModel");
const reservation = require("../models/reservationAdopModels");
// const Category = require("../models/cateModel");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

exports.createReservation = async(req, res, next) => {
    try {
        const list_reservation = {
            userId: req.body.userId,
            adoptionid: req.body.adoptionid,
            detaTime: req.body.detaTime,
        };

          adoption.findByIdAndUpdate(adoptionid, { status: 1 },function (err, docs) {
                console.log("err: ", err);
                console.log("docs: ", docs);
            });
        const reserv = await reservation.create(list_reservation);
        return res.status(200).send({ message: "reservation created successfully!", reserv , status : 200 });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(200).send({ message: "reservation already exist" , error , status : 100 });
        }else {

        }
    }
 
};


exports.getReservation = async(req, res, next) => {
    const query = {
        _id: req.body.userId
    }
    reservationList = [] ;
    reservation.find({}, {}, query).exec((err, reservations) => {
            if (err) return res.status(400).send(reservationList);
            return res.status(200).send({reservations});
        });

    };
