const dotenv = require('dotenv');
dotenv.config();

const {RecordModel, conn} = require('./RecordSchema');

const findAllRecords = async () => {
  return await RecordModel.find({}).lean();
};

// get 20 random records for development 
const findDevRecords = async() => {
  return await RecordModel.find().limit(20); 
}

const findRecordByPermitNumber = async (permitNumber) => {
  return await RecordModel.find({numstring: permitNumber}).lean();
};

module.exports = {
  findAllRecords,
  findRecordByPermitNumber,
  findDevRecords,
};
