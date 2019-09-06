const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  role: String,
  skills: [String],
  secret: String,
  added_at: Date,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
