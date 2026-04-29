export function togetherName(...args: string[]): string[] {
    return args.map((valor) => valor.toLowerCase());
}

const wholeNum = togetherName('JOÃO', 'VITOR', 'DAMASIO');

console.log(wholeNum);
