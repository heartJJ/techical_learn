const mongoose = require('../common/mongooseConnection'),
  user = require('../models/user'),
  report = require('../models/report');

const testPopulate = async () => {
  const reports = await report.find();
  console.log(reports);

  const u = await user.find().populate('avatar').exec();

  console.log(u);
}

testPopulate();