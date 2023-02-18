const path = require('path');
const { RecordModel, conn } = require(path.join('..', 'schemas', 'Record'));

const findAllRecords = async () => {
    return await RecordModel.find({}).lean();
}

const findRecordByPermitNumber = async (permitNumber) => {
    return await RecordModel.find({ numstring : permitNumber }).lean();
}

module.exports = {
    findAllRecords,
    findRecordByPermitNumber
}  