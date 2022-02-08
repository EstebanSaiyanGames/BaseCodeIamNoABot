# IamNoABot Codigo Base

Hola Bienvenido al codigo base de IamNotABot, con todo esto se baso para crear al version v13 de discord.js, Mas Adelante Publicaremos la base de la version v12.

# Usos

Para empezar a crear al bot sigue estos Pasos:

Paso 1.- Ir a discord.com/developer/applications, aqui Empezaras A Usar y a crear el Bot!, en la parte de arriba estara un botón que dira New Application y pones el nombre del bot.

Paso 2.- Personaliza al bot con una imagen y describelo.

Paso 3.- Ir a Build A Bot(bot), y dare a build, Aqui se personalizara como lo hiciste en el paso 2.

Paso 4.- Uso de node.js y discord.js, Esto estara mas para abajo

Paso 5.- Uso del token y client, Ojo esto es lo mas importante de crear un bot, NO LE PASES A NADIEN EL TOKEN, si se lo pasas es como darle tu contraseña a extraños, el client, no afecta tanto, por que aparece en los links de invitaciones a los bots, Ahora en el codigo busca un archivo llamado config.json, en la parte donde dice TOKEN_BOT pones el token de tu bot, en CLIENT_ID pon el client del bot, y donde dice BOT_PREFIX pones el prefix: Ejemplo PB/, !, NB!, etc, Si usas replit, lo mas recomendable es usar una Key, y si estas en Visual Studio Code no te preocupes,

Con esto ya tendrias ya configurado al bot, solo falta invitarlo!.

# NPMS

Los Npms o packages son una base que sirven para que el bot este funcionando depende de lo que tienes que usar,

Antes que nada NUNCA quites los npms que ya vienen aqui, esos es el codigo base de aqui!

# Usos del node.js/discord.js

Aprender Discord.js o Node.js es un poco tardado, mi primer bot solo fue un monton de proyectos copiados, no le puse ningun esfuerzo en hacerlo, Antes para empezar el uso crearemos cosas sencillas, en el codigo vendra el comando eval, para que practiques mejor cosas de discord.js, el comando eval consiste en evaluar cosas, puedes hacer que el bot mande un mensaje a otro servidor (que el bot tiene que estar en el server), reaccionar a mensajes, mandar mensajes, Banear, Kickear, Dar el token, destruirse, etc (en el codigo pondre restrincciones que solo tu las uses, y ademas tu puedes bloquear las palabras), Con este comando vas a ir empezando a crear al bot.

# Editores De Codigo

Los editores de codigo son los encargado De que puedas editar los archivos mas facilmentente:

1.- Replit

2.- Visual Studio Code

3.- Bloc De notas (encerio puedes programar con esto XD)

entre otros.

# Importante

1.- Este Codigo esta especificamente completo para usar en Visual Studio Code, para usarlo en replit, solo crea un archivo Obligatoriamente llamado .replit y pon "run="npm start"" (sin las primeras comillas), y solo con darle run el bot ya se prendera.

2.- Todo el codigo ya esta verificado, en la parte de config.json y en owner sera solo el uso de comandos que solo tu lo podras usar, es muy importante que pongas tu id en owner, pero si pones la id de otra persona, esa persona va a poder usar todos los comandos.

3.- Si algo no funciona pon el slash command /errorbotmaker (del bot original osea ⚡ImNotABot⚡), en razon, pon que es lo que falla o el problema o otra opcion es abrir un ticket en el servidor de soporte que seria en la seccion problemas con el bot y decirles no es del bot, es del codigo abierto o el comando /botmaker, o si no respone ningun mod la ultima alternativa es mandarle un dm al creador

4.- Al Crear un slash o un comando ponlo en su respectiva carpeta, en el caso de slash tiene que estar el archivo en SlashCmds y tienes que usar el SlashCommandsHandle En Argumentos, si no lo usas te marcara error, en donde dice .setName("") en las comillas pon el nombre del comando (solo minusculas, no uses simbolos) y en donde dice .setDescription("")
pones la descripcion (aqui si puedes usar simbolos), Y si es un Comando ponlo en la carpeta Commands, habran mas carpetas, eso solo es para ordenar pero si, lo tienes que poner en una carpeta, si no, 1 de marcara un error, 2 el comando no te leera, y tienes que usar la plantilla llamada HandleCommand, en name: "", poneras el nombre del comando igual solo mayusculas ni simbolos, y en alias: [], donde esta el [] adentro pondras unas comillas ejemplo [""], aqui seran otros nombres que tendran los comandos Ejemplo:


comando: 

module.exports = {
    name: "helloworld",
    alias: ["hello-world", "hello", "world"]
}

slash:

module.exports = {

  data: new SlashCommandBuilder()
  .setName("helloworld")
  .setDescription("El Bot dice helloworld"),

}

5.- Estaremos Actualizado el codigo, estate atento a las actualizaciones.

6.- Si estas en Visual Necesitas decargar node.js: https://nodejs.org/es/ , si en caso estas en replit, esta todo bien, el node estara incluido en el package.json.

7.- La Configuración de config.json es muy importante, Sin ello, el bot no va a funcionar, tienes que poner los datos correctos, un ejemplo de Token de bot seria: OTQwNjQ1ODM1NzA2ODg0MDk2.YgKasw.WB4vPVkXKVICoZba92asmdrAdZA, el client seria: 940645835706884096, el prefix seria: !, owner seria: 736986380663783476, y commandError seria: ON o OFF. (los datos son reales, pero el bot estara en privado)

8.- Si nesecitas mas ayuda y no sabes hacer uno, usa /botmaker del bot (IamNotABot) y en token y client, pones Null o que no sabes!

# Final

Este es el final de como empezar un bot de discord con esta base


# Version:

1.4.0