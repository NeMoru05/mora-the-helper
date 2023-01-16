/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const { Client, Events, GatewayIntentBits } = require ('discordjs');
const { TOKEN } = require ('.env');

const client = new Client({ intents: [
                                    GatewayIntentBits.Guilds, 
                                    GatewayIntentBits.GuildMessages, 
                                    GatewayIntentBits.MessageContent, 
                                    GatewayIntentBits.GuildMembers] });