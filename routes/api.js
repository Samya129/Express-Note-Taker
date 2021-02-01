const fs= require("fs");
//need fs to serve the html documents
const path = require("path");
const dbJsonArr = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');
// const indexJs = require("")

//installed random id generator and copied syntax needed to work from npm website
module.exports = function(app){
    app.get("/api/notes", function(req, res){
        // return 
        res.json(dbJsonArr);
    })

    app.post("/api/notes", function(req, res){
        var data = req.body;
        data.id= uuidv4();
        //defined the unique id to the data of my code.
        //console.log(data);
        //pushing data into dbJsonArr
        dbJsonArr.push(data);
        fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(dbJsonArr),
        function(err, dbJsonArr){
            //in this case, dbJsonArr is the 'data' array which are the contents inside of the array.
            if(err)throw err;
            //if wrong throw error, if not take the response.json and push the new array of data and show the user the information.
            res.json(dbJsonArr);  
        }) 
    })
    // app.delete("/api.notes/:id", function (req, res){
    //     const data = req.params.id;
    //     data.filter(data => data.id != data);
    //     fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(dbJsonArr),
    //     function(err, dbJsonArr){
    //         if(err)throw err; 
    //         res.json(dbJsonArr);  
    //     }) 
       
    //     });



    }
   
console.log(dbJsonArr);
// let index = 0
// dbJsonArr.indexOf[2]
// const uniqueId = data.id;
//     const result = uniqueId.filter(deleteNote)
//     console.log(result)

    // //Create a new array to 
    // // newArray = dbJson.filter(function (idObject) {
    // //     return idObject != 
    // // }
    // //newArray.splice()
    // //dbJson.push(data).map
    // // let currentListNotes = dbJson.map
    // deleteNote(req.params.id)

    // read notes, remove one, write it back 
    // gather the current notes in an array
    // remove the one that matches id
    // write the new array back to the file system
    // map, .find, indexOf, splice, filter?