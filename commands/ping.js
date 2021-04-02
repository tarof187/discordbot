module.exports = {
    name: "ping",
    description: "Ping command!",
    aliases: [],
    cooldown: 0,
    execute(message, args, cmd, client, Discord){
        message.channel.send("pong!");
        
    }
}