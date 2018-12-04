const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setGame('test bot');
  console.log(`good day to you mate.`);
});

bot.login(NTE5NTY1OTgxNzY5NjYyNDY3.DuhLxg.QyBDxUC346M9fJzRDyJ9p7Zu7LA);
