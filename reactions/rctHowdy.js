const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'howdy',
  execute: (client, message) => {
    let s = Math.floor(Math.random() * 4);
    if (!message.content.toLowerCase().includes("fbot")){
        return;
    }
    switch(s){
        case 0:
            message.react('🇭')
			.then(() => message.react('🇮'))
			.catch(error => console.error('One of the emojis failed to react:', error));
            break;
        case 1:
            message.react('🇾')
			.then(() => message.react('🇴'))
			.catch(error => console.error('One of the emojis failed to react:', error));
            break;
        case 2:
            message.react('🇸')
			.then(() => message.react('🇺'))
			.then(() => message.react('🇵'))
			.catch(error => console.error('One of the emojis failed to react:', error));
            break;
        case 3:
            message.react('🇭')
            .then(() => message.react('🇴'))
            .then(() => message.react('🇼'))
            .then(() => message.react('🇩'))
            .then(() => message.react('🇾'))
            .catch(error => console.error('One of the emojis failed to react:', error));
            break;
    }
  }
};
