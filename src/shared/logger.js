const winston = require('winston');

const createLogger = () => {
  return winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'app' },
    transports: [
      new winston.transports.Console({
        level: 'debug',
        json: true,
      }),
    ],
  });
};

module.exports = createLogger;
