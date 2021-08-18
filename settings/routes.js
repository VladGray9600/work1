'use strict'


module.exports = (app) => {
    const indexContoller = require('./../Controller/indexContoller')
    const usersController = require('./../Controller/usersController')
    app.route('/').get(indexContoller.index)
    app.route('/users').get(usersController.users)
    app.route('/users/minFoll').get(usersController.userfol)
    app.route('/users/:id').get(usersController.userById)
    app.route('/users').post(usersController.add)
    app.route('/users/:id').put(usersController.update)
    app.route('/users/:id').delete(usersController.delete)
}

