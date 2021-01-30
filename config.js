module.exports = {
	/* The token of your Discord Bot */
	token: "Nzg4NDMwNTkyMTI2NjE1NjMy.X9jZNQ.3KI5EMnQp-ai2LVR6i7GRBzOHW8",
	/* For the support server */
	support: {
		id: "758737264959422496", // The ID of the support server
		logs: "758742056205156384", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "4Yz2KZ2vgim3K4WPbq4nTtVckrLgguTe", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.en", // The base URl of the dashboard
		logs: "758742056205156384", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "dhvit_OP", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "=", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "made by Dhvit" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "694960268698189874", // The ID of the bot's owner
		name: "RYΠΣX丶The^^ᴰᴱⱽᴱᴸᴼᴾᴱᴿ#5619" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "v_vhbO35_E9kyZvuh_9RD9agGoO9aPAhi2WtDM-trW0rgZ018GsepS-dU7OHb__T",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "26a53bf8-1ed3-4b7c-98c0-571a28038ffe",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "81ec44aee6ccbb692dabd2eb0e1454b7f0c5ef1dd805a939a291127eb26b0f5af5bb4a94f095bceade9417c25292e746504e378f2d0f3aa2864c3d775c32e76a",
		
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Androz2091", // Founder's github account
		donate: "https://patreon.com/Androz2091" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "to =help",
			type: "LISTENING"
		},
		{
			name: "LGT OP",
			type: "PLAYING"
		}
	]
};
