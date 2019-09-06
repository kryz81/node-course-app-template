const { Router } = require('express');
const { add } = require('./controllers/index');

const router = new Router();

router.post('/', add);

module.exports = app => app.use('/time_reporting', router);
