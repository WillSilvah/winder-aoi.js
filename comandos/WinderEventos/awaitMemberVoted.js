module.exports = [{
name: "votedDiscords",
type: "memberUpdate",
channel: "$getGuildVar[batePapo]",
code: `

$sendDm[{newEmbed:
{title:Muito obrigado por ter votado!}
{description:
Seu voto no top.gg ajuda bastante! Obrigado por isso, todos nós agradecemos isto! 
Você ganhou **$get[xp]** pontos de atividades e neste mês você já votou **$getUserVar[votesMonth;$authorID;$guildID]** vezes!
}
{footer:Quer ser lembrado de votar? use $getGuildVar[prefixo]lembrarvoto}
{color:Green}
};$authorID]


$sendMessage[{newEmbed:
{author:@$username votou!:$userAvatar}
{description:
O **Bônus de Pontos de Atividade** foi ativado e ganhou **$get[xp] PDA**!
}
{footer:$getUserVar[votesMonth;$authorID;$guildID] Votos neste mês | $getUserVar[votesTotal;$authorID;$guildID] no total.}
{color:Green}
}
{actionRow:
{button:Vote na Patinhas! (Discords.com):link:https://discords.com/servers/$guildID/upvote:false:}
}
]

$setUserVar[votesMonth;$math[$getUserVar[votesMonth;$authorID;$guildID]+1];$authorID;$guildID]

$setUserVar[votesTotal;$math[$getUserVar[votesTotal;$authorID;$guildID]+1];$authorID;$guildID]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID;$guildID];$get[xp]];$authorID;$guildID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID;$guildID];$get[xp]];$authorID;$guildID]


$let[xp;$random[1;5]]

$onlyIf[$newMember[addedRoles]==$roleName[$getVar[memberVotedRole]];]
`
},{
name: "remindVote",
type: "memberUpdate",
code: `
$sendDm[{newEmbed:
{author:$username[$clientID] lembretes:https://abs.twimg.com/emoji/v2/72x72/1f514.png}
{title:Ei! Tá na hora de votar!}
{description:
Lembra quando você votou 6 horas atrás na Patinhas? Foi incrivel eu estava lá comemorando junto com você <:pats_foxThumbsUp:1463245277304459345>

Vamos ter esta sensação novamente? <:pats_foxThinking:1463245311563661477> Eu te dou pontos de experiência, um multiplicador e você recebe fama e glória por ser um membro incrvel! 
Vamos lá
https://discords.com/servers/$guildID/upvote
}
{footer:Não quer ser lembrado de votar? use $getGuildVar[prefixo]lembrarvoto}
{color:Green}

};$authorID]

$onlyIf[$getUserVar[reminderStatus;$authorID]==true;]

$onlyIf[$newMember[removedRoles]==$roleName[$getVar[memberVotedRole]];]
`
}]