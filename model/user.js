var contentModel = require('./content');

function User(name, age, email, password) {

    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.content = new contentModel();

};

module.exports = User;