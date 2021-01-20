const mong = require('mongoose')
const Schema = mong.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    age: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
})

const User = mong.model("User", userSchema)

module.exports = User