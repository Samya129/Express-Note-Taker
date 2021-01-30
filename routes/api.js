const fs= require("fs");
const path = require("path");
const dbJson = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');
//installed random id generator and copied syntax needed to work

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        return res.json(dbJson);
        //dbJson is the array
    })

    app.post("/api/notes", function(req, res){
        var data = req.body;
        data.id= uuidv4();
        //defined the unique id to my code.
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