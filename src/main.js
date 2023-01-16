import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import {temperature} from "./temperature.js";

const client = new Client({
     intents: [GatewayIntentBits.Guilds]
 });

const CLIENT_ID = "1059685597347856485"
const TOKEN = "MTA1OTY4NTU5NzM0Nzg1NjQ4NQ.GqgdaO.Ekg0g-32PuKvHJPkW_ZXPnJIHsnAqKuda-IyLs"

const commands = [
    {
        name: 'weather',
        description: 'Replies with weather temperature!',
    },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'weather') {
        const temp = await temperature();
        console.log(temp)
        await interaction.reply(temp)
    }
});

client.login(TOKEN);




