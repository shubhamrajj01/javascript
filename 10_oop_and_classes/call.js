function setUserName (username){
    console.log('called');
    this.username= username;
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const newUser = new createUser('shubham', 'abc@example.com', '12345566')
console.log(newUser)