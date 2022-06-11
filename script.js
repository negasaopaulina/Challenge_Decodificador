const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const inputOriginalOculto = document.querySelector('.input-original-oculto');

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage= "none";

    inputOriginalOculto.value = inputTexto.value;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputOriginalOculto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage= "none";
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(let i=0; i > matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

     return stringDesencriptada;
}

var botaoCopiar = document.querySelector(".btncopiar");
function btnCopiar()
{
	var mensagem_criptografada = document.querySelector('.mensagem');
	var campo_mensagem_original = document.querySelector('.input-texto');

	campo_mensagem_original.value = mensagem_criptografada.value;


}

var botaoLimpar = document.querySelector(".btnlimpar");
function btnLimpar()
{
    var mensagem_criptografada = document.querySelector('.mensagem');
    var campo_mensagem_original = document.querySelector('.input-texto');

    campo_mensagem_original.value = "";
    mensagem_criptografada.value = "";
}   