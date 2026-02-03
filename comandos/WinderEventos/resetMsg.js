module.exports = [{
name: "resetMsgs",
type: "loop",
channel: "1468237433337544877",
executeOnStartup: "true",
every: 60000,
code: `
$resetGuildVar[msgPerMinute]
$wait[1s]

$sendMessage[{newEmbed:
{author:$getGuildVar[msgPerMinute;1462224054676099094] mensagens por minuto}
{color:Random}
}]
`

}]
