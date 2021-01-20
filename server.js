// in here we need to actually make the app, hand it the middleware to use cors and json, give it some basic routing information (expanded further in the routes folder), and connect to the atlas mongodb database. also will be defining the port and telling the app to listen to the port. I think nodemon needs to go in here somewhere. 

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// this thing looks for .env file and makes its variables locally available, so that you can avoid pushing secrets up to gthb
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// basic routing information will go here in a bit, wanna make the schemas first
const notesRouter = require('./routes/note.routes')
app.use('/notes', notesRouter)


// connect to DB
const source = process.env.ATLAS_CONNECTION
mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

// serve backend to port 5000
app.listen(PORT, ()=>{
    console.log(`We did it, Joe. We're on port ${PORT}.`);
})