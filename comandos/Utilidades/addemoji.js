module.exports = [{
name: "addemoji",
aliases: ["adicionaremoji", "emojiadd"],
desc: "Adiciona um emoji ao servidor",
category: "Gerenciamento",
usage: "addemoji nome link/anexo",
code: `
Emoji adicionado! $get[emoji]
$reply
$let[emoji;$addEmoji[$guildID;$ifAwaited[$message[2]==;$messageAttachment[1];$message[2]];$message[1];true;Adicionado por: $usertag]]
$onlyIf[$checkContains[$if[$messageAttachment[1]!=;true] $if[$message[2]!=;true];true]==true;]


$ifAwaited[$checkContains[$if[$messageAttachment[1]!=;true] $if[$message[2]!=;true];true]!=true;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
$onlyPerms[manageguild;<@$authorID> Você precisa ter a permissão **gerenciar servidor** para executar este comando.]


$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
}]