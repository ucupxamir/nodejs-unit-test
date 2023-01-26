export const sumArray = (arr1, arr2) => {
    const joinArr = Array.from(new Set (arr1.concat(arr2)));

    const sum = (total, num) => {
        return total + num;
    };

    return joinArr.reduce(sum, 0);
}