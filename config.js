/**
   * Create By Dika Ardnt.
   * Recode By Kahfi-XD 
   * Contact Me on wa.me/6285380166282
   * Follow https://github.com/Maxxy-Md 
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['15203484182','6285380166282']
global.ownernomer = "15203484182"
global.premium = ['6285380166282']
global.packname = 'SychoBot\n\nNyolong? Izin dulu sama creator bot nya braderr😎'
global.author = '- 𝙂𝙖𝙙𝙞𝙣𝙜𝘼𝙜𝙖𝙣𝙞 -'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium. Buy? Ketik Sewa',
    owner: 'Fitur Khusus @GadingAgani',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading bro... Sabar',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
