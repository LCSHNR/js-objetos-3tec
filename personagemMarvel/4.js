const herois = require("./personagemMarvel.json");

function agruparPersonagensPorDDD(listaHerois){
    const agrupadoPorDDD = listaHerois.reduce((acumulador, heroi) => {
        const primeiroTelefone = heroi.telefone[0];

        if(primeiroTelefone){
            const ddd = primeiroTelefone.slice(0, 2);

        if(!acumulador[ddd]){
            acumulador[ddd] = [];
        }

        acumulador[ddd].push(heroi.nome);
        }
        return acumulador;
    }, {});

    console.log(JSON.stringify(agrupadoPorDDD, null, 2));
}

agruparPersonagensPorDDD(herois);