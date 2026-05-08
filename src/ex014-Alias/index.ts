type Age = number;
type Person = {
    name: string;
    sobrenome: string;
    age: Age;
    salary: number;
    corPref?: string;
}

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type CorPref = CorRGB | CorCMYK;

const person: Person = {
    name: 'João',
    sobrenome: 'Damasio',
    age: 30,
    salary: 5000,
    corPref: 'Red'
}

export function escolhaCor(person: Person, cor: CorPref): Person {
    return { ...person, corPref: cor};
}

console.log(escolhaCor(person, 'Cyan'));
console.log(person);
