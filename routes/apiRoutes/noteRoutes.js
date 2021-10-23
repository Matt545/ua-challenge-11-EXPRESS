const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote, findById } = require('../../lib/notes');

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
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(req.body);
        console.log('Note deleted');
    }
});

module.exports = router;