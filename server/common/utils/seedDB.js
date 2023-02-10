const path = require("path");
const fetch = require("node-fetch");
const axios = require("axios");
const { Record, conn } = require(path.join("..", "..", "schemas", "Record"));

async function seedDB() {
  try {
    const response = await axios.get(
      "https://data.nola.gov/resource/rcm3-fn58.json"
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
// last seeded 2/9/23
