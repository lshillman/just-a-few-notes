const notes = require('express').Router();

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.log("Page is attempting to read notes");
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
  console.log("Save button clicked! " + req.body);

//   const { username, topic, tip } = req.body;

//   if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuidv4(),
//     };

//     readAndAppend(newTip, './db/db.json');
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error('Error adding note');
//   }
});

module.exports = notes;