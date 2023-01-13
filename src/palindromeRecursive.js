const ispalindromeRecursive = (value, index) => {
    if (index < parseInt(value.length) / 2) {
        if (value.charAt(index) !== value.charAt(value.length - index - 1)) {
            return false;
        } else {
            return ispalindromeRecursive(value, index + 1);
        }
    } else {
        return true;
    }
}

export const palindromeRecursive = (value) => {
    return ispalindromeRecursive(value, 0)
}