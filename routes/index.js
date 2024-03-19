const router = require('express').Router();
const path = require('path');
// import file for notes
const notesRouter= require('./notes');

router.use('/api', notesRouter);

// get route for homepage 
router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// get route for notes page
router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
module.exports= router;