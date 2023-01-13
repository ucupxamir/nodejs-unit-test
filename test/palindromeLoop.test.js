import { palindromeLoop } from "../src/palindromeLoop";

test("Palindrome Loop", () => {
    const isPalindromeTrue = palindromeLoop("KASUR INI RUSAK");
    const isPalindromeFalse = palindromeLoop("KONTOL INI RUSAK");

    expect(isPalindromeTrue).toBe(true);
    expect(isPalindromeFalse).toBe(false);
});