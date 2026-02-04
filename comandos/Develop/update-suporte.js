module.exports = [{
name: "update-suporte",
code: `
$title[1;$customEmoji[pats_logo] Suporte]
$description[1;
Alguma coisa aconteceu? Precisa de ajuda? Fazer uma denuncia? Crie um ticket e seja imediatamente ajudado quando possível!
]
$color[1;Orange]
$addButton[1;Criar um ticket;success;ticket;false;📨️]

$deleteCommand
$onlyIf[$authorID==494795833351602176;]
`
}]