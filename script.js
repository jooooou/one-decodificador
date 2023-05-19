// Informação de entrada

var entrada = document.getElementById("entrada")
entrada.focus()

// Informação de saída 

var saida = document.getElementById("saida");

// Validação da entrada

entrada.addEventListener("keypress", function(e){

    if(!checkChar(e)){
        e.preventDefault();
    };

})

function checkChar(e){
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-z ]'

    if(char.match(pattern)){
        return true
    }
}

// Aparece e Esconde o Card

var aparecido = document.getElementById("aparecido")
var escondido = document.getElementById("escondido")

function aparece(){
    aparecido.style.display = "none"
    escondido.style.display = "block"
}

function esconde(){
    aparecido.style.display = "block"
    escondido.style.display = "none"
}

// Chave de Criptografia (Pega a entrada, verifica se possui alguma das chaves, troca pela criptografada)

function chaveCripto(stringCriptografada){
    
        let matrizChaves = [
            ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]
        ]
        stringCriptografada = stringCriptografada.toLowerCase();
        for(let i = 0; i < matrizChaves.length;i++){
            if(stringCriptografada.includes(matrizChaves[i][0])){
                stringCriptografada = stringCriptografada.replaceAll(matrizChaves[i][0],matrizChaves[i][1])
            }
        }

        return stringCriptografada;
}

// Botão de Criptografia (Passa a mensagem criptografada ao resultado)

var cripto = document.getElementById("btn_cripto")

function criptografar(){
    if(entrada.value == ""){
        return alert("Digite algo")
        }
    else{
        const textoCriptografado = chaveCripto(entrada.value);
        saida.value = textoCriptografado
        entrada.value = ""
        aparece()
    }
}

cripto.onclick = criptografar

// Chave Descriptografia 

function chaveDescripto(stringDescripto){
    let matrizChaves = [
        ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]
    ]
    stringDescripto = stringDescripto.toLowerCase();
    for(let i = 0; i < matrizChaves.length;i++){
        if(stringDescripto.includes(matrizChaves[i][1])){
            stringDescripto = stringDescripto.replaceAll(matrizChaves[i][1],matrizChaves[i][0])
        }
    }

    return stringDescripto;
}

// Botão de Descriptografia 

var descripto = document.getElementById("btn_descripto")

function descriptografar(){
    if(entrada.value == ""){
        return alert("Digite algo")
        }
    else{
        const textoDescriptografado = chaveDescripto(entrada.value)
        saida.value = textoDescriptografado
        entrada.value = ""
        aparece();
    }
}

descripto.onclick = descriptografar

// Botão de copiar

var copia = document.getElementById("btn_copiar")

function copiar(){
    saida.select()
    saida.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(saida.value);
    alert("Copiado para área de transferência")
}

copia.onclick = copiar

// Botão de limpar

var limpa = document.getElementById("btn_limpar")

function limpar(){
    saida.value = ""
    esconde()
}

limpa.onclick = limpar


