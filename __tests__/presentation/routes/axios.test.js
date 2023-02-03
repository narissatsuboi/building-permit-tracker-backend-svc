const { default: axios } = require('axios');
const DUMMY_URL = '/dummy.json/'

jest.mock('axios');
axios.get.mockResolvedValue({ data: { name: "Jimmy Jedi"}}); 

// test axios.get with mock module 
describe('axios get with getData', () => {
    afterEach(jest.clearAllMocks);

    test('axios get request be called', async () => {
        const result = await axios.get(DUMMY_URL);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('axios get request should return data', async () => {
        const result = await axios.get(DUMMY_URL);
        expect.anything();
    }); 

    test('axios resolved Promise', async () => {
        const result = await axios.mockResolvedValue(10);
    });
});
