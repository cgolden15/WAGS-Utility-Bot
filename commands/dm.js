const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client({
  fetchAllMembers: true
})

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.some(role =>["Director", "Deputy Director", "Board of Directors"].includes(role.name))){
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
            description: `The message argument is required.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
  
  let user = args[0]
  let content = args.slice(1).join(" ")
  client.users.cache.get(`${user}`).send(`${content}`).catch((err) => {
    console.error(err);
    var x = err.message;
    console.log(chalk.red(`${x}`))
    return message.reply("ERROR: I can't DM this user. User has DM's disabled or has blocked me.");
  });
  let logChannel = client.channels.cache.get('839632546027274240');
    logChannel.send({embed: {
      color: 0x14C97C,
      description: `User <@${user}> has been sent the following:\n${content}`,
      author: {
          name: message.author.tag,
          icon_url: message.author.displayAvatarURL()
      },
      timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Winter Adventures Guide School"
        }
    }});
    return message.channel.send({embed: {
      color: 0x14C97C,
      description: `User <@${user}> has been sent the following:\n${content}`,
      author: {
          name: message.author.tag,
          icon_url: message.author.displayAvatarURL()
      },
      timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Winter Adventures Guide School"
        }
    }});
}