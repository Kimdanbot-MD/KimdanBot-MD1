require('../kim.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../libs/uploader.js')

async function efec(conn, command, mime, quoted, exec, prefix, m, from) {
try {  
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
await conn.sendPresenceUpdate('recording', m.chat)
let set  
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'  
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'   
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'  
if (/earrape/.test(command)) set = '-af volume=12'  
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'  
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'  
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'  
if (/reverse/.test(command)) set = '-filter_complex "areverse"'  
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'  
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'  
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'  
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'   
if (/audio/.test(mime)) {  
let media = await conn. downloadAndSaveMediaMessage(quoted)  
let ran = getRandom('.mp3')  
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {  
fs.unlinkSync(media)  
if (err) return reply(err)  
let buff = fs.readFileSync(ran)  
conn.sendMessage(m.chat, { audio: buff, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": "xD", "showAdAttribution": true}}, ptt: false, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
fs.unlinkSync(ran)})  
} else m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍒 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 🍒_`) 
} catch (e) {  
m.reply(`${mess.error} ${e}`)
console.log(e)}}

async function url(conn, mime, quoted, util, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
if (!mime) return m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🫐 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍  | 𝐕𝐈𝐃𝐄𝐎  𝐏𝐀𝐑𝐀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐀 𝐔𝐑𝐋🫐_`)  
m.reply(mess.wait) 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../libs/uploader') 
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(`*❀͋͋»̞̞̞̞❱⃝⃛🎡ᤦ 𝐋𝐈𝐍𝐊:* ${util.format(anu)}`)
} else if (!/image/.test(mime)) { 
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))  
}
await fs.unlinkSync(media)
}

async function tomp3(conn, mime, quoted, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍒 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 🍒_`) 
if (!quoted) return m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍒 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 🍒_`) 
let { toAudio } = require('../libs/convertir.js')
let media  = await conn.downloadMediaMessage(quoted)
let audio = await toAudio(media, 'mp4')
await conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', contextInfo:{  externalAdReply: { showAdAttribution: true, mediaType:  1, mediaUrl: "𝐦𝐝", title: global.botname, sourceUrl: "𝐦𝐝", thumbnail: imagen1}}}, { quoted: m })}

async function toimg(conn, mime, quoted, exec, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
if (!m.quoted) return m.reply('✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍓 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 🍓_') 
if (!/webp/.test(mime)) return m.reply('✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍓 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 🍓_') 
let media = await conn.downloadAndSaveMediaMessage(m.quoted)
let ran = await getRandom('sk.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)})}

async function toanime(conn, mime, quoted, lolkeysapi, m) { 
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
let _upload = await TelegraPh(media)
try {
let anime = await `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${_upload}`
m.reply(mess.wait);
await conn.sendFile(m.chat, anime, 'error.jpg', null, m) 
} catch (e) {
throw m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍇 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐄𝐑𝐈𝐅𝐈𝐐𝐔𝐄 𝐐𝐔𝐄 𝐄𝐍 𝐋𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 𝐒𝐄 𝐀𝐏𝐑𝐄𝐂𝐈𝐄 𝐄𝐋 𝐑𝐎𝐒𝐓𝐑𝐎 𝐃𝐄 𝐔𝐍𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 🍇_`)}
} else { 
m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🪷 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 🪷_`)}}

module.exports = {efec, url, tomp3, toimg, toanime}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
