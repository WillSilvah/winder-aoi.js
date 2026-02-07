module.exports = [{
name: "$alwaysExecute",
code: `
$setGuildVar[msgPerMinute;$sum[$getGuildVar[msgPerMinute];1]]

$onlyIf[$channelID==$getGuildVar[batePapo];]

$setUserVar[messageMonth;$sum[$getUserVar[messageMonth;$authorID];1];$authorID]
$setUserVar[messageTotal;$sum[$getUserVar[messageTotal;$authorID];1];$authorID]

$setGuildVar[lastUserSendMessage;$authorID]

$setUserVar[lastMessage;$message;$authorID]
$setUserVar[lastMessageTime;$hour:$minute:$second - $formatDate[$dateStamp;DD/MM/YYYY];$authorID]
$setUserVar[lastMessageChannel;$channelID;$authorID]

$timezone[America/Recife]
$setGuildVar[guildMonthMessages;$sum[$getGuildVar[guildMonthMessages];1]]

$onlyForGuilds[1462224054676099094;]
$onlyIf[$isBot==false;]
`
},{
name: "$alwaysExecute",
code: `
$giveRoles[$guildID;$authorID;Cargos automáticos;1462544909390319960]

$onlyIf[$getUserVar[messageTotal;$authorID]<=6;]
$onlyForGuilds[1462224054676099094;]

`
}]