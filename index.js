'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

const axios = require('axios');
const KANYE_REST = "https://api.kanye.rest/";

require('dotenv').config();

client.on('ready', () => {
  console.log("Hello world!");
});

client.on('message', async (message) => {
  if (message.content === '!kanye') {
    const res = await axios.get(KANYE_REST);
    const quote = res.data.quote;
    message.channel.send(quote);
  }
});

client.login(process.env.BOT_TOKEN);
