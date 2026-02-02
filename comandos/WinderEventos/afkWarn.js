module.exports = [{
name: "$alwaysExecute",
code: `
$deleteIn[60s]
**$userTag[$mentioned[1]]** está afk!
$author[1;$readFile[Recursos/afkSystem/$mentioned[1]/reason.txt]]
$color[1;Red]
$reply

$onlyIf[$readFile[Recursos/afkSystem/$mentioned[1]/status.txt]==true;]
$onlyIf[$mentioned[1]!=$authorID;]

$onlyIf[$fileExists[Recursos/afkSystem/$mentioned[1]]==true;]
`
}]