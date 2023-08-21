import { token } from '../config/config.json';
import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, c =>{
    console.log(`Logged in as ${c.user.tag}`);
});

client.login(token);