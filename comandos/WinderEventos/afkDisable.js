module.exports = [{
name: "$alwaysExecute",
code: `
$deleteIn[10s]
<@$authorID> | Olá, que bom que você voltou! ❤️

$writeFile[Recursos/afkSystem/$authorID/status.txt;false;utf8]
$writeFile[Recursos/afkSystem/$authorID/reason.txt;;utf8]

$onlyIf[$readFile[Recursos/afkSystem/$authorID/status.txt]==true;]

$onlyIf[$fileExists[Recursos/afkSystem/$authorID]==true;]
`
}]