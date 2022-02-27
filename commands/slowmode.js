const { MessageEmbed } = require("discord.js");

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
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      1 + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "No reason provided!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}** with the reason: **${reason}**`
    );
}