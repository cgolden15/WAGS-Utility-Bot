const Discord = require("discord.js");
const chalk = require("chalk");
var os = require("os-utils");

exports.run = async (client, message, args) => {
    if(message.author.id !== "317283391982534666"){
        return message.channel.send({embed: {
            color: 16733013,
            description: "Sorry, this is a developer only command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }
    os.cpuUsage(function(v){
	    console.log( 'CPU Usage (%): ' + v );
      let usage = v
    });
    os.cpuFree(function(v){
	    console.log( 'CPU Free:' + v );
      let free = v
    });    
  return message.channel.send({embed: {
        color: 4782609,
        title: `System Info:`,
        fields: [{
        name: `Platform:`,
        value: os.platform(),
      },
      {
        name: `CPUs:`,
        value: os.cpuCount(),
      },
      {
        name: `System Uptime:`,
        value: (os.sysUptime() + " Seconds"),
        inline: true
      },
      {
        name: `Process Uptime:`,
        value: (os.processUptime() + " Seconds"),
        inline: true
      },
      {
        name: "⠀",
        value: "⠀",
        inline: true
      },
      {
        name: "CPU Usage:",
        value: (`ERR:`),
        inline: true
      },
      {
        name: "CPU Unused:",
        value: (`ERR:`),
        inline:true
      },
      {
        name: "⠀",
        value: "⠀",
        inline: true
      },
      {
        name: `Free Memory:`,
        value: (os.freemem() + " Kb"),
        inline: true
      },
      {
        name: `Free Memory:`,
        value: (os.freememPercentage() + "%"),
        inline: true
      },
      {
        name: `Total Memory:`,
        value: (os.totalmem() + "Kb"),
        inline: true
      },
      {
        name: `Load Usage:`,
        value: (os.loadavg() + "%"),
        inline: true
      },
      {
        name: `Load Average:`,
        value: (os.loadavg(5) + "% /5 mins")
      },
      {
        name: `Links:`,
        value: "System Monitor - [Here](https://stats.uptimerobot.com/5lYPru0zLY)\nOAuth2 - [here](https://discord.com/api/oauth2/authorize?client_id=837304754760712192&permissions=1007025344&scope=bot)"
      },
      ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Golden15#8008"
        },
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
  }});
}