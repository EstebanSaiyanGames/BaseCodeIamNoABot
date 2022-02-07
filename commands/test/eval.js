const Discord = require("discord.js")
const { inspect } = require("util")
const config = require("../../config.json")

module.exports = {
  name: "eval",
  alias: [],

execute(client, message, args){

  if(!message.author.id === config.owner) return message.reply("No tienes el permiso de usar este comando")


  const command = args.join(" ")
  if(!command) return message.reply("escribe un comando")

  try{
    const evaled = eval(command)
    let palabras = ["token", "destroy"]
    if(palabras.some(word => message.content.toLowerCase().includes(word))) return message.reply("estas palabras estan prohibidas")
    const embedEval = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Evaluacion Correcta")
    .addField("**Tipo:**", `\`\`\`prolog\n${typeof{evaled}}\`\`\``, true)
    .addField("**Evaluado en:**", `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\`\`\``, true)
    .addField("**Entrada:**", `\`\`\`js\n${command}\`\`\``, true)
    .addField("**Salida:**", `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``, true)

    message.channel.send({ embeds: [embedEval] })

 } catch (error) {
  const embedError = new Discord.MessageEmbed()
 .setColor("RED")
 .setTitle("Evaluacion Erroneas")
 .addField("**Entrada**", `\`\`\`js\n${command}\`\`\``, true)
 .addField("**Error**", `\`\`\`js\n${error}\`\`\``, true)

   message.channel.send({ embeds: [embedError] })
 }



 }

}