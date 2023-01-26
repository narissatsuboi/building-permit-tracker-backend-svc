import axios from 'axios';
import * as fs from 'fs';

const config = {
    headers:{
        'X-App-Token':'g1akUYTinxtDHh4gfHYFRQjr8'
    }
}

function getData() {
    axios.get('https://data.nola.gov/resource/rcm3-fn58.json?$limit=1', config)
    .then(function (response) {
      // handle success
    //   console.log(response);
        console.log(typeof(response));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (response) {
      // always executed
      return response;
    });
}

let res = getData();
console.log();
