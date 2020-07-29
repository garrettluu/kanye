'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log("Hello world!");
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login('NzM3ODA4MDU2ODg4MzI4MzEy.XyCvTA.C8H0snsMAEb68yHeYHGpaKHB7w0');
