const mongoose = require('../common/mongooseConnection');
const ObjectId = require('mongoose').Types.ObjectId;

const UsersSchema = new mongoose.Schema({
  name: String,
  paw: String,
  age: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  },
  info: Array,
  address: Object,
  avatar: {type: ObjectId, ref: 'Report'}, // avatar关联着 Report 中的id -> Report id
});

UsersSchema.pre('save', function(next) {
  if(this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else {
    this.meta.updateAt = Date.now();
  }
  next();
});

UsersSchema.statics = {
  fetch: function(cb) { //查询所有数据
    return this
         .find()
         .sort('meta.updateAt') //排序          
         .exec(cb); //回调
  },
  findById: function(id, cb) { //根据id查询单条数据
    return this
        .findOne({_id: id})          
        .exec(cb);
  }
};


// 创建models

const usersModel = mongoose.model('Users', UsersSchema);

module.exports = usersModel;