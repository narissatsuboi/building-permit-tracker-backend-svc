const RecordsService = require('./recordService');

const getRecordsHandler = async (req, res) => {
  const records = await RecordsService.findAllRecords();
  if (records) {
    res.json({ data : records }); 
  }
};

const getRecordByPermitNumberHandler = async (req, res) => {
  const permitNumber = req.params.permitnumber;
  const record = await RecordsService.findRecordByPermitNumber(permitNumber);
  if (record) {
    res.json(record) ;
  }
};

const getDevRecordsHandler = async (req, res) => {
  const records = await RecordsService.findDevRecords();
  if (records) {
    res.json({ data : records }); 
  }
};

module.exports = {
  getRecordsHandler,
  getRecordByPermitNumberHandler,
  getDevRecordsHandler,
};
