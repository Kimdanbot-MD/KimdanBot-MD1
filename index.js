(async () => {
require("./settings")
require("./imagenes")
const { default: makeWASocket, CONNECTING, PHONENUMBER_MCC, Browsers, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { state, saveCreds } = await useMultiFileAuthState('./authFolder')
const chalk = require('chalk')
const gradient = require('gradient-string')
const moment = require('moment')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { smsg, getBuffer, sleep} = require('./libs/fuctions')
const _ = require('lodash')
const NodeCache = require('node-cache')
const os = require('os')
const { execSync } = require('child_process')
const util = require('util')
const pino = require('pino')
const Pino = require("pino")
const cfonts = require('cfonts') 
const { tmpdir } = require('os')
const { join } = require('path')
const PhoneNumber = require('awesome-phonenumber')
const readline = require("readline")
const { Boom } = require('@hapi/boom')
const { parsePhoneNumber } = require("libphonenumber-js")
const methodCodeQR = process.argv.includes("qr")
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const methodCode = !!phoneNumber || process.argv.includes("code")
const useMobile = process.argv.includes("--mobile")
const MethodMobile = process.argv.includes("mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const msgRetry = (MessageRetryMap) => { }
let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetryCounterCache = new NodeCache() //para mensaje de reintento, "mensaje en espera"   

const { readdirSync, statSync, unlinkSync } = require('fs')
const {say} = cfonts;
const color = (text, color) => {
return !color ? chalk.green(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)
}

//base de datos
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./database/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./database/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database.json`) //db
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false	
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    setting: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})}
global.db.chain = _.chain(global.db.data)}
loadDatabase()
	
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 5 * 1000)

//temp
if (!opts['test']) { 
if (global.db) { 
setInterval(async () => { 
if (global.db.data) await global.db.write(); 
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tempdir(), 'temp'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete']))); 
}, 30 * 1000); 
}}

function clearTmp() {
const temp = [tmpdir(), join(__dirname, './temp')];
const filename = [];
temp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
return filename.map((file) => {
const stats = statSync(file);
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) {
return unlinkSync(file); // 3 minutes
}
return false;
})}
	
setInterval(async () => {
await clearTmp()
console.log(chalk.yellow(lenguaje['tmp']()))}, 180000)
//_________________

//sessions/jadibts
function purgeSession() {
let prekey = []
let directorio = readdirSync("./authFolder")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') //|| file.startsWith('authFolder-') || file.startsWith('sender-') || file.startsWith('app-') 
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./authFolder/${files}`)
})} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
})}})
if (SBprekey.length === 0) return; 
console.log(chalk.cyanBright(lenguaje['session']()))
} catch (err) {
console.log(chalk.bold.red(lenguaje['errorsession']()))
}}

