// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
const twoFer = (userName: string): string => {
    if (userName != '') return `One for ${userName}, one for me`;
    return "You"
};

const presPerson = "Elton";
const noPerson = '';

console.log(twoFer(presPerson));
console.log(twoFer(noPerson));

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
const isLeapYear = (year: number): boolean => {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
};

const leapyear = 2024;
const noleapYear = 2011;

console.log(`Is ${leapyear} a leap Year : ${isLeapYear(leapyear)}`);
console.log(`Is ${noleapYear} a leap Year : ${isLeapYear(noleapYear)}`);
