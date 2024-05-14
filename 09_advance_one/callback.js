// if a function is passed as an argument to another function, the function is called a callback function.
// The function that accepts other functions as arguments is called a higher-order function.
// A higher order function can take one or more functions as an argument or return a function as a result.

//+++++++++++++++++++ Callback +++++++++++
function sum(a, b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(4,5,sum);  //9

calculator(4,5,function(a,b){
    console.log(a-b);
});  // -1

// callback hell or pyramid of doom: when you have nested callbacks inside callbacks inside callbacks.

setTimeout(function(){
    console.log('Hello');
    setTimeout(function(){
        console.log('World');
        setTimeout(function(){
            console.log('!');
        },1000);
    },1000);
} ,2000) // this will execute after 2 seconds.