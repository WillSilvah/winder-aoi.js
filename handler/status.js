module.exports = (client) => {

client.status({
    name: "$linuxRam MB | $cpu% | $uptime[humanize] | $pingms | $getVersion",
    type: "PLAYING",
    status: "online",
    time: 12
});

client.status({
    name: "$membersCount[$guildID;all;false] peludos",
    type: "WATCHING",
    status: "online",
    time: 12
});

client.status({
    name: "Mais de $getGuildVar[guildMonthMessages;1462224054676099094] neste mês!",
    type: "LISTENING",
    status: "online",
    time: 12
});


}
//Playing
//Watching
//Listening
//Streaming
//Competing
