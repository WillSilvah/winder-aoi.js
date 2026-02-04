module.exports = [{
name: "resetMsgs",
type: "loop",
channel: "1465218335389257802",
executeOnStartup: "true",
every: 65000,
code: `
$setGuildVar[msgPerMinute;0;$guildID]

`
}]