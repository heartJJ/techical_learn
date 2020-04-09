
const mongoose = require('../common/mongooseConnection'),
  user = require('../models/user');


const testTransaction = async () => {
  // 创建session
  const session = await mongoose.startSession({
    readPreference: { mode: 'primary' }
  });

  // 创建 transaction
  await session.startTransaction({
    readConcern: { level: 'snapshot' },
    writeConcern: { w: 'majority' },
  });

  try {
    // create 方法，传入第二个参数时options时，第一个参数须为 Array
    await user.create([{
      'name': 'bob', age: 30, info: [ 'this is a test data' ]
    }], { session });

    const bob = await user.findOne({
      name: 'bob'
    }, { session });


    console.log(a);
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }

};

testTransaction();