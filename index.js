// Função que calcula o saldo e define o nível do herói
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    

    // Estrutura de decisão para definir o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Variáveis iniciais
const nomeHeroi = "Nightwolf";
let derrotas = 15; 
let vitoriasAtuais = 76;


// Chamada da função e armazenamento do resultado em uma variável
let resultado = calcularRank(vitoriasAtuais, derrotas);

// Saída formatada
console.log(`O Herói ${nomeHeroi} tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
