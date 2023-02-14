const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits, DiscordAPIError  } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds,	GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const reactionsPath = path.join(__dirname, 'reactions');
const reactionFiles = fs.readdirSync(reactionsPath).filter(file => file.endsWith('.js'));

const reactions = new Map();

for (const file of reactionFiles) {
    const filePath = path.join(reactionsPath, file);
    const reaction = require(filePath);
    reactions.set(reaction.name, reaction);
}

client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Events.MessageCreate, message => {
    for (const [name, reaction] of reactions) {
        reaction.execute(client, message);
    }
});


client.login(token);