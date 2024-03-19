const notes= require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const path = require('path');

//GET for /notes
notes.get('/notes', (req,res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json')
    .then((data) => res.status(200).json(JSON.parse(data)));
  });


// POST note
notes.post('/notes', (req,res) => {
    console.info(`${req.method}: saving note`);
    // Destructuring assignment for the items in req.body
    const { title, text, id } = req.body;
    
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
        
      readAndAppend(newNote, './db/db.json');
    
      const response = {
        status: 'success',
        body: newNote,
      };
      console.log(response);
      res.status(201).json(response);
    } else {
        console.log(error);
      res.status(500).json('Error in posting note');
    }
  });

  module.exports = notes;