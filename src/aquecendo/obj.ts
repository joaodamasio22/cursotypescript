const person: {
    nome: string;
    idade: number;
    curso: string;
    matriculado: boolean;
} = {
    nome: "João Damasio",
    idade: 18,
    curso: "Ciência da Computação - EEP",
    matriculado: true
};

person.matriculado = false;

console.log(person);
