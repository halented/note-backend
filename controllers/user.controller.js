const User = require('../models/user.model')

class UserController {
    createUser(user) {
        const newUser = new User(user)

        return newUser.save()
            .then(user)
            .catch(err)
    }
}

module.exports = UserController