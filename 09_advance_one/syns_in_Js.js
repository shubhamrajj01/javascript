setTimeout(hello,3000);
function hello(){
    console.log('Hello');
}
console.log('World');


// setTimeout() is a method that calls a function or evaluates an expression after a specified number of milliseconds.

// The function is only executed once. If you need to repeat execution, use the setInterval() method. 
setTimeout(function(){
    console.log('Hello');
} ,1500) // this will execute after 1.5 seconds.

// var timer = setTimeout(function repeatThis(){
//     console.log('Hello');
//     timer = setTimeout(repeatThis, 1500);
// }   ,1500) // this will execute after 1.5 seconds. and then every 1.5 second thereafter

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log('data', dataId);
        if(getNextData){
            getNextData();
        }
    }, 1500);
}

//callback hell
getData(1, () => {
    console.log("getting data 2..................");
    getData(2, () => {
        console.log("getting data 3..................");
        getData(3, () => {
            console.log("getting data 4..................");
        })
    })
});
