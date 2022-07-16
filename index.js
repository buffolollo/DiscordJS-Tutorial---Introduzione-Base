const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents
});

client.on("ready", () => {
    console.log("Ciao! sono pronto!");
})

client.login("OTk3NjA2OTM4OTQwNTUxMjA4.GLIJ7W.0jiEqk9tyWKZb1bwYcotp7FOfdTY4cSixePbJE");


//OTk3NjA2OTM4OTQwNTUxMjA4.GLIJ7W.0jiEqk9tyWKZb1bwYcotp7FOfdTY4cSixePbJE