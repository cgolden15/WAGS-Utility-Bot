const { MessageEmbed } = require("discord.js");
require('dotenv').config();
const prefix = process.env['prefix']
const Discord = require('discord.js');

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
    let channel = args[0]
    let question = args.slice(1).join(" ")    
    if (!channel) {
      return message.channel.send(
        `You did not mention / give the id of your channel!`
      );
    }
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const embed = new Discord.MessageEmbed()
      .setTitle(`New poll!`)
      .setDescription(`${question}`)
      .setFooter(`${message.author.username} created this poll.`)
      .setColor(`RANDOM`);
    const poll = await client.channels.cache.get(message.channel.id).send(embed)
    await poll.react("✔️");
    await poll.react("❌");
}