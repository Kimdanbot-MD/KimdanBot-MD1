//const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions.js'); 
 const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
const Jimp = require('jimp')
 const os = require('os')
const chalk = require('chalk')
 const fs = require("fs")
  const si = require('systeminformation')
const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
 const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js');

async function Info(conn, m, from, sendImage)  { 

creador = `𝐇𝐨𝐥𝐢. 🍓 𝐒𝐨𝐲 𝐤𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓, 𝐭𝐮 𝐛𝐨𝐭 𝐩𝐫𝐞𝐟𝐞𝐫𝐢𝐝𝐨. 𝐄𝐧 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐨 𝐬𝐞𝐫𝐯𝐢𝐫𝐭𝐞? 

🌸𝐆𝐢𝐭𝐡𝐮𝐛: https://github.com/Kimdanbot-MD/KimdanBot-MD

🍒𝐅𝐮𝐢 𝐜𝐫𝐞𝐚𝐝𝐨 𝐩𝐨𝐫 𝐉𝐨𝐬𝐞.𝐨𝐟𝐜
🍇𝐍𝐮́𝐦: +57 316 1407118

🍫𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐪𝐮𝐞 𝐧𝐨 𝐬𝐨́𝐥𝐨 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐦𝐞 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐨, 🍩 𝐯𝐚𝐫𝐢𝐚𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬 𝐚𝐲𝐮𝐝𝐚𝐫𝐨𝐧 𝐞𝐧 𝐦𝐢 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢𝐨́𝐧, 🫐 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ".𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐝𝐨𝐫𝐞𝐬" 𝐏𝐚𝐫𝐚 𝐒𝐚𝐛𝐞𝐫 𝐌𝐚́𝐬.`.trim()

await conn.sendMessage(m.chat, {image: imagen1, caption: creador }, { quoted: m })
}

async function col(conn, m, from, sender, sendImage)  { 
col = `*🍓﹌『 𝐂 𝐎 𝐋 𝐀 𝐁 𝐎 𝐑 𝐀 𝐃 𝐎 𝐑 𝐄 𝐒 』﹌🍓*

🌸𝐄𝐥 𝐠𝐫𝐮𝐩𝐨 𝐝𝐞 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐤𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🌸 𝐞𝐬𝐭𝐚 𝐜𝐨𝐧𝐟𝐨𝐫𝐦𝐚𝐝𝐨 𝐩𝐨𝐫 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐨𝐫𝐞𝐬 𝐦𝐮𝐲 𝐞𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭𝐚𝐝𝐨𝐬 𝐲 𝐞𝐱𝐜𝐞𝐥𝐞𝐧𝐭𝐞𝐬 💯 𝐞𝐧 𝐬𝐮 𝐭𝐫𝐚𝐛𝐚𝐣𝐨,🍭 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐜𝐚𝐝𝐚 𝐮𝐧𝐨 🍇𝐩𝐮𝐞𝐝𝐞𝐬 𝐩𝐨𝐧𝐞𝐫 𝐥𝐨𝐬 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬🍫:

❁ Colab1
❁ Colab2
❁ Colab3
❁ Colab4
❁ Colab5
❁ Colab6
❁ Colab7`.trim()
conn.sendMessage(from, { 
text: col,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": imagen1,
"mediaUrl": `enlace`,
"sourceUrl": `enlace`
}
}
}, { quoted: m })
//await conn.sendMessage(m.chat, {image: imagen1, caption: col }, { quoted: m })
}

async function col1(conn, m, from)  { 

col1 = `texto`.trim()

await conn.sendMessage(m.chat, {text: col1 }, { quoted: m })
}

