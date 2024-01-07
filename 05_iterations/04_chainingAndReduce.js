const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let newNums = myNums.filter((nums) => nums > 4);
let newNums1 = myNums.filter((nums) => {
    return nums > 4;// writing the return is nessary here othewise it retunting nothing(remember arrows concepts)

})
console.log(newNums);

// +++++++++++++++ CHAINING ++++++++++

/*
    * Chaining is a mechanism to run multiple methods on the same object one after another.
    * Chaining is very popular in JavaScript libraries.   
*/

let theNums = myNums
        .map((num) =>  {return num * 10})
        .map((diffNum) => diffNum + 10)
        .filter((num) => num > 45 );
console.log(theNums);

// +++++++++++++++ REDUCE ++++++++++

/*
    * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
    * The reducer function takes four arguments:
        * Accumulator (acc)
        * Current Value (cur)
        * Current Index (idx)
        * Source Array (src)
    * Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
    * Syntax:
        * arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
*/


