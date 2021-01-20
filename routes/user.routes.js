const router = require('express').Router()
const userController = require('../controllers/user.controller')
const controller = new userController

router.route('/create').post(async (req, res) => {
    const newUser = await controller.createUser(req.body)
    return res.json(newUser)
})

module.exports = router