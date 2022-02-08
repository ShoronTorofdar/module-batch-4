const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];

// // // using function
// // function doubleOld(number){
// //   return number * 2;
// // }


// using arrow function
const doubleIt = number => number * 5;

// for(const number of numbers) {
//   const result = doubleIt(number);
//  output.push(result);

// }
// console.log(output);


// // using map
const result = numbers.map(doubleIt);
console.log(result);


const result2 = numbers.map(element => element);
console.log(result2);


const test = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
const result3 = test.map(part => part * part);
console.log(result3);