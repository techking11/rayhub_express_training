const express = require("express");

const router = express.Router();

const {getProduct} = require("../controllers/productController");

router.get("/", getProduct);

module.exports = router;