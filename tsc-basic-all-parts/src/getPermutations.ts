const getPremutations = (str: string, result: string = '', length:number): void =>{
    if(result.length === length){
        return;
    }

    for(let i = 0 ; i<str.length; i++){
        getPremutations(str, result+str[i],length);
    }
};

const inputString = "PQR";
const length = inputString.length;  // Length of the string, or the permutation length
console.log("The given string is:", inputString);
console.log("The permuted strings are:");
getPremutations(inputString, '', length);