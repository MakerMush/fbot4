const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'smh',
  execute: (client, message) => {
    if (    message.content.includes('smh')  && 
            !(message.content.includes('smh mh') || 
              message.content.includes('smhmh') || 
              message.content.includes('my head'))) 
        {   
            message.reply('*smh my head, <@' + message.member.user.id + '>');
        } 
    }
};