function purgeOldFiles() {
const directories = ['./authFolder/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`${lenguaje['archivo']()} ${file} ${lenguaje['archivoborrado']()}`))})
} else {  
console.log(chalk.bold.red(`${lenguaje['archivo']()} ${file} ${lenguaje['archborrado']()}` + err))
} }) }) }) })}
setInterval(async () => {
  await purgeSession();
  console.log(chalk.cyanBright(`${lenguaje['purgesessions']()}`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeSessionSB();
  console.log(chalk.cyanBright(`${lenguaje['purgesubbots']()}`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeOldFiles();
  console.log(chalk.cyanBright(`${lenguaje['purgeoldfiles']()}`));
}, 1000 * 60 * 60);
//___________

const store = makeInMemoryStore({logger: pino().child({level: 'silent', stream: 'store' })})
	
let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./authFolder/creds.json`)) {
do {        
let lineM = '★∻∹⋰⋰ ☆∻∹⋰⋰ ★∻∹⋰⋰ ☆∻∹⋰⋰★∻∹⋰⋰ ☆∻∹⋰⋰'
let linen = '✄ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈'
opcion = await question(`\n\n${lineM}\n 
    ${chalk.blue.bgBlue.bold.cyan('🪷  mᥱ́𝗍᥆ძ᥆ ძᥱ ᥎іᥒᥴᥙᥣᥲᥴі᥆ᥒ 🪷 ')}\n
${lineM}\n
  ${chalk.blueBright('🎀 ꒷︶꒥‧˚૮꒰۵•▴•۵꒱ა‧˚꒷︶꒥🎀')}\n
${chalk.blueBright(`${linen}`)}\n   
${chalk.green.bgMagenta.bold.yellow('🌟  һ᥆ᥣᥲ, һᥱrm᥆s᥊, ¿ᥴ᥆m᥆ 𝗊ᥙіᥱrᥱs ᥴ᥆ᥒᥱᥴ𝗍ᥲr𝗍ᥱ? 🌟 ')}\n
${chalk.bold.redBright('🍓  ▷ ᥱᥣᥱᥴᥴі᥆ᥒ ➊ :')} ${chalk.greenBright('ᥙsᥲ ᥙᥒ ᥴ᥆ძіg᥆ 🆀 🆁 .')}
${chalk.bold.redBright('🧸  ▷ ᥱᥣᥱᥴᥴі᥆ᥒ ➋ :')} ${chalk.greenBright('ᥙsᥲ ᥙᥒ ᥴ᥆ძіg᥆ ძᥱ 8 ძіgі𝗍᥆s.')}\n
${chalk.blueBright(`${linen}`)}\n   
${chalk.italic.magenta('🍄 ¿𝗊ᥙᥱ́ ᥱᥣᥱᥴᥴі᥆ᥒ ᥱᥣᥱgіs𝗍ᥱ? ⍴᥆r𝖿іs ᥱsᥴrіᑲᥱ')}
${chalk.italic.magenta('s᥆ᥣ᥆ ᥱᥣ ᥒᥙ́mᥱr᥆ ძᥱ ᥣᥲ ᥱᥣᥱᥴᥴі᥆ᥒ. 🍄')}\n
${chalk.bold.magentaBright('---> ')}`)
if (!/^[1-2]$/.test(opcion)) {
console.log(chalk.bold.cyanBright(`🌻  һᥱᥡᥡᥡᥡ 🌻  ٩(๑꒦ິȏ꒦ິ๑)۶ \n\n${chalk.bold.redBright(`🌸  ᥒ᥆ sᥱ ⍴ᥱrmі𝗍ᥱᥒ mᥲ́s ᥒᥙmᥱr᥆s᥆s ᥲ⍴ᥲr𝗍ᥱ ძᥱ ${chalk.bold.greenBright("➊")} ᥆ ${chalk.bold.greenBright("➋")} 🌸\n🌼  𝗍ᥲm⍴᥆ᥴ᥆ ᥣᥱ𝗍rᥲs ᥒі sіmᑲ᥆ᥣ᥆s ᥱs⍴ᥱᥴіᥲᥣᥱs. (╥﹏╥) 🌼`)}\n\n${chalk.bold.yellowBright("🪻  ♡ ´･ღ ･`♡ 𝗍і⍴ 🪻 : 🌺  ᥴ᥆⍴іᥲ 𝗍ᥙ ᥒᥙ́mᥱr᥆ ძᥱsძᥱ ᥣᥲ ᥲ⍴⍴\n ძᥱ ᥕһᥲ𝗍sᥲ⍴⍴ ᥡ ⍴ᥱgᥲᥣ᥆ ᥱᥒ ᥣᥲ ᥴ᥆ᥒs᥆ᥣᥲ. 🌺")}`))
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./authFolder/creds.json`))
}

async function startBot() {
	
console.info = () => {}
const socketSettings = {
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
mobile: MethodMobile, 
browser: opcion == '1' ? ['KimdanBot-MD', 'Safari', '1.0.0'] : methodCodeQR ? ['KimdanBot-MD', 'Safari', '1.0.0'] : ["Ubuntu", "Edge", "20.0.04"],
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
syncFullHistory: true,
getMessage: async (key) => {
let jid = jidNormalizedUser(key.remoteJid)
let msg = await store.loadMessage(jid, key.id)
return (msg?.message || "").replace(/(?:Closing stale open|Closing open session)/g, "")
},
msgRetryCounterCache, 
msgRetry, 
defaultQueryTimeoutMs: undefined,
version,  
}

const sock = makeWASocket(socketSettings)
sock.isInit = false	
	
if (!fs.existsSync(`./authFolder/creds.json`)) {
if (opcion === '2' || methodCode) {
opcion = '2' 
if (!sock.authState.creds.registered) {  
let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright(`\n🍓  (≡^∇^≡) іᥒ𝗍r᥆ძᥙzᥴᥲ sᥙ ᥒᥙ́mᥱr᥆ ძᥱ ᥕһᥲ𝗍sᥲ⍴⍴, rᥱᥴᥙᥱrძᥲ ᥱm⍴ᥱzᥲr ᥴ᥆ᥒ ᥱᥣ ᥴ᥆ძіg᥆ ძᥱᥣ ⍴ᥲіs. 🍓\n\n${chalk.bold.yellowBright("🫐  ⍴᥆r ᥱȷᥱm⍴ᥣ᥆ (〃∀〃)ゞ🫐\n  ➥ +57 316 1407118")}\n`))) 
process.exit(0)
}} else {
while (true) {
addNumber = await question(chalk.bgBlack(chalk.bold.greenBright(`\n🍓  (≡^∇^≡) ⍴᥆r𝖿іs іᥒ𝗍r᥆ძᥙzᥴᥲ sᥙ ᥒᥙ́mᥱr᥆ ძᥱ ᥕһᥲ𝗍sᥲ⍴⍴. 🍓\n\n${chalk.bold.yellowBright("🫐  ⍴᥆r ᥱȷᥱm⍴ᥣ᥆ (〃∀〃)ゞ🫐\n    ➥ +57 316 1407118")}\n`))) 
addNumber = addNumber.replace(/[^0-9]/g, '')

if (addNumber.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => addNumber.startsWith(v))) {
break 
} else {
console.log(chalk.bold.redBright("🍨  ⍴᥆r𝖿ᥲs rᥱᥴᥙᥱrძᥲ іᥒ𝗍r᥆ძᥙᥴіr ᥱᥣ ᥴ᥆ძіg᥆ ძᥱᥣ ⍴ᥲіs. (◞ ᜊ ◟ㆀ) 🍨"))
}}
rl.close()  
} 

