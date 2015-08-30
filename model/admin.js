var userModel = require('./user')
function Admin(permissions) {
    this.permission = permissions;
}

Admin.prototype = new userModel();

Admin.prototype.delUser = function(nameObj){
    for (var key in name) {
        delete nameObj[key];
    }
}


module.exports = Admin;