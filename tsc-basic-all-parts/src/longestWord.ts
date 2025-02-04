function longestWord(sentence: string): string {
const words = sentence.split(' ');
let longestWord = ' ';

   for(let word of words){
       if(word.length > longestWord.length){
           longestWord = word;
       }
   }
   return  longestWord
}

const sentence = 'A Quick brown Fox jumps over a Lazy Dog';
console.log(`Longest word is ${longestWord(sentence)}`);

