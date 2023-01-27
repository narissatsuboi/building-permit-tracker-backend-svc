require('dotenv').config({path: require('find-config')('.env')});
const axios = require('axios');
const fs = require('fs');

const API_URL = process.env.NOLA_BASE_URL;
const X_APP_TOKEN = process.env.X_APP_TOKEN;

const PATH = 'records.json';

async function getData(url) {
  const res = await axios.get(url);
  return res.data;
}

async function writeData(path, data) {
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.log(error);
      return;
    }
  })
};

async function storeData(path, data) {
  getData().then(data => writeData(path, JSON.stringify(data)));
};

// getData(API_URL).then((PATH, data) => storeData(PATH, data));

module.exports = {
  getData,
  writeData,
  storeData
};