const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');


// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.log("Page is attempting to read notes");
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});










// POST Route for a new note
notes.post('/', (req, res) => {
  console.log("Save button clicked! " + req.body.title);
  res.send(req.body);
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