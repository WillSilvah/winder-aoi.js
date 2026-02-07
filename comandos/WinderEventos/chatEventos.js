//$random[1;4]
module.exports = [{
name: "loopEvent",
type: "loop",
channel: "$getGuildVar[batePapo]",
executeOnStartup: false,
every:  900000,
code: `
$setUserVar[pickCount;$sum[$getUserVar[pickCount;$clientID;$guildID];1];$clientID;$guildID]

$setGuildVar[pickXPmin;0;$guildID]
$setGuildVar[pickXPmax;0;$guildID]
$slowmode[0s;$getGuildVar[batePapo]]
$sendMessage[### ⛔️ EVENTO DE CHAT FOI CANCELADO!]

$setGuildVar[pickStatus;false;$guildID]
$setGuildVar[pickLastUser;$clientID;$guildID]
$setGuildVar[pickWord;canotipo;$guildID]

$clientTyping
$onlyIf[$getGuildVar[pickStatus;$guildID]==true;]

$wait[1m]
$setGuildVar[pickXPmin;5;$guildID]
$setGuildVar[pickXPmax;15;$guildID]

$ifAwaited[$getGuildVar[msgPerMinute;$guildID]>=6;
{execute:drop-$random[2;4]}]

$onlyIf[$getGuildVar[pickEmit;$guildID]==false;]

`
},{
//$random[1000000;9999999]
name: "drop-1",
type: "awaited",
code: `
$setGuildVar[pickType;1;$guildID]
$setGuildVar[pickStatus;true;$guildID]
$author[1;Evento de chat: Código;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[1;
### $get[number]
]
$footer[1;Responda primeiro, rápido!]
$color[1;Green]

$setGuildVar[pickWord;$get[number];$guildID]
$let[number;$random[1000000;9999999]]
$useChannel[$getGuildVar[batePapo]]
`
},{
name: "drop-2",
type: "awaited",
code: `
$setGuildVar[pickType;1;$guildID]
$setGuildVar[pickStatus;true;$guildID]
$author[1;MATEMÁTICO;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[1;
### $get[math]=?
]
$footer[1;Responda primeiro, rápido!]
$color[1;Green]

$setGuildVar[pickWord;$truncate[$math[$get[math]]];$guildID]
$useChannel[$getGuildVar[batePapo]]

$let[math;$random[0;100;false;true]$randomText[+;-]$random[0;100;false;true]]
`
},{
name: "drop-3",
type: "awaited",
code: `
$setGuildVar[pickType;1;$guildID]
$setGuildVar[pickStatus;true;$guildID]

$author[1;ADIVINHADOR;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[1;
### QUAL NÚMERO ESTOU PENSANDO?
De **1 a 20**

]
$footer[1;Responda primeiro, rápido!]
$color[1;Green]

$setGuildVar[pickWord;$random[1;20];$guildID]
$useChannel[$getGuildVar[batePapo]]
$slowmode[2s;$getGuildVar[batePapo]]
`
},{
name: "drop-4",
type: "awaited",
code: `
$setGuildVar[pickType;1;$guildID]
$setGuildVar[pickStatus;true;$guildID]
$author[1;QUEM ESCREVER PRIMEIRO GANHA!;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[1;
### $replaceText[$getObjectProperty[frase;texto]; ; ]

]
$footer[1;$getObjectProperty[frase;autor]]
$color[1;Green]

$setGuildVar[pickWord;$getObjectProperty[frase;texto];$guildID]

$createObject[frase;$readFile[Recursos/WinderMinigames/FraseRepeat/Frases/$get[frase_id].txt]]

$let[frase_id;$random[1;$readFile[Recursos/WinderMinigames/FraseRepeat/quantity.txt]]]

$useChannel[$getGuildVar[batePapo]]

`
},{
name: "drop-5",
type: "awaited",
code: `
$setGuildVar[pickType;1;$guildID]
$setGuildVar[pickStatus;true;$guildID]

$author[1;Evento de chat: Perguntas;https://abs.twimg.com/emoji/v2/72x72/1f389.png]
$description[1;
### $toUpperCase[$getObjectProperty[ask;pergunta] ($getObjectProperty[ask;difficulty])]
$ifAwaited[$getObjectProperty[alt;a]!=undefined;A: $getObjectProperty[alt;a]]
$ifAwaited[$getObjectProperty[alt;b]!=undefined;B: $getObjectProperty[alt;b]]
$ifAwaited[$getObjectProperty[alt;c]!=undefined;C: $getObjectProperty[alt;c]]
$ifAwaited[$getObjectProperty[alt;d]!=undefined;D: $getObjectProperty[alt;d]]
$ifAwaited[$getObjectProperty[alt;e]!=undefined;E: $getObjectProperty[alt;e]]
]
$footer[1;Responda apenas com a letra da resposta! | ID: $get[id]]
$image[1;$if[$getObjectProperty[ask;image]==;https://cdn.discordapp.com/attachments/785632865709981756/1465469785813942272/IMG_20260126_191316.png?ex=69793898&is=6977e718&hm=559e450ba67a6a132a64f475bb1781cce2aa4ebe4f046a39c5fc3dd303382591&;$getObjectProperty[ask;image]]]
$color[1;Green]

$setGuildVar[pickWord;$getObjectProperty[ask;correct];$guildID]
$useChannel[$getGuildVar[batePapo]]

$createObject[alt;$getObjectProperty[ask;alts]]
$createObject[ask;$readFile[Recursos/WinderMinigames/windord/asks/$get[id].txt]]

$let[id;$readFile[Recursos/WinderMinigames/windord/quantity.txt]]
`
}]