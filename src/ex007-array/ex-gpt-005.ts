function average(...args: number[]): number {
    const soma = args.reduce((ac, av) => ac + av);
    return soma / args.length;
}

const values = average(10, 20, 40, 2);
console.log(values)
