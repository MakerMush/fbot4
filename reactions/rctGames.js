const { MessageReaction } = require('discord.js');

module.exports = {
    name: 'games',
  execute: (client, message) => {
    let games = {
        "ow": "overwatch",
        "lol": "league",
        "smash": "smash",
        "rl": "rocketleague",
        "val": "valorant",
        "mw": "modernwarfare"
    };

    for (let [key, value] of Object.entries(games)) {
        const regex = new RegExp(`^${key}\\b|\\b${key}\\b|\\b${key}$`, 'i');
        if (regex.test(message.content)) {
            message.react(client.emojis.cache.find(emoji => emoji.name === value));
            break;
        }
    }
  }
};
