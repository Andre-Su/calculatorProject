//caixas de texto
const numBox1 = document.getElementById("num1");
const numBox2 = document.getElementById("num2");

//botões
const adicButton = document.getElementById("addButton");
const subtButton = document.getElementById("subtractButton");
const multButton = document.getElementById("multiplyButton");
const divsButton = document.getElementById("divideButton");

//linha de resultado
const resultLine = document.getElementById("result");

//função de adição
function adicionar(){
    var valor1 = parseFloat(numBox1.value);
    var valor2 = parseFloat(numBox2.value);
    if(isNaN(valor1)||isNaN(valor2)){
        resultLine.textContent = "Digite algum valor!";
    }else{
        resultLine.textContent = valor1+valor2;}
}
//função de subtração
function subtrair(){
    var valor1 = parseFloat(numBox1.value);
    var valor2 = parseFloat(numBox2.value);
    if(isNaN(valor1)||isNaN(valor2)){
        resultLine.textContent = "Digite algum valor!";
    }else{
    resultLine.textContent = valor1-valor2;}
}
//função de multiplicação
function multiplicar(){
    var valor1 = parseFloat(numBox1.value);
    var valor2 = parseFloat(numBox2.value);
    if(isNaN(valor1)||isNaN(valor2)){
        resultLine.textContent = "Digite algum valor!";
    }else{
    resultLine.textContent = valor1*valor2;}
}
//função de divisão
function dividir(){
    var valor1 = parseFloat(numBox1.value);
    var valor2 = parseFloat(numBox2.value);
    if(isNaN(valor1)||isNaN(valor2)){
        resultLine.textContent = "Digite algum valor!";
    }else{
    resultLine.textContent = valor1/valor2;}
}

//escutadores de botão
adicButton.addEventListener("click", adicionar);
subtButton.addEventListener("click", subtrair);
divsButton.addEventListener("click", dividir);
multButton.addEventListener("click", multiplicar);