module.exports = [{
name: "$alwaysExecute",
code: `
$setGuildVar[pickEmit;false;$guildID]
$awaitExecute[give-role-event]

$setGuildVar[pickLastUser;$authorID;$guildID]
$setUserVar[pickCount;$sum[$getUserVar[pickCount;$authorID;$guildID];1];$authorID;$guildID]
$slowmode[0s;$getGuildVar[batePapo]]
$sendMessage[<@$authorID> | Parabéns, você ganhou ✨**+$get[xpDrop] PDA**!]
$addCmdReactions[⭐]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID;$guildID];$get[xpDrop]];$authorID;$guildID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID;$guildID];$get[xpDrop]];$authorID;$guildID]
$let[xpDrop;$ifAwaited[$hasRoles[$guildID;$authorID;$getGuildVar[memberVerifiedRole]]==true;$random[$getGuildVar[pickXPmin;$guildID];$getGuildVar[pickXPmax;$guildID]];0]]
$useChannel[$getGuildVar[batePapo]]
$setGuildVar[pickStatus;false;$guildID]
$setGuildVar[pickWord;kkkkkkk;$guildID]

$onlyIf[$message==$getGuildVar[pickWord;$guildID];]
$onlyIf[$getGuildVar[pickStatus;$guildID]==true;]

`
},{
name: "give-role-event",
type: "awaited",
code: `
$setGuildVar[pickLastUser;$authorID;$guildID]
$wait[5s]
$removeRole[$guildID;$getGuildVar[pickLastUser;$guildID];$getGuildVar[lastWinMemberRole];Não é mais último vencedor do evento de chat]
$wait[5s]
$giveRole[$guildID;$authorID;$getGuildVar[lastWinMemberRole];Se tornou o último vencedor do evento de chat]
`
}]