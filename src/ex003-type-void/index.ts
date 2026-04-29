function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: "Alice",
    sobrenome: "Smith",

    exibirNome(): void {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

semRetorno('Olá', 'mundo!');
pessoa.exibirNome();

export { pessoa }
