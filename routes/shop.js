const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req,res)=>{
    // res.send("<h1>This is Home Page</h1><br> <a href='/add-product'><button>Add Product</button></a>");
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;