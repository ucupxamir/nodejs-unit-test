import { palindromeRecursive } from "../src/palindromeRecursive";

test("Palindrome Recursive", () => {
    const isPalindromeTrue = palindromeRecursive("KASUR INI RUSAK");
    const isPalindromeFalse = palindromeRecursive("PASAR");

    expect(isPalindromeTrue).toBe(true);
    expect(isPalindromeFalse).toBe(false);
});