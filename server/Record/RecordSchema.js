const dotenv = require("dotenv");
dotenv.config({ path: require("find-config")(".env") });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { assignStatusCategory } = require('./recordService')

const recordSchema = new Schema({
  address: {
    type: String,
  },
  owner: {
    type: String,
  },
  description: {
    type: String,
  },
  numstring: {
    type: String,
  },
  isclosed: {
    type: String,
  },
  type: {
    type: String,
  },
  code: {
    type: String,
  },
  division: {
    type: String,
  },
  m_s: {
    type: String,
  },
  filingdate: {
    type: Date,
  },
  issuedate: {
    type: Date,
  },
  currentstatus: {
    type: String,
    required: true,
  },
  nextstatus: {
    type: String,
  },
  currentstatusdate: {
    type: Date,
  },
  landuse: {
    type: String,
  },
  landuseshort: {
    type: String,
  },
  projectname: {
    type: String,
  },
  unpaidfees: {
    type: String,
  },
  totalfees: {
    type: String,
  },
  bldgarea: {
    type: String,
  },
  constrval: {
    type: String,
  },
  bondamount: {
    type: String,
  },
  opencomments: {
    type: String,
  },
  applicant: {
    type: String,
  },
  totalinspections: {
    type: String,
  },
  contractors: {
    type: String,
  },
  pin: {
    type: String,
  },
  beds: {
    type: String,
  },
  baths: {
    type: String,
  },
  heattype: {
    type: String,
  },
  secondfloo: {
    type: String,
  },
  basementar: {
    type: String,
  },
  daysopen: {
    type: String,
  },
  daysissued: {
    type: String,
  },
  leadagency: {
    type: String,
  },
  exitreason: {
    type: String,
  },
  subdivision: {
    type: String,
  },
  councildist: {
    type: String,
  },
  zoning: {
    type: String,
  },
  historicdistrict: {
    type: String,
  },
  location_1: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  dateImported: {
    type: Date,
    default: () => Date.now(),
  },
  // statusCategory: {
  //   type: String,
  //   default: "na",
  //   // set: () => assignStatusCategory(this.currentstatus),
  // }

});

const conn = mongoose.createConnection(process.env.MONGO_URI);
const RecordModel = conn.model('Record', recordSchema);
module.exports = {RecordModel, conn};
