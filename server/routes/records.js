const express = require('express');
const router = express.Router();
const path = require('path');
const RecordController = require(path.join('..', 'controllers', 'records'));

router.get('/', RecordController.getRecordsHandler);
router.get('/:permitnumber', RecordController.getRecordByPermitNumberHandler);

module.exports = router;
