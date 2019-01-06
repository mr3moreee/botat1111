const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*"

client.on('ready', () => {
console.log(`سجل الدخول ${client.user.tag}!`);
console.log('')
console.log('')
console.log('╔[═════════════════════════════════════════════════════════════════]╗')
console.log(`[Start] ${new Date()}`);
console.log('╚[═════════════════════════════════════════════════════════════════]╝')
console.log('')
console.log('╔[════════════════════════════════════]╗');
console.log(`تسجيل الدخول ل * [ " ${client.user.username} " ]`);
console.log('')
console.log('معلومات : ')
console.log('')
console.log(`عدد السيرفرات♤ [ " ${client.guilds.size} " ]`);
console.log(`المستخدمين♡ [ " ${client.users.size} " ]`);
console.log(`الرومات♧ [ " ${client.channels.size} " ]`);
console.log('╚[════════════════════════════════════]╝')
console.log('By Jackeo')
console.log('╔[════════════]╗')
console.log(' البوت اون لاين')
console.log('╚[════════════]╝')
console.log('V2 العربية arap ')
console.log('Dev Narox by Jackeo')


//النسخة المعربة من جاكيو 


});


client.on("message", message => {
    var prefix = "$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم السكن الي تبيه**");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


//كود استريمنق
client.on('ready',  () => {
            console.log(`Family Server`);
    client.user.setGame("Family Server", "https://www.twitch.tv/idk");
});



client.on("message", message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setDescription(`**تم الارسال في الخاص**📬`)
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Talk With @Mr_3moreee')
         .setURL('')
         .setDescription(``)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**خاصك مقفول**🔐'))
   
   }
   });


client.on('message', message => {
var prefix = "$" // البريفكس
if(message.content.startsWith(prefix +"server")){ // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});



//Best Rainbow Bot .
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
	  let role = message.guild.roles.find('RainBow', 'Rainbow bot.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow bot.",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow bot.');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})




client.login(process.env.BOT_TOKEN);
