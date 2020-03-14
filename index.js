const Discord = require('discord.js');
const bot = new Discord.Client();

const Token = 'Njg3NDM0ODY0NTM4Mjg4MTMw.Xmltrg.l7J-Ai1xQ_UoO5ZWOM_hH-6HpoE';

const PREFIX = '~';

bot.on('ready', () =>{
	console.log('This bot is online');
	console.log('######################');
	console.log('Welcome to Senpai bot!');
	console.log('######################');
})

bot.on('message', msg=>{
	if(msg.content === "~ping"){
		msg.reply('pong');
	}
})


bot.login(Token);
