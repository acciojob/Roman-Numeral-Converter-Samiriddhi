/*function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

	let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


	
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman */

// Define the symbols for Roman numerals
const romanSymbols = [
  { value: 100000, symbol: 'C̅' },
  { value: 10000, symbol: 'X̅' },
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
];

// Function to convert a number to a Roman numeral
function convertToRoman(number) {
  if (number <= 0 || number > 100000) {
    return 'Invalid input';
  }

  let result = '';

  for (const symbol of romanSymbols) {
    while (number >= symbol.value) {
      result += symbol.symbol;
      number -= symbol.value;
    }
  }

  return result;
}

// Example usage:
const inputNumber = 798;
const romanNumeral = convertToRoman(inputNumber);
console.log(romanNumeral); // Output: "DCCXCVIII"



