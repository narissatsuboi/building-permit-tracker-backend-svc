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

describe('Records', () => {
  describe('GET/records', () => {
    it('should return 200', async () => {
      const res = await request(app).get('/records');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET/records/:permitnumber', () => {
    const test_url = '/records/22-00001-NEWC';

    describe(':permitnumber should exist', () => {
      it('should return 200', async () => {
        const res = await request(app).get(test_url);
        expect(res.statusCode).toBe(200);
      });

      it('should return the record document', async () => {
        const expectedResponse = [
          {
            _id: '63eaa788771a7f682d8696e7',
            address: '205 Fairfax Pl',
            owner: 'Hummel Construction LLC',
            description:
              'New construction of a 1 story 2170sf single family dwelling with an attached carport as per plans.',
            numstring: '22-00001-NEWC',
            isclosed: 'False',
            type: 'New Construction',
            code: 'NEWC',
            division: 'SP',
            m_s: 'M',
            filingdate: '2022-01-01T18:45:01.000Z',
            issuedate: '2022-02-03T00:45:10.000Z',
            currentstatus: 'Permit Issued',
            nextstatus: 'Inspections Finaled',
            currentstatusdate: '2022-02-03T00:45:10.000Z',
            landuse: 'Single Family',
            landuseshort: 'RSFD',
            projectname: '',
            unpaidfees: '0.0',
            totalfees: '1362.0',
            bldgarea: '2170.0',
            constrval: '217000.0',
            bondamount: '0.0',
            opencomments: '0.0',
            applicant: 'Hummel Construction LLC',
            totalinspections: '5.0',
            contractors: '',
            pin: '513809806',
            beds: '3.0',
            baths: '2.0',
            heattype: '',
            secondfloo: '0.0',
            basementar: '0.0',
            daysopen: '406.0',
            daysissued: '374.0',
            leadagency: 'City of New Orleans',
            exitreason: '',
            subdivision: 'Old Aurora',
            councildist: 'C',
            zoning: 'S-RS',
            historicdistrict: '',
            location_1: {
              latitude: '29.915789634132427',
              longitude: '-89.99057274462587',
            },
            dateImported: '2023-02-13T21:11:36.805Z',
            __v: 0,
          },
        ];
        const res = await request(app).get(test_url);
        expect(res.body).toStrictEqual(expectedResponse);
      });
    });
  });
});
