function calcularImc() {
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let nome = document.getElementById("nome").value
    let resultado = document.getElementById("result")

    if(nome != "" && altura != "" && peso != ""){

    const valorImc = (peso/(altura * altura)).toFixed(2)
    let classificacao = ""
    if(valorImc < 18.5){
        classificacao = "Abaixo do peso"
    }else if(valorImc <= 25 && valorImc >= 18.5){
        classificacao = "Peso Normal, parabéns!"
    }else if(valorImc >= 25 && valorImc <= 30 ){
        classificacao = "Sobrepeso"
    }else if(valorImc >= 30 && valorImc <= 35 ){
        classificacao = "Obesidade Grau I"
    }else if(valorImc >= 35 && valorImc <= 40){
        classificacao = "Obesidade Grau II"
    }else {
        classificacao = "Obesidade Grau III"
    }  
   
    
    resultado.innerText = `Olá ${nome}! O valor do seu IMC é ${valorImc}, e você está com a classificação ${classificacao}.`

}else{
    resultado.innerText = "Preencha os campos!"
}
}