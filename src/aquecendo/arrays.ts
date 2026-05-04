 export function sum(...args: number[]): number {
    return args.reduce((ac, sumA) => ac + sumA, 0);
}

const sumResult = sum(1, 2, 3, 4, 5);

console.log(sumResult);
