const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// write to the json file
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

// add a new note to the json file
  const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };



module.exports = { readFromFile, writeToFile, readAndAppend };