// Código desde cero por: https://github.com/ferhacks y comentario hecho por: 
// @Kimdanbot-MD     
// @elrebelde21

// ═════════════𓊈『 IMPORTACIONES 』𓊉═════════════ 
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const { WaMessageStubType, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'  
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys") 
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto   
const { exec, spawn, execSync } =  require("child_process")// Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
const chalk = require('chalk') // Estilizar el texto en la consola  
const os = require('os') // Proporciona información del sistema operativo 
const fs = require('fs') // Trabajar con el sistema de archivos   
const fetch = require('node-fetch')
const axios = require('axios') 
const {fileURLToPath} = require('url')
const cheerio = require('cheerio')
const yts = require('yt-search')
const gpt = require('api-dylux')
const util = require('util')
const createHash = require('crypto') 
const mimetype = require("mime-types")  
const ws = require('ws')
const JavaScriptObfuscator = require('javascript-obfuscator')
const webp = require("node-webpmux")
const Jimp = require('jimp')
const { File } = require("megajs")
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")
const similarity = require('similarity') 
const translate = require('@vitalets/google-translate-api') 

const color = (text, color) => { // Función 'color' que toma un texto y un color como parámetros
return !color ? chalk.cyanBright(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)} // Si no hay color, utilizar el color celeste brillante (por defecto)
 
// ════════════𓊈『 LIBS 』𓊉═════════════
const scp1 = require('./libs/scraper') 
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./libs/uploader.js')
const { toAudio, toPTT, toVideo } = require('./libs/convertir.js') 
const { canLevelUp, xpRange } = require('./libs/levelling.js')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos} = require('./libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube') 
const { mediafireDl } = require('./libs/mediafire.js') 

// ═════════════𓊈『 CÓDIGO 』𓊉═════════════
const { jadibot, listJadibot, killJadibot} = require('./serbot.js')
//const { jadibot2} = require('./serbot2.js')
const { Info, ping, col, col1, grupo, estado, dona, cuentas, infobot, listag} = require('./kim/Info')
const { menu, menu1} = require('./kim/Menu')
const {grup, del, setpp, hide, setna, setde, add, k, p, d, link, ban, tag, adm, infogr, warn1, warn2, online, listw} = require('./kim/grupos.js')
const {rob, bal, reg, reg1, reg2, work, mine, buy, claim, perfil, nivel, cofre, lb} = require('./kim/rpg.js') 
const {buscadores} = require('./kim/Busquedas.js')
const {efec, url, tomp3, toimg, toanime} = require('./kim/convertidores.js') 
const {play, play2, play3, play4, mp3, mp4, git, tiktok, letra, mediafire, fb, ig, ig2, apk, spoti} = require('./kim/descargas.js')   
const {game, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15, game16} = require('./kim/juegos.js')  
const {sticker, wm2, attp, dado} = require('./kim/stickers.js')

const msgs = (message) => { // Función 'msgs' que toma un parámetro 'message'
if (message.length >= 10) { // Longitud de 'message' es mayor o igual a 10 caracteres
return `${message.substr(0, 500)}` // Devuelve los primeros 500 caracteres de 'message'
} else { // Caso contrario
return `${message}`}} // Devuelve 'message' completo

const getCmd = (id) => { //Función llamada 'getCmd' que toma un parámetro 'id'
const stickerdb = JSON.parse(fs.readFileSync('./database/stickerdb.json'))
let anu = null;
Object.keys(stickerdb).forEach(nganu => { // Itera sobre las claves del objeto 'stickerdb' utilizando 'forEach'
if (stickerdb[nganu].id === id) { // Si el valor de la propiedad 'id' en el objeto 'stickerdb[nganu]' es igual a 'id'
anu = nganu
}})
if (anu !== null) { // De lo contrario
return stickerdb[anu].cmd // Devolver el valor de la propiedad 'cmd' en el objeto 'stickerdb[anu]'
}}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

module.exports = conn = async (conn, m, chatUpdate, mek, store, sock) => { // Raíz "conn" para mensajes y argumentos
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

function KimR(list) {return list[Math.floor(list.length * Math.random())]}     
global.ftkim = KimR(fotos)
global.redes = KimR(red) 
global.wha = KimR(wa) 
global.canales = KimR(ca)
	
// ═════════════𓊈『 ATRIBUTOS 』𓊉═════════════
if (m.key.id.startsWith("BAE5")) return
var budy = (typeof m.text == 'string' ? m.text : '') // Asignar a la variable budy el valor m.text si es cadena	
//var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=/|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=/|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix = new RegExp('^[°•π÷×¶∆£¢€¥®™+✓_=/|~!?@#$%^&.©^' + '*/!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@'.replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']', 'i')
var prefix = body.match(/^[/.*#]/)  
const isCmd = body.startsWith(prefix) // Verificar si el contenido de body comienza con el valor almacenado en prefix.
const from = m.chat // Remitente del mensaje
const msg = JSON.parse(JSON.stringify(mek, undefined, 2)) // Mensaje convertido a formato JSON
const content = JSON.stringify(m.message) // Contenido del mensaje convertido a formato JSON
const type = m.mtype // Tipo de mensaje
const arg = body.substring(body.indexOf(' ') + 1) // Argumento extraído del cuerpo del mensaje
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() // Comando extraído del cuerpo del mensaje
const args = body.trim().split(/ +/).slice(1) // Obtiene los argumentos del comando
const full_args = body.replace(command, '').slice(1).trim()
const q = args.join(" ") // Une los argumentos en una sola cadena separada por espacios
let t = m.messageTimestamp // Marca de tiempo de mensaje
const pushname = m.pushName || "Sin nombre" // Obtiene el nombre de visualización del usuario de lo contrario será "Sin nombre"
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid
const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) // Eliminar todo a excepción de números
const isOwner = isCreator || m.fromMe;
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const itsMe = m.sender == conn.user.id ? true : false // Verifica si el remitente del mensaje es el propio bot	
const text = args.join(" ") // Unir rgumentos en una sola cadena separada por espacios
const quoted = m.quoted ? m.quoted : m // Obtiene el mensaje citado si existe, de lo contrario, se establece como el propio mensaje
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid // Obtiene el remitente del mensaje según el tipo de chat (individual o grupo)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))	
const mime = (quoted.msg || quoted).mimetype || '' // Tipo de archivo adjunto del mensaje citado o del propio mensaje
const qmsg = (quoted.msg || quoted)	
const isMedia = /image|video|sticker|audio/.test(mime) // Verifica si el mensaje contiene un archivo multimedia (imagen, video, sticker o audio)
const numBot = conn.user.id.split(":")[0] + "@s.whatsapp.net" // JID del Bot
const numBot2 = conn.user.id // Número de teléfono del bot
const mentions = []
if (m.message[type].contextInfo) {
if (m.message[type].contextInfo.mentionedJid) {
const msd = m.message[type].contextInfo.mentionedJid
for (let i = 0; i < msd.length; i++) {
mentions.push(msd[i])}}}
	
// ═════════════𓊈『 GRUPO 』𓊉═════════════
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : '' // Obtiene información del grupo
const groupName = m.isGroup ? groupMetadata.subject : '' // Nombre del grupo
const participants = m.isGroup ? await groupMetadata.participants : '' // Lista de participantes del grupo
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' // // Lista de administradores del grupo
const isBotAdmins = m.isGroup ? groupAdmins.includes(numBot) : false // Verifica si el bot es un administrador del grupo
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false // Verifica si el remitente del mensaje es un administrador del grupo
const isBaneed = m.isGroup ? blockList.includes(userSender) : false // Verifica si el remitente del mensaje está en la lista de bloqueados
const isPremium = m.isGroup ? premium.includes(userSender) : false 
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const thumb = fs.readFileSync("./src/test.jpg")
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const fake = { contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'texto bonis' }, mentionedJid: null, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": wm, "body": vs, "previewType": "PHOTO", thumbnail: ftkim, sourceUrl: redes}}}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ", orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname, jpegThumbnail: null}}}
const kick = function (from, orangnya) { 
for (let i of orangnya) {
conn.groupParticipantsUpdate(m.chat, [i], "remove")}}  
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Asuncion").format('MMMM Do YYYY, h:mm:ss a')
	
