const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (Discord, client) => {
    client.user.setActivity('$[made by Gott#0673]', {type:"STREAMING",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
}