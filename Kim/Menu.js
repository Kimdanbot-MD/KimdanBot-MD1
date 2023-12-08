//const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions.js'); 
 const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function menu(conn, m, from)  { 

menu = `🌸𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐪𝐮𝐞 🍓 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓 𝐞𝐬𝐭𝐚 𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 𝐝𝐞 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢𝐨́𝐧🍒 𝐲 𝐚𝐮́𝐧 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 😭 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐪𝐮𝐞 𝐞𝐬𝐭𝐚́𝐧 𝐞𝐧 𝐞𝐥 𝐩𝐥𝐚𝐧, 🍩 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐥𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 💯 𝐪𝐮𝐞 𝐞𝐬𝐭𝐚́𝐧 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐬𝐚 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨🍭:

𖤇 Menu1`.trim()

await conn.sendMessage(m.chat, {text: menu }, { quoted: m })
}

async function menu1(conn, m, from, imagen2) {
  let menu1 = `*◈ 🌸 𝐇𝐨𝐥𝐢* 😼
*˚₊·˚₊· ͟͟͞͞➻❥* 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓🌸
*❀═━┈◈ ╰ 🍒 𝐔𝐰𝐔 🍒 ╯ ◈┈━═❀*
*║* 
*╠ 𖠁 ☛ _𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎́𝐍_  ☚*
*║*
*║┋*(𝐅𝐞𝐜𝐡𝐚) 
*║┋* *🌸𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬🌸* ➺ _${Object.keys(global.db.data.users).length}_
*║┋* *𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬 »* #
*║┋* *🍓𝐓𝐢𝐞𝐦𝐩𝐨🍓* ➺ _#_    
*║┋* *🫐𝐀𝐜𝐭𝐢𝐯𝐨🫐* ➺ _${runtime(process.uptime())}_ 
*║┋* *🍬𝐄𝐬𝐭𝐚́ 𝐄𝐧 𝐌𝐨𝐝𝐨🍬➺* _#_
*║┋* *📵𝐂𝐡𝐚𝐭(𝐒) 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨(𝐒)📵* ➺ _#_ 
*║┋* *🚫𝐔𝐬𝐮𝐚𝐫𝐢𝐨(𝐒) 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨(𝐒)🚫* ➺ 
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ 𖠁 ☛ _𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎_  ☚*
*║*
*║┋*🪷 *𝐓𝐢𝐩𝐨 𝐝𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨»* ❌ _#_
*║┋*🪷 *𝐌𝐢 𝐄𝐬𝐭𝐚𝐝𝐨 »* ❌ _.𝐌𝐢𝐞𝐬𝐭𝐚𝐝𝐨_
*║┋*🪷 *𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 »* ❌ _.𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫_
*║┋*🪷 *𝐏𝐫𝐞𝐦𝐢𝐮𝐦 »* ❌ _.𝐏𝐚𝐬𝐞 𝐏𝐫𝐞𝐦𝐢𝐮𝐦_
*║╰*┅┅┅┅┅┅┅┅┅┅
*║┋*🌺 *𝐑𝐚𝐧𝐠𝐨 »* *#* 
*║┋*🌺 *𝐍𝐢𝐯𝐞𝐥 »* #
*║┋*🌺 *𝐏𝐚𝐫𝐞𝐣𝐚* 🛐 #
*║┋*🌺 *𝐏𝐚𝐬𝐚𝐭𝐢𝐞𝐦𝐩𝐨(𝐒)* ➺ *#*
*║╰*┅┅┅┅┅┅┅┅┅┅
*║┋*💐 *𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚 ➟* #
*║┋*💐 *𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 ➟* #
*║┋*💐 *𝐂𝐨𝐢𝐧𝐬 ➟* #
*║┋*💐 *𝐓𝐨𝐤𝐞𝐧𝐬 ➟* #
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ ㊂* ➻ ⟬𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐊𝐈𝐌𝐃𝐀𝐍𝐁𝐎𝐓⟭
*║*
*║┋*🫐➺ _.cuentaskim_
*║┋*🫐➺ _.gruposkim | grupos | groupkim_
*║┋*🫐➺ _.donar | donate_
*║┋*🫐➺ _.listagrupos | grouplist_
*║┋*🫐➺ _.estado | heydan | status_
*║┋*🫐➺ _.infokim | infobot_
*║┋*🫐➺ _.instalarbot | installbot_
*║┋*🫐➺ _.creador | owner_
*║┋*🫐➺ _.velocidad | ping_
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ ㊂* ➻ ⟬ *👺 𝐑 𝐄 𝐏 𝐎 𝐑 𝐓 𝐄 👺* ⟭
*║*
*║┋*🍒➺ _.report | reportar_
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ ㊂* ➻ ⟬ *🔍𝐁 𝐔 𝐒 𝐐 𝐔 𝐄 𝐃 𝐀 𝐒🔎* ⟭
*║*
*║┋*🌸➺ _.yts_
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ ㊂* ➻ ⟬💡 *𝐂𝐎𝐍𝐅 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎* 💡⟭
*║*
*║┋*🌺➺ _.add | agregar | añadir *𝐧𝐮𝐦*_
*║┋*🌺➺ _.sacar | ban | kick *@𝐭𝐚𝐠*_
*║┋*🌺➺ _.daradmin | promote *@𝐭𝐚𝐠*_
*║┋*🌺➺ _.quitar | demote *@𝐭𝐚𝐠*_
*║┋*🌺➺ _.tagall | invocar *𝐭𝐞𝐱𝐭𝐨*_
*║┋*🌺➺ _.hidetag *𝐭𝐞𝐱𝐭𝐨*_
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ ㊂* ➻ ⟬ *⚙️ 𝐀 𝐉 𝐔 𝐒 𝐓 𝐄 𝐒 ⚙️* ⟭
*║*
*║┋*🍇➺ _welcome on | off_
*║┋*🍇➺ _antiliki on | off_
*║╰*┅┅┅┅┅┅┅┅┅┅
*║*
*╠ ㊂* ➻ ⟬ *❄️ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ❄️* ⟭
*║*
*║┋*🐋➺ _unete | join_
*║┋*🐋➺ _salte | leave_
*║┋*🐋➺ _actualizar | update_
*║╰*┅┅┅┅┅┅┅┅┅┅`.trim();
//let ments = [me]
  await conn.sendMessage(
    m.chat,
    { image: imagen2, caption: menu1 },
    { quoted: m },
  );
}


module.exports = { menu, menu1}
