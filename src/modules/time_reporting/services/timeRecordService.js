const { v4 } = require('uuid');
const timeRecordModel = require('../models/time_record');

const save = async data => {
  const record = new timeRecordModel({ _id: v4(), ...data });
  await record.validate();
  return record.save();
};

module.exports = {
  save,
};
