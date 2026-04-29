function sumAll(...args: number[]): number {
    return args.reduce((accumulator, num) => accumulator + num, 0);
}

const sum = sumAll(10, 20, 30);

console.log(sum);
