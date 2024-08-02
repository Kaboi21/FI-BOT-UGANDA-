//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "donhacker@gamil.com";
global.location = "Jinja, Uganda";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/Noolayko/FI-BOT-UGANDA-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fd2dd4ff0da3dca59f992.jpg";
global.devs = "256704376077";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256786061395";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/fd2dd4ff0da3dca59f992.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01GTUdkd3dPcG1DYzgyZzhaN0NaWjQ5ZG9CcXZ3LzZYcUhqeXJUcEEyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZpNDVja0FMRzU1ODhuRGovamFhODNybWtYeVFObzBkb2x6dFcrUlEzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS3lLWm1WN3hBQUFQdkZxMm5VQlo1NGVKelFjWTdxMmJ3alVla2lLU0hjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0V1k5SWh4aFhRMG12bXU0ek1rdllCemNuMlVRS3RRNm41TiszazVpUXdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFWFNIVGwzL3VWem5oR1krd1RCTUJiUlJNenBoMDFocHc0UjZYVkdrWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN3NzZCdlZneE9CS3o4bmlaWWs0QnM1cjFhbEtVb2U5MEJWOXdUNno0aFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUYvc0hOTW94eGNKNnRiTzZWeE9FT29xNndIOHhzYmJrTjFSNzRiTmFWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnRpb05NMVdZSXRsczFZQkJxRVh5OTAvem0vNjhXK0haMUtPNWlWOHkwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InovYVlNM1NkQjkydk1BNHRVRnRBQmZaNE9qQkEyVkNUNDkxTmowQytJRFpYaEZLTTVNOFJKUENoWUdZNGpqdUlSMEQybjNiYWcza3IzdUdTWGZEckJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6ImRremxZWlFFOWN1WmhXZTVtTDVadjNFTXRIVmVjU3FoaWFxUytML0c3bHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlR0OWdLbE5CUjc2ZHFhNThyckNJWmciLCJwaG9uZUlkIjoiODVlMzQyY2UtMDVjMS00MDc4LWI4NzItN2VmZjQwZTVhYTdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxVWDhWb0M2K0VoZUxPKytFWnM2NGpBamhmdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ0tkV0c1WFNwRWFDWXRCbUdONkFDN3drZk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDIyTEs1TVgiLCJtZSI6eyJpZCI6IjI1Njc4NjA2MTM5NTo1OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLQUJPSSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDM4ck5NRUVLU2x0TFVHR0VBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNUk0M01oeFM3M29lRVlLSzhEcDQrWm9VaU40ckc3SGpyR2hPN214M1RUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOXBvbGRJOFJSNHhFa2QwblpPa29wYmhaNWpwVW5JM1RSSnBXSGxRMno5Q1JCUm9kNHNua2ZteUlFaE5mOFNPaFZtOERKaGV4Vm1ZWWs3TVBPUW05RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZuK0pvR0J3amZoMktoV1JZeXpaQjZWdS9YcEJCTzBEa25EbkM1QjVXV3c1ZVBVeXZIRHdHUm5xTHFoQWJNc0tydWs0UC9iOFFLNmE3Qi9nZ0E0dkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg2MDYxMzk1OjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVTT056SWNVdTk2SGhHQ2l2QTZlUG1hRklqZUt4dXg0NnhvVHU1c2QwMDEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MTg1NDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSElLIn0="
module.exports = {
  menu: process.env.MENU || "4",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FI-BOT-UGANDA-™`",
  author: process.env.PACK_AUTHER || "FI-BOT-UGANDA-",
  packname: process.env.PACK_NAME || "F I B O T",
  botname: process.env.BOT_NAME || "🤖FI-BOT-UGANDA-🤖",
  ownername: process.env.OWNER_NAME || "kaboitech",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "privat",
  LANG: (process.env.THEME || "F I").toUpperCase(),
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
