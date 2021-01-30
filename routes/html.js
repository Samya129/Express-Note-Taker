const fs= require("fs");


//dirname =absolute path
const path = require("path");
module.exports = function(app){
    // Basic route that sends the user first to the AJAX Page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
}