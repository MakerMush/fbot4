const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'f',
  execute: (client, message) => {
    console.log(message);
    if (message.content.includes(" f ") || message.content === "f") {
      message.react("🇫").then((reaction) => console.log(`Reacted with "${reaction.emoji.name}"`)).catch(console.error);
    }
  }
};
