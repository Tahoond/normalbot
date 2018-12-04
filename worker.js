const Discord = require("discord.js");
const client = new Discord.Client

client.on("ready", () => {

  client.user.setActivity('watching memes')

});
