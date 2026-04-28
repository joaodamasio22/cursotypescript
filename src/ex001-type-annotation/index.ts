
// Tipos Básicos (aqui ocorre inferência de tipo)
let nome: string = "João";
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol("simbolo");
//let big: bigint = 10n;

// Arrays

let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ["a", "b", "c"];
let arrayStrings2: string[] = ["a", "b", "c"];


// Objetos

let pessoa: {nome: string; idade:number; adulto?:boolean} = {
    nome: "João",
    idade: 30
}

// Função

function soma(x:number, y:number) {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
