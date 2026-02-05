module.exports = [{
name: "readyEvent",
type: "clientReady",
channel: "$getVar[consoleChat]",
code: `

$author[1;$username[$clientID] está ligado!]
$description[
$addField[1;Versão do AOi.JS;$packageVersion;true]
$addField[1;Versão do NodeJS;$nodeVersion;true]
$addField[1;Versão do $username[$clientID];$getVersion;true]
]
$thumbnail[1;$userAvatar[$clientID]]
$color[1;Blue]

$log[---------------
$username[$clientID] está ligado! >w<
---------------
]

$updateVersion
$setStatus[$username[$clientID] está ligado! >w<;custom;idle]
$setUserNickname[$clientID;;]
`
}]