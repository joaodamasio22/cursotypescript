const usuario: {
    readonly id: number;
    nome: string;
    email: string;
    ativo: boolean
} = {
    id: 123456789,
    nome: 'João Damasio',
    email: 'joaodamasio039@gmail.com',
    ativo: true
};

usuario.ativo = false;

console.log(usuario);
