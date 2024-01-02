const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Debashis:Debashis11111@cluster0.jmo6as3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'deydebashis005@gmail.com'
global.github = 'https://github.com/debashis121212/XLICON-MD'
global.location = 'kolkata india'
global.gurl = 'https://instagram.com/debashis_12321' // add your username
global.sudo = process.env.SUDO || '919339619072' 
global.devs = '919339619072';
global.website = 'https://github.com/debashis121212/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || ''
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZuQXUvOEhtVEVjcmVUMWF3ZGxhdGVLcE1rZ3QzcThVblQ0bnh2d09VMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2xoZExGMmc1QXBRU1B3ZDdVbXlTYngrZ1luL0V4YWw1b1B5Rm1QdFIxMD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS1AzWENQSTkxbFZ0aEpVRHB1aExyb3AvS0p2M0hrMnp6RDFudC9zYVZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVEJYb3IxVVZqS0ZZV0NGaXNtdjc3MEUzUkp0NUJFOGZRc0pwWnNPQ1JRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FNVVVbklFVllTRFNCcDNLRk9PdnN3Z3VheEZ2cWMwWnI1VC9KL1hxR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR5eVk3b0pGb0kvT1ZTODZNS04vYk9xdldzazVPamNtd2hIaWhyYWFFQnM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NEdaYVMwQ3E0R3hYejdJSXltdDFNc3VaMEhGeHF5MkJ0RWdMbVFwcVdVUXJLL0Q2SisrdVVmQVlDanI2M3Fkc2d4eFZUUXoxdjhFSmJjS08waERpUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxMSwiYWR2U2VjcmV0S2V5IjoiT25PZy95OTZLWjRjcllIUEpTYlFrVi9NWXZJd1dVaHAzQzA3YjFjWjJvRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNW1BeGx1TXdSSm14ODJZWFJnYjkydyIsInBob25lSWQiOiI3OTMzMTVkYS01YTIwLTRkNTAtODQ3NS1hMzg3NWIzNDM3ZGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW9sak1hQUZDaHJ3SEd4TEE1VjZLVEFFS1FJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlanBqTitEL0JOb3Jpa1BkT0ZpWlNoYmdZMGM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSzAvNkFIRU42K3Q2d0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoRGVIYWNKcG1qbytrWUQvRTdBaklkYjNaRzRJak9kMVMwV0h0U3NZNXhvPSIsImFjY291bnRTaWduYXR1cmUiOiJnck5rRnJXM2QxZzdLRFp1K3hBdDFWYlZQK04xYTE0TTJVR3BBMWFwcFcrLzlpRkdLU3NCbkdGMG9mU001OVpRcjl6Z0pFU2ZhRE5JeVBYOHFqQWdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWszNTZMQzlWWFp1NE81NVIrOS9OaThwUmhTQmVRNzBoaWl1UFFxZ0ZSamljZjNMMk4rbXU2Z1JXajFOLzlYS2pUbDJneCtNeEZ2ckxQbmhVTFVJaXc9PSJ9LCJtZSI6eyJpZCI6IjkxOTMzOTYxOTA3MjozOEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkzMzk2MTkwNzI6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVEzaDJuQ2FabzZQcEdBL3hPd0l5SFc5MlJ1Q0l6bmRVdEZoN1VyR09jYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzc5NjU3N30=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
