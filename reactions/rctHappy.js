const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'f',
  execute: (client, message) => {
    if (!message.content.toLowerCase().includes("happy")){
        return;
    }
      message.react("🙂");
  }
};
