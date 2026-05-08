type TemNome = { nome:string }
type TemSobreNome = { sobrenome:string }
type TemIdade = { idade:number }
type Person = TemNome & TemSobreNome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; // A

export const person: Person = {
    nome: 'João',
    sobrenome: 'Damasio',
    idade: 18,
};

console.log(person);
