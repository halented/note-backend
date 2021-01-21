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
    // needs to see if it can find a name and email match from the db and return the user instance plus all associated notes if so. we will worry about pagination later
    const { name, email } = req.body

    const userData = await controller.login(name, email)
    console.log(userData);
    if (userData.length <= 0) {
        return res.status(400).json('Error: user not found')
    }
    return res.json(userData)
})

router.route('/').get(async (req, res) => {
    const allUsers = await controller.getAll()
    // figure out what an error looks like and handle for it here, I dont think this works actually
    if (allUsers.length <= 0) {
        return res.status(400).json(allUsers.message || 'Server error, please try again')
    }
    return res.json(allUsers)
})

module.exports = router