async function grupo(conn, m, from)  { 

grupo = `🍓 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒 🍓
═══════════════════
𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐚𝐦𝐨𝐬 𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚 𝐧𝐮𝐞𝐬𝐭𝐫𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐚𝐬 𝐭𝐞𝐧𝐞𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐥𝐚𝐬 𝐧𝐮𝐞𝐯𝐚𝐬 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧𝐞𝐬, 𝐬𝐚𝐛𝐞𝐫 𝐜𝐨́𝐦𝐨 𝐢𝐧𝐬𝐭𝐚𝐥𝐚𝐫 𝐲 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭, 𝐫𝐞𝐬𝐨𝐥𝐯𝐞𝐫 𝐭𝐮𝐬 𝐝𝐮𝐝𝐚𝐬 𝐲 𝐬𝐨𝐜𝐢𝐚𝐥𝐢𝐳𝐚𝐫 
═══════════════════

🌸 *_𝐆 𝐑 𝐔 𝐏 𝐎 𝐒_* 🌸
═══════════════════
🍒 𝐌𝐢𝐫𝐚 𝐥𝐚𝐬 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐲 𝐧𝐨𝐯𝐞𝐝𝐚𝐝𝐞𝐬 𝐝𝐞 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃
═══════════════════
https://chat.whatsapp.com/DaxvcmaZtzeIvv33VVXX66
𝐆𝐫𝐮𝐩𝐨 𝐔𝐩𝐝𝐚𝐭𝐞 
━━━━━━━━━━━━
https://chat.whatsapp.com/C0lYCnklEtg1HUkbR4uPxA
━━━━━━━━━━━━
𝐋𝐢𝐧𝐤
═══════════════════
🍩 *𝐂𝐎𝐋𝐀𝐁𝐎𝐑𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐂𝐎𝐍 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃*
═══════════════════
https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO
━━━━━━━━━━━━
*𝐩𝐨𝐫𝐟𝐢 𝐧𝐨 𝐢𝐧𝐠𝐫𝐞𝐬𝐞𝐧 𝐜𝐨𝐧 𝐧𝐮́𝐦𝐞𝐫𝐨𝐬 𝐝𝐞 𝐛𝐨𝐭𝐬.*

🍫 *𝐆 𝐑 𝐀 𝐂 𝐈 𝐀 𝐒.* 🍫.`.trim()

await conn.sendMessage(m.chat, {text: grupo }, { quoted: m })
}

async function dona(conn, m, from, sendImage)  { 
dona = `☛🍓🌸 *𝐃 𝐎 𝐍 𝐀 𝐂 𝐈 𝐎́ 𝐍* 🌸🍓☚

🌺 𝐍𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐚𝐩𝐨𝐲𝐚𝐫 𝐝𝐨𝐧𝐚𝐧𝐝𝐨 𝐞𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐚 𝐜𝐮𝐞𝐧𝐭𝐚 𝐝𝐞 𝐏𝐚𝐲𝐏𝐚𝐥 🌺, 🍬 𝐍𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐚𝐩𝐨𝐲𝐚𝐫 𝐜𝐨𝐦𝐞𝐧𝐭𝐚𝐧𝐝𝐨 𝐬𝐨𝐛𝐫𝐞 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐛𝐨𝐭 𝐲 𝐫𝐞𝐜𝐨𝐦𝐞𝐧𝐝𝐚𝐧𝐝𝐨 𝐚 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭. 🍬

𝐀𝐩𝐨𝐲𝐚𝐝𝐨𝐬 𝐞𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐫𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐨𝐟𝐢𝐜𝐢𝐚𝐥 𝐝𝐚́𝐧𝐝𝐨𝐥𝐞 𝐮𝐧𝐚 🌟. 

https://www.paypal.me/JoseMejia871

https://github.com/Kimdanbot-MD/KimdanBot-MD`

await conn.sendMessage(m.chat, {image: imagen1, caption: dona }, { quoted: m })
}

async function cuentas(conn, m, from)  { 

cuentas = `༺ღ༒ *🍒 𝐂 𝐔 𝐄 𝐍 𝐓 𝐀 𝐒 🍒*༒ღ༻
🫐 「 𝐆𝐢𝐭𝐇𝐮𝐛 」: https://github.com/Kimdanbot-MD/KimdanBot-MD

🌸𝐀𝐩𝐨𝐲𝐚𝐦𝐨𝐬 𝐞𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐚𝐬 𝐫𝐞𝐝𝐞𝐬 𝐬𝐨𝐜𝐢𝐚𝐥𝐞𝐬 🌸, 𝐲 𝐬𝐢́𝐠𝐮𝐞𝐧𝐨𝐬 𝐩𝐚𝐫𝐚 𝐦𝐚𝐧𝐭𝐞𝐧𝐞𝐫𝐭𝐞 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐝𝐨(𝐚) 𝐝𝐞 𝐥𝐚𝐬 𝐧𝐮𝐞𝐯𝐚𝐬 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐝𝐞 🍓 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃. 🍓`.trim()

await conn.sendMessage(m.chat, {text: cuentas }, { quoted: m })
}

