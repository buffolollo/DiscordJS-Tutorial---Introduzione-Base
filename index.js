const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents
});

client.on("ready", () => {
    console.log("Ciao! sono pronto!");
})

client.login("token");