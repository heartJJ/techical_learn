const mongoose = require('../common/mongooseConnection');
const ReportSchema = new mongoose.Schema({
  report_name: String,
  paw: String,
  data: String,
  arr: Array,
  // avatar: {type: ObjectId, ref: 'Report'}, // avatar关联着 Report 中的id -> Report id
});


// 创建models

const ReportModel = mongoose.model('Report', ReportSchema);

module.exports = ReportModel;