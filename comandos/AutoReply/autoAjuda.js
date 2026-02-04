module.exports = [{
	name: "autoAjuda",
	code: `
$ifAwaited[$checkContains[$toLowercase[$message];enviar;envia;como;posso]|$checkContains[$toLowercase[$message];imagens;mídia;anexos;imagem;vídeo;gifs;mídias;gif;vídeos]==true|true;
{execute:autoAjuda-1}]
},{
	name: "autoAjuda-1",
	type: "awaited",
	code: `
Por motivos de segurança, você só pode enviar anexos nos canais de texto (e também visualizar os canais de mídia) ao ter o cargo **Furro Verificado** após enviar **150 mensagens no total**.
$reply
	`
}]