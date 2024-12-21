function inverterString(str) {
    return str.split("").reverse().join("");
}

const texto = prompt("Digite uma string:");
console.log("String invertida:", inverterString(texto));