// this is where we define the routes. it should call on functions that are written in the controller to accomplish each task. 

const router = require('express').Router()
const noteController = require('../controllers/note.controller')
const controller = new noteController


// we will need a route to create, read, update, and delete a note, as well as a route to serve all notes associated with a particular user

// create POST route
router.route('/create').post(async (req, res) => {
    // in here, we should grab the body of the request, send it over to some controller method, then do something like res.json(postedNote) to return the successfully posted note to the user
    const newNote = await controller.createNewNote(req.body)

    if (newNote.errors) {
        return res.status(400).json('Error: ' + newNote.message)
    }
    return res.json(newNote)
})

router.route('/notes/:user_id').get((req, res)=>{
    // needs to pull the user_id out of the params, search the db for notes with that user_id attached to them and return em as an array
})


module.exports = router