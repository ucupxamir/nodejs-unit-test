export const factorialTailRecursive = (total, value) => {
    if (value <= 0) {
        return total;
    } else {
        return factorialTailRecursive(total * value, value - 1);
    }
}