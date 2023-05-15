const { query } = require("express");
const adoptionModel = require("../models/adopModel");
// const Category = require("../models/cateModel");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

exports.createAdoption = async(req, res, next) => {
    try {

        type = req.body.type; 
        if (type == 1) {
            petImage = 'dog.png';
        }else {
            petImage = 'cat.png';
        }

        const newAdoption = {
            adoptionId: req.body.AdoptionId,
            petStory: req.body.petStory,
            gender: req.body.gender,
            name: req.body.name,
            location: req.body.location,
            weight: req.body.weight,
            type : type ,
            petImage: petImage ,
            age: req.body.age,
            color: req.body.color,
        };
        //const newAdoption = await createAdoptionObj(req);
        //اسمها ايه ال api
        const Adoption = await adoptionModel.create(newAdoption);
        return res
            .status(200)
            .send({ message: "Adoption created successfully!", Adoption  , status : 200});
    } catch (error) {
        if (error.code === 11000)
            return res.status(200).send({ message: "Adoption already exist" , status : 100});
        return res.status(400).send({ message: "unable to create Adoption", error  , status : 100});

    }
    };

exports.updateAdoption = async(req, res, next) => {
        const filter = { _id: req.body.id };
        const update = { status: req.body.status };
        const send =  await adoptionModel.findByIdAndUpdate(filter, update);
        return res.status(200).send({ message: "Adoption update successfully!", status : 200 });

};

    
exports.getAdoptions = async(req, res, next) => {
    const query = {

    }
    adoptiosList = [] ;
    adoptionModel.find({}, {}, query).sort({ _id: -1}).exec((err, Adoption) => {
            if (err) return res.status(400).send(adoptiosList);
            return res.status(200).send({Adoption});
        });

    };
