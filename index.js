const config = require("./config.json")
const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents
});

client.on("ready", () => {
    console.log("Ciao! sono pronto!");
})

client.on("messageCreate", (message) => {
    if(message.content == "!ciao"){
        message.delete();
    }
    if(message.content == "!ciao"){
        message.reply("ciao")
    }
    if(message.content == "!ciao"){
        message.channel.send("ciao")
    }
})

client.login(config.token);