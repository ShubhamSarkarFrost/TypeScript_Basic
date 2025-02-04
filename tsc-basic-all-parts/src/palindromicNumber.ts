function palindromicCheck(s:string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const  reverseStr = s.split('').reverse().join('');
    return  reverseStr === s
}

const inputString = "A man, a plan, a canal, Panama";
console.log(palindromicCheck(inputString));  // Output: true