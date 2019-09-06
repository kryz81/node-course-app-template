const timeRecordService = require('../services/timeRecordService');

exports.add = async (req, res, next) => {
  try {
    const record = await timeRecordService.save(req.body);
    res.json(record);
  } catch (err) {
    next(err);
  }
};
