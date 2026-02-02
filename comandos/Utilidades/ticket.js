module.exports = [{
name: "ticket criar",
aliases: ["criarticket", "ticket"],
desc: "Crie um ticket para poder falar em privado com a staff",
category: "Suporte",
usage: "ticket criar",
code: `
$ifAwaited[$isTicket[$channelID]==false;{execute:ticket-false};{execute:ticket-true}]
`
},{
name: "ticket-false",
type: "awaited",
code: `
Precisando de ajuda? Fazer uma denuncia? Crie um ticket!

$reply
$addButton[1;Criar um ticket;success;ticket;false;📧]
`
},{
name: "ticket-true",
type: "awaited",
code: `
<@$authorID>
$title[1;📧 Gerenciador de tickets]
$description[1;
Comandos que você pode usar para gerenciar este ticket:

- **$getGuildVar[prefixo]ticket adicionar @user/ID/user**
Adicione um usuário ao seu ticket.
- **$getGuildVar[prefixo]ticket remover @user/ID/user**
Remove um usuário ao seu ticket.
- **$getGuildVar[prefixo]ticket fechar**
Fecha este ticket.
]
$footer[1;Algum problema? Chame um suporte.]
$color[1;Orange]

$addButton[1;Fechar ticket;danger;fecharticket;false;🗑️]
`
},{
name: "ticket",
type: "interaction",
prototype: "button",
code: `
$modifyChannelPerms[$get[id];$authorID;+viewchannel;+sendmessages;+embedlinks;+attachfiles]
$modifyChannelPerms[$get[id];$guildID;-viewchannel]


$interactionReply[<@$authorID> | Ticket feito! Para fechar ele depois use o comando w!fecharticket
> <#$get[id]>
;everyone;true]

$writeFile[Recursos/ticket-logs/⭐│ticket-$userTag.txt;[$hour:$minute:$second] $userTag[$clientID]: $userTag[$authorID] criou um ticket!
ID do canal: $get[id]
Data: $hour:$minute:$second - $date/$formatDate[$dateStamp;MM]/$year
;utf8]

$let[id;$newTicket[⭐│ticket-$userTag;<@$authorID> <@&$getGuildVar[allStaffRole;$guildID]> {newEmbed:
{title:$customEmoji[pats_logo] $userTag criou um ticket!}
{url:https://www.bing.com/images/search?q=ginger+cat&qs=ds&form=QBIR&first=1}
{description:
Aqui é o seu novo ticket <@$authorID>! $customEmoji[pats_lobo_alegre]
Aproveite para conversar sobre um pedido de ajuda, uma denuncia, uma sugestão, uma proposta ou fazer uma reunião com a Equipe!
Logo abaixo, irei mostrar comandos úteis para você!

- **$getGuildVar[prefixo]ticket adicionar @user/ID/user**
Adicione um usuário ao seu ticket.
- **$getGuildVar[prefixo]ticket remover @user/ID/user**
Remove um usuário ao seu ticket.
- **$getGuildVar[prefixo]ticket fechar**
Fecha este ticket.
}
{footer:Estaremos sempre aqui para ajudar você!}
{thumbnail:$userAvatar}
{color:Orange}
};1467920537169826048;true;]]

$timezone[America/Recife]

$onlyIf[$guildChannelExists[$guildID;⭐│ticket-$userTag]==false;]
`
},{
name: "ticket adicionar",
aliases: ["ticket add"],
desc: "Útil para quando quiser adicionar mais alguém ao seu ticket para conversar junto.",
category: "Suporte",
usage: "ticket adicionar @user/ID/user",
code: `
$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;[$hour:$minute:$second] $userTag[$clientID]: $userTag[$get[id]] foi adicionado!
;utf8]
$timezone[America/Recife]

$sendMessage[<@$authorID> Adicionei **$userTag[$get[id]]** ao ticket!]
$modifyChannelPerms[$channelID;$get[id];+viewchannel;+sendmessages;+embedlinks;+attachfiles]

$clientTyping
$let[id;$findUser[$message[1]]]
$onlyIf[$isTicket==true;<@$authorID> Você só pode usar este comando em tickets!]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
name: "ticket remover",
aliases: ["ticket remove"],
desc: "Não precisa mais do seu amigo para conversar? Simples, use este comando!",
category: "Suporte",
usage: "ticket remover @user/ID/user",
code: `
$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;[$hour:$minute:$second] $userTag[$clientID]: $userTag[$get[id]] foi removido!
;utf8]
$timezone[America/Recife]

$sendMessage[<@$authorID> Removi **$userTag[$get[id]]** do ticket!]

$modifyChannelPerms[$channelID;$get[id];-viewchannel;-sendmessages]
$clientTyping

$let[id;$findUser[$message[1]]]
$onlyIf[$isTicket==true;<@$authorID> Você só pode usar este comando em tickets!]

$onlyIf[$argsCount>0;]
$ifAwaited[$argsCount==0;{execute:cmdinfo-await}]
$let[cmdName;$commandName]
`
},{
name: "ticket fechar",
aliases: ["closeticket", "fecharticket"],
desc: "Feche um ticket que você abriu",
category: "Suporte",
usage: "fecharticket",
code:`
Tem certeza que deseja fechar este canal?

$reply
$addbutton[1;Sim;success;fecharticket;no;✅]

$onlyIf[$isTicket==true;<@$authorID> | Este comando só pode ser utilizado em tickets]
`
},{
name: "fecharticket",
type: "interaction",
prototype: "button",
code: `
$deleteFile[Recursos/ticket-logs/$channelName[$channelID].txt]

$closeTicket[<@$authorID> | O canal <#$channelID> não é um ticket, crie um ticket utilizando $getGuildVar[prefixo]criarticket]

$wait[5s]
$author[1;$channelName[$channelID]]
$color[1;Random]

$createFile[$readFile[Recursos/ticket-logs/$channelName[$channelID].txt];$channelName[$channelID].txt]
$wait[1s]
$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;
[$hour:$minute:$second] $userTag ($authorID) fechou o ticket.
;utf8]

$timeZone[America/Recife]
$useChannel[1467920266041757922]

$interactionReply[<@$authorID> | deletando...;everyone;false]

$modifyChannelPerms[$channelID;$guildID;-sendmessages]
`
},{
name: "$alwaysExecute",
code: `
$ifAwaited[$isTicket[$channelID]==true;{execute:log-ticket-on}]
`
},{
name: "log-ticket-on",
type: "awaited",
code: `
$appendFile[Recursos/ticket-logs/$channelName[$channelID].txt;
[$hour:$minute:$second] $userTag ($authorID): $message

MSGID: $messageID;utf8]
$timezone[America/Recife]

$onlyIf[$fileExists[Recursos/ticket-logs/$channelName[$channelID].txt]==true;]
`
}]