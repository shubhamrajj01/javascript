const myNums = [1, 2, 3, 4, 5,];

let sum = myNums.reduce(function(accumulator,currentValue)  {
    console.log(`current value: ${currentValue} and accumulator: ${accumulator}`);
    return accumulator + currentValue;
},3);
console.log(sum);


// Implementing it with the help of callback function
let sum1 = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0);
console.log(sum1);

const  shoppingCart =[
        {
            name: "Apple",
            type: "fruit",
            quantity: 2,
            price: 0.5
        },
        {
            name: "Orange",
            type: "fruit",
            quantity: 3,
            price: 0.5
        },
        {
            name: "Cucumber",
            type: "vegetable",
            quantity: 1,
            price: 0.5
        },
    ]

let total = shoppingCart.reduce((acc, item) =>(acc + item.price),0);
console.log(total);