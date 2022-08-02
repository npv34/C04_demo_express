const UserModel = require("../models/UserModel");

class UserController {

    userModel;

    constructor() {
        this.userModel = new UserModel()
    }

    showListUser(req, res, next) {
        this.userModel.getAllUsers().then(result => {
            res.render('./users/list', {data: result});
        })
    }

    deleteUser(req, res, next) {
        let id = req.params.id;
        this.userModel.delete(id).then(() => {
            res.redirect(301, '/')
        })
    }
}

module.exports = UserController
