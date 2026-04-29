function togetherName(...args: string[]): string{
    return args.reduce((ac, names) => ac + ' ' + names);
}

const yourName = togetherName('João', 'Vitor', 'Damasio').toLowerCase

console.log(yourName);
