const { Client, Message } = require("discord.js")
module.exports = {
    name: "ping",
    aliases: ["p", "pi"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute(client, message, args){
        message.channel.send({
            content: "Pong!"
        })
    }
}