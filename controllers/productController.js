const productModel = require("../models/productModel");

exports.addProduct = (req,res) => {
    res.render("add-product", {title : "Add Product"});
};

exports.postProduct = (req,res) => {
    productModel.products.push(req.body.title);
    res.redirect("/");
};

exports.getProduct = (req,res) => {
    res.render("shop", {title : "Shop Lists", products : productModel.products});
};