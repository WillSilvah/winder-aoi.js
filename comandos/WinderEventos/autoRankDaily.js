module.exports = [{
name: "autoRankDaily",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "false",
every: 10800000 ,
code: `

$channelSendMessage[$getGuildVar[rankedChat];{newEmbed:
{author:$getObjectProperty[session;name]:https://abs.twimg.com/emoji/v2/72x72/1f4ac.png}
{title:Top fofoqueiros ativos}
{description:
$userLeaderBoard[1462224054676099094;msgXP;desc;{top}° **<@{id}>** -> ✨️{value};11;1]

$userLeaderBoard[1462224054676099094;messageMonth;desc;{top}° **<@{id}>** -> 💬️{value};11;1]
}
{footer:Atualizado sempre a cada 3 horas. | $getGuildVar[prefixo]rank}
{color:Green}
}]

$createObject[session;$readFile[Recursos/session.json]]

$clear[$getGuildVar[rankedChat;1462224054676099094];6]
`
}]