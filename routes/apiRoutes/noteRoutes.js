const router = require('express').Router();
const {findById, createNewNote} = require('../../lib/notes');
const {notes} = require('../../db/db.json')

router.get('/notes/:id', (req, res)=>{
    let results = findById(req.params, notes);
    if(results){
        res.json(results);
    }else{
        res.send(404);
    }

})

router.post('/notes', (req, res)=>{
    const note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;