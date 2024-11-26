const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const num3 = parseFloat(prompt("Digite o terceiro número:"));

const numeros = [num1, num2, num3];
numeros.sort((a, b) => a - b);

console.log("Números em ordem crescente:", numeros);