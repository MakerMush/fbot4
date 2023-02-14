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

    const game = Object.entries(games).find(([key, value]) => message.content.includes(key));
    if (game) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === game[1]);
        if (emoji) {
            message.react(emoji);
        }
    }
  }
};
