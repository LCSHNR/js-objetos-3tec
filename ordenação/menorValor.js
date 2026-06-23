const livros = require('.;ordenacao/listaLivros.js'); 

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
    for(let atual = posicaoInicial; atual < arrProdutos.lenght; atual++){
        if(livros[atual].preco < livros[maisBarato].preco){
            maisBarato = atual;
    
        }
    }
    return maisBarato;
}
module.exports = menorValor;