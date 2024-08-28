var textinput = document.querySelector("#input_texto");
var outInput = document.querySelector(".output");

function criptografar() {
    var texto = textinput.value;

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    outInput.innerHTML = '<textarea readonly class="textarea_output">' + resultCripto + '</textarea>' + 
                         '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textinput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    outInput.innerHTML = '<textarea readonly class="textarea_output">' + resultDescripto + '</textarea>' + 
                         '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textCopy = document.querySelector('.textarea_output');

    textCopy.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}
