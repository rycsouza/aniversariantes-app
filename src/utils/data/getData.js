const { sheets } = require("../../config/google.js");
const Env = require("dotenv").config().parsed;
const spreadsheetId = Env.SPREAD_SHEET_ID;

const getData = async () => {
  return (
    await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: Env.SPREAD_SHEET_RANGE,
    })
  )?.data?.values;
};

module.exports = getData;
