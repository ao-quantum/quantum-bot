const Discord = require("discord.js-commando");
const Client = new Discord.Client();
const clientconfig = require("./clientconfig.json");

Client.on ('ready', async () => {
  console.log(`${bot.user.username} is online`);
});

Client.login(clientconfig.token);
