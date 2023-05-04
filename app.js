const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin",adminRouter);
app.use(shopRouter);

app.use((req,res)=>{
    // res.status(404).send("<h1>Page not Found</h1>");
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 3000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});