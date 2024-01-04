const user = {
    name: "Shubham",
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our website`);
    }
}
// user.welcomeMessage()
// // Object.freeze(user)
// user.name = "Raj" // this change will not come into effect if "Object.freeze(user)" is impemented
// user.welcomeMessage()

// 
const addTwo = (num1, num2)=> (num1 + num2);
console.log(addTwo(2,3));

const addThree = (num1, num2, num3)=> {
    return num1 +num2 + num3;
};
console.log(addThree(2,3,4));
