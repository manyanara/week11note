const express = require('express')
const app = express()
const PORT = 3000;
const notes = require('./db/db.json')
const { v4: uuidv4 } = require('uuid');
const log = require('./middleware/log');

app.use(log);
// set up server at local port
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// app.listen(PORT, ()=> {
//     console.log (`LISTENING ON PORT ${PORT}`)
// })

// GET 
app.get('/api/notes', (req,res) => { res.status(200).json(notes)})
// POST 
app.post('/api/notes', (req,res) => {
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
  
      const response = {
        status: 'success',
        body: newNote,
    }
    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }
})
app.listen(PORT, ()=> {
  console.log (`LISTENING ON PORT ${PORT}`)
})