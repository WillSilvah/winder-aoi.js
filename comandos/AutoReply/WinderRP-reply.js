module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[*$toLowerCase[$message]*;abraço;abraça;hug]==true;
{execute:rp-reply-hug}
]
$ifAwaited[$checkContains[$toLowerCase[$message];miau;meow;meeooww;meeow;meoow;meoww;miiau;miaau;miauu;meeeooowww]==true;
{execute:rp-reply-meow}
]
$ifAwaited[$checkContains[*$toLowerCase[$message]*;ronrona]==true;
{execute:rp-reply-ronrona}
]
$ifAwaited[$checkContains[*$message$toLowerCase[$message]*;cafuné;pat;pet;carinho]==true;
{execute:rp-reply-pat}
]
$ifAwaited[$checkContains[*$toLowerCase[$message]*;morde;mordida;bite]==true;
{execute:rp-reply-morde}
]
$ifAwaited[$checkContains[*$toLowerCase[$message]*;boop]==true;
{execute:rp-reply-boop}
]

$ifAwaited[$checkContains[$toLowercase[$message;hytale]|$checkContains[$toLowercase[$message;ou]|$checkContains[$toLowercase[$message;minecraft]==true|true|true;
{execute:rp-reply-hytaleouminecraft}


$onlyIf[$mentioned[1]==$clientID;]
$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
	name: "rp-reply-hytaleouminecraft",
	type: "awaited",
	code: `
$sendMessage[$randomText[É claro que é Minecraft;Hytale? ;w; *arrepia os pelos* é lógico que é Minecraft! $customEmoji[pats_foxThumbsUp]]]

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]	
	
	
`
},{
name: "rp-reply-boop",
type: "awaited",
code: `
$sendMessage[*boop*! >w<]

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-hug",
type: "awaited",
code: `
$randomText[*Abraço você* >w<;*Abraço de volta* >w<;*Abraça e ronrona* UwU]

$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-meow",
type: "awaited",
code: `
$sendMessage$randomText[Miau;Meow;Meeooww;Meeow;Meoow;Meoww;Miiau;Miaau;Miauu]! OwO]

$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-ronrona",
type: "awaited",
code: `
$sendMessage[Que fofinho! :3]

$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-pat",
type: "awaited",
code: `
$sendMessage[$randomText[*Ronrona* -w-;*Pula em seu colo* uwu]]

$reply
$wait[2s]
$clientTyping
$cooldown[1m;]
`
},{
name: "rp-reply-morde",
type: "awaited",
code: `
$sendMessage[$randomText[*Fica com raiva* >:(;*Morde de volta* :3;*Corre* :(]]

$wait[2s]
$clientTyping
$cooldown[1m;]
`
}]