// ═════════════𓊈『 MENSAJES 』𓊉═════════════
const reply = (text) => {
m.reply(text)} // Enviar una respuesta
const sendAdMessage = (text, title, body, image, url) => { conn.sendMessage(from, {text: text, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}
const sendImage = ( image, caption ) => { conn.sendMessage(from, { image: image, caption: caption }, { quoted: m })}
const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(from, { image:  {url: url }, caption: caption }, { quoted: m })}
	
// ═════════════𓊈『 TIPOS DE MENSAJES Y CITADOS 』𓊉═════════════
const isAudio = type == 'audioMessage' // Mensaje de Audio
const isSticker = type == 'stickerMessage' // Mensaje de Sticker
const isContact = type == 'contactMessage' // Mensaje de Contacto
const isLocation = type == 'locationMessage' // Mensaje de Localización 
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo
const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)

// Responde cmd con media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj })
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)}

//═════════════𓊈『 AUTOREAD 』𓊉═════════════
if (!conn.autoread && m.message && prefix) {
await delay(1 * 1000) 
await conn.sendPresenceUpdate('composing', m.chat)
conn.readMessages([m.key])}

//═════════════𓊈『 ANTISPAM 』𓊉═════════════
if (global.db.data.chats[m.chat].antispam && prefix) {
let user = global.db.data.users[m.sender]
let str = redes
let info = str[Math.floor(Math.random() * str.length)]
const date = global.db.data.users[m.sender].spam + 5000; //600000 
if (new Date - global.db.data.users[m.sender].spam < 5000) return console.log(`[ SPAM ] ➢ ${command} [${args.length}]`)  
global.db.data.users[m.sender].spam = new Date * 1;
}
            
//═════════════𓊈『 ANTIFAKE 』𓊉═════════════
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
let forbidPrefixes = ["1", "994", "48", "43", "40", "41", "49"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje.smsAntiFake}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje.smsAntiArabe}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
	
// ═════════════𓊈『 AUTOBIO 』𓊉═════════════	
    const sk = [
      "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃🌺🍓",
      "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃🫐🌸",
      "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃🍒🍇",
      "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃🍨🍬",
    ];
    const XD = sk[Math.floor(Math.random() * sk.length)];

if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
 let bio = `${XD}\n${runtime(process.uptime())}` 
await conn.updateProfileStatus(bio) 
 setting.status = new Date() * 1 
}} 
	
//═════════════𓊈『 ANTILINK 』𓊉═════════════
//WhatsApp
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
let delet = m.key.participant
let bang = m.key.id
let user = m.sender
const groupAdmins = participants.filter((p) => p.admin)
const listAdmin = groupAdmins.map((v) => `@${v.id.split('@')[0]}`).join('\n〣⃟❥ ')	
let isofc = [nna, nn, nn2, nn3, nn4, nn5, nn6, nn7, nn8, nn9, nn10]
if (!isBotAdmins) return reply(`${lenguaje['smsAntiLink3']()}\n${String.fromCharCode(8206).repeat(850)}\n${lenguaje['smsAntiLink4']()} ${listAdmin}`)
if (isGroupAdmins) return reply(`${lenguaje['smsAntiLink2']()}`)
if (isofc) return reply(`${lenguaje['smsAntiLink5']()}`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.sendMessage(m.chat, {text: `${lenguaje['smsAntiLink']()}`})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}
	
/*if (global.db.data.chats[m.chat].AntiYoutube && !isCreator) {
if (budy.includes("https://youtu.be/") || budy.includes("https://youtube.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`*LINK DE YOUTUBE DETECTADO 📢*\n@${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntInstagram && !isCreator) {
if (budy.includes("https://www.instagram.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`*LINK DE INSTAGRAM DETECTADO 📢*\n@${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiFacebook && !isCreator) {
if (budy.includes("https://facebook.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`*LINK DE FACEBOOK DETECTADO 📢*\n@${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTelegram && !isCreator) {
if (budy.includes("https://t.me/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`*LINK DE TELEGRAM DETECTADO 📢*\n@${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTiktok && !isCreator) {
if (budy.match("https://www.tiktok.com/") || budy.match("https://vm.tiktok.com/")) {
//f (!isCreator) return m.reply(`Es mi creador Salvador`) 
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
conn.sendMessage(m.chat, {text:`*LINK DE TIKTOK DETECTADO 📢*\n\n@${sender.split("@")[0]} Usted sera eliminado de este grupo...`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTwitter) {
if (budy.includes("https://twitter.com/")){
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return m.reply(lenguaje['smsAntiLink5']())
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`*LINK DE TWITER (X) DETECTADO 📢*\n@${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].antiLink2 && !isCreator) {
if (budy.includes("https://")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']()) 
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`*LINK DE HTTPS DETECTADO 📢*\n@${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}*/

//═════════════𓊈『 ANTITOXIC 』𓊉═════════════
if (global.db.data.chats[m.chat].antitoxic && !isCreator) {   
if (budy.match(`g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupon|chupameesta|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|kbron|kbrona|cajetuda|laconchadedios|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|drogas|droga|dr0g4|nepe|p3ne|p3n3|pen3|p.e.n.e|pvt0|puto|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|coño|c0ño|coñ0|c0ñ0|afeminado|drog4|cocaína|marihuana|chocho|chocha|cagon|pedorro|agrandado|agrandada|pedorra|sape|nmms|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|cepe|sepe|sepesito|cepecito|cepesito|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|webo|webos|mamawebos|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|joden|jodemos|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking`)) { 
if (m.isBaileys && m.fromMe) { 
return !0 }   
if (!m.isGroup) { 
return !1 }
if (isGroupAdmins) return
const user = global.db.data.users[m.sender];
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.settings[conn.user.jid] || {};
const isToxic = budy.match; 
user.warn += 1;
if (!(user.warn >= 4)) await conn.sendMessage(m.chat, {text: `Hey @${m.sender.split('@')[0]} decir la palabra *(${budy})* Esta prohibida En este grupo, No seas Toxico(a)\n\nADVERTENCIA\n⚠️ *${user.warn}/4*\n\n${botname}`, mentions: [m.sender]}, {quoted: m})
if (user.warn >= 4) {
user.warn = 0;
await conn.sendMessage(m.chat, {text: `*@${m.sender.split('@')[0]} superaste las 4 advertencias serás eliminado de este grupo 😐....*`, mentions: [m.sender]}, {quoted: m})
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
return !1;
}} 

//═════════════𓊈『 PUBLIC Y PRIVADO 』𓊉═════════════
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return }   
	
