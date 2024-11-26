const nome = prompt("Qual é o seu nome?");
const idade = parseInt(prompt("Qual é a sua idade?"), 10);

if (idade >= 18) {
    console.log(`Olá, ${nome}! Você é maior de idade.`);
} else {
    console.log(`Olá, ${nome}! Você é menor de idade.`);
}