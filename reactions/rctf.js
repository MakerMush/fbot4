const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'f',
  execute: (client, message) => {
    console.log(message);
    // Check if the message contains a sad face or the word "sad"
    if (message.content.includes("😔") || message.content.includes("sad")) {
      message.react("🇫").then((reaction) => console.log(`Reacted with "${reaction.emoji.name}"`)).catch(console.error);
    }
  }
};
