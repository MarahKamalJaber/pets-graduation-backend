const { query } = require("express");
const grommings = require("../models/grommings");
const bokinggromming = require("../models/bookgromming");

// const Category = require("../models/cateModel");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// getDoctors {docName , clinicName , Description , image , docId}

exports.creategrom = async(req, res, next) => {
    try {
        const creategrom = {
            grompersonId: req.body.grompersonId,
            name: req.body.name,
            clinicgromName: req.body.clinicgromName,
            description: req.body.description,
            image: req.body.image ,
            exp: req.body.exp,
            rating: req.body.rating,
     

        };

        const grommings = await grommings.create(creategrom);
        return res.status(200).send({ message: "grommings created successfully!", grommings , status : 200 });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(200).send({ message: "grommings already exist" , error , status : 100 });
        }else {

        }
    }
 
};


exports.getId = async(req, res, next) => {
    const query = {
        _id: req.body.grompersonId
    }
    gromList = [] ;
    grommings.find(query, {}, {}).exec((err, gromList) => {
            if (err) return res.status(400).send(gromList);
            return res.status(200).send({gromList});
        });

    };

exports.getgrommer = async(req, res, next) => {
    const query = {
        grompersonId: req.body.grompersonId
    }
    gromList = [] ;
    grommings.find({}, {}, query).exec((err, gromList) => {
            if (err) return res.status(400).send(gromList);
            return res.status(200).send({gromList});
        });

    };


    exports.boking = async(req, res, next) => {
        try {
            const bokingArry = {
                grompersonId: req.body.grompersonId,
                userId: req.body.userId,
                dateTime: req.body.dateTime,
                status: req.body.status,
            };
            const findByIdAndUpdate =  await grommings.findByIdAndUpdate(req.body.grompersonId, { status: 1 });
            const boking_now = await bokinggromming.create(bokingArry);
            return res.status(200).send({ message: "boking gromes successfully!", status : 200 });
        } catch (error) {
            if (error.code === 11000) {
                return res.status(200).send({ message: "boking gromes already exist" , status : 100 });
            }
        }
     
    };


    exports.getBokinggrom = async(req, res, next) => {
        bookingList = [] ;
        bokinggromming.find({}, {}, {}).exec((err, bookingList) => {
                if (err) return res.status(400).send(bookingList);
                return res.status(200).send({bookingList});
            });
    
        };
    