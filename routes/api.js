const fs= require("fs");
//need fs to serve the html documents
const path = require("path");
let notes = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');
// const indexJs = require("")

//installed random id generator and copied syntax needed to work from npm website
module.exports = function(app){
    app.get("/api/notes", function(req, res){
        // return 
        res.json(notes);
    })

    app.post("/api/notes", function(req, res){
        var data = req.body;
        data.id= uuidv4();
        //defined the unique id to the data of my code.
        //console.log(data);
        //pushing data into notes
        notes.push(data);
        fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(notes),
        function(err, notes){
            //in this case, notes is the 'data' array which are the contents inside of the array.
            if(err)throw err;
            //if wrong throw error, if not take the response.json and push the new array of data and show the user the information.
            res.json(notes);  
        }) 
    })
    app.delete("/api/notes/:id", function (req, res){
        // : means requesting from the client
        var noteId = req.params.id;
        console.log(noteId);
        notes = notes.filter( note => note.id != noteId)
        res.json(notes)
        //console.log(notes.filter( note => note.id != noteId));
        //filter does not save so we need to change it by replacing the original with modified.
       
        });


    }
   
console.log(notes);
