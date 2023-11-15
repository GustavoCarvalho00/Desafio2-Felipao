const prompt = require('prompt-sync')();

let vitorias = prompt("Digite seu numero de vitorias ");
let derrotas = prompt("Digite seu numero de derrotas ");
let rank = calculandoRank(vitorias, derrotas);

function calculandoRank(vitorias, derrotas) {
    let eloRank = vitorias - derrotas;
    return eloRank;
}

switch (true) {
    case rank > 0 && rank <= 10:
        console.log("Você atualmente é Ferro e tem " + vitorias + " vitórias");
        break;

    case rank > 10 && rank <= 20:
        console.log("Você atualmente é Bronze e tem " + vitorias + " vitórias");
        break;

    case rank > 20 && rank <= 50:
        console.log("Você atualmente é Prata e tem " + vitorias + " vitórias");
        break;

    case rank > 50 && rank <= 80:
        console.log("Você atualmente é Ouro e tem " + vitorias + " vitórias");
        break;

    case rank > 80 && rank <= 90:
        console.log("Você atualmente é Diamante e tem " + vitorias + " vitórias");
        break;

    case rank > 91 && rank <= 100:
        console.log("Você atualmente é Lendário e tem " + vitorias + " vitórias");
        break;

    case rank >= 101:
        console.log("Você atualmente é Imortal e tem " + vitorias + " vitórias");
        break;

    default:
        console.log("Parabéns, você é muito ruim");
}
