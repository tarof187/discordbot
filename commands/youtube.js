module.exports = {
    name: "youtube",
    description: "Sendet ein Link...",
    execute(message, args, cmd, client, Discord){
        message.channel.send("https://youtube.com");
    }
}