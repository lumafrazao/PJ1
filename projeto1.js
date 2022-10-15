var inputEnviar = document.querySelector("#insiraaquioseutexto");
var inputReceber = document.querySelector("#recebaaquioseutexto");

var botaoEncriptar = document.querySelector("#Encriptar");
var botaoLimpar= document.querySelector("#Limpar");
var botaoDesencriptar = document.querySelector("#Desencriptar");
var botaoCopiar= document.querySelector("#Copiar");

function Encriptar() {
	var mensagem = inputEnviar.value;
	var mensagemEncriptada = mensagem
	.replaceAll("e","enter")
	.replaceAll("i","imes")
	.replaceAll("o","ober")
	.replaceAll("a","ai")
	.replaceAll("u","ufat");

	inputReceber.value = mensagemEncriptada;
}

function Desencriptar(){
	var mensagemEncriptada = inputEnviar.value;
	var mensagem = mensagemEncriptada
	.replaceAll("enter","e")
	.replaceAll("imes","i")
	.replaceAll("ober","o")
	.replaceAll("ai","a")
	.replaceAll("ufat","u");

	inputReceber.value = mensagem;
}

function Copiar () {
	var mensagemEncriptada = inputReceber.value;
	navigator.clipboard.writeText(mensagemEncriptada);
}

botaoEncriptar.onclick = Encriptar;

botaoDesencriptar.onclick = Desencriptar;

botaoCopiar.onclick = Copiar;

botaoLimpar.onclick = Limpar;