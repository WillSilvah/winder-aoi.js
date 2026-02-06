//$random[1;6]
module.exports = [{
name: "adsEvent",
type: "loop",
channel: "$getGuildVar[batePapo]",
executeOnStartup: false,
every: 2040000,
code: `
$ifAwaited[$getGuildVar[msgs;1462224054676099094]>=2;
{execute:ad-$random[1;4]}]

`
},{
name: "ad-1",
type: "awaited",
code: `
$title[1;$customEmoji[pats_logo] Avalie a Patinhas no Disboard!]
$description[1;
Mostre pra todo mundo que a Patinhas é um servidor incrível, avalie com 5 estrelas e faça um textinho bem bonitinho para nós!
]
$color[1;Red]

$addButton[1;Avalie a Patinhas!;link;https://disboard.org/pt-br/review/create/$guildID;false;⭐]

`
},{
name: "ad-2",
type: "awaited",
code: `
$title[1;🤔 Você sabia?]
$description[1;
O último ganhador dos minigames foi o <@$getGuildVar[pickLastUser;$guildID]>!
]
$color[1;Green]
$thumbnail[1;$userAvatar[$getGuildVar[pickLastUser;$guildID]]]


`
},{
name: "ad-3",
type: "awaited",
code: `
$title[1;$customEmoji[pinw_orange] Entre na Equipe Pinwheel!;https://dyno.gg/form/e16d0503]
$description[1;
Quer ajudar a Pinwheel a ser um servidor incrível com seus trabalhos? Responda este simples formulário com **sinceridade** e muita **atenção**!
Boa sorte!
]
$thumbnail[1;https://cdn.discordapp.com/attachments/785632865709981756/1184585380113162370/IMG_20231213_165903.png?ex=658c821b&is=657a0d1b&hm=a4b889c321521cf605b9bee6d666b726ca6c471208ec052aa345f86f995d0564&]
$footer[1;Não estou querendo me gabar, mas a Equipe Pinwheel é a melhor.]
$color[1;$dyColor[orange;light]]
$addButton[1;Ir para $channelName[1161096564245282816];link;https://discord.com/channels/$guildID/1161096564245282816;false;🛡️]
`
},{
name: "ad-4",
type: "awaited",
code: `
$attachment[$getObjectProperty[session;banner];winder-temp-banner.png]
$title[1;✨️ TOP 5 MEMBROS - PDA]
$description[1;
$userLeaderboard[$guildID;msgXP;desc;{top}° **{tag}** -> {value};5;1]
]
$color[1;Green]
$footer[1;$getObjectProperty[session;name]]

$createObject[session;$readFile[Recursos/session.json]]
`
},{
name: "ad-special",
type: "awaited",
code: `

`
}]