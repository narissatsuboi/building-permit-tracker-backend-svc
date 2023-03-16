const express = require('express');
const router = express.Router();
const RecordController = require('./recordController');

router.get('/', RecordController.getRecordsHandler);
router.get('/dev', RecordController.getDevRecordsHandler);
router.get('/:permitnumber', RecordController.getRecordByPermitNumberHandler);

module.exports = router;
