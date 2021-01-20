// I'm sort of making this up as I go and hoping that it works
let Note = require('../models/note.model')

class NoteController {
    createNewNote = (note) => {
        // note should be an object here, containing a user id, title, and body
        const newNote = new Note(note)

        return newNote.save()
            .then((note) => res.json(note))
            .catch(err => res.status(400).json('Error: ' + err))
    }
};


module.exports = NoteController
