const express = require("express");
const path = require("path");
const fs = require("fs");

//Set up an Express Application
const app = express();
const PORT = process.env.PORT || 3003;

// Sets up the Express app to handle data parsing(middle-ware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve static js files with Express
app.use(express.static("public"));
require("./routes/api")(app);
require("./routes/html")(app);

//Starting the server
app.listen(PORT, function () {
  console.log("it's working" + PORT);
});