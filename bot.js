const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.login(process.env.Mzg0MDcwMjg0NjE5MDIyMzQ5.DPtxFg.GOPgQqUIZXWk5wP0QIDCiV49u84);
