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
    }
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
const obj3 = Object.assign
console.log(obj3);