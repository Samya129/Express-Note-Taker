const express = require("express");
const path = require("path");
const fs = require("fs");


//Set up an Express Application
const app = express();
const PORT = process.env.PORT || 3003

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
require("./routes/api")(app);
require("./routes/html")(app);
//Starting the server 
app.listen(PORT, function(){
    console.log("it's working" + PORT)
});