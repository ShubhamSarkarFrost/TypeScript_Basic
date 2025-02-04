function removeDuplicateAndSort(word:string): string {

    const uniqueChars = new Set(word);

    const sortedChars = Array.from(uniqueChars).sort().join('');

    return  sortedChars

}

const inputString = "cbadefbca";
console.log(removeDuplicateAndSort(inputString));  // Output: "abcdef"