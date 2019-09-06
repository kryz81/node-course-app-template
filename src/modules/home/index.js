const { Router } = require('express');
const { index } = require(`${__dirname}/controllers/home`);

const router = new Router();

router.get('/', index);

module.exports = app => app.use('/', router);
