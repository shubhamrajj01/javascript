/* PRIMITIVE

    7TYPES:
    numbe,string,boolean,null,undefined,symbol,bigint
*/

/* REFERENCE TYPE(NON PRIMITIVE)
    
        object
        array
        function
    
*/
// NUMBER

// let num = 3.14
// console.log(num);
// console.log(typeof num);
// console.log(2 ** 53);
// console.log(typeof Infinity);

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

const myFunction = function(){
    console.log("Hello to this function")
}

const myArray = ["number", "class","roll"];
console.log(typeof myArray);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    Stack is used for Primitive Data Type
        stack give you the copy of the previous assign data;
        any changes in the that copy will not reflected in the original copy
    Heap is used for Reference Data Type
        heap give you the reference of the previous assign data;
        any changes in the that reference will reflected in the original copy
*/

let myName = "Shubham"

let anotherName = myName
anotherName = "ShubhamRaj"

console.log(myName);
console.log(anotherName);

// Here Original name(myName) has not been changed while changing the copy(anotherName)

let userOne = {
    name: "Shubham",
    age: 21
}

let userTwo = userOne

userTwo.age = 20

console.log(userOne);
console.log(userTwo);

// Here Original name(userOne) has been changed while changing the copy(userTwo)

let myArrayTwo = myArray;
myArrayTwo[0] = "string"
console.log(myArray);
console.log(myArrayTwo);