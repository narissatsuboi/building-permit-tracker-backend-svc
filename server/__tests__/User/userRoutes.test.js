const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});
const request = require('supertest');
const {MongoMemoryServer} = require('mongodb-memory-server');
const {createTestServer} = require('../../utils/test-server');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const app = createTestServer();

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});
afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe('Users', () => {
  describe('GET/users', () => {
    it('should respond with a 200 status code', async () => {
      const res = await request(app).get('/users');
      expect(res.statusCode).toBe(200);
    });
  });
});

describe('POST/users', () => {
  describe('on valid or invalid request', () => {
    it('should specify json as the content type in the http header', async () => {
      const req = {username: 'bogusUsername', password: 'bogusPassword'};
      const res = await request(app).post('/users').send(req);
      expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
  });
  describe('on valid request', () => {
    it('should respond with a 200 status code', async () => {
      const req = {username: 'bogusUsername', password: 'bogusPassword'};
      const res = await request(app).post('/users').send(req);
      expect(res.statusCode).toBe(200);
    });
  });
  describe('on invalid request', () => {
    it('should respond with a 400 status code for missing username', async () => {
      const req = {username: '', password: 'bogusPassword'};
      const res = await request(app).post('/users').send(req);
      expect(res.statusCode).toBe(400);
    });

    it('should respond with a 400 status code for missing password', async () => {
      const req = {username: 'bogusUsername', password: ''};
      const res = await request(app).post('/users').send(req);
      expect(res.statusCode).toBe(400);
    });
  });
});
