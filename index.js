const { AoiClient } = require("aoi.js");

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const fs = require('fs');

const client = new AoiClient({
	token: process.env.TOKEN,
	prefix: "w!",
    respondToBots: false,
	aoiLogs: "true",
	aoiWarning: "true",
    intents: ["Guilds", "GuildMembers", "GuildBans", "DirectMessages", "MessageContent", "GuildMessages","GuildVoiceStates"],
    events: ["onInteractionCreate", "onMessageDelete","onMessage", "onChannelCreate", "onThreadCreate", "onJoin", "onLeave", "onMemberUpdate", "onBanAdd"],
	//onInteractionCreate
	disableFunctions : ["$clientToken"],
	database: {
    type: "aoi.db",
    db: require("aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    debug: "true",
    securityKey: "a-32-characters-long-string-here",
    },
    autoUpdates: false,
    mobilePlatform: false,
    guildOnly: true,
    respondOnEdit: {
    commands: true,
    time: 600000
},
    suppressAllErrors: false,
    errorMessage: ["", ""]
    });


const { LoadCommands } = require("aoi.js");

require("./handler/variables.js")(client);
require("./handler/status.js")(client);

client.loadCommands("./comandos/", true);

client.functionManager.createFunction({
    name: "$updateVersion",
    type: "aoi.js",
    code: `$writeFile[Recursos/version.json;$username[$clientID] $formatDate[$dateStamp;D.M];utf8]`
});

client.functionManager.createFunction({
    name: "$getVersion", 
    type: "aoi.js",
    code: `$readFile[Recursos/version.json]`
});

client.functionManager.createFunction({
    name: "$linuxRam", 
    type: "aoi.js",
    code: `$exec[pm2 jlist | jq '.[] | select(.name=="winder-bot") | .monit.memory / 1024 / 1024 | floor' | tr -d '\\n']`
});
