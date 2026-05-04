export const person: {
    readonly id: number;
    nome: string;
    preco: number;
} = {
    id: 123,
    nome: "Café",
     preco: 9.99
};

person.id = 321;

console.log(person);
