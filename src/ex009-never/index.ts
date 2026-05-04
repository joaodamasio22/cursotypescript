function neverReturns(): never {
    throw new Error("This function never returns!");
}

neverReturns();

