const herois = require("./personagemMarvel.json");

function buscarPersonagemPorNome(listaHerois, termoBusca){
    const termoFormatado = termoBusca.toLowerCase().trim();

    return listaHerois.filter((heroi) => {
        const nomeHeroiMinusculo = heroi.nome.toLowerCase();

        return nomeHeroiMinusculo.includes(termoFormatado);
    })
}

const resultadoStark = buscarPersonagemPorNome(herois, "stark");
console.log("Resultado para 'stark':", resultadoStark);