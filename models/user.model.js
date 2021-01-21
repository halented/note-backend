const mong = require('mongoose')
const Schema = mong.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
}, {
    timestamps: true
})

const User = mong.model("User", userSchema)

module.exports = User