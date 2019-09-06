const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const passport = require('passport');
const queue = require('@course/queue');
const { DB_HOST, DB_PORT, DB_NAME, QUEUE_HOST, QUEUE_PORT } = require('./env');

const docsModule = require('./modules/docs');
const homeModule = require('./modules/home');
const authModule = require('./modules/auth');
const timeReportingModule = require('./modules/time_reporting');

module.exports = async app => {
  // add middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(passport.initialize());
  app.use(passport.session());

  // connect to services
  await queue.connect(QUEUE_HOST, QUEUE_PORT);
  await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
  mongoose.set('debug', true);

  // register routes
  docsModule(app);
  homeModule(app);
  authModule(app);
  timeReportingModule(app);
};
