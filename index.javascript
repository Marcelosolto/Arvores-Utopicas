// este arquivo é somente leitura, você não pode gravá-lo

function alturaArvoreUtopica(ciclos) {

    let tamanhoArvore = 1;

    for(let i = 0;i < ciclos;i++)

    if(i & 1)

    tamanhoArvore +=1;

    else

    tamanhoArvore *=2;
    
    return tamanhoArvore;
}

console.log(alturaArvoreUtopica(0));

console.log(alturaArvoreUtopica(1));

console.log(alturaArvoreUtopica(2));

console.log(alturaArvoreUtopica(3));