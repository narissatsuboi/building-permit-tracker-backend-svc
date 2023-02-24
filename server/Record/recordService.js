const {RecordModel, conn} = require('./RecordSchema');

const findAllRecords = async () => {
  return await RecordModel.find({}).lean();
};

const findRecordByPermitNumber = async (permitNumber) => {
  return await RecordModel.find({numstring: permitNumber}).lean();
};

module.exports = {
  findAllRecords,
  findRecordByPermitNumber,
};
