require('dotenv').config({path: require('find-config')('.env')});
const axios = require('axios');
const fs = require('fs');

const API_URL = process.env.NOLA_BASE_URL;
const X_APP_TOKEN = process.env.X_APP_TOKEN;

const PATH = 'records.json';

async function getData() {
  const res = await axios.get(URL);
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

// getData().then(data => writeData(PATH, JSON.stringify(data)));