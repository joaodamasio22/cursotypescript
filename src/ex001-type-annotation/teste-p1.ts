function encontrarMaiorEMenor(numeros: number[]): {
    maior: number;
    menor: number;
} {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return {
        maior,
        menor
    };
}

const resultado = encontrarMaiorEMenor([3, 1, 4, 1, 5, 9]);
console.log(resultado);
