const { time } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
  name: "server",
  alias: [],

async execute (client, message, args){

await client.guilds.create("Peo").then((guild) => {
      guild.channels.create("LOL").then(async (peo) => {
        const invite = await peo.createInvite()
        message.reply({ content: "Invitacion: " + invite.url })
     })
 })

 }

 
}