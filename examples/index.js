const { Pride } = require('../dist/index');
const Discord = require('discord.js');
const https = require('https');

// Create a Discord.js client and prepare it
const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGES']
});

client.login('your-super-secret-token');

client.on('ready', () => console.log('I have connected to Discord!'));

client.on('messageCreate', async msg => {
    if (msg.content.startsWith('!pansexual')) {
        // Get the user's pfp as a buffer
        https.get(msg.author.avatarURL(), res => {
            let data = [];

            res.on('data', chunk => data.push(chunk));

            res.on('end', async () => {
                const buffer = Buffer.concat(data);

                // Generate the pride pfp
                const image = await Pride.pansexual(buffer, 0.5);
                const attachment = new Discord.MessageAttachment(image);

                msg.reply({ files: [attachment] });
            });
        });
    }
});
