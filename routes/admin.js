const express = require("express");

const router = express.Router();

const {addProduct, postProduct} = require("../controllers/productController");

router.get("/add-product", addProduct);

router.post("/product", postProduct);

exports.routes = router;