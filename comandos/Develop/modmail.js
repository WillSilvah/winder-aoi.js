module.exports = [{
name: "modmail",
desc: "Usado para enviar mensagens diretas",
category: "Moderação",
usage: "modmail @user/userID mensagem",
type: "interaction",
prototype: "slash",
code: `
$channelSendMessage[$getGuildVar[batePapo;$guildID];<@$findUser[$slashOption[user_id]]> | $ifAwaited[$isUserDMEnabled[$findUser[$slashOption[user_id]]]==true;A Equipe Patinhas enviou um modmail para você, vai lá ver na minha DM!;Tentei lhe enviar uma DM mas infelizmente não consegui...]]
$ifAwaited[$isUserDMEnabled[$findUser[$slashOption[user_id]]]==true;
{execute:dm-modmailSend}]

$interactionReply[<@$authorID> | Mensagem enviada!;everyone;false]

$onlyPerms[administrator;]
`
},{
name: "dm-modmailSend",
type: "awaited",
code: `

$author[1;$username[$clientID] Modmail;https://cdn.discordapp.com/emojis/1181219955417567343.png?size=2048]
$description[1;
$slashOption[mensagem]
]
$footer[1;Você pode responder clicando no botão "responder" ou falar diretamente com a equipe clicando em "Criar Ticket"]
$color[1;Orange]


$addbutton[1;Criar um ticket;primary;ticket;$ifAwaited[$slashOption[ticket]==true;true;false];📧]

$addButton[1;Responder;success;reply-modmail;true;📩]

$dm[$findUser[$message[1]]]

`
//$ifAwaited[$slashOption[responder]==true;true;false]
},{
name: "reply-modmail",
type: "interaction",
prototype: "button",
code: `
$interactionModal[Respondendo a Equipe Patinhas;reply-modmail-1;
{actionRow:
{textInput:Sua resposta:2:replyModmail:true:Insira a sua resposta ao modmail da Equipe Patinhas.:1:2000}
}
]

$log[$userTag[$authorID] ($authorID) | Abriu "$commandName - Winder Forms"]
`
},{
name: "reply-modmail-1",
type: "interaction",
prototype: "modal", 
code: `
<@&$getGuildVar[AllStaffRole;$guildID]>
$title[1;@$userTag respondeu o modmail.]
$description[1;
$textInputValue[replyModmail]
]
$footer[1;ID do usuário: $authorID]
$thumbnail[1;$userAvatar]
$color[1;Orange]

$useChannel[1185351021791289374]

$interactionReply[Muito obrigado pela resposta!;everyone;true]

$log[$userTag[$authorID] ($authorID) | Respondeu "$commandName - Winder Forms"]
`
}]