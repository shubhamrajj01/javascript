const user = {
    username: 'shubham',
    login: 9,
    password: 'password123',

    getUserDetails(){
        console.log(this)
    }
}

user.getUserDetails()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User('shubham', 9, true);
console.log(userOne);