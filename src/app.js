const express = require('express');
const bootstrap = require(`${__dirname}/bootstrap`);

let app = express();

bootstrap(app);

module.exports = app;
