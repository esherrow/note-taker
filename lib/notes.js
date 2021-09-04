const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createNewNote(body, notesArray){
    body.id = uuidv4();
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
};

function deleteNote(id, notesArray){
  
    notesArray=notesArray.filter(note=>note.id != id)
 
    fs.writeFileSync(
      path.join(__dirname,'../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return notesArray;

}

module.exports={createNewNote, deleteNote};