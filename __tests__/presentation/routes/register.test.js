const request = require('supertest');
const express = require('express');
const app = express();
const router = '../../../presentation/routes/register';

app.use('/', require(router));

describe('test register routes', function () {
    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    })
});