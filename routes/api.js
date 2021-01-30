const fs= require("fs");
const path = require("path");
const dbJson = require("../db/db.json")

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        return res.json(dbJson);
        //dbJson is the array
    })

    app.post("/api/notes", function(req, res){
        var data = req.body;
        //console.log(data);
        //pushing data into array of dbJson
        dbJson.push(data);
        fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify);
        (dbJson),function(err){
            if(err)throw err
            //if wrong throw error, if not take the response.json and push the new array of data and show the user the information.
            res.json(dbJson);  
        } 
    })
}
console.log(dbJson);