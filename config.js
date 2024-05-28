const fs = require('fs')
const chalk = require('chalk')



global.owner = ['6281231948641']
global.NomeDoBot = `6281231948641`
global.premium = ['6281231948641']
global.travaSend = '10'
global.packname = ''
global.author = ''
global.sessionName = '1'
global.prefa = ['','!','.']
global.sp = '>'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado= '${__filename}'`))
	delete require.cache[file]
	require(file)
})
