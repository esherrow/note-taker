const router = require('express').Router();
const {createNewNote, deleteNote} = require('../../lib/notes');
let notes = require('../../db/db.json')

router.get('/notes', (req, res)=>{
    res.json(notes)
})

router.post('/notes', (req, res)=>{
    const note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res)=>{
   
    const id = req.params.id
     notes = deleteNote(id, notes);

    res.json(notes);


})
module.exports = router;