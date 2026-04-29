function funcaoCadastro (usuario: {
    readonly id: number;
    nome: string;
}): string {
    return 'Usuário cadastrado com sucesso!'
}

const cadastro = {
    id: 122345,
    nome: 'João Damasio'
}

console.log(funcaoCadastro(cadastro));
