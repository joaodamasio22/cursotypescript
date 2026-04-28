// Utilizar o Any em ULTIMO CASO, pois ele pode causar problemas de tipagem e dificultar a manutenção do código.
function showMessage(msg: any) {
    return msg;
}

console.log(showMessage("Hello World!"));
console.log(showMessage(42));
console.log(showMessage({ name: "Alice", age: 30 }));
