const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'love',
  execute: (client, message) => {
    if ((message.content.includes("love") || message.content.includes("<3") || message.content.includes("♥")) && message.content.toLowerCase().includes("fbot")) {
      message.react("♥").then(message.react("😘"));
    }
  }
};
