const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {

  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("comando ping"),

  async run(client, interaction){

    interaction.reply({ content: "ping del bot: **" + client.ws.ping + "**!!" })
    
  }


}