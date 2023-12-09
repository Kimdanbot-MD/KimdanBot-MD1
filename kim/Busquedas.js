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
const {googleImage} = require('@bochilteam/scraper') 
const Jimp = require('jimp')
const FormData = require("form-data") 
const os = require('os')

async function buscadores(m, command, conn, text, from, fkontak, prefix, args, q, quoted, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(mess.registrarse)
if (command == 'yts' || command == 'ytsearch') {
if (!text) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ᥣᥲძᥡ gᥲgᥲ\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
const yts = require("youtube-yts");
  const search = await yts(text);
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
  let teks = '*li.╭═══•ೋ•✧๑♡๑✧•ೋ•═══╮.il*\n    ❃⃟▒⃟🌺⃟⃟❀⃟▒⃟⃟🌸⃟⃟❃⃟▒⃟🌺⃟⃟❀⃟▒⃟⃟🌸⃟⃟❀⃟▒⃟⃟─\n\n        *𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀 𝐄𝐍 𝐘𝐎𝐔𝐓𝐔𝐁𝐄*\n        *𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐝𝐞:* ' + text + '\n\n    ❃⃟▒⃟🌸⃟⃟❀⃟▒⃟⃟🌺⃟⃟❃⃟▒⃟🌸⃟⃟❀⃟▒⃟⃟🌺⃟⃟❀⃟▒⃟⃟─\n*li.╰═══•ೋ•✧๑♡๑✧•ೋ•═══╯.il*\n\n';
  let no = 1;
  let themeemoji = "*◖ ⫿۪۪⃕🍧̸͜᷼ᰰ·𖧹ᜓ᭢*";
  for (let i of search.all) {
    teks += `${themeemoji} *⌗* ${no++}\n${themeemoji} *𝐓𝐢́𝐭𝐮𝐥𝐨:* ${i.title}\n${themeemoji} *𝐕𝐢𝐬𝐭𝐚𝐬:* ${i.views}\n${themeemoji} *𝐃𝐮𝐫𝐚𝐜𝐢𝐨́𝐧:* ${i.timestamp}\n${themeemoji} *𝐒𝐮𝐛𝐢𝐝𝐨:* ${i.ago}\n${themeemoji} *𝐔𝐑𝐋:* ${i.url}\n\n─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ╮ 𑁍 ⃟.⃟🍒᭡͡ᩬ𝅲  ╰─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ\n\n`;
  }
  await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
m.react('🍒')
}

if (command == 'google') {
if (!text) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ᥴᥙᥲ́ᥒძ᥆ sᥲᥣᥱ ȷіᥒ᥊\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
let google = require('google-it')
gif = `https://github.com/darlyn1234/recursos/raw/main/video/sIAjM9x.mp4`
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
google({'query': text}).then(res => {
let teks = '*li.╭═══•ೋ•✧๑♡๑✧•ೋ•═══╮.il*\n    ❃⃟▒⃟🫐⃟⃟❀⃟▒⃟⃟❄️⃟⃟❃⃟▒⃟🫐⃟⃟❀⃟▒⃟⃟❄️⃟⃟❀⃟▒⃟⃟─\n\n        *𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀 𝐄𝐍 𝐆𝐎𝐎𝐆𝐋𝐄*\n        *𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐝𝐞:* ' + text + '\n\n    ❃⃟▒⃟🫐⃟⃟❀⃟▒⃟⃟❄️⃟⃟❃⃟▒⃟🫐⃟⃟❀⃟▒⃟⃟❄️⃟⃟❀⃟▒⃟⃟─\n*li.╰═══•ೋ•✧๑♡๑✧•ೋ•═══╯.il*\n\n'
for (let g of res) {
teks += `➥ *𝐓𝐈𝐓𝐔𝐋𝐎* : ${g.title}\n\n`
teks += `➥ *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎́𝐍* : ${g.snippet}\n\n`
teks += `➥ *𝐋𝐈𝐍𝐊* : ${g.link}\n\n﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌\n\n`
} 
conn.sendMessage(from, { video: { url: gif }, caption: teks, gifPlayback: true }, { quoted: fkontak })	})	
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
}

if (command == 'acortar') {
if (!text) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ${md}\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`*【⚠️】𝐄𝐑𝐑𝐎𝐑 🌺*`)
let done = `*༼🌺༽༼🌸༽『𝐀𝐂𝐎𝐑𝐓𝐀𝐍𝐃𝐎』༼🌺༽༼🌸༽*\n\n*➻ 🍒 𝐥𝐢𝐧𝐤:* ${text}\n*➻ 🍓 𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨:* ${shortUrl1}`
conn.sendMessage(m.reply(done)) 
}

if (command == 'imagen') {
const {googleImage} = require('@bochilteam/scraper') 
if (!text) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ȷ᥆᥆ ȷᥲᥱkᥡᥙᥒg\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
try {
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*【🍒】𝐈𝐌𝐀𝐆𝐄𝐍 𝐃𝐄:* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `*【🍒】𝐈𝐌𝐀𝐆𝐄𝐍 𝐃𝐄:* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)
}}}

if (command == 'traducir' || command == 'translate') {
if (!args || !args[0]) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ᥡᥲ᥆і іs 𝗍һᥱ ᑲᥱs𝗍\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`)
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'es';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply(`╭───────────────────\n│ *𖤐𝐓𝐑𝐀𝐃𝐔𝐂𝐂𝐈𝐎́𝐍𖤐*\n╰─ 🧁⃟⃟⃟⃟⃟⃟ ⃟⃟⃟⃟⃟⃟⃟⃟➽ * ֗ ${result2} ִֶָ*\n▭ׅ ▭ֹ ▭ׅ ▭ׅ  ꒰ ⪩⪨ ꒱˳  ▭ֹ ▭ׅ ▭ֹ ▭`)}

