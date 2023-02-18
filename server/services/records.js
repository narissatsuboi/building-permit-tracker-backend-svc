const path = require('path');
const { RecordModel, conn } = require(path.join('..', 'schemas', 'Record'));

const findAllRecords = async () => {
    return await RecordModel.find({}).lean();
}

const findRecordByPermitNumber = async (id) => {
    return await RecordModel.find({ numstring : id }).lean();
}

module.exports = {
    findAllRecords,
    findRecordByPermitNumber
}  