require('dotenv').config();
//create cooldowns map
const cooldown = new Map();
module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||
        client.commands.find(a => a.aliases && a.aliases.includes(cmd));


    try{
        command.execute(message, args, cmd, client, Discord);
    }   catch (err) {
        message.reply("Ein wilder Fehler ist aufgetaucht!");
        console.log(err);
    }

}