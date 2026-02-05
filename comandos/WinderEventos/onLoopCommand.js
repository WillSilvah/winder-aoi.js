//$day = Retorna o nome da semana
//$hour:$minute:$second-$date/$formatDate[$dateStamp;MM]/$year
module.exports = [{
name: "loopCommand",
type: "loop",
channel: "$getVar[consoleChat]",
executeOnStartup: "true",
every: 999,
code: `
$ifAwaited[$hour:$minute:$second==00:00:00;{execute:novodia}]

$ifAwaited[$date-$hour:$minute:$second==01-00:00:00;{execute:auto-reset}]

$ifAwaited[$hour:$minute:$second==19:00:00;{execute:chat-boanoite}]
$ifAwaited[$hour:$minute:$second==13:10:00;{execute:chat-boatardefim}]
$ifAwaited[$hour:$minute:$second==12:10:00;{execute:chat-boatarde}]
$ifAwaited[$hour:$minute:$second==07:00:00;{execute:chat-bomdia}]

$timezone[America/Recife]
`
},{
name: "auto-reset",
type: "awaited",
code: `
$resetUserVar[metaXP]

$resetUserVar[messageMonth]

$resetUserVar[votesMonth]

$resetUserVar[msgXP]

$resetGuildVar[guildMonthMessages]

$writeFile[Recursos/session.json;
{
    "name": "Pré Temporada: O começo",
    "nameShort": "PRÉ: O começo",
    "banner": "https://i.ibb.co/7NXHgpxQ/banner-pr-temporada.png"
};utf8]

`
},{
name: "novodia",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;{newEmbed:
{author:Um novo dia começou...}
{description:
Que este seja um dia incrível para você.
}
{color:Blue}
}]
        
$timezone[America/Recife]
`
},{
name: "chat-bomdia",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🌞 BOM DIA PELUDOS!
**Vamos levantar e tomar uma xícara de café?**
]
`
},{
name: "chat-boatarde",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🍱 JÁ PODE ALMOÇAR!
**Liberei o almoço, vão almoçar enquanto dá tempo!**
]
`
},{
name: "chat-boatardefim",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🍱 FIM DO ALMOÇO
**Permissão para almoçar foi cancelada.**
]
`
},{
name: "chat-boanoite",
type: "awaited",
code: `
$channelSendMessage[1462224055884189781;
# 🌃 BOA NOITE
**Vamos finalizar a noite conversando com os amigos?**
]
`
}]