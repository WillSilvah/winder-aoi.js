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
$slowmode[0s;1462224055884189781]
$channelSendMessage[$getVar[batePapo];###  EVENTO DE CHAT FOI CANCELADO!]

$setGuildVar[pickStatus;false]
$setGuildVar[pickLastUser;$clientID]
$setGuildVar[pickWord;canotipo]

$clientTyping
$onlyIf[$getGuildVar[pickStatus]==true;]

$wait[1m]
$setGuildVar[pickXPmin;20]
$setGuildVar[pickXPmax;30]

$ifAwaited[1==1;{execute:drop-$ifAwaited[$message[1]==;$random[1;4];$message[1]]}

$deleteCommand
$suppressErrors
$onlyPerms[administrator;<@$authorID> Você precisa ter a permissão de administrador para usar este comando.]

$useChannel[$getGuildVar[batePapo]]

$setGuildVar[pickEmit;true;861313067291115541]
`
}] 
