module.exports = ( function(){
    var express = require('express');
    var UserHandlers = require('../handlers/user');

    var userRouter = express.Router();
    var userHandler = new UserHandlers();

    userRouter.get('/', userHandler.getIP);

    userRouter.post('/', userHandler.create);

    return userRouter;
})();