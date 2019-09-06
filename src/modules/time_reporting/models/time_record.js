const mongoose = require('mongoose');

const timeRecordEntry = new mongoose.Schema({
  day: Number,
  from: String,
  to: String,
});

const timeRecordSchema = new mongoose.Schema({
  _id: String,
  userId: String,
  kw: String,
  ready: Boolean,
  entries: [timeRecordEntry],
});

const userModel = mongoose.model('TimeRecord', timeRecordSchema, 'time_records');

module.exports = userModel;
