//24/7
const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Powered by ⚡ImNotABot⚡ Support');
});

let port = process.env.PORT || 3000;
app.listen(port);

require('dotenv').config();

//const
const Discord = require("discord.js")
const client = new Discord.Client({ 
    intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
],
})
const config = require("./config.json")

const fs = require('fs');
let { readdirSync } = require('fs');

//handle slash

client.slashcommands = new Discord.Collection()
const slashcommandsFiles = fs.readdirSync("./SlashCmds").filter(file => file.endsWith(".js"))

for(const file of slashcommandsFiles){
  const slash = require(`./SlashCmds/${file}`)
  console.log(`Slash Commands - ${file} Loaded!`)
  client.slashcommands.set(slash.data.name, slash)
}

//handle commands

client.commands = new Discord.Collection()
let carpetas = fs.readdirSync('./Commands/').map((subCarpetas) => {
  const archivos = fs.readdirSync(`./Commands/${subCarpetas}`).map((comandos) => {
    let comando = require(`./Commands/${subCarpetas}/${comandos}`)
    console.log(`Command - ${comandos} Loaded!`)
    client.commands.set(comando.name, comando)
  })
})


client.on("ready", message => {
  const { REST } = require("@discordjs/rest")
  const { Routes } = require("discord-api-types/v9")
  const commands = []
  const slashcommandsFiles = fs.readdirSync("./SlashCmds").filter(file => file.endsWith(".js"))

  for(const file of slashcommandsFiles){
    const slash = require(`./SlashCmds/${file}`)
    commands.push(slash.data.toJSON())
  }

  const rest = new REST({ version: "9" }).setToken(config.token)

  createSlash()

  async function createSlash(){
    try{
      await rest.put(
        Routes.applicationCommands(config.clientId), {
          body: commands
        }
        )
        console.log("Slash Commands Is loaded of Json!")
      } catch(e) {
        console.log(e)
      }
    }

})

client.on("ready", message => {

  //Mensaje Cuando el bot este en linea
  console.log("bot: " + client.user.tag + ", Powered by ⚡ImNotABot⚡ Support")

  //prensencia

  function presence() {
    client.user.setPresence({ activities: [{ name: "Powered By ⚡ImNotABot⚡", type: "PLAYING" }], status: "online" })
  }
  presence()
  console.log("Prensencia Activada!")

})

client.on("interactionCreate", async (interaction) => {
  if(!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  if(!slashcmds) return;

  try{
    await slashcmds.run(client, interaction)
  } catch(e) {
    console.error(e)
  }
})

client.on("messageCreate", async (message) => {

  let prefix = config.prefix

  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){

    try {
      cmd.execute(client, message, args)
    } catch (e) {  


     return;
  }

}

if(!cmd){

  if(config.commandError === "OFF") return;
  if(config.commandError === "ON"){

    if(!message.content === prefix) return;

    const embedError = new Discord.MessageEmbed()
    .setTitle(":x: | Oops")
    .setDescription("el comando **" + command + "** es invalido o no existe, intentelo de nuevo")
    .setColor("RED")
    .setTimestamp()
    .setFooter("powered by ⚡ImNotABot⚡ support")

    message.channel.send({ embeds: [embedError] })

  }

}

});

client.login(config.token)