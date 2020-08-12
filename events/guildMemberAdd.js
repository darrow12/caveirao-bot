module.exports = async (client, member) => {
	
	const embed = {
      "title": ":rocket: | Bem-vindo!",
      "description": "Bem-vindo ao servidor",
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "a"
	  },
	  "fields": [
		{
            "name": "O servidor tem agora:",
            "value": "11 membros"
		}
	  ]
	};
	member.guild.channels.find("name","▏entrada").send({embed});
}