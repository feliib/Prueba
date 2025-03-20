// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Using map() to create a new array with each element multiplied by 2
let doubledNumbers = numbers.map(number => number * 2); // [2, 4, 6, 8, 10]
console.log(doubledNumbers);

// Using filter() to create a new array with only even numbers
let evenNumbers = numbers.filter(number => number % 2 === 0); // [2, 4]
console.log(evenNumbers);

// Using reduce() to calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15
console.log(sum);

// Using find() to find the first number greater than 3
let firstNumberGreaterThanThree = numbers.find(number => number > 3); // 4
console.log(firstNumberGreaterThanThree);

// Using every() to check if all numbers are even
let allEven = numbers.every(number => number % 2 === 0); // false
console.log(allEven);

// Using some() to check if any number is odd
let anyOdd = numbers.some(number => number % 2 !== 0); // true
console.log(anyOdd);

// Using forEach() to iterate over the array and print each element
numbers.forEach(number => console.log(number)); // Output: 1, 2, 3, 4, 5

// Using flat() to create a new array with all sub-array elements flattened
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = nestedArray.flat(); // [1, 2, 3, 4, 5, 6]
console.log(flattenedArray);

// Using flatMap() to create a new array with all sub-array elements flattened and multiplied by 2
let doubledFlattenedArray = nestedArray.flatMap(subArray => subArray.map(number => number * 2)); // [2, 4, 6, 8, 10, 12]
console.log(doubledFlattenedArray);

// Using sort() to sort the array in ascending order
let sortedNumbers = numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
console.log(sortedNumbers);

// Using concat() to combine two arrays into a new array
let combinedArray = numbers.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(combinedArray);

// Using join() to combine all elements of an array into a string
let joinedString = numbers.join(", "); // "1, 2, 3, 4, 5"
console.log(joinedString);