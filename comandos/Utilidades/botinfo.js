module.exports = [{
name: "botinfo",
desc: "Veja informações avançadas (ou simples) do bot",
category: "Utilidades",
usage: "botinfo",
code: `

$author[1;$username[$clientID] > Informação;$userAvatar[$clientID]]
$description[1;
$exec[uname -a]

$addField[1;🖥️ Versão do Node.JS;**$nodeVersion**]

$addField[1;🕊️ Versão do AOi.js;**$packageVersion**]

$addField[1;🛜 $username[$clientID] ping;**$pingms**]

$addField[1;⭐ Versão do $username[$clientID];**$getVersion**]

]
$footer[1;Tempo ligado: $uptime[humanize]]
$color[1;Blue]
`
}]