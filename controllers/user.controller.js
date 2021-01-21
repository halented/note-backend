const User = require('../models/user.model')

class UserController {
    async createUser(user) {
        const newUser = new User(user)

        const result = await newUser.save()
            .catch(err => err)
        return result
    }

    async login(name, email) {
        // this .populate thing does not work :((( successfully finds the user but something is missing about the relationship to the notes. tough to say. i wonder if pluralization is an issue, or my file structure. like what if it just doesn't know what to look for because i havent't required the note model or something. 
        const res = await User.find({ name, email }).populate({ path: "user.notes", model: "Note" })
        console.log(res);
        return res
    }
}

module.exports = UserController
