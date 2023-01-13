export const fibbonaci = (value) => {
    let n1 = 0, n2 = 1, nextTerm;

    const results = []
    for (let i = 1; i <= value; i++) {
        results.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return results;
}

console.log(fibbonaci(1))