async function listag(conn, m, from)  { 

listag = `*_𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓 𝐄𝐒𝐓𝐀́ 𝐄𝐍 𝐄𝐒𝐓𝐎𝐒 𝐆𝐑𝐔𝐏𝐎𝐒 :_*

*➺ 🌸𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐆𝐫𝐮𝐩𝐨𝐬:🌸* #
 
*𖥡🍬 𝐆𝐫𝐮𝐩𝐨:* #
*𖥡🍬 𝐈𝐃:* #
*𖥡🍬 𝐋𝐢𝐧𝐤:* #`.trim()

await conn.sendMessage(m.chat, {text: listag }, { quoted: m })
}


async function estado(conn, imgkim, sendImage, from, m)  { 
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024));
  const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024));
  const usedMemory = totalMemory - freeMemory;
  const cpuUsage = os.loadavg()[0];
  conn.sendMessage(m.chat, {image: imagen1, caption: `*╭𝄗𝄗🌸✦ --𝐄𝐒𝐓𝐀𝐃𝐎-- ✦🌸𝄗𝄗⬣*
⎸ *⍟ 𝐕𝐞𝐫𝐬𝐢𝐨́𝐧*
⎸ ❉ 🍓 ➺ 𝟏.𝟎.𝟎
⎸ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ ╍ 
⎸ ❉🥯 *𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬/𝐚𝐬* ➺${Object.keys(global.db.data.users).length}
⎸ ❉🍨 *𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬/𝐚𝐬* ➺ ${rtotalreg}
⎸ ❉🍒 *𝐂𝐡𝐚𝐭/𝐬 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨/𝐬* ➺ 
⎸ ❉🌺 *𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬/𝐚𝐬 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨𝐬/𝐚𝐬* ➺ 
⎸ ┈┈┈┈┈┈┈┈┈┈┈
⎸ ❉🍫 *𝐀𝐜𝐭𝐢𝐯𝐨 𝐝𝐮𝐫𝐚𝐧𝐭𝐞* ${runtime(process.uptime())}
*╰𝄗𝄗𝄗𝄗𝄗⬣*` }, { quoted: m });
}

