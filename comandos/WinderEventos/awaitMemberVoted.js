module.exports = [{
name: "votedDiscords",
type: "memberUpdate",
channel: "$getGuildVar[batePapo]",
code: `
$ifAwaited[$getUserVar[votesMonth;$authorID]==100;
{execute:100votes}
]
$ifAwaited[$getUserVar[votesMonth;$authorID]==60;
{execute:60votes}
]
$ifAwaited[$getUserVar[votesMonth;$authorID]==30;
{execute:30votes}
]

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
]

$setUserVar[votesMonth;$sum[$getUserVar[votesMonth;$authorID];1];$authorID]

$setUserVar[votesTotal;$sum[$getUserVar[votesTotal;$authorID];1];$authorID]

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]


$let[xp;$random[1;5]]

$onlyIf[$newMember[addedRoles]==$roleName[$getVar[memberVotedRole]];]
`
},{
name: "countSystem",
type: "awaited",
code: `
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
{footer:Não quer ser lembrado de votar? use w!lembrarvoto}
{color:Green}

};$authorID]

$onlyIf[$getUserVar[reminderStatus;$authorID]==true;]

$onlyIf[$newMember[removedRoles]==$roleName[$getVar[memberVotedRole]];]
`
},{
name: "firstVote",
type: "awaited",
code: `
<@$authorID>
## PRIMEIRO VOTO
**Vote na Patinhas pela primeira vez!**
Muito obrigado por ajudar a Patinhas a crescer votando nela! Agradeço bastante por isso, continue votando nela para ganhar prêmios e conquistas! 

$wait[2s]
$clientTyping
`
},{
name: "30votes",
type: "awaited",
code: `
<@$authorID>
## 30 VOTOS!
**Vote na Patinhas 30 vezes neste mês!**
Fico muito feliz em saber que você está empenhado no objetivo de ajudar a patinhas em ser mais conhecida nesse mundo! 
> **Ganhou +$get[xp] pontos!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;150]
$wait[2s]
$clientTyping
`
},{
name: "60votes",
type: "awaited",
code: `
<@$authorID>
## VOTOU SESSENTA VEZES!
**Vote na Patinhas 60 vezes neste mês!**
Ai que alegria **$username**, você votou 60 vezes na Patinhas, isso é tão incrível<3
Obrigado demais pela sua ajuda, vamos criar uma comunidade melhor juntos?
> **Ganhou +$get[xp] pontos!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;250]
$wait[2s]
$clientTyping
`
},{
name: "100votes",
type: "awaited",
code: `
<@$authorID>
## VOTOU CEM VEZES!
**Vote na Patinhas 100 vezes neste mês!**
Que empenho $username[$authorID]! você conseguiu (quase) bater o máximo de votos que pode se conseguir no mês no Discords.com, toda a <@$getVar[allStaffRole]> lhe agradece com isso. 
> **Ganhou +$get[xp] pontos!**

$setUserVar[msgXP;$sum[$getUserVar[msgXP;$authorID];$get[xp]];$authorID]
$setUserVar[msgXPtotal;$sum[$getUserVar[msgXPtotal;$authorID];$get[xp]];$authorID]

$let[xp;350]
$wait[2s]
$clientTyping
`
}]