const { spawn } = require('child_process')
const cp = require('child_process')
const { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)
function start(cmd) {
return spawn(cmd, [], {
stdio: ['inherit', 'inherit', 'inherit', 'ipc']})}
start('clear')
start('bash')
console.log('Terminal disponible, By: 𝐊𝐢𝐦𝐝𝐚𝐧𝐁𝐨𝐭-𝐌𝐃')
