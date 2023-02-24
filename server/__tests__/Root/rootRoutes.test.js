const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});
const request = require('supertest');
const express = require('express');
const app = express();
const path = require('path');

app.use('/', require('../../Root/rootRoutes'));

describe('test root routes', function() {
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
  test('responds to /about', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
  });
});
