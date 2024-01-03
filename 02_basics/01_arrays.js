const myArr = [0, 1, 2, 3, 4, "Shubham", 'studing']
const myArray2 = myArr;
myArr.push(333,'fat',)
myArr.pop()
console.log(myArr);

// Arrays
// 1. Arrays are used to store multiple values in a single variable.
// 2. Arrays are created with square brackets.
// 3. Arrays can hold elements of different data types.
// 4. Arrays can hold objects, functions, and other arrays.
// 5. Arrays are mutable.
// 6. Arrays in JavaScript are zero-based, meaning the first element index is 0.   
// 7. Arrays have a length property, which allows you to see how many elements are stored in the array.
// 8. Arrays have their own methods, including .push() and .pop(), which add and remove elements from an array, respectively.
// 9. Arrays have many other methods that perform different functions, such as .slice() and .shift(), you can read the documentation for all of the array methods here.
// 10. Arrays are mutable, meaning they can be changed, and are one of the most commonly used data structures in JavaScript.


// Array Methods
// 1. .push() allows us to add items to the end of an array.
// 2. .pop() allows us to remove the last item of an array.
// 3. .shift() allows us to remove the first item of an array.
// 4. .unshift() allows us to add items to the beginning of an array.
// 5. .slice() allows us to copy a specific portion of an array.
// 6. .splice() allows us to remove/replace any number of consecutive elements from anywhere in an array.
// 7. .concat() allows us to combine arrays.
// 8. .join() allows us to join an array.
// 9. .indexOf() allows us to find the index of an item in an array.
// 10. .forEach() allows us to iterate through an array’s elements.
// 11. .map() allows us to iterate through an array’s elements, similar to forEach(), but it generates a new array instead of just returning values.
// 12. .filter() allows us to iterate through an array’s elements, similar to forEach(), but it generates an array based on conditional logic instead of just returning values.
// 13. .reduce() iterates through an array’s elements, similar to forEach(), but it generates a single value (i.e. string, number, object, array, etc.) as a result of combining the elements.
// 14. .sort() sorts the elements of an array.
// 15. .reverse() reverses the order of the elements in an array.
// 16. .split() turns a string into an array.
// 17. .join() turns an array into a string.
// 18. .toString() turns an array into a string.
// 19. .length() returns the length of an array.

myArr.unshift(99);
console.log(myArr);

const fruits = ['mango', 'guava', 'apple']
console.log(fruits.join(' ,')); // mango , guava , apple
const vegitables  = ['potato', 'tomato', 'baigan']

let mix = fruits.concat(vegitables);
console.log(mix);

let result = mix.splice(1,3);
console.log(result);
console.log(mix);
let num = ["1",'2','3'];
console.log(Array.from(String(num)))

console.log(Array.isArray("shubham"))
console.log(Array.of(fruits,vegitables))