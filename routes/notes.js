const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');


// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.log("Page is attempting to read notes");
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// DELETE Route for a note
notes.delete('/:id/', (req, res) => {
  console.log("Page is attempting to delete note " + req.params.id);
  readFromFile('./db/db.json').then((data) => {
    console.log(JSON.parse(data));
    let noteData = JSON.parse(data);
    for (let i = 0; i < noteData.length; i++){
      if (noteData[i].id == req.params.id){
        noteData.splice(i, 1);
      }
    }
    console.log(noteData);
    writeToFile('./db/db.json', noteData);
    res.json(noteData);
  });
});








// POST Route for a new note
notes.post('/', (req, res) => {
  console.log("Save button clicked! " + req.body.title);
  // res.send(req.body);
  const { title, text } = req.body;
  console.log(title + ", " + text)

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error adding note');
  }
});

module.exports = notes;