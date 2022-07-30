const config = require("./config.json");
const Discord = require("discord.js");
const intents = new Discord.Intents(32767);

const client = new Discord.Client({
  intents,
});

require("./Handler")(client)

client.login(config.token);
