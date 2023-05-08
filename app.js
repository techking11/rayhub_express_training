const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

// Import Routes
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

// Parsing middleware
// Parse applicaton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, "public")));

// Set Routes
app.use("/admin", adminData.routes);
app.use("/", shopRouter);

app.use((req,res) => {
    res.render('404', {title : "404 Not Found"});
});

// ejs rendering engine
app.set("view engine", "ejs");

// Create Server
const port = 3000;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});