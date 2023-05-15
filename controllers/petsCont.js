const Pet = require("../models/pets");

/* GET PETS */
exports.getPets = (req, res) => {
  const pet = Pet
  .find()
  .populate("user")
  .then((pet) => {
    res.status(200).json({
      status: true,
      message: "List of Pets",
      data: {
        pet,
      },
    });
  });
};

/* GET PETS BY ID */
exports.getPetsByUserId = (req, res) => {
  const pet = Pet
  .findById(req.body.id)
  .then((pet) => {
    res.status(200).json({
      status: true,
      message: "List of Pets",
      data: {
        pet,
      },
    });
  });
};

/* ADD PET */
exports.addPet = async (req, res) => {
  const petExists = await Pet.findOne({
    name: req.body.name,
  });

  if (petExists) {
    res.status(403).json({
      error: "Pet already exists !",
    });
  } else {
    const pet = new Pet({
      name: req.body.name,
      user: req.body.user,
      pet_type: req.body.pet_type,
      age: req.body.age,
    });
    await pet.save().then((result) => {
      res.json({
        message: "You have successfully added a pet",
      });
    });
  }
};

/* UPDATE PET */
exports.patchPet = (req, res) => {
  const pet = Pet.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
  }).then((pet) => {
    console.log(req.query.id);
    res.json({
      pet,
    });
  });
};

/* ADD VISIT BY PET */
exports.addVisitByPet = (req, res) => {
  const pet = Pet.findByIdAndUpdate(
    req.query.id,
      { $addToSet: {visits: [req.body]}}
      ).then((pet) => {
    console.log(req.query.id);
    res.json({
      pet,
    });
  });
};

/* DELETE PET */
exports.deletePet = (req, res) => {
  const pet = Pet.findByIdAndRemove(req.query.id).then((message) => {
    res.json({
      message: "You have successfully removed a pet",
    });
  });
};
