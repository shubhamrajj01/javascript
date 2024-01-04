/*
There are two types of Scopes
1. Global Scope
2. Local Scope{}
Global scope is the parent for all other scopes, it has access to everything in your application
Local scope is the child of global scope, it has access to everything in its parent scope
and anything new that you declare within local scope will not be accessible from outside of it</s>
*/

function one() {
    const a = 1;
    function two() {
        const b = 2;
        function three() {
            const c = 3;
            console.log(a, b, c);
        }
        three();
        console.log(a, b);
    }
    two();
    console.log(a);
}
// one();

if (true) {
    const four = 4;
    console.log(four);
    if (four == 4) {
        const five = 5;
        console.log(five, four);
    }
    // console.log(five);
}

// console.log(four);

//+++++++++++++++++ Hoisting ++++++++++++
/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
*/

let age = 28;
console.log(age);
// let age = 30; //error here due to redeclaration
// console.log(city); //error here due to non declearation
const city = "Berlin";
console.log(city);

console.log(name); // no error in case of "var" data type declearation
var name = "John";
console.log(name);
function hoistFunction() {
    console.log(age);
    var age = 26;
    console.log(age);
}

scopeHoisting();
hoistFunction();
function scopeHoisting() {
    // console.log(age); // cannot access this
    let age = 26;
    console.log(age);
}

// console.log(age);

/* const and let are not hoisted but declared at the top of their respective scopes
var is hoisted and initialized to undefined
var is function scoped
let and const are block scoped
*/
