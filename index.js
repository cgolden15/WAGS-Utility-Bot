const express = require('express');
const app = express();
const Discord = require('discord.js');
const chalk = require('chalk');
const figlet = require('figlet');
require('dotenv').config();
const fs = require('fs');
const client = new Discord.Client
const Auditlog = require("discord-auditlog");
const { MessageEmbed } = require("discord.js");

app.get('/', (request, response) => {
     response.sendStatus(200);
});

let listener = app.listen(process.env.PORT, () => {
     console.log('Your app is currently listening on port: ' + listener.address().port);
});

let commandlist = [];

fs.readdir('./commands/', async (err, files) => {
    if(err){
        return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
    }
    files.forEach(async (file) => {
        if(!file.endsWith('.js')) return;
        let commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});

client.on('ready', async () => {
  console.log(chalk.yellow(figlet.textSync('Golden!!', { horizontalLayout: 'full' })));
  console.log(chalk.red(`Bot started!\n---\n`
  + `> Channels: ${client.channels.cache.size}\n`
  + `> Servers: ${client.guilds.cache.size}\n`
  + `> Reminder: Start staff list update handler`));
  let botstatus = fs.readFileSync('./bot-status.json');
  botstatus = JSON.parse(botstatus);
  if(botstatus.activity == 'false') return;
  if(botstatus.activitytype == 'STREAMING'){
    client.user.setActivity(botstatus.activitytext, {
      type: botstatus.activitytype,
      url: botstatus.activityurl
    });
  } else {
    client.user.setActivity(botstatus.activitytext, {
      type: botstatus.activitytype
    });
  }
  let logChannel = client.channels.cache.get('839632546027274240');
    logChannel.send( {embed: {
      color: 0x27ce27,
      title: "Client Update:",
      description: `:green_circle: - WAGS Utility Bot started sucessfully`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Winter Adventures Guide School"
      }
    }});
});

client.on('message', async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(process.env.prefix)) return;
    const args = message.content.slice(process.env.prefix.length).split(' ');
    const commandName = args[0].toLowerCase();
    args.shift();
    const command = commandlist.findIndex((cmd) => cmd.name === commandName);
    if(command == -1) return;
    commandlist[command].file.run(client, message, args);
});
  client.on("messageDelete", (messageDelete, message) => {
  console.log(chalk.blue(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`));
     let adminLogs2 = client.channels.cache.get('839632546027274240');
     adminLogs2.send({embed: {
       color: 0x112CC1,
       fields: [{
         name: `Message from ${messageDelete.author.tag} was deleted.`,
         value: `${messageDelete.content}`,
       }],
       footer: {
         text: 'Action Logs'
       },
       timestamp: new Date()
     }});
});

Auditlog(client, {
	"807134064322412555": {
		auditlog: "admin-logs",	
		movement: "admin-logs",
		auditmsg: "admin-logs", 
		voice: "admin-logs", 
		trackroles: true,
	}
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
  let logChannel = client.channels.cache.get('839632546027274240');
    logChannel.send("", {embed: {
      color: 0xf70000,
      description: `${error}`,
      timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Winter Adventures Guide School"
        }
    }});
});

client.login(process.env.token);
