//singleton

//object literals
const mySymbol = Symbol("&*")

const JsUser = {
    name: 'Shubham',
    age: 21,
    "full name": 'Shubham raj',
    [mySymbol]: "%&*",//to decleare a symbol data type use a square bracket
    isStuding: true,
    languages: ['js', 'python', 'java', 'c++'],
    address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
    },
    getBirthYear: function () {
        return 2024 - this.age;
    },
}
console.log(JsUser.address.city);
console.log(JsUser["address"]["city"]);//both ways we can access the same data i.e. city in the address
console.log(JsUser["full name"]);//second on is useful to abstract these type of data, using "." we cannot access this data

console.log(`${JsUser.name}'s birth year is ${JsUser.getBirthYear()}`);
console.log(JsUser.getBirthYear());

console.log(JsUser[mySymbol]);
console.log(typeof JsUser[mySymbol]);

console.log(JsUser);
console.log(Object.keys(JsUser));


JsUser.greeting = function(){
    return `Hello ${this.name} your birth year is ${this.getBirthYear(this.age)}`;
}
console.log(JsUser.greeting());

//object constructor+++++++++++++++++++++++++++++++++++++++++++++++
const username ={}
const username1 =  new Object()

console.log((username.name))

const obj1 = {
    a:1,
    b:2,
    c:3
}
const obj2 = {
    d:1,
    e:2,
    f:3
}
// const obj3 = {
//     ...obj1,
//     ...obj2
// }
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const myArray = Array.from(String(obj3))
console.log(myArray);


//object destructuring and JSON++++++++++++++++++++++++++++++++++++
/*
JSON: JavaScript Object Notation
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.
JSON in an alternative to XML.
JSON is language independent
JSON is "self-describing" and easy to understand
JSON is similar to object but in Json no name is defined only with a'{}' also the keys written in double quotation.
*/
// {
//     "name": "Shubham",
//     "age": "21",
//     "isStuding": "true"
// }

[
    {
        "name": "Shubham",
        "age": 21,
        "isStuding": true,
    },
            //this is also a JSON
    {                                                       
        "name": "Shubham",
        "age": 21,
        "isStuding": true,
    }
]