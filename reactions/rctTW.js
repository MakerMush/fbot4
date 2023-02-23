const { MessageReaction } = require('discord.js');


module.exports = {
  name: 'tw',
  execute: (client, message) => {
    // if it's not from him, return
    // if it's in The Channel, fire away
    if (message.channel.id == "1066783260023205928") {
      message.react("😐");
    } else {
      if (message.author.id == "1026599284075921419" && (Math.floor(Math.random() * 10)==0)){
        message.react("😐");
      }
    }
  }
};

/*
client.on(Events.MessageCreate, message => {
  // Check if the message was sent by the user you want to target
  if (message.author.id === "user_id") {
    // React to the message with a specific emoji
    message.react("emoji");
  }
});

*/