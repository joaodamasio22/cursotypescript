type Age = number;
type Person = {
    name: string;
    sobrenome: string;
    age: Age;
    salary: number;
    corPref?: CorPref;
}

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type CorPref = CorRGB | CorCMYK;

const person: Person = {
    name: 'João',
    sobrenome: 'Damasio',
    age: 30,
    salary: 5000,
}

const person2: Person = {
    name: 'Tatiane',
    sobrenome: 'Damasio',
    age: 18,
    salary: 10_000,
}

const person3: Person = {
    name: 'Maria',
    sobrenome: 'Damasio',
    age: 25,
    salary: 7000,
}

export function escolhaCor(person: Person, cor: CorPref): Person {
    return { ...person, corPref: cor};
}

export function aumentarSalario(person: Person, aumento: number): Person {
    return {...person, salary: person.salary + aumento};
}

export function diminuirSalario(person: Person, desconto: number): Person {
    return {...person, salary: person.salary - desconto};
}

export function dobrarSalario(person: Person): Person {
    return {...person, salary: person.salary * 2};
}


console.log(aumentarSalario(person, 1000));
console.log(diminuirSalario(person2, 500));
console.log(dobrarSalario(person3));
