module.exports = [{
	name: "joinbanteste",
	type: "join",
	channel: "$getGuildVar[batePapo]",
	code: `
$awaitExecute[autoBan]

$let[user_id;$getObjectProperty[infoBan;userID]]
$let[motivo;$getObjectProperty[infoBan;motivo]]
$createObject[infoBan;$readFile[Recursos/autoBanimentos/$authorID.json]]
$onlyIf[$fileExists[Recursos/autoBanimentos/$authorID.json]==true;Nãota banidoKKKKKKK]
`
},{
	name: "updateMemberAutoBan",
	type: "memberUpdate",
	code: `
$awaitExecute[autoBan]

$let[user_id;$getObjectProperty[infoBan;userID]]
$let[motivo;$getObjectProperty[infoBan;motivo]]
$createObject[infoBan;$readFile[Recursos/autoBanimentos/$authorID.json]]
$onlyIf[$fileExists[Recursos/autoBanimentos/$authorID.json]==true;Nãota banidoKKKKKKK]
	
`
},{
	name: "autoBan",
	type: "awaited",
	code: `
$sendMessage[<@$clientID> **$username[$get[userID]]** foi **$get[puniType]**!]


$ban[$guildID;$get[userID];0;Banido por: $userTag[$get[staffID]] | Motivo: $get[reason]]
$ifAwaited[1==1;{execute:punishment-log}]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$sendMessage[$getGuildVar[prefixo]ban <@$authorID> $get[reason]

$let[staffID;$clientID]
$let[userID;$get[user_id]]
$let[reason;$get[motivo]]
$let[puniType;Banido Automaticamente]
`
}]