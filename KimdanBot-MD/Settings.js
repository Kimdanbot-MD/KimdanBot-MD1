const chalk = require("chalk")
const fs = require("fs")

global.owner = [
["573155428601", "creador", true],
["5214445427870", "ZZZ", true],
["573244670629"], 
["595992611272"],
["5218442114446"],
["593968585383"], 
['50685690440'],
["5492266613038"],
["595975740803"], 
["59895555511"]
]

//global.noperfil = fs.readFileSync('./src/sinfoto.jpg')
global.imagen1 = fs.readFileSync('./src/img_cuadrada.jpg')
global.imagen2 = fs.readFileSync('./src/IMG-20230727-WA0103.jpg')
global.imagen3 = fs.readFileSync('./src/Screenshot_2023-07-28-14-06-50-823_com.whatsapp.jpg')

global.mess = {
admin: "[ ❌ ] 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐒 𝐒𝐎𝐋𝐎 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍𝐒🌸",
owner: "[ ❌ ] 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐒𝐎𝐋𝐎 🌸 𝐋𝐎 𝐏𝐔𝐄𝐃𝐄 𝐔𝐒𝐀𝐑 𝐌𝐈 𝐉𝐄𝐅𝐄/𝐀🍓",
group: "[ ❌ ] 𝐒𝐎𝐋𝐎 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎",
botAdmin: "[ ❌ ] 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 𝐒𝐄𝐑 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑 𝐏𝐀𝐑𝐀 𝐔𝐒𝐀𝐑 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎",
wait: "🤚 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐒𝐏𝐄𝐑𝐀𝐑 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 🍇"
}

global.botname = "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃"
global.packname = "𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃"
global.author = "𝐉𝐎𝐒𝐄́.𝐎𝐅𝐂"
global.vs = '𝟏.𝟎.𝟎'
global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/
global.language = 'es' // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419
global.lolkeysapi = 'GataDios' //api lohum

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
