const { execute } = require("./play");

module.exports = {
    name: 'clear',
    description: "Löscht Nachrichten!",
    async execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.reply("Schreib eine Zahl zum Löschen!");
        if(isNaN(args[0])) return message.reply("Schreib eine Richtige Zahl rein!");

        if(args[0] > 100)  return message.reply("Du kannst nicht mehr als 100 Nachrichten Löschen!");
        if(args[0] < 1)    return message.reply("Du musst mindestens eine Zahl löschen!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
     }
}