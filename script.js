//LOCALSTORAGE -> SCRIPT.JS

//QUANDO CARREGAR A PÁGINA, MOSTRAR O QUE JÁ ESTAVA SALVO
window.onload = function() {
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if(textoSalvo){
        document.getElementById("anotacao").value = textoSalvo
    }
}

//SALVAR QUANDO CLICA NO BOTÃO
function salvarAnotacao(){
    const conteudo = document.getElementById("anotacao").value 
    localStorage.setItem("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}