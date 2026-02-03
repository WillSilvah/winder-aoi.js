module.exports = [{
name: "drop emit",
desc: "Force a inicialização de um drop de catavento",
aliases: ["dropemit", "dropstart"],
category: "Desenvolvedor",
usage: "drop emit",
code: `
$setUserVar[pickCount;$sum[$getUserVar[pickCount;$clientID];1];$clientID]

$setGuildVar[pickXPmin;0]
$setGuildVar[pickXPmax;0]
$slowmode[0s;$getGuildVar[batePapo]]
$channelSendMessage[$getGuildVar[batePapo];###  EVENTO DE CHAT FOI CANCELADO!]

$setGuildVar[pickStatus;false]
$setGuildVar[pickLastUser;$clientID]
$setGuildVar[pickWord;canotipo]

$clientTyping
$onlyIf[$getGuildVar[pickStatus]==true;]

$wait[1m]
$setGuildVar[pickXPmin;5]
$setGuildVar[pickXPmax;15]

$ifAwaited[1==1;{execute:drop-$ifAwaited[$message[1]==;$random[1;4];$message[1]]}]

$deleteCommand
$suppressErrors

$useChannel[$getGuildVar[batePapo]]

$setGuildVar[pickEmit;true;$guildID
$onlyPerms[administrator;<@$authorID> Você precisa ter a permissão de administrador para usar este comando.]
`
}] 
