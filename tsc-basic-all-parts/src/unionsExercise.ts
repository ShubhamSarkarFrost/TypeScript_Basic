// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore : number | boolean ;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff : number[] | string[] = ["apple", "banana", "cherry"]; // ✅ Valid (Array of strings)

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
    name : string,
    age : number,
    sport : "ski" | "snowboard",
    level : SkillLevel
}

const student1: SkiSchoolStudent = {
    name: "Alice",
    age: 15,
    sport: "ski",
    level: "Intermediate"
};

const student2: SkiSchoolStudent = {
    name: "Bob",
    age: 20,
    sport: "snowboard",
    level: "Advanced"
};

console.log(student1, student2);


// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type RGB = {
    r : number,
    g: number,
    b: number
}

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type HSL = {
    h: number,
    s: number,
    l: number
}

// Create an array called colors that can hold a mixture of RGB and HSL color types
// Create an array that can hold both RGB and HSL colors
let colors: (RGB | HSL)[] = [];

// Example usage:
colors.push({ r: 255, g: 0, b: 0 }); // Red in RGB
colors.push({ h: 0, s: 100, l: 50 }); // Red in HSL
colors.push({ r: 0, g: 255, b: 0 }); // Green in RGB
colors.push({ h: 120, s: 100, l: 50 }); // Green in HSL

console.log(colors);

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name: string | string[]): void {
    if (typeof name === "string") {
        console.log(`Hello, ${name}`);
    } else {
        name.forEach(person => console.log(`Hello, ${person}`));
    }
}

// Example usage:
greet("Alice");
// Output: Hello, Alice

greet(["Bob", "Charlie", "David"]);
