const produto: {
    readonly id: number;
    nome: string;
    preco: number
} = {
    id: 123456789,
    nome: 'Seu nome',
    preco: 29.99
};

produto.nome = 'João Damasio';

console.log(produto);
