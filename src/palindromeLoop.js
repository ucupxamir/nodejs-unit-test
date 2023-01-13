export const palindromeLoop = (value) => {
    for (let i = 0; i < value.length; i++) {
        let indexAwal = i;
        let indexAkhir = value.length - i - 1;

        if (value.charAt(indexAwal) !== value.charAt(indexAkhir)) {
            return false
        }
    }
    return true
}