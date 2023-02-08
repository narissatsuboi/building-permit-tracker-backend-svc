const path = require('path');
const mongoose = require('mongoose');
const dummydb= require(path.join(('..'), ('..'), ('configuration'), ('mongo-mem-config'))); 
const User = require(path.join(('..'), ('..'), ('data'), ('User')));

const newValidUser = {
    username: "newValidUser",
    firstname: "newValid",
    lastname: "User",
    password: "abcdfgh"
};

describe('test user mongo schema', () => {
    beforeAll(async () => {
        await dummydb.connectDB();
    });
    afterEach(async () => {
        await dummydb.dropCollections();
    });
    afterAll(async () => {
        await dummydb.dropDB();
    });

    it('shold be a dummy test', async () => {
        const val = 2; 
        expect(val).toEqual(2);
    });
});