//═════════════𓊈『 BANCHAT 』𓊉═════════════
if (global.db.data.chats[m.chat].isBanned) {
return }
	
//═════════════𓊈『 MODO ADMIN 』𓊉═════════════
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return }
	
//═════════════𓊈『 AUTOSTICKER』𓊉═════════════
if (global.db.data.chats[m.chat].autosticker) {    
await conn.sendPresenceUpdate('composing', m.chat)
if (/image/.test(mime) && !/webp/.test(mime)) {
m.reply(`${lenguaje.smsAutoSicker.espera}`)   
let media = await quoted.download()  
await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
console.log(`Auto sticker detected`)
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 40) return reply(`${lenguaje.smsAutoSicker.tiempo}`)  
let media = await quoted.download()  
await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: goblal.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
}}

//═════════════𓊈『 AUTOLEVELUP 』𓊉═════════════
if (global.db.data.users[m.sender].autolevelup) {	
let user = global.db.data.users[m.sender]
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Bogota').format('LT')
if (!user.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
let { exp, role} = global.db.data.users[m.sender]
if (before !== user.level) {
const str = `${lenguaje['smsAutonivel']()} @${sender.split`@`[0]} ${lenguaje['smsAutonivel2']()} ${before}\n${lenguaje['smsAutonivel3']()} ${user.level}\n${lenguaje['smsAutonivel4']()} ${exp}\n${lenguaje['smsAutonivel6']()} ${user.role}\n${lenguaje['smsAutonivel7']()} ${date}\n${lenguaje['smsAutonivel8']()} ${time}\n${lenguaje['smsAutonivel9']()}`.trim()
return conn.sendMessage(m.chat, { text: str, contextInfo:{mentionedJid:[sender]}}, { quoted: fkontak })}}

//═════════════𓊈『 CHATBOT 』𓊉═════════════
if (global.db.data.chats[m.chat].simi) {
let textodem = budy
try {
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/simi?text=${encodeURIComponent(textodem)}`)
let res = await gpt.json()
await delay(1 * 1000) 
await m.reply(res.data.message)
} catch {
if (textodem.includes('Hola','𝐇𝐨𝐥𝐚','һ᥆ᥣᥲ')) textodem = textodem.replace('𝐇𝐨𝐥𝐚', '𝐇𝐞𝐥𝐥𝐨')
if (textodem.includes('hola','𝐡𝐨𝐥𝐚','һ᥆ᥣᥲ')) textodem = textodem.replace('𝐡𝐨𝐥𝐚', '𝐡𝐞𝐥𝐥𝐨')
if (textodem.includes('HOLA','𝐇𝐎𝐋𝐀','һ᥆ᥣᥲ')) textodem = textodem.replace('𝐇𝐎𝐋𝐀', '𝐇𝐄𝐋𝐋𝐎')
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + textodem)
const resu = await reis.json()
const nama = m.pushName || '1'
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0])
const res = await api.json()
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt)
const resu2 = await reis2.json()
await delay(3 * 3000) 
await m.reply(resu2[0][0][0])}}
	
//═════════════𓊈『 ANTIPRIV 』𓊉═════════════
if (!m.isGroup && !isCreator) {
const bot = global.db.data.users[m.sender] || {};
if (global.db.data.settings[numBot].antiprivado) {
conn.sendMessage(m.chat, {text: `${lenguaje['smsAntiPv']()}\n${canales}`, mentions: [sender], },{quoted: m})
await delay(2 * 2000)
await conn.updateBlockStatus(m.chat, 'block')
return
}}
	
if (msg.text.toLowerCase().includes('serbot') || msg.text.toLowerCase().includes('jadibot') || msg.text.toLowerCase().includes('estado') || msg.text.toLowerCase().includes('owner') || msg.text.toLowerCase().includes('infohost') || msg.text.toLowerCase().includes('grupos') || msg.text.toLowerCase().includes('stop')) {
} else if (global.db.data.settings[numBot].antipv && !m.isGroup && !isCreator) {
  return;
}
	
//═════════════𓊈『 AFK 』𓊉═════════════
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`[ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤 ]\n\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : ${clockString(new Date - afkTime)}`.trim())}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`*🕔 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺 🕔*\n${user.afkReason ? '\n*𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n*𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 :* ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''
}    
	
// ═════════════𓊈『 CONSOLA 』𓊉═════════════	
if (m.message) {
console.log(chalk.bold.magenta(' ༺  🍓  𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓 ༻'), 
chalk.bold.cyanBright(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━┅┅\n┃🏷️  +${conn.user.id.split("@")[0]}`), 
chalk.bold.yellow(`${lenguaje.Bio.fecha}`) + chalk.yellow(moment(t * 1000).tz(place).format('DD/MM/YY'),	
chalk.bold.red(`${lenguaje.Bio.hora}`) + chalk.red(moment(t * 1000).tz(place).format('HH:mm:ss'),
chalk.bold.magenta(`${lenguaje.Bio.usuario}`) + chalk.magenta(pushname) + '  ➜ ', gradient.rainbow(userSender), 
m.isGroup ? chalk.bold.yellow(`${lenguaje.Bio.grupo}`) + chalk.yellow(groupName) + '  ❥ ': chalk.bold.yellow(`${lenguaje.Bio.priv}`), 
chalk.bold.cyanBright('\n┃') + chalk.bold.white(`${lenguaje.Bio.mensaje}${msgs(m.text)}`) + chalk.bold.cyanBright(`\n┗━━━━━━━━━━━━━━━━━━━━━━━━┅┅\n`)
)))}

// ═════════════𓊈『 MULTILENGUAJE 』𓊉═════════════	
const { en, es } = require('./libs/idiomas/total-idiomas.js')
let user = global.db.data.users[m.sender]
if (user.Language == 'es') {
global.lenguaje = es
} else if (user.Language == 'en') {
global.lenguaje = en
} else {
global.lenguaje = es}  

let settings = global.db.data.settings[conn.user.jid]
if (settings.Language == 'es') {
global.language = es
} else if (settings.Language == 'en') {
global.language = en
} else {
global.language = es}   
	
// ═════════════𓊈『 viewOnceMessage 』𓊉═════════════	
if (m.mtype == 'viewOnceMessageV2') { 
if (global.db.data.chats[m.chat].viewonce) return
teks = `\`𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰\``
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption} ${teks}`, m)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption} ${teks}`, m)
}}
//falta tictactoe

//*. : ｡✿ * ﾟ * .: ｡ ✿ * ﾟ  * . : ｡ ✿ *
	
switch (prefix && command) { 
case 'test2':
const testZ = generateWAMessageFromContent(from, { viewOnceMessage: { message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, interactiveMessage: proto.Message.InteractiveMessage.create({ body: proto.Message.InteractiveMessage.Body.create({ text: '' }), footer: proto.Message.InteractiveMessage.Footer.create({ text: 'Select an option.' }), header: proto.Message.InteractiveMessage.Header.create({ title: 'Hello, thank you for using our bot, now, there are only a few steps left to finish, please select your preferred language.', subtitle: 'select an option.', hasMediaAttachment: false }), nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ buttons: [ { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Spanish","id":"spanish"}` }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"English","id":"english"}` } ], })})}}}, {})
conn.relayMessage(testZ.key.remoteJid, testZ.message, { messageId: testZ.key.id }, {quoted: m})
break 
		
case 'plist':
conn.relayMessage(from, { viewOnceMessage: { message: { interactiveMessage: { header: { title: 'Lista' }, body: { text: '💤' }, nativeFlowMessage: { buttons: [ { name: 'single_select', buttonParamsJson: JSON.stringify({ title: 'Click', sections: [ {title: 'Lista', highlight_label: 'Yaoi', rows: [{ title: 'menu1', id: 'menu1' }]}, { highlight_label: 'ON', rows: [{ header: 'Test', title: 's',description: 's', id: 'tes'}] }, { highlight_label: 'ON', rows: [ { header: 'Test', title: 'status', description: 'status', id: 'te' }]}]})}], messageParamsJson: '' }}}}}, {})		
break 
case 'ltest':
conn.relayMessage(from, { viewOnceMessage: { message: { interactiveMessage: { header: { title: 'Language' }, body: { text: 'Select your language' }, nativeFlowMessage: { buttons: [{ name: 'single_select', buttonParamsJson: JSON.stringify({ title: 'Select Language', sections: [{ title: 'Languages', rows: [ { title: 'English', id: 'english' }, { title: 'Español', id: 'spanish' }]}]})}],messageParamsJson: ''}}}}}, {});
const msg = await conn.awaitMessage({
	chatJid: from,
	sender: sender,
	filter: (message) => message?.message?.extendedTextMessage?.text || message?.message?.conversation
})
const senderKey = m?.message?.extendedTextMessage?.text || msg?.message?.conversation
if (senderKey === "Español") {
	m.reply("se seleccoono Español")
} else if (senderkey === "English") {
	m.reply("se selecciono Inglés")
}
break
		
case 'priv': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`y el texto`)
if (args[0] === "on") {
global.db.data.settings[numBot].antiprivado = true
m.reply(`✅ activado`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antiprivado = false
m.reply(`🟢 desactivado`)}}
break	
		
//idiomas 
case 'idioma': {
let settings = global.db.data.settings[conn.user.jid]
const sendLanguage = generateWAMessageFromContent(conn.user.id.split(":")[0] + "@s.whatsapp.net", { viewOnceMessage: { message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, interactiveMessage: proto.Message.InteractiveMessage.create({ body: proto.Message.InteractiveMessage.Body.create({ text: '' }), footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }), header: proto.Message.InteractiveMessage.Header.create({ title: 'Hello, thank you for using our bot, now, there are only a few steps left to finish, please select your preferred language.', subtitle: 'select an option.', hasMediaAttachment: false }), nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ buttons: [ { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Español","id":".idioma es"}` }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"English","id":".idioma en"}` } ], })})}}}, {})
if (!text) return conn.relayMessage(sendLanguage.key.remoteJid, sendLanguage.message, { messageId: sendLanguage.key.id })
try {
if (body.includes(`es`)) { 
idioma = 'es' 
idiomas = 'español'
}
if (body.includes(`en`)) {
idioma = 'en'
idiomas = 'ingles'
}
settings.language = idioma
m.reply(`se cambio a ` + idiomas)
} catch (e) {
m.reply(`error`)}}	
	break 
		
case 'Language': case 'idiomas': { 	
	let user = global.db.data.users[m.sender]
if (!text) return m.reply(`a que idioma cambio?`) 
if (body.includes(`1`)) { 
idioma = 'es' 
idiomas = 'español'
}
if (body.includes(`2`)) {
idioma = 'en'
idiomas = 'ingles'
}
user.Language = idioma
m.reply(`se cambio a ` + idiomas)}  
break 
		
case 'imagen':
let pp = await conn.profilePictureUrl(m.chat, 'image')	
await conn.sendMessage(m.chat, pp) 		
break

case 'serbot': case 'qr':
jadibot(conn, m, command)  
break  
//case 'jadibot': case 'sercode':
//jadibot2(conn, m, command, text, args, sender)
//break		
case 'deljadibot': case 'stop': 
killJadibot(conn, m, prefix, command)
break 
case 'bots': case 'listbots': 
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const message = user.map((v, index) => `[${index + 1}] ${v.user.name || '•'}\nwa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${prefix}estado`).join('\n\n');
const replyMessage = message.length === 0 ? '' : message;
const totalUsers = user.length;
const responseMessage = `*𝘚𝘜𝘉𝘉𝘖𝘛𝘚 𝘊𝘖𝘕𝘌𝘊𝘛𝘈𝘋𝘖𝘚:* ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await conn.sendMessage(m.chat, {text: responseMessage, mentions: conn.parseMention(responseMessage)}, {quoted: m});
break
		
// 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄 𝐊𝐈𝐌𝐃𝐀𝐍𝐁𝐎𝐓-𝐌𝐃
case 'estado': case 'heydan': case 'status':
await estado(conn, ftkim, sendImage, from, m) 
break		
case 'ping':  
var timestamp = speed();  
var latensi = speed() - timestamp  
conn.sendMessage(from, { text: `*𝐏𝐨𝐧𝐠 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg });  					
case 'velocidad':
await ping(conn, ftkim, sendImage, from, m)
break;		
case 'infokim': case 'infobot': 
await infobot(conn, ftkim, sendImage, from, m) 
break		
case 'creador': 
await Info(conn, m, from, sendImage)
break
case 'colaboradores': 
await col(conn, m, from, sender, fs, sendImage)
break
case 'Colaborador1': case 'colab1': 
await col1(conn, m, from)
break      
case 'gruposkim': case 'grupos': case 'groupkim': 
await grupo(conn, m, from)
break		
case 'donacion': case 'donate': case 'donar':
await dona(conn, m, from, sendImage)
break
case 'cuentaskim': case 'cuentaskimbot': case 'cuentas': 
await cuentas(conn, m, from)
break
case 'listagrupos': case 'grouplist': case 'listagru': 
await listag(conn, m, from)
break 
case 'menu': 
await menu(conn, m, from)
break 		
case 'menu1': 
await menu1(conn, m, from, fs.readFileSync('./src/img_cuadrada.jpg'));
break
case 'report': case 'reportar': {
if (!text) return m.reply(`🌸 *𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐂𝐎𝐍 𝐅𝐀𝐋𝐋𝐀*\n❖⃟݊🍒───────────────────────╮\n 【🌺】𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix + command} 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐧𝐨 𝐟𝐮𝐧𝐜𝐚\n❖⃟݊🫐───────────────────────╯`)
conn.sendMessage("120363161344146891@g.us", {text: `┏━━『 *🌺 𝐑 𝐄 𝐏 𝐎 𝐑 𝐓 𝐄 🌺* 』━━ ✿\n┃\n┃ *𖡹 𝐍 𝐔 𝐌 𝐄 𝐑 𝐎:* 🍒\n┃ *➥*  wa.me/${m.sender.split("@")[0]}\n┃\n┃ *𖡹 𝐌 𝐄 𝐍 𝐒 𝐀 𝐉 𝐄:* 🫐\n┃ *➥* ${text}\n┗━━━━━━━『 *${vs}* 』━━━━━━━━✿`})
m.reply(`li.✰⏦｡⏦✰⏦｡⏦✰⏦｡⏦✰⏦｡⏦✰.li\n*🍓꙰ᷜූා𝆺▸ 𝐄́𝐗𝐈𝐓𝐎*\n*╰❥* 𝐄𝐥 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐟𝐮𝐞 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐦𝐢𝐬 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐨𝐫𝐞𝐬, 𝐬𝐢 𝐞𝐬 𝐧𝐞𝐜𝐞𝐬𝐚𝐫𝐢𝐨 𝐧𝐨𝐬 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚𝐫𝐞𝐦𝐨𝐬 𝐜𝐨𝐧 𝐮𝐬𝐭𝐞𝐝, 𝐝𝐞 𝐬𝐞𝐫 𝐟𝐚𝐥𝐬𝐨\n𝐞𝐥 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐬𝐞𝐫𝐚́ 𝐢𝐠𝐧𝐨𝐫𝐚𝐝𝐨 𝐲 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨(𝐚)\n𝐝𝐞𝐥 𝐛𝐨𝐭 𝐔𝐧𝐔.\nli.✰⏦｡⏦✰⏦｡⏦✰⏦｡⏦✰⏦｡⏦✰.li`) 
}
break 
		
// 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀𝐒
case 'yts': case 'ytsearch': case 'acortar': case 'google': case 'imagen': case 'traducir': case 'translate': case "tts": case 'ia': case 'chatgpt': case 'dalle': case 'ia2': case 'aimg': case 'imagine': case 'dall-e': case 'ss': case 'ssweb': case 'wallpaper': case 'hd': await buscadores(m, command, conn, text, from, fkontak, prefix, args, quoted, lolkeysapi)
break

// 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒
case 's': case 'sticker':  
sticker(conn, mime, quoted, m) 
break; 
case 'wm': case 'take': 
wm2(conn, args, quoted, mime, m) 
break 
case 'attp': 
attp(conn, text, lolkeysapi, fkontak, m) 
break
case 'dado': 
dado(conn, lolkeysapi, fkontak, m) 
break

//𝐆𝐑𝐔𝐏𝐎 
case 'grupo': 
grup(conn, m, args, isBotAdmins, isGroupAdmins, command, prefix, text)
break
case 'delete': case 'del': 
del(conn, m, isBotAdmins, isGroupAdmins)
break  		           
case 'hidetag': case 'notificar': 
hide(conn, m, isBotAdmins, isGroupAdmins, q, participants)
break 
case 'setppname': case 'nuevonombre': case 'newnombre': 
setna(conn, m, isBotAdmins, isGroupAdmins, text)
break
case 'setdesc': case 'descripción':  
setde(conn, m, isBotAdmins, isGroupAdmins, text)
break
case 'setppgroup': case 'setpp': 
setpp(conn, m, isBotAdmins, isGroupAdmins, quoted, prefix, command, mime, args, from)
break
case 'anularlink': case 'resetlink': case 'revoke':
let res = conn.groupRevokeInvite(m.chat)
break
case 'add': case 'agregar': case 'invitar': 
add(conn, m, isBotAdmins, isGroupAdmins, text, sender, prefix)
break           
case 'kick': case 'echar': case 'sacar':
k(conn, m, isBotAdmins, isGroupAdmins, quoted, text, sender)
break 
case 'promote':
p(conn, m, isBotAdmins, isGroupAdmins, quoted, sender)
break
case 'demote':
d(conn, m, isBotAdmins, isGroupAdmins, quoted, sender)
break     

case 'link': case 'linkgc': 
link(conn, m, isBotAdmins)
break                        		
case 'banchat': 
ban(m, text, command, args)
break              
case 'tagall': case 'invocar': case 'todos':
tag(conn, m, isBotAdmins, isGroupAdmins, participants, q)
break            
case 'admins': case 'administradores': 
adm(conn, participants, groupMetadata, args, m) 
break
case 'infogrupo': case 'groupinfo':
infogr(conn, participants, groupMetadata, fkontak, m) 
break  
case 'warn': case 'advertencia':
warn1(conn, m, isBotAdmins, isGroupAdmins, sender, command, text, delay) 
break 
case 'unwarn': case 'quitardvertencia': 
warn2(conn, m, isBotAdmins, isGroupAdmins, sender, command, delay) 
break
case 'listwarn': 
listw(conn, isCreator, m) 
break
case 'listonline': case 'liston': 
online(conn, sender, args, store, m) 
break

//𝐑𝐏𝐆
case 'reg': case 'verificar':
await reg(conn, m, sender, text, fkontak, delay)
break            
case 'unreg': 
reg1(args, m, sender)  
break
case 'myns':
reg2(sender, m)
break 
case 'afk': {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`╭━─━─━─≪ 𝙰𝙺𝙵 ≫─━─━─━╮
┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${pushname}
┃ 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴
┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤
┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''}
╰━─━─━─≪ ${vs} ≫─━─━─━╯`)}
break             
case 'buy': case 'buyall': {
await buy(conn, m, sender, args, command, text, fkontak)}
break
case 'minar': case 'mine':
await mine(conn, m, sender, fkontak)
break 
case 'trabajar': case 'work': case 'w': {
await work(conn, m, sender, fkontak)}
break
case 'rob': case 'robar': { 
await rob(conn, m, sender, fkontak)}
break
case 'bal': case 'balance': case 'diamond': {
await bal(conn, m, sender, fkontak)}
break
case 'claim': case 'daily': 
await claim(conn, m, sender)
break
case 'perfil':
await perfil(conn, who, sender, pushname, fkontak, m) 
break
case 'levelup': case 'nivel': {  
nivel(conn, sender, canLevelUp, xpRange, m, pushname)}
break  
case 'cofre':
cofre(conn, sender, m) 
break 
case 'lb': case 'leaderboard':
lb(conn, participants, args, m) 
break 
		
//juegos
case 'simi': case 'alexa': case 'siri':
await game(m, text, pushname, command)
break  
case 'gay': 
await game1(conn, m, participants, sender, who)
break            
case 'pareja': case 'formarpareja':
await game2(conn, m, pushname, participants, sender)
break
case 'fake': 
await game3(conn, text, prefix, command, body, from, m, sender, quoted)
break
case 'follar': case 'violar':
game4(conn, m, pushname, text, sender)
break 
case 'ppt': case 'suit':
game5(conn, m, pushname, text, sender)
break
case 'pregunta': case 'preg':
game6(text, command, m)  
break   
case 'doxear': case 'doxxeo': 
game7(conn, pickRandom, text) 
break
case 'personalidad': 
game8(conn, text, pickRandom, m) 
break   
case 'slot':  case 'apuesta':
game9(conn, args, prefix, command, msToTime, m) 
break
case 'verdad':
game10(sendImageAsUrl, pickRandom)   
break   
case 'reto': 
game11(pickRandom, sendImageAsUrl)   
break                
case 'top': 
game12(conn, text, participants, pickRandom, m) 
break 
case 'topgays': case 'topotakus': 
game13(conn, participants, command, m) 
break 
case 'piropo':
game14(m, pickRandom) 
break
case 'racista':
game15(m, body)  
break
case 'love': 
game16(conn, text, m, sender) 
break
//convertidores
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': 
efec(conn, command, mime, quoted, exec, prefix, m, from) 
break   
case 'toaudio': case 'tomp3': 
tomp3(conn, mime, quoted, m) 
break
case 'toimg': case 'toimagen':
toimg(conn, mime, quoted, exec, m) 
break
case 'tourl': 
url(conn, mime, quoted, util, m) 
break
case 'toanime': 
toanime(conn, mime, quoted, lolkeysapi, m) 
break

//descargas		    
case 'play': case 'musica': 
play(conn, text, command, m)  
break   
case 'play2': case 'video': 
play2(conn, text, command, args, m)  
break 
case 'play3': case 'playdoc': case 'playaudiodoc': case 'ytmp3doc': 
play3(conn, text, command, args, m)  
break
case 'play4': case 'playdoc2': case 'playvideodoc': case 'ytmp4doc': 
play4(conn, text, command, args, m)   
break
case "ytmp3": case "ytaudio": 
mp3(conn, args, text, command, fkontak, ytplayvid, m)
break 
case 'ytmp4': case 'ytvideo': 
mp4(conn, args, text, command, fkontak, m)
break   
case 'music': case 'spotify':
spoti(conn, text, m, from) 
break
case 'gitclone':
git(conn, args, command, m) 
break
case 'tiktok': 
tiktok(conn, text, command, q, m) 
break     
case 'lyrics': case 'letra': 
letra(conn, text, command, fkontak, m) 
break
case 'mediafire': 
mediafire(conn, text, command, mediafireDl, m) 
break 
case 'facebook': case 'fb':
fb(conn, text, command, lolkeysapi, args, m) 
break
case 'instagram': case 'ig':
ig(conn, text, command, lolkeysapi, args, m) 
break
case 'igstalk':
ig2(conn, args, command, m) 
break
case 'apk': case 'modoapk':
apk(conn, text, m)  
break
		
case 'yaoi': {
conn.sendMessage(m.chat, {image: {url: "https://api.boxmine.xyz/api/nsfw/yaoi"}}, {quoted: m})
}		
break

case 'autolevel': case 'lvl': {
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`usado erróneamente`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`activo`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`desactivado`)}}	
break 

case 'getcase': {
if (!isCreator) return m.reply('*🚩 Comando solo para el creador.*')
const turbrek = `break`
if (!args[0]) return m.reply("*🚩 Ingresa el nombre del case.*")
try {
m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./kim.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
m.reply("*🚩 Case no encontrado.*")
}
}
break;

case 'antilink': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
if (args[0].toLowerCase() === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`1`)
db.data.chats[m.chat].antilink = true
m.reply(`2`)
} else if (args[0].toLowerCase() === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`3`)
db.data.chats[m.chat].antilink = false
m.reply(`4`)
} else {
conn.sendPoll(m.chat, "este es el ejemplo", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
}
}
break
		
case 'welcome': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
if (args[0] === "on") {
if (global.db.data.chats[m.chat].welcome) return reply (`໒🫐⃟𓄻໋⃕ꦶꦹꫂ⊁ *𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐚𝐧𝐭𝐞𝐫𝐢𝐨𝐫𝐦𝐞𝐧𝐭𝐞.*`);  
global.db.data.chats[m.chat].welcome = true;
reply(`໒🫐⃟𓄻໋⃕ꦶꦹꫂ⊁ *𝐒𝐞 𝐚𝐜𝐭𝐢𝐯𝐨 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞.*`);
}
else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].welcome) return reply (`໒🍓⃟𓄻໋⃕ꦶꦹꫂ⊁ *𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐚𝐧𝐭𝐞𝐫𝐢𝐨𝐫𝐦𝐞𝐧𝐭𝐞.*`);
global.db.data.chats[m.chat].welcome = false;
reply(`໒🍓⃟𓄻໋⃕ꦶꦹꫂ⊁ *𝐒𝐞 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐨́ 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞.*`);
}
}
break;

case 'join': case 'unete': {
if (!isCreator) return reply(mess.owner) 
if (!text) return reply ('Masukkan Link Group!') 
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply ('Link Invalid!') 
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result)
}
break
		
case 'leave': case 'salte': {
if (!isCreator) return reply(mess.owner) 
reply(m.chat, `*Adios fue un gusto estar aqui hasta pronto*`);
await conn.groupLeave(m.chat);
}
break

case 'prueba': {
if (!m.isGroup) return reply(mess.group) 
if (!isBotAdmins) return reply(mess.botAdmin) 
if (!isGroupAdmins) return reply(mess.admin)
    try{
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
const response = await conn.groupRequestParticipantsList(m.chat)
await conn.groupRequestParticipantsUpdate(m.chat, users, 'approve')
} catch {
await conn.groupRequestParticipantsUpdate(m.chat, response, 'approve')
}
}
break				

case 'prueba2': {
if (!m.isGroup) return reply(mess.group) 
if (!isBotAdmins) return reply(mess.botAdmin) 
if (!isGroupAdmins) return reply(mess.admin) 
const response = await conn.groupRequestParticipantsList(m.chat)
await conn.groupRequestParticipantsUpdate(m.chat, response, 'reject')
}
break			
		
case 'kick': case 'ban': case 'sacar': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
conn.groupParticipantsUpdate(m.chat, [users], 'remove');
}
break

case 'add': case 'agregar': case 'añadir': {
if (!m.isGroup) return reply(mess.group) 
if (!isBotAdmins) return reply(mess.botAdmin) 
if (!isGroupAdmins) return reply(mess.admin) 
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await conn.groupParticipantsUpdate(m.chat, users, 'add')
}
break		

case 'promote': case 'daradmin': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => conn.sendMessage(m.chat, {text: "*🍓꙰ᷜූා𝆺▸ 𝐀𝐓𝐄𝐍𝐂𝐈𝐎́𝐍*\n*╰❥* 𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐮𝐧 𝐧𝐮𝐞𝐯𝐨 𝐚𝐝𝐦𝐢𝐧\nli.⏦｡⏦✰⏦｡⏦✰⏦｡⏦✰⏦.li", mentions: participants.map((a) => a.id)}, {quoted: m}),).catch((err) => reply("Error"));
}
break

