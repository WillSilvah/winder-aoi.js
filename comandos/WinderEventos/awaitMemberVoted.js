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
{footer:Quer ser lembrado de votar? use w!lembrarvoto}
{color:Green}
};$authorID]


$sendMessage[{newEmbed:
{author:Obrigado @$username por ter votado na Patinhas!:https://cdn.discordapp.com/emojis/1464435933729263657.png?size=2048}
{description:
<@$authorID> votou na Patinhas no [**Discords**](https://discords.com/servers/$guildID/upvote) e agora tem **Bônus de Pontos de Atividade** e ganhou **$get[xp] PDA**!
Vote você tambêm!
}
{footer:@$username já votou $getUserVar[votesMonth;$authorID;$guildID] vezes neste mês, $getUserVar[votesTotal;$authorID;$guildID] vezes ao todo!}
{thumbnail:$userAvatar}
{color:Green}
}
{deleteIn:5m}
]

$setUserVar[votesMonth;$sum[$getUserVar[votesMonth;$authorID];1];$authorID]

$setUserVar[votesTotal;$sum[$getUserVar[votesTotal;$authorID];1];$authorID]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]


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