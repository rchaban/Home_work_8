var users = function() {
    var userModel = require('../model/user');

    this.create = function (req, res, next) {
        this.user = new userModel('Test', 18, 'ExampPle@test@.com', 'qwerty');
        console.log(this.user);
        res.status(200).send(req.body);
        next();
    };

    this.addPost = function (req, res, next) {
        this.user.content.setPost('Work');
        console.log(this.user.content);
        console.log(this.user);
        next();
        res.status(200).send(req.body);
    };

    this.delPost = function (req, res, next) {
        this.user.content.deletePost;
        console.log(this.user.content);
        console.log(this.user);
        next();
        res.status(200).send(req.body);
    };

    this.clPost = function (req, res, next) {
        this.user.content.clearPost();
        console.log(this.user.content);
        console.log(this.user);
        next();
        res.status(200).send(req.body);
    };

    this.getIP = function (req, res, next) {
        console.log("LLLLLLLLLLLL");
        res.status(200).send(req.ip);
    };

}

module.exports = users;

