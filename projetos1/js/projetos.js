//Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] 
//e precisamos criar um código em JavaScript para encontrar o valor 20.
//
//Para isso, temos que escolher entre realizar uma busca linear ou 
//binária de acordo com a que for mais adequada para essa situação.
//
//Codifique a solução mais eficiente para buscar o número 20 no array.
//
//Realize essa atividade, suba esse arquivo em um drive com link público e
//compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

function buscar(array, busca) {
    let inicio = 0;
    let fim = array.length - 1;
    while(inicio <= fim){
        const meio = Math.floor((inicio + fim)/2);

        if(array[meio] === busca){
            return meio;
        }
        if(array[meio] > busca){
            fim = meio - 1;
        }
        else {
            inicio = meio + 1;
        }
    }
    return - 1;
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const busca = 20;
const indice = buscar(array, busca);

if (indice !== -1){
    window.alert("o elemento "+ busca + " foi encontrado no indice: " + indice);
}
else{
    window.alert("o elemento "+ busca + " não foi encontrado");
}