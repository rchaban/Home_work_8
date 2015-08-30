var admins = function() {
    var UserHandlers = require('./user');
    var adminModel = require('../model/admin');
    var userHandler = new UserHandlers();

    this.admCreate = function(req, res, next){
        var adm = new adminModel(true);
        console.log(adm.__proto__);
        next();
        res.status(200).send(req.body);

    }

    this.delteUser = function (req, res, next) {
        adm.delUser(req.params.userName)
    }

}


module.exports = admins;