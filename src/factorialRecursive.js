export const factorialRecursive = (value,) => {
    if (value <= 0) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1)
    }
}