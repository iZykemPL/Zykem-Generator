const Discord = require('discord.js');
const { prefix, token, } = require('./botconfig.json');
const client = new Discord.Client();
const { accounts, } = require('./accounts.json');
const { accounts1, } = require('./accounts1.json')

client.once('ready', () => {
    console.log('Zykem Generator\nStatus : READY')
})
 
client.on("message", message => {
    console.log(message.content);
})
 
client.on('message', message => {
    if(message.content.startsWith(`${prefix}Nordvpn`)) {
        if(message.channel.type == "text") {
 
            let result = Math.floor((Math.random() * accounts.length))
 
            message.author.send('> Here is your Nordvpn account:\n \`' + accounts[result] + "\` \n> Subscribe the Author of the bot on youtube! https://youtube.com/c/ZYKEM")
            .catch()
        }
    }
 
    if(message.content.startsWith(`${prefix}Spotify`)) {
        if(message.channel.type == "text") {
 
            let result = Math.floor((Math.random() * accounts1.length))
 
            message.author.send('> Here is your Spotify account:\n \`' + accounts[result] + "\` \n> Subscribe the Author of the bot on youtube! https://youtube.com/c/ZYKEM")
            .catch()
        }
    }
})
 
client.login(token);