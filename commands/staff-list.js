const { MessageEmbed } = require("discord.js");
const chalk = require('chalk');
const stafflist = process.env['stafflist']
const Discord = require('discord.js');
var currentdate = new Date(); 
let options = {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
},

formatter = new Intl.DateTimeFormat([], options);

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.some(role =>["Director", "Deputy Director", "WAGS Bot Owner"].includes(role.name))){
        return message.channel.send({embed: {
            color: 0xce2727,
            description: "You do not have the necessary permissions to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    if (message.deletable) message.delete();
    let logChannel = client.channels.cache.get('839632546027274240');
      logChannel.send( {embed: {
        color: 0x27ce27,
        title: "Staff List Event:",
        description: `WAGS Staff Started. <#834634831609462795>`,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Winter Adventures Guide School"
        }
    }});

    staff = message.guild.members.cache.filter(m => m.roles.cache.has("830627185554751509")).array()
    let mods = (message.guild.members.cache.filter(m => m.roles.cache.has("807135691842125855")).map(m => `<@!${m.id}>`).join("\n"))
    let srmods = (message.guild.members.cache.filter(m => m.roles.cache.has("808254999170646073")).map(m => `<@!${m.id}>`).join("\n"))
    let gins = (staff.filter(m => m.roles.highest.id === "807135240631091221").map(m => `<@!${m.id}>`).join("\n"), staff.filter(m => m.roles.highest.id === "807135430679592990").map(m => `<@!${m.id}>`).join("\n"),  staff.filter(m => m.roles.highest.id === "807135450933362701").map(m => `<@!${m.id}>`).join("\n"))
    let hicom = staff.filter(m => m.roles.highest.id === "807134309530075148").map(m => `<@!${m.id}>`).join("\n")
    let pins = (staff.filter(m => m.roles.highest.id === "832692828655452232").map(m => `<@!${m.id}>`).join("\n"), staff.filter(m => m.roles.highest.id === "832691059637223444").map(m => `<@!${m.id}>`).join("\n"), staff.filter(m => m.roles.highest.id === "832690289834852404").map(m => `<@!${m.id}>`).join("\n"))
    let admins = staff.filter(m => m.roles.highest.id === "808766596096720907").map(m => `<@!${m.id}>`).join("\n")
    let lins = staff.filter(m => m.roles.highest.id === "808766593877540955").map(m => `<@!${m.id}>`).join("\n")
    let lpins = staff.filter(m => m.roles.highest.id === "833126563292774431").map(m => `<@!${m.id}>`).join("\n")
    let bod = staff.filter(m => m.roles.highest.id === "808766656670204005").map(m => `<@!${m.id}>`).join("\n")
    let deputy = staff.filter(m => m.roles.highest.id === "807134163882475530").map(m => `<@!${m.id}>`).join("\n")
    let dir = staff.filter(m => m.roles.highest.id === "807134094722334771").map(m => `<@!${m.id}>`).join("\n")

    if (mods == "") mods = "No mods found!"
    if (srmods == "") srmods = "No Sr. Mods found!"
    if (gins == "") gins = "No Guide Instructors found!"
    if (pins == "") pins = "No Pilot Instructors found!" 
    if (admins == "") admins = "No admins found!" 
    if (lins == "") lins = "No Lead Instructors found!"; 
    if (lpins == "") lpins = "No Lead Pilor Instructors found!" 
    if (bod == "") bod = "No Board members found!??!!?" 
    if (deputy == "") deputy = "No Deputy Director found!" 
    if (dir == "") dir = "No Director found!" 
 
      function stafflist() {
        const list = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('WAGS Current Staff')
	        .setDescription('This is a list of all current staff within WAGS. Automatically updates hourly.')
	        .setTimestamp()
            .addField("WA Hicom", hicom)
            .addField("Director", dir)
            .addField("Deputy Director", deputy)
            .addField("Board of Directors", bod)
            .addField("Lead Pilot Instructor", lpins)
            .addField("Lead Instructor", lins)
            .addField("Administrator", admins)
            .addField("Pilot Instructors", pins)
            .addField("Guide Instructors", gins)
            .addField("Moderators", `${mods}\n${srmods}`)
	        .setFooter('Winter Adventures Guide School');

        message.channel.messages.fetch(process.env.stafflist).then(msg => msg.edit(list))
      }
    stafflist();
    
    setInterval(function(){
      const list = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('WAGS Current Staff')
	      .setDescription('This is a list of all current staff within WAGS. Automatically updates hourly.')
	      .setTimestamp()
        .addField("WA Hicom", hicom)
        .addField("Director", dir)
        .addField("Deputy Director", deputy)
        .addField("Board of Directors", bod)
        .addField("Lead Pilot Instructor", lpins)
        .addField("Lead Instructor", lins)
        .addField("Administrator", admins)
        .addField("Pilot Instructors", pins)
        .addField("Guide Instructors", gins)
        .addField("Moderators", `${mods}\n${srmods}`)
	      .setFooter('Winter Adventures Guide School');

        message.channel.messages.fetch(process.env.stafflist).then(msg => msg.edit(list))
    },3600000);
}