const clientId = "865288762208944162";
const DiscordRPC = require("discord-rpc")
const RPC = new DiscordRPC.Client({ transport: "ipc" })
const package = require("./package.json")
const discordVer = package.dependencies["discord.js"].valueOf()

DiscordRPC.register(clientId)

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity({
        details: "⚡I'mNotABot⚡ Base Code",
        state: "Discord.js v" + discordVer ,
        startTimestamp: Date.now(),
        largeImageKey: "testing",
        largeImageText: "Editing Code",
        smallImageKey: "discord-icon",
        smallImageText: "Replit - Visual",
        instance: false,
        buttons: [
            {
                label: "Support Server",
                url: "https://discord.gg/E5jpQmyPf5"
            },
            {
                label: "GitHub Base Code",
                url: "https://github.com/EstebanSaiyanGames/BaseCodeIamNoABot"
            }
        ]
    });
};

RPC.on("ready", async () => {
    setActivity();

    setInterval(() => {
        setActivity()
    }, 15 * 1000)
});

RPC.login({ clientId }).then(console.log("RPC Activado")).catch((err) => {
    console.log("Error: " + err)
})