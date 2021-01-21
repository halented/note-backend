const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: String,
    content: { type: String, required: true },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

// I am not 100% but i think this is where it gets migrated over to mongo on atlas
const Note = mongoose.model("Note", noteSchema)

module.exports = Note