const User = require('../models/user.model')

class UserController {
    async createUser(user) {
        const newUser = new User(user)

        const result = await newUser.save()
            .catch(err => err)
        return result
    }

    login(name, email) {
        // if you run this with just the findOne alone, it will give you the user with an array of "notes" whch just contains id's. if you run this with .populate, it will return to you the actual note objects
        return User.findOne({ name, email }).populate('notes')
            .then(res => res)
            .catch(err => {
                return { error: err }
            })
    }

    getAll() {
        return User.find()
            .then(res => res)
            .catch(err => err)
    }
}

module.exports = UserController