case 'demote': case 'quitar': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply("Respuesta")).catch((err) => reply("Error"));
}
break

case 'autoadmin': case 'tenerpoder': {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
reply('Ya eres admin 😎') 
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break

case 'block': {
if (!isCreator) return reply(mess.owner) 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return reply(mess.owner) 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break 
		
case 'setnameg': case 'setnombre': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
if (!text) return reply ('Text ?') 
await conn.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'setdesc': case 'setdescripcion': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
if (!text) return reply ('Text ?')
await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'setppbot': {
if (!isCreator) throw mess.owner
if (!/image/.test(mime)) return reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
if (/webp/.test(mime)) return reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
let media = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.updateProfilePicture(numBot2, { url: media }).catch((err) => fs.unlinkSync(media)) 
m.reply(mess.success)
}
break		

case 'setnameb': case 'setnamebot': {
if (!text) return reply(`Example : ${prefix + command} WhatsApp ✅`) 
let name = await conn.updateProfileName(text)
m.reply(`Successfully renamed bot to ${name}`)
}
break

case 'setstatus': case 'setbiobot': case 'setbio': {
if (!text) return reply(`this is a WhatsApp Bot named Novi Botz`) 
let name = await conn.updateProfileStatus(text)
m.reply(`Successfully changed bot bio status to ${name}`)
}
break
		
case 'setppgroup': case 'setppgrup': case 'setppg': {
if (!m.isGroup) throw mess.group
if (!isGroupAdmins) throw mess.admin
if (!quoted) return reply(`*⚠️Y la imagen?*`)
if (!/image/.test(mime)) return reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
if (/webp/.test(mime)) return reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`) 
let media = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
		
case 'banchat': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
if (args[0] === "on") {
if (db.data.chats[m.chat].ban) return reply(`*Chat baneado*`);
db.data.chats[m.chat].ban = true;
reply(`𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚏𝚞𝚎 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘`);
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].ban) return reply(`*Chat desbaneado*`);
db.data.chats[m.chat].ban = false;
reply(`𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚏𝚞𝚎 𝚍𝚎𝚜𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘`);
}
}
break

case 'grupo': case 'grup': {
if (!m.isGroup) throw reply(mess.group) 
if (!isBotAdmins) throw reply(mess.botAdmin) 
if (!isGroupAdmins) return reply(mess.admin);
if (args[0].toLowerCase() === 'close'){
await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`cerrado`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open'){
await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`abierto`)).catch((err) => m.reply(jsonformat(err)))
} 
}
break

case 'editinfo': case 'editarinfo': {
if (!m.isGroup) throw reply(mess.group) 
if (!isBotAdmins) throw reply(mess.botAdmin) 
if (!isGroupAdmins) return reply(mess.admin);
if (args[0].toLowerCase() === 'open'){
await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Si`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'close'){
await conn.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`No`)).catch((err) => m.reply(jsonformat(err)))
} 
}
break
		
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return reply (mess.group) 
if (!isBotAdmins) return reply (mess.botAdmin) 
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break		

