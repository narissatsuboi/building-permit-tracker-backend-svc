const path = require('path');
const axios = require('axios');
const { Record, conn } = require(path.join('..', '..', 'schemas', 'Record'));


function getEndDate() {
  const ESC = '\'';
  const date = new Date().toISOString().replace('Z', '');
  return `${ESC}${date}${ESC}`;
}

async function seedDB() {
  const startDate = '\'2022-01-01T00:00:00.000\'';
  const endDate = getEndDate();

  try {
    const response = await axios.get(
        `https://data.nola.gov/resource/rcm3-fn58.json?$where=filingdate between ${startDate} and ${endDate}`,
    );
    const records = await response.data;
    await Record.insertMany(records, {
      function(err) {
        if (err) {
          console.log(err);
        }
      },
    });
    await conn.close();
  } catch (err) {
    console.log(err);
  }
}
seedDB();
