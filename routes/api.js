const fs = require("fs");
const path = require("path");
let notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid"); //Random id generator

module.exports = function (app) {
  //GET request
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  //POST request
  app.post("/api/notes", function (req, res) {
    var newData = req.body;
    newData.id = uuidv4();
    notes.push(newData);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes),
      function (err, notes) {
        if (err) throw err;
        res.json(notes);
      }
    );
  });

  //DELETE request
  app.delete("/api/notes/:id", function (req, res) {
    var noteIdDelete = req.params.id;
    //console.log(noteDelete);
    notes = notes.filter((note) => note.id != noteIdDelete);
    res.json(notes);
  });
}; //console.log(notes);