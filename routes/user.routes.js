const router = require('express').Router()
const userController = require('../controllers/user.controller')
const controller = new userController

router.route('/create').post((req, res) => {
    controller.createUser(req.body)
})