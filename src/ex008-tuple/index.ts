const dataClient1: readonly [number, string] = [1, 'João'];
const dataClient2: [number, string, string] = [1, 'João', 'Damasio'];
const dataClient3: [number, string, string?] = [1, 'João'];
const dataClient4: [number, string, ...string[]] = [1, 'João'];

//dataClient1[0] = 100;
// dataClient1[1] = 'Carlos';

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);

// Readonly array

const array2: readonly string[] = ['João', 'Maria', 'Carlos'];
const array1: ReadonlyArray<string> = ['João', 'Maria', 'Carlos'];

console.log(array1);
console.log(array2);
