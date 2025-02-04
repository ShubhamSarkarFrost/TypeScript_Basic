function reverseString(sentence:string): string {
   return  sentence.split(" ").reverse().join(" ");
}

const sentence: string = "A Quick brown Fox jumps over the lazy dog";
console.log(`Reverse Sentence is : ${reverseString(sentence)}`);