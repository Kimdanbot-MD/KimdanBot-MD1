require('../kim.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
      
async function grup(conn, m, args, isBotAdmins, isGroupAdmins, prefix, command, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
if (!m.isGroup) return m.reply(mess.group) 
if (!isBotAdmins) return m.reply(mess.botAdmin) 
if (!isGroupAdmins) return m.reply(mess.admin);
if (!text) return m.reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply(`*abierto*`)
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply(`*cerrado*`)
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
    
async function del(conn, m, isBotAdmins, isGroupAdmins) {    
if (!m.quoted) throw false
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isGroupAdmins) return m.reply(mess.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}

async function setpp(conn, m, isBotAdmins, isGroupAdmins, quoted, prefix, command, mime, args, from) {   
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!quoted) return m.reply(`*⚠️Y la imagen?*`)
if (!/image/.test(mime)) return m.reply(`*⚠️ Responde a una con:* ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`*⚠️Responde a una  Image con :* ${prefix + command}`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
m.reply(`*✅Exito*`)
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`*✅Exito*`)}}

async function hide(conn, m, isBotAdmins, isGroupAdmins, q, participants) {   
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registra)
if (!m.isGroup) return m.reply(mesd.group) 
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isGroupAdmins) return m.reply(mess.admin)
conn.sendMessage(m.chat,{ text: q ? q : "", mentions: participants.map((a) => a.id) },{ quoted: isGroupAdmins ? null : m });
}
async function setna(conn, m, isBotAdmins, isGroupAdmins, text) {   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateSubject(m.chat, text)
await m.reply(`*✅El nombre del grupo se cambio correctamente*`)}

async function setde(conn, m, isBotAdmins, isGroupAdmins, text) {   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateDescription(m.chat, text)
await m.reply(`*✅La descripción del grupo se cambio con éxito*`)}

async function add(conn, m, isBotAdmins, isGroupAdmins, text, sender, prefix) {   
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registra)
if (!m.isGroup) return m.reply(mess.group);  
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!text) return m.reply(`*[ ⚠️ ] INGRESA EL NÚMERO DEL LA PERSONA QUE QUIERA AGREGA*\n*EJEMPLO:*\n${prefix}add +5244446577`)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await conn.groupParticipantsUpdate(m.chat, users, 'add')
 m.reply(`*Listo*`)}

async function k(conn, m, isBotAdmins, isGroupAdmins, quated, text, sender) {   
if (!m.isGroup) return m.reply(mess.group) 
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isGroupAdmins) return m.reply(mess.admin)
const kicktext = `✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🌸 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 / 𝐌𝐄𝐍𝐒𝐈𝐎𝐍𝐀 𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐐𝐔𝐄 𝐕𝐀𝐒 𝐀 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 🌸_`;
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
if (m.mentionedJid.includes(conn.user.jid)) return;
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
const owr = m.chat.split`-`[0];
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}

async function p(conn, m, isBotAdmins, isGroupAdmins, quoted, sender) {   
if (!m.isGroup) return m.reply(mess.group) 
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(`*[ ⚠️ ] A QUIEN LE DOY ADMIN? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => conn.sendMessage(m.chat, {text: "*🍓꙰ᷜූා𝆺▸ 𝐀𝐓𝐄𝐍𝐂𝐈𝐎́𝐍*\n*╰❥* 𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐮𝐧 𝐧𝐮𝐞𝐯𝐨 𝐚𝐝𝐦𝐢𝐧\nli.⏦｡⏦✰⏦｡⏦✰⏦｡⏦✰⏦.li", mentions: participants.map((a) => a.id)}, {quoted: m}),);
}
async function d(conn, m, isBotAdmins, isGroupAdmins, quoted, sender) {   
if (!m.isGroup) return m.reply(mess.group) 
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(`*[ ⚠️ ] A QUIEN LE QUITO ADMINS? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply("Respuesta"));
}
async function link(conn, m, isBotAdmins){   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}

async function ban(m, text, command, args){   
//if (!m.isGroup) return m.reply(info.group) 
//if (!isBotAdmins) return m.reply(info.botAdmin)
//if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].isBanned) return m.reply(`*Ya esta baneado este chat*`)
global.db.data.chats[m.chat].isBanned = true
m.reply(`*BOT OFF*`)
} else if (args[0] === "off") {  
if (!global.db.data.chats[m.chat].isBanned) return m.reply(`*Este chat no esta baneado*`)
global.db.data.chats[m.chat].isBanned = false
m.reply(`*BOT ONLINE YA ESTOY DISPONIBLE ✅*`)}}

async function tag(conn, m, isBotAdmins, isGroupAdmins, participants, q){   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let teks = `❑ ━〔 *📢 ＩＮＶＯＣＡＣＩＯＮ 📢* 〕━ ❑\n\n`
teks += `❑ Mensaje:  ${q ? q : 'Active perra'}\n\n`
for (let mem of participants) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })}

async function adm(conn, participants, groupMetadata, args, m) {
if (!m.isGroup) return m.reply(mess.group);  
const pp = await conn.profilePictureUrl(m.chat, 'image');
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const pesan = args.join` `;
const oi = `*ᴍᴇɴsᴀᴊᴇ:* ${pesan}`;
const text = `═✪〘 *ＩＮＶＯＣＡＮＤＯ ＡＤＭＩＮＳ* 〙✪═\n\n• *ɢʀᴜᴘᴏ:* [ ${groupMetadata.subject} ]\n\n• ${oi}\n\n• *ᴀᴅᴍɪɴs:*\n➥ ${listAdmin}\n\n*[ ⚠ ️] ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴄᴜᴀɴᴅᴏ sᴇ ᴛʀᴀᴛᴇ ᴅᴇ ᴜɴᴀ ᴇᴍᴇʀɢᴇɴᴄɪᴀ*`.trim();
conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m })}

async function infogr(conn, participants, groupMetadata, fkontak, m) {
if (!m.isGroup) return m.reply(mess.group);  
const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, modeadmin} = global.db.data.chats[m.chat];
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1} @${v.id.split('@')[0]}`).join('\n ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const text = `╭━━[ .⋅ ɪɴғᴏ ᴅᴇ ɢʀᴜᴘᴏ ⋅]━━━⬣ 
*🔸️ ɪᴅ:*
• ${groupMetadata.id}

*🔸️ ɴᴏᴍʙʀᴇ* : 
• ${groupMetadata.subject}

*🔸️ ᴍɪᴇᴍʙʀᴏs* :
• ${participants.length} Participantes

*🔸️ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ:*
• @${owner.split('@')[0]}

*🔸️ ᴀᴅᴍɪɴs:*
 ${listAdmin}

*🔸️ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ:*
• Welcome: ${welcome ? '✅' : '❌'}
• Antilink: ${antilink ? '✅' : '❌'}
• Antifake: ${antiFake ? '✅' : '❌'}
• Antiarabe : ${antiArabe ? '✅' : '❌'}
• Detect: ${detect ? '✅' : '❌'}
• Autostickers: ${autosticker ? '✅' : '❌'}
• modocaliente: ${antiNsfw ? '✅' : '❌'}
• modoadmins: ${modeadmin ? '✅' : '❌'}

*🔸️ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ* :
• ${groupMetadata.desc?.toString() || 'desconocido'}`.trim();
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]})}

async function warn1(conn, m, isBotAdmins, isGroupAdmins, sender, command, text, delay) {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
let war = global.maxwarn 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(`[ ⚠️ ] ᴇᴛɪǫᴜᴇᴛᴀ/ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴀʟɢᴜɪᴇɴ\n\n📌 ᴇᴊᴇᴍᴘʟᴏ : ${prefix + command} @user`) 
if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`)  
let name = conn.getName(m.sender)
let warn = global.db.data.users[who].warn
if (warn < war) {
global.db.data.users[who].warn += 1
conn.sendMessage(m.chat, { text: `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┝ ⚠️ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾* ⚠️
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ • *𝚄𝚜𝚞𝚊𝚛𝚒𝚘:* @${who.split`@`[0]}
┊ • *𝙰𝚍𝚖𝚒𝚗𝚜:* ${name}
┊ • *𝙰𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊:* ${warn + 1}/${war}
┊ • *𝚁𝚊𝚣𝚘𝚗:* 🫵🏾 ${text}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`, mentions: [who]}, { quoted: m })
await delay(2000)
m.reply(`⚠️ *𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️
𝚁𝚎𝚌𝚒𝚋𝚒𝚜𝚝𝚎 𝚞𝚗𝚊 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊 𝚍𝚎 𝚞𝚗 𝚊𝚍𝚖𝚒𝚗

• *𝙰𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊:* ${warn + 1}/${war} 
𝚜𝚒 𝚛𝚎𝚌𝚒𝚋𝚎𝚜 *${war}* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚜𝚎𝚛𝚊𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘`, who)
} else if (warn == war) {
global.db.data.users[who].warn = 0
m.reply(`⛔ 𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚜𝚞𝚙𝚎𝚛𝚘 𝚕𝚊𝚜 *${war}* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚙𝚘𝚛 𝚕𝚘 𝚝𝚊𝚗𝚝𝚘 𝚜𝚎𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘`)
await delay(3000)
await conn.groupParticipantsUpdate(m.chat, [who], 'remove')}}

async function warn2(conn, m, isBotAdmins, isGroupAdmins, sender, command, delay) {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(`[ ⚠️ ] ᴇᴛɪǫᴜᴇᴛᴀ/ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴀʟɢᴜɪᴇɴ`) 
if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`) 
let warn = global.db.data.users[who].warn
if (warn > 0) {
global.db.data.users[who].warn -= 1
m.reply(`╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┝ ⚠️ *𝚂𝙴 𝚀𝚄𝙸𝚃𝙾 𝚄𝙽𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️ 
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ • ᴡᴀʀɴ: *-1*
┊ • ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴛᴏᴛᴀʟ: *${warn - 1}*
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`)
await delay(3000)
m.reply(`🔸️ ᴜɴ ᴀᴅᴍɪɴ ʀᴇᴅᴜᴊᴏ sᴜ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs *${warn - 1}*`, who)
} else if (warn == 0) {
m.reply('🔸️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ ᴛɪᴇɴᴇ ɴɪɴɢᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ')}}

async function online(conn, sender, args, store, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group);  
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), numBot]
conn.sendText(m.chat, '*ESTA ONLINE 😎 :*\n\n' + online.map(v => '❑ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })} 

async function listw(conn, isCreator, m) {
const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
const warns = global.db.data.users.warn;
const user = global.db.data.users;
const imagewarn = './src/warn.jpg';
const caption = `⚠️ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚂\n 
╔═══════════════════·•
║ *𝚃𝚘𝚝𝚊𝚕 : ${adv.length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜* ${adv ? '\n' + adv.map(([jid, user], i) => `
║
║ 1.- ${isCreator ? '@' + jid.split`@`[0] : jid} *(${user.warn}/4)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
╚══════════════════·•`;
conn.sendMessage(m.chat, {text: caption, contextInfo:{ mentionedJid: [...caption.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, {quoted: m})}

module.exports = {grup, del, setpp, hide, setna, setde, add, k, p, d, link, ban, tag, adm, infogr, warn1, warn2, online, listw}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
