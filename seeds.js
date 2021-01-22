const seeder = require("mongoose-seed")

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
            './models/note.model.js',
            './models/user.model.js',
        ])

        // Clear specified collections
        seeder.clearModels(['Note'], function () {

            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, function () {
                seeder.disconnect();
            })

        })
    }
)

var data = [
    {
        'model': 'Note',
        'documents': [
            { title: "Googling for Grace", content: "This doesn't happen except in books by moticational speakers", author: "600b076f0f6190c4cdf367c5" },
            { title: "Warbling in Space", content: "Once upon a festering year, the young man Valiant ran awry from the lowly upbringings of his birth right. ", author: "600b076f0f6190c4cdf367c5" },
            { title: "If That's All", content: "The time comes for us to look not without, but within, for the guidance and deliverance we desire", author: "600b076f0f6190c4cdf367c5" },
            { title: "Wimps on Skateboards", content: "Tony Hawk is a little b-", author: "600b076f0f6190c4cdf367c5" },
            { title: "For the Last Time", content: "When I was a child, we didn't have the opportunity to say yes the way kids do nowadays. Yes to exploration, yes to expression, yes to the glinting veneer of celebrity -- local means nothing when social media is on the scene.", author: "600b076f0f6190c4cdf367c5" }
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