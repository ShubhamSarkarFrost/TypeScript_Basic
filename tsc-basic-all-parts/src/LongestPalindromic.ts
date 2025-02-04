function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;  // Edge case: Single character or empty string

    let start = 0, end = 0;  // To store the start and end indices of the longest palindrome

    // Function to expand around the center and find the longest palindrome
    const expandAroundCenter = (left: number, right: number): number[] => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];  // Return the bounds of the palindrome
    };

    for (let i = 0; i < s.length; i++) {
        const [oddStart, oddEnd] = expandAroundCenter(i, i);  // Odd length palindrome
        const [evenStart, evenEnd] = expandAroundCenter(i, i + 1);  // Even length palindrome

        // Compare and update the longest palindrome found so far
        if (oddEnd - oddStart > end - start) {
            start = oddStart;
            end = oddEnd;
        }
        if (evenEnd - evenStart > end - start) {
            start = evenStart;
            end = evenEnd;
        }
    }

    return s.slice(start, end + 1);  // Return the longest palindromic substring
}

const inputString = "babad";
console.log(longestPalindrome(inputString));  // Output: "bab" or "aba"