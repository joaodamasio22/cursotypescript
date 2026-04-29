const funcionario: {
    readonly registro: number;
    nome: string;
    cargo: string;
    salario: number
} = {
    registro: 1998,
    nome: "João Damasio",
    cargo: 'Developer Senior',
    salario: 20000
};

funcionario.cargo = "Engenheiro De Software";
funcionario.salario = 35000;

console.log(funcionario);
