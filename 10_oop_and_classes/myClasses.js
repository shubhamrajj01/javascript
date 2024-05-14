class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;   
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User('name', 'abc@example.com', '12345677')
console.log(newUser.encryptPassword())
console.log(newUser.changeUsername());
