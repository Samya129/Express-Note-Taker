const fs= require("fs");
const path = require("path");
const dbJson = require("../db/db.json")

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        return response.json(dbJson);
    })
}