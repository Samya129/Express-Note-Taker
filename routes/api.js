const fs= require("fs");
//need fs to serve the html documents
const path = require("path");
const dbJson = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');
//installed random id generator and copied syntax needed to work from npm website
//v4...
module.exports = function(app){
    app.get("/api/notes", function(req, res){
        // return 
        res.json(dbJson);
        //dbJson is the array
    })

    app.post("/api/notes", function(req, res){
        var data = req.body;
        data.id= uuidv4();
        //defined the unique id to the data of my code.
        //console.log(data);
        //pushing data into array of dbJson
        dbJson.push(data);
        fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify
        (dbJson),function(err, dbJson){
            //in this case, dbJson is the 'data' array which are the contents inside of the array.
            if(err)throw err;
            //if wrong throw error, if not take the response.json and push the new array of data and show the user the information.
            res.json(dbJson);  
        }) 
    })
    app.Delete("/api.notes/id", function (req, res){
    //var idToDelete = req.params.id
    const uniqueId = data.id;
    const result = uniqueId.filter(deleteNote)
    console.log(result)
    if (dbJson[2] === data.id){
        //filter out this object and push it
    }

   

    //read notes, remove one, write it back 
    // gather the current notes in an array
    // remove the one that matches id
    // write the new array back to the file system
    //map, .find, indexOf, splice, filter?

    })

}
console.log(dbJson);