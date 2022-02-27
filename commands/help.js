require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427,
        title: `Here are my commands:`,
        fields: [{
        name: `${process.env.prefix}help`,
        value: "Shows this list of commands."
      },
      {
        name: `${process.env.prefix}in <roblox username> <Start Date> <End Date> <Partial or full Inactivity> <Reason>`,
        value: "Requests an Inactivity Notice."
      },
      {
        name: `${process.env.prefix}dm <user id> <body>`,
        value: "Dm's the specified user the provided text."
      },
      {
        name: `${process.env.prefix}emojis`,
        value: "Displays a list of all server emojis"
      },
      {
        name: `${process.env.prefix}slowmode <length> <reason>`,
        value: "Sets a slowmode in user's current channel to the desired amount."
      },
      {
        name: `${process.env.prefix}poll <channel> <question>`,
        value: "Sends a yes or no poll to the requested channel"
      },
      {
        name: `Additional Info`,
        value: "System Monitor - [Here](https://stats.uptimerobot.com/5lYPru0zLY)\nWAGS Website - [Here](https://sites.google.com/view/wa-guide-school/home)"
      },
    ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Created by Golden!! for WA Guide School"
        },
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}