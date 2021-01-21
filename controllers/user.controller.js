const User = require('../models/user.model')

class UserController {
    async createUser(user) {
        const newUser = new User(user)

        const result = await newUser.save()
            .catch(err => err)
        return result
    }

    login(name, email) {
        // this .populate thing does not work :((( successfully finds the user but something is missing about the relationship to the notes. tough to say. i wonder if pluralization is an issue, or my file structure. like what if it just doesn't know what to look for because i havent't required the note model or something. 
        return User.findOne({ name, email })
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
