const createLogger = require(`${__dirname}/../../../shared/logger`);
const logger = createLogger();

exports.index = (req, res) => {
  logger('info', 'Home route called');
  res.json({ msg: 'API' });
};
