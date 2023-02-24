const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { createTestServer } = require('../../utils/test-server');
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
    it('should return 200', async () => {
      const res = await request(app).get('/users');
      expect(res.statusCode).toBe(200);
    });
  });
});
