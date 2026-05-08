function addOrConcat(
    a: string | number | boolean,
    b: string | number | boolean): number | string {

    if(typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

console.log(addOrConcat(1, 2))
console.log(addOrConcat("1", "2"))
console.log(addOrConcat(1, "2"))
console.log(addOrConcat("1", 2))
console.log(addOrConcat(true, true))