if (command == 'tts') {
if (!q) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ᥡᥲ᥆і\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
await conn.sendPresenceUpdate('recording', m.chat)
let texttosay = text
? text
: m.quoted && m.quoted.text
? m.quoted.text
: m.text;
const SpeakEngine = require("google-tts-api"); 
const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `enlace`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}

if (command == 'chatgpt' || command == 'ia') {
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ¿ ᥴᥙᥲ́ᥒ𝗍᥆ ᥱs 𝟐+𝟐?\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
await conn.sendPresenceUpdate('composing', m.chat)
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
db.data.users[m.sender].limit -= 1
}
	
if (command == 'dalle' || command == 'ia2' || command == 'aimg' || command == 'imagine' || command == 'dall-e') {
if (!text) return m.reply(`*⚠️ INGRESE UN TEXTO PARA CREAR UNA IMAGEN Y ASI USAR LA FUNCION DE DALL-E*\n\n*• EJEMPLO:*\n*${prefix + command} gatitos llorando`) 
m.reply('*AGUARDE UN MOMENTO...*') 
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {  
console.log('[ ⚠️ ] Error con la api 1, intentamos con la otra api');  
try {
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
console.log('[ ⚠️ ] Error api 2 tambien esta caida.');
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
 const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
console.log('[ ⚠️ ] Error, api 3 tambien eata caida 😢');
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(`*${info.error} *Error, no se obtuvierón resultados (Api caida)*`) 
console.log(e);}}}}}

if (command == 'ss' || command == 'ssweb') {
const scp1 = require('../libs/scraper') 
if (!q) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ${md}\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: '*〖🍓〗𝐋𝐈𝐒𝐓𝐎 𝐔𝐰𝐔*'}, {quoted:m})}

if (command == 'wallpaper') {
if (!text) return m.reply(`⬪࣪ꥈ ིྀ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n➹⁂⃔꙰͜🌸 *_𝐄𝐉𝐄𝐌𝐏𝐋𝐎:_*\n    ིྀ​᭄ ${command} ȷіᥒ᥊\n⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🫐▭̷໋̟ ۫🪻▭̷໋̟۪۬🫐໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪`);
let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
let _img = _res[Math.floor(Math.random() * _res.length)]
conn.sendMessage(m.chat, { image: { url: _img }, caption: `🎡꙰ᷜූා𝆺▸ *𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐝𝐞:*\n╰❥ *_${text}_*`}, { quoted: m })}


if (command == 'hd') {
const FormData = require("form-data") 
const Jimp =  require("jimp") 
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) return m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍒𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀 𝐔𝐍𝐀 𝐈𝐌𝐀́𝐆𝐄𝐍🍒_`) 
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🍒𝐄𝐋 𝐅𝐎𝐑𝐌𝐀𝐓𝐎 𝐃𝐄𝐋 𝐀𝐑𝐂𝐇𝐈𝐕𝐎 (${mime}) 𝐍𝐎 𝐄𝐒 𝐂𝐎𝐌𝐏𝐀𝐓𝐈𝐁𝐋𝐄🍒_`) 
m.react('⏳') 
try {
let img = await q.download?.();
let pr = await remini(img, "enhance");
conn.sendMessage(m.chat, {image: pr, caption: `*𝘈𝘘𝘜𝘐 𝘛𝘐𝘌𝘕𝘌 𝘓𝘈 𝘐𝘔𝘈𝘎𝘌𝘕 𝘌𝘓 𝘏𝘋*\n\nˢᶦ ˡᵃ ᶦᵐᵃᵍᵉⁿ ⁿᵒ ˢᵃˡᵉ ᵉˡ ᴴᴰ ʳᵉˢᵖᵒⁿᵈᵉ ᵃ ˡᵃ ᶦᵐᵃᵍᵉⁿ ᶜᵒⁿ ᵉˡ ᶜᵒᵐᵃⁿᵈᵒ ᵈᵉ ⁿᵘᵉᵛᵒ`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(`${info.error}\n\n*ʜᴜʙᴏʀ ᴜɴ ᴇʀʀᴏʀ (ᴀᴘɪ ᴄᴀɪᴅᴀ 🤡)*\n\n${e}`) 
console.log(e) 
}}}
 
module.exports = {buscadores}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

async function remini(imageData, operation) {
return new Promise(async (resolve, reject) => {
const availableOperations = ["enhance", "recolor", "dehaze"];
if (availableOperations.includes(operation)) {
operation = operation;
} else {
operation = availableOperations[0];
}
const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
const formData = new FormData();
formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
function (err, res) {
if (err) reject(err);
const chunks = [];
res.on("data", function (chunk) {chunks.push(chunk)});
res.on("end", function () {resolve(Buffer.concat(chunks))});
res.on("error", function (err) {
reject(err);
})},)})}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
