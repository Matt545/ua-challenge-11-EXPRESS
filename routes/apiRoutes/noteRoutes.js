const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
    console.log(results);

    //res.send(results);
});

router.post('/notes', (req, res) => {
    //create an id for the note
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(req.body);
})

module.exports = router;