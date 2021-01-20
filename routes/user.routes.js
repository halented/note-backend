const router = require('express').Router()
const userController = require('../controllers/user.controller')
const controller = new userController

router.route('/create').post(async (req, res) => {
    const newUser = await controller.createUser(req.body)
    if (newUser.errors) {
        return res.status(400).json('Error: ' + newUser.message)
    }
    return res.json(newUser)
})

router.route('/login').post(async(req, res)=>{
    // needs to see if it can find a name and email match from the db and return the user instance plus all associated notes if so. we will worry about pagination later
    console.log("login route");
    const userData = await controller.login(req.body.name, req.body.email)
    if (userData.errors) {
        return res.status(400).json('Error: ' + userData.message)
    }
    return res.json(userData)
})

module.exports = router