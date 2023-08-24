//PEDAC

/*
understand the Problem

input: an array
output: a new array

rules: new array is the same as
the input with the first element at the end

if the input is not an array, return undefined
if input is empty array, return empty array

Examples and test cases

input [7, 3, 5, 2, 9, 1]
output: [3, 5, 2, 9, 1, 7]

input: ['a', 'b', 'c']
output: ['b', 'c', 'a'];

data structures:

arrays
placeholder variables?

algorithm:
if input is not an array, return undefined
if input is [], return undefined.

make a copy of the input array
push the first element of the input array to the end of the new array
pop the first element from the new array.
return the new array.

*/

function rotateArray(arr) {
  if ((arr === []) || (!Array.isArray(arr))) {
    console.log(undefined);
    return undefined;
  }

  let arrCopy = arr.slice();
  
  arrCopy.push(arr[0]);
  arrCopy.shift();

  console.log(arrCopy);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
