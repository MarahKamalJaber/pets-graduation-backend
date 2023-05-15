const { query } = require("express");
const doctorsModels = require("../models/doctorsModels");
const bokingDoctor = require("../models/BokingDoctorModels");
// const Category = require("../models/cateModel");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// getDoctors {docName , clinicName , Description , image , docId}

exports.createDoctors = async(req, res, next) => {
    try {
        const createDoctors = {
            docId: req.body.docId,
            name: req.body.name,
            clinicName: req.body.clinicName,
            description: req.body.description,
            image: req.body.image ,
            exp: req.body.exp,
            rating: req.body.rating,
     

        };

        const doctors = await doctorsModels.create(createDoctors);
        return res.status(200).send({ message: "Doctors created successfully!", doctors , status : 200 });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(200).send({ message: "Doctors already exist" , error , status : 100 });
        }else {

        }
    }
 
};


exports.getId = async(req, res, next) => {
    const query = {
        _id: req.body. docId
    }
    doctorList = [] ;
    doctorsModels.find(query, {}, {}).exec((err, doctorList) => {
            if (err) return res.status(400).send(doctorList);
            return res.status(200).send({doctorList});
        });

    };

exports.getDoctors = async(req, res, next) => {
    const query = {
         docId: req.body. docId
    }
    doctorList = [] ;
    doctorsModels.find({}, {}, query).exec((err, doctorList) => {
            if (err) return res.status(400).send(doctorList);
            return res.status(200).send({doctorList});
        });

    };


    exports.boking = async(req, res, next) => {
        try {
            const bokingArry = {
                docId: req.body.docId,
                userId: req.body.userId,
                dateTime: req.body.dateTime,
                status: req.body.status,
            };
            const findByIdAndUpdate =  await doctorsModels.findByIdAndUpdate(req.body. docId, { status: 1 });
            const boking_now = await bokingDoctor.create(bokingArry);
            return res.status(200).send({ message: "boking Doctor successfully!", status : 200 });
        } catch (error) {
            if (error.code === 11000) {
                return res.status(200).send({ message: "boking Doctor already exist" , status : 100 });
            }
        }
     
    };


    exports.getBokingDoctor = async(req, res, next) => {
        bookingList = [] ;
        bokingDoctor.find({}, {}, {}).exec((err, bookingList) => {
                if (err) return res.status(400).send(bookingList);
                return res.status(200).send({bookingList});
            });
    
        };
    