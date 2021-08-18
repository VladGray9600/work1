'use strict'


module.exports = (app) => {
    const indexContoller = require('./../Controller/indexContoller')
    const usersController = require('./../Controller/usersController')
    app.route('/').get(indexContoller.index)
    app.route('/users').get(usersController.users)
    app.route('/users/minFoll').get(usersController.users)
    app.route('/users/add').post(usersController.add)
    app.route('/users/update').put(usersController.update)
    app.route('/users/delete').delete(usersController.delete)
}

