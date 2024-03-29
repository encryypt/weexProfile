const express = require("express");
const http = require("http");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://profilewex.glitch.me/`); 
}, 280000);


const Discord = require("discord.js");
const converter = require("number-to-words");
const moment = require("moment");
const dateformat = require("dateformat");
const ms = require("parse-ms");
const client = new Discord.Client({ disableEveryone: true });
const bot = new Discord.Client();
const fs = require("fs");
const request = require("request");
const Canvas = require("canvas");
const jimp = require("jimp");
const weather = require("weather-js");
const pretty = require("pretty-ms");
client.on("warn", console.warn);
client.on("error", console.error);

const prefix = "-";
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var time = require("./timew.json");
client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    const author = message.author.id;
    const args = message.content.split(' ');
   if (args[0].toLowerCase() === `${prefix}weekly` ||
 args[0].toLowerCase() === `w`
) {
    let cooldown = 60.48e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send( `> **<a:727220687827370147:727613791201919031> | ${ message.author.username }, your daily credits refreshes in \'${pretty(times, { verbose: true })}'.\**`);
      fs.writeFile("./timew.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (2,5,8,14,19,20);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `> **<a:727220687827370147:727613791201919031> ${message.author.username}, You got :dollar: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
});

const credits = require('./credits.json');
const cool = [];
client.on('message', async message => {
  
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    const args = message.content.split(' ');

    const path = './credits.json';
    const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
    const mentionn = message.mentions.users.first() || client.users.get(args[1]);
    const author = message.author.id;
    const balance = args[2];

    if (!credits[author]) credits[author] = { credits: 0 }; //50
    if (!credits[mention.id]) credits[mention.id] = { credits: 0 };
    fs.writeFileSync(path, JSON.stringify(credits, null, 4), function (err) { if (err) console.log(err) });

    if (message.content.startsWith(prefix + "credits")) { 
        if (args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits` && args[0] !== `c`) return;

        if (args[2]) {
            if (isNaN(args[2])) return message.channel.send(`> **:interrobang: | ${message.author.username}, type the credits you need to transfer!**`);
            if (mention.bot) return message.channel.send(`> ** :rolling_eyes: | Bot No Profile **`);
            if (mention.id === message.author.id) return message.channel.send('> **:heavy_multiplication_x:| You Cannot Transfer Credits To Yourself**');
            if (credits[author].credits < balance) return message.channel.send(`> **:rolling_eyes: | ${message.author.username}, Your balance is not enough for that!**`);
            if (args[2].startsWith("0")) return message.channel.send(`> **:interrobang: | ${message.author.username}, type the credits you need to transfer!**`);
            if (args[2].includes(".")) return message.channel.send(`> **:interrobang: | ${message.author.username}, type the credits you need to transfer!**`);
            if (args[2].includes("-")) return message.channel.send(`> **:interrobang: | ${message.author.username}, type the credits you need to transfer!**`);
            //if(!Number.isInteger(args[2])) return message.channel.send(`**~~>~~ :interrobang: | ${message.author.username}, type the coins you need to transfer__~~!~~__**`);

            var one = Math.floor(Math.random() * 10) + 1;
            var two = Math.floor(Math.random() * 10) + 1;
            var three = Math.floor(Math.random() * 10) + 1;
            var four = Math.floor(Math.random() * 10) + 1;

            var number = `${one}${two}${three}${four}`;

            message.channel.send(`**${message.author.username}, Amount :\`$${balance}\`
- :pencil2: | \`${number}\`, 
**`).then(m => {
                message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 60000 }).then(c => {
                    if (c.first().content === number) {
                        m.delete();
                        message.channel.send(`> **<a:727220687827370147:727613791201919031> | ${message.author.username}, has transferred \`$${balance}\` to ${mention}**`);


                        var mentioned = message.mentions.users.first() || message.guild.members.get(args[0]);
                        mentioned.send(`> **<a:727220687827370147:727613791201919031> | You have received $${balance} from user ${message.author.username}**`);

                        credits[author].credits += (-balance);
                        credits[mention.id].credits += (+balance);
                        fs.writeFile(path, JSON.stringify(credits, null, 5), function (err) { if (err) console.log(err) });
                    } else if (c.first().content !== number) {
                        m.delete();
                    }
                });
            });
        }
        if (!args[2]) {
            if (mention.bot) return message.channel.send(`> ** :rolling_eyes: | Bot No Profile **`);
            message.channel.send(`> **${mention.username}, your <a:727220687827370147:727613791201919031> balance is \`\`$${credits[mention.id].credits}\`\`.**`);
        }

    }
 
