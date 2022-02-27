const Discord = require('discord.js');
const client = new Discord.Client();
const filter = m => m.content.includes('discord');

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.some(role =>["Staff", "Developer"].includes(role.name))){
        return message.channel.send({embed: {
            color: 0xce2727,
            description: "You do not have the necessary permissions to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    let msg = args.join(' ');
    if(!msg){
        return message.channel.send({embed: {
            color: 0xce2727,
            description: `The message argument is required.\nFormat:\n>in [roblox username] [Start Date] [End Date] [Partial or full Inactivity] [Reason]`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    let rbxuser = args[0]
    let sdate = args[1]
    let edate = args[2]
    let activity = args[3]
    let content = args.slice(4).join(" ")
    let inchannel = await message.guild.channels.cache.get(process.env.inchannel);
    if (message.deletable) message.delete();
    inchannel.send(`<@${message.author.id}>`, {embed: {
        color: 0x112CC1,
        title: `New Inactivity Notice:`,
        fields: [{
          name: "Username:",
          value: `${rbxuser}`
        },
        {          
          name: "Length:",
          value: `from ${sdate} to ${edate}`
        },
        {
          name: "Partial or Full Inactivity:",
          value: `${activity}`
        },
        {
          name: "Reason",
          value: `${content}`,
        },
        ],
        footer: {
            text: 'Winter Adventures Guide School'
        },
        timestamp: new Date(),
    }}).then((question) => {
          question.react('✔️');
          question.react('❌');
    });
    let logchannel = message.guild.channels.cache.get(process.env.logchannelid);
    logchannel.send({embed: {
        color: 0x112CC1,
        description: `<@${message.author.id}> has requested an Inactivity Notice.`,
        footer: {
            text: 'Action Logs'
        },
        timestamp: new Date()
    }});
    let logChannel = client.channels.cache.get('839632546027274240');
    logChannel.send
    logChannel.send({embed: {
      color: 0x112CC1,
        description: `<@${message.author.id}> has requested an Inactivity Notice. With fields:`,
        fields: [{
          name: "Username:",
          value: `${rbxuser}`
        },
        {          
          name: "Length:",
          value: `from ${sdate} to ${edate}`
        },
        {
          name: "Partial or Full Inactivity:",
          value: `${activity}`
        },
        {
          name: "Reason",
          value: `${content}`,
        },
        ],
        footer: {
            text: 'Winter Adventures Guide School'
        },
        footer: {
            text: 'WAGS Action Logs'
        },
        timestamp: new Date()
    }});  
}