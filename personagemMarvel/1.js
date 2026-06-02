const herois = require("./personagemMarvel.json");

function filtrarApartamentosHerois(listaDeHerois){
    return listaDeHerois.filter((heroi) => {
        return heroi.endereco.apartamento === true;
    });
}

const heroisDoApartamento = filtrarApartamentosHerois(herois);

console.log(heroisDoApartamento);