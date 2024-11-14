const { google } = require("googleapis");
const path = require("path");

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "googleServiceAccountKey.json"),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.readonly",
  ],
});

const sheets = google.sheets({ version: "v4", auth });
const drive = google.drive({ version: "v3", auth });

module.exports = { sheets, drive };
