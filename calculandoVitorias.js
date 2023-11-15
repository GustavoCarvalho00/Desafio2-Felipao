const prompt = require('prompt-sync')();

let vitorias = prompt("Digite seu numero de vitorias ")
let derrotas = prompt("Digite seu numero de derrotas ")
let rank = calculandoRank(vitorias,derrotas)

function calculandoRank(vitorias,derrotas){
    let eloRank = (vitorias - derrotas)
    return eloRank

}

switch (true) {
    case vitorias != 0:
        console.log("você atualmente é Ferro")
        break
    
    case vitorias > 10 && vitorias <= 20:
        console.log("você atualmente é Bronze")
        break
    
    case vitorias > 20 && vitorias <= 50:
        console.log("você atualmente é Prata")
        break
    
    case vitorias > 50 && vitorias <= 80:
        console.log("você atualmente é Ouro")
        break
    
    case vitorias > 80 && vitorias <= 90:
        console.log("você atualmente é Diamante")
        break
    
    case vitorias > 91 && vitorias <= 100:
        console.log("você atualmente eh Lendário")
        break
    
    case vitorias >= 101:
        console.log("voce atualmente eh Imortal")
        break
    
    default:
        console.log("Parabéns você é muito ruim")
}