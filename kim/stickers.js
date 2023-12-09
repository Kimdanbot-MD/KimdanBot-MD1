require('../kim.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const fkontak = require('../kim.js')
const from = require('../kim.js')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function sticker(conn, mime, quoted, m) {
if (/image/.test(mime)) {  
m.reply(mess.wait)  
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
  await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
if ((quoted.msg || quoted).seconds > 20) return m. reply('✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _⏳𝐌𝐀́𝐗𝐈𝐌𝐎 𝟐𝟎 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒 ⏳_')  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {  
m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🌺𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 /𝐕𝐈𝐃𝐄𝐎_`)}}  

async function wm2(conn, args, quoted, mime, m) {
if (!args.join(" ")) return m.reply(`*Responda un sticker para robar*`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })  
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m. reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })  
} else {
m.reply(`Y la imagen?`)}}

async function attp(conn, text, lolkeysapi, fkontak, m) {
if (!text) return m.reply(`❖⃟݊🍒────────────────╮\n【🌺】𝐄𝐣𝐞𝐦𝐩𝐥𝐨: attp 𝐊𝐢𝐦𝐝𝐚𝐧\n❖⃟݊🫐────────────────╯`)
api = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
await conn.sendMessage(m.chat, { sticker: { url: api } }, { quoted: fkontak })}

async function dado(conn, lolkeysapi, fkontak, m) {
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
conn.sendMessage(m.chat, { sticker: { url: dir } }, { quoted: fkontak})}

module.exports = {sticker, wm2, attp, dado}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
