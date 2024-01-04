function sayMyName(){console.log("S");
console.log("H");
console.log("U");
console.log("B");
console.log("H");
console.log("A");
console.log("M");
}
sayMyName();

function sayMyName(name){
    console.log(`Hello ${name}`);
}
sayMyName("Shubham");

// function addTwoNumbers(number1, number2 /*these are called parameters */){
//     console.log(number1+number2)
// }
// addTwoNumbers(5, 2 /*these are called arguments */)

function addTwoNumbers(number1, number2){
    return number1+number2
}

let sum = addTwoNumbers(4,5);
console.log(sum);

function loginUserMessage(username){
    if(!username){
        console.log("Please provide username");
        return

    }
    return `Hello ${username} welcome back`
}

console.log(loginUserMessage());

function calucaleCartPrice(...num1){
    return num1;
}
console.log(calucaleCartPrice(200, 400, 4004))