const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteModel = new Schema({
    title: String,
    content: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

// I am not 100% but i think this is where it gets migrated over to mongo on atlas
const migratedNoteModel = mongoose.model("Note", noteModel)

module.exports = migratedNoteModel