async function infobot(conn, imagen2, sendImage, from, m)  { 
  const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
 const speed = require("performance-now")
var timestamp = speed();  
var latensi = speed() - timestamp  
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
 const { sizeFormatter } = require("human-readable");
 let formatSize = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
 let disk = await si.fsSize();
let json = {
disk: formatSize(disk[0].available) + " 𝐝𝐞 " + formatSize(disk[0].size),
};
conn.sendMessage(m.chat, {image: imagen2, caption: `┏ ━ ━ ━
┃ ☛『🍓 *𝐈 𝐍 𝐅 𝐎 𝐑 𝐌 𝐀 𝐂 𝐈 𝐎́ 𝐍* 🍓』☚
┃🍧꙰᠁❥ *◜𝐂𝐑𝐄𝐀𝐃𝐎𝐑◞* ⇢ *𝐉𝐨𝐬𝐞.𝐎𝐟𝐜*
┃🌺꙰᠁❥ *◜𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎◞* +57 316 1407118
┃🍫꙰᠁❥ *◜𝐕𝐄𝐑𝐒𝐈𝐎́𝐍◞* ⇢ *𝟏.𝟎.𝟎*
┃🍨꙰᠁❥ *◜𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌◞* ⇢ ${os.platform()}
┃🍡꙰᠁❥ *◜𝐑𝐀𝐌 𝐔𝐒𝐀𝐃𝐀◞* ⇢ ${usedMemory} 𝐆𝐁 / ${totalMemory} 𝐆𝐁
┃🍒꙰᠁❥ *◜𝐂𝐏𝐔 𝐔𝐒𝐀𝐃𝐀◞* ⇢ ${cpuUsage.toFixed(2)}%
┃🍬꙰᠁❥ *◜𝐃𝐈𝐒𝐂𝐎 𝐃𝐔𝐑𝐎◞* ⇢ ${json.disk}
┃🍮꙰᠁❥ *◜𝐌𝐄𝐌𝐎𝐑𝐈𝐀◞* ⇢ ${totalMemory} 𝐆𝐁
┃🍪꙰᠁❥ *◜𝐄𝐉𝐄𝐂𝐔𝐂𝐈𝐎́𝐍◞* ⇢ ${runtime(process.uptime())}
┃🍇꙰᠁❥ *◜𝐌𝐄𝐃𝐈𝐀 𝐄𝐍𝐕𝐈𝐀𝐃𝐀◞* ⇢
┃🍥꙰᠁❥ *◜𝐌𝐄𝐍𝐒𝐉 𝐑𝐄𝐂𝐈𝐁𝐈𝐃𝐎𝐒◞* ⇢
┃🍊꙰᠁❥ *◜𝐌𝐄𝐍𝐒𝐉 𝐄𝐍𝐕𝐈𝐀𝐃𝐎𝐒◞* ⇢
┃🥨꙰᠁❥ *◜𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐂𝐑𝐄𝐀𝐃𝐎𝐒◞* ⇢
┃🍩꙰᠁❥ *◜𝐂𝐇𝐀𝐓𝐒 𝐏𝐑𝐈𝐕𝐀𝐃𝐎𝐒◞* ⇢ 
┃🍥꙰᠁❥ *◜𝐂𝐇𝐀𝐓𝐒 𝐆𝐑𝐔𝐏𝐀𝐋𝐄𝐒◞* ⇢ 
┃🍯꙰᠁❥ *◜𝐂𝐇𝐀𝐓𝐒 𝐓𝐎𝐓𝐀𝐋◞* ⇢ ${anu.length} 
┃🫐꙰᠁❥ *◜𝐒𝐔𝐁 𝐁𝐎𝐓𝐒◞* ⇢
┃🍭꙰᠁❥ *◜𝐑𝐄𝐒𝐓𝐑𝐈𝐂◞* ⇢ 
┃🍮꙰᠁❥ *◜𝐀𝐔𝐓𝐎𝐑𝐄𝐀𝐃◞* ⇢
┗ ━ ━ ━ ━` }, { quoted: m });
}

async function ping(conn, imagen3, sendImage, from, m)  { 
const speed = require("performance-now")
 var timestamp = speed();
  var latensi = speed() - timestamp
const si = require("systeminformation");
const { sizeFormatter } = require("human-readable");
let formatSize = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
let ram = await si.mem();
let cpu = await si.cpuCurrentSpeed();
let disk = await si.fsSize();
let json = {
  memory: formatSize(ram.free) + " de " + formatSize(ram.total),
  memory_used: formatSize(ram.used),
  cpu: cpu.avg + " Ghz",
  disk: formatSize(disk[0].available) + " de " + formatSize(disk[0].size),
};
  conn.sendMessage(m.chat, {image: imagen3, caption: `*⋊╼╾『 🍒 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 : 𝐏𝐈𝐍𝐆 🍒』╼╾⋉*

🚄 *${latensi.toFixed(3)} 𝐦𝐬*
🚄 *${latensi.toFixed(14)} 𝐦𝐬*

*⫹⫺* 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐄𝐉𝐄𝐂𝐔𝐂𝐈𝐎́𝐍:  
 # *𝐃𝐢́𝐚𝐬*
 # *𝐇𝐨𝐫𝐚𝐬*
 # *𝐌𝐢𝐧𝐮𝐭𝐨*
 # *𝐒𝐞𝐠𝐮𝐧𝐝𝐨* 
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*❃ 𝐒 𝐄 𝐑 𝐕 𝐄 𝐑*
*🌸 𝐑𝐀𝐌:* ${json.memory_used}
*🍩 𝐑𝐀𝐌 𝐋𝐢𝐛𝐫𝐞:* ${json.memory}

*🍇 𝐏𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚 :* ${process.platform}
*🍫 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫 :* ${os.hostname()}

*🍬 𝐃𝐢𝐬𝐜𝐨 𝐝𝐮𝐫𝐨 :* ${json.disk}
🍒 *𝐂𝐏𝐔 :* ${json.cpu}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐨 :* ${runtime (process.uptime())}`}, { quoted: m });
}

module.exports = { Info, ping, col, col1, grupo, estado, dona, cuentas, infobot, listag}
