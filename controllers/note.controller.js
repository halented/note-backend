// I'm sort of making this up as I go and hoping that it works
let Note = require('../models/note.model')
let User = require('../models/user.model')

class NoteController {
    createNewNote = (note) => {
        // note should be an object here, containing an author (user) id, title, and body
        const newNote = new Note(note)

        // we also need to manually push it to the author's note array
        console.log(note.author);

        return newNote.save()
            .then(successfulNote => {
                User.findOne({ _id:  note.author}, (err, user) => {
                    if (user) {
                        user.notes.push(successfulNote)
                        user.save()
                    }
                })
                return successfulNote
            })
            .catch(err => err)
    }

    getAll() {
        return Note.find()
            .then(res => res)
            .catch(err => err)
    }

    getOneWtihAuthor(id) {
        return Note.
            findOne({ _id: id }).
            populate('author')
            .catch(err => {
                return { error: err }
            })
    }

}


module.exports = NoteController
