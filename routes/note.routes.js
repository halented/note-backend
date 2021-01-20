// this is where we define the routes. it should call on functions that are written in the controller to accomplish each task. 

const router = require('express').Router()
const noteController = require('../controllers/note.controller')
const controller = new noteController
let Note = require('../models/note.model')


// we will need a route to create, read, update, and delete a note, as well as a route to serve all notes associated with a particular user

// create POST route
router.route('/create').post((req, res)=>{
    // in here, we should grab the body of the request, send it over to some controller method, then do something like res.json(postedNote) to return the successfully posted note to the user
    controller.createNewNote(req.body)
    return res.json(req.body)
})


module.exports = router