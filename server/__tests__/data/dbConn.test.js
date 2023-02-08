const path = require('path');
const { connectDB, MONGO_URL } = require(path.join('..', ('..'), ('data'), ('dbConn')));

describe('connectDB should throw startup conn errors', () => {
    afterEach(() => {
        // restore spy
        jest.restoreAllMocks();
    });

    it('should throw error', async() => {
            expect(connectDB('/')).rejects.toThrow();
        });
});