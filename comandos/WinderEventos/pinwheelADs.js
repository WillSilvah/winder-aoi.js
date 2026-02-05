//$random[1;6]
module.exports = [{
name: "adsEvent",
type: "loop",
channel: "861337787192836117",
executeOnStartup: false,
every: 2040000,
code: `
$ifAwaited[$getGuildVar[msgs;861313067291115541]>=2;
{execute:ad-$random[1;6]}]

`
},{
name: "ad-1",
type: "awaited",
code: `
$title[1;$customEmoji[pinw_cyan] Avalie a Pinwheel no Disboard!;https://cdn.discordapp.com/emojis/861991190961192960.png?size=2048]
$description[1;
Mostre pra todo mundo que a Pinwheel é um servidor incrível, avalie com 5 estrelas e faça um textinho bem bonitinho e sincero para ajudar quem conhecer a Pinwheel!
]
$color[1;$dyColor[cyan;light]]

$addButton[1;Avalie a Pinwheel!;link;https://disboard.org/pt-pt/review/create/861313067291115541;false;⭐]

`
},{
name: "ad-2",
type: "awaited",
code: `
$author[1;Você sabia?;https://abs.twimg.com/emoji/v2/72x72/1f914.png]
$description[1;
O último ganhador do evento de chat foi o <@$getGuildVar[pickLastUser;861313067291115541]>!
]
$color[1;$dyColor[blue;light]]
$thumbnail[1;$userAvatar[$getGuildVar[pickLastUser;861313067291115541]]]


`
},{
name: "ad-3",
type: "awaited",
code: `
$title[1;$customEmoji[pinw_pink] Faça parceria com a Pinwheel!;https://discord.com/channels/861313067291115541/1165317978078851232]
$description[1;
Procurando servidor pra fazer parceria? A Pinwheel está disponível nesse momento!
Acesse o canal <#1165317978078851232>, leia os requisitos e peça parceria!

]
$image[1;https://cdn.discordapp.com/attachments/785632865709981756/1180926160058728569/IMG_20231203_072241.png?ex=657f3231&is=656cbd31&hm=566b4e7529b08ac773247fa6dc64e6dcf806ec15cfb45480aedcba496a0dc22c&]
$color[1;$dyColor[pink;light]]
$footer[1;Responda o formulário com sinceridade e detalhes!]
$thumbnail[1;$readFile[Recursos/pinw-logo-pink.txt]]
$addButton[1;Ler os requisitos;link;https://discord.com/channels/861313067291115541/1165317978078851232;false;🤝]

`
},{
name: "ad-4",
type: "awaited",
code: `
$author[1;Conheça a playlist do Winder!;$readFile[Recursos/musiclogo.txt]]
$description[1;
O Winder ouve lo-fi todos os dias e resolveu criar uma playlist e compartilhar para todo mundo!
A playlist contém os melhores sons que mexem com você, ouça agora!

### WINDER MUSIC:
**$getGuildVar[prefixo]play Winder**
### YOUTUBE:
[**Abrir no YouTube**](https://youtube.com/playlist?list=PLTHSb3inv7qN34m76-9_Ex9_yi4-Z1Yzk&si=xo9x2VGrplAsP29I)
]
$footer[1;Winder Music: Ventando músicas com você]
$color[1;$dyColor[blue;light]]

`
},{
name: "ad-5",
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
$addButton[1;Ir para $channelName[1161096564245282816];link;https://discord.com/channels/861313067291115541/1161096564245282816;false;🛡️]
`
},{
name: "ad-6",
type: "awaited",
code: `
$title[1;<:pinw_green:1181219188153528430> TOP 5 MEMBROS - PDA]
$description[1;
$userLeaderboard[861313067291115541;msgXP;desc;{top}° **{tag}** -> {value};5;1]
]
$color[1;$dyColor[green;light]]
$footer[1;$getObjectProperty[session;name]]
$thumbnail[1;https://i.ibb.co/2M3kYvQ/pda-logo.png]

$createObject[session;$readFile[Recursos/session.json]]
`
},{
name: "ad-special",
type: "awaited",
code: `
$author[1;Pinwheel Eventos;https://cdn.discordapp.com/emojis/1181219202070237275.png?size=2048]
$title[1;PINWHEEL NIGHT MUSIC NESTE SÁBADO;https://discord.com/invite/gjYgbVEN?event=1183549901448167445]
$description[1;
Promete para mim que não perder este evento? Sério, você vai amar ouvir músicas com a gente até sei lá quando!
Compartilhe seu gosto musical com a gente!

]
$image[1;https://cdn.discordapp.com/attachments/861337787192836117/1183567899672199219/IMG_20231210_210334.png?ex=6588ce80&is=65765980&hm=79bf6c72a521195bbde6e693d8a454da0d3d80a09a99fc760ca3eeda82ed83c7&]
$color[1;$dyColor[cyan;light]]
`
}]