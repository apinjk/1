const fs = require('fs')
const chalk = require('chalk')



global.owner = ['']
global.NomeDoBot = `null`
global.premium = ['null']
global.travaSend = '10'
global.packname = ''
global.author = ''
global.sessionName = ''
global.prefa = ['','!','.']
global.sp = '>'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado= '${__filename}'`))
	delete require.cache[file]
	require(file)
})
