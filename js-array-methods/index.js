//some - checks if some elements of the array match the condition. returns true if yes
let arr1 = [10, 9, 2, 4, 5];
console.log(arr1.some((item) => item < 5)); //returns true

//every - checks if all elements of the arry match the condition. returns true if yes
let arr2 = [10, 20, 30, 40, 50];
console.log(arr2.every((item) => item > 0)); //true
console.log(arr2.every((item) => item > 20)); //false

//reduce - gets a consolidated sum. Takes accumulator, current value, current index & array
let arr3 = [
  { name: "Ronaldo", goals: 45 },
  { name: "Messi", goals: 55 },
  { name: "Lewandowski", goals: 60 },
  { name: "Rooney", goals: 49 },
  { name: "Neymar", goals: 53 },
];
console.log(
  arr3.reduce((sum, item) => {
    return sum + item.goals;
  }, 0)
);
console.log(arr3.reduce((sum, item) => sum + item.goals, 0)); //shorter version. Love ES6

//Filter - Filtering out all things you don't want. returns  filtered elements

//using the same array as above
console.log(arr3.filter((item) => item.goals > 50));

//Flat - flattens the arrays within an array. You can specify the depth you want to if you want

let arr4 = [1, 2, 3, 4, [5, 6, [7, 8]]];
console.log(arr4.flat()); //returns [1,2,3,4,5,6,[7,8]]
console.log(arr4.flat(2)); //returns [1,2,3,4,5,6,7,8]

//findIndex - returns the index of the first element that matches the condition

let arr5 = [1, 2, 4, 7, 19, 60, 99, 123];
function isEven(num) {
  if (num % 2 == 0) {
    return 1;
  } else return 0;
}
console.log(arr5.findIndex(isEven)); //returns 1 because 2 is even

//find - returns element rather than the index.
//using the same arr as above
console.log(arr5.find((item) => item % 2 == 0)); //returns 2 as it is the first element that is even

//sort - sorts the array. For numbers need to provide a comparing function
//using the same arr as above
console.log(arr5.sort((a, b) => a - b)); // ARR In ascending order
console.log(arr5.sort((a, b) => b - a)); // ARR In descending order

//concat - concats|merges two arrays
let arr6 = ["Kams", "Nata", "Seere"];
let arr7 = [10, 7, 11];
console.log(arr6.concat(arr7)); // returns [ 'Kams', 'Nata', 'Seere', 10, 7, 11 ]

//Fill - fills an array with a static value. replaces the existing arr also with the static val since its done to same reference
let arr8 = arr7.fill(69);
console.log(arr8, arr7);

//Includes - checks an array if a particular element exists or not.
let arr9 = ["nata", "ronny", "disha"];
console.log(arr9.includes("disha")); //returns true.
console.log(arr9.includes("Nata")); //returns false. Includes is case-sensitive

//reverse - Reverses an array. Changes the original array too. Since same object referred.
let arr10 = arr9.reverse();
console.log(arr10, arr9);

//map - creates a new array with computations of the function provided
let arr11 = [
  { fname: "John", lname: "Doe" },
  { fname: "Jane", lname: "Doe" },
  { fname: "Hannibal", lname: "Lector" },
  { fname: "Tyler", lname: "Durden" },
];
console.log(arr11.map((item) => item.fname)); //want a list of all fnames

//foreach - Is synchronous (no promises). Doesn't create a new array
console.log(arr11.forEach((item) => item.fname)); //will return undefined
arr11.forEach((item) => console.log(item.fname)); //will now return the fnames