var time = require("./time.json");

   if (args[0].toLowerCase() === `${prefix}daily` ||
 args[0].toLowerCase() === `d`
) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send( `> **<a:727220687827370147:727613791201919031> | ${ message.author.username }, your daily credits refreshes in \'${pretty(times, { verbose: true })}'.\**`);
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (2,3,7,6,10);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `> **<a:727220687827370147:727613791201919031> ${message.author.username}, You got :dollar: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
});



const profile = JSON.parse(fs.readFileSync("profile.json", "utf8"));
 
 
 client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1,
              rep: 0,
              tite: "No Title"
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 250) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using VekkxBot!"
        if(!tit) {
            message.channel.send("> **Usage: $title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`> :white_check_mark:  | **Done** .`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`> **<a:__42:748413394335563826> | ${message.author.username}, mention anybody.**`);
  if(getvalueof.bot) return message.channel.send(`> ** :rolling_eyes: | Bot No Profile **`)
                       if(getvalueof.id == message.author.id) return message.channel.send(`> :rolling_eyes: |  **${message.author.username}, You can't give yourself !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`> ** <a:12345:726956208048701502> |  ${message.author.username} has given ${getvalueof} a rep point!**`)
        } else {
         message.channel.send(`> **- :rolling_eyes: |  ${message.author.username}, you can give more rep ${moment().endOf('day').fromNow()} **`)
        }
       }
        
  fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
  let mention = message.mentions.users.first() || message.author;
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "No Reps", credits: 1, level: 1,tite: "TopBot", rep: 0, lastDaily: "NOT COLLECTED"};
 if (mention.bot) return message.channel.send(`> **:rolling_eyes: | Bot No Profile **`);
            let Image = Canvas.Image,
            canvas = new Canvas.createCanvas(307, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("Pic.jpg", function (err, Background) { 
              if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 307, 300); 
 
})
 
 
   
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 15px kathen'; 
                        ctx.fontSize = '15px'; 
                        ctx.fillStyle = "#000000"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${getvalueof.username}`, 153, 200) 
 
                        //ur name
                        ctx.font = 'bold 15px kathen'; 
                        ctx.fontSize = '15px'; 
                        ctx.fillStyle = "#f1f1f1"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${getvalueof.username}`, 153, 200) 
 
                        //credit
                        ctx.font = "bold 10px kathen"
                        ctx.fontSize = '10px'; 
                        ctx.fillStyle = "#f1f1f1" 
                        ctx.textAlign = "center";
                        ctx.fillText(`$${credits[mention.id].credits}`, 248 , 147) 
 
 
                        ctx.font = "bold 10px kathen" 
                        ctx.fontSize = '12px'; 
                        ctx.fillStyle = "#f1f1f1" 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${profile[mention.id].tite}`, 150,164)
 
                        //Level
                        ctx.font = "bold 24px kathen" 
                        ctx.fontSize = '10px'; 
                        ctx.fillStyle = "#f1f1f1" 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${profile[getvalueof.id].level}`, 248, 95) 
 
                         //info
                        ctx.font = "bold 12px kathen" 
                        ctx.fontSize = '15px'; 
                        ctx.fillStyle = "#000000" 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${profile[getvalueof.id].points}/250`, 170, 270) 
 
                        //info
                        ctx.font = "bold 12px kathen" 
                        ctx.fontSize = '15px'; 
                        ctx.fillStyle = "#f1f1f1"
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${profile[getvalueof.id].points}/250`, 170, 270) 
 
                        // REP
                        ctx.font = "bold 20px  kathen";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[mention.id].rep}`, 65,95)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(153.5, 85.5, 50, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 100, 34, 110, 110);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});



client.login(process.env.BOT_TOKEN);
