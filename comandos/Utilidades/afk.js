module.exports = [{
name: "afk",
desc: "Vai ficar fora do Discord? Use esse comando e permita-me avisar a outras pessoas que você não pode responder no momento!",
category: "Utilidades",
usage: "afk motivo?",
code: `
$WriteFile[Recursos/afkSystem/$authorID/status.txt;true;utf8]

$WriteFile[Recursos/afkSystem/$authorID/reason.txt;$if[$message!=;$message;Acredita que eu também queria saber?];utf8]

$sendMessage[<@$authorID> AFK ativado!]

`
}]
