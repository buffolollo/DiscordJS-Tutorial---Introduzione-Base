const prefix = "!";
module.exports = {
  name: "messageCreate",
  execute(message, client) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const cmd =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!cmd) return;

    try {
      cmd.execute(client, message, args);
    } catch (error) {
      console.error(error);
    }
  },
};
