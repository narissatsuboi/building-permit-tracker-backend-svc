require('dotenv').config({path: require('find-config')('.env')});
const axios = require('axios');
const fs = require('fs');

const API_URL = process.env.NOLA_BASE_URL;
const X_APP_TOKEN = process.env.X_APP_TOKEN;

const PATH = 'records.json';

// methods to GET and write static permit data to local JSON file
// for use during early sprint design phases only 

async function getData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function writeData(path, data) {
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.error(error.message);
    }
  })
};

async function refreshData() {
  getData(API_URL).then(data => writeData(PATH, JSON.stringify(data)));
};

module.exports = {
 refreshData
};