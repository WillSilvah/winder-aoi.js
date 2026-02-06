module.exports = [{
name: "$alwaysExecute",
code: `
$ifAwaited[$checkContains[$toLowercase[$username | $userTag];
卐;卍;࿕;࿖;࿗;࿘;ꖦ;ᛋ;ϟ;ᛋᛋ;clatebit;🇮🇱;trading;platform;Zeta;ζ;phi;φ;$USD;cavetodex]==true;
{execute:ofensive-banir}
]

$onlyIf[$checkContains[$channelID;1066689771109363732;1066689827250110555]==false;]
`
},{
name: "ofensive-banir",
type: "awaited",
code: `
$writeFile[Recursos/autoBanimentos/$get[userID].json;
{
    "username": "$username[$get[userID]]",
    "motivo": "$get[reason]",
    "userID": "$get[userID]",
    "guildID: "$guildID"
};utf8]

$sendMessage[<@$clientID> **$username[$get[userID]]** foi **$get[puniType]**!]

$ifAwaited[1==1;{execute:punishment-log}]

$ban[$guildID;$authorID;0;Banido por: $username[$get[staffID]] | Motivo: $get[reason]]
$ifAwaited[$isUserDMEnabled[$get[userID]]==true;{execute:puni-dm}]

$sendMessage[w!ban <@$authorID> $get[reason]]
$clientTyping

$let[staffID;$clientID]
$let[userID;$authorID]
$let[reason;Foi detectado conteúdo impróprio em seu perfil, por segurança, resolvi banir você em prioridade de nosso bem-estar.]
$let[puniType;banido]

`
},{
name: "toxic-deletar",
type: "awaited",
code: `
$deleteCommand


`
}]
