const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {

  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("ping del bot"),

  async run(client, interaction){

    interaction.reply({ content: "ping del bot: " + client.ws.ping + "!!" })
    
  }


}