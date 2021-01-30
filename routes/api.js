const fs= require("fs");
const path = require("path");
const dbJson = require("../db/db.json")

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        return res.json(dbJson);
        
    })

    app.post("/api/notes", function(req, res){
        var data = req.body;
        //console.log(data);
        //pushing data into array of dbJson
        dbJson.push(data);
        fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify);
        
        //res.json("Success!");   
    })
}
console.log(dbJson);