function littleNum(...args: number[]):number{
    return args.reduce((num, smaller) => {
        return num < smaller ? num : smaller
    });
}

const result = littleNum(1, 90 , 6, )

console.log(result);
