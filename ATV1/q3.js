const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Qual operação deseja realizar? (+, -, *, /)");

let resultado;
switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida.";
        break;
    default:
        resultado = "Operação inválida.";
}

console.log("Resultado:", resultado);