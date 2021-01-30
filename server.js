const express = require("express");
const path = require("path");


//Set up an Express Application
var app = express();
var PORT = process.env.PORT || 3003

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
require("./routes/api")(app);
require("./routes/html")(app);
//Starting the server 
app.listen(PORT, function(){
    console.log("it's working" + PORT)
});