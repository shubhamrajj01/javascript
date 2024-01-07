// ForOf loop and ForIn loop
/*
Use cases of for-of and for-in loop loop:
for-of loop is used to iterate over the values in an iterable object like an array, a string, a map, a set, etc.
for-in loop is used to iterate over the keys of an object.

Syntax for for-of loop:
for (const [key,value] of map) {
    console.log(key, value);
}
Syntax for for-in loop:
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
}


*/

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);
map.set('e', 5);
map.set('f', 6);
map.set('g', 7);
map.set('a', 2);// No duplicates keys are allowed in "Map" but its value will be updated.

for (const [key,value] of map) {
    console.log(key, value);
}

//+++++++++++++++++++ Map +++++++++++
/**
    * Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
    * Methods and properties are:
    * new Map() – creates the map.
    * map.set(key, value) – stores the value by the key.
    * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    * map.has(key) – returns true if the key exists, false otherwise.
Format/Syntax:
* map.forEach((value, key, mapObj)=>{...}); - executes a provided
function once per each key/value pair in the Map object, in insertion order.

 */

for (const key in map) {
    console.log(key);
    
}

const myObject = {
    js: 'Javascript',
    php: 'PHP',
    cpp: 'c++',
    py: 'Python',
    java: 'Java'
}
// for (const [key,value] of myObject) {
//     console.log(key, value);    
// }

for(const key in myObject){
    console.log(`for "${myObject[key]}" the shortcut is "${key}"`);
}

for (const key in map) {
    console.log("key");  // Though it will be compiled without giving any error but it will not show any result as "map" is not iteratable to for-in loop so w 
}

