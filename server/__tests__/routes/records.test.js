const request = require('supertest');
const express = require('express');
const app = express();
const path = require('path');
const router = path.join('..', '..', 'routes', 'records');

app.use('/', require(router));

describe('test records routes', function () {
    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    })
});
