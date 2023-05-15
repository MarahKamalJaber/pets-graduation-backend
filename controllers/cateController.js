const Category = require("../models/cateModel");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

exports.createCategory = async (req, res, next) => {
  const dbCategory = await Category.findOne({ name: req.body.name });
  if (dbCategory) return res.status(400).send("category already exist");

  const newCategory = new Category({ name: req.body.name });

  newCategory.save((error, savedCategory) => {
    if (error) return res.status(400).send("an error occurred", error);
    return res.status(200).send({ message: "category was created", category: savedCategory });
  });
};

exports.getCategories = (req, res, next) => {
  categories = [] ;
  Category.find({}, "name createdAt _id categoryId",(error, categories) => {
  
    if (error) { res.status(400).send({categories}); } else { res.status(200).send({categories}); }
  });
};

