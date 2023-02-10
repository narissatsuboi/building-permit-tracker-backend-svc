const path = require("path");
const fetch = require("node-fetch");
const axios = require("axios");
const { Record, conn } = require(path.join("..", "..", "schemas", "Record"));

/**
 * Helper function to format DateISO string to API
 * floating point timestamp format. 
 */
function getEndDate() {
  const ESC = '\''; 
  const date = new Date().toISOString().replace('Z', ''); 
  return `${ESC}${date}${ESC}`
}

/**
 * Utility function to seed DB with preset range of documents. 
 */
async function seedDB() {
  let startDate = '\'2022-01-01T00:00:00.000\'';
  let endDate = getEndDate(); 

  try {
    const response = await axios.get(
      `https://data.nola.gov/resource/rcm3-fn58.json?$where=filingdate between ${startDate} and ${endDate}`
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
