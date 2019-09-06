const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const queue = require(`${__dirname}/shared/queue`);
const { DB_HOST, DB_PORT, DB_NAME, QUEUE_HOST, QUEUE_PORT } = require(`${__dirname}/env`);

const homeModule = require(`${__dirname}/modules/home`);
const usersModule = require(`${__dirname}/modules/users`);
const documentsModule = require(`${__dirname}/modules/documents`);

module.exports = async app => {
  // add global middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());

  // connect to services
  await queue.connect(QUEUE_HOST, QUEUE_PORT);
  await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
  mongoose.set('debug', true);

  // register routes
  homeModule(app);
  usersModule(app);
  documentsModule(app);
};
