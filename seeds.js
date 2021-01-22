const seeder = require("mongoose-seed")
const User = require('./models/user.model')
const Note = require('./models/note.model')

// load in atlas database key
require('dotenv').config()
const source = process.env.ATLAS_CONNECTION
// this used to be the second arg, but mongoose seed uses a callback as a second arg...not sure where the twain shall meet
// {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// },

seeder.connect(source,
    function () {

        // Load Mongoose models
        seeder.loadModels([
            User,
            Note
        ])

        // Clear specified collections
        seeder.clearModels(['Note', 'User'], function () {

            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, function () {
                seeder.disconnect();
            })

        })
    }
)

var data = [
    {
        'model': 'User',
        'documents': [
            { username: "imi", email: "imi@ymail.com", age: 100 },
            { username: "Wisteria", email: "alabastor@wimpii.com", age: 100 },
            { username: "elificiona", email: "rampantmarxist@gmail.com", age: 100 }
        ]
    }
]



// // drop everything to reset the DB
// User.remove({}, () => console.log("removed users"))
// Note.remove({}, () => console.log("removed notes"))


// const users = [{ username: "imi", email: "imi@ymail.com", age: 100 }, { username: "Wisteria", email: "alabastor@wimpii.com", age: 100 }, { username: "elificiona", email: "rampantmarxist@gmail.com", age: 100 }]

// // grab a user while saving those to db
// let user

// for (let i = 0; i < users.length; i++) {
//     if (i === users.length - 1) {
//         let newUser = new User(users[i])
//         newUser.save()
//             .then(resp => user = resp)
//         console.log("inside loop");
//     }
//     let newUser = new User(users[i])
//     newUser.save()
// }

// console.log("lol did that work")
// console.log(user)

// const notes = [{ title: "Googling for Grace", content: "this doesn't happen except in books by moticational speakers", author: user._id }]

// don't forget to manually shove the noteId into the user's note array and save it at the end of iteration


// refactor to use username instead of name