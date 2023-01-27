import axios from 'axios';
import * as fs from 'fs';

const BASE_URL = 'https://data.nola.gov/resource/rcm3-fn58.json';
const X_APP_TOKEN = 'g1akUYTinxtDHh4gfHYFRQjr8';

const URL = 'https://data.nola.gov/resource/rcm3-fn58.json?$limit=10';
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

getData().then(data => writeData(PATH, JSON.stringify(data)));