case 'blackpink':
case 'bloodfrosted':
case 'neon':
case 'minion':
case 'toxic':
case 'cloud':
case 'avenger':
case 'space':
if (!text) { m.reply('test') }
lol = `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkeysapi}&text=${text}`
sendImageAsUrl(lol, `aqui esta su texto en estilo ${command}`)
break

case 'hidetag':
if (!m.isGroup) return reply(mess.group);
if (isGroupAdmins || isCreator) {
conn.sendMessage(m.chat,{ text: q ? q : "", mentions: participants.map((a) => a.id) },{ quoted: isGroupAdmins ? null : m });
}
break;

case 'tagall': case 'invocar': {
if (!m.isGroup) return reply(mess.group);
if (!isBotAdmins) return reply(mess.botAdmin);
if (!isGroupAdmins) return reply(mess.admin);
let teks = `✿ ━〔 *🍬 𝐈𝐍𝐕𝐎𝐂𝐀𝐂𝐈𝐎́𝐍 𝐌𝐀𝐒𝐈𝐕𝐀  🍬* 〕━ ✿\n\n`
teks += `✿ 𝐒𝐔 𝐀𝐃𝐌𝐈𝐍 𝐋𝐎𝐒 𝐈𝐍𝐕𝐎𝐂𝐀, 𝐑𝐄𝐕𝐈𝐕𝐀𝐍\n\n`
teks += `✿ 𝐌𝐄𝐍𝐒𝐀𝐉𝐄: ${q ? q : 'no message'}\n\n`
for (let mem of participants) {
teks += `┃ @${mem.id.split('@')[0]}\n⁩`
}
teks += `┃\n`
teks += `┃☛𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝙈𝘿 : 𝐊𝐢𝐦 𝐃𝐚𝐧\n`
teks += `╰━━━━━[ *✰ 𝐔𝐰𝐔 ✰* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
		
case 'totag': {
if (!m.isGroup) return reply (mess.group) 
//if (!isBotAdmins) return reply (mess.botAdmin) 
//if (!isGroupAdmins) return reply (mess.admin) 
if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`) 
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
	
