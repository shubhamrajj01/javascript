// Truthy and Falsy values
/*
Falsy values:
    1. undefined
    2. null
    3. 0, -0
    4. ''
    5. NaN
    6. false
    7. BigInt 0n
    8. BigInt -0n

Truthy values:
    1. Everything else other than falsy values
    examples:
        1. '0'
        2. 'false'
        3. []
        4. {}
        5. function(){}
        6. ...
        7. " "

Note:
    1. false == 0 (true)
    2. false === 0 (false) // Triple Equal(===) is used to check if the data type is same or not
    3. true == 1 (true)
    4. true === 1 (false)
    5. null == undefined (true)
    6. null === undefined (false)
    7. null == 0 (false)
    8. null === 0 (false)
*/

if(true == 1 && null == undefined )
{
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

// NUllish Coalescing Operator (??): null undefined
/*
    1. If the value on the left is null or undefined, it will return the value on the right.
    2. If the value on the left is NOT null/undefined, it will return the value on the left.
    3. It will not return falsy values.
*/
let x = null ?? "hello";
console.log(x);

let y = undefined ?? null ?? "world";
console.log(y);

let z = 0 ?? 2;
console.log(z);

let z1 = null ?? 2==3;
console.log(z1);