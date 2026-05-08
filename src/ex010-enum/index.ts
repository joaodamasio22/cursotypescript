enum Cores {
    VERMELHO = 10,
    AZUL = 20,
    AMARELO = 30
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
}


function escolherACor(cor: Cores): void {
    console.log(Cores[cor])
}

escolherACor(Cores.AZUL)
