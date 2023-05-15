const { query } = require("express");
const Product = require("../models/prodModel");
// const Category = require("../models/cateModel");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

exports.createProduct = async(req, res, next) => {
    try {
        const newProduct = {
            productId: req.body.productId,
            category: req.body.category,
            categoryId: req.body.categoryId,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            productImage: req.file.filename,
            quantity: req.body.quantity,
        };
        //const newProduct = await createProductObj(req);
        const product = await Product.create(newProduct);
        return res
            .status(200)
            .send({ message: "Product created successfully!", product });
    } catch (error) {
        if (error.code === 11000)
            return res.status(200).send({ message: "product already exist" });
        return res.status(400).send({ message: "unable to create product", error });
    }
};

exports.updateProduct = async(req, res, next) => {
    const filter = { _id: req.body.id };
    await Product.findByIdAndUpdate(filter, update);
};

exports.getProducts = (req, res, next) => {
    const pageNo = parseInt(req.query.pageNo);
    const size = 3;

    if (pageNo <= 0) {
        return res
            .status(200)
            .send({ error: true, message: "invalid page number" });
    }

    const query = {
        //skip = size * (pageNo - 1),
        //limit = size,
    };

    productList = [] ;
    Product.find({}, {}, query).select("-_id -__v -updatedAt").populate("category", "-_id name").exec((err, products) => {
            if (err) return res.status(400).send(productList);
            return res.status(200).send({products});
        });
};

    const createProductObj = async(req) => {
        return {
            category: req.body.categoryId,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            productImage: req.file.filename,
            quantity: req.body.quantity,
        };
    };

    
exports.getProductForCatergory = async(req, res, next) => {
    productList = [] ;
    const query = {};
    categoryId = req.body.categoryId
    if (categoryId >= 1 ) query.categoryId = categoryId ;
    Product.find(query, function(err, productList) { 
        if (err) { res.status(400).send(productList); } else { res.status(200).send(productList); } })
    };
