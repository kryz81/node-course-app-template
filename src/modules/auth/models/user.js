const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  password: String,
  enabled: Boolean,
});

const userModel = mongoose.model('User', schema, 'users');

module.exports = userModel;
