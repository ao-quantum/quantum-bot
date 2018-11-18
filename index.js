const Discord = require("discord.js-commando");
const Client = new Discord.Client();
const clientconfig = require("./clientconfig.json");

Client.login(clientconfig.token);
