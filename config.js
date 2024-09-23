//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || ""
global.owner = process.env.OWNER_NUMBER || "23765628674"
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkc3Zy92SjYwSXptUlUrNzI3WkI1UkIrK1BPYm1tUGxhV09iL1dQWHIyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRldRaE5mOGZGUU9oWlhqbkFiRCsvbmhzTjR5Y1o5b0lwSkcxQS83Q2czdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRCs0czZ0UDZ1MmJRaG1zKy90dVJHcmY3TkZtK28rYzRSazZzY1lRcUZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLeFJ2MGlweE1KbVVpb3NnRzdPNHV4d1ZQcW9GTjkrVzV0RzIzVlJLdXc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGVEFMTWpwUHhFQUdLVElvWVJQR1NIQmg5cGE1V2JScXRlQjVFa0NyMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0zSHB1T0ZjeEluSzYzOTU5Q09Xc3RoWWJDNnRkbVZ5b0M1NHlOSmRCUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdXSG1TVnhVcjk5MDBUWUQvSnR2aUlyQTNWbjhRaGkyNURkMGRJT1EwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmh5QlE0NzBaYSt2TzlxQ2pqU1E5YmRrbmtDZFkxcXZhU2tDRkloZEp4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind3aEF5V1pKSTlWa2ZqbmJPdkZUS04zbllPK0p3VUhVOVRRMThBd25kb1lONExSSUhTR1EvWVVVL2g3QzdmSUNERTdRTXR5RmZTeHNHd2hHOC80SGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJYOE44dENub2xRQStiQlNLMERieGJmc1YxTDRSM0VhNnFMT1Q4Q3h3VGxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0VG9Vb0QzRVIyYTB4aU0tRkR5T1dRIiwicGhvbmVJZCI6ImZmY2FhMzJhLThjZGItNGMzZi1hMTM0LTA4YjM1MmMzNjY5OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycnR6VkZkMFBVaEc5YU9iaWMxRnc0WFhEYjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWdzSXdidDQxL1ltaHFpS1VHRVR5eXZzY0xZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlBWTZSTjFXIiwibGFzdFByb3BIYXNoIjoiM0E4ckZnIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJtZSI6eyJpZCI6IjI0MjA2Njk5OTY5MjoyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUSEUgUEFMTUVSIEdPSk8iLCJsaWQiOiIyNTg5NDc4OTAwMjg2NDc6MjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYjc2WVVHRUtpVXhyY0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMZlZwNjMzUGV1N2VnNCtPRnFrNGJMRklaOVhReFFjWGxwRnZxTjIrcW1RPSIsImFjY291bnRTaWduYXR1cmUiOiJvbzdLcnc1YzlmaE4wR3hQdDNQdGpoeWVLeGsyc3JyVzZuNGtoQUdVdWdkVDVmK3FmcFpyRmlvZFo4T0pFVlZpbzR5bi9lOVhGZFdXQ1B5Zm14TE5BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWmlzaCt4Uk4ycVU4WUY0LzJqenJUbTh4blUyd2UybzlheGJJeldnb2oyOXhtMW9tK0hXS0xmamY5dkFJNXNHUFNxMHJRb2JOZStBZyt4L3ZMc0IzalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjY5OTk2OTI6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzMxYWV0OXozcnUzb09QamhhcE9HeXhTR2ZWME1VSEY1YVJiNmpkdnFwayJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzEwNTU3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUJjQUFQU1EifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
