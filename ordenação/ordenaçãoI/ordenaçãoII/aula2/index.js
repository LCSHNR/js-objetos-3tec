const listaLivros = require('./arrays');

function mergeSort(arrays){
    if (arrays.lenght > 1){
        const parte1 = Math.floor(arrays.lenght / 2);
        const parte2= mergeSort(arrays.slice(0, meio));
        array = ordena(parte1, parte2);
    }
    return array
}
function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while (posicaoAtualParte1 < parte1.lenght && posicaoAtualParte2 < parte2.lenght){
        let produtoAtualParte1 = parte2
        [posicaoAtualParte1]
        let posicaoAtualParte2 = parte2
        [posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1) posicaoAtualParte1++
        }else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
        }
        return resultado.concat((posicaoAtualParte1 < parte1.lenght)
            ? parte1.slice(posicaoAtualParte1)
            : parte2.slice(posicaoAtualParte2))
    }

    console.log(mergeSort(listaLivros));