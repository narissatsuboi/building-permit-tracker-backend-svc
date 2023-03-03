const RecordsService = require('./recordService');

const getRecordsHandler = async (req, res) => {
  const records = await RecordsService.findAllRecords();
  if (records) {
    return res.json(records); 
  }
  return res.sendStatus(409);
};

const getRecordByPermitNumberHandler = async (req, res) => {
  const permitNumber = req.params.permitnumber;
  const record = await RecordsService.findRecordByPermitNumber(permitNumber);
  if (record) {
    return res.json(record) ;

  }
  return res.sendStatus(409);
};

module.exports = {
  getRecordsHandler,
  getRecordByPermitNumberHandler,
};
