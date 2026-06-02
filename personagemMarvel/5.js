const herois = require("./personagemMarvel.json");

function encontrarTelefonesInvalidos(listaHerois) {
    const heroisComErro = [];

    listaHerois.forEach((heroi) => {
        const telfs = heroi.telefone;

        if (telfs && telfs.length >= 2) {
            const primeiro = telfs[0];
            const segundo = telfs[1];

            const ddd = primeiro.slice(0, 2);
            const restoDoNumero = primeiro.slice(2);
            const segundoTelefoneEsperado = `${ddd}9${restoDoNumero}`;

            if (segundo !== segundoTelefoneEsperado) {
                heroisComErro.push(heroi.nome);
            }
        } else {
            heroisComErro.push(heroi.nome);
        }
    });

    if (heroisComErro.length === 0) {
        console.log("Sucesso: Todos os personagens possuem telefones válidos!");
    } else {
        console.log("Atenção! Personagens com telefones inválidos:");
        console.log(heroisComErro);
    }
}

encontrarTelefonesInvalidos(herois);