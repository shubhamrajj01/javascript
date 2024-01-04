// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed right after it is created.
// It has no name and is not stored in a variable.
// **To avoid the pollution of the gobal variable we use IIFE**


(function chai(){
    console.log(`DB CONNECTED`);
});

/*//()(); First paranthesis is for the defination of the function and 
// second paranthesis is for the execution of the function
// donot forget to give a semicolon to end the IIFE
// Syntax:
// (function(){
//     //code
// })();
*/
(function aurCode(){
    console.log(`DB CONNECTED...`);// This is an example of named IIFE

})();

( () => {
    console.log(`DB CONNECTED Again`);// This is a normal IIFE
})();

// IIFE can take parameters just like normal functions
(function chai(name){
    console.log(`DB CONNECTED ${name}`);
})("Shubham");

// IIFE can also return values from inside its body but it will be ignored by JavaScript interpreter
// IIFE can also return values from inside itself, but remember it will be lost as soon as the function is executed
