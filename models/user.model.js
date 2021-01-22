const mong = require('mongoose')
const Schema = mong.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)