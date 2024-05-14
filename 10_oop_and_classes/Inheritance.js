class User{
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`User ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, password, subject){
        super(username);
        this.password = password;
        this.subject = subject;
    }
    showInfo(){
        console.log(`Teacher ${this.username}, Subject:${this.subject}, Password:${this.password}`)
    }                
}

const teacher = new Teacher('Sudipta Ghosh', '123', 'Maths')
console.log(teacher.showInfo())
