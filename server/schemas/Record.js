const dotenv = require("dotenv");
dotenv.config({ path: require("find-config")(".env") });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: String,
  },
  issuedate: {
    type: String,
  },
  currentstatus: {
    type: String,
    required: true,
  },
  nextstatus: {
    type: String,
  },
  currentstatusdate: {
    type: String,
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
});

const conn = mongoose.createConnection(process.env.MONGO_URI);
const Record = conn.model("Record", recordSchema);
module.exports = { Record, conn };
