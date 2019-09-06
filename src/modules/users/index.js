const { Router } = require('express');
const { add, getList, getDetails } = require('./controllers/index');

const router = new Router();

// get users, filter with query search param
router.get('/', getList);

// get specific user, filter user properties
router.get('/', getDetails);

// add new user, route should be protected
// erp system should be informed about creation (use events)
router.post('/', add);

module.exports = app => app.use('/users', router);
