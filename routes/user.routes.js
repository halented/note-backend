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

router.route('/login').post(async (req, res) => {
    // needs to see if it can find a username and email match from the db and return the user instance plus all associated notes if so. we will worry about pagination later

    const userData = await controller.login(req.body)

    if (userData.error) {
        return res.status(400).json(userData.error)
    }
    return res.json(userData)
})

router.route('/').get(async (req, res) => {
    const allUsers = await controller.getAll()
    
    if (userData.error) {
        return res.status(400).json(userData.error)
    }
    return res.json(allUsers)
})

module.exports = router