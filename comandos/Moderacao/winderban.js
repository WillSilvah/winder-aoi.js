module.exports = [{
name: "winder ban",
aliases: ["winder banir", "wb", "winder exilar"],
desc: "Bane automaticamente um usuário permanentemente",
category: "Moderação",
usage: "winder ban userID motivo?",
code: `
$ifAwaited[1==1;{execute:punishment-log}] 

$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$writeFile[Recursos/autoBanimentos/$get[userID].json;
{
    "username": "$username[$get[userID]]",
    "motivo": "$get[reason]",
    "userID": "$get[userID]",
    "guildID: "$guildID"
};utf8]

$onlyIf[$message[1]!=$authorID;<@$authorID> | Você está colocando seu próprio ID.]

$let[staffID;$authorID]
$let[userID;$message[1]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;adicionado na lista de membros ofensivos]
$clientTyping

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]
`
},{
	name: "winder unban", 
	aliases: ["winder desbanir", "wub"],
	desc: "Desbane automaticamente um usuário permanentemente",
	category: "Moderação",
	usage: "winder unban userID motivo?",
	code: `
$sendMessage[<@$authorID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[1==1;{execute:punishment-log}]
	
$deleteFile[Recursos/autoBanimentos/$get[userID].json]

$onlyIf[$fileExists[Recursos/autoBanimentos/$authorID.json]==true;<@$authorID> | Este membro não está adicionado na lista de membros ofensivos.]

$let[staffID;$authorID]
$let[userID;$message[1]]
$let[reason;$if[$messageSlice[1]==;Sei lá qual foi o motivo, só sei que recebeu!;$messageSlice[1]]]
$let[puniType;removido da lista de membros ofensivos]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$onlyIf[$hasRoles[1462224054676099094;$authorID;1462547405466636384]==true;<@$authorID> | Você precisa ser **$username[$clientID]** Developer para poder executar esse comando.]

`
}]