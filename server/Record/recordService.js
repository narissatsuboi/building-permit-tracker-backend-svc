const dotenv = require('dotenv');
dotenv.config();
const {pending, open, issued, closed} = require('./status')
const logger = require('../utils/logger');

const {RecordModel, conn} = require('./RecordSchema');

const findAllRecords = async () => {
  return await RecordModel.find({}).lean();
};

// get 20 random records for development 
const findDevRecords = async() => {
  return await RecordModel.find().limit(200); 
}

const findRecordByPermitNumber = async (permitNumber) => {
  return await RecordModel.find({numstring: permitNumber}).lean();
};

const findDistinctStatuses = async() => {
  return await RecordModel.distinct('currentstatus').exec(); 
}

// (async () => {
//   const res = await findDistinctStatuses(); 
//   console.log(res);
// })()

const matchStatusCategory = async(status) => {
    if (pending.includes(status))
      return "pending"
    if (open.includes(status))
      return "open"
    if (issued.includes(status))
      return "issued"
    if (closed.includes(status))
      return "closed"
    return "na"
}

const assignStatusCategory = async(status) =>  {
  const statusCategory = await matchStatusCategory(status)
  return statusCategory
}

// (async () => {
//   const res = await assignStatusCategory("Permit Issued"); 
//   console.log(res);
// })()

// (()=> {
//   RecordModel.updateOne({numstring : "22-00001-NEWC"}, {$set: {"statusCategory" : () => assignStatusCategory(this.currentstatus)}})
// })


(async function () {
  let x = await RecordModel.deleteMany({ issuedate : {$lt:ISODate('2023-06-01')}})
  logger.info('in async function')
  console.log(x);
})

module.exports = {
  findAllRecords,
  findRecordByPermitNumber,
  findDevRecords,
  assignStatusCategory,
};
