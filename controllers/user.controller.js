const User = require('../models/user.model')
const Note = require('../models/note.model')

class UserController {
    async createUser(user) {
        const newUser = new User(user)

        const result = await newUser.save()
            .catch(err => err)
        return result
    }

    login({ username, email }) {
        // this originally used `User.findOne({ username, email }).populate('notes')` but that only works if you manually cram the note id into the notes array for the user every time you make a new note. it just seems repetitive when the information is already available in the database. this method below manually populates the notes written by this user after we find them. 
        // this doesn't leave a way of pagination but that's not an issue at the present

        return User.findOne({ username, email })
            .then(async (user) => {
                let userWithNotes
                if (user) {
                    userWithNotes = await Note.find({ author: user._id })
                        .then(notes => {
                            // add notes into user obj
                            user.notes = notes
                            return user
                        })
                }
                else {
                    return { error: "Username & email combination unsuccessful." }
                }
                return userWithNotes
            })
            .catch(err => {
                return { error: err }
            })
    }

    getAll() {
        return User.find()
            .then(res => res)
            .catch(err => {
                return { error: "Operation unsuccessful." }
            })
    }
}

module.exports = UserController
