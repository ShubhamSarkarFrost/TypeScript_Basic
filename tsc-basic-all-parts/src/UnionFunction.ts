function formatInput(input: number | string): string {
    if (typeof input === "number") {
        return `Number: ${input.toFixed(2)}`; // Format number to 2 decimal places
    } else {
        return `String: ${input.toUpperCase()}`; // Convert string to uppercase
    }
}

// Example usage:
console.log(formatInput(42));        // Output: "Number: 42.00"
console.log(formatInput("hello"));   // Output: "String: HELLO"