setTimeout(async () => {
let codeBot = await sock.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgMagenta(`(●'▽ '●)ゝ 🩷  ᥴ᥆ძіg᥆ ძᥱ ᥎іᥒᥴᥙᥣᥲᥴі᥆ᥒ 🩷 : `)), chalk.bold.white(chalk.white(codeBot)))
}, 2000)
}}
}

async function getMessage(key) {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message
} return {
conversation: '𝐊𝐢𝐦𝐃𝐚𝐧𝐁𝐨𝐭-𝐌𝐃',
}}

sock.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
chatUpdate.messages.forEach(async (mek) => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FatihArridho_')) return
global.numBot = sock.user.id.split(":")[0] + "@s.whatsapp.net"
global.numBot2 = sock.user.id
m = smsg(sock, mek)
require("./kim")(sock, m, chatUpdate, mek, store)
} catch (e) {
console.log(e)
}})
} catch (err) {
console.log(err)
}})

sock.ev.on('messages.update', async chatUpdate => {
for(const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({message: pollCreation, pollUpdates: update.pollUpdates, })
var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (toCmd == undefined) return
var prefCmd = prefix+toCmd
sock.appenTextMessage(prefCmd, chatUpdate)
}}}})

//anticall
sock.ev.on('call', async (fuckedcall) => { 
sock.user.jid = sock.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
let anticall = global.db.data.settings[numBot].anticall
if (!anticall) return
if (!owner) return 
console.log(fuckedcall)
for (let fucker of fuckedcall) {
if (fucker.isGroup == false) {
if (fucker.status == "offer") {
let call = await sock.sendTextWithMentions(fucker.from, `${lenguaje['smscall']()}\n🫐 @${fucker.from.split('@')[0]} ${lenguaje['smscall2']()}`)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;👑 ⍴ɾ᥆⍴іᥱ𝗍ᥲɾі᥆ 👑;;;\nFN:🍓 ⍴ɾ᥆⍴іᥱ𝗍ᥲɾі᥆ 🍓\nORG:🍒 ⍴ɾ᥆⍴іᥱ𝗍ᥲɾі᥆ 🍒\nTITLE:\nitem1.TEL;waid=573161407118:+57 316 1407118\nitem1.X-ABLabel:🍒 ⍴ɾ᥆⍴іᥱ𝗍ᥲɾі᥆ 🍒\nX-WA-BIZ-DESCRIPTION:⍴᥆ɾ𝖿ᥲ᥎᥆ɾ s᥆ᥣ᥆ ᥱsᥴɾіᑲіɾ ⍴ᥲɾᥲ ᥴ᥆sᥲs s᥆ᑲɾᥱ ᥱᥣ ᑲ᥆𝗍.\nX-WA-BIZ-NAME:᥆ᥕᥒᥱɾ 👑\nEND:VCARD`
sock.sendMessage(fucker.from, { contacts: { displayName: '🍓 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓', contacts: [{ vcard }] }}, {quoted: call, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await sleep(8000)
await sock.updateBlockStatus(fucker.from, "block")
}}}})

//detect
sock.ev.on("groups.update", async (json) => {
console.log(color(json, '#009FFF'))
//console.log(json)
const res = json[0];
let detect = global.db.data.chats[res.id].detect
if (!detect) return
if (res.announce == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
// grupo cerrado
sock.sendMessage(res.id, {text: lenguaje['smsAvisos2'](),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos'](), 
"mediaType": 1,   
"thumbnailUrl": ftkim,  
"mediaUrl": redes,  
"sourceUrl": nna
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
//grupo abierto
sock.sendMessage(res.id, {   
text: lenguaje['smsAvisos3'](),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos4'](),   
"mediaType": 1,   
"thumbnailUrl": ftkim,  
"mediaUrl": redes,  
"sourceUrl": nna
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
//solo admin pueden editar los ajustes
sock.sendMessage(res.id, {text: lenguaje['smsAvisos6'](),
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnailUrl": ftkim,  
"mediaUrl": redes,  
"sourceUrl": nna
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
//todos pueden editar los ajustes
sock.sendMessage(res.id, {text: lenguaje['smsAvisos7'](),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnailUrl": ftkim,  
"mediaUrl": redes,  
"sourceUrl": nna 
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if(!res.desc == ``){
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
// descripción
let text = `${lenguaje['smsAvisos8']()}\n ❥ ${res.desc}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnailUrl": ftkim,  
"mediaUrl": redes,  
"sourceUrl": canales
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if(!res.subject == ``){
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
// nombre
let text = `${lenguaje['smsAvisos9']()}\n ❥ ${res.subject}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnailUrl": ftkim,  
"mediaUrl": redes,  
"sourceUrl": canales
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}})
	
//Welcome adaptado
sock.ev.on('group-participants.update', async (anu) => {
let isWelcome = global.db.data.chats[anu.id].welcome
if(!isWelcome) return
console.log(anu)
try {
let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
}
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
}
memb = metadata.participants.length
welc = await getBuffer(ppuser)
leave = await getBuffer(ppuser)
if (anu.action == 'add') {
const buffer = await getBuffer(ppuser)
const time = moment.tz('America/Bogota').format('HH:mm:ss')
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
let name = num
const miembros = metadata.participants.length
sock.sendMessage(anu.id, { text: `${lenguaje.wel.A} @${num.split("@")[0]} ${lenguaje.wel.B}\n${String.fromCharCode(8206).repeat(850)}\n${metadata.desc}`, contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363200204060894@newsletter', 
serverMessageId: '', 
newsletterName: 'zamhetero' },
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": `${lenguaje.wel.w}`,
body: wm,
"previewType": "PHOTO",
"thumbnailUrl": redes,
"thumbnail": welc,
"sourceUrl": redes}}}) 	
// despedida
} else if (anu.action == "remove") {
        const buffer = await getBuffer(ppuser)
let name = num
const members = metadata.participants.length
sock.sendMessage(anu.id, { text: `${lenguaje.wel.C} @${name.split("@")[0]} 🍇*\n${lenguaje.wel.D}`, contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363200204060894@newsletter', 
serverMessageId: '', 
newsletterName: 'zamhetero' },
forwardingScore: 9999999,
isForwarded: true,
remoteJid: anu.id,
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": `   ${lenguaje.wel.x}`, 
body: wm,
"previewType": "PHOTO",
"thumbnailUrl": ``,     
"thumbnail": leave,
"sourceUrl": redes}}}, {quoted: m}) 
//nuevo admin
} else if (anu.action == "promote") {
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const buffer = await getBuffer(ppuser)
let name = num
let usuario = anu.author
sock.sendMessage(anu.id, { text: `${pickRandom(['[ NUEVO ADMINS ]\n\n', 'Hey'])} @${name.split("@")[0]} ${pickRandom(['Ahora eres admin del grupo 🥳', 'Felicidades ahora eres parte staff 🎉'])}\n\n🫵 Acción echa por : @${usuario.split("@")[0]}`, mentions: [...groupAdmins.map(v => v.id)], 
 contextInfo:{
 mentionedJid: [num, usuario],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＮＵＥＶＯ ＡＤＭＩＮ 乂`,
"body": botname,
 "previewType": "PHOTO",
//"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": redes}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
//un admin menos
} else if (anu.action == 'demote') {
const buffer = await getBuffer(ppuser)
let name = num
let usuario = anu.author
sock.sendMessage(anu.id, { text: `@${name.split("@")[0]} ${pickRandom(['Joderte ya no eres admin 🥲', 'jjjjj ya no eres admin culiado 🤣'])}\n\n🫵 Acción echa por : @${usuario.split("@")[0]}`,
 contextInfo:{
 mentionedJid:[num, usuario],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＵＮ ＡＤＭＩＮ ＭＥＮＯＳ  乂`,
"body": botname, 
 "previewType": "PHOTO",
//"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": redes}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}}} catch (err) {
console.log(err)
}})
	
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}  

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

sock.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, qr, receivedPendingNotifications, isNewLogin} = update;
console.log(receivedPendingNotifications)
if (isNewLogin) sock.isInit = true
if (connection == 'connecting') {
console.log('iniciando...')
say('KimdanBot-MD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`BOT EN DESARROLLO`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});

} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`${lenguaje['smsConexioncerrar']()}`, '#f64f59'));
startBot()
} else if (opcion == '1' || methodCodeQR && qr !== undefined) {
if (opcion == '1' || methodCodeQR) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n┏━━━━◉━━━━━⬤━━━━━⪩『 🫐  ${vs} 🫐   』⪨━━━━━⬤━━━━━◉━━━┉┉\n${lenguaje['smsEscaneaQR']()}\n┗━━━━◉━━━━━⬤━━━━━⪩『 🫐  ${vs} 🫐   』⪨━━━━━⬤━━━━━◉━━━┉┉\n`, '#f12711'))
}
} else if (connection == 'open') {
console.log(color(` `,'magenta'))
console.log(chalk.bold.magenta(`\n┏━━◉━━━━⬤━━━⪩『 🍩   』⪨━━━⬤━━━━◉━━┉┉\n┃`) + chalk.bold.cyanBright(` ${lenguaje['smsConexion']()} `) + chalk.bold.magenta(`\n┃━━━━━━━━━━━━━━━━━┉┉`), 
gradient.rainbow(JSON.stringify(sock.user, null, 2)),
chalk.bold.magenta(`\n┗━━◉━━━━⬤━━━⪩『 🍩   』⪨━━━⬤━━━━◉━━┉┉\n`))
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n┏━━━◉━━━━⬤━━━⪩『 🍒  ${vs} 🍒   』⪨━━━⬤━━━━◉━━━┉┉\n${lenguaje['smsConectado']()}\n┗━━━◉━━━━⬤━━━⪩『 🍒  ${vs} 🍒   』⪨━━━⬤━━━━◉━━━┉┉\n\n` + receivedPendingNotifications, '#38ef7d')
);
	
if (!sock.user.connect) {
// await sock.groupAcceptInvite(nn2) 
sock.user.connect = true
return !1;
}
}});
	
const rainbowColors = ['red', 'yellow', 'green', 'blue', 'purple'];
let index = 0;

function printRainbowMessage() {
const color = rainbowColors[index];
console.log(chalk.keyword(color)('𓆩❤️ 𓆪 (ू •մ•ू  🌸 ) ｟ 𝐔 𝐏 𝐓 𝐈 𝐌 𝐄 ｠\n'));
index = (index + 1) % rainbowColors.length;
setTimeout(printRainbowMessage, 60000) //Ajuste el tiempo de espera a la velocidad deseada
}

printRainbowMessage();

sock.public = true
store.bind(sock.ev)
sock.ev.on('creds.update', saveCreds)
process.on('uncaughtException', console.log)
process.on('unhandledRejection', console.log)
process.on('RefenceError', console.log)
}

startBot()

})()	
