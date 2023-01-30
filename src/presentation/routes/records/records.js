const router = global.router;
const fs = require('fs');

const DATA_PATH = './records.json';

router.get('/records', (err, req, res, next) => {
    fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        }
        res.send(JSON.parse(data));
    });
});

module.exports = router;