case 'verificar':
let verify
if (text == 1) { 
verify = 'Ya esta regido'.trim()
} else {
verify = `🌺◌⑅⃝●♡⋆♡ *𝐕 𝐄 𝐑 𝐈 𝐅 𝐈 𝐂 𝐀 𝐑*♡⋆♡●⑅⃝◌🌺

𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐢𝐧𝐠𝐫𝐞𝐬𝐚𝐫 𝐭𝐮 𝐧𝐨𝐦𝐛𝐫𝐞 / 𝐚𝐩𝐨𝐝𝐨 𝐲 𝐭𝐮 𝐞𝐝𝐚𝐝 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞. 

*_🫐𝐄 𝐉 𝐄 𝐌 𝐏 𝐋 𝐎🫐_*

#verificar Kimdan.18`.trim()
}
await conn.sendMessage(m.chat, { text: verify }, { quoted: m })
break

case 'update': case `actualizar`:
//if (!isCreator) return conn.sendMessage(from, { text: `*ESTE COMANDO ES PARA MI JEFE*` }, { quoted: msg });    
/*try {    
let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
await conn.sendMessage(from, { text: stdout.toString() }, { quoted: msg });
} catch { 
let updatee = execSync('git remote set-url origin https://github.com/Kimdanbot-MD/KimdanBot-MD.git && git pull')
await conn.sendMessage(from, { text: updatee.toString() }, { quoted: msg })}*/
try {
const stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
let message = stdout.toString()
if (message.includes('Already up to date.')) message = 'Nada por actualizar'
if (message.includes('Updating')) message = 'Actualizado\n\n' + stdout.toString()
m.reply(message)
} catch (e) {
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('sessions/') || line.includes('npm-debug.log')) {
return null
}
return '*- ' + line.slice(3) + '*'
}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `Archivos en Conflicto\n\n${conflictedFiles.join('\n')}`
await m.reply(errorMessage)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = 'Error'
if (error.message) {
errorMessage2 += '\n*Mensaje de error:* ' + error.message
}
await reply(errorMessage2)
}
}
break

//👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄
case 'testt':
//conn.sendMessage(m.chat, {image: {url: ftkim}, caption: redes}, {quoted: m})
conn.sendMessage(from, {text: 'azami.js', contextInfo: { forwardingScore: 888, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363161344146891@newsletter', serverMessageId: '', newsletterName: 'K I M'}, externalAdReply: { title: 'KimBug 🏳️‍🌈', body: wm, mediaType: 1, renderLargerThumbnail: false, previewType: 'PHOTO', showAdAttribution: true, thumbnailUrl: ftkim, sourceUrl: redes }}}, {quoted: m})
break
//👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄👄
case 'reiniciar': case 'restart': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
m.reply('_🔄 Reiniciando Bot..._');
await delay(3 * 3000) 
conn.ws.close()}
break
		
case 'pinterest':
if (!text) return reply('𝚒𝚗𝚐𝚛𝚎𝚜𝚊 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚋𝚞𝚜𝚌𝚊𝚛 𝚎𝚗 𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝')
m.reply(mess.wait)
lol = await pinterest(text) //.catch(m.reply)
result = lol[Math.floor(Math.random() * lol.length)];
sendImageAsUrl(result, `*-------「 PINTEREST 」-------*\n🤠 busqueda de ${text}\n🔗 url ${result}`)
d = Math.floor(Math.random() * 6) + 5
global.db.data.users[m.sender].money -= d
m.reply(`has gastado ${d} dolares`);
bbrea
		
case 'diego':
reply (`⣿⣿⣿⠟⢹⣶⣶⣝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡟⢰⡌⠿⢿⣿⡾⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⢸⣿⣤⣒⣶⣾⣳⡻⣿⣿⣿⣿⡿⢛⣯⣭⣭⣭⣽⣻⣿⣿⣿ ⣿⣿⣿⢸⣿⣿⣿⣿⢿⡇⣶⡽⣿⠟⣡⣶⣾⣯⣭⣽⣟⡻⣿⣷⡽⣿ ⣿⣿⣿⠸⣿⣿⣿⣿⢇⠃⣟⣷⠃⢸⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽ ⣿⣿⣿⣇⢻⣿⣿⣯⣕⠧⢿⢿⣇⢯⣝⣒⣛⣯⣭⣛⣛⣣⣿⣿⣿⡇ ⣿⣿⣿⣿⣌⢿⣿⣿⣿⣿⡘⣞⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ⣿⣿⣿⣿⣿⣦⠻⠿⣿⣿⣷⠈⢞⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ⣿⣿⣿⣿⣿⣿⣗⠄⢿⣿⣿⡆⡈⣽⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻ ⣿⣿⣿⣿⡿⣻⣽⣿⣆⠹⣿⡇⠁⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣾ ⣿⠿⣛⣽⣾⣿⣿⠿⠋⠄⢻⣷⣾⣿⣧⠟⣡⣾⣿⣿⣿⣿⣿⣿⡇⣿ ⢼⡟⢿⣿⡿⠋⠁⣀⡀⠄⠘⠊⣨⣽⠁⠰⣿⣿⣿⣿⣿⣿⣿⡍⠗⣿ ⡼⣿⠄⠄⠄⠄⣼⣿⡗⢠⣶⣿⣿⡇⠄⠄⣿⣿⣿⣿⣿⣿⣿⣇⢠⣿ ⣷⣝⠄⠄⢀⠄⢻⡟⠄⣿⣿⣿⣿⠃⠄⠄⢹⣿⣿⣿⣿⣿⣿⣿⢹⣿ ⣿⣿⣿⣿⣿⣧⣄⣁⡀⠙⢿⡿⠋⠄⣸⡆⠄⠻⣿⡿⠟⢛⣩⣝⣚⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣾⣿⣿⣄⠄⠄⠄⣴⣿⣿⣿⣇⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡀⠛⠿⣿⣫⣾⣿`) 
break 
case 'mario':
reply (`🟥🟥🟥⬜⬜🟥🟥🟥
🟥🟥🟥⬜⬜🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥🟥
🏻⬜🟦🏻🏻🟦⬜🏻
🏻⬜🟦🏻🏻🟦⬜🏻
🟫🏻🏻🏻🏻🏻🏻🟫
🟫🟫🏻🏻🏻🏻🟫🟫
🏻⬛⬛⬛⬛⬛⬛🏻`) 
break 

case 'iig': {
if (!q) return reply(`Example ${prefix+command} unicorn_xeon`)
wait() 
const aj = await igstalk(`${q}`)
conn.sendMensage(m.chat, { image: { url : aj.profile }, caption: 
`*Instagram Stalker*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
	
case 'fake':
var gh = body.slice(11);
var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
var replace = gh.split("-")[0];
var target = gh.split("-")[1];
var bot = gh.split("-")[2];

if (mentioned && target && bot) {
var quotedMessage = {
key: { fromMe: false, participant: mentioned }, message: { conversation: target}};

var sendMessageOptions = { text: `${bot}`, quoted: quotedMessage };

conn.sendMessage(from, sendMessageOptions, { quoted: quotedMessage });
} else {
conn.sendMessage(from, { text: `❖⃟݊🍒────────────────────╮
【🌺】𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${prefix + command} @tag-𝐏𝐮𝐭𝐨-🥵
❖⃟݊🫐────────────────────╯`});
}
break
/////////////////////////////////   
   
// ═════════════𓊈『 FUNCIONES 』𓊉═════════════
function pickRandom(list) {return list[Math.floor(list.length * Math.random())]}       
function isNumber(x) {return !isNaN(x)}

// ═════════════𓊈『 AUDIO/TEXTOS 』𓊉═════════════
// ═════════════𓊈『 OWNER 』𓊉═════════════
default:
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.owner)
try {
return reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('$')) {
if (!isCreator) return reply(mess.owner) 
try {
return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
} catch (err) { 
console.log(util.format(err))  
 
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

// ═════════════𓊈『 REPORTE/ERRORS 』𓊉═════════════
let e = String(err) 
conn.sendMessage("573173090446@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲\n\n" + util.format(e), 
contextInfo:{forwardingScore: 9999999, isForwarded: false }})
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)})}}}}

// ═════════════𓊈『 UPDATE/CONSOLA 』𓊉═════════════
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
