//+++++++++++++++++++ forEach +++++++++++

const coding = ["js", "java", "c++", "ruby", "python"];
coding.forEach(function (val) {
    console.log(val);
});
/* Syntax for forEach:
array.forEach(function(params){
    // statements
    }, thisArg)
*/

coding.forEach((val) => {//this is defined by Call back function
    console.log(val); 
});

const myCoding = [
    {
        name: "Javascript",
        type: "Frontend"
    },
    {
        name: "Java",
        type: "Backend"
    },
    {
        name: "C++",
        type: "Backend"
    },
    {
        name: "Python",
        type: "Backend"
    },
    {
        name: "Ruby",
        type: "Backend"
    }
]
myCoding.forEach((item) => {
    console.log(item.type);
})