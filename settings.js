const chalk = require("chalk")
const fs = require("fs")
const { en, es } = require('./libs/idiomas/total-idiomas.js') 

global.owner = [
["573155428601", "creador", true],
["5214445427870", "darlyn", true],
["573244670629"], 
['50685690440'],
["5492266613038"],
["595975740803"], 
]

// ═════════════𓊈『 IDIOMAS 』𓊉═════════════ 
global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/
global.lenguaje = es // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419

// ═════════════𓊈『 IMAGENES 』𓊉═════════════ 
global.imagen1 = fs.readFileSync('./src/img_cuadrada.jpg')
global.imagen2 = fs.readFileSync('./src/IMG-20230727-WA0103.jpg')
global.imagen3 = fs.readFileSync('./src/Screenshot_2023-07-28-14-06-50-823_com.whatsapp.jpg')
const img = [
fs.readFileSync('./src/img_cuadrada.jpg'),
fs.readFileSync('./src/IMG-20230727-WA0103.jpg'),
fs.readFileSync('./src/Screenshot_2023-07-28-14-06-50-823_com.whatsapp.jpg') 
];
const RD = img[Math.floor(Math.random() * img.length)]; 
global.imgkim = `${RD}`

// ═════════════𓊈『 APIS 』𓊉═════════════ 
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
  ApiEmpire: 'https://api.boxmine.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};


// ═════════════𓊈『 LINKS 』𓊉═════════════ 
global.md = 'https://github.com/Kimdanbot-MD/KimdanBot-MD'

// ═════════════𓊈『 MESS 』𓊉═════════════ 
global.mess = {
admin: "✾⃛⃛ᬿ⃝⃞🚫 🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ _🫐 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐒 𝐒𝐎𝐋𝐎 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍𝐒 🫐_",
owner: "✾⃛⃛ᬿ⃝⃞🚫🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ ~ _🍡 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐒𝐎𝐋𝐎 𝐋𝐎 𝐏𝐔𝐄𝐃𝐄 𝐔𝐒𝐀𝐑 𝐌𝐈 𝐉𝐄𝐅𝐄 🍡_",
group: "✾⃛⃛ᬿ⃝⃞🚫🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ ~ _🍨 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐒𝐎𝐋𝐎 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒 🍨_",
botAdmin: "✾⃛⃛ᬿ⃝⃞🚫🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ ~ _🧁 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 𝐒𝐄𝐑 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑 𝐏𝐀𝐑𝐀 𝐔𝐒𝐀𝐑 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 🧁_",
wait: "🤚 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐒𝐏𝐄𝐑𝐀𝐑 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 🍇", 
private: "✾⃛⃛ᬿ⃝⃞🚫🅴 *𝐑𝐑𝐎𝐑*\n   ╰ᬊ ~ _🍫 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐒𝐎𝐋𝐎 𝐒𝐄 𝐏𝐔𝐄𝐃𝐄 𝐔𝐒𝐀𝐑 𝐄𝐍 𝐂𝐇𝐀𝐓 𝐏𝐑𝐈𝐕𝐀𝐃𝐎 🍫_",
registrarse: "*𓊈『🍒 𝐒𝐓𝐎𝐏 𝐃𝐄𝐁𝐄𝐒 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐑𝐓𝐄 🍒』𓊉*\n\n🍓 𝐃𝐢𝐜𝐞 𝐞𝐥 𝐉𝐨𝐬𝐞́ 𝐉𝐚𝐯𝐢𝐞𝐫 𝐪𝐮𝐞 𝐧𝐨 𝐞𝐬𝐭𝐚𝐬 𝐞𝐧 𝐥𝐚 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 🍓\n\n𝐓𝐢𝐞𝐧𝐞𝐬 𝐪𝐮𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐚 *_𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃_*\n\n🌺 *≪ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 ≫* 🌺\n#reg nombre.edad", 
error: "*✾⃛⃛ᬿ⃝⃞🚫* 🅴 *𝐑𝐑𝐎𝐑*", 
advertencia: `advertencia`, 
limit: '*usaste una moneda*', 
AntiNsfw: `*Los comando +18 esta desactivado*\nSi eres admin y quiere activarlos usar:\nmodocaliente on`, 
endLimit: 'te quedaste sin dinero, puedes comprar mas con el comando "buy"'
}

// ═════════════𓊈『 CARGA 』𓊉═════════════ 
global.info = {
wait: '*〘⌛〙_𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨..._ ▬▭▭▭▭▭▭*', 
waitt: '*〘⌛〙_𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨..._ ▬▬▭▭▭*', 
waittt: '*〘⌛〙_𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨..._ ▬▬▬▬▭▭*', 
waitttt: '*〘⌛〙_𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨..._ ▬▬▬▬▬▬▭*', 
waittttt: '*〘⌛〙_𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨..._ ▬▬▬▬▬▬▬*', 
result: '*〖✅〗𝐋𝐈𝐒𝐓𝐎 🌺*'
}

// ═════════════𓊈『 REACCIONES 』𓊉═════════════ 
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

// ═════════════𓊈『 INFO 』𓊉═════════════ 
global.botname = "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃"
global.wm = "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃"
global.packname = "🍓 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃 🍓"
global.author = "🍒𝐃𝐚𝐧𝐨𝐧𝐢𝐧𝐨🍒"
global.vs = '𝟏.𝟎.𝟎'

// ═════════════𓊈『 LISTAS 』𓊉═════════════ 
global.mods = []
global.premium = []  
global.blockList = []  

// ═════════════𓊈『 NIVELES 』𓊉═════════════ 
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
