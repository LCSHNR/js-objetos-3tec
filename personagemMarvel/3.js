const herois = require("./personagemMarvel.json");

function geraEtiquetasDeEntrega(listaHerois){
    listaHerois.forEach((heroi) => {
        const end = heroi.endereco;

let etiqueta = `${heroi.nome} - ${end.logradouro}, ${end.numero}`;

if (end.complemento) {
            etiqueta += ` [${end.complemento}]`;
    }

if (end.cep) {
            etiqueta += ` - ${end.cep}`;
        }

console.log(etiqueta);

    });
}

geraEtiquetasDeEntrega(herois);