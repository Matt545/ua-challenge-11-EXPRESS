const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(notes);

    res.json(results);

    res.send(results);
})

module.exports = router;