module.exports = {
  APP_PORT: process.env.APP_PORT,
  QUEUE_HOST: process.env.QUEUE_HOST,
  QUEUE_PORT: Number(process.env.QUEUE_PORT),
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  JWT_SECRET: process.env.JWT_SECRET,
};
