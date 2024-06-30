// VIRUSI-MBAYA-MD 

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZ3RWJPMFJrQ1d5WjFsV0U5cGY4QTliQ0tTd3UzWExUakQyWUlHWGpHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2phY29rM2xtUXpmbHlsNVZQcGcwaGNMSFJ0ZE95WEx2SUNtQ2tQZ1JEdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTFQza1lhQ3Z4eU1tUVdVM2dVSHJOTStON2ZIMEY1allzd1ZPR3MxNUZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEd0dyL2p6aFB1bnltRWc5SnhrOXJDUVV3SFdGbGY4eDdrRys1VGh3cWs0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFaDNUWUVWTWRKb2QrSTY1WkMzL3cwZUwvUVMyWDIvbHBaTkRmOUZEMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJCbUtLZ2h2OEVFRWxrditTaFFhRi9rU2dETythcDlhM0d1dlRERWEyU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dhWVI5WHpiTUYzOS9FUjkzcmNuUEtkZ3kvTDRBVFk1YXk2R3JvNVRVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGUzY01OWkZEWFZ4eXhRYzR6TzZlUGQxc1RoRXJJUFFDaEM2eDBZbm5rRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KTDQ0UFprVSt5QlhCaE5Lb0tBOVN6TnZKT2RET2EvZTQ1T1BCQnowb3JERm4xbXkzcEs3VkdlbTBscDhFTjIzelVqUVowYXMvQkgwLzlQdHdWOWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJzZnNCZnZ4R1ZMUXVyM2VLKzlpaU0rblVSQXNrUDRNWW5OY2pPUTFwZVhzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4NHRwZ0l4clFmVzZNc29NMjE0NnhRIiwicGhvbmVJZCI6IjBhZTM0OTc0LTc4NDAtNDQxYi04NDU2LTJhOWIzYTQzNTlkNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiT05jMWZqZkRjRHFZc3loN1p0SWJxcTY0Q3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUhZVks5OWtYQXR4TUYwNS9YeWFOUmsvZmY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRMUkc4QVZIIiwibWUiOnsiaWQiOiIyNTQ3OTcyODgzNjA6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiY2Fyb2wifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016Wjc0b0RFSkNjaHJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVRNTlHV1lvVFlkUHlnM0JNbVZiSmdNMzM3SVRyTk1uSkJCWVdpTERvMjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNldzFCelhhcHJYRUJQMWl3R21jd1JLS2ZqSlBxUzJFLy9qbE5mNUtsZ2xXWGluelg5ZGIxcXhSbUdPTnFQcVRTRzFkdXJlc0Z4KzY1ckVYWGVtcEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBbHNzMGVNbTVlcEpQcENzN0pkTjdNRjNSV0N6NUVSQ2RQeVdLNmlHM2hZU29VQzFqUUJPdlNkOEJaUXBWYlhuVjNtRlQ5bHNQMllrbEpCclNVc2RoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NzI4ODM2MDoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWRU9mUmxtS0UySFQ4b053VEpsV3lZRE45K3lFNnpUSnlRUVdGb2l3Nk50In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzY2NTU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdyaSJ9";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngwathegang3@gmai.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://telegra.ph/file/7f03fb699a244da228740.jpg";
global.devs = "254748721079,254762016957,254110853827,254728746852,255655147353,254728782591,254700505700";
global.sudo = process.env.SUDO || "254748721079";
global.owner = process.env.OWNER_NUMBER || "254748721079,254700505700";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2547xxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "2547xxxx";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://pearni-3db1e9057508.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗🦠🦟",
  author: process.env.PACK_AUTHER || "Virusi-Md",
  packname: process.env.PACK_NAME || "🦠",
  botname: process.env.BOT_NAME || "𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "Vurusian",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
