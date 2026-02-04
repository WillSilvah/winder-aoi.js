module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$stringStartsWith[$toLowerCase[$message];creeper]==true;
{execute:replyCreeper}
]

$ifAwaited[$checkContains[$toLowerCase[$message];olavo;funera;sepult;mort;morr;esquelet;skelet;☠️;💀]==true;
{execute:replySkull}
]

$onlyIf[$mentioned[1]==$authorID;]

`
},{
name: "replyCreeper",
type: "awaited",
code: `
Aw Man!

$cooldown[5m;]
$reply
$clientTyping
$onlyIf[$mentioned[1]==$authorID;]
`
},{
name: "replySkull",
type: "awaited",
code: `
$addCmdReactions[$randomText[💀;☠️]]

$cooldown[5m;]
`
},{
name: "replyBoyKisser",
type: "awaited",
code: `
https://media.discordapp.net/attachments/710336101944000563/1065439319118069813/56541849-AD0F-4FC9-AA86-F8D5B3001B47.gif

$reply
$clientTyping
$guildCooldown[4h;]
`
}]