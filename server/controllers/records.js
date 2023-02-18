const { request } = require('express');
const path = require('path');
const RecordsService = require(path.join('..', 'services', 'records')); 

const getRecordsHandler = async (req, res) => {
    const records = await RecordsService.findAllRecords();
    if (records) {
        return res.send(records); 
    }
    return res.sendStatus(409); 
}

const getRecordByPermitNumberHandler = async (req, res) => {
    const permitNumber = req.params.numstring; 
    const record = await RecordsService.findRecordByPermitNumber(permitNumber);
    if (record) {
        return res.send(record);
    }
    return res.sendStatus(409);
}

module.exports = {
    getRecordsHandler,
    getRecordByPermitNumberHandler
}