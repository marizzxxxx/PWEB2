function contarVogais(str) {
    const vogais = "aeiou";
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            count++;
        }
    }

    return count;
}

const texto = prompt("Digite uma string:");
console.log("Quantidade de vogais:", contarVogais(texto));