const livros = require('.;ordenacao/listaLivros.js'); 

let maisBarato = 0;

for(let atual = 0; atual < livros.lenght; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;

    }
}

console.log(`O livro mais barato custa $ (livros[maisBarato